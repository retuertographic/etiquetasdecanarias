import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { productHref, type CatalogProduct } from "./catalog";

/** Impreza "l-section" with the 64px/40px padding and 1260px content width. */
export function Section({ children, className, inner }: { children: ReactNode; className?: string; inner?: string }) {
  return (
    <section className={cn("px-10 py-16 max-[600px]:px-4 max-[600px]:py-10", className)}>
      <div className={cn("mx-auto max-w-[1260px]", inner)}>{children}</div>
    </section>
  );
}

/** Centered blue section heading with the thin rule used on product pages. */
export function RuledHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="mb-[5px] text-center text-[32px] leading-none text-[#2077a8] max-[600px]:text-[26px] max-[600px]:leading-[1.2]">{children}</h2>
      <div className="flex h-[10px] items-center">
        <div className="h-px w-full bg-[#e3e7f0]" />
      </div>
    </>
  );
}

export function PageTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h1 className={cn("text-[44.8px] leading-[1.2] max-[600px]:text-[32px]", className)}>{children}</h1>;
}

export const BUTTON =
  "inline-flex items-center justify-center rounded-[45px] bg-[#FF6900] px-[18px] py-3 text-[15px] leading-[18px] text-white transition-colors hover:bg-[#49a7d1] disabled:cursor-not-allowed disabled:opacity-60";

export function Button({ className, ...props }: ComponentProps<"button">) {
  return <button className={cn(BUTTON, className)} {...props} />;
}

export const INPUT =
  "w-full rounded-[4px] bg-[#f2f2f2] px-6 text-base text-[#4a4a4a] shadow-[0_0_0_1px_#e3e7f0] outline-none placeholder:text-[#8a8a8a] focus:shadow-[0_0_0_2px_#49a7d1]";

/** WooCommerce "shop modern" product card (white card, image, centered title). */
export function ProductCard({ product, titleColor = "#2077a8", aspect = "3 / 4" }: { product: CatalogProduct; titleColor?: string; aspect?: string }) {
  const href = productHref(product.slug);
  return (
    <article className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[4.8px] bg-white shadow-[0_0.48px_0.96px_rgba(0,0,0,0.1),0_1.92px_5.76px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.15)]">
        <Link href={href} className="relative block w-full" style={{ aspectRatio: aspect }}>
          <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1025px) 280px, (min-width: 601px) 45vw, 90vw" className="object-cover" />
        </Link>
        <div className="flex flex-1 items-start justify-center px-4 pt-4 pb-[19px]">
          <h2 className="text-center text-base leading-[1.2]" style={{ color: titleColor }}>
            <Link href={href} className="transition-colors hover:text-[#FF6900]">
              {product.title}
            </Link>
          </h2>
        </div>
      </div>
    </article>
  );
}

/** Responsive grid of product cards (Impreza grid with 24px item padding). */
export function ProductGrid({ products, columns = 4, titleColor }: { products: CatalogProduct[]; columns?: 3 | 4; titleColor?: string }) {
  return (
    <div className={cn("-m-6 flex flex-wrap max-[600px]:-m-2")}>
      {products.map((p) => (
        <div
          key={p.slug}
          className={cn("p-6 max-[600px]:w-1/2 max-[600px]:p-2 min-[601px]:max-[1024px]:w-1/2", columns === 4 ? "min-[1025px]:w-1/4" : "min-[1025px]:w-1/3")}
        >
          <ProductCard product={p} titleColor={titleColor} />
        </div>
      ))}
    </div>
  );
}

export function Notice({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mb-6 bg-[rgba(73,167,209,0.15)] px-6 py-4 text-[14.4px] leading-[28px] text-[#4a4a4a]", className)}>{children}</div>;
}
