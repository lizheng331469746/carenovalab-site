/** Shared contract for the reusable PDP; legacy catalog stays independent. */
export interface ProductImage { src?: `${string}.webp` | ''; alt: string; caption?: string }
export interface GalleryImage extends ProductImage { type: 'hero' | 'detail' | 'texture' | 'ingredient' | 'lifestyle' }
export interface ProductFeature { title: string; description: string }
export interface ProductFact { label: string; value: string }
export interface Ingredient { name: string; description: string; status: 'confirmed' | 'proposed'; image?: ProductImage }
export interface PackagingOption {
  id: string; type: string; capacity: string; material?: string; decoration?: string;
  description: string; image: ProductImage;
}
export interface SupportItem { name: string; details: string; status: 'confirmed' | 'subject-to-review' }
export interface Manufacturing {
  introduction?: string; standards?: string; qualityControl?: string; testingSupport?: string; documentationSummary?: string;
  factoryCertifications?: { name: string; factory: string; scope: string; evidenceReference: string }[];
  availableDocumentation?: SupportItem[]; regulatorySupport?: SupportItem[]; targetMarkets?: string[];
}
export interface Product {
  slug: string; name: string; category: string; subcategory?: string; shortDescription?: string; demo: boolean;
  gallery?: GalleryImage[];
  /** Backward-compatible fallback when gallery is empty. */
  heroImage?: ProductImage;
  benefitTags?: string[];
  quickInfo?: ProductFact[];
  benefits?: ProductFeature[];
  overview?: { heading?: string; description?: string; attributes?: ProductFact[] };
  overviewImage?: ProductImage;
  ingredientIntroduction?: string; ingredients?: Ingredient[];
  texture?: { heading?: string; description?: string; attributes?: string[] };
  textureImage?: ProductImage;
  customization?: ProductFeature[];
  packagingIntroduction?: string; packagingOptions?: PackagingOption[];
  manufacturing?: Manufacturing; specifications?: ProductFact[];
  faq?: { question: string; answer: string }[];
  cta?: { heading: string; description: string; inquiryLabel: string; projectLabel: string; contactLabel: string };
  seo: { title: string; description: string; canonicalPath: `/products/${string}`; image?: ProductImage };
}
