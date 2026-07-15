export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  color: string;
  image: string;
  groups: { name: string; products: string[] }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'skincare',
    name: 'Skincare',
    eyebrow: 'Facial care development',
    description: 'Cleansers, toners, serums, creams and masks for private label, semi-custom and full OEM/ODM projects.',
    color: 'sage',
    image: '/images/categories/skincare.webp',
    groups: [
      { name: 'Cleansers', products: ['Amino Acid Cleanser','Foaming Cleanser','Gel Cleanser','Cream Cleanser','Exfoliating Cleanser'] },
      { name: 'Toners', products: ['Hydrating Toner','Brightening Toner','Soothing Toner','Pore Refining Toner'] },
      { name: 'Serums', products: ['Vitamin C Serum','Niacinamide Serum','Hyaluronic Acid Serum','Retinol Serum','Peptide Serum','Centella Serum'] },
      { name: 'Face Creams', products: ['Moisturizing Cream','Brightening Cream','Anti-aging Cream','Barrier Repair Cream'] },
      { name: 'Masks', products: ['Sheet Mask','Sleeping Mask','Clay Mask','Hydrating Mask'] }
    ]
  },
  {
    slug: 'body-care',
    name: 'Body Care',
    eyebrow: 'Body cleansing and treatment',
    description: 'Body wash, lotions, butters, creams, scrubs and deodorant formats for routine-based product lines.',
    color: 'rose',
    image: '/images/categories/body-care.webp',
    groups: [
      { name: 'Body Wash', products: ['Moisturizing Body Wash','Brightening Body Wash','Exfoliating Body Wash'] },
      { name: 'Body Lotion', products: ['Body Lotion','Body Butter','Body Cream'] },
      { name: 'Body Scrub', products: ['Salt Scrub','Sugar Scrub','Coffee Scrub'] },
      { name: 'Deodorant', products: ['Roll-on Deodorant','Deodorant Stick','Deodorant Spray'] }
    ]
  },
  {
    slug: 'hair-care',
    name: 'Hair Care',
    eyebrow: 'Hair and scalp systems',
    description: 'Shampoo, conditioner, masks and scalp-care products designed around routine, climate and channel needs.',
    color: 'amber',
    image: '/images/categories/hair-care.webp',
    groups: [
      { name: 'Shampoo', products: ['Moisturizing Shampoo','Anti-Dandruff Shampoo','Hair Growth Shampoo','Color Protection Shampoo'] },
      { name: 'Conditioner', products: ['Daily Conditioner','Repair Conditioner'] },
      { name: 'Hair Mask', products: ['Keratin Hair Mask','Repair Hair Mask'] },
      { name: 'Scalp Care', products: ['Scalp Scrub','Scalp Serum','Scalp Tonic'] }
    ]
  },
  {
    slug: 'sun-care',
    name: 'Sun Care',
    eyebrow: 'Daily protection and after-sun care',
    description: 'Multiple sunscreen textures and after-sun formats, with testing and claims confirmed at project level.',
    color: 'sand',
    image: '/images/categories/sun-care.webp',
    groups: [
      { name: 'Sun Care', products: ['Sunscreen Cream SPF50+','Sunscreen Lotion','Sunscreen Gel','Sunscreen Spray','Sunscreen Stick','Sunscreen Serum'] },
      { name: 'After Sun Care', products: ['After Sun Gel','Cooling Gel','Soothing Lotion'] }
    ]
  },
  {
    slug: 'soap',
    name: 'Soap',
    eyebrow: 'Bar soap and handmade formats',
    description: 'Beauty, functional, handmade and men’s soap directions for retail, gifting, hospitality and daily care.',
    color: 'lavender',
    image: '/images/categories/soap.webp',
    groups: [
      { name: 'Bar Soap', products: ['Moisturizing Soap','Brightening Soap','Herbal Soap','Goat Milk Soap','Honey Soap','Shea Butter Soap','Rose Soap','Lavender Soap','Charcoal Soap','Tea Tree Soap','Turmeric Soap','Kojic Acid Soap'] },
      { name: 'Beauty Soap', products: ['Whitening Beauty Soap','Acne Care Beauty Soap','Spot Correcting Soap','Brightening Beauty Soap'] },
      { name: 'Functional Soap', products: ['Antibacterial Soap','Deodorizing Soap','Exfoliating Soap','Oil Control Soap'] },
      { name: 'Handmade Soap', products: ['Cold Process Soap','Glycerin Soap','Essential Oil Soap','Floral Handmade Soap'] },
      { name: 'Men’s Soap', products: ['Men’s Cleansing Soap','Charcoal Men’s Soap','Sports Fresh Soap'] }
    ]
  },
  {
    slug: 'essential-oils-fragrance',
    name: 'Essential Oils & Fragrance',
    eyebrow: 'Oils, blends and fragrance formats',
    description: 'Single oils, blends, facial oils, massage oils, wellness oils, hair oils and home-fragrance oils.',
    color: 'moss',
    image: '/images/categories/essential-oils-fragrance.webp',
    groups: [
      { name: 'Single Essential Oils', products: ['Lavender Essential Oil','Tea Tree Essential Oil','Peppermint Essential Oil','Eucalyptus Essential Oil','Lemon Essential Oil','Sweet Orange Essential Oil','Grapefruit Essential Oil','Rosemary Essential Oil','Frankincense Essential Oil','Cedarwood Essential Oil'] },
      { name: 'Essential Oil Blends', products: ['Sleep Blend Oil','Relaxing Blend Oil','Focus Blend Oil','Energy Blend Oil','Breathe Blend Oil'] },
      { name: 'Facial Oils', products: ['Rosehip Oil','Jojoba Oil','Argan Oil','Squalane Facial Oil','Vitamin E Facial Oil','Peptide Facial Oil','Centella Facial Oil'] },
      { name: 'Beauty Oils', products: ['Anti-aging Facial Oil','Brightening Facial Oil','Repair Facial Oil','Hydrating Facial Oil'] },
      { name: 'Massage Oils', products: ['Lavender Massage Oil','Relaxing Massage Oil','Deep Relief Massage Oil','Sports Massage Oil','Warming Massage Oil'] },
      { name: 'Wellness Oils', products: ['Sleep Wellness Oil','Scalp Treatment Oil','Cuticle Oil','Beard Oil','Maternity Body Oil','Stretch Mark Oil'] },
      { name: 'Hair Oils', products: ['Argan Hair Oil','Repair Hair Oil','Anti-Frizz Hair Oil','Hair Growth Oil','Nourishing Scalp Oil'] },
      { name: 'Home Fragrance Oils', products: ['Diffuser Oil','Home Fragrance Oil','Hotel Scent Oil','Spa Fragrance Oil'] }
    ]
  },
  {
    slug: 'home-care',
    name: 'Home Care',
    eyebrow: 'Selected home and lifestyle care',
    description: 'Laundry, household cleaning and home-fragrance projects for distributors, hospitality and lifestyle brands.',
    color: 'blue',
    image: '/images/categories/home-care.webp',
    groups: [
      { name: 'Laundry Care', products: ['Laundry Detergent','Laundry Pods','Laundry Sheets','Fabric Softener','Stain Remover'] },
      { name: 'Household Cleaning', products: ['Multi-purpose Cleaner','Kitchen Cleaner','Bathroom Cleaner','Glass Cleaner'] },
      { name: 'Home Fragrance', products: ['Reed Diffuser','Aroma Diffuser Oil','Scented Sachet','Room Spray'] }
    ]
  }
];

export function getCategory(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}
