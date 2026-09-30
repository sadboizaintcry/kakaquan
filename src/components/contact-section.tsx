import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

const LAT = 10.7828;
const LNG = 106.693;
const OSM_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.008},${LAT - 0.006},${LNG + 0.008},${LAT + 0.006}&layer=mapnik&marker=${LAT},${LNG}`;
const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`;

export function ContactSection() {
  return (
    <section id="lien-he" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
          Liên hệ
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
          Tìm quán
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6 rounded-2xl bg-elevated p-6 shadow-[0_0_0_1px_rgba(244,239,232,0.08)] sm:p-8">
            <Info
              icon={MapPin}
              label="Địa chỉ"
              value="88 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh"
              hint="Địa chỉ mẫu — bạn có thể thay sau"
            />
            <Info
              icon={Phone}
              label="Điện thoại"
              value="0901 888 247"
              href="tel:0901888247"
            />
            <Info
              icon={Clock}
              label="Giờ mở cửa"
              value="11:00 – 23:00 · Thứ 2 đến Chủ nhật"
            />

            <div>
              <p className="text-xs uppercase tracking-widest text-subtle">
                Mạng xã hội
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Social href="https://facebook.com" label="Facebook" />
                <Social href="https://instagram.com" label="Instagram" />
                <Social href="https://zalo.me" label="Zalo" />
              </div>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-2xl bg-elevated shadow-[0_0_0_1px_rgba(244,239,232,0.08)]">
            <iframe
              title="Bản đồ KAKAQ BBQ"
              src={OSM_SRC}
              className="map-embed h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-elevated to-transparent"
              aria-hidden
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 inline-flex h-11 items-center gap-2 rounded-full bg-bg px-4 text-sm text-fg shadow-[0_0_0_1px_rgba(244,239,232,0.16)] transition-[background-color] duration-150 hover:bg-elevated"
            >
              Mở Google Maps
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
  hint,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-md bg-bg text-accent">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-subtle">{label}</p>
        {href ? (
          <a href={href} className="mt-1 block text-fg hover:text-accent">
            {value}
          </a>
        ) : (
          <p className="mt-1 text-fg">{value}</p>
        )}
        {hint ? <p className="mt-1 text-xs text-subtle">{hint}</p> : null}
      </div>
    </div>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 items-center rounded-full px-4 text-sm text-fg shadow-[0_0_0_1px_rgba(244,239,232,0.14)] transition-[box-shadow,background-color] duration-150 hover:bg-bg hover:shadow-[0_0_0_1px_rgba(244,239,232,0.3)]"
    >
      {label}
    </a>
  );
}
