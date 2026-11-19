import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/components/sites/etiquetasdecanarias/catalog";
import { ProductGrid, Section } from "@/components/sites/etiquetasdecanarias/ui";

export const dynamicParams = false;

const TAGS = [...new Set(PRODUCTS.flatMap((p) => p.tags))];

export function generateStaticParams() {
  return TAGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug} archivos` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = PRODUCTS.filter((p) => p.tags.includes(slug));
  if (!products.length) notFound();
  return (
    <>
      <Section>
        <h1 className="text-[44.8px] leading-[1.2] text-[#2077a8] max-[600px]:text-[32px]">{slug}</h1>
      </Section>
      <Section className="pt-10 max-[600px]:pt-6">
        <ProductGrid products={products} />
      </Section>
    </>
  );
}
