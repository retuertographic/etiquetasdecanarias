import { PRODUCTS } from "./catalog";
import { ProductGrid, Section } from "./ui";

function normalize(text: string) {
  return text
    .replace(/<[^>]+>/g, " ")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/** Matches WordPress' default search: every term must appear in the title or description. */
export function searchProducts(query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return PRODUCTS;
  return PRODUCTS.filter((p) => {
    const haystack = normalize(`${p.title} ${p.content}`);
    return terms.every((t) => haystack.includes(t));
  });
}

export function SearchResults({ query }: { query: string }) {
  const results = searchProducts(query);
  return (
    <Section>
      <h1 className="mb-[40px] text-center text-[44.8px] leading-[1.2] text-[#0f131f] max-[600px]:text-[28px]">Resultados de la búsqueda de «{query}»</h1>
      {results.length ? <ProductGrid products={results} /> : <p className="text-center">No se han encontrado resultados.</p>}
    </Section>
  );
}
