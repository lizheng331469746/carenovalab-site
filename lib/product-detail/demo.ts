import type { Product } from './types';
import { categoryContent, createProcurementFaq, type Procurement } from './content';
import { getPackagingOptions } from './packaging';

// One source for values shared by Hero, Overview, Specifications and FAQ.
const procurement: Procurement = {
  moq: 'Based on formula & packaging', size: 'Custom options available',
  sample: 'Availability to be confirmed', formula: 'Customizable',
  fragrance: 'Custom options subject to formula review', packaging: 'Tube / pump; compatibility review required',
  branding: 'Logo, artwork, printing and label customization',
  leadTime: 'Confirmed after sample & packaging approval', shelfLife: 'Subject to stability testing',
  targetMarket: 'Specify in your project brief'
};
const documents = 'Available documentation is confirmed with the selected manufacturing partner and target market. Factory credentials, formula documents and export requirements are reviewed separately; no product certification is implied.';
const texture = 'Cream to foam';

export const demoProduct: Product = {
  slug: 'demo-amino-acid-cleanser', name: 'Amino Acid Cream Cleanser',
  category: 'Skincare', subcategory: 'Cleansers', demo: true,
  shortDescription: 'A rinse-off cream cleanser developed for soft foam and a comfortable after-feel.',
  benefitTags: ['Gentle Cleansing', 'Cream-to-Foam', 'Comfortable After-Feel'],
  gallery: [
    { src: '', alt: 'CareNova Lab amino acid cream cleanser front view', type: 'hero', caption: 'Product Hero' },
    { src: '', alt: 'Amino acid cream cleanser packaging detail', type: 'detail', caption: 'Product Detail' },
    { src: '', alt: 'Cream cleanser texture and lather', type: 'texture', caption: 'Texture' },
    { src: '', alt: 'Amino acid cleanser ingredient direction', type: 'ingredient', caption: 'Ingredient / Product Concept' },
    { src: '', alt: 'Cream cleanser lifestyle and packaging', type: 'lifestyle', caption: 'Lifestyle / Packaging' }
  ],
  heroImage: { alt: 'CareNova Lab amino acid cream cleanser', caption: 'Product main view' },
  quickInfo: [
    { label: 'MOQ', value: procurement.moq }, { label: 'Size', value: procurement.size },
    { label: 'Sample', value: procurement.sample }, { label: 'Formula', value: procurement.formula }
  ],
  benefits: [
    { title: 'Gentle Cleansing', description: 'An amino acid-based cleansing direction targeting a mild daily wash.' },
    { title: 'Cream-to-Foam Texture', description: 'A smooth cream format designed to lather with water.' },
    { title: 'Comfortable After-Feel', description: 'A comfortable rinse is the sensory target, assessed during sample review.' }
  ],
  overview: {
    heading: 'Daily cleansing. A clear product brief.',
    description: 'A cream-format facial cleanser for a daily skincare range. Final skin suitability and performance are confirmed through formula development and testing.',
    attributes: [
      { label: 'Product Type', value: 'Rinse-off facial cleanser' },
      { label: 'Skin Type', value: 'To be confirmed with final formula' },
      { label: 'Texture', value: texture }, { label: 'Application', value: 'Face · rinse off with water' },
      { label: 'Fragrance', value: procurement.fragrance }, { label: 'Available Size', value: procurement.size }
    ]
  },
  overviewImage: { alt: 'Cleanser lifestyle and product overview', caption: 'Product overview' },
  ingredientIntroduction: 'Suggested formulation directions. Proposed ingredients are not a confirmed final INCI list.',
  ingredients: [
    { name: 'Amino Acid Surfactants', description: 'Proposed mild cleansing system.', status: 'proposed', image: { alt: 'Amino acid surfactant ingredient visual', caption: 'Amino acid surfactants' } },
    { name: 'Glycerin', description: 'Proposed humectant for moisture support.', status: 'proposed', image: { alt: 'Glycerin ingredient visual', caption: 'Glycerin' } },
    { name: 'Panthenol', description: 'Proposed conditioning ingredient; compatibility to be confirmed.', status: 'proposed', image: { alt: 'Panthenol ingredient visual', caption: 'Panthenol' } }
  ],
  texture: {
    heading: 'Smooth cream. Soft lather.',
    description: 'Develop a cream that spreads with water and rinses comfortably. Foam density and after-feel are refined during sampling.',
    attributes: ['Cream Format', 'Soft Foam', 'Comfortable Rinse']
  },
  textureImage: { alt: 'Cream cleanser texture and soft foam', caption: 'Texture and sensory detail' },
  customizationIntro: { heading: 'Make this product your own.', description: 'Customize the formula, fragrance, packaging and branding for your target market.' },
  customization: [
    { title: 'Formula', description: 'Ingredients · Texture · Performance' },
    { title: 'Scent & Appearance', description: 'Fragrance · Color · Consistency' },
    { title: 'Packaging', description: 'Bottle · Tube · Pump · Jar · Carton' },
    { title: 'Branding', description: 'Logo · Artwork · Printing · Label' }
  ],
  packagingIntroduction: 'Select a packaging direction. Capacity, material and decoration are confirmed with the chosen supplier and formula.',
  packagingOptions: getPackagingOptions(['cleanser-tube', 'cleanser-pump', 'custom-carton']),
  manufacturing: {
    introduction: 'Manufacturing and documentation requirements are reviewed for your chosen formula and destination market.',
    standards: 'Factory standards and credentials confirmed with the selected partner.',
    qualityControl: 'Raw material · Bulk · Filling · Finished product checks to be agreed.',
    testingSupport: 'Stability · Microbiological · Packaging compatibility testing to be scoped.',
    documentationSummary: 'Documentation support based on the product and destination market.',
    productCertifications: [],
    factoryCertifications: [],
    availableDocumentation: [{ name: 'Formula & quality documents', details: 'Document list to be confirmed with the manufacturing partner.', status: 'subject-to-review' }],
    regulatorySupport: [{ name: 'Label & export requirements', details: 'Scope depends on the destination market and final formula.', status: 'subject-to-review' }],
    targetMarkets: [procurement.targetMarket]
  },
  specifications: [
    { group: 'Product Details', label: 'Product Type', value: 'Rinse-off facial cleanser' },
    { group: 'Product Details', label: 'Texture', value: texture },
    { group: 'Product Details', label: 'Skin Type', value: 'To be confirmed with final formula' },
    { group: 'Product Details', label: 'Key Ingredients', value: 'Proposed: Amino Acid Surfactants · Glycerin · Panthenol' },
    { group: 'Product Details', label: 'Available Size', value: procurement.size },
    { group: 'Product Details', label: 'Fragrance', value: procurement.fragrance },
    { group: 'Product Details', label: 'Shelf Life', value: procurement.shelfLife },
    { group: 'Business Details', label: 'MOQ', value: procurement.moq },
    { group: 'Business Details', label: 'Sample', value: procurement.sample },
    { group: 'Business Details', label: 'OEM / ODM', value: 'Private label / OEM / ODM development' },
    { group: 'Business Details', label: 'Packaging', value: procurement.packaging },
    { group: 'Business Details', label: 'Lead Time', value: procurement.leadTime },
    { group: 'Business Details', label: 'Target Market', value: procurement.targetMarket }
  ],
  faq: createProcurementFaq('cleansers', procurement, documents),
  cta: {
    heading: categoryContent.cleansers.ctaHeading,
    description: 'Share your target market, quantity and packaging preferences to start a focused project discussion.',
    inquiryLabel: 'Request a Quote', projectLabel: 'Start Your Project', contactLabel: 'Contact Our Team'
  },
  seo: { title: 'Amino Acid Cream Cleanser OEM/ODM | CareNova Lab', description: 'Explore amino acid cream cleanser development, ingredient directions, packaging options and private label OEM/ODM support from CareNova Lab.', canonicalPath: '/products/demo-amino-acid-cleanser' }
};

