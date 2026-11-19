import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PRODUCTS, SHOP_PAGE_SIZE } from "@/components/sites/etiquetasdecanarias/catalog";
import { ShopPage } from "@/components/sites/etiquetasdecanarias/ShopPage";

export const metadata: Metadata = { title: "Catálogo" };
export const dynamicParams = false;

export function generateStaticParams() {
  const pages = Math.ceil(PRODUCTS.length / SHOP_PAGE_SIZE);
  return Array.from({ length: pages - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export default async function Page({ params }: { params: Promise<{ n: string }> }) {
  const n = Number((await params).n);
  if (!Number.isInteger(n) || n < 2) notFound();
  return (
    <Suspense>
      <ShopPage page={n} />
    </Suspense>
  );
}
