import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, PRODUCT_BY_SLUG } from "@/components/sites/etiquetasdecanarias/catalog";
import { ProductPage } from "@/components/sites/etiquetasdecanarias/ProductPage";
import { pageMetadata, summarize } from "@/components/sites/etiquetasdecanarias/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCT_BY_SLUG.get(slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: summarize(p.content), path: `/producto/${slug}/`, image: p.gallery[0]?.src ?? p.image });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCT_BY_SLUG.get(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
