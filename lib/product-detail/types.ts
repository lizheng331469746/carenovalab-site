/** Shared contract for the new detail template; legacy catalog remains unchanged. */
export interface ProductImage {
  src?: `${string}.webp`;
  alt: string;
  caption: string;
}
export interface ProductFeature { title: string; description: string }
export interface Product {
  slug: string;
  name: string;
  category: string;
  summary: string;
  demo: boolean;
  tags: string[];
  hero: ProductImage;
  benefits: ProductFeature[];
  overview: { heading: string; paragraphs: string[]; image: ProductImage };
  ingredients: { introduction: string; items: ProductFeature[] };
  texture: { heading: string; description: string; attributes: string[]; image: ProductImage };
  customization: ProductFeature[];
  packaging: { introduction: string; options: (ProductFeature & { image: ProductImage })[] };
  manufacturing: { introduction: string; items: ProductFeature[] };
  specifications: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  cta: { heading: string; description: string; inquiryLabel: string; projectLabel: string };
  seo: { title: string; description: string; canonicalPath: `/products/${string}`; image?: ProductImage };
}
