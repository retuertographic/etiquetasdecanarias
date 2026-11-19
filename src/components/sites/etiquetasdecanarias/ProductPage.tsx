import { Calculator } from "./Calculator";
import { PRODUCT_BY_SLUG, productHref, type CatalogProduct } from "./catalog";
import { HeroSlider } from "./HeroSlider";
import { QuoteForm } from "./QuoteForm";
import { ReviewForm } from "./ReviewForm";
import { ProductCard, RuledHeading, Section } from "./ui";

function Check() {
  return (
    <svg viewBox="0 0 512 512" className="mt-[7px] h-[14px] w-[16px] shrink-0 text-[#4a4a4a]" aria-hidden="true">
      <path fill="currentColor" d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z" />
    </svg>
  );
}

export function ProductPage({ product }: { product: CatalogProduct }) {
  const related = product.related.map((s) => PRODUCT_BY_SLUG.get(s)).filter((p): p is CatalogProduct => Boolean(p));

  return (
    <>
      {/* Gallery + description */}
      <Section>
        <div className="grid grid-cols-2 items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div className="sticky top-[177px] max-[900px]:static">
            <HeroSlider
              slides={product.gallery}
              aspect="4 / 3"
              transition="move"
              speed={250}
              delay={4000}
              fullscreen
              label={`Galería de ${product.title}`}
              sizes="(min-width: 1340px) 598px, (min-width: 901px) 45vw, 100vw"
              className="rounded-[8px]"
            />
          </div>
          <div>
            <h1 className="mb-6 text-[44.8px] leading-none text-[#2077a8] max-[600px]:text-[34px] max-[600px]:leading-[1.1]">{product.title}</h1>
            <div className="product-content text-[#808080] [&_li]:ml-5 [&_li]:list-disc [&_p:not(:last-child)]:mb-6 [&_strong]:font-semibold" dangerouslySetInnerHTML={{ __html: product.content }} />
            {product.features.length > 0 && (
              <ul className="mt-6">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Section>

      {/* Calculator or quote form */}
      <Section>
        {product.calculator ? (
          <>
            <RuledHeading>Personaliza tu producto</RuledHeading>
            <div className="mt-[78px] max-[600px]:mt-8">
              <Calculator slug={product.slug} title={product.title} image={product.image} />
            </div>
          </>
        ) : (
          <>
            <RuledHeading>Solicita un presupuesto</RuledHeading>
            <p className="mt-6 mb-[72px] text-center max-[600px]:mb-8">Para darle un presupuesto personalizado contacte con nosotros a través de este formulario o a través de WhatsApp</p>
            <QuoteForm productTitle={product.title} />
          </>
        )}
      </Section>

      {/* Related products */}
      {related.length > 0 && (
        <Section className="bg-[#f2f4f7]">
          <h2 className="mb-6 text-center text-[32px] leading-[1.2] text-[#2077a8] max-[600px]:text-[26px]">También te podría interesar</h2>
          <div className="pt-[14px]">
            <div className="-mx-[30px] flex flex-wrap max-[600px]:-mx-2">
              {related.map((p) => (
                <div key={p.slug} className="w-1/4 px-[30px] pb-0 max-[1024px]:w-1/2 max-[1024px]:pb-6 max-[600px]:px-2">
                  <ProductCard product={p} titleColor="#4a4a4a" aspect="399 / 405" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Reviews */}
      <Section>
        <h2 className="mb-6 text-center text-[32px] leading-[1.2] text-[#2077a8] max-[600px]:text-[26px]">Lo que opinan nuestros clientes…</h2>
        <div className="pt-[14px]">
          <h2 className="mb-6 text-[25.6px] leading-[1.2] text-[#0f131f]">Valoraciones</h2>
          <p className="mb-4">No hay valoraciones aún.</p>
          <ReviewForm productTitle={product.title} wpId={product.wpId} productPath={productHref(product.slug)} />
        </div>
      </Section>
    </>
  );
}
