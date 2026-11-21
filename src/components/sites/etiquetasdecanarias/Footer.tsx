import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "./data";
import { FaBrandsFacebook, FaBrandsInstagram, FaBrandsWhatsapp } from "./icons";

const LEGAL = [
  { label: "AVISO LEGAL", href: "/aviso-legal/" },
  { label: "POLÍTICA DE PRIVACIDAD", href: "/politica-de-privacidad/" },
  { label: "POLÍTICA DE COOKIES", href: "/politica-de-cookies/" },
  { label: "ACCESIBILIDAD", href: "/accesibilidad/" },
];

// The source points every social icon at "#".
const SOCIALS = [
  { label: "Facebook", Icon: FaBrandsFacebook },
  { label: "Instagram", Icon: FaBrandsInstagram },
  { label: "WhatsApp", Icon: FaBrandsWhatsapp },
];

export function Footer() {
  return (
    <footer>
      <section className="bg-[#e9f0f5] px-10 py-16 text-[#727f9f] max-[600px]:px-4">
        <div className="mx-auto flex max-w-[1260px] flex-col items-center">
          <Link href="/" aria-label="Inicio">
            <Image src={`${ASSETS}/img/logo.png`} alt="" width={300} height={57} className="h-[57px] w-[300px]" />
          </Link>
          <div className="mt-[13px] flex">
            {SOCIALS.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="flex h-[42px] w-[42px] items-center justify-center text-[#4a4a4a] transition-colors hover:text-[#FF6900]">
                <Icon className="h-[20.8px] w-[20.8px]" />
              </a>
            ))}
          </div>
          <Image src={`${ASSETS}/img/subvencion.png`} alt="Programa Kit Digital financiado por los fondos Next Generation del Mecanismo de Recuperación y Resiliencia" width={1024} height={110} className="mt-10 h-auto w-full max-w-[1024px]" />
        </div>
      </section>
      <section className="bg-[#8496a3] px-10 py-8 text-[#e3e7f0] max-[600px]:px-4 max-[600px]:pb-24">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-4 text-[12.8px] leading-[28px] max-[900px]:flex-col max-[900px]:text-center max-[600px]:text-[11px]">
          <p className="min-[901px]:shrink-0 min-[901px]:whitespace-nowrap">
            {LEGAL.map((l, i) => (
              <span key={l.href}>
                {i > 0 && " | "}
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-right max-[900px]:text-center">
            Desarrollado por{" "}
            <a href="https://retuertographicdesign.com/" target="_blank" rel="noopener" className="underline-offset-2 hover:text-white hover:underline">
              Retuerto Graphic Design
            </a>
            . <span className="whitespace-nowrap">Ricardo Retuerto Barrera</span> | <span className="whitespace-nowrap">Spain-Germany</span> |{" "}
            <span className="whitespace-nowrap">0034 922 971 723</span> · <span className="whitespace-nowrap">0049 30 31878629</span>
          </p>
        </div>
      </section>
    </footer>
  );
}
