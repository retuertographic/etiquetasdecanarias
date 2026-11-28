/** URL helpers kept apart from catalog.ts so client components don't bundle the whole catalog. */
export function productHref(slug: string) {
  return `/producto/${slug}/`;
}

export function categoryHref(slug: string) {
  return `/categoria-producto/${slug}/`;
}
