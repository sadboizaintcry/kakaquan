import { useMemo, useState } from "react";
import { CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

type Filter = "all" | MenuCategory;

export function MenuSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () =>
      filter === "all"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="thuc-don" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              Thực đơn
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
              Món signature
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Thịt nướng, set cho bàn, đồ uống. Giá niêm yết theo phần.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Lọc thực đơn"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ease-out",
                  filter === cat.id
                    ? "bg-accent text-accent-fg"
                    : "text-muted shadow-[0_0_0_1px_rgba(244,239,232,0.12)] hover:text-fg hover:shadow-[0_0_0_1px_rgba(244,239,232,0.28)]",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <article className="group h-full overflow-hidden rounded-2xl bg-elevated shadow-[0_0_0_1px_rgba(244,239,232,0.08)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-subtle">{item.korean}</p>
                  <div className="mt-1 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-medium text-fg">{item.name}</h3>
                    <p className="shrink-0 font-medium tabular-nums text-accent">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
