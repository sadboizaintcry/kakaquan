import { Check, Copy } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  notes: string;
};

type SubmittedState = FormState & { bookingCode: string };

const EMPTY: FormState = {
  name: "",
  phone: "",
  guests: "2",
  date: todayISO(),
  time: "18:00",
  notes: "",
};

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** YYYY-MM-DD → DD/MM/YYYY để hiển thị cho khách. */
function formatDateVN(iso: string) {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y}` : iso;
}

function isPhone(value: string) {
  const digits = value.replace(/[\s.-]/g, "");
  return /^(0|\+84)[0-9]{9,10}$/.test(digits);
}

export function ReservationSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState<SubmittedState | null>(null);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const minDate = useMemo(() => todayISO(), []);
  const resultRef = useRef<HTMLDivElement>(null);

  // Đặt bàn thành công → tự cuộn tới panel thông báo
  useEffect(() => {
    if (submitted) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitted]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(data: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (data.name.trim().length < 2) next.name = "Nhập họ tên";
    if (!isPhone(data.phone)) next.phone = "Số điện thoại chưa đúng";
    const guests = Number(data.guests);
    if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
      next.guests = "Từ 1 đến 20 người";
    }
    if (!data.date || data.date < minDate) next.date = "Chọn ngày từ hôm nay";
    if (!data.time) next.time = "Chọn giờ";
    else {
      const [h, m] = data.time.split(":").map(Number);
      const minutes = (h ?? 0) * 60 + (m ?? 0);
      if (minutes < 11 * 60 || minutes > 22 * 60 + 30) {
        next.time = "Nhà hàng nhận bàn 11:00–22:30";
      }
    }
    return next;
  }

  async function copyBookingCode() {
    if (!submitted) return;
    try {
      await navigator.clipboard.writeText(submitted.bookingCode);
    } catch {
      // Fallback cho trình duyệt không hỗ trợ Clipboard API
      const ta = document.createElement("textarea");
      ta.value = submitted.bookingCode;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    setCopied(false);
    const next = validate(form);
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          guests: Number(form.guests),
          date: form.date,
          time: form.time,
          notes: form.notes.trim(),
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        bookingCode?: string;
        error?: string;
        details?: Record<string, string>;
        message?: string;
      } | null;
      if (!res.ok || !data?.ok || !data.bookingCode) {
        if (data?.error === "validation" && data.details) {
          setErrors(data.details as Partial<Record<keyof FormState, string>>);
          return;
        }
        throw new Error(data?.message ?? "Gửi yêu cầu thất bại, thử lại sau.");
      }
      setSubmitted({ ...form, bookingCode: data.bookingCode });
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Gửi yêu cầu thất bại, thử lại sau.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="dat-ban" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
            Đặt bàn
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            Giữ chỗ trước, nướng đúng giờ
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Cuối tuần bàn than thường kín. Gửi yêu cầu, quán gọi lại trong ngày
            để xác nhận.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li>Giờ nhận bàn: 11:00 – 22:30</li>
            <li>Nhóm trên 10 người vui lòng ghi chú</li>
            <li>Giữ bàn 15 phút so với giờ đã hẹn</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-surface p-6 shadow-[0_0_0_1px_rgba(244,239,232,0.08)] sm:p-8">
          {submitted ? (
            <div
              ref={resultRef}
              className="flex min-h-80 flex-col items-start justify-center"
            >
              <span className="grid size-11 place-items-center rounded-full bg-accent/15 text-accent">
                <Check className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-3xl text-fg">
                Đã nhận yêu cầu
              </h3>
              <p className="mt-2 text-muted">
                {submitted.name} · {submitted.guests} người ·{" "}
                {formatDateVN(submitted.date)} lúc {submitted.time}
              </p>
              <div className="mt-3 flex items-center gap-1 rounded-lg bg-bg py-1 pr-1 pl-3">
                <p className="font-mono text-sm tracking-wider text-accent">
                  Mã đặt bàn: {submitted.bookingCode}
                </p>
                <button
                  type="button"
                  onClick={copyBookingCode}
                  className="grid size-8 place-items-center rounded-md text-muted transition hover:bg-elevated hover:text-fg"
                  aria-label="Sao chép mã đặt bàn"
                  title="Sao chép mã đặt bàn"
                >
                  {copied ? (
                    <Check className="size-4 text-accent" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
              {copied ? (
                <p className="mt-2 text-xs text-accent">Đã sao chép mã đặt bàn</p>
              ) : null}
              <p className="mt-4 text-sm text-subtle">
                Quán sẽ liên hệ bạn để xác nhận bàn. Giữ mã đặt bàn khi đến
                quán.
              </p>
              <Button
                variant="outline"
                className="mt-8"
                onClick={() => {
                  setSubmitted(null);
                  setForm(EMPTY);
                  setCopied(false);
                }}
              >
                Gửi yêu cầu khác
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5" noValidate>
              <Field label="Họ tên" error={errors.name} htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Nguyễn Văn An"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>
              <Field
                label="Số điện thoại"
                error={errors.phone}
                htmlFor="phone"
              >
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0901 234 567"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Số người" error={errors.guests} htmlFor="guests">
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={20}
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                  />
                </Field>
                <Field label="Ngày" error={errors.date} htmlFor="date">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </Field>
                <Field label="Giờ" error={errors.time} htmlFor="time">
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  />
                </Field>
              </div>
              <Field label="Ghi chú" htmlFor="notes">
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Sinh nhật, ghế trẻ em, gần cửa sổ…"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </Field>
              {serverError ? (
                <p className="text-sm text-accent" role="alert">
                  {serverError}
                </p>
              ) : null}
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={sending}
              >
                {sending ? "Đang gửi…" : "Gửi yêu cầu đặt bàn"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
