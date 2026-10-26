export const insightCategories = [
  { slug: 'ingredients-formulation', label: 'Ingredients & Formulation', description: 'Formula design, active ingredients, textures, stability and product performance.' },
  { slug: 'oem-odm-knowledge', label: 'OEM/ODM Knowledge', description: 'Sampling, MOQ, production planning, quality control and supply chain execution.' },
  { slug: 'packaging-customization', label: 'Packaging & Customization', description: 'Packaging formats, materials, decoration, labels and practical customization routes.' },
  { slug: 'regulatory-compliance', label: 'Regulatory & Compliance', description: 'Target-market requirements, claims, testing, certification and product documentation.' },
  { slug: 'market-insights', label: 'Market Insights', description: 'Consumer needs, category trends and commercial opportunities for beauty brands.' }
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export const insights = [
  {
    slug: 'beauty-device-companion-skincare',
    category: 'Ingredients & Formulation',
    categorySlug: 'ingredients-formulation',
    title: 'Why Beauty Devices Need Companion Skincare, Not Just a Single Gel',
    excerpt: 'A device brand can build a clearer routine, stronger repeat purchase and more complete aftercare by designing products around the full usage journey.',
    readTime: '7 min read',
    published: 'October 19, 2026',
    image: '/images/site/insight-featured-1.webp'
  },
  {
    slug: 'fragrance-body-care-collection',
    category: 'Packaging & Customization',
    categorySlug: 'packaging-customization',
    title: 'How to Build a Fragrance Body Care Collection Around Scent Scenarios',
    excerpt: 'Instead of launching unrelated body products, connect body mist, lotion, scrub and hair mist through one scent story and one consumer occasion.',
    readTime: '6 min read',
    published: 'October 13, 2026',
    image: '/images/site/insight-featured-2.webp'
  },
  {
    slug: 'scenario-based-personal-care',
    category: 'Market Insights',
    categorySlug: 'market-insights',
    title: 'From Generic Benefits to Scenario-Based Personal Care',
    excerpt: 'Products become easier to sell when the brand can explain who they are for, when they are used and how the routine fits daily life.',
    readTime: '8 min read',
    published: 'October 8, 2026',
    image: '/images/site/insight-featured-3.webp'
  },
  {
    slug: 'evaluate-cosmetic-oem-odm-partner',
    category: 'OEM/ODM Knowledge',
    categorySlug: 'oem-odm-knowledge',
    title: 'How to Evaluate an OEM/ODM Manufacturing Partner for Your Beauty Brand',
    excerpt: 'A practical framework for comparing development capability, MOQ, sampling, quality control, communication and production readiness.',
    readTime: '7 min read',
    published: 'October 3, 2026',
    image: '/images/site/insight-step-5.webp'
  },
  {
    slug: 'beauty-market-entry-compliance-checklist',
    category: 'Regulatory & Compliance',
    categorySlug: 'regulatory-compliance',
    title: 'What Beauty Brands Should Confirm Before Entering a New Market',
    excerpt: 'Define the target market early so formula, claims, labels, testing and available documents can be reviewed before production decisions are locked.',
    readTime: '6 min read',
    published: 'September 28, 2026',
    image: '/images/site/solution-scenario.webp'
  },
  {
    slug: 'active-skincare-formula-brief',
    category: 'Ingredients & Formulation',
    categorySlug: 'ingredients-formulation',
    title: 'How to Build a Clear Brief for an Active Skincare Formula',
    excerpt: 'Define the consumer, product role, texture, priority ingredients and claims direction before the first laboratory sample is prepared.',
    readTime: '6 min read',
    published: 'September 22, 2026',
    image: '/images/site/insight-step-3.webp'
  },
  {
    slug: 'choose-product-development-model',
    category: 'OEM/ODM Knowledge',
    categorySlug: 'oem-odm-knowledge',
    title: 'Private Label, Semi-Custom or Full Custom: Which Route Fits Your Launch?',
    excerpt: 'Compare speed, differentiation, MOQ and development input before choosing the right manufacturing route for a new beauty product.',
    readTime: '6 min read',
    published: 'September 18, 2026',
    image: '/images/site/product-library-flatlay.webp'
  },
  {
    slug: 'stock-packaging-vs-custom-molds',
    category: 'Packaging & Customization',
    categorySlug: 'packaging-customization',
    title: 'Stock Packaging vs Custom Molds: What Beauty Brands Should Compare',
    excerpt: 'Evaluate tooling cost, MOQ, decoration, lead time and formula compatibility before committing to a custom packaging route.',
    readTime: '5 min read',
    published: 'September 14, 2026',
    image: '/images/site/insight-step-4.webp'
  },
  {
    slug: 'cosmetic-claims-labels-documents-review',
    category: 'Regulatory & Compliance',
    categorySlug: 'regulatory-compliance',
    title: 'Cosmetic Claims, Labels and Documents: A Pre-Production Review',
    excerpt: 'Review claims, ingredient naming, warnings, label information and document availability before approving final packaging artwork.',
    readTime: '7 min read',
    published: 'September 9, 2026',
    image: '/images/site/solution-scenario.webp'
  },
  {
    slug: 'turn-beauty-trend-into-product-direction',
    category: 'Market Insights',
    categorySlug: 'market-insights',
    title: 'How to Turn a Beauty Trend Into a Scalable Product Direction',
    excerpt: 'Translate a broad trend into a defined consumer, hero SKU and range architecture that can support sampling, launch and later expansion.',
    readTime: '6 min read',
    published: 'September 4, 2026',
    image: '/images/site/insight-step-1.webp'
  }
] as const;
