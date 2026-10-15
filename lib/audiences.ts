export type AudienceGroup = {
  id: string;
  title: string;
  problem: string;
  help: readonly string[];
  cta: string;
};

export const audienceGroups: readonly AudienceGroup[] = [
  {
    id: 'beauty-startups',
    title: 'Beauty Startups',
    problem: 'You need to narrow many ideas into a first launch that is commercially realistic.',
    help: ['Prioritize one hero product and supporting SKUs', 'Compare private label, semi-custom and full custom routes', 'Review packaging, MOQ and launch timing together', 'Prepare product names, packaging copy and launch content'],
    cta: 'Plan My First Product'
  },
  {
    id: 'established-beauty-brands',
    title: 'Established Beauty Brands',
    problem: 'You need to extend a proven brand without weakening its positioning, quality expectations or operational consistency.',
    help: ['Identify product and range expansion opportunities', 'Translate existing brand standards into new formats', 'Coordinate formulation, packaging and claims across SKUs', 'Plan sampling and scale-up around the launch calendar'],
    cta: 'Plan My Next Product'
  },
  {
    id: 'distributors-wholesalers',
    title: 'Distributors & Wholesalers',
    problem: 'You need a product range that fits local price points, channels, consumer habits and documentation needs.',
    help: ['Plan a focused range instead of a random catalog', 'Match product formats to the market and channel', 'Coordinate multiple SKUs and packaging formats', 'Organize project-specific document questions'],
    cta: 'Plan a Product Range'
  },
  {
    id: 'ecommerce-sellers',
    title: 'E-commerce Sellers',
    problem: 'You need products that can be explained visually, bundled clearly and replenished regularly.',
    help: ['Develop products with strong demonstration potential', 'Build bundles and routine-based collections', 'Coordinate packaging that supports online presentation', 'Prepare listing structure and key selling points'],
    cta: 'Explore E-commerce Ideas'
  },
  {
    id: 'salons-spas',
    title: 'Salons & Spas',
    problem: 'You want to extend professional services into retail and home-use products without losing routine logic.',
    help: ['Develop professional-to-home product systems', 'Create treatment support and maintenance products', 'Build branded sets and retail extensions', 'Coordinate training and launch-content direction'],
    cta: 'Develop Professional Care'
  }
] as const;

export function getAudience(id: string) {
  return audienceGroups.find((group) => group.id === id);
}

