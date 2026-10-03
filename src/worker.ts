import { Hono, type Context } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";
import {
  sendZaloNotification,
  type BookingInfo,
  type ZaloEnv,
} from "./zalo";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Env = {
  DB: D1Database;
  ADMIN_TOKEN?: string;
} & ZaloEnv;

const app = new Hono<{ Bindings: Env }>();

// ---------------------------------------------------------------------------
// Helpers (Web Standards — chạy 100% trên Workers)
// ---------------------------------------------------------------------------

/** YYYY-MM-DD của "hôm nay" theo giờ Việt Nam (Asia/Ho_Chi_Minh). */
function todayVN(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** Mã đặt bàn dạng KAKAQ-XXXXXX, sinh bằng Web Crypto. */
function makeBookingCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // bỏ I, O, 0, 1 dễ nhầm
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  let code = "";
  for (const b of bytes) code += alphabet[b % alphabet.length];
  return `KAKAQ-${code}`;
}

/** Chuẩn hoá SĐT: bỏ khoảng trắng, dấu chấm, dấu gạch ngang. */
function normalizePhone(raw: string): string {
  return raw.replace(/[\s.\-]/g, "");
}

// ---------------------------------------------------------------------------
// Validation — giữ đúng rule của form hiện tại
// ---------------------------------------------------------------------------

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Nhập họ tên").max(100, "Họ tên quá dài"),
  phone: z
    .string()
    .trim()
    .transform(normalizePhone)
    .refine((v) => /^(0|\+84)[0-9]{9,10}$/.test(v), "Số điện thoại chưa đúng"),
  guests: z.coerce.number().int("Số người phải là số nguyên").min(1).max(20),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Ngày chưa đúng định dạng")
    .refine((v) => v >= todayVN(), "Chọn ngày từ hôm nay"),
  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Giờ chưa đúng định dạng")
    .refine((v) => {
      const [h, m] = v.split(":").map(Number);
      const minutes = h * 60 + m;
      return minutes >= 11 * 60 && minutes <= 22 * 60 + 30;
    }, "Nhà hàng nhận bàn 11:00–22:30"),
  notes: z.string().trim().max(500, "Ghi chú quá dài").optional().default(""),
});

type BookingInput = z.infer<typeof bookingSchema>;

// ---------------------------------------------------------------------------
// Middleware: CORS, error handling, 404 cho /api/*
// ---------------------------------------------------------------------------

app.use("/api/*", cors());

app.onError((err, c) => {
  console.error("[worker] unhandled error:", err);
  return c.json(
    { ok: false, error: "internal", message: "Lỗi hệ thống, thử lại sau." },
    500,
  );
});

app.notFound((c) => {
  if (c.req.path.startsWith("/api/")) {
    return c.json({ ok: false, error: "not-found" }, 404);
  }
  // Path còn lại do Static Assets phục vụ (SPA fallback đã cấu hình trong wrangler.toml).
  return c.text("Not found", 404);
});

// ---------------------------------------------------------------------------
// GET /api/health
// ---------------------------------------------------------------------------

app.get("/api/health", (c) =>
  c.json({ ok: true, time: new Date().toISOString() }),
);

// ---------------------------------------------------------------------------
// POST /api/bookings — tạo đặt bàn + gửi Zalo cho chủ quán
// ---------------------------------------------------------------------------

app.post("/api/bookings", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json(
      { ok: false, error: "bad-request", message: "Body phải là JSON." },
      400,
    );
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    const details: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "_";
      if (!details[key]) details[key] = issue.message;
    }
    return c.json({ ok: false, error: "validation", details }, 400);
  }
  const input: BookingInput = parsed.data;

  // Ghi DB (D1). Thử lại tối đa 3 lần nếu hy hữu trùng mã đặt bàn.
  let bookingCode = "";
  let inserted = false;
  for (let attempt = 0; attempt < 3 && !inserted; attempt++) {
    bookingCode = makeBookingCode();
    try {
      await c.env.DB.prepare(
        `INSERT INTO bookings (booking_code, name, phone, guests, date, time, notes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
        .bind(
          bookingCode,
          input.name,
          input.phone,
          input.guests,
          input.date,
          input.time,
          input.notes,
          new Date().toISOString(),
        )
        .run();
      inserted = true;
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (!msg.includes("UNIQUE constraint failed")) throw e; // lỗi thật → onError
      // trùng mã → vòng lặp sinh mã mới
    }
  }
  if (!inserted) {
    return c.json(
      { ok: false, error: "internal", message: "Không tạo được mã đặt bàn, thử lại." },
      500,
    );
  }

  const booking: BookingInfo = {
    bookingCode,
    name: input.name,
    phone: input.phone,
    guests: input.guests,
    date: input.date,
    time: input.time,
    notes: input.notes,
  };

  // Gửi Zalo cho chủ quán. LỖI ZALO KHÔNG BAO GIỜ LÀM FAIL BOOKING.
  let zaloSent = false;
  try {
    const result = await sendZaloNotification(booking, c.env);
    zaloSent = result.ok;
    if (result.ok) {
      await c.env.DB.prepare(
        `UPDATE bookings SET zalo_sent = 1 WHERE booking_code = ?`,
      )
        .bind(bookingCode)
        .run();
    } else {
      console.error(`[zalo] gửi thất bại cho ${bookingCode}:`, result.error);
      await c.env.DB.prepare(
        `UPDATE bookings SET zalo_error = ? WHERE booking_code = ?`,
      )
        .bind(result.error ?? "unknown", bookingCode)
        .run();
    }
  } catch (e) {
    console.error(`[zalo] exception cho ${bookingCode}:`, e);
  }

  return c.json({ ok: true, bookingCode, zaloSent }, 201);
});

// ---------------------------------------------------------------------------
// Admin tiện ích (tuỳ chọn, bảo vệ bằng ADMIN_TOKEN)
// ---------------------------------------------------------------------------

function isAdmin(c: Context<{ Bindings: Env }>): boolean {
  const token = c.req.query("token") ?? c.req.header("x-admin-token") ?? "";
  return !!c.env.ADMIN_TOKEN && token === c.env.ADMIN_TOKEN;
}

/** GET /api/admin/zalo-followers?token=... — liệt kê follower để lấy user_id chủ quán. */
app.get("/api/admin/zalo-followers", async (c) => {
  if (!isAdmin(c)) return c.json({ ok: false, error: "unauthorized" }, 401);
  const token = c.env.ZALO_OA_ACCESS_TOKEN?.trim();
  if (!token) {
    return c.json(
      { ok: false, error: "missing-config", message: "Chưa cấu hình ZALO_OA_ACCESS_TOKEN." },
      500,
    );
  }
  const url =
    "https://openapi.zalo.me/v2.0/oa/getfollowers?data=" +
    encodeURIComponent(JSON.stringify({ offset: 0, count: 50 }));
  const res = await fetch(url, { headers: { access_token: token } });
  const data = await res.json().catch(() => ({}));
  return c.json(data);
});

/** POST /api/admin/zalo-test?token=... — gửi tin nhắn test tới chủ quán. */
app.post("/api/admin/zalo-test", async (c) => {
  if (!isAdmin(c)) return c.json({ ok: false, error: "unauthorized" }, 401);
  const raw: unknown = await c.req.json().catch(() => ({}));
  const body = (raw ?? {}) as Partial<BookingInfo>;
  const booking: BookingInfo = {
    bookingCode: "KAKAQ-TEST01",
    name: body.name ?? "Nguyễn Văn Test",
    phone: body.phone ?? "0901234567",
    guests: body.guests ?? 2,
    date: body.date ?? todayVN(),
    time: body.time ?? "18:00",
    notes: "Tin nhắn TEST — nhận được là thành công, bỏ qua nội dung.",
  };
  const result = await sendZaloNotification(booking, c.env);
  return c.json({ ok: result.ok, detail: result });
});

export default app;
