import type { Product } from './types';

export const categoryContent = {
  cleansers: { productNoun: 'cleanser', ctaHeading: 'Build your next cleansing essential.' },
  'body-care': { productNoun: 'body care product', ctaHeading: 'Build your next body care product.' },
  'hair-care': { productNoun: 'hair care product', ctaHeading: 'Build your next hair care product.' }
} as const;
export interface Procurement {
  moq: string; size: string; sample: string; formula: string; fragrance: string;
  packaging: string; branding: string; leadTime: string; shelfLife: string; targetMarket: string;
}
// Category and product data generate the default FAQ; a product can override the array.
export function createProcurementFaq(category: keyof typeof categoryContent, facts: Procurement, documents: string): Product['faq'] {
  return [
    { question: 'Can I customize the formula?', answer: `${facts.formula}. Share your ingredient and texture requirements for your ${categoryContent[category].productNoun}. Final INCI and performance claims require formula approval.` },
    { question: 'What is the MOQ?', answer: `${facts.moq}. Include your preferred quantity and packaging in your quote request.` },
    { question: 'Can I order samples?', answer: `${facts.sample}. Contact the team to confirm sample availability, cost and timing before ordering.` },
    { question: 'Can I use my own packaging?', answer: 'Submit the container specification for filling and formula compatibility review before confirming supply.' },
    { question: 'Can you customize the fragrance?', answer: `${facts.fragrance}. Share your fragrance brief for formula compatibility review.` },
    { question: 'What is the typical lead time?', answer: `${facts.leadTime}. Share your launch date so the team can review the production schedule.` },
    { question: 'What documents can you provide?', answer: documents }
  ];
}
