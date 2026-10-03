-- D1 migration: bảng lưu thông tin đặt bàn KAKAQ.
-- Chạy bằng: wrangler d1 migrations apply kakaq-db --remote

CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  guests INTEGER NOT NULL,
  date TEXT NOT NULL,          -- YYYY-MM-DD
  time TEXT NOT NULL,          -- HH:MM
  notes TEXT NOT NULL DEFAULT '',
  notify_sent INTEGER NOT NULL DEFAULT 0,  -- 1 = đã gửi Telegram thành công
  notify_error TEXT,                       -- lỗi gửi tin (nếu có)
  created_at TEXT NOT NULL                 -- ISO timestamp
);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings (date);
CREATE INDEX IF NOT EXISTS idx_bookings_code ON bookings (booking_code);
