import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/images/hero-samgyeopsal.jpg",
    alt: "Ba chỉ heo nướng trên bàn than KAKAQ",
  },
  {
    src: "/images/hero-galbi.jpg",
    alt: "Sườn bò ướp nướng cháy cạnh",
  },
  {
    src: "/images/hero-set.jpg",
    alt: "Set nướng Hàn Quốc đầy đủ bàn",
  },
  {
    src: "/images/hero-interior.jpg",
    alt: "Không gian nhà hàng BBQ KAKAQ",
  },
];

const INTERVAL = 5600;

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  const jump = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => go(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [go, paused, reduceMotion]);

  return (
    <section
      id="trang-chu"
      className="relative h-[100svh] min-h-[36rem] overflow-hidden bg-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        touchX.current = null;
        if (dx > 48) go(-1);
        else if (dx < -48) go(1);
      }}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={cn(
              "h-full w-full object-cover",
              i === index && !reduceMotion && "hero-kenburns",
            )}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-accent">
          Korean BBQ · Sài Gòn
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-fg sm:text-6xl lg:text-7xl">
          BBQ Nướng KAKAQ — Hương vị Hàn Quốc đích thực
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Thịt tươi mỗi ngày. Bàn nướng than. Không gian tối, ấm, gọn như Seoul
          về đêm.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="cream">
            <a href="#thuc-don">Xem thực đơn</a>
          </Button>
          <Button asChild size="lg">
            <a href="#dat-ban">Đặt bàn</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Ảnh banner">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ảnh ${i + 1}`}
              onClick={() => jump(i)}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out",
                i === index ? "w-8 bg-accent" : "w-2.5 bg-fg/35 hover:bg-fg/55",
              )}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full bg-bg/40"
            aria-label="Ảnh trước"
            onClick={() => go(-1)}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full bg-bg/40"
            aria-label="Ảnh tiếp"
            onClick={() => go(1)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}
