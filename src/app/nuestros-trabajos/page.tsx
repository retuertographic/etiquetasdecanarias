import type { Metadata } from "next";
import { Section } from "@/components/sites/etiquetasdecanarias/ui";

export const metadata: Metadata = { title: "Nuestros Trabajos", alternates: { canonical: "/nuestros-trabajos/" } };

/** Only the title is published on the live site. */
export default function Page() {
  return (
    <Section>
      <h1 className="text-center text-[44.8px] leading-[1.2] text-[#0f131f] max-[600px]:text-[32px]">Nuestros Trabajos</h1>
    </Section>
  );
}
