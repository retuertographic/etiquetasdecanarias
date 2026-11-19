"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CATEGORIES, CATEGORY_BY_SLUG, SHOP_PAGE_SIZE, productsByTitle } from "./catalog";
import { ProductGrid, Section } from "./ui";

const FILTERS = [{ slug: "*", title: "Cualquiera" }, ...CATEGORIES.filter((c) => !c.parent).map((c) => ({ slug: c.slug, title: c.title }))];

function pageHref(page: number, category: string) {
  const path = page > 1 ? `/tienda/page/${page}/` : "/tienda/";
  return category !== "*" ? `${path}?product_cat=${category}` : path;
}

/** "Catálogo" (/tienda/): category radio filter, 3-column grid, 12 per page. */
export function ShopPage({ page }: { page: number }) {
  const router = useRouter();
  const params = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const category = params.get("product_cat") ?? "*";
  const selected = CATEGORY_BY_SLUG.get(category);
  const all = productsByTitle().filter((p) => !selected || selected.products.includes(p.slug));
  const pages = Math.max(1, Math.ceil(all.length / SHOP_PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = all.slice((current - 1) * SHOP_PAGE_SIZE, current * SHOP_PAGE_SIZE);

  return (
    <Section className="pt-12" inner="max-w-[1260px]">
      <h1 className="mb-[40px] text-center text-[44.8px] leading-[1.2] text-[#0f131f] max-[600px]:text-[32px]">Catálogo</h1>
      <div className="flex gap-6 max-[600px]:flex-col">
        <form className="w-[242px] shrink-0 pt-6 max-[600px]:w-full max-[600px]:pt-0" onSubmit={(e) => e.preventDefault()} aria-label="Filtros">
          {/* Below 600px the source collapses the filter behind a "Filtros" button. */}
          <button
            type="button"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((o) => !o)}
            className="mb-2 hidden rounded-[45px] border border-[#e3e7f0] px-5 py-2 text-[15px] max-[600px]:inline-block"
          >
            Filtros
          </button>
          <div className={cn(!filtersOpen && "max-[600px]:hidden")}>
            <div className="mb-2 text-base leading-[28px] font-bold">Categoría</div>
            {FILTERS.map((f) => (
              <label key={f.slug} className="mb-[5.76px] flex cursor-pointer items-center gap-2 text-[14.4px] leading-[21.6px]">
                <input
                  type="radio"
                  name="product_cat"
                  value={f.slug}
                  checked={category === f.slug}
                  onChange={() => router.push(pageHref(1, f.slug), { scroll: false })}
                  className="peer sr-only"
                />
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#f2f2f2] shadow-[0_0_0_1px_#e3e7f0] peer-checked:[&>span]:block peer-focus-visible:ring-2 peer-focus-visible:ring-[#49a7d1]">
                  <span className="hidden h-[6px] w-[6px] rounded-full bg-[#4a4a4a]" />
                </span>
                <span className={category === f.slug ? "font-bold" : undefined}>{f.title}</span>
              </label>
            ))}
          </div>
        </form>
        <div className="flex-1">
          <div className="pt-0">
            <ProductGrid products={visible} columns={3} />
          </div>
          {pages > 1 && (
            <nav aria-label="Paginación" className="mt-12 flex items-center justify-center gap-1">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) =>
                n === current ? (
                  <span key={n} aria-current="page" className="m-[3.2px] flex h-14 w-14 items-center justify-center rounded-full bg-[#49a7d1] text-[22.4px] text-white">
                    {n}
                  </span>
                ) : (
                  <Link
                    key={n}
                    href={pageHref(n, category)}
                    className="m-[3.2px] flex h-14 w-14 items-center justify-center rounded-full text-[22.4px] text-[#4a4a4a] hover:bg-[#f2f4f7]"
                  >
                    {n}
                  </Link>
                ),
              )}
              {current < pages && (
                <Link href={pageHref(current + 1, category)} aria-label="Siguiente" className="flex h-14 w-14 items-center justify-center text-[#4a4a4a] hover:text-[#FF6900]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </Section>
  );
}
