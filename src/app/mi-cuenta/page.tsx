import type { Metadata } from "next";
import { LoginForm } from "@/components/sites/etiquetasdecanarias/AccountForms";

export const metadata: Metadata = { title: "Mi cuenta" };

export default function Page() {
  return <LoginForm />;
}
