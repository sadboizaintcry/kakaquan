import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href="#trang-chu"
      className={cn("group flex items-center gap-3", className)}
      aria-label="KAKAQ BBQ — về trang chủ"
    >
      <span
        className="grid size-9 place-items-center rounded-md bg-accent text-accent-fg font-display text-xl font-semibold leading-none"
        aria-hidden
      >
        K
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display text-[1.35rem] font-semibold tracking-[0.22em] text-fg">
          KAKAQ
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.42em] text-muted">
            BBQ
          </span>
        ) : null}
      </span>
    </a>
  );
}
