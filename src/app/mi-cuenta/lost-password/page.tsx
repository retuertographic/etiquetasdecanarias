import type { Metadata } from "next";
import { LostPasswordForm } from "@/components/sites/etiquetasdecanarias/AccountForms";

export const metadata: Metadata = { title: "Mi cuenta" };

export default function Page() {
  return <LostPasswordForm />;
}
