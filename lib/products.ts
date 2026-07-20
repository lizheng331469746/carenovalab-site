export type Product = {
  name: string;
  description: string;
  image?: string;
  tags?: string[];
  moq?: string;
};

export type ProductGroup = {
  name: string;
  products: Product[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  color: string;
  image: string;
  groups: ProductGroup[];
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
      { 
        name: 'Cleansers', 
        products: [
          { name: 'Amino Acid Cleanser', description: 'Gentle pH-balanced formula with dense micro-foam. Preserves moisture barrier while removing impurities.' },
          { name: 'Foaming Cleanser', description: 'Deep-cleansing airy foam that effectively removes oil and debris without over-drying the skin.' },
          { name: 'Gel Cleanser', description: 'Lightweight, refreshing gel texture suitable for all skin types, especially oily and combination skin.' },
          { name: 'Cream Cleanser', description: 'Rich, nourishing formula designed for dry or sensitive skin to cleanse while adding hydration.' },
          { name: 'Exfoliating Cleanser', description: 'Dual-action formula with gentle acids or beads to resurface skin texture and brighten tone.' }
        ] 
      },
      { 
        name: 'Toners', 
        products: [
          { name: 'Hydrating Toner', description: 'Instant moisture boost with multi-weight hyaluronic acid to prep skin for serums.' },
          { name: 'Brightening Toner', description: 'Infused with Vitamin C and botanical extracts to clarify complexion and improve radiance.' },
          { name: 'Soothing Toner', description: 'Calming formula with Centella and Chamomile to reduce redness and irritation.' },
          { name: 'Pore Refining Toner', description: 'Astringent-free formula with BHA to clear pores and balance sebum production.' }
        ] 
      },
      { 
        name: 'Serums', 
        products: [
          { name: 'Vitamin C Serum', description: 'High-stability 10% L-Ascorbic Acid derivative. Targets radiance, dark spots, and photo-aging protection.' },
          { name: 'Niacinamide Serum', description: 'Concentrated Vitamin B3 to improve skin texture, minimize pores, and strengthen the barrier.' },
          { name: 'Hyaluronic Acid Serum', description: 'Deeply penetrating multi-layered hydration for plump, bouncy, and hydrated skin.' },
          { name: 'Retinol Serum', description: 'Time-release 0.3% pure retinol for age-defying results with minimized sensitivity.' },
          { name: 'Peptide Serum', description: 'Advanced multi-peptide complex designed to support collagen synthesis and skin elasticity.' },
          { name: 'Centella Serum', description: 'Pure cica extract formula to accelerate skin recovery and soothe stressed complexions.' }
        ] 
      },
      { 
        name: 'Face Creams', 
        products: [
          { name: 'Moisturizing Cream', description: 'Ceramide-rich daily moisturizer for long-lasting hydration and barrier support.' },
          { name: 'Brightening Cream', description: 'Radiance-boosting moisturizer that evens skin tone while providing protective antioxidants.' },
          { name: 'Anti-aging Cream', description: 'Rich firming cream with retinol and firming peptides for mature skin restoration.' },
          { name: 'Barrier Repair Cream', description: 'Soothes compromised skin with panthenol and lipids for intensive recovery and comfort.' }
        ] 
      },
      { 
        name: 'Masks', 
        products: [
          { name: 'Sheet Mask', description: 'Ultra-thin biodegradable sheet infused with concentrated essences for immediate results.' },
          { name: 'Sleeping Mask', description: 'Overnight leave-on treatment that deeply nourishes and restores skin while you sleep.' },
          { name: 'Clay Mask', description: 'Mineral-rich kaolin and bentonite base to draw out impurities and detoxify pores.' },
          { name: 'Hydrating Mask', description: 'Intensive wash-off cream mask for a quick 10-minute moisture infusion.' }
        ] 
      }
    ]
  },
  {
    slug: 'makeup',
    name: 'Makeup',
    eyebrow: 'Professional color cosmetics',
    description: 'Foundation, concealer, eye, lip and tool formats for private label, semi-custom and full OEM/ODM projects.',
    color: 'rose',
    image: '/images/categories/skincare.webp',
    groups: [
      { 
        name: 'Face & Cheek', 
        products: [
          { name: 'Foundation', description: 'Build-able medium-to-full coverage with a skin-like satin finish. 12-hour wear formula.' },
          { name: 'Concealer', description: 'High-pigment, crease-proof formula to mask imperfections and brighten the undereye area.' },
          { name: 'Face Primers', description: 'Pre-makeup base that blurs pores and extends foundation wear for a flawless look.' },
          { name: 'Setting Sprays', description: 'Fine mist that locks makeup in place while providing a dewy or matte finish.' },
          { name: 'Face Powders', description: 'Micro-milled translucent or tinted powders to set makeup and control shine.' },
          { name: 'Blush', description: 'Velvety powder or cream blushes with high color payoff for a healthy flush.' },
          { name: 'Highlighter', description: 'Luminous pearlescent formulas to accentuate high points of the face with glow.' },
          { name: 'Bronzer', description: 'Sun-kissed warmth with silky matte or shimmer textures for professional contouring.' }
        ] 
      },
      { 
        name: 'Eyes & Brows', 
        products: [
          { name: 'Palettes', description: 'Multi-finish eyeshadow palettes available in 4, 9, 12, and 18-well formats.' },
          { name: 'Single Eyeshadow', description: 'High-impact single pods in matte, shimmer, and metallic finishes with custom casing.' },
          { name: 'Mascara', description: 'Volumizing and lengthening formulas with a variety of specialized brush heads.' },
          { name: 'Eyeliners', description: 'Smudge-proof liquid, gel, and felt-tip formats in deep carbon black and fashion tones.' },
          { name: 'Pencils', description: 'Defining brow and eye pencils with smooth-glide formulas for professional shaping.' },
          { name: 'Brow Gels', description: 'Sculpt and set brow fixatives in clear or tinted fiber-rich formulas for natural looks.' },
          { name: 'Eye Primers', description: 'Smoothing base to prevent creasing and intensify eyeshadow pigment for all-day wear.' }
        ] 
      },
      { 
        name: 'Lips', 
        products: [
          { name: 'Liquid Lipsticks', description: 'Ultra-pigmented matte formula with zero-transfer technology for long-lasting wear.' },
          { name: 'Lip Gloss', description: 'High-shine, non-sticky gloss with nourishing oils and varied shimmer levels.' },
          { name: 'Bullet Lipsticks', description: 'Classic cream, matte, or sheer lipsticks in high-end customized packaging.' },
          { name: 'Lip Liners', description: 'Precision pencils that prevent bleeding and define lip shape with creamy comfort.' },
          { name: 'Lip Tints', description: 'Water-based or oil-based stains that provide a natural, long-wearing flush of color.' },
          { name: 'Lip Oils', description: 'Hybrid lip care and shine, infused with botanicals for deep hydration and comfort.' },
          { name: 'Lip Kits', description: 'Coordinated lip liner and lipstick duos for a perfectly curated professional lip look.' }
        ] 
      },
      { 
        name: 'Tools & Accessories', 
        products: [
          { name: 'Brushes', description: 'Professional-grade synthetic or natural hair brushes with custom handle and ferrule options.' },
          { name: 'Sponges', description: 'Latex-free makeup blenders designed for seamless foundation and concealer application.' },
          { name: 'Makeup Bags', description: 'High-quality cosmetic organizers and travel cases with custom logo and material choices.' }
        ] 
      }
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
      { 
        name: 'Body Wash', 
        products: [
          { name: 'Moisturizing Body Wash', description: 'Creamy, sulfate-free cleanser that leaves skin feeling soft, smooth, and hydrated.' },
          { name: 'Brightening Body Wash', description: 'Infused with Niacinamide and Vitamin C to improve skin tone during the cleansing ritual.' },
          { name: 'Exfoliating Body Wash', description: 'Gentle daily exfoliation with AHA/BHA or natural scrubs to reveal smoother skin.' }
        ] 
      },
      { 
        name: 'Body Lotion', 
        products: [
          { name: 'Body Lotion', description: 'Lightweight, fast-absorbing daily moisturizer for smooth and comfortable skin.' },
          { name: 'Body Butter', description: 'Ultra-rich whipped texture with shea butter for intensive nourishment of very dry skin.' },
          { name: 'Body Cream', description: 'High-performance moisturizing cream that provides a protective barrier and deep comfort.' }
        ] 
      },
      { 
        name: 'Body Scrub', 
        products: [
          { name: 'Salt Scrub', description: 'Mineral-rich sea salt base for vigorous exfoliation and skin detoxification.' },
          { name: 'Sugar Scrub', description: 'Gentle sugar-based exfoliant infused with oils for smooth, glowing skin texture.' },
          { name: 'Coffee Scrub', description: 'Revitalizing scrub that targets skin texture and firmness with natural caffeine.' }
        ] 
      },
      { 
        name: 'Deodorant', 
        products: [
          { name: 'Roll-on Deodorant', description: 'Long-lasting protection with a quick-drying, skin-friendly formula in convenient packaging.' },
          { name: 'Deodorant Stick', description: 'Smooth-glide solid deodorant that provides effective odor control without white marks.' },
          { name: 'Deodorant Spray', description: 'Refreshing, fine-mist spray for instant freshness and reliable all-day protection.' }
        ] 
      }
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
      { 
        name: 'Shampoo', 
        products: [
          { name: 'Moisturizing Shampoo', description: 'Hydrating formula that restores moisture balance and shine to dry, dull hair.' },
          { name: 'Anti-Dandruff Shampoo', description: 'Effective scalp treatment that eliminates flakes while soothing itchiness and irritation.' },
          { name: 'Hair Growth Shampoo', description: 'Strengthening cleanser with biotin and caffeine to support hair density and scalp health.' },
          { name: 'Color Protection Shampoo', description: 'Gentle, pH-balanced formula that prevents fading and enhances color vibrancy.' }
        ] 
      },
      { 
        name: 'Conditioner', 
        products: [
          { name: 'Daily Conditioner', description: 'Weightless detangling and smoothing for manageable, healthy-looking hair every day.' },
          { name: 'Repair Conditioner', description: 'Intensive restorative formula for damaged or chemically-treated hair to rebuild strength.' }
        ] 
      },
      { 
        name: 'Hair Mask', 
        products: [
          { name: 'Keratin Hair Mask', description: 'Deep-penetrating protein treatment to smooth frizz and reconstruct hair fibers.' },
          { name: 'Repair Hair Mask', description: 'Nourishing weekly treatment to rescue dry hair and restore elasticity and softness.' }
        ] 
      },
      { 
        name: 'Scalp Care', 
        products: [
          { name: 'Scalp Scrub', description: 'Physical and chemical exfoliant to remove buildup and revitalize the hair follicles.' },
          { name: 'Scalp Serum', description: 'Concentrated treatment to balance oil production, soothe irritation, or support growth.' },
          { name: 'Scalp Tonic', description: 'Refreshing leave-on spray to maintain a healthy scalp environment and refresh hair.' }
        ] 
      }
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
      { 
        name: 'Sun Care', 
        products: [
          { name: 'Sunscreen Cream SPF50+', description: 'Broad-spectrum UVA/UVB protection with a comfortable, non-greasy texture.' },
          { name: 'Sunscreen Lotion', description: 'Lightweight fluid sun protection suitable for face and body, with invisible finish.' },
          { name: 'Sunscreen Gel', description: 'Refreshing, fast-absorbing gel formula ideal for oily skin and sports activities.' },
          { name: 'Sunscreen Spray', description: 'Fine-mist application for easy re-application over makeup or for full body coverage.' },
          { name: 'Sunscreen Stick', description: 'Portable, targeted sun protection for high-risk areas like nose, ears, and cheekbones.' },
          { name: 'Sunscreen Serum', description: 'Hybrid skincare and sun protection, providing hydration and high SPF in a serum texture.' }
        ] 
      },
      { 
        name: 'After Sun Care', 
        products: [
          { name: 'After Sun Gel', description: 'Soothing Aloe Vera-based gel to instantly cool and hydrate sun-exposed skin.' },
          { name: 'Cooling Gel', description: 'Immediate relief for sunburnt or overheated skin with menthol and calming botanicals.' },
          { name: 'Soothing Lotion', description: 'Restorative moisturizer that prevents peeling and extends your sun-kissed glow.' }
        ] 
      }
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
      { 
        name: 'Bar Soap', 
        products: [
          { name: 'Moisturizing Soap', description: 'Rich in glycerin and oils to cleanse without stripping the skin\'s natural moisture.' },
          { name: 'Brightening Soap', description: 'Contains natural brightening agents like kojic acid or lemon to even skin tone.' },
          { name: 'Herbal Soap', description: 'Traditional bar soap infused with botanical extracts for a natural cleansing experience.' },
          { name: 'Goat Milk Soap', description: 'Ultra-gentle formula ideal for sensitive skin, providing creamy lather and hydration.' },
          { name: 'Honey Soap', description: 'Antibacterial and moisturizing bar that leaves skin feeling soft and naturally cleansed.' },
          { name: 'Shea Butter Soap', description: 'Luxury bar with high shea butter content for deep nourishment and skin elasticity.' },
          { name: 'Rose Soap', description: 'Delicately scented bar that provides a floral sensory experience and gentle cleansing.' },
          { name: 'Lavender Soap', description: 'Calming aromatherapy bar that relaxes the mind while gently purifying the skin.' },
          { name: 'Charcoal Soap', description: 'Deep-cleansing bar with activated charcoal to draw out impurities and control oil.' },
          { name: 'Tea Tree Soap', description: 'Clarifying bar with natural antiseptic properties to help clear blemish-prone skin.' },
          { name: 'Turmeric Soap', description: 'Anti-inflammatory bar that targets uneven skin tone and promotes a healthy glow.' },
          { name: 'Kojic Acid Soap', description: 'Specialized formula for intensive brightening and targeting dark spots and pigmentation.' }
        ] 
      },
      { 
        name: 'Beauty Soap', 
        products: [
          { name: 'Whitening Beauty Soap', description: 'Formulated for effective skin lightening and achieving a more luminous complexion.' },
          { name: 'Acne Care Beauty Soap', description: 'Targeted bar that helps control breakouts and reduce redness on face and body.' },
          { name: 'Spot Correcting Soap', description: 'Targets localized hyperpigmentation and blemish scars for more even-toned skin.' },
          { name: 'Brightening Beauty Soap', description: 'Daily beauty bar designed to enhance natural radiance and skin clarity.' }
        ] 
      },
      { 
        name: 'Functional Soap', 
        products: [
          { name: 'Antibacterial Soap', description: 'Provides deep hygiene and protection against germs for all-day cleanliness.' },
          { name: 'Deodorizing Soap', description: 'Targets body odor at the source with natural neutralizing agents and fresh scents.' },
          { name: 'Exfoliating Soap', description: 'Bar with natural loofah or walnut shells to smooth skin texture while cleansing.' },
          { name: 'Oil Control Soap', description: 'Balances sebum production for a fresh, matte skin feel without over-drying.' }
        ] 
      },
      { 
        name: 'Handmade Soap', 
        products: [
          { name: 'Cold Process Soap', description: 'Traditional handmade bar made with natural oils to preserve their beneficial properties.' },
          { name: 'Glycerin Soap', description: 'Translucent, gentle bar that provides high humectant properties for hydrated skin.' },
          { name: 'Essential Oil Soap', description: 'Premium bar infused with pure essential oils for a functional aromatherapy experience.' },
          { name: 'Floral Handmade Soap', description: 'Artisanal bar featuring real dried petals and high-quality floral fragrances.' }
        ] 
      },
      { 
        name: 'Men’s Soap', 
        products: [
          { name: 'Men’s Cleansing Soap', description: 'Rugged cleansing bar designed for men\'s skin needs with masculine scent profiles.' },
          { name: 'Charcoal Men’s Soap', description: 'Intensive detox bar for deep pore cleansing and effective oil control.' },
          { name: 'Sports Fresh Soap', description: 'Energizing bar with cooling menthol for post-workout freshness and hygiene.' }
        ] 
      }
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
      { 
        name: 'Single Essential Oils', 
        products: [
          { name: 'Lavender Essential Oil', description: 'Pure therapeutic grade oil for relaxation, sleep support, and skin soothing.' },
          { name: 'Tea Tree Essential Oil', description: 'Powerful purifying oil ideal for targeted blemish care and household hygiene.' },
          { name: 'Peppermint Essential Oil', description: 'Invigorating oil that supports focus, respiratory clarity, and muscle relief.' },
          { name: 'Eucalyptus Essential Oil', description: 'Refreshing aroma that promotes clear breathing and mental revitalisation.' },
          { name: 'Lemon Essential Oil', description: 'Bright, zesty oil that supports skin radiance and natural home cleaning.' },
          { name: 'Sweet Orange Essential Oil', description: 'Uplifting citrus oil that promotes a positive mood and brightens complexion.' },
          { name: 'Grapefruit Essential Oil', description: 'Refreshing oil that supports skin firmness and natural detoxification.' },
          { name: 'Rosemary Essential Oil', description: 'Stimulating oil for scalp health, hair growth support, and mental clarity.' },
          { name: 'Frankincense Essential Oil', description: 'Regal oil for anti-aging skin support and deep meditative relaxation.' },
          { name: 'Cedarwood Essential Oil', description: 'Grounding woody oil for hair care support and a peaceful home environment.' }
        ] 
      },
      { 
        name: 'Essential Oil Blends', 
        products: [
          { name: 'Sleep Blend Oil', description: 'Expertly curated mix of calming oils to promote deep, restorative rest.' },
          { name: 'Relaxing Blend Oil', description: 'Soothing combination designed to melt away stress and mental tension.' },
          { name: 'Focus Blend Oil', description: 'Sharpening aromatic mix that supports concentration and mental performance.' },
          { name: 'Energy Blend Oil', description: 'Vitalizing citrus and spice blend to boost alertness and daily motivation.' },
          { name: 'Breathe Blend Oil', description: 'Refreshing herbal combination to support clear airways and easy breathing.' }
        ] 
      },
      { 
        name: 'Facial Oils', 
        products: [
          { name: 'Rosehip Oil', description: 'Cold-pressed regenerative oil rich in Vitamin A and essential fatty acids.' },
          { name: 'Jojoba Oil', description: 'Pure biomimetic oil that balances sebum and provides lightweight hydration.' },
          { name: 'Argan Oil', description: 'Liquid gold for intensive nourishment of both skin barrier and hair fibers.' },
          { name: 'Squalane Facial Oil', description: 'Ultra-stable moisturizing oil that provides immediate softness and glow.' },
          { name: 'Vitamin E Facial Oil', description: 'High-performance antioxidant oil that protects skin from environmental damage.' },
          { name: 'Peptide Facial Oil', description: 'Unique oil-based peptide treatment to support skin firmness and elasticity.' },
          { name: 'Centella Facial Oil', description: 'Calming oil infusion that rescues stressed skin and reduces redness.' }
        ] 
      },
      { 
        name: 'Beauty Oils', 
        products: [
          { name: 'Anti-aging Facial Oil', description: 'Targeted oil treatment to reduce fine lines and improve skin texture.' },
          { name: 'Brightening Facial Oil', description: 'Radiance-boosting oil blend that targets dullness and uneven tone.' },
          { name: 'Repair Facial Oil', description: 'Intensive barrier recovery oil for dry, compromised, or sensitive skin.' },
          { name: 'Hydrating Facial Oil', description: 'Instantly plumping oil that locks in moisture and prevents dehydration.' }
        ] 
      },
      { 
        name: 'Massage Oils', 
        products: [
          { name: 'Lavender Massage Oil', description: 'Relaxing body oil base infused with lavender for professional spa treatments.' },
          { name: 'Relaxing Massage Oil', description: 'Luxury blend designed to soothe muscles and calm the mind during massage.' },
          { name: 'Deep Relief Massage Oil', description: 'Targeted warming oil mix to alleviate muscle tension and post-sport fatigue.' },
          { name: 'Sports Massage Oil', description: 'Invigorating oil that supports muscle recovery and pre-workout preparation.' },
          { name: 'Warming Massage Oil', description: 'Comforting heat-effect oil for intensive muscle relaxation and circulation.' }
        ] 
      },
      { 
        name: 'Wellness Oils', 
        products: [
          { name: 'Sleep Wellness Oil', description: 'Aromatic body oil to be used as part of a calming evening ritual.' },
          { name: 'Scalp Treatment Oil', description: 'Intensive pre-wash oil to revitalize hair follicles and balance the scalp.' },
          { name: 'Cuticle Oil', description: 'Nutrient-rich treatment for healthy nails and conditioned, soft cuticles.' },
          { name: 'Beard Oil', description: 'Conditioning oil for a soft, healthy beard and moisturized skin underneath.' },
          { name: 'Maternity Body Oil', description: 'Ultra-safe, nourishing oil to maintain skin elasticity during pregnancy.' },
          { name: 'Stretch Mark Oil', description: 'Targeted treatment to minimize the appearance and prevent stretch marks.' }
        ] 
      },
      { 
        name: 'Hair Oils', 
        products: [
          { name: 'Argan Hair Oil', description: 'Smooths frizz and adds high-gloss shine without weighing hair down.' },
          { name: 'Repair Hair Oil', description: 'Restorative oil that seals split ends and protects hair from heat damage.' },
          { name: 'Anti-Frizz Hair Oil', description: 'Weightless serum-oil that tames flyaways and provides all-day control.' },
          { name: 'Hair Growth Oil', description: 'Nutrient-dense scalp oil that supports hair density and follicle strength.' },
          { name: 'Nourishing Scalp Oil', description: 'Balances dry, itchy scalps while promoting a healthy hair growth environment.' }
        ] 
      },
      { 
        name: 'Home Fragrance Oils', 
        products: [
          { name: 'Diffuser Oil', description: 'Concentrated fragrance oil for water-based ultrasonic aroma diffusers.' },
          { name: 'Home Fragrance Oil', description: 'Versatile fragrance oil for potpourri, ceramic burners, and scenting.' },
          { name: 'Hotel Scent Oil', description: 'Premium ambient fragrance oil designed for high-end hospitality spaces.' },
          { name: 'Spa Fragrance Oil', description: 'Serene, wellness-focused aroma oil for a professional spa atmosphere.' }
        ] 
      }
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
      { 
        name: 'Laundry Care', 
        products: [
          { name: 'Laundry Detergent', description: 'High-efficiency liquid detergent that cleans deeply while preserving fabrics.' },
          { name: 'Laundry Pods', description: 'Concentrated, pre-measured laundry units for ultimate consumer convenience.' },
          { name: 'Laundry Sheets', description: 'Eco-friendly, zero-plastic detergent format for sustainable laundry routines.' },
          { name: 'Fabric Softener', description: 'Leaves laundry with a luxury feel and long-lasting professional fragrance.' },
          { name: 'Stain Remover', description: 'Targeted pre-treatment that effectively breaks down tough organic stains.' }
        ] 
      },
      { 
        name: 'Household Cleaning', 
        products: [
          { name: 'Multi-purpose Cleaner', description: 'Versatile surface cleaner that leaves a streak-free shine and fresh scent.' },
          { name: 'Kitchen Cleaner', description: 'Degreasing formula that effectively cuts through oil and food residue.' },
          { name: 'Bathroom Cleaner', description: 'Powerful cleaning agent that removes limescale, soap scum, and bacteria.' },
          { name: 'Glass Cleaner', description: 'Fast-drying formula that provides crystal-clear clarity for all glass surfaces.' }
        ] 
      },
      { 
        name: 'Home Fragrance', 
        products: [
          { name: 'Reed Diffuser', description: 'Elegant, flame-free home scenting with high fragrance throw and longevity.' },
          { name: 'Aroma Diffuser Oil', description: 'Premium concentrated oils for use in electric and ultrasonic diffusers.' },
          { name: 'Scented Sachet', description: 'Fragrant sachets for scenting drawers, closets, and small storage spaces.' },
          { name: 'Room Spray', description: 'Instant atmosphere enhancement with high-quality, safe fragrance mists.' }
        ] 
      }
    ]
  }
];

export function getCategory(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}

