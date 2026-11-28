import type { Metadata } from "next";
import { CartPage } from "@/components/sites/etiquetasdecanarias/CartPage";

// Shop pages are not indexed (WooCommerce does the same).
export const metadata: Metadata = { title: "Carrito", robots: { index: false, follow: true } };

export default function Page() {
  return <CartPage />;
}
