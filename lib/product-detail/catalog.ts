import { productCategories, type Product as CatalogProduct, type ProductCategory, type ProductGroup } from '@/lib/products';
import { asset } from '@/lib/assets';
import type { Product, ProductImage } from './types';
import { createProcurementFaq, type Procurement } from './content';

/** Keep the existing catalog URL algorithm; changing it would break inbound links. */
export function catalogSlug(name: string): string {
  return name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
}
export function catalogProductPath(category: ProductCategory, group: ProductGroup, item: CatalogProduct): `/products/${string}` {
  return `/products/${category.slug}/${catalogSlug(group.name)}/${catalogSlug(item.name)}`;
}

/** Add richer SKU data here without creating another page layout or changing URLs. */
export const catalogDetailOverrides: Record<string, Partial<Product>> = {};

export function toMasterProduct(category: ProductCategory, group: ProductGroup, item: CatalogProduct): Product {
  const path = catalogProductPath(category, group, item);
  const details = item.details;
  const facts: Procurement = {
    moq: item.moq || 'Based on formula & packaging', size: 'Custom options available',
    sample: 'Availability to be confirmed', formula: 'Customizable',
    fragrance: 'Custom options subject to formula review', packaging: details?.packaging || 'Custom options available',
    branding: 'Logo, artwork, printing and label customization',
    leadTime: 'Confirmed after sample & packaging approval', shelfLife: 'Subject to stability testing',
    targetMarket: 'Specify in your project brief'
  };
  const documents = 'Documentation support is reviewed with the selected manufacturing partner for the product and destination market. Factory credentials and product documentation are assessed separately.';
  const image: ProductImage = {
    ...(item.image?.endsWith('.webp') ? { src: asset(item.image) as `${string}.webp` } : {}),
    alt: `${item.name} — CareNova Lab`
  };
  const product: Product = {
    slug: catalogSlug(item.name), name: item.name, category: category.name, subcategory: group.name,
    demo: false, shortDescription: item.description, heroImage: image,
    gallery: [
      { ...image, type: 'hero' },
      { type: 'detail', alt: `${item.name} product detail` },
      { type: 'texture', alt: `${item.name} texture` },
      { type: 'ingredient', alt: `${item.name} ingredient direction` },
      { type: 'lifestyle', alt: `${item.name} lifestyle and packaging` }
    ],
    benefitTags: item.tags?.slice(0, 3),
    quickInfo: [
      { label: 'MOQ', value: facts.moq }, { label: 'Size', value: facts.size },
      { label: 'Sample', value: facts.sample }, { label: 'Formula', value: facts.formula }
    ],
    benefits: details?.highlights,
    overview: {
      heading: item.name, description: details?.overview || item.description,
      attributes: [
        { label: 'Product Type', value: item.name },
        { label: 'Category', value: category.name },
        { label: 'Available Size', value: facts.size },
        { label: 'Fragrance', value: facts.fragrance }
      ]
    },
    overviewImage: { alt: `${item.name} product overview` },
    ingredientIntroduction: details?.ingredientDirection ? 'Formulation direction; final INCI requires sample approval.' : undefined,
    ingredients: details?.ingredientDirection ? [{
      name: 'Formula Direction', description: details.ingredientDirection, status: 'proposed',
      image: { alt: `${item.name} formulation direction` }
    }] : undefined,
    texture: details?.texture ? { heading: 'Texture & Experience', description: details.texture } : undefined,
    textureImage: details?.texture ? { alt: `${item.name} sensory texture` } : undefined,
    customizationIntro: {
      heading: 'Make this product your own.',
      description: ['Customize the formula, fragrance, packaging and branding for your target market.', ...(details?.customization ?? [])].join(' ')
    },
    customization: [
      { title: 'Formula', description: 'Ingredients · Texture · Performance' },
      { title: 'Scent & Appearance', description: 'Fragrance · Color · Consistency' },
      { title: 'Packaging', description: 'Format · Material · Decoration' },
      { title: 'Branding', description: 'Logo · Artwork · Printing · Label' }
    ],
    packagingOptions: details?.packaging ? [{
      id: path, type: 'Product Packaging', capacity: facts.size, description: details.packaging,
      image: { alt: `${item.name} packaging options` }
    }] : undefined,
    manufacturing: {
      standards: 'Factory standards and credentials confirmed with the selected partner.',
      qualityControl: 'Raw material · Bulk · Filling · Finished product checks to be agreed.',
      testingSupport: 'Stability · Microbiological · Packaging compatibility testing to be scoped.',
      documentationSummary: documents,
      factoryCertifications: [], productCertifications: [], availableDocumentation: [], regulatorySupport: [], targetMarkets: []
    },
    specifications: [
      { group: 'Product Details', label: 'Product Type', value: item.name },
      { group: 'Product Details', label: 'Available Size', value: facts.size },
      ...(details?.texture ? [{ group: 'Product Details', label: 'Texture', value: details.texture }] : []),
      { group: 'Product Details', label: 'Fragrance', value: facts.fragrance },
      { group: 'Business Details', label: 'MOQ', value: facts.moq },
      { group: 'Business Details', label: 'Sample', value: facts.sample },
      { group: 'Business Details', label: 'OEM / ODM', value: 'Private label / OEM / ODM development' },
      { group: 'Business Details', label: 'Packaging', value: facts.packaging },
      { group: 'Business Details', label: 'Lead Time', value: facts.leadTime },
      { group: 'Business Details', label: 'Target Market', value: facts.targetMarket }
    ],
    faq: createProcurementFaq(category.slug, facts, documents),
    cta: {
      heading: group.name === 'Cleansers' ? 'Build your next cleansing essential.' : `Build your next ${category.name.toLowerCase()} product.`,
      description: 'Share your target market, quantity and packaging preferences to start your project.',
      inquiryLabel: 'Request a Quote', projectLabel: 'Start Your Project', contactLabel: 'Contact Our Team'
    },
    seo: {
      title: `${item.name} OEM/ODM | CareNova Lab`, description: item.description,
      canonicalPath: path, image
    }
  };
  return { ...product, ...catalogDetailOverrides[path] };
}

export function getCatalogDetail(categorySlug: string, groupSlug: string, productSlug: string): Product | undefined {
  const category = productCategories.find(item => item.slug === categorySlug);
  const group = category?.groups.find(item => catalogSlug(item.name) === groupSlug);
  const product = group?.products.find(item => catalogSlug(item.name) === productSlug);
  return category && group && product ? toMasterProduct(category, group, product) : undefined;
}
