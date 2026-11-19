import type { Metadata } from "next";
import { CheckoutPage } from "@/components/sites/etiquetasdecanarias/CheckoutPage";

export const metadata: Metadata = { title: "Finalizar compra" };

export default function Page() {
  return <CheckoutPage />;
}
