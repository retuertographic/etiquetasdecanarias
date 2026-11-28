import type { Metadata } from "next";
import { LoginForm } from "@/components/sites/etiquetasdecanarias/AccountForms";

// Shop pages are not indexed (WooCommerce does the same).
export const metadata: Metadata = { title: "Mi cuenta", robots: { index: false, follow: true } };

export default function Page() {
  return <LoginForm />;
}
