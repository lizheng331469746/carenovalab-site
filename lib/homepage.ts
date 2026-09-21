import { productCategories } from './products';
import { insights } from './insights';

export type HomeImage = { src?: string; alt: string; role: 'hero'|'category'|'product'|'process'|'project'|'factory'|'insight' };
export const placeholder = (role: HomeImage['role'], alt: string): HomeImage => ({ alt, role });
export const homeCategories = productCategories.slice(0, 5).map((category, index) => ({
  ...category, image: placeholder('category', `${category.name} product development`), layout: index === 0 ? 'large' : index === 1 ? 'medium' : 'small'
}));
export const homeProducts = productCategories.flatMap(category => category.groups.flatMap(group => group.products.slice(0, 1).map(product => ({
  name: product.name, description: product.description, category: category.name, image: placeholder('product', `${product.name} product`), href: `/products/${category.slug}/${group.name.toLowerCase().replace(/\s+/g, '-')}/${product.name.toLowerCase().replace(/\s+/g, '-')}`
})))).slice(0, 6);
export const homeInsights = insights.slice(0, 3);
export const processSteps = [
  ['01', 'Market & Product Direction', 'Clarify the customer, category and commercial opportunity.'],
  ['02', 'Formula Development', 'Match the right formula route and sensory direction.'],
  ['03', 'Packaging Development', 'Coordinate format, decoration and brand presentation.'],
  ['04', 'Sampling & Refinement', 'Review samples, testing needs and production readiness.'],
  ['05', 'Production & Delivery', 'Coordinate manufacturing, quality checkpoints and delivery.']
] as const;
export const journey = ['Brief', 'Development', 'Sample', 'Production', 'QC', 'Delivery'];
export const capabilities = [
  ['01', 'PRODUCT DEVELOPMENT', 'From concept and formula to production-ready products.'],
  ['02', 'FLEXIBLE CUSTOMIZATION', 'Formula, texture, fragrance, packaging and branding.'],
  ['03', 'QUALITY & COMPLIANCE', 'Manufacturing and documentation support by market.'],
  ['04', 'GLOBAL EXECUTION', 'Production, export coordination and delivery support.']
] as const;
