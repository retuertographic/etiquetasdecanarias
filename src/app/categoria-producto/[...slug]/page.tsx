import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_BY_SLUG, PRODUCT_BY_SLUG, type CatalogProduct } from "@/components/sites/etiquetasdecanarias/catalog";
import { ProductGrid, Section } from "@/components/sites/etiquetasdecanarias/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG.get(slug.join("/"));
  return { title: category ? `${category.title} archivos` : undefined };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG.get(slug.join("/"));
  if (!category) notFound();
  const products = category.products.map((s) => PRODUCT_BY_SLUG.get(s)).filter((p): p is CatalogProduct => Boolean(p));
  return (
    <>
      <Section>
        <h1 className="text-[44.8px] leading-[1.2] text-[#2077a8] max-[600px]:text-[32px]">{category.title}</h1>
      </Section>
      <Section className="pt-10 max-[600px]:pt-6">
        <ProductGrid products={products} />
      </Section>
    </>
  );
}
