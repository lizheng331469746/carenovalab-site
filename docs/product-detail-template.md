# Product Detail Template

Demo: `/products/demo-amino-acid-cleanser`.

This additive template uses the existing Next.js 15 App Router, root header/footer,
design tokens and InquiryButton. It does not change the legacy catalog or its pages.
The existing dynamic directory is named `[category]`; Next does not allow a sibling
`[slug]` directory at the same URL level. The new page resolves that parameter as a
product slug. Static category pages and existing nested detail routes remain intact.

## Data and adding a second product

1. Copy `lib/product-detail/demo.ts` to a new product data file.
2. Keep the shared `Product` contract in `lib/product-detail/types.ts`.
3. Choose a unique slug; do not use existing category names such as `skincare`,
   `makeup`, `body-care`, `hair-care`, `sun-care`, `soap`, `home-care`, or
   `essential-oils-fragrance`. Set `seo.canonicalPath` to `/products/<slug>`.
4. Fill all content, FAQ, specifications and SEO fields. Only set `demo: false`
   after content approval; demo pages carry `noindex, follow`.
5. Import the product and append it to `detailProducts` in `lib/product-detail/index.ts`.
   The route and template require no changes.
6. Place approved images under `public/images/products/<slug>/` as WebP. Set image
   `src`, e.g. `/images/products/<slug>/hero.webp`, plus descriptive alt and caption.
   Omit `src` to show an intentional placeholder, without a broken image request.
   Hero, overview, texture and each packaging option have independent image slots.
   Set `seo.image` for a dedicated WebP social image; otherwise the hero is used.
   If neither exists, no Open Graph image is advertised.

This first phase deliberately does not add products to legacy listings, menus or
the sitemap. Connect the approved registry to those surfaces in a later phase.
Do not publish unverified ingredient percentages, certifications or efficacy claims.

## Components

`ProductDetail`: eleven ordered sections, FAQ JSON-LD from the same FAQ data.
`ProductSection`: accessible section wrapper.
`ProductMedia`: WebP image or placeholder with caption.
`FeatureGrid`: reusable benefit/ingredient/customization/compliance cards.
`ProductActions`: existing inquiry modal plus `/start-your-project`.

Styles are confined to `components/product-detail/product-detail.module.css`.
Metadata helpers live in `lib/product-detail/seo.ts`; canonical URLs use siteConfig.
Unknown slugs return Next.js notFound. FAQ JSON is escaped for safe script embedding.
