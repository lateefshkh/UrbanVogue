import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- CLOTHING & OUTERWEAR ---
  {
    id: 'beige-bomber-jacket',
    name: 'Beige Bomber Jacket',
    price: 149,
    rating: 4.5,
    reviewCount: 42,
    category: 'outerwear',
    subCategory: 'Jackets',
    isNew: true,
    colors: [
      { name: 'Beige', hex: '#d2c9c2', bgClass: 'bg-[#d2c9c2]' },
      { name: 'Charcoal Olive', hex: '#4a4b46', bgClass: 'bg-[#4a4b46]' },
      { name: 'Midnight Black', hex: '#1a1a1a', bgClass: 'bg-[#1a1a1a]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPyIu_dD0hwfigHOesA6ECi-AxE1dRmJKfS3vunvUXoeRSDN8biARcHdaQc113amqHxz3ex9OOwUddvwbl3j7U9uYzmCnuB3AUg_gp-i9BZHWfi6Qh4uOy-3xXfiS1lxwU_eP9Xl-7X2xhr4OrwrqyGOf6MeIkx-JFKk2v4DliqwD2EMHfEI0smo87Lc43DL4kouPmnFUXmVzRyzfpYGKCMDWU_vfdvbSPResknhdUnlmN6o29WckT',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPyIu_dD0hwfigHOesA6ECi-AxE1dRmJKfS3vunvUXoeRSDN8biARcHdaQc113amqHxz3ex9OOwUddvwbl3j7U9uYzmCnuB3AUg_gp-i9BZHWfi6Qh4uOy-3xXfiS1lxwU_eP9Xl-7X2xhr4OrwrqyGOf6MeIkx-JFKk2v4DliqwD2EMHfEI0smo87Lc43DL4kouPmnFUXmVzRyzfpYGKCMDWU_vfdvbSPResknhdUnlmN6o29WckT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3z8SH4Qi6BnS_9UMind4wa02BCMliwK-hcW48V6BpUO2OSbe8UXyAhxTeUC31dAxrldXsrAB9w_rGGwPu4iUN1CfecGhtMBa3G5nFslxYjjYqnoSZ_WiAz9caY49ROckRXn9fk9VwWa_MqvaKLhhpQE9AwCkttYe8Ck4oxyMTpYXkVlQAGBt9JrbCA1KICZzWil80jGMi5YT0qqy-oYQIKuvY49UJvzIIv_OO1XTfnIfyOHsF0dRz',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCufXp5f4WIZY-i3Ylufrnoj13z9mdHDQi7fyp_aYWroXi8l0MOCaeApv0MPZliaIkuHyewnz_kg4M9Er4czkZHblAFiWlWHtLPNjbrSam_oz343ma5-Wr2Jj7-b5PqHQ4UOnuetBFdivsnITYpleljkCUBkk8_qz6m0vld0YadmOrcHDJUTN8G22O_hNKrh88SmNyTanGDm4410y3lRzYiD1D1bX9T9QcRQA9PS7l4wBnQAR-x_8xT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2GYAF8ZzgjnkKSDFpHrlkmFt4kW1Np4YjUp8PrxYeBDN8W2VJliYNmmolW76K2jO3vy8sc1IJQ3bsCqZBDEMvg-dcEVlTDmxszJ7OJdU5mIxatFashFogzBLDNIaKnzQF9VQml967kkRoqWE3nqCfAwHik6mvs9oIdd8AaBLEOJde3nMCDh3tuiGrDPWWKHvcpMWxeZ_JQIRB5BBNQuK5wNbyeg8x3O-9NiS6-qohyh8m17SsYbl',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7WqbWLumO004MKPHZYW5byM2oY7pocRcQTeOj7Qq2j-G17Y0uP_x3fsLg3tACsE_b7uII2EJnxrMMx5BSWe1dBsDHJL-Yesy8GcUlc--DBGCnucScYbj_6Le2TrtUBN9RHroxGhaB4HXvobMCg_c2HaPL0JcAybfYXUg6ZElbY_1q02Ofn9b5avdmRrqAV1AmFKK-jEet8_IKwsTkB89m9S8juf2efmmx17EKIagVr_YDddqwbk0'
    ],
    description: 'A modern interpretation of a classic silhouette. Crafted from a premium cotton-blend fabric, this bomber jacket features a streamlined design with subtle ribbed trims and a sleek two-way zip closure. The versatile beige tone ensures it pairs effortlessly with both casual and smart-casual ensembles.',
    details: [
      '68% Premium Combed Cotton, 32% Technical Polyamide',
      'Brushed gunmetal two-way zipper hardware',
      'Subtle stretch rib-knit collar, cuffs, and hem',
      'Dual exterior welt pockets, single interior chest pocket',
      'Dry clean only or delicate cold water wash with mild detergent'
    ],
    shipping: [
      'Complimentary carbon-neutral standard delivery on orders over $150',
      'Express 2-day delivery available at checkout ($15)',
      'Free 30-day returns in original packaging with intact tags'
    ]
  },
  {
    id: 'smart-casual-blazer',
    name: 'Smart Casual Blazer',
    price: 199,
    rating: 4.8,
    reviewCount: 38,
    category: 'clothing',
    subCategory: 'Tailoring',
    colors: [
      { name: 'Muted Taupe', hex: '#8c7d70', bgClass: 'bg-[#8c7d70]' },
      { name: 'Charcoal Grey', hex: '#383838', bgClass: 'bg-[#383838]' },
      { name: 'Navy Stone', hex: '#232a35', bgClass: 'bg-[#232a35]' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyI0zW9RLHDHFjJJgBG-Ll3HR0U2SoLLFOFQBoop4v22yGvHXDVV_sFd-Bw49Rb5lMCB2sbvcVJqi01AJ6QkEhURpHQqvYOxhi7Nlgax-Hi81Jzc9gbnkV7R_fo5JnvPOnoYgQ7KOQ4qHIDpHkAcaHds2T4OxgtBCkjCVFpzEPANm_1fe0uOKPWy_Da7F0YdAleqY1aHyzxnJ3ro0RsBkVLQENHxnVVh9ober8rMH1hbjsKJIfEir'
    ],
    description: 'Impeccably tailored with an unstructured shoulder for natural drape and ease. Crafted from Italian virgin wool-blend hopsack, it transitions seamlessly from daytime creative meetings to relaxed evening gatherings.',
    details: [
      '75% Virgin Wool, 25% Breathable Viscose',
      'Unstructured silhouette with half-canvas construction',
      'Notch lapels, horn buttons, patch pockets',
      'Double back vents for uninhibited movement',
      'Specialist dry clean only'
    ],
    shipping: [
      'Complimentary signature delivery on all tailored garments',
      'Includes complimentary dust bag and cedar suit hanger'
    ]
  },
  {
    id: 'knitted-polo-shirt',
    name: 'Knitted Polo Shirt',
    price: 79,
    originalPrice: 110,
    isSale: true,
    discountPercentage: 28,
    rating: 4.7,
    reviewCount: 56,
    category: 'knitwear',
    subCategory: 'Polos',
    colors: [
      { name: 'Soft Sand', hex: '#d6cbbe', bgClass: 'bg-[#d6cbbe]' },
      { name: 'Warm Ecru', hex: '#eae3d9', bgClass: 'bg-[#eae3d9]' },
      { name: 'Espresso', hex: '#3e2e25', bgClass: 'bg-[#3e2e25]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwlDzDm1GlvN3uJLqyTc6KUUtlOH3M871LGsh2A8tKHbn8W7jr1wtfZPBAQUJPE8ez125xDOpxVl38NYdrZmfqiZ5pecuP8FWBTndH-ae5jlrq5oPoxbl8XmX5dcdC1FE9Zps6aSB-YbsUijqcNJrvISbJmAnsKNThur3qEB1ObSitHMwH4Xgb88CJsP7U9o0_C_n2fJuenqbz_-xl7WuCGDLfpSj_jQdUU4D6zY_zyvo79QRtTf7T',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwlDzDm1GlvN3uJLqyTc6KUUtlOH3M871LGsh2A8tKHbn8W7jr1wtfZPBAQUJPE8ez125xDOpxVl38NYdrZmfqiZ5pecuP8FWBTndH-ae5jlrq5oPoxbl8XmX5dcdC1FE9Zps6aSB-YbsUijqcNJrvISbJmAnsKNThur3qEB1ObSitHMwH4Xgb88CJsP7U9o0_C_n2fJuenqbz_-xl7WuCGDLfpSj_jQdUU4D6zY_zyvo79QRtTf7T',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeAakD2xKqyiCWlSgn6TpvS4xDY96qCqZ2ZshmLdS4QCgr0Z7wvtjGK-gJifbrnuHqo3YMwAuL4fDthCOFBOVvffsRCxEYS1WEZlJmPHbSCbb-uQ51_Ph_4S4QZRoSt7mPrGkvEt1-k5YymF-ZiW0O5CaAT-x9kP17PWLAJbObx0qiURI3LLkq6Ih81P99gTSmvLV3RDiYLaPS4EkrNVJobmsFpnPmN8tZlF5t2-bNcF4gYrg0cQSE'
    ],
    description: 'Spun from ultra-fine gauge Supima cotton and silk blend. The open collar placket provides an effortless, sophisticated neckline that balances refined knitwear with casual summer ease.',
    details: [
      '70% Long-Staple Supima Cotton, 30% Silk',
      'Open Johnny collar with reinforced stitch',
      'Ribbed hem and sleeve cuffs',
      'Hand wash cold or dry clean'
    ],
    shipping: [
      'Standard shipping within 3-5 business days',
      'Free 30-day returns'
    ]
  },
  {
    id: 'textured-overshirt',
    name: 'Textured Overshirt',
    price: 125,
    isNew: true,
    rating: 4.9,
    reviewCount: 19,
    category: 'clothing',
    subCategory: 'Shirts & Layers',
    colors: [
      { name: 'Charcoal Shadow', hex: '#373a3c', bgClass: 'bg-[#373a3c]' },
      { name: 'Washed Olive', hex: '#484d43', bgClass: 'bg-[#484d43]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqo64rLCIwU4FwxRCZe5pXJxX5D33ee807zfSDH5z6RaoXTGrmfQI1Iz6mkHK2U7VGZhURxzBJ9hR6cNf6yQw4RSRXp2hUNjt9Rv59M7SXXCk90WDcLJRnC9hGE99tsx-s_D4fQVjnY0DPCjbB3saPUgA7I3iNUv_GGdxnWgX5NrJxzFCXAyVF8KMQZJ6tPSJMyFLFVeTfxN1cc0MHdk3VQXrbALdjlIfY897yfm474K1BcpKGm8vy',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqo64rLCIwU4FwxRCZe5pXJxX5D33ee807zfSDH5z6RaoXTGrmfQI1Iz6mkHK2U7VGZhURxzBJ9hR6cNf6yQw4RSRXp2hUNjt9Rv59M7SXXCk90WDcLJRnC9hGE99tsx-s_D4fQVjnY0DPCjbB3saPUgA7I3iNUv_GGdxnWgX5NrJxzFCXAyVF8KMQZJ6tPSJMyFLFVeTfxN1cc0MHdk3VQXrbALdjlIfY897yfm474K1BcpKGm8vy'
    ],
    description: 'Constructed from heavy textured cotton waffle fabric with garment-dyed nuance. Designed to be worn open over a base t-shirt or buttoned up as an architectural standalone piece.',
    details: [
      '100% Heavyweight Japanese Cotton',
      'Dual chest flap pockets with concealed snap buttons',
      'Garment-dyed for unique depth of color',
      'Machine wash gentle cold'
    ],
    shipping: [
      'Free standard delivery on orders over $150'
    ]
  },
  {
    id: 'textured-wool-coat',
    name: 'Textured Wool Coat',
    price: 350,
    originalPrice: 420,
    isSale: true,
    discountPercentage: 17,
    rating: 5.0,
    reviewCount: 27,
    category: 'outerwear',
    subCategory: 'Coats',
    colors: [
      { name: 'Dark Charcoal Melange', hex: '#2b2a29', bgClass: 'bg-[#2b2a29]' },
      { name: 'Warm Camel', hex: '#9d7c58', bgClass: 'bg-[#9d7c58]' }
    ],
    sizes: ['38', '40', '42', '44'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrqRpn5adGx8quwceBjFFHRddLDquUwQrWmylKu1z-8HhbaBSQWgovwFq6wD947YGr5DG_81BGeoU8FiW-jkmhh9zgEWhhzlfctSC8NRSH8aaSRkM9AznDPwqavFD6R6PjATHGwtYX-YNGvY8PYAPS2IpudRvD9CDcGAYQ4JZWc6ew4aW7UpxURaOAX71YbpqLGX5wND0Kz4E3312It6xOIis2icXFps3LmIeqqItUOTmTDr1A-vpl',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrqRpn5adGx8quwceBjFFHRddLDquUwQrWmylKu1z-8HhbaBSQWgovwFq6wD947YGr5DG_81BGeoU8FiW-jkmhh9zgEWhhzlfctSC8NRSH8aaSRkM9AznDPwqavFD6R6PjATHGwtYX-YNGvY8PYAPS2IpudRvD9CDcGAYQ4JZWc6ew4aW7UpxURaOAX71YbpqLGX5wND0Kz4E3312It6xOIis2icXFps3LmIeqqItUOTmTDr1A-vpl',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE'
    ],
    description: 'A heavyweight luxury statement piece tailored in double-faced Italian virgin wool. Features an elongated silhouette, broad notch lapel, and a substantial drape engineered for cold-weather confidence.',
    details: [
      '90% Virgin Wool, 10% Cashmere blend',
      'Fully lined in satin cupro',
      'Concealed horn button front fastening',
      'Interior passport and phone pockets',
      'Specialist dry clean only'
    ],
    shipping: [
      'Includes complimentary luxury garment carrier',
      'Complimentary express shipping & 30-day returns'
    ]
  },
  {
    id: 'classic-straight-chinos',
    name: 'Classic Straight Chinos',
    price: 85,
    rating: 4.6,
    reviewCount: 31,
    category: 'clothing',
    subCategory: 'Trousers',
    colors: [
      { name: 'Khaki Tan', hex: '#b39f82', bgClass: 'bg-[#b39f82]' },
      { name: 'Washed Navy', hex: '#1c2833', bgClass: 'bg-[#1c2833]' },
      { name: 'Olive Green', hex: '#4b5320', bgClass: 'bg-[#4b5320]' }
    ],
    sizes: ['30', '32', '34', '36'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYQzRt5HEE-BX3aWRln2ryY6oryEsVqnXrqZ2IHAIeFB-s_meUG92SDFtOngYWzM3PX6k8ZFMEU57QuSLvWBuWZ-m68JT1sG--FM14GgvEjSAiGe8Hhy_AJ1qecoGWAGIIc6AO3CF33UaJWUewsy7wfUqeM-EveXB9lGNGMKNECgC2YBNXRX6lzYT4E1mPF4MoFc0rtoePS5vaoZMb2IYNFbe_plrzJf4VAh_OdHoC3Qti1fr0y5dn',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYQzRt5HEE-BX3aWRln2ryY6oryEsVqnXrqZ2IHAIeFB-s_meUG92SDFtOngYWzM3PX6k8ZFMEU57QuSLvWBuWZ-m68JT1sG--FM14GgvEjSAiGe8Hhy_AJ1qecoGWAGIIc6AO3CF33UaJWUewsy7wfUqeM-EveXB9lGNGMKNECgC2YBNXRX6lzYT4E1mPF4MoFc0rtoePS5vaoZMb2IYNFbe_plrzJf4VAh_OdHoC3Qti1fr0y5dn'
    ],
    description: 'Crisp, mid-rise straight-leg trousers cut from premium Italian stretch cotton twill. Washed for broken-in softness while maintaining a sharp front crease for smart or casual pairing.',
    details: [
      '98% Organic Cotton Twill, 2% Elastane',
      'Corozo button closure with interior curtain waistband',
      'Slanted side pockets and button-through back pockets',
      'Machine wash 30°C'
    ],
    shipping: ['Standard 3-5 days delivery', 'Free returns']
  },
  {
    id: 'crisp-poplin-shirt',
    name: 'Crisp Poplin Shirting',
    price: 120,
    rating: 4.8,
    reviewCount: 45,
    category: 'shirting',
    subCategory: 'Shirts',
    colors: [
      { name: 'Pure White', hex: '#fcfcfc', bgClass: 'bg-white' },
      { name: 'Sky Blue', hex: '#c5d8ea', bgClass: 'bg-[#c5d8ea]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADJWadmQy6XkI5IeZYLwHs7_LgjDqTs1m7JiMi50kgSH_15A-GQZtxJaRAN7iPZRVpruEcOMu2iYYLCL_ix-WofRHEXseP4YzqXqLsX6rqYhPJYi0x_iBL3BPV_OYp1DXlsvQEdDQRIK5VtW0wQfTQ5mWwqQIsNMM5Hupr0bgDO1yMCAFkIoHx2CbK59WQl5tH29ie9locv1Kc-50wSamV26ljoiZzAtsgKi-cYIYQe94eOSnvDWx6',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADJWadmQy6XkI5IeZYLwHs7_LgjDqTs1m7JiMi50kgSH_15A-GQZtxJaRAN7iPZRVpruEcOMu2iYYLCL_ix-WofRHEXseP4YzqXqLsX6rqYhPJYi0x_iBL3BPV_OYp1DXlsvQEdDQRIK5VtW0wQfTQ5mWwqQIsNMM5Hupr0bgDO1yMCAFkIoHx2CbK59WQl5tH29ie9locv1Kc-50wSamV26ljoiZzAtsgKi-cYIYQe94eOSnvDWx6'
    ],
    description: 'Woven from 120s two-ply Giza cotton with a silky, luminous finish. Cut in an athletic tailored fit with a spread collar that looks immaculate with or without a tie.',
    details: [
      '100% Giza 87 Extra-Long Staple Cotton',
      'Removable collar stays',
      'Mother-of-pearl buttons cross-stitched for durability',
      'Machine wash cold, warm iron'
    ],
    shipping: ['Ships same business day when ordered before 2 PM']
  },
  {
    id: 'sage-bomber-jacket',
    name: 'Sage Lightweight Bomber',
    price: 160,
    originalPrice: 195,
    isSale: true,
    discountPercentage: 18,
    rating: 4.7,
    reviewCount: 22,
    category: 'outerwear',
    subCategory: 'Jackets',
    colors: [
      { name: 'Sage Green', hex: '#778873', bgClass: 'bg-[#778873]' },
      { name: 'Stone Grey', hex: '#949491', bgClass: 'bg-[#949491]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2A-uVo6yu5uFRIfIDuEzryaS-COHX_pXgDQpsaihJHDBBVvijV04feZ3S0Jvdi_F52K2DBldk2qV4K_amZxdKjyT7DImhTwBHoCP77NilZRgQmt6jbyrTVu2lU75NQqZGS1TEze_DwYU4WLsjwWoiOi4wigekDBhcC_lZbz6A9i_CLOLIrRfWf2g92z4G_Poy3q9vA9Rt0DGXiO4N5RFfx6aKn4PMjTGLX4dpFwjKM4D77o1XveC',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2A-uVo6yu5uFRIfIDuEzryaS-COHX_pXgDQpsaihJHDBBVvijV04feZ3S0Jvdi_F52K2DBldk2qV4K_amZxdKjyT7DImhTwBHoCP77NilZRgQmt6jbyrTVu2lU75NQqZGS1TEze_DwYU4WLsjwWoiOi4wigekDBhcC_lZbz6A9i_CLOLIrRfWf2g92z4G_Poy3q9vA9Rt0DGXiO4N5RFfx6aKn4PMjTGLX4dpFwjKM4D77o1XveC'
    ],
    description: 'A relaxed yet refined modern casual piece. Water-resistant matte nylon shell with ultra-light padding for transitional seasons.',
    details: [
      'Water-repellent technical micro-twill',
      'Raglan sleeves with tonal rib trim',
      'Dual zippered hand pockets'
    ],
    shipping: ['Standard 3-5 days delivery', 'Free returns']
  },
  {
    id: 'heavy-espresso-knitwear',
    name: 'Textured Espresso Merino Sweater',
    price: 180,
    rating: 4.9,
    reviewCount: 34,
    category: 'knitwear',
    subCategory: 'Sweaters',
    colors: [
      { name: 'Espresso Brown', hex: '#3b2f28', bgClass: 'bg-[#3b2f28]' },
      { name: 'Oatmeal Heather', hex: '#d1c8bd', bgClass: 'bg-[#d1c8bd]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj7CWi6HGOUFwWAa3HWWmaGyXvgpmCKKTOfCwUAN6C8TwhGBlTgGSQy_RhS11qeyMhdbDjSEICgM5Bq2p7ySbV17Eu_7btIejrssZz1rEVAF6sZx9oL2Vr5-Zn-XhSVomSR1dKAHOvgGZFbxSzNM91S1LsBqlLm8WFAkP6rKxsBi3fnDEggy5kjSPIjLVsIGbsEwcUOCqfGqBq_DGIHJGaMbSa0ypfMASuIjEaGirMZMoHH3WtxL4h',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCj7CWi6HGOUFwWAa3HWWmaGyXvgpmCKKTOfCwUAN6C8TwhGBlTgGSQy_RhS11qeyMhdbDjSEICgM5Bq2p7ySbV17Eu_7btIejrssZz1rEVAF6sZx9oL2Vr5-Zn-XhSVomSR1dKAHOvgGZFbxSzNM91S1LsBqlLm8WFAkP6rKxsBi3fnDEggy5kjSPIjLVsIGbsEwcUOCqfGqBq_DGIHJGaMbSa0ypfMASuIjEaGirMZMoHH3WtxL4h'
    ],
    description: 'Hand-linked 7-gauge Scottish merino wool sweater featuring deep waffle ribbing and fold-over cuffs. Remarkable warmth with effortless rustic refinement.',
    details: [
      '100% Extrafine Merino Wool',
      'Seamless saddle shoulder construction',
      'Reinforced ribbed crew neckline'
    ],
    shipping: ['Free standard delivery']
  },
  {
    id: 'charcoal-tailored-trousers',
    name: 'Charcoal Pleated Trousers',
    price: 135,
    originalPrice: 175,
    isSale: true,
    discountPercentage: 23,
    rating: 4.8,
    reviewCount: 29,
    category: 'clothing',
    subCategory: 'Trousers',
    colors: [
      { name: 'Charcoal Grey', hex: '#2f3133', bgClass: 'bg-[#2f3133]' },
      { name: 'Deep Black', hex: '#161616', bgClass: 'bg-[#161616]' }
    ],
    sizes: ['30', '32', '34', '36'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR8m96kKqNG0hilOCHkaXsjVWz5BfNp-iEfvP9NfYvfe2VPT69sh5LQKaKtJe4GKjOiFpKyjGmj2AZ3C3r9rckaKJDNZG9vVtTMqUeFlrwr_MzKQTiTaIyuWsIKyx92TyFIBBVAzxVJSHeDmz0TxjQ42M_GohSIwnnus99fA0w_ahh6Mf6IFkxafqadBoERa7-xP0qskqshhLWCfjHgiUmqixhVJykAZuZeXND9eMyKr4I4VFGTEF2',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR8m96kKqNG0hilOCHkaXsjVWz5BfNp-iEfvP9NfYvfe2VPT69sh5LQKaKtJe4GKjOiFpKyjGmj2AZ3C3r9rckaKJDNZG9vVtTMqUeFlrwr_MzKQTiTaIyuWsIKyx92TyFIBBVAzxVJSHeDmz0TxjQ42M_GohSIwnnus99fA0w_ahh6Mf6IFkxafqadBoERa7-xP0qskqshhLWCfjHgiUmqixhVJykAZuZeXND9eMyKr4I4VFGTEF2'
    ],
    description: 'High-waisted single pleat trousers crafted from tropical wool. Features extended tab waistband and side adjusters for a bespoke tailored fit.',
    details: [
      '100% High-twist Tropical Wool',
      'Single forward pleat',
      'Side waist adjusters with brass buckles'
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
    sizes: ['40', '41', '42', '43', '44', '45'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G'
    ],
    description: 'Handcrafted in Tuscany using full-grain calfskin leather, Goodyear welted to a stacked leather heel and durable Vibram half-sole. Built to age beautifully with years of wear.',
    details: [
      '100% Full-grain Italian Calfskin',
      'Goodyear welted construction (resolable)',
      'Heavy elasticized side gusset and grosgrain pull tabs',
      'Cushioned leather insole'
    ],
    shipping: ['Free insured courier delivery']
  },
  {
    id: 'suede-penny-loafers',
    name: 'Italian Suede Penny Loafer',
    price: 220,
    originalPrice: 275,
    isSale: true,
    discountPercentage: 20,
    rating: 4.9,
    reviewCount: 39,
    category: 'footwear',
    subCategory: 'Loafers',
    colors: [
      { name: 'Snuff Suede', hex: '#8a6240', bgClass: 'bg-[#8a6240]' },
      { name: 'Midnight Navy', hex: '#1b2330', bgClass: 'bg-[#1b2330]' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLwNt-JUqEiQBgOyYKRwISaq1vldmJmPrNklrshhkhtclV4Upsgc7AaUT5ZqVei6_ASy12ZqkG0uxqv_tgRKqXTcLtold7q__nRp1tMwC113L55DEKm6vWhKTieaYyx0FcIthWi1_9ddfhBin6ZqrnWzc5mTYkiR8Dn_ylYdd3n0GWYx2UO3C8VkgOsh1jdKi1wGM6jV-paY6FlKH4FvKLwZm8wlwHLqyaHpaQy7TKeB5A9E1EXtOX',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLwNt-JUqEiQBgOyYKRwISaq1vldmJmPrNklrshhkhtclV4Upsgc7AaUT5ZqVei6_ASy12ZqkG0uxqv_tgRKqXTcLtold7q__nRp1tMwC113L55DEKm6vWhKTieaYyx0FcIthWi1_9ddfhBin6ZqrnWzc5mTYkiR8Dn_ylYdd3n0GWYx2UO3C8VkgOsh1jdKi1wGM6jV-paY6FlKH4FvKLwZm8wlwHLqyaHpaQy7TKeB5A9E1EXtOX'
    ],
    description: 'Unlined buttery soft reverse-calf suede loafers engineered with Blake stitch construction. Provides unrivaled out-of-the-box flexibility and timeless Roman sprezzatura.',
    details: [
      '100% Reverse-Calf Water-Treated Suede',
      'Blake rapid stitch construction',
      'Flexible leather sole with injected rubber heel island',
      'Hand-stitched apron apron front'
    ],
    shipping: ['Free courier express delivery']
  },
  {
    id: 'minimalist-leather-sneaker',
    name: 'Minimalist Calfskin Low Sneaker',
    price: 175,
    isNew: true,
    rating: 4.8,
    reviewCount: 44,
    category: 'footwear',
    subCategory: 'Sneakers',
    colors: [
      { name: 'Chalk White', hex: '#f6f5f3', bgClass: 'bg-[#f6f5f3]' },
      { name: 'Warm Putty', hex: '#d9d2c9', bgClass: 'bg-[#d9d2c9]' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7WqbWLumO004MKPHZYW5byM2oY7pocRcQTeOj7Qq2j-G17Y0uP_x3fsLg3tACsE_b7uII2EJnxrMMx5BSWe1dBsDHJL-Yesy8GcUlc--DBGCnucScYbj_6Le2TrtUBN9RHroxGhaB4HXvobMCg_c2HaPL0JcAybfYXUg6ZElbY_1q02Ofn9b5avdmRrqAV1AmFKK-jEet8_IKwsTkB89m9S8juf2efmmx17EKIagVr_YDddqwbk0',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7WqbWLumO004MKPHZYW5byM2oY7pocRcQTeOj7Qq2j-G17Y0uP_x3fsLg3tACsE_b7uII2EJnxrMMx5BSWe1dBsDHJL-Yesy8GcUlc--DBGCnucScYbj_6Le2TrtUBN9RHroxGhaB4HXvobMCg_c2HaPL0JcAybfYXUg6ZElbY_1q02Ofn9b5avdmRrqAV1AmFKK-jEet8_IKwsTkB89m9S8juf2efmmx17EKIagVr_YDddqwbk0'
    ],
    description: 'Clean architectural lines crafted in smooth Italian Nappa leather. Features tonal waxed cotton laces and Margom-style vulcanized rubber cupsole.',
    details: [
      'Full-grain Italian Nappa leather upper',
      'Calf leather interior lining with memory foam insole',
      'Stitched rubber cupsole for maximum durability',
      'Debossed gold-foil serial branding on tongue'
    ],
    shipping: ['Complimentary standard shipping']
  },
  {
    id: 'suede-chukka-boots',
    name: 'Waxed Suede Chukka Boot',
    price: 240,
    originalPrice: 295,
    isSale: true,
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 23,
    category: 'footwear',
    subCategory: 'Boots',
    colors: [
      { name: 'Bitter Chocolate', hex: '#2e1f18', bgClass: 'bg-[#2e1f18]' },
      { name: 'Sand Mohave', hex: '#b39d82', bgClass: 'bg-[#b39d82]' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G'
    ],
    description: 'Two-eyelet desert chukka constructed with weather-treated waxed suede and natural crepe rubber outsoles for cloud-like cushioning.',
    details: [
      'Weatherproof waxed English suede',
      'Natural plantation crepe sole',
      'Brass eyelet hardware',
      'Handmade in Northamptonshire'
    ],
    shipping: ['Free worldwide express delivery']
  },

  // --- ACCESSORIES ---
  {
    id: 'leather-weekender-bag',
    name: 'Full-Grain Leather Weekender',
    price: 380,
    rating: 5.0,
    reviewCount: 16,
    category: 'accessories',
    subCategory: 'Bags',
    isNew: true,
    colors: [
      { name: 'Chestnut Brown', hex: '#4a2f1b', bgClass: 'bg-[#4a2f1b]' },
      { name: 'Jet Black', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['One Size (45L)'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE'
    ],
    description: 'Vegetable-tanned full-grain leather holdall with reinforced handles, solid brass hardware, and dedicated footwear compartment for discerning travel.',
    details: [
      'Full-Grain Tuscan Vegetable-Tanned Leather',
      'Solid Brass Hardware and YKK Excella Zippers',
      'Water-resistant canvas lining',
      'Detachable padded shoulder strap'
    ],
    shipping: ['Complimentary gift box and dust bag included']
  },
  {
    id: 'cashmere-ribbed-scarf',
    name: 'Pure Cashmere Ribbed Scarf',
    price: 110,
    originalPrice: 145,
    isSale: true,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 31,
    category: 'accessories',
    subCategory: 'Scarves',
    colors: [
      { name: 'Heather Camel', hex: '#b3936e', bgClass: 'bg-[#b3936e]' },
      { name: 'Charcoal Slate', hex: '#37383a', bgClass: 'bg-[#37383a]' },
      { name: 'Burgundy Wine', hex: '#4a1521', bgClass: 'bg-[#4a1521]' }
    ],
    sizes: ['One Size (190cm x 35cm)'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-'
    ],
    description: 'Woven in Scotland from 100% grade-A Mongolian cashmere. Exceptionally soft with dense English rib knit construction for cozy drape.',
    details: [
      '100% Pure Long-Fiber Grade-A Cashmere',
      'Finished with traditional hand-rolled fringe',
      'Dry clean only'
    ],
    shipping: ['Packaged in an embossed gift case']
  },
  {
    id: 'italian-suede-belt',
    name: 'Feather-Edge Italian Suede Belt',
    price: 75,
    rating: 4.8,
    reviewCount: 28,
    category: 'accessories',
    subCategory: 'Belts',
    colors: [
      { name: 'Mocha Brown', hex: '#48372d', bgClass: 'bg-[#48372d]' },
      { name: 'Onyx Suede', hex: '#181818', bgClass: 'bg-[#181818]' }
    ],
    sizes: ['32', '34', '36', '38'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE'
    ],
    description: '30mm wide suede dress belt with hand-burnished feathered edge and brushed silver buckle.',
    details: [
      'Calfskin Suede backed with natural nubuck leather',
      'Solid brass buckle with satin palladium finish',
      'Handcrafted in Florence'
    ],
    shipping: ['Free standard shipping']
  },
  {
    id: 'leather-bifold-wallet',
    name: 'Vegetable-Tanned Bifold Wallet',
    price: 95,
    originalPrice: 120,
    isSale: true,
    discountPercentage: 21,
    rating: 4.9,
    reviewCount: 47,
    category: 'accessories',
    subCategory: 'Small Leather Goods',
    colors: [
      { name: 'Cognac Saddle', hex: '#633e24', bgClass: 'bg-[#633e24]' },
      { name: 'Obsidian Black', hex: '#111111', bgClass: 'bg-[#111111]' }
    ],
    sizes: ['One Size'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyI0zW9RLHDHFjJJgBG-Ll3HR0U2SoLLFOFQBoop4v22yGvHXDVV_sFd-Bw49Rb5lMCB2sbvcVJqi01AJ6QkEhURpHQqvYOxhi7Nlgax-Hi81Jzc9gbnkV7R_fo5JnvPOnoYgQ7KOQ4qHIDpHkAcaHds2T4OxgtBCkjCVFpzEPANm_1fe0uOKPWy_Da7F0YdAleqY1aHyzxnJ3ro0RsBkVLQENHxnVVh9ober8rMH1hbjsKJIfEir',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLyI0zW9RLHDHFjJJgBG-Ll3HR0U2SoLLFOFQBoop4v22yGvHXDVV_sFd-Bw49Rb5lMCB2sbvcVJqi01AJ6QkEhURpHQqvYOxhi7Nlgax-Hi81Jzc9gbnkV7R_fo5JnvPOnoYgQ7KOQ4qHIDpHkAcaHds2T4OxgtBCkjCVFpzEPANm_1fe0uOKPWy_Da7F0YdAleqY1aHyzxnJ3ro0RsBkVLQENHxnVVh9ober8rMH1hbjsKJIfEir'
    ],
    description: 'Slimline 6-card bifold wallet featuring dual hidden receipt sleeves and a lined full-length bill compartment.',
    details: [
      'Tuscan vegetable-tanned saddle leather',
      'RFID protective layer embedded',
      'Hand-stitched perimeter with waxed thread'
    ],
    shipping: ['Free gift box packaging']
  }
];
