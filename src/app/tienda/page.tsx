import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopPage } from "@/components/sites/etiquetasdecanarias/ShopPage";

export const metadata: Metadata = { title: "Catálogo" };

export default function Page() {
  return (
    <Suspense>
      <ShopPage page={1} />
    </Suspense>
  );
}
