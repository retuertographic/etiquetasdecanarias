"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { SearchResults } from "./SearchResults";

/** Shows search results when the home URL carries ?s=…, like WordPress. */
export function SearchSwitch({ home }: { home: ReactNode }) {
  const query = useSearchParams().get("s")?.trim();

  // The static export only knows the home title; keep the search title (as on the source)
  // even if Next re-applies its metadata after hydration.
  useEffect(() => {
    if (query === undefined) return;
    const title = `Has buscado ${query} - Canarias Línea Gráfica`;
    const apply = () => {
      if (document.title !== title) document.title = title;
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [query]);

  return query === undefined ? home : <SearchResults query={query} />;
}
