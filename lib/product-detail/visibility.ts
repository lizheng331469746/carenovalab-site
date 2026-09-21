import type { Product, ProductFact } from './types';

export function isDisplayText(value: unknown): value is string {
  return typeof value === 'string' && !!value.trim() && !/^(n\/?a|unknown|tbd)$/i.test(value.trim());
}
export function visibleFacts(items?: ProductFact[]): ProductFact[] {
  return (items ?? []).filter(item => isDisplayText(item.label) && isDisplayText(item.value));
}
export function hasSectionData(value: unknown): boolean {
  if (typeof value === 'string') return isDisplayText(value);
  if (Array.isArray(value)) return value.some(hasSectionData);
  if (value && typeof value === 'object') return Object.values(value).some(hasSectionData);
  return false;
}
/** Normalize display-only content without treating names/status/IDs as body data. */
export function displayProduct(product: Product): Product {
  const text = (value?: string) => isDisplayText(value) ? value : undefined;
  const features = (items: Product['benefits']) => (items ?? [])
    .filter(item => isDisplayText(item.title) && isDisplayText(item.description));
  const overview = product.overview ? {
    heading: text(product.overview.heading), description: text(product.overview.description),
    attributes: visibleFacts(product.overview.attributes)
  } : undefined;
  const texture = product.texture ? {
    heading: text(product.texture.heading), description: text(product.texture.description),
    attributes: product.texture.attributes?.filter(isDisplayText)
  } : undefined;
  const source = product.manufacturing;
  const manufacturing = source ? {
    introduction: text(source.introduction), standards: text(source.standards),
    qualityControl: text(source.qualityControl), testingSupport: text(source.testingSupport),
    documentationSummary: text(source.documentationSummary),
    factoryCertifications: source.factoryCertifications?.filter(item => isDisplayText(item.name) && isDisplayText(item.factory) && isDisplayText(item.scope) && isDisplayText(item.evidenceReference)),
    productCertifications: source.productCertifications?.filter(item => isDisplayText(item.name) && isDisplayText(item.scope) && isDisplayText(item.evidenceReference)),
    availableDocumentation: source.availableDocumentation?.filter(item => isDisplayText(item.name) && isDisplayText(item.details)),
    regulatorySupport: source.regulatorySupport?.filter(item => isDisplayText(item.name) && isDisplayText(item.details)),
    targetMarkets: source.targetMarkets?.filter(isDisplayText)
  } : undefined;
  return {
    ...product, shortDescription: text(product.shortDescription),
    benefitTags: product.benefitTags?.filter(isDisplayText), quickInfo: visibleFacts(product.quickInfo),
    benefits: features(product.benefits), overview, texture,
    ingredients: product.ingredients?.filter(item => isDisplayText(item.name) && isDisplayText(item.description)),
    customization: features(product.customization),
    packagingOptions: product.packagingOptions?.filter(item => isDisplayText(item.type) && (isDisplayText(item.description) || isDisplayText(item.capacity) || isDisplayText(item.material) || isDisplayText(item.decoration) || !!item.image?.src))
      .map(item => ({ ...item, description: text(item.description) ?? '' })),
    manufacturing, specifications: visibleFacts(product.specifications),
    faq: product.faq?.filter(item => isDisplayText(item.question) && isDisplayText(item.answer))
  };
}
