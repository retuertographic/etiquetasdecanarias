import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Carousel, type CarouselBreakpoint } from "./Carousel";
import { ALL_PRODUCTS, ASSETS, BEST_SELLERS, CLIENTS, type Product } from "./data";
import { HeroSlider } from "./HeroSlider";
import { FaLightBoxOpen, FaLightMap, FaLightPrint, FaLightShippingFast } from "./icons";

const PRODUCT_BREAKPOINTS: CarouselBreakpoint[] = [
  { min: 0, items: 2, nav: false, autoplay: true },
  { min: 601, items: 2, nav: true, autoplay: true },
  { min: 1025, items: 3, nav: true, autoplay: true },
  { min: 1381, items: 5, nav: true, autoplay: false },
];

const CLIENT_BREAKPOINTS: CarouselBreakpoint[] = [
  { min: 0, items: 3, nav: false, autoplay: true },
  { min: 601, items: 3, nav: true, autoplay: true },
  { min: 1381, items: 6, nav: true, autoplay: true },
];

const FEATURES: { Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; text: string }[] = [
  { Icon: FaLightShippingFast, title: "Servicio Express", text: "Servicio 24h, porque hay ocasiones en las que no se puede esperar." },
  { Icon: FaLightBoxOpen, title: "Fabrica Directa", text: "Somos su fábrica directa de etiquetas en Tenerife." },
  { Icon: FaLightMap, title: "Rotulaciones", text: "Impresiones a pequeña y gran escala, para interior y exterior." },
  { Icon: FaLightPrint, title: "Imprenta", text: "Cuente con nosotros para sus tarjetas de visita, flyers o carteles." },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <Link href={product.href} className="block" draggable={false}>
        <Image src={product.img} alt={product.alt} width={614} height={621} sizes="(min-width: 1381px) 174px, (min-width: 1025px) 30vw, 45vw" className="h-auto w-full" draggable={false} />
      </Link>
      <h2 className="mt-2 text-center text-base leading-[1.2] text-[#0c5f78]">
        <Link href={product.href} className="transition-colors hover:text-[#FF6900]" draggable={false}>
          {product.title}
        </Link>
      </h2>
    </article>
  );
}

function ProductSection({ title, color, products, paddingTop }: { title: string; color: string; products: Product[]; paddingTop: number }) {
  return (
    <>
      <h2 className="mb-6 text-center text-[32px] leading-[1.2] max-[600px]:text-[28px]" style={{ color, paddingTop }}>
        {title}
      </h2>
      <Carousel ariaLabel={title} navStyle="round" gap={35} breakpoints={PRODUCT_BREAKPOINTS} slides={products.map((p) => <ProductCard key={p.href} product={p} />)} />
    </>
  );
}

export function HomePage() {
  return (
    <>
      <div>
        {/* Hero banners */}
        <section className="px-10 py-8 max-[1024px]:px-6 max-[1024px]:py-6">
          <div className="mx-auto max-w-[1260px]">
            <HeroSlider
              className="max-[600px]:hidden"
              aspect="3 / 1"
              sizes="(min-width: 1340px) 1260px, 100vw"
              slides={[
                { src: `${ASSETS}/banners/baner-web-desde-1975-2.jpg`, width: 1600, height: 536 },
                { src: `${ASSETS}/banners/baner-web-envios-2.jpg`, width: 1600, height: 532 },
              ]}
            />
            <HeroSlider
              className="min-[601px]:hidden"
              aspect="4 / 3"
              sizes="100vw"
              slides={[
                { src: `${ASSETS}/banners/baner-web-desde-1975-movil-2.jpg`, width: 600, height: 455 },
                { src: `${ASSETS}/banners/baner-web-envios-movil-3.jpg`, width: 600, height: 450 },
              ]}
            />
          </div>
        </section>

        {/* Feature icon boxes (hidden on phones, as on the source) */}
        <section className="px-10 max-[600px]:hidden max-[1024px]:px-6">
          <div className="mx-auto grid max-w-[1260px] grid-cols-4 gap-x-[51px] max-[1024px]:gap-x-4">
            {FEATURES.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-[10px] p-5 text-center leading-[1.2] text-[#4a4a4a]">
                <Icon className="mx-auto h-[43.2px] w-auto text-[#49a7d1]" />
                <h3 className="py-[11px] text-[22px] leading-[1.2] max-[1024px]:text-[19px]">{title}</h3>
                <p className="text-base leading-[1.2]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product carousels + intro text */}
        <section className="px-10 py-16 max-[1024px]:px-[70px] max-[600px]:px-4 max-[600px]:py-10">
          <div className="mx-auto max-w-[1010px]">
            <ProductSection title="Los más vendidos" color="#ff7300" products={BEST_SELLERS} paddingTop={0} />
            <div className="mt-[10px]">
              <ProductSection title="Todos los productos" color="#60adbf" products={ALL_PRODUCTS} paddingTop={30} />
            </div>
            <h2 className="mt-[10px] mb-6 pt-[50px] text-center text-[32px] leading-[1.2] text-[#ff7300] max-[600px]:text-[28px]">
              Tu fábrica de etiquetas, para todo Canarias
            </h2>
            <p className="mt-[10px] text-center leading-[28px] text-[#737373]">
              Tenemos máquinas modernas que garantizan una calidad de impresión óptima, contamos con sistemas de impresión y troquelado digital que permiten
              realizar las etiquetas de cualquier medida y forma, sin añadir sobrecostes de troqueles ni grabados, pudiendo así, ofrecer a nuestros clientes
              tiradas pequeñas a precios muy competitivos
            </p>
          </div>
        </section>

        {/* Factory photos */}
        <section className="bg-[#edeff7] px-10 py-5 max-[600px]:px-6">
          <div className="mx-auto grid max-w-[720px] grid-cols-2 gap-[62px] max-[600px]:gap-6">
            {[
              { src: "maquina2.jpg", alt: "Fábrica de Tenerife" },
              { src: "maquina3.jpg", alt: "fábrica de etiquetas" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[329/247]">
                <Image src={`${ASSETS}/img/${img.src}`} alt={img.alt} fill sizes="(min-width: 800px) 329px, 45vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="px-10 pt-[72px] max-[600px]:px-4 max-[600px]:pt-10">
          <div className="mx-auto max-w-[1260px]">
            <h4 className="text-center text-[22px] leading-[1.2] text-[#a0adb0]">Nuestros clientes</h4>
            <Carousel
              ariaLabel="Nuestros clientes"
              navStyle="plain"
              breakpoints={CLIENT_BREAKPOINTS}
              slides={CLIENTS.map((src) => (
                <div key={src} className="pt-[25px] pr-[50px] max-[1380px]:px-3">
                  <Image src={src} alt="" width={354} height={354} sizes="(min-width: 1381px) 160px, 30vw" className="h-auto w-full max-w-[160px] max-[1380px]:mx-auto" draggable={false} />
                </div>
              ))}
            />
          </div>
        </section>
      </div>
    </>
  );
}
