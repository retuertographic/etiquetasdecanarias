import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata } from "@/components/sites/etiquetasdecanarias/seo";
import { ShopPage } from "@/components/sites/etiquetasdecanarias/ShopPage";

export const metadata: Metadata = pageMetadata({ title: "Catálogo", description: "Catálogo de Canarias Línea Gráfica: etiquetas adhesivas y en bobina, imprenta digital, textil, rotulación, impresión UVI y material para eventos.", path: "/tienda/" });

export default function Page() {
  return (
    <Suspense>
      <ShopPage page={1} />
    </Suspense>
  );
}
