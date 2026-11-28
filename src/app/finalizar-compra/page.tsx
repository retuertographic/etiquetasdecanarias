import type { Metadata } from "next";
import { CheckoutPage } from "@/components/sites/etiquetasdecanarias/CheckoutPage";

// Shop pages are not indexed (WooCommerce does the same).
export const metadata: Metadata = { title: "Finalizar compra", robots: { index: false, follow: true } };

export default function Page() {
  return <CheckoutPage />;
}
