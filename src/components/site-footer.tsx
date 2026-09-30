import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            BBQ nướng Hàn Quốc. Thịt tươi, than hồng, bàn gọn.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-subtle">
            Liên kết
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#trang-chu" className="text-muted hover:text-fg">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#thuc-don" className="text-muted hover:text-fg">
                Thực đơn
              </a>
            </li>
            <li>
              <a href="#dat-ban" className="text-muted hover:text-fg">
                Đặt bàn
              </a>
            </li>
            <li>
              <a href="#lien-he" className="text-muted hover:text-fg">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-subtle">
            Liên hệ
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>88 Võ Văn Tần, Quận 3, TP.HCM</li>
            <li>
              <a href="tel:0901888247" className="hover:text-fg">
                0901 888 247
              </a>
            </li>
            <li>11:00 – 23:00 hàng ngày</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-subtle sm:px-6">
          © {new Date().getFullYear()} KAKAQ BBQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
