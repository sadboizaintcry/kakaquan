// Gửi thông báo đặt bàn qua Zalo Official Account API.
// Chỉ dùng Web Standards (fetch) — tương thích 100% với Cloudflare Workers.
// Không dùng bất kỳ thư viện Node.js nào.

export interface BookingInfo {
  bookingCode: string;
  name: string;
  phone: string;
  guests: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  notes: string;
}

export interface ZaloEnv {
  ZALO_OA_ACCESS_TOKEN?: string;
  ZALO_OA_ID?: string;
  ZALO_OWNER_USER_ID?: string;
}

export interface ZaloResult {
  ok: boolean;
  messageId?: string;
  error?: string;
}

const ZALO_SEND_URL = "https://openapi.zalo.me/v3.0/oa/message/cs";

/** YYYY-MM-DD → DD/MM/YYYY cho tin nhắn dễ đọc. */
export function formatDateVN(iso: string): string {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y}` : iso;
}

/** Nội dung tin nhắn gửi cho chủ quán. */
export function formatBookingMessage(b: BookingInfo): string {
  const lines = [
    "🔔 ĐẶT BÀN MỚI — KAKAQ BBQ",
    "",
    `- Mã đặt bàn: ${b.bookingCode}`,
    `- Tên khách: ${b.name}`,
    `- SĐT: ${b.phone}`,
    `- Số người: ${b.guests}`,
    `- Thời gian: ${b.time} ngày ${formatDateVN(b.date)}`,
  ];
  if (b.notes.trim()) lines.push(`- Ghi chú: ${b.notes.trim()}`);
  return lines.join("\n");
}

/**
 * Gửi tin nhắn text tới Zalo của chủ quán qua OA API.
 * Không throw — mọi lỗi được trả về trong ZaloResult để caller tự log.
 *
 * LƯU Ý QUAN TRỌNG (giới hạn của Zalo): tin nhắn CS chỉ gửi được tới user
 * đã follow OA và có tương tác trong 7 ngày gần nhất. Chủ quán nên nhắn
 * tin cho OA của mình định kỳ để giữ cửa sổ 7 ngày luôn mở.
 */
export async function sendZaloNotification(
  booking: BookingInfo,
  env: ZaloEnv,
): Promise<ZaloResult> {
  const token = env.ZALO_OA_ACCESS_TOKEN?.trim();
  const ownerId = env.ZALO_OWNER_USER_ID?.trim();

  if (!token || !ownerId) {
    return {
      ok: false,
      error:
        "missing-config: thiếu ZALO_OA_ACCESS_TOKEN hoặc ZALO_OWNER_USER_ID",
    };
  }

  let res: Response;
  try {
    res = await fetch(ZALO_SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token, // header chuẩn theo tài liệu Zalo
        Authorization: `Bearer ${token}`, // dự phòng cho bản API mới
      },
      body: JSON.stringify({
        recipient: { user_id: ownerId },
        message: { text: formatBookingMessage(booking) },
      }),
    });
  } catch (e) {
    return {
      ok: false,
      error: `network: ${e instanceof Error ? e.message : String(e)}`,
    };
  }

  let data: any = {};
  try {
    data = await res.json();
  } catch {
    /* giữ {} nếu Zalo trả về non-JSON */
  }

  if (data && data.error === 0) {
    return { ok: true, messageId: data?.data?.message_id };
  }
  return {
    ok: false,
    error: `zalo-api: code=${data?.error ?? res.status} message=${data?.message ?? "unknown"}`,
  };
}
