# CareNova Lab product detail template
Demo route: /products/demo-amino-acid-cleanser

## Scope
Only one product is registered. Header, Footer, navigation, global CSS, legacy
catalog, existing nested product routes and production branch are unchanged.
The existing [category] directory serves short product slugs without a conflicting
[slug] sibling. Static category pages continue to take precedence.

## Product schema and content
- types.ts: unified Product, Ingredient, PackagingOption, Manufacturing and media contracts.
- demo.ts: product-specific content, procurement facts, images, SEO and resolved FAQ/CTA.
- content.ts: shared category CTA copy and category/product-driven FAQ builder.
- packaging.ts: shared packaging catalog and ID lookup; replace the lookup with an
  adapter when a real packaging database is available. No database is connected yet.
- index.ts: the only product registry.
- seo.ts: dynamic metadata and escaped FAQ JSON-LD.

Hero, benefits, overview attributes, ingredients, texture, customization, packaging,
manufacturing content, specifications, FAQ, CTA and SEO read the Product object.
Repeated MOQ/size/sample/formula values come from procurement in demo.ts.
There are no product-specific values in the React template.

## Images
WebP only. Each slot accepts src (optional), alt and caption:
- heroImage
- overviewImage
- textureImage
- ingredients[].image (optional; absent image retains a placeholder)
- packagingOptions[].image (managed in packaging.ts for shared packs)
- seo.image (optional social image, otherwise heroImage is used)

All media share a responsive 1:1 container, object-fit contain and the same rounded
corners. No source means a CareNova placeholder; it does not request a missing file.
Store approved files in public/images/products/<slug>/ and reference
/images/products/<slug>/hero.webp. No product images have been invented or uploaded.

## Accuracy
Ingredient status is confirmed or proposed. All demo ingredients remain proposed.
Manufacturing manages factoryCertifications, availableDocumentation,
regulatorySupport and targetMarkets separately. Only add factory certification
records after checking name, factory, scope and evidenceReference. These are factory
credentials, never product certifications. Empty credentials are not displayed.
Support items carry confirmed or subject-to-review status. Actual MOQ, capacities,
lead times and testing results must be supplied before replacing the current concise
unknown-value labels. Demo noindex is preserved although the visible preview badge
has been removed.

## Add a second product (not created in this phase)
1. Copy demo.ts to a new product data file and export a Product.
2. Set unique slug and matching seo.canonicalPath. Avoid existing category route
   names (skincare, makeup, body-care, hair-care, sun-care, soap,
   essential-oils-fragrance, home-care).
3. Fill procurement facts and all sections. Keep 3 benefits, 3 sensory attributes,
   4 customization modules, 3–4 hero ingredients and 5–7 FAQ entries.
4. Use shared packaging IDs, or add approved options to packaging.ts.
5. Choose categoryContent and createProcurementFaq defaults, or supply your own
   data arrays and CTA. Changing category alone does not select defaults: choose
   the matching category key in the data file as shown in demo.ts.
6. Add WebP sources and register the exported product in index.ts.
7. Keep demo true until reviewed; set false only when ready for indexing.
No React changes are needed. Menu, catalog and sitemap integration remain a later task.

## Components and intentionally fixed UI
ProductDetail, ProductSection, ProductMedia, ProductFacts, FeatureGrid,
ManufacturingSupport and ProductActions are reusable.
Fixed presentation: section order/titles/eyebrows, shared field labels and status
labels, CareNova placeholder, responsive layout and existing /contact and
/start-your-project destinations. Shared FAQ questions/default copy and category CTA
defaults reside in content.ts, not in React. Product-specific content is not hard-coded.

## Validation
Run node scripts/check-product-detail.cjs and TypeScript --noEmit.
The checks cover rendering, route 404, metadata, JSON-LD escaping and parity, optional
images/materials/decoration, ingredient states, procurement consistency, category FAQ,
single CTA and one registered demo.
The repository has no ESLint configuration. next lint currently opens its setup prompt,
so lint is not recorded as passed. No repository-wide lint setup was added in this task.
