# etiquetasdecanarias.es — home page brief

Source: https://etiquetasdecanarias.es/ (WordPress 7.1 + WooCommerce, theme Impreza 8.31, WPBakery).
Local route: `/` → `src/app/page.tsx` → `src/components/sites/etiquetasdecanarias/HomePage.tsx`.
Assets: `public/sites/etiquetasdecanarias/` (downloaded from `/wp-content/uploads/…`, same filenames).

## Global
- Font: Work Sans 400/600 (Google Fonts) → `next/font/google`.
- Colors: text #4a4a4a, primary #49a7d1, accent/hover #FF6900, headings orange #ff7300, teal #60adbf, product titles #0c5f78.
- Content width 1260px (90px gutters at 1440). Product block 1010px.
- Icons: glyphs extracted from the site's Font Awesome 5 font files into `icons.tsx`.

## Sections (desktop 1440, y positions source ≈ local)
| Section | Source y / h | Notes |
|---|---|---|
| Fixed header | 0 / 145 | 100px row (logo 317×60, search 390×45 centered, "¿Primer pedido?" pill, phone, cart, account) + 45px menu row with hover dropdowns (3 levels) |
| Hero slider | 177 / 420 | 2 banners, fade 500ms, autoplay 3s, pause on hover, radius 12. Mobile (≤600) uses 4:3 mobile banners |
| Feature boxes | 629 / 189 | 4 columns, hidden ≤600 |
| Products | 818 / 944 | "Los más vendidos" (7) + "Todos los productos" (9): Owl carousels, 5 items ≥1381 (no autoplay), 3 ≥1025, 2 below (autoplay 3s), round nav buttons #afd2db |
| Factory photos | 1762 / 287 | bg #edeff7, 2×329px images |
| Clients | 2048 / 282 | 22 logos, 6 per view ≥1381 / 3 below, autoplay 3s |
| Footer | 2331 / 390 + 92 | logo, socials (href "#" on source), Kit Digital banner; legal bar bg #8496a3 |

## Interactions
- "¿Primer pedido?" opens a modal with the 4 ordering steps (heading #2077A8, orange icons).
- Floating WhatsApp button → wa.me/34665826713 with the source's prefilled message.
- Mobile (<1025): grey top bar (button + phone), hamburger + logo, accordion menu.

## Out of scope (links point to the live site)
All product/category pages, search, cart, account, legal pages.

---

# Full-site clone (second pass)

Source URLs come from the Yoast sitemaps (`/sitemap_index.xml`). Data was extracted from each page's HTML into
`src/components/sites/etiquetasdecanarias/catalog.ts` (16 products, 7 categories, galleries, related products, WP post IDs).
Gallery images: `public/sites/etiquetasdecanarias/galeria/<slug>/`.

## Route map
| Source | Local | Notes |
|---|---|---|
| `/producto/<slug>/` (16) | `src/app/producto/[slug]` → `ProductPage.tsx` | 4:3 gallery (move transition, 4 s autoplay, fullscreen), description, features, quote form, related, reviews |
| `/producto/etiquetas-en-bobina/` | same, `Calculator.tsx` + `pricing.ts` | Cost Calculator #1401 transcribed; totals checked against the live calculator |
| `/categoria-producto/…` (7) | `src/app/categoria-producto/[...slug]` | |
| `/etiqueta-producto/cotizador/` | `src/app/etiqueta-producto/[slug]` | |
| `/tienda/`, `/tienda/page/2/` | `src/app/tienda` → `ShopPage.tsx` | category radio filter (`?product_cat=`), 12 per page, A–Z |
| `/?s=…` | `src/app/page.tsx` → `SearchResults.tsx` | title + description match, same results as the source |
| `/carrito/` | `CartPage.tsx` | local cart (localStorage) |
| `/finalizar-compra/` | `CheckoutPage.tsx` | reconstructed (not observable on source); order is sent via WhatsApp |
| `/mi-cuenta/`, `/mi-cuenta/lost-password/` | `AccountForms.tsx` | posts to the live site's `wp-login.php` |
| `/accesibilidad/` | static text copied from source | |
| `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`, `/profesionales/` | empty pages | empty on the source too |
| `/nuestros-trabajos/` | title only | same as source |

## Calculator behaviour observed on the source
- "Cobertura de tintas (%)" and "Acabados y extras" behave as single choice.
- "Laminacion" only adds a "si" row to the summary; it does not change the total.
- "Añadir al Carrito" on the source did not add anything without an uploaded design file, so the populated cart/checkout could not be observed.
