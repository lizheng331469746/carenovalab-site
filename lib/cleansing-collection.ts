import type { Product } from './products';

const image = (name: string) => `/images/products/cleansing/${name}.webp`;

export const cleansingProducts: Product[] = [
  {
    name: 'Amino Acid Cleanser',
    description: 'An amino-acid cleansing direction with a creamy foam profile and a pearl-white tube, created for an understated daily skincare line.',
    image: image('01-amino-acid-cleanser'),
    tags: ['Amino-acid direction', 'Cream-to-foam', 'Pearl-white tube'],
    details: {
      overview: 'Build a daily cleansing essential around a soft, creamy lather and a comfortable rinse-off experience. The clean ivory presentation makes this a versatile starting point for a coordinated facial care collection.',
      highlights: [
        { title: 'A softer foam direction', description: 'An amino-acid surfactant system is the starting point for development, with foam density and rinse feel tailored through sampling.' },
        { title: 'Everyday collection anchor', description: 'A straightforward facial cleanser format that can sit alongside matching toners, serums and moisturizers.' },
        { title: 'Quiet, premium presentation', description: 'Pearl ivory, a champagne accent and a flowing line keep the brand name and product type easy to recognize.' }
      ],
      texture: 'Cream-to-foam direction with a fine, cushioned lather. Viscosity, fragrance and the after-rinse feel can be refined during sample review.',
      packaging: 'Satin ivory squeeze tube with an ivory flip-top cap and champagne-colored accent. The decorative curve can be explored as print or a tactile finish depending on the selected tube.',
      ingredientDirection: 'Amino-acid surfactants with optional humectant support. Hyaluronic acid can be discussed as a formula option; the final ingredient list is confirmed with the approved sample.',
      customization: ['Foam density, cleansing strength and rinse feel', 'Fragrance-free or a selected scent direction', 'Tube size, cap finish, label artwork and matching carton']
    }
  },
  {
    name: 'Foaming Cleanser',
    description: 'Aqua Foam is a fresh cleansing direction with an airy lather profile, an ice-blue gradient tube and a brushed-silver cap.',
    image: image('09-aqua-foam-cleanser'),
    tags: ['Aqua Foam', 'Airy lather', 'Ice-blue tube'],
    details: {
      overview: 'A water-inspired facial cleanser for brands seeking a fresh, light daily cleansing experience. The Aqua Foam packaging pairs soft blue tones with a silver finish for a clear visual identity.',
      highlights: [
        { title: 'Fresh foam profile', description: 'Develop an airy lather that spreads easily, with foam volume and rinse-off performance evaluated on the sample formula.' },
        { title: 'Water-inspired design', description: 'The pale-blue gradient and flowing line create a recognizable hydration-themed collection direction.' },
        { title: 'Simple daily format', description: 'A squeeze tube offers familiar dispensing and space for clear, market-specific product instructions.' }
      ],
      texture: 'Creamy foaming cleanser direction with a light, fresh sensory profile. Foam size, density and rinse feel are development variables.',
      packaging: 'Ivory-to-ice-blue gradient tube with a silver-colored flip-top cap. Finishes and tube proportions can be adapted to your chosen pack size.',
      ingredientDirection: 'A cleansing surfactant blend with humectant options. The concept does not specify a special-water percentage or a finished formula.',
      customization: ['Light or dense foam and preferred rinse feel', 'Scent, color and humectant direction', 'Blue gradient intensity, cap finish and carton design']
    }
  },
  {
    name: 'Cream Cleanser',
    description: 'A rich cleansing-cream direction in charcoal and champagne packaging, designed around a cushioned massage texture and a refined bathroom presence.',
    image: image('07-rich-cleansing-cream'),
    tags: ['Rich cream', 'Cushioned texture', 'Charcoal packaging'],
    details: {
      overview: 'Bring a more indulgent feel to a facial cleansing collection with a substantial cream texture and a distinctive dark tube. This direction puts the sensory experience and restrained packaging at the center of the product story.',
      highlights: [
        { title: 'Cushioned cleansing ritual', description: 'A rich cream profile provides the development direction for spreadability and massage feel, with lather level selected during formulation.' },
        { title: 'Distinctive dark finish', description: 'Charcoal packaging, champagne lettering and a smoky cap create contrast within the CareNova Lab collection.' },
        { title: 'Flexible range positioning', description: 'A strong visual option for a premium facial line, a minimalist collection or a unisex skincare concept.' }
      ],
      texture: 'Rich cream direction with body and glide. A low-lather or cream-to-foam version can be discussed and assessed through samples.',
      packaging: 'Satin charcoal squeeze tube, champagne-colored collar and smoky translucent cap. The dark color is a packaging choice, not a charcoal ingredient claim.',
      ingredientDirection: 'Cream-cleansing base with emollient and humectant options selected for the intended sensory profile and target market.',
      customization: ['Cream richness, spreadability and lather level', 'Fragrance profile and preferred after-rinse feel', 'Matte finish, metallic decoration and cap transparency']
    }
  },
  {
    name: 'Ginseng Cream Cleanser',
    description: 'A botanical-inspired cream cleanser direction with a soft lather profile, warm ivory packaging and a subtle ginseng-root motif.',
    image: image('02-ginseng-cleanser'),
    tags: ['Ginseng direction', 'Cream cleanser', 'Botanical design'],
    details: {
      overview: 'Pair a familiar cream cleanser format with a ginseng-led botanical story. Warm neutral tones and a fine root motif give this concept a distinctive identity without a crowded front label.',
      highlights: [
        { title: 'Botanical-led product story', description: 'Ginseng is the proposed ingredient direction, with extract type and compatibility reviewed during formula development.' },
        { title: 'Creamy sensory focus', description: 'The brief centers on a creamy spread and soft lather, with cleansing strength and rinse feel adjusted through sampling.' },
        { title: 'Warm shelf identity', description: 'A root-line detail and amber-toned cap connect the botanical theme with a refined, modern appearance.' }
      ],
      texture: 'Cream-to-lather direction with a soft, substantial feel. The final color, scent and foam profile depend on the selected base and botanical ingredients.',
      packaging: 'Warm ivory squeeze tube with a subtle root motif, champagne accent and translucent amber cap. The motif can be printed or interpreted through a suitable decorative finish.',
      ingredientDirection: 'Ginseng extract as a development option, alongside a suitable cleansing base and humectants. Extract specification and finished-product claims require sample confirmation.',
      customization: ['Ginseng extract selection and botanical blend direction', 'Cream body, lather profile and scent', 'Root motif, warm color palette and cap design']
    }
  },
  {
    name: 'Golden Pearl Cleanser',
    description: 'A pearlescent cream-cleanser direction with a champagne sheen, a fine gold-line tube design and a polished premium presentation.',
    image: image('03-golden-pearl-cleanser'),
    tags: ['Pearlescent direction', 'Cream cleanser', 'Champagne accents'],
    details: {
      overview: 'Make texture part of the product experience with a softly pearlescent cleanser direction. Golden Pearl combines an ivory tube with a restrained champagne line for a coordinated, elevated facial care range.',
      highlights: [
        { title: 'Visible texture identity', description: 'A pearlescent appearance creates a distinctive visual direction for the formula, with shade and intensity chosen at the sample stage.' },
        { title: 'Cream-cleanser versatility', description: 'Lather level and rinse feel can be developed to match the intended routine rather than being fixed by the packaging concept.' },
        { title: 'Refined gold detailing', description: 'A narrow champagne accent adds definition while leaving the product name and brand easy to read.' }
      ],
      texture: 'Pearly cream direction with a soft champagne appearance. The illustrated sheen is a visual concept, not a claim that the formula contains gold or pearl powder.',
      packaging: 'Pearl-white squeeze tube with a fine champagne curve, ivory cap and brushed-metal-effect collar.',
      ingredientDirection: 'A suitable cleansing base with optional humectants and compatible pearlescent ingredients. Ginseng or hydroxypropyl tetrahydropyrantriol can be explored if required by the brief.',
      customization: ['Pearlescent shade and intensity', 'Foam level, scent and after-rinse feel', 'Gold-line decoration, cap finish and secondary packaging']
    }
  },
  {
    name: 'Amino Acid Cleansing Nectar',
    description: 'A transforming cleanser direction that explores silky glide and a water-activated lather, presented in a frosted golden pump bottle.',
    image: image('06-transforming-cleansing-nectar'),
    tags: ['Transforming texture', 'Amino-acid direction', 'Frosted pump bottle'],
    details: {
      overview: 'Turn cleansing into a texture-led ritual. This nectar concept explores a silky initial feel followed by emulsification and lather on contact with water, with the sequence refined on the actual sample.',
      highlights: [
        { title: 'A changing sensory experience', description: 'The development brief combines an oil-like glide with water-activated cleansing, creating a distinctive story for demonstrations and product education.' },
        { title: 'Pump-led dispensing', description: 'A pump bottle offers a clean presentation and repeatable dispensing, with output matched to the final viscosity.' },
        { title: 'Soft golden appearance', description: 'A frosted finish gives the golden texture a diffused look that stands apart from the clear cleansing oils.' }
      ],
      texture: 'Glossy nectar or gel-oil direction. Glide, emulsification speed and foam formation are sample targets rather than guaranteed finished-product performance.',
      packaging: 'Frosted pale-gold cylindrical bottle with an ivory pump and champagne collar. Pump compatibility is assessed against the approved formula.',
      ingredientDirection: 'Amino-acid surfactants and an oil-to-water texture system can be explored. The name describes a texture concept and does not imply honey as an ingredient.',
      customization: ['Texture transition, viscosity and lather behavior', 'Botanical oil and surfactant direction', 'Frost level, pump output and label decoration']
    }
  },
  {
    name: 'Golden Silk Cleanser',
    description: 'A flowing pearlescent cleanser direction in a clear rectangular pump bottle, created to make the formula texture a focal point of the packaging.',
    image: image('10-golden-silk-cleanser'),
    tags: ['Pearlescent liquid', 'Rectangular pump', 'Texture-led design'],
    details: {
      overview: 'Golden Silk puts a champagne-toned, flowing texture on display through a clear rectangular bottle. This concept suits a coordinated premium cleansing line where formula appearance and packaging work together.',
      highlights: [
        { title: 'Formula on display', description: 'The transparent bottle highlights a proposed flowing pearlescent effect, with appearance and stability reviewed on the finished sample.' },
        { title: 'Silky liquid direction', description: 'A pumpable cleanser format allows viscosity, glide and foam level to be developed around the intended daily routine.' },
        { title: 'Architectural bottle shape', description: 'The rectangular silhouette, clear overcap and champagne collar create a different presence from the cylindrical oil bottles.' }
      ],
      texture: 'Pumpable pearlescent liquid or gel direction. Golden Silk refers to the intended appearance and sensory theme, not to gold or silk content.',
      packaging: 'Clear rectangular bottle with an ivory pump, champagne collar and transparent overcap. Formula-to-pack compatibility and pump performance are confirmed during development.',
      ingredientDirection: 'An amino-acid cleansing base and compatible pearlescent system can be explored. Hydroxypropyl tetrahydropyrantriol is an optional ingredient direction for review, not a confirmed inclusion.',
      customization: ['Pearlescent movement, shade and viscosity', 'Foam profile and optional ingredient direction', 'Bottle material, overcap, pump output and printing']
    }
  },
  {
    name: 'Lime Amino Cleanser',
    description: 'A citrus-inspired amino-acid cleansing direction with a creamy foam profile, an ivory tube and a soft lavender accent.',
    image: image('11-lime-amino-cleanser'),
    tags: ['Citrus-inspired', 'Amino-acid direction', 'Lavender accents'],
    details: {
      overview: 'Create a fresh botanical identity around a lime-inspired facial cleanser brief. The restrained lavender detail offers a distinctive alternative to conventional green citrus packaging.',
      highlights: [
        { title: 'A fresh botanical direction', description: 'A lime-derived ingredient or fragrance direction can be reviewed to match the product brief and intended market.' },
        { title: 'Amino-acid foam focus', description: 'Develop the cleanser around a creamy lather and a balanced rinse feel, with performance and suitability confirmed through testing.' },
        { title: 'Subtle color distinction', description: 'A lavender cap and fine curved line make the product easy to distinguish within an otherwise coordinated ivory collection.' }
      ],
      texture: 'Cream-to-foam direction with adjustable lather density and rinse feel. The final scent can be citrus-inspired, another selected profile or fragrance-free.',
      packaging: 'Satin ivory squeeze tube with a lavender-colored cap, fine lavender line and champagne accent.',
      ingredientDirection: 'Amino-acid surfactants with an optional lime-derived ingredient. Ingredient suitability, fragrance choice and final skin-use claims are reviewed before approval.',
      customization: ['Surfactant blend and foam density', 'Lime ingredient or fragrance-free development direction', 'Lavender shade, tube size, cap finish and carton']
    }
  }
];

export const makeupRemoverProducts: Product[] = [
  {
    name: 'Centella Cleansing Milk',
    description: 'A creamy makeup-removal direction with a centella-led botanical story, presented in an ivory pump bottle with a soft sage-green accent.',
    image: image('04-centella-cleansing-milk'),
    tags: ['Cleansing milk', 'Centella direction', 'Sage pump'],
    details: {
      overview: 'A lotion-style alternative to cleansing oils for a creamier makeup-removal ritual. This concept pairs a centella-inspired formula brief with an understated ivory and sage packaging identity.',
      highlights: [
        { title: 'Creamy massage profile', description: 'A milk or lotion texture is the starting point for easy spreading and a cushioned massage feel.' },
        { title: 'Makeup-removal focus', description: 'The formula can be developed around selected makeup and sunscreen removal targets, with removal performance assessed using agreed test products.' },
        { title: 'Botanical visual identity', description: 'The sage pump provides a subtle connection to the centella ingredient direction while keeping the bottle design clean.' }
      ],
      texture: 'Fluid cleansing milk direction with adjustable slip, body and rinse-off behavior. A lotion-like appearance distinguishes it from clear oil formulas.',
      packaging: 'Rounded ivory pump bottle with a sage-green pump and champagne collar. Pump output and bottle material are selected to suit the finished emulsion.',
      ingredientDirection: 'Centella asiatica as a proposed botanical ingredient within a cleansing emulsion. Final extract specification and formula suitability are confirmed through development.',
      customization: ['Milk viscosity, massage slip and rinse-off feel', 'Target makeup-removal performance and botanical direction', 'Pump output, bottle capacity, sage shade and label design']
    }
  },
  {
    name: 'Botanical Cleansing Oil',
    description: 'A golden botanical-oil cleansing direction with a silky massage profile and an emulsifying rinse-off concept, shown in a clear champagne-accented bottle.',
    image: image('05-botanical-cleansing-oil'),
    tags: ['Botanical oil direction', 'Emulsifying concept', 'Clear pump bottle'],
    details: {
      overview: 'Develop a first-step cleanser around the glide of a botanical oil blend and its transformation on contact with water. The transparent bottle lets the golden appearance become part of the product identity.',
      highlights: [
        { title: 'Oil-based cleansing direction', description: 'A blend of cleansing oils and emulsifiers can be developed to lift selected makeup and sunscreen, with performance confirmed on samples.' },
        { title: 'Rinse-off transformation', description: 'Emulsification speed, milkiness and residual feel can be tuned to create the desired cleansing ritual.' },
        { title: 'Golden clarity', description: 'A clear bottle, ivory pump and champagne collar create a simple way to showcase the oil appearance.' }
      ],
      texture: 'Silky liquid oil direction that is designed to emulsify with water. The final formula determines viscosity, color and after-rinse feel.',
      packaging: 'Clear cylindrical bottle with an ivory pump and champagne-colored collar. Pump function and material compatibility are reviewed for the selected oil blend.',
      ingredientDirection: 'Sweet almond oil, grape seed oil and vitamin E are options from the reference direction. The final blend, ingredient list and fragrance are chosen during formulation.',
      customization: ['Oil blend, viscosity and massage slip', 'Emulsification speed and target makeup-removal performance', 'Pump dispensing, bottle material and custom decoration']
    }
  },
  {
    name: 'Avocado Cleansing Oil',
    description: 'An avocado-inspired cleansing-oil direction with a fluid glide, a pale golden appearance and an olive-green pump for a distinctive botanical identity.',
    image: image('08-avocado-cleansing-oil'),
    tags: ['Avocado direction', 'Fluid oil texture', 'Olive-green pump'],
    details: {
      overview: 'Create a recognizable botanical cleansing story around avocado oil as a proposed ingredient. The clear bottle and olive-toned pump distinguish this direction from the broader Botanical Cleansing Oil concept.',
      highlights: [
        { title: 'Avocado-led ingredient story', description: 'Avocado oil can be explored within the cleansing blend, with grade, proportion and compatibility selected during development.' },
        { title: 'Fluid massage experience', description: 'The brief emphasizes a lighter, flowing oil feel, with emulsification and the after-rinse experience adjusted on samples.' },
        { title: 'Recognizable botanical packaging', description: 'An olive-green pump and small botanical illustration add character while preserving the collection\'s minimal layout.' }
      ],
      texture: 'Fluid cleansing-oil direction with a pale golden appearance. Makeup-removal targets and water-emulsification behavior are evaluated on the approved formula.',
      packaging: 'Clear cylindrical bottle with an olive-green pump, champagne collar and fine botanical artwork. Decoration and component colors can be adapted to your brand.',
      ingredientDirection: 'Avocado oil within a suitable oil-and-emulsifier system. The final oil blend, scent and usage instructions are confirmed with the formulation team.',
      customization: ['Avocado oil selection and supporting oil blend', 'Fluidity, emulsification behavior and residue preference', 'Olive shade, illustration, pump output and bottle size']
    }
  }
];
