import type { Metadata } from "next";
import { HomePage } from "@/components/sites/etiquetasdecanarias/HomePage";
import { SearchResults } from "@/components/sites/etiquetasdecanarias/SearchResults";

type Props = { searchParams: Promise<{ s?: string | string[] }> };

function query(s: string | string[] | undefined) {
  return (Array.isArray(s) ? s[0] : s)?.trim();
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const s = query((await searchParams).s);
  return s !== undefined ? { title: { absolute: `Has buscado ${s} - Canarias Línea Gráfica` } } : {};
}

/** WordPress serves search results from the home URL (/?s=…), so this route does too. */
export default async function Home({ searchParams }: Props) {
  const s = query((await searchParams).s);
  return s !== undefined ? <SearchResults query={s} /> : <HomePage />;
}
