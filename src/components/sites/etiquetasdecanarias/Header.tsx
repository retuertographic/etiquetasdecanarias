"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useCart } from "./cart-store";
import { cn } from "@/lib/utils";
import { ASSETS, NAV, PHONE, type NavItem } from "./data";
import {
  FaLightPhone,
  FaLightSearch,
  FaLightShoppingCart,
  FaLightUser,
  FaSolidBoxOpen,
  FaSolidCreditCard,
  FaSolidPencilAlt,
  FaSolidTasks,
} from "./icons";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Canarias Línea Gráfica — Inicio" className={cn("block", className)}>
      <Image src={`${ASSETS}/img/logo.png`} alt="canariaslineagrafica.es" width={1119} height={212} priority className="h-full w-auto" />
    </Link>
  );
}


const SEARCH_INPUT =
  "h-[45px] w-full rounded-[4px] bg-[#f2f2f2] pr-[44.8px] pl-6 text-base text-[#4a4a4a] shadow-[0_0_0_1px_#e3e7f0] outline-none placeholder:text-[#8a8a8a] focus:shadow-[0_0_0_2px_#49a7d1]";

function SearchInput({ className, defaultValue }: { className: string; defaultValue?: string }) {
  return <input key={defaultValue} type="text" name="s" placeholder="Buscar..." aria-label="Buscar..." defaultValue={defaultValue} className={className} />;
}

function SearchInputFromUrl({ className }: { className: string }) {
  const params = useSearchParams();
  return <SearchInput className={className} defaultValue={params.get("s") ?? ""} />;
}

function CartLink() {
  const items = useCart();
  const count = items.reduce((n, i) => n + i.quantity, 0);
  return (
    <Link href="/carrito/" aria-label={`Carrito (${count})`} className="relative ml-[30px] text-[#4a4a4a] hover:text-[#FF6900]">
      <FaLightShoppingCart className="h-[22px] w-[24px]" />
      {count > 0 && (
        <span className="absolute -top-2 -right-3 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#FF6900] px-1 text-[11px] leading-none text-white">
          {count}
        </span>
      )}
    </Link>
  );
}

function isActive(item: NavItem, pathname: string): boolean {
  return pathname === item.href || (item.children?.some((c) => isActive(c, pathname)) ?? false);
}

function SmallChevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PrimerPedidoButton({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[3em] bg-[#afd2db] px-[1em] py-[0.6em] text-[13px] leading-[1.2] text-[#1b5080] transition-colors hover:bg-[#49a7d1] hover:text-[#14436e]",
        className,
      )}
    >
      ¿Primer pedido?
    </button>
  );
}

function DesktopDropdown({ items, level }: { items: NavItem[]; level: number }) {
  return (
    <ul
      className={cn(
        "invisible absolute z-20 min-w-[238px] bg-white opacity-0 shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-[opacity,visibility] duration-200 group-hover/nav:visible group-hover/nav:opacity-100",
        level === 2 ? "top-full left-0" : "top-0 left-full",
      )}
    >
      {items.map((item) => (
        <li key={item.label} className="group/nav relative">
          <Link
            href={item.href}
            className="flex items-center justify-between gap-4 px-5 py-[8.64px] text-[14.4px] leading-[21.6px] whitespace-nowrap text-black uppercase hover:bg-[#f2f4f7] hover:text-[#FF6900]"
          >
            {item.label}
            {item.children && <SmallChevron className="h-3.5 w-3.5" />}
          </Link>
          {item.children && <DesktopDropdown items={item.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

function MobileNavList({ items, depth = 0 }: { items: NavItem[]; depth?: number }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label} className="border-b border-[#e3e7f0] last:border-b-0">
          <div className="flex items-center">
            <Link
              href={item.href}
              className="flex-1 py-3 text-[15px] text-[#404040] uppercase hover:text-[#FF6900]"
              style={{ paddingLeft: 20 + depth * 16 }}
            >
              {item.label}
            </Link>
            {item.children && (
              <button
                type="button"
                aria-label={`Abrir submenú ${item.label}`}
                aria-expanded={open === item.label}
                onClick={() => setOpen(open === item.label ? null : item.label)}
                className="flex h-12 w-12 items-center justify-center text-[#404040]"
              >
                <SmallChevron className={cn("h-4 w-4 transition-transform", open === item.label && "rotate-90")} />
              </button>
            )}
          </div>
          {item.children && open === item.label && (
            <div className="bg-[#f7f8fa]">
              <MobileNavList items={item.children} depth={depth + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

const STEPS = [
  { Icon: FaSolidTasks, content: <><strong>Elige tu producto</strong>, configúralo, selecciona la fecha de entrega y la cantidad.</> },
  { Icon: FaSolidPencilAlt, content: <>Sube el archivo con <strong>tu diseño</strong> o contrata nuestro servicio de diseño.</> },
  { Icon: FaSolidCreditCard, content: <>Para completar el pedido, <strong>realiza el pago.</strong></> },
  { Icon: FaSolidBoxOpen, content: <>¡<strong>Recibe tu producto</strong> o pásalo a recoger por nuestras oficinas!</> },
];

function PrimerPedidoPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="primer-pedido-title"
        className="relative w-full max-w-[600px] rounded bg-white px-8 py-12 sm:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" aria-label="Cerrar" onClick={onClose} className="absolute top-2 right-3 text-3xl leading-none text-[#999] hover:text-[#4a4a4a]">
          ×
        </button>
        <h2 id="primer-pedido-title" className="mb-3 text-[2rem] leading-[1.2] text-[#2077A8]">¿Dudas sobre tu primer pedido?</h2>
        <p className="mb-6 text-[1.5rem] leading-[1.3] text-[#4a4a4a]">Estos son los pasos a seguir:</p>
        <div className="flex flex-col gap-4 text-[#808080]">
          {STEPS.map(({ Icon, content }, i) => (
            <div key={i} className="flex items-start gap-3 leading-[1.6]">
              <Icon className="mt-1 h-[1.1em] w-[1.25em] shrink-0 text-[#FF6900]" />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-white">
        {/* Desktop: logo / search / actions row */}
        <div className="hidden h-[100px] px-10 shadow-[0_1px_0_rgba(0,0,0,0.08)] min-[1025px]:block">
          <div className="relative mx-auto flex h-full max-w-[1260px] items-center justify-between">
            <Logo className="h-[60px] w-[317px]" />
            <form role="search" action={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`} method="get" className="absolute top-1/2 left-1/2 w-[390px] -translate-x-1/2 -translate-y-1/2">
              <Suspense fallback={<SearchInput className={SEARCH_INPUT} />}>
                <SearchInputFromUrl className={SEARCH_INPUT} />
              </Suspense>
              <button type="submit" aria-label="Buscar" className="absolute top-0 right-0 flex h-[45px] w-[45px] items-center justify-center text-[#4a4a4a]">
                <FaLightSearch className="h-[18px] w-[18px]" />
              </button>
            </form>
            <div className="flex items-center">
              <PrimerPedidoButton onClick={() => setPopupOpen(true)} className="h-[47px] w-[125px]" />
              <a href={`tel:${PHONE}`} className="ml-5 flex items-center gap-1.5 text-[13px] text-[#4d4d4d] hover:text-[#FF6900]">
                <FaLightPhone className="h-[13px] w-[13px]" />
                {PHONE}
              </a>
              <CartLink />
              <Link href="/mi-cuenta/" aria-label="Mi cuenta" className="ml-[27px] text-[#404040] hover:text-[#FF6900]">
                <FaLightUser className="h-[20px] w-[18px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: main menu row */}
        <nav aria-label="Principal" className="hidden h-[45px] px-10 shadow-[0_1px_0_rgba(0,0,0,0.08)] min-[1025px]:block">
          <ul className="mx-auto flex h-full max-w-[1260px] items-center justify-center">
            {NAV.map((item) => (
              <li key={item.label} className="group/nav relative h-full">
                <Link
                  href={item.href}
                  className={cn(
                    "block px-5 text-[14px] leading-[45px] uppercase transition-colors hover:text-[#FF6900]",
                    isActive(item, pathname) ? "text-black" : "text-[#4a4a4a]",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && <DesktopDropdown items={item.children} level={2} />}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile / tablet */}
        <div className="min-[1025px]:hidden">
          <div className="flex h-10 items-center justify-center gap-9 bg-[#f2f4f7] text-[13px] text-[#727f9f]">
            <PrimerPedidoButton onClick={() => setPopupOpen(true)} className="px-[1em] py-[0.5em]" />
            <a href={`tel:${PHONE}`} className="text-[#4d4d4d] hover:text-[#FF6900]">
              {PHONE}
            </a>
          </div>
          <div className="flex h-[60px] items-center gap-4 px-4 shadow-[0_1px_0_rgba(0,0,0,0.08)]">
            <button
              type="button"
              aria-label="Menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <span className={cn("h-[2px] w-6 bg-[#404040] transition-transform", menuOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("h-[2px] w-6 bg-[#404040] transition-opacity", menuOpen && "opacity-0")} />
              <span className={cn("h-[2px] w-6 bg-[#404040] transition-transform", menuOpen && "-translate-y-[7px] -rotate-45")} />
            </button>
            <Logo className="h-[38px]" />
          </div>
          {menuOpen && (
            <nav aria-label="Principal móvil" className="max-h-[calc(100vh-100px)] overflow-y-auto bg-white shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
              <MobileNavList items={NAV} />
            </nav>
          )}
        </div>
      </header>
      {popupOpen && <PrimerPedidoPopup onClose={() => setPopupOpen(false)} />}
    </>
  );
}
