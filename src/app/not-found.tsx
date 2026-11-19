import type { Metadata } from "next";
import { Section } from "@/components/sites/etiquetasdecanarias/ui";

export const metadata: Metadata = { title: "Página no encontrada" };

/** Same message as the Impreza 404 page on the source. */
export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <h1 className="mb-6 text-[44.8px] leading-[1.2] text-[#0f131f] max-[600px]:text-[32px]">Página no encontrada</h1>
        <p>El enlace que has seguido puede estar roto, o la página puede haber sido retirada.</p>
      </div>
    </Section>
  );
}
