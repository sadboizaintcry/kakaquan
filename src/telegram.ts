// Gửi thông báo đặt bàn qua Telegram Bot API.
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

export interface TelegramEnv {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

export interface NotifyResult {
  ok: boolean;
  messageId?: string;
  error?: string;
}

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
    `🎫 Mã đặt bàn: ${b.bookingCode}`,
    `👤 Tên khách: ${b.name}`,
    `☎️ SĐT: ${b.phone}`,
    `👥 Số người: ${b.guests}`,
    `📅 Ngày: ${formatDateVN(b.date)}`,
    `🕕 Giờ: ${b.time}`,
  ];
  if (b.notes.trim()) lines.push(`📝 Ghi chú: ${b.notes.trim()}`);
  return lines.join("\n");
}

/**
 * Gửi tin nhắn tới Telegram của chủ quán qua Bot API.
 * Không throw — mọi lỗi được trả về trong NotifyResult để caller tự log.
 * Token Telegram không hết hạn, không có giới hạn "7 ngày tương tác" như Zalo.
 */
export async function sendTelegramNotification(
  booking: BookingInfo,
  env: TelegramEnv,
): Promise<NotifyResult> {
  const token = env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return {
      ok: false,
      error: "missing-config: thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID",
    };
  }

  let res: Response;
  try {
    res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatBookingMessage(booking),
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
    /* giữ {} nếu Telegram trả về non-JSON */
  }

  if (data && data.ok === true) {
    return { ok: true, messageId: String(data?.result?.message_id ?? "") };
  }
  return {
    ok: false,
    error: `telegram-api: code=${data?.error_code ?? res.status} message=${data?.description ?? "unknown"}`,
  };
}
