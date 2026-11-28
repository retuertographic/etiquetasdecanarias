import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS, SHOP_PAGE_SIZE, categoryHref, productHref } from "@/components/sites/etiquetasdecanarias/catalog";
import { SITE } from "@/components/sites/etiquetasdecanarias/data";

export const dynamic = "force-static";

/** Indexable pages, listed under the shop's real domain (same URLs as the WordPress site). */
export default function sitemap(): MetadataRoute.Sitemap {
  const shopPages = Math.ceil(PRODUCTS.length / SHOP_PAGE_SIZE);
  const paths = [
    "/",
    "/tienda/",
    ...Array.from({ length: shopPages - 1 }, (_, i) => `/tienda/page/${i + 2}/`),
    ...CATEGORIES.map((c) => categoryHref(c.slug)),
    ...PRODUCTS.map((p) => productHref(p.slug)),
    "/accesibilidad/",
  ];
  return paths.map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: path.startsWith("/producto/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/producto/") ? 0.8 : 0.6,
    ...(path.startsWith("/producto/") ? { images: PRODUCTS.find((p) => productHref(p.slug) === path)!.gallery.slice(0, 5).map((g) => `${SITE}${g.src}`) } : {}),
  }));
}
