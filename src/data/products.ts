import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- CLOTHING & DRESSES ---
  {
    id: 'beige-bomber-jacket',
    name: 'Silk Bias-Cut Slip Dress',
    price: 245,
    rating: 4.9,
    reviewCount: 42,
    category: 'clothing',
    subCategory: 'Slip Dresses',
    isNew: true,
    colors: [
      { name: 'Champagne Ivory', hex: '#f3ece2', bgClass: 'bg-[#f3ece2]' },
      { name: 'Pearl Bronze', hex: '#a49182', bgClass: 'bg-[#a49182]' },
      { name: 'Midnight Noir', hex: '#1a1a1a', bgClass: 'bg-[#1a1a1a]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Cut on the bias for an effortless liquid silhouette that moves gracefully with every step. Spun from 100% heavy mulberry silk charmeuse with delicate French seams and minimalist micro-straps. An undisputed Vogue editorial classic.',
    details: [
      '100% 22 Momme Mulberry Silk Charmeuse',
      'Pure bias-cut construction for natural contour drape',
      'Adjustable delicate spaghetti straps with brass hardware',
      'Subtle cowled neckline and floor-grazing hemline',
      'Dry clean only'
    ],
    shipping: [
      'Complimentary carbon-neutral standard delivery on orders over $150',
      'Express 2-day delivery available at checkout ($15)',
      'Free 30-day returns in original packaging with intact tags'
    ]
  },
  {
    id: 'smart-casual-blazer',
    name: 'Sculpted Wool Blazer Dress',
    price: 295,
    rating: 4.8,
    reviewCount: 38,
    category: 'clothing',
    subCategory: 'Tailored Dresses',
    colors: [
      { name: 'Muted Taupe', hex: '#8c7d70', bgClass: 'bg-[#8c7d70]' },
      { name: 'Charcoal Grey', hex: '#383838', bgClass: 'bg-[#383838]' },
      { name: 'Noir Black', hex: '#1a1a1a', bgClass: 'bg-[#1a1a1a]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Architectural sharp tailoring fused with contemporary feminine silhouette. Crafted from fine Italian virgin wool-blend with structured shoulders, double-breasted closure, and a sculpted nipped waist.',
    details: [
      '78% Italian Virgin Wool, 22% Silk-Viscose',
      'Structured power shoulders with bespoke internal canvas',
      'Double-breasted horn button closure',
      'Full interior cupro lining with concealed internal zip',
      'Specialist dry clean only'
    ],
    shipping: [
      'Complimentary signature delivery on all tailored garments',
      'Includes complimentary dust bag and cedar suit hanger'
    ]
  },
  {
    id: 'knitted-polo-shirt',
    name: 'Minimalist Wrap Knit Dress',
    price: 185,
    originalPrice: 240,
    isSale: true,
    discountPercentage: 23,
    rating: 4.7,
    reviewCount: 56,
    category: 'clothing',
    subCategory: 'Knit Dresses',
    colors: [
      { name: 'Soft Sand', hex: '#d6cbbe', bgClass: 'bg-[#d6cbbe]' },
      { name: 'Warm Ecru', hex: '#eae3d9', bgClass: 'bg-[#eae3d9]' },
      { name: 'Espresso', hex: '#3e2e25', bgClass: 'bg-[#3e2e25]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Spun from ultra-fine gauge Supima cotton and Mongolian cashmere blend. The wrap silhouette ties gently at the waist, creating a flattering elongated profile that balances daytime ease with evening elegance.',
    details: [
      '70% Long-Staple Supima Cotton, 30% Cashmere',
      'Self-tie sash belt with reinforced eyelets',
      'Fine ribbed sleeve cuffs and clean edge hem',
      'Hand wash cold or specialist dry clean'
    ],
    shipping: [
      'Standard shipping within 3-5 business days',
      'Free 30-day returns'
    ]
  },
  {
    id: 'textured-overshirt',
    name: 'Architectural Trench Dress',
    price: 260,
    isNew: true,
    rating: 4.9,
    reviewCount: 19,
    category: 'clothing',
    subCategory: 'Tailored Dresses',
    colors: [
      { name: 'Charcoal Shadow', hex: '#373a3c', bgClass: 'bg-[#373a3c]' },
      { name: 'Desert Camel', hex: '#c29b71', bgClass: 'bg-[#c29b71]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A striking high-fashion reinterpretation of the iconic trench coat tailored as an architectural dress. Features wide notched lapels, belted waist cincher, and an asymmetrical storm flap for timeless runway impact.',
    details: [
      '100% Heavyweight Japanese Cotton Gabardine',
      'Detachable statement belt with gunmetal buckle',
      'Dual side seam pockets and storm shield back flap',
      'Specialist dry clean only'
    ],
    shipping: [
      'Free standard delivery on orders over $150'
    ]
  },
  {
    id: 'textured-wool-coat',
    name: 'Floor-Length Velvet Evening Gown',
    price: 380,
    originalPrice: 460,
    isSale: true,
    discountPercentage: 17,
    rating: 5.0,
    reviewCount: 27,
    category: 'clothing',
    subCategory: 'Evening Gowns',
    colors: [
      { name: 'Obsidian Noir', hex: '#161616', bgClass: 'bg-[#161616]' },
      { name: 'Deep Burgundy Wine', hex: '#4a1521', bgClass: 'bg-[#4a1521]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A regal couture evening gown tailored in sumptuous silk-blend velvet with a column silhouette. Features an elegant open back, sweeping floor-length hem, and a whisper of a train engineered for red-carpet poise.',
    details: [
      '82% Rayon, 18% Mulberry Silk Velvet',
      'Fully lined in pure silk charmeuse',
      'Concealed invisible back zipper with hook-and-eye closure',
      'Floor-sweeping column silhouette with walking slit',
      'Specialist dry clean only'
    ],
    shipping: [
      'Includes complimentary luxury garment carrier',
      'Complimentary express shipping & 30-day returns'
    ]
  },
  {
    id: 'classic-straight-chinos',
    name: 'Tiered Chiffon Floral Midi Dress',
    price: 195,
    rating: 4.8,
    reviewCount: 31,
    category: 'clothing',
    subCategory: 'Midi Dresses',
    colors: [
      { name: 'Rosewater Bloom', hex: '#d9a5b3', bgClass: 'bg-[#d9a5b3]' },
      { name: 'Olive Botanical', hex: '#4b5320', bgClass: 'bg-[#4b5320]' },
      { name: 'Midnight Navy', hex: '#1c2833', bgClass: 'bg-[#1c2833]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Breezy romanticism refined with European precision. Cut from featherlight silk-chiffon adorned with hand-painted floral motifs, featuring micro-pleated tiers and delicate flutter sleeves.',
    details: [
      '100% Silk Chiffon with lightweight cotton slip lining',
      'Gathered elasticated waistline with self-tie ribbon',
      'Tiered flounce hem with hand-rolled edging',
      'Delicate dry clean or hand wash cold'
    ],
    shipping: ['Standard 3-5 days delivery', 'Free returns']
  },
  {
    id: 'crisp-poplin-shirt',
    name: 'Sunburst Pleated Runway Midi Dress',
    price: 275,
    rating: 4.8,
    reviewCount: 45,
    category: 'clothing',
    subCategory: 'Cocktail Dresses',
    colors: [
      { name: 'Powder Lilac', hex: '#d6cbe0', bgClass: 'bg-[#d6cbe0]' },
      { name: 'Pure White', hex: '#fcfcfc', bgClass: 'bg-white' },
      { name: 'Sky Azure', hex: '#c5d8ea', bgClass: 'bg-[#c5d8ea]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Showcasing intricate accordion sunburst pleating that catches the light and blooms with motion. Crafted in Milan from luminous silk taffeta with a structured bodice and fluid midi skirt.',
    details: [
      '72% Silk Taffeta, 28% Technical Poly-organza',
      'Permanent heat-set Italian sunburst pleating',
      'Concealed interior boning for clean posture support',
      'Dry clean only'
    ],
    shipping: ['Ships same business day when ordered before 2 PM']
  },
  {
    id: 'sage-bomber-jacket',
    name: 'Haute Couture Sculptural Dress',
    price: 320,
    originalPrice: 390,
    isSale: true,
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 32,
    category: 'clothing',
    subCategory: 'Cocktail Dresses',
    colors: [
      { name: 'Canary Gold', hex: '#e8c857', bgClass: 'bg-[#e8c857]' },
      { name: 'Sage Noir', hex: '#778873', bgClass: 'bg-[#778873]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Unapologetic high fashion straight from the international runway. Features bold asymmetric draping, architectural volume, and couture gathering that commands the spotlight.',
    details: [
      '88% Sculpted Crepe, 12% Silk Stretch',
      'Asymmetric architectural shoulder line',
      'Concealed side zipper closure',
      'Handmade in Paris atelier'
    ],
    shipping: ['Standard 3-5 days delivery', 'Free returns']
  },
  {
    id: 'heavy-espresso-knitwear',
    name: 'Draped Asymmetric Velvet Dress',
    price: 210,
    rating: 4.9,
    reviewCount: 34,
    category: 'clothing',
    subCategory: 'Cocktail Dresses',
    colors: [
      { name: 'Emerald Velvet', hex: '#1d4838', bgClass: 'bg-[#1d4838]' },
      { name: 'Espresso Brown', hex: '#3b2f28', bgClass: 'bg-[#3b2f28]' },
      { name: 'Midnight Onyx', hex: '#161616', bgClass: 'bg-[#161616]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Crafted from plush stretch velvet with rich tactile depth. Designed with a draped cowl neckline and gathered side ruching that flatters the silhouette for evening celebrations.',
    details: [
      '92% Silk-Blend Velvet, 8% Elastane',
      'Draped cowl neckline with inner stay',
      'Gathered side ruching and asymmetrical tulip hem',
      'Specialist dry clean only'
    ],
    shipping: ['Free standard delivery']
  },
  {
    id: 'charcoal-tailored-trousers',
    name: 'Scarlet Georgette Draped Gown',
    price: 360,
    originalPrice: 450,
    isSale: true,
    discountPercentage: 20,
    rating: 5.0,
    reviewCount: 29,
    category: 'clothing',
    subCategory: 'Evening Gowns',
    colors: [
      { name: 'Scarlet Red', hex: '#a81c24', bgClass: 'bg-[#a81c24]' },
      { name: 'Deep Black', hex: '#161616', bgClass: 'bg-[#161616]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    mainImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A breathless statement in scarlet silk georgette. Dramatic column drape paired with a high side slit and Grecian one-shoulder neckline that cascades to the floor.',
    details: [
      '100% Mulberry Silk Double Georgette',
      'Single-shoulder sculptural strap with pleated detail',
      'Architectural side leg opening',
      'Dry clean only'
    ],
    shipping: ['Free shipping & returns']
  },

  // --- FOOTWEAR ---
  {
    id: 'leather-chelsea-boots',
    name: 'Polished Leather Chelsea Boot',
    price: 260,
    rating: 4.9,
    reviewCount: 52,
    category: 'footwear',
    subCategory: 'Boots',
    colors: [
      { name: 'Rich Espresso Brown', hex: '#3d251e', bgClass: 'bg-[#3d251e]' },
      { name: 'Onyx Black', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    mainImage: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Handcrafted in Tuscany from supple full-grain Italian calfskin. Features clean Chelsea elastic gussets, almond toe, and stacked heel engineered for day-to-night elegance with gowns and trousers alike.',
    details: [
      '100% Full-grain Italian Calfskin',
      'Blake-stitched construction with leather and rubber grip sole',
      'Tonal elasticized side gusset with grosgrain pull tab',
      'Cushioned memory foam arch support insole'
    ],
    shipping: ['Free insured courier delivery']
  },
  {
    id: 'suede-penny-loafers',
    name: 'Italian Pointed Stiletto Pumps',
    price: 280,
    originalPrice: 340,
    isSale: true,
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 39,
    category: 'footwear',
    subCategory: 'Heels & Pumps',
    colors: [
      { name: 'Cerulean Blue Suede', hex: '#2b4c7e', bgClass: 'bg-[#2b4c7e]' },
      { name: 'Midnight Noir', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    mainImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Impeccably sculpted Italian stiletto pumps featuring a sharp pointed toe and slender 90mm lacquered heel. Handcrafted in Florence from velvety suede and lined in soft nappa leather for red-carpet poise.',
    details: [
      '100% Italian Reverse-Calf Suede',
      '90mm (3.5 inch) lacquered stiletto heel',
      'Pointed toe with low vamp cut',
      'Buffed natural leather outsole with metal brand plate'
    ],
    shipping: ['Free courier express delivery']
  },
  {
    id: 'minimalist-leather-sneaker',
    name: 'Minimalist Calfskin Low Sneaker',
    price: 185,
    isNew: true,
    rating: 4.8,
    reviewCount: 44,
    category: 'footwear',
    subCategory: 'Sneakers',
    colors: [
      { name: 'Chalk White', hex: '#f6f5f3', bgClass: 'bg-[#f6f5f3]' },
      { name: 'Soft Ecru', hex: '#e8e2d8', bgClass: 'bg-[#e8e2d8]' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    mainImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Understated Parisian minimalism. Crafted from ultra-smooth Italian calf leather with tonal waxed laces and a cushioned platform cupsole designed to complement relaxed tailoring and slip dresses.',
    details: [
      'Full-grain Italian Nappa leather upper',
      'Padded collar and leather-lined memory footbed',
      'Stitched rubber platform cupsole',
      'Subtle embossed gold monogram on tongue'
    ],
    shipping: ['Complimentary standard shipping']
  },
  {
    id: 'suede-chukka-boots',
    name: 'Sculpted Suede Ankle Bootie',
    price: 250,
    originalPrice: 310,
    isSale: true,
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 23,
    category: 'footwear',
    subCategory: 'Boots',
    colors: [
      { name: 'Cognac Suede', hex: '#8a5d3b', bgClass: 'bg-[#8a5d3b]' },
      { name: 'Sand Mohave', hex: '#b39d82', bgClass: 'bg-[#b39d82]' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    mainImage: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A feminine, sculptural ankle bootie featuring an almond toe and architectural 65mm block heel. Crafted from water-treated velvet suede with an inner concealed zip for a flawless silhouette.',
    details: [
      'Weather-resistant Italian split suede',
      '65mm stacked leather block heel',
      'Inner brass zipper closure',
      'Handmade in Tuscany'
    ],
    shipping: ['Free worldwide express delivery']
  },

  // --- ACCESSORIES ---
  {
    id: 'leather-weekender-bag',
    name: 'Full-Grain Leather Structured Tote',
    price: 360,
    rating: 5.0,
    reviewCount: 16,
    category: 'accessories',
    subCategory: 'Bags',
    isNew: true,
    colors: [
      { name: 'Cognac Saddle', hex: '#633e24', bgClass: 'bg-[#633e24]' },
      { name: 'Jet Noir', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['One Size (W 38cm x H 30cm x D 14cm)'],
    mainImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A timeless silhouette in vegetable-tanned Tuscan calfskin leather with geometric lines, slender top handles, and a detachable shoulder strap. Lined in pure cotton faille with internal zipped compartments.',
    details: [
      'Full-Grain Tuscan Vegetable-Tanned Leather',
      'Champagne gold brushed brass hardware',
      'Interior zippered partition and dual slip pockets',
      'Protective metal feet at base'
    ],
    shipping: ['Complimentary gift box and dust bag included']
  },
  {
    id: 'cashmere-ribbed-scarf',
    name: 'Pure Cashmere Fringe Scarf',
    price: 130,
    originalPrice: 165,
    isSale: true,
    discountPercentage: 21,
    rating: 4.9,
    reviewCount: 31,
    category: 'accessories',
    subCategory: 'Scarves',
    colors: [
      { name: 'Camel Warmth', hex: '#b3936e', bgClass: 'bg-[#b3936e]' },
      { name: 'Powder Rose', hex: '#d9a5b3', bgClass: 'bg-[#d9a5b3]' },
      { name: 'Burgundy Wine', hex: '#4a1521', bgClass: 'bg-[#4a1521]' }
    ],
    sizes: ['One Size (200cm x 70cm)'],
    mainImage: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Woven in Scotland from 100% Grade-A long-staple cashmere. Featherlight yet extraordinarily warm, finished with delicate eyelash fringe. Ample wrap width designed to drape effortlessly over evening dresses and coats.',
    details: [
      '100% Grade-A Mongolian Cashmere',
      'Finished with traditional hand-twisted fringe',
      'Dimensions: 200cm length by 70cm width',
      'Dry clean only'
    ],
    shipping: ['Packaged in an embossed luxury gift case']
  },
  {
    id: 'italian-suede-belt',
    name: 'Sculpted Waist Cincher Leather Belt',
    price: 85,
    rating: 4.8,
    reviewCount: 28,
    category: 'accessories',
    subCategory: 'Belts',
    colors: [
      { name: 'Caramel Suede', hex: '#8a5d3b', bgClass: 'bg-[#8a5d3b]' },
      { name: 'Noir Black', hex: '#181818', bgClass: 'bg-[#181818]' }
    ],
    sizes: ['70cm (XS)', '75cm (S)', '80cm (M)', '85cm (L)'],
    mainImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A statement waist belt cut from fine Italian calfskin suede with contoured edge detailing and a sculptural gold-plated buckle designed to cinch blazers and slip dresses with refined flair.',
    details: [
      '100% Italian Calfskin Suede with smooth nubuck lining',
      'Hand-carved organic oval buckle with satin gold electroplating',
      'Width: 35mm',
      'Handcrafted in Florence atelier'
    ],
    shipping: ['Free standard shipping']
  },
  {
    id: 'leather-bifold-wallet',
    name: 'Quilted Leather Envelope Clutch Wallet',
    price: 115,
    originalPrice: 145,
    isSale: true,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 47,
    category: 'accessories',
    subCategory: 'Small Leather Goods',
    colors: [
      { name: 'Cognac Saddle', hex: '#633e24', bgClass: 'bg-[#633e24]' },
      { name: 'Obsidian Black', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['One Size'],
    mainImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An elegant envelope flap wallet crafted from smooth full-grain leather with a secure magnetic snap closure. Functions effortlessly as a handheld evening clutch or handbag organizer.',
    details: [
      'Tuscan vegetable-tanned full-grain leather',
      '8 card slots, dual billfold sleeves, and zippered coin compartment',
      'RFID shielding lining',
      'Concealed magnetic snap flap closure'
    ],
    shipping: ['Free embossed gift box packaging']
  }
];
