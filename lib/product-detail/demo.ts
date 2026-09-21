import type { Product } from './types';

export const demoProduct: Product = {
  slug: 'demo-amino-acid-cleanser',
  name: 'Amino Acid Cream Cleanser',
  category: 'Skincare / Cleansers',
  summary: 'A creamy daily cleansing concept designed around a soft foam and a comfortable rinse. Develop the formula, sensory profile and packaging for your brand.',
  demo: true,
  tags: ['Cream-to-foam concept', 'Daily cleansing', 'Private label / OEM / ODM'],
  hero: { alt: 'CareNova Lab amino acid cream cleanser packaging concept', caption: 'Product packaging · main view' },
  benefits: [
    { title: 'A softer daily ritual', description: 'Explore an amino acid-based cleansing system with a mild-feeling wash experience.' },
    { title: 'Creamy foam, easy rinse', description: 'Develop a cushiony lather and a clean finish to match your intended customer experience.' },
    { title: 'Made for your brand', description: 'Choose the formula direction, fragrance approach and packaging presentation together.' }
  ],
  overview: { heading: 'Everyday cleansing, thoughtfully developed.', paragraphs: ['A starting point for brands building a daily facial cleansing range. This concept pairs a cream format with a soft foam direction and a refined, practical pack.', 'The final formula, suitability, performance and label claims are determined through sample development and testing. This demo describes a development brief, not a validated finished formula.'], image: { alt: 'Cleanser collection and daily cleansing setting', caption: 'Product overview · lifestyle image' } },
  ingredients: { introduction: 'Proposed ingredient directions for discussion. Final INCI, concentrations and claims require formula confirmation.', items: [
    { title: 'Amino acid-based surfactants', description: 'Explore the cleansing blend and foam profile during formulation.' },
    { title: 'Glycerin', description: 'A humectant option to consider for the desired formula feel.' },
    { title: 'Panthenol', description: 'An optional conditioning ingredient, subject to formulation compatibility.' }
  ] },
  texture: { heading: 'From a smooth cream to a soft lather.', description: 'Target a smooth dispensing texture that spreads with water and rinses comfortably. Foam density, fragrance and after-feel are adjusted through sampling.', attributes: ['Cream format', 'Soft foam direction', 'Rinse-off application'], image: { alt: 'Cream cleanser texture and foam detail', caption: 'Texture · cream and foam close-up' } },
  customization: [
    { title: 'Formula direction', description: 'Define the cleansing system, ingredient priorities and target sensory experience.' },
    { title: 'Scent & appearance', description: 'Discuss fragrance-free or fragranced options, color and consistency.' },
    { title: 'Brand presentation', description: 'Coordinate artwork, decoration and secondary packaging with your brand identity.' },
    { title: 'Market brief', description: 'Share your target country, channel and desired claims before development begins.' }
  ],
  packaging: { introduction: 'Packaging directions for sample review. Capacity, material, decoration and compatibility are confirmed before production.', options: [
    { title: 'Soft-touch tube', description: 'A compact tube with a flip-top closure for everyday use.', image: { alt: 'Soft-touch cleanser tube packaging concept', caption: 'Tube · packaging concept' } },
    { title: 'Pump bottle', description: 'A pump format, subject to viscosity and dispensing compatibility.', image: { alt: 'Cleanser pump bottle packaging concept', caption: 'Pump · packaging concept' } },
    { title: 'Custom carton', description: 'A coordinated outer carton with market-specific artwork.', image: { alt: 'CareNova Lab cleanser carton concept', caption: 'Carton · packaging concept' } }
  ] },
  manufacturing: { introduction: 'Documentation and testing requirements are scoped for the selected formula, manufacturing partner and destination market.', items: [
    { title: 'Sample approval', description: 'Review formula appearance, scent, performance and packaging before confirming production specifications.' },
    { title: 'Testing plan', description: 'Discuss stability, microbiological and pack compatibility testing appropriate to the project.' },
    { title: 'Documentation review', description: 'Confirm available ingredient, quality and manufacturing documents with the selected supplier. Certifications are not implied by this concept.' }
  ] },
  specifications: [
    { label: 'Product type', value: 'Rinse-off facial cleanser' },
    { label: 'Texture direction', value: 'Cream to foam' },
    { label: 'Branding', value: 'Private label / OEM / ODM' },
    { label: 'Capacity & material', value: 'To be confirmed with packaging selection' },
    { label: 'INCI & pH', value: 'To be confirmed after formula approval' },
    { label: 'MOQ', value: 'Quoted by formula, packaging and development route' },
    { label: 'Sample & production lead time', value: 'Confirmed after project review' },
    { label: 'Target market', value: 'Defined in your project brief' }
  ],
  faq: [
    { question: 'Can we customize the formula?', answer: 'Yes. Share your ingredient priorities, desired texture and target market so the team can assess a suitable development route.' },
    { question: 'What is the minimum order quantity?', answer: 'MOQ depends on the selected formula, packaging and customization scope. Request a quote with your preferred quantity and packaging format.' },
    { question: 'Is this a finished, tested product?', answer: 'This page is a demonstration of a product development concept. Final ingredients, performance claims, testing and production specifications require confirmation.' },
    { question: 'How do we start sampling?', answer: 'Use Request a Quote to speak with a product consultant, or submit a project brief with your target market, expected quantity and packaging preferences.' }
  ],
  cta: { heading: 'Build your next cleansing essential.', description: 'Tell us about your brand, target market and preferred packaging. We will help define the next development step.', inquiryLabel: 'Request a Quote', projectLabel: 'Start Your Project' },
  seo: { title: 'Amino Acid Cream Cleanser OEM/ODM | CareNova Lab', description: 'Explore a customizable cream cleanser concept for private label skincare, with formula development, packaging options and project consultation.', canonicalPath: '/products/demo-amino-acid-cleanser' }
};
