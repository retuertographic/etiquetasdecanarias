import type { Metadata } from "next";
import { CartPage } from "@/components/sites/etiquetasdecanarias/CartPage";

export const metadata: Metadata = { title: "Carrito" };

export default function Page() {
  return <CartPage />;
}
