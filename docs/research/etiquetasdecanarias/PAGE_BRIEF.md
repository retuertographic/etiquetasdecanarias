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
