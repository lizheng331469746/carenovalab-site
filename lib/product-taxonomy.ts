export type ProductTaxonomyCategory = {
  slug: string;
  label: string;
  groups: string[];
};

export const productTaxonomy: ProductTaxonomyCategory[] = [
  { slug: 'skincare', label: 'SKINCARE', groups: ['Facial Cleansers', 'Makeup Removers', 'Toners & Facial Mists', 'Toner & Treatment Pads', 'Active Serums', 'Ampoules & Boosters', 'Freeze-Dried Skincare', 'Moisturizers & Face Creams', 'Face Masks & Hydrogel Masks', 'Facial Treatment Oils', 'Eye & Lip Treatments'] },
  { slug: 'makeup', label: 'MAKEUP', groups: ['Cushion & Base Makeup', 'Lip Makeup & Lip Oils', 'Eye & Brow Makeup', 'Cheek & Contour Makeup', 'Makeup Primers & Setting', 'Multi-Use Makeup Sticks', 'Private Label Makeup Sets'] },
  { slug: 'sun-care', label: 'SUN CARE', groups: ['SPF Creams & Lotions', 'SPF Gels & Serums', 'SPF Sprays & Mists', 'Sunscreen Sticks & Cushions', 'Tinted & Hybrid Sunscreens', 'After-Sun & Cooling Care'] },
  { slug: 'body-care', label: 'BODY CARE', groups: ['Body Wash & Shower Oils', 'Body Lotions & Butters', 'Body Scrubs & Exfoliators', 'Body Serums & Targeted Care', 'Body Mists & Moisturizing Sprays', 'Deodorants & Antiperspirants', 'Massage & Spa Oils'] },
  { slug: 'hair-care', label: 'HAIR CARE', groups: ['Shampoos & Scalp Cleansers', 'Conditioners & Hair Masks', 'Scalp Serums & Exfoliants', 'Hair Oils & Leave-In Care', 'Density & Root Care', 'Styling & Heat Protection', "Men's Hair & Beard Care"] },
  { slug: 'soap', label: 'SOAP & CLEANSING BARS', groups: ['Botanical & Moisturizing Soaps', 'Kojic Acid & Brightening Soaps', 'Clarifying & Exfoliating Soaps', 'Functional & Deodorizing Soaps', 'Handmade & Artisan Soaps', "Men's & Sports Soap Bars", 'Syndet & Solid Cleansing Bars'] },
  { slug: 'essential-oils-fragrance', label: 'OILS & AROMATHERAPY', groups: ['Single Essential Oils', 'Essential Oil Blends', 'Carrier & Botanical Oils', 'Aroma Roll-Ons & Gift Sets'] },
  { slug: 'home-care', label: 'HOME CARE', groups: ['Laundry Detergents & Pods', 'Fabric Care & Stain Treatment', 'Household Surface Cleaners', 'Reed Diffusers & Fragrance Oils', 'Room & Linen Sprays', 'Home Scent Accessories & Sets'] },
];

export const taxonomyGroupsByCategory = Object.fromEntries(
  productTaxonomy.map((category) => [category.slug, category.groups])
) as Record<string, string[]>;
