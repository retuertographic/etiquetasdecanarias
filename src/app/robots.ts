import type { MetadataRoute } from "next";
import { SITE } from "@/components/sites/etiquetasdecanarias/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/carrito/", "/finalizar-compra/", "/mi-cuenta/"] },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
