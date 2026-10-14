export const solutionNavItems = [
  { label: 'Private Label Cosmetics', href: '/solutions#private-label-cosmetics' },
  { label: 'Custom Formulation Development', href: '/solutions#custom-formulation-development' },
  { label: 'Packaging & Branding Solutions', href: '/solutions#packaging-branding-solutions' },
  { label: 'Low MOQ Manufacturing', href: '/solutions#low-moq-manufacturing' },
  { label: 'Regulatory & Compliance Support', href: '/solutions#regulatory-compliance-support' }
] as const;

export const audienceNavItems = [
  { label: 'Beauty Startups', href: '/who-we-help#beauty-startups' },
  { label: 'Established Beauty Brands', href: '/who-we-help#established-beauty-brands' },
  { label: 'Distributors & Wholesalers', href: '/who-we-help#distributors-wholesalers' },
  { label: 'E-commerce & Amazon Sellers', href: '/who-we-help#ecommerce-amazon-sellers' },
  { label: 'Salons & Spa Businesses', href: '/who-we-help#salons-spa-businesses' }
] as const;

export const insightNavItems = [
  { label: 'Formulation & Ingredients', href: '/insights#formulation-ingredients' },
  { label: 'Packaging & Customization', href: '/insights#packaging-customization' },
  { label: 'OEM/ODM Manufacturing', href: '/insights#oem-odm-manufacturing' },
  { label: 'Regulatory & Compliance', href: '/insights#regulatory-compliance' },
  { label: 'Beauty Market Trends', href: '/insights#beauty-market-trends' }
] as const;

export const primaryNav = [
  { label: 'Product Solutions', href: '/solutions', children: solutionNavItems },
  { label: 'Products', href: '/products', productMenu: true },
  { label: 'Who We Help', href: '/who-we-help', children: audienceNavItems },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Insights', href: '/insights', children: insightNavItems },
  { label: 'About', href: '/about' }
] as const;
