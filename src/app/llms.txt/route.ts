import { CATEGORIES, PRODUCT_BY_SLUG, categoryHref, productHref, productsByTitle } from "@/components/sites/etiquetasdecanarias/catalog";
import { PHONE, SITE, WHATSAPP } from "@/components/sites/etiquetasdecanarias/data";
import { QUANTITY, SIZE_MAX, SIZE_MIN } from "@/components/sites/etiquetasdecanarias/pricing";
import { summarize } from "@/components/sites/etiquetasdecanarias/seo";

// Built once at build time from the same catalog the pages use (https://llmstxt.org).
export const dynamic = "force-static";

const url = (path: string) => `${SITE}${path}`;
const euro = (n: number) => `${n.toLocaleString("es-ES")} €`;

function build() {
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(
    "# Canarias Línea Gráfica (Etiquetas de Canarias)",
    "",
    "> Fábrica de etiquetas adhesivas e imprenta en Tenerife desde 1975. Fabrica etiquetas en bobina, etiquetas troqueladas y de ropa, impresión UVI, imprenta digital (tarjetas, flyers, calendarios), textil (DTF, serigrafía), rotulación y material para eventos, con envío a todas las Islas Canarias.",
    "",
    "Datos clave:",
    "",
    "- Tienda online: " + SITE + "/ (WooCommerce, español).",
    `- Teléfono: ${PHONE}. WhatsApp: https://wa.me/${WHATSAPP}`,
    "- Fábrica directa de etiquetas en Tenerife; servicio express en 24 h.",
    "- Envío gratis a Canarias con pedidos desde 200 €.",
    "- Solo «Etiquetas en bobinas» tiene precio en línea (calculadora); el resto de productos se presupuesta con un formulario o por WhatsApp.",
    "- Cómo pedir: elegir y configurar el producto (fecha de entrega y cantidad), subir el diseño o contratar el servicio de diseño, pagar, y recibir el pedido o recogerlo en la oficina.",
    "",
  );

  push("## Productos", "");
  for (const p of productsByTitle()) {
    const extra = p.calculator ? " Precio inmediato con calculadora." : " Presupuesto bajo petición.";
    push(`- [${p.title}](${url(productHref(p.slug))}): ${summarize(p.content, 220)}${extra}`);
  }
  push("");

  push("## Categorías", "");
  for (const c of CATEGORIES) {
    const names = c.products.map((s) => PRODUCT_BY_SLUG.get(s)?.title).filter(Boolean).join(", ");
    push(`- [${c.title}](${url(categoryHref(c.slug))}): ${names}.`);
  }
  push("");

  push(
    "## Precios de etiquetas en bobinas",
    "",
    `Precio base en papel couché (brillo o mate) para etiquetas de hasta 1.199 mm² (por ejemplo ${SIZE_MIN}×${SIZE_MIN} mm), con 15 % de cobertura de tinta, acabado estándar y diseño final aportado por el cliente. Medidas de ${SIZE_MIN} a ${SIZE_MAX} mm por lado.`,
    "",
    ...QUANTITY.map((q) => `- ${Number(q.label).toLocaleString("es-ES")} etiquetas: ${euro(q.value)}`),
    "",
    "Recargos de la calculadora: superficie (de ×1,10 a partir de 1.200 mm² hasta ×2,02 cerca de 20.000 mm²), cobertura de tinta (0 %: ×0,85; 50 %: ×1,25; 100 %: ×1,45), acabado (numeradas ×1,70, texto variable ×2,10, a granel ×0,95, entre otros), formas especiales +40 €, solicitar diseño +39 €, partir de una idea +25 €. Detalle completo en " +
      url(productHref("etiquetas-en-bobina")),
    "",
  );

  push(
    "## Páginas",
    "",
    `- [Catálogo](${url("/tienda/")}): todos los productos con filtro por categoría.`,
    `- [Búsqueda](${url("/?s=etiquetas")}): búsqueda de productos (parámetro \`s\`).`,
    `- [Carrito](${url("/carrito/")})`,
    `- [Mi cuenta](${url("/mi-cuenta/")}): acceso de clientes.`,
    "",
    "## Optional",
    "",
    // Aviso legal, privacidad y cookies are still empty on the live site, so they are left out.
    `- [Accesibilidad](${url("/accesibilidad/")}): declaración de accesibilidad.`,
    "",
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
