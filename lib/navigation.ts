export const howWeWorkNavItems = [
  { label: 'OEM/ODM Services', href: '/how-we-work#oem-odm-services' },
  { label: 'Three Product Development Models', href: '/how-we-work#product-development-models' },
  { label: 'Six-Step Collaboration Process', href: '/how-we-work#six-step-process' },
  { label: 'Packaging & Production Support', href: '/how-we-work#packaging-production-support' },
  { label: 'FAQ / Project Consultation', href: '/how-we-work#project-consultation' }
] as const;

export const audienceNavItems = [
  { label: 'Beauty Startups', href: '/who-we-help#beauty-startups' },
  { label: 'Established Beauty Brands', href: '/who-we-help#established-beauty-brands' },
  { label: 'Distributors & Wholesalers', href: '/who-we-help#distributors-wholesalers' },
  { label: 'E-commerce Sellers', href: '/who-we-help#ecommerce-sellers' },
  { label: 'Salons & Spas', href: '/who-we-help#salons-spas' }
] as const;

export const insightNavItems = [
  { label: 'Ingredients & Formulation', href: '/insights#ingredients-formulation' },
  { label: 'OEM/ODM Knowledge', href: '/insights#oem-odm-knowledge' },
  { label: 'Packaging & Customization', href: '/insights#packaging-customization' },
  { label: 'Regulatory & Compliance', href: '/insights#regulatory-compliance' },
  { label: 'Market Insights', href: '/insights#market-insights' }
] as const;

export const aboutNavItems = [
  { label: 'Brand Introduction', href: '/about#brand-introduction' },
  { label: 'R&D & Innovation', href: '/about#rd-innovation' },
  { label: 'Manufacturing', href: '/about#manufacturing' },
  { label: 'Quality & Compliance', href: '/about#quality-compliance' },
  { label: 'Global Partnerships', href: '/about#global-partnerships' }
] as const;

export const primaryNav = [
  { label: 'How We Work', href: '/how-we-work', children: howWeWorkNavItems },
  { label: 'Who We Help', href: '/who-we-help', children: audienceNavItems },
  { label: 'Products', href: '/products', productMenu: true },
  { label: 'Insights', href: '/insights', children: insightNavItems },
  { label: 'About', href: '/about', children: aboutNavItems }
] as const;
