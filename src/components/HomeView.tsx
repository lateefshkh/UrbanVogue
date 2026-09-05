import React, { useState } from "react";
import { Product, ActiveTab } from "../types";

interface HomeViewProps {
  onSelectProduct: (productId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
  onFilterByCategory: (category: string) => void;
  featuredProducts: Product[];
  onQuickAdd: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProduct,
  setActiveTab,
  onFilterByCategory,
  featuredProducts,
  onQuickAdd,
}) => {
  const [clothingCategory, setClothingCategory] = useState<string>("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const essentials = [
    {
      id: "casual-wear",
      name: "Casual Wear",
      category: "clothing",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLwNt-JUqEiQBgOyYKRwISaq1vldmJmPrNklrshhkhtclV4Upsgc7AaUT5ZqVei6_ASy12ZqkG0uxqv_tgRKqXTcLtold7q__nRp1tMwC113L55DEKm6vWhKTieaYyx0FcIthWi1_9ddfhBin6ZqrnWzc5mTYkiR8Dn_ylYdd3n0GWYx2UO3C8VkgOsh1jdKi1wGM6jV-paY6FlKH4FvKLwZm8wlwHLqyaHpaQy7TKeB5A9E1EXtOX",
    },
    {
      id: "formal-wear",
      name: "Formal Tailoring",
      category: "clothing",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-",
    },
    {
      id: "street-style",
      name: "Outerwear & Coats",
      category: "outerwear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBj2A-uVo6yu5uFRIfIDuEzryaS-COHX_pXgDQpsaihJHDBBVvijV04feZ3S0Jvdi_F52K2DBldk2qV4K_amZxdKjyT7DImhTwBHoCP77NilZRgQmt6jbyrTVu2lU75NQqZGS1TEze_DwYU4WLsjwWoiOi4wigekDBhcC_lZbz6A9i_CLOLIrRfWf2g92z4G_Poy3q9vA9Rt0DGXiO4N5RFfx6aKn4PMjTGLX4dpFwjKM4D77o1XveC",
    },
    {
      id: "footwear-cat",
      name: "Handcrafted Footwear",
      category: "footwear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G",
    },
    {
      id: "accessories-cat",
      name: "Refined Accessories",
      category: "accessories",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE",
    },
  ];

  // Filtered Products for Sections
  const clothingProducts = featuredProducts.filter(
    (p) => p.category === "clothing" || p.category === "outerwear"
  );

  const filteredClothing =
    clothingCategory === "all"
      ? clothingProducts
      : clothingProducts.filter(
          (p) =>
            p.subCategory?.toLowerCase() === clothingCategory.toLowerCase() ||
            p.category.toLowerCase() === clothingCategory.toLowerCase()
        );

  const footwearProducts = featuredProducts.filter(
    (p) => p.category === "footwear"
  );

  const accessoriesProducts = featuredProducts.filter(
    (p) => p.category === "accessories"
  );

  const saleProducts = featuredProducts.filter((p) => p.isSale);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="w-full bg-[#fdf8f7]">
      {/* 1. HERO CAMPAIGN */}
      <section className="relative w-full min-h-[620px] lg:h-[calc(100vh-80px)] max-h-[880px] flex items-center justify-center overflow-hidden bg-[#191715]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage/homepage1.jpg"
            alt="Danish Vogue Modern Menswear"
            className="w-full h-full object-cover object-center scale-100 luxury-img-zoom brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 md:bg-gradient-to-r md:from-black/60 md:via-black/25 md:to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-16 text-white py-20 md:py-28 animate-fade-in">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#eae1da] mb-4 font-semibold">
              AUTUMN / WINTER 2026 EDITORIAL
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal leading-[1.08] mb-6 text-white drop-shadow-md">
              Define
              <br />
              Your Style
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 mb-8 max-w-md drop-shadow-sm font-sans leading-relaxed">
              Subtle Scandinavian aesthetics meet impeccable Italian craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                id="hero-shop-now-btn"
                onClick={() => {
                  const el = document.getElementById("clothing-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActiveTab("shop");
                  }
                }}
                className="bg-[#ffffff] text-[#191715] px-8 py-3.5 border border-white text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-[#eae1da] transition-all duration-300 shadow-sm cursor-pointer rounded-xs luxury-card"
              >
                Explore Collection
              </button>
              <button
                id="hero-lookbook-btn"
                onClick={() => {
                  const el = document.getElementById("lookbook-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActiveTab("lookbook");
                  }
                }}
                className="bg-transparent text-white px-8 py-3.5 border border-white/60 text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-white/15 backdrop-blur-xs transition-all duration-300 cursor-pointer rounded-xs"
              >
                Campaign Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESSENTIALS CAROUSEL */}
      <section className="py-16 md:py-24 w-full max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#69635e] font-semibold whitespace-nowrap">
              CAPSULE CATEGORIES
            </h2>
            <div className="flex-1 h-[1px] bg-[#cfc4bd]" />
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 snap-x snap-mandatory">
          {essentials.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const sectionId =
                  item.category === "clothing" || item.category === "outerwear"
                    ? "clothing-section"
                    : `${item.category}-section`;
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  onFilterByCategory(item.category);
                  setActiveTab("shop");
                }
              }}
              className="group relative flex-none w-[250px] sm:w-[270px] aspect-[3/4] snap-start cursor-pointer overflow-hidden rounded-xs bg-[#f7f3f2] shadow-xs border border-[#cfc4bd]/40 luxury-card"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover luxury-img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#fdf8f7]/95 backdrop-blur-xs py-3 px-4 text-center border border-[#cfc4bd]/40 text-[13px] tracking-wide text-[#1c1b1b] font-medium group-hover:bg-white transition-colors shadow-xs">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND PHILOSOPHY BANNER */}
      <section className="w-full bg-[#191715] text-white py-14 px-5 md:px-16 mb-20">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#eae1da] mb-2 font-medium">
              THE COPENHAGEN MANIFESTO
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-white">
              Quiet Confidence. Tactile Italian Fabrics. Uncompromising Cut.
            </h3>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("lookbook-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[11px] uppercase tracking-[0.2em] text-[#eae1da] border-b border-[#eae1da] pb-1 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Discover House Philosophy →
          </button>
        </div>
      </section>

      {/* 3. CLOTHING & TAILORING SECTION */}
      <section id="clothing-section" className="w-full max-w-[1440px] mx-auto px-5 md:px-16 py-12 mb-20 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-[#cfc4bd]/40">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#69635e] mb-2 font-semibold">
              CHAPTER 01 — READY-TO-WEAR
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191715]">
              Architectural Tailoring &amp; Knitwear
            </h2>
            <p className="text-sm text-[#69635e] mt-1">
              Precision-cut outerwear, merino knitwear, and tailored suit separates.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: "all", label: "All Ready-to-Wear" },
              { id: "outerwear", label: "Outerwear" },
              { id: "tailoring", label: "Tailoring" },
              { id: "knitwear", label: "Knitwear" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setClothingCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-all cursor-pointer ${
                  clothingCategory === cat.id
                    ? "bg-[#191715] text-white"
                    : "bg-[#eae1da] text-[#4c4540] hover:bg-[#cfc4bd]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredClothing.slice(0, 8).map((product) => (
            <div key={product.id} className="group flex flex-col luxury-card">
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative w-full aspect-[3/4] bg-[#f7f3f2] rounded-xs overflow-hidden mb-3.5 cursor-pointer border border-[#cfc4bd]/40"
              >
                {product.isNew && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#fdf8f7] text-[#191715] border border-[#cfc4bd] text-[9px] tracking-wider uppercase px-2.5 py-1 font-medium shadow-xs">
                    New Arrival
                  </span>
                )}
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-img-zoom"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product);
                    }}
                    className="w-full bg-white text-[#191715] text-[11px] uppercase tracking-widest font-medium py-2.5 border border-[#cfc4bd] hover:bg-[#f1edec] transition-colors shadow-sm cursor-pointer rounded-xs"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>

              <h3
                onClick={() => onSelectProduct(product.id)}
                className="text-[14px] font-medium text-[#191715] mb-1 hover:underline cursor-pointer truncate"
              >
                {product.name}
              </h3>
              <p className="text-xs text-[#69635e] mb-1.5">{product.subCategory || "Clothing"}</p>
              <div className="flex items-center gap-2 text-[14px]">
                <span className="text-[#191715] font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-[#7e756f] line-through text-[12px]">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              onFilterByCategory("clothing");
              setActiveTab("clothing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-transparent text-[#191715] border border-[#191715] px-8 py-3 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#191715] hover:text-white transition-all duration-300 rounded-xs cursor-pointer"
          >
            Explore Full Clothing Catalog ({clothingProducts.length} Pieces) →
          </button>
        </div>
      </section>

      {/* 4. LOOKBOOK EDITORIAL CAMPAIGN SECTION */}
      <section id="lookbook-section" className="w-full max-w-[1440px] mx-auto px-5 md:px-16 py-12 mb-20 scroll-mt-24">
        <div className="bg-[#eae1da]/60 rounded-xs border border-[#cfc4bd]/60 p-8 sm:p-12 md:p-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#69635e] mb-2 font-semibold">
              CHAPTER 02 — CAMPAIGN EDITORIAL
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#191715] mb-4">
              The Copenhagen Mood
            </h2>
            <p className="text-sm sm:text-base text-[#4c4540] italic font-serif leading-relaxed">
              "Quiet garments designed for urban clarity, crafted from double-faced cashmere and heavyweight Italian cotton."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 group relative overflow-hidden rounded-xs border border-[#cfc4bd]/50 shadow-sm luxury-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR8m96kKqNG0hilOCHkaXsjVWz5BfNp-iEfvP9NfYvfe2VPT69sh5LQKaKtJe4GKjOiFpKyjGmj2AZ3C3r9rckaKJDNZG9vVtTMqUeFlrwr_MzKQTiTaIyuWsIKyx92TyFIBBVAzxVJSHeDmz0TxjQ42M_GohSIwnnus99fA0w_ahh6Mf6IFkxafqadBoERa7-xP0qskqshhLWCfjHgiUmqixhVJykAZuZeXND9eMyKr4I4VFGTEF2"
                alt="Autumn Campaign Editorial"
                className="w-full h-auto object-cover aspect-[4/3] luxury-img-zoom"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <button
                  onClick={() => onSelectProduct("smart-casual-blazer")}
                  className="bg-white/90 text-[#191715] backdrop-blur-md px-6 py-3 border border-[#cfc4bd] text-[11px] uppercase tracking-widest font-medium hover:bg-[#191715] hover:text-white transition-colors cursor-pointer rounded-xs shadow-md"
                >
                  Shop Campaign Suit →
                </button>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="p-6 bg-white rounded-xs border border-[#cfc4bd]/40 shadow-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#69635e] font-semibold block mb-2">
                  LOOK 01 / AUTUMN OVERCOAT
                </span>
                <h4 className="text-xl font-serif text-[#191715] mb-2">
                  Double-Faced Wool Trench
                </h4>
                <p className="text-xs text-[#4c4540] leading-relaxed mb-4">
                  Constructed without internal stiffening for a natural fluid drop over relaxed trousers.
                </p>
                <button
                  onClick={() => onSelectProduct("beige-bomber-jacket")}
                  className="text-xs uppercase tracking-wider font-semibold text-[#191715] border-b border-[#191715] pb-0.5 hover:text-[#625d5b]"
                >
                  View Look Details
                </button>
              </div>

              <div className="p-6 bg-white rounded-xs border border-[#cfc4bd]/40 shadow-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#69635e] font-semibold block mb-2">
                  LOOK 02 / URBAN TAILORING
                </span>
                <h4 className="text-xl font-serif text-[#191715] mb-2">
                  Fine Gauge Merino Turtleneck
                </h4>
                <p className="text-xs text-[#4c4540] leading-relaxed mb-4">
                  Spun from 19.5 micron merino wool for thermal elegance without bulk.
                </p>
                <button
                  onClick={() => onSelectProduct("knitted-polo-shirt")}
                  className="text-xs uppercase tracking-wider font-semibold text-[#191715] border-b border-[#191715] pb-0.5 hover:text-[#625d5b]"
                >
                  View Knitwear
                </button>
              </div>

              <button
                onClick={() => {
                  setActiveTab("lookbook");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full py-3.5 bg-[#191715] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#313030] transition-colors shadow-xs text-center cursor-pointer"
              >
                View Complete Lookbook Exhibition →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTWEAR ATELIER SECTION */}
      <section id="footwear-section" className="w-full max-w-[1440px] mx-auto px-5 md:px-16 py-12 mb-20 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-[#cfc4bd]/40">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#69635e] mb-2 font-semibold">
              CHAPTER 03 — FOOTWEAR ATELIER
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191715]">
              Handcrafted Italian Footwear
            </h2>
            <p className="text-sm text-[#69635e] mt-1">
              Goodyear-welted construction, vegetable-tanned leathers, and refined silhouettes.
            </p>
          </div>
          <button
            onClick={() => {
              onFilterByCategory("footwear");
              setActiveTab("footwear");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-4 md:mt-0 text-[12px] uppercase tracking-[0.1em] text-[#191715] border-b border-[#191715] pb-1 hover:text-[#625d5b] transition-colors cursor-pointer"
          >
            Explore All Footwear →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {footwearProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group flex flex-col luxury-card">
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative w-full aspect-[3/4] bg-[#f7f3f2] rounded-xs overflow-hidden mb-3.5 cursor-pointer border border-[#cfc4bd]/40"
              >
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-img-zoom"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product);
                    }}
                    className="w-full bg-white text-[#191715] text-[11px] uppercase tracking-widest font-medium py-2.5 border border-[#cfc4bd] hover:bg-[#f1edec] transition-colors shadow-sm cursor-pointer rounded-xs"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>
              <h3
                onClick={() => onSelectProduct(product.id)}
                className="text-[14px] font-medium text-[#191715] mb-1 hover:underline cursor-pointer truncate"
              >
                {product.name}
              </h3>
              <p className="text-xs text-[#69635e] mb-1.5">{product.subCategory || "Footwear"}</p>
              <div className="text-[#191715] font-medium text-[14px]">
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ACCESSORIES & LEATHER GOODS SECTION */}
      <section id="accessories-section" className="w-full max-w-[1440px] mx-auto px-5 md:px-16 py-12 mb-20 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-[#cfc4bd]/40">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#69635e] mb-2 font-semibold">
              CHAPTER 04 — REFINED ACCESSORIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191715]">
              Leather Goods &amp; Accoutrements
            </h2>
            <p className="text-sm text-[#69635e] mt-1">
              Cashmere scarves, full-grain leather bags, timepieces, and opticals.
            </p>
          </div>
          <button
            onClick={() => {
              onFilterByCategory("accessories");
              setActiveTab("accessories");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-4 md:mt-0 text-[12px] uppercase tracking-[0.1em] text-[#191715] border-b border-[#191715] pb-1 hover:text-[#625d5b] transition-colors cursor-pointer"
          >
            Explore All Accessories →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {accessoriesProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group flex flex-col luxury-card">
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative w-full aspect-[3/4] bg-[#f7f3f2] rounded-xs overflow-hidden mb-3.5 cursor-pointer border border-[#cfc4bd]/40"
              >
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-img-zoom"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product);
                    }}
                    className="w-full bg-white text-[#191715] text-[11px] uppercase tracking-widest font-medium py-2.5 border border-[#cfc4bd] hover:bg-[#f1edec] transition-colors shadow-sm cursor-pointer rounded-xs"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>
              <h3
                onClick={() => onSelectProduct(product.id)}
                className="text-[14px] font-medium text-[#191715] mb-1 hover:underline cursor-pointer truncate"
              >
                {product.name}
              </h3>
              <p className="text-xs text-[#69635e] mb-1.5">{product.subCategory || "Accessories"}</p>
              <div className="text-[#191715] font-medium text-[14px]">
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SEASONAL ARCHIVE / SALE SECTION */}
      <section id="sale-section" className="w-full max-w-[1440px] mx-auto px-5 md:px-16 py-12 mb-20 scroll-mt-24">
        <div className="flex flex-col md:flex-row bg-[#eae1da] rounded-xs overflow-hidden border border-[#cfc4bd]/60 mb-12">
          <div className="w-full md:w-1/2 p-10 sm:p-14 md:p-18 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-[#cfc4bd]/40">
            <span className="inline-block bg-[#191715] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold mb-4 rounded-xs">
              CHAPTER 05 — ARCHIVE PRIVILEGE
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#191715] mb-4 leading-tight">
              Seasonal Archive — Up to 30% OFF
            </h3>
            <p className="text-[14px] text-[#635d58] mb-6 max-w-md leading-relaxed">
              Curated tailoring &amp; outerwear pieces from previous editorial drops. Use code <span className="font-semibold text-[#191715]">VOGUE20</span> at checkout for an additional 20% privilege.
            </p>
            <button
              id="autumn-collection-shop-btn"
              onClick={() => {
                onFilterByCategory("sale");
                setActiveTab("sale");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[#191715] text-white px-8 py-3.5 rounded-xs text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-[#313030] transition-colors shadow-xs cursor-pointer"
            >
              Explore Archive Privilege →
            </button>
          </div>

          <div className="w-full md:w-1/2 relative min-h-[340px] md:min-h-[440px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrRXMSeMT_Ae5lZOvkQNMabDLAX-v5qFpSuy_vOZiPuItDwfE-kQv9UFOXZMEx0cMvLOa0FZAzKVljS5louJr4GwYqDzqDQNF_qn3QnfBxI3oLr3tEkdyencGMOSzKXRbfI4z09I6C2sZncLfeWkNhYywWoaDe7CjMaWEykhaPSUWJ_IEkmUMX6ZmFKqnOGHRpEdWCrc00OVuoR7eZm1PHnVRYUjWP-mS9a7ZF0N06oZjkL7egUmvO"
              alt="Archive Sale Outerwear"
              className="w-full h-full object-cover object-center luxury-img-zoom"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* Sale Showcase Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {saleProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group flex flex-col luxury-card">
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative w-full aspect-[3/4] bg-[#f7f3f2] rounded-xs overflow-hidden mb-3.5 cursor-pointer border border-[#cfc4bd]/40"
              >
                <span className="absolute top-2.5 left-2.5 z-10 bg-[#ba1a1a] text-white text-[9px] tracking-wider uppercase px-2.5 py-1 font-bold shadow-xs">
                  Privilege Sale
                </span>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-img-zoom"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product);
                    }}
                    className="w-full bg-white text-[#191715] text-[11px] uppercase tracking-widest font-medium py-2.5 border border-[#cfc4bd] hover:bg-[#f1edec] transition-colors shadow-sm cursor-pointer rounded-xs"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>
              <h3
                onClick={() => onSelectProduct(product.id)}
                className="text-[14px] font-medium text-[#191715] mb-1 hover:underline cursor-pointer truncate"
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-[14px]">
                <span className="text-[#ba1a1a] font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-[#7e756f] line-through text-[12px]">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. HOUSE STANDARDS & VALUES */}
      <section className="w-full bg-[#f7f3f2] border-y border-[#cfc4bd]/40 py-16 px-5 md:px-16 mb-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-3xl text-[#191715]">
              workspace_premium
            </span>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#191715] uppercase tracking-wider mb-1">
                Italian &amp; Biella Mills
              </h4>
              <p className="text-xs text-[#69635e] leading-relaxed">
                Superfine merino, organic linen, and worsted wool sourced directly from centuries-old European mills.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-3xl text-[#191715]">
              local_shipping
            </span>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#191715] uppercase tracking-wider mb-1">
                Carbon-Neutral Express
              </h4>
              <p className="text-xs text-[#69635e] leading-relaxed">
                Complimentary climate-compensated standard shipping on all orders exceeding $150.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-3xl text-[#191715]">
              content_cut
            </span>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#191715] uppercase tracking-wider mb-1">
                Atelier Concierge
              </h4>
              <p className="text-xs text-[#69635e] leading-relaxed">
                Personal styling advice and precision sizing consultations available via our editorial team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-3xl text-[#191715]">
              published_with_changes
            </span>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#191715] uppercase tracking-wider mb-1">
                30-Day Privilege Return
              </h4>
              <p className="text-xs text-[#69635e] leading-relaxed">
                Hassle-free return policy with pre-paid return labels included in signature box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VIP EDITORIAL GAZETTE NEWSLETTER */}
      <section className="w-full max-w-[1440px] mx-auto px-5 md:px-16 mb-24">
        <div className="bg-[#191715] text-white p-8 sm:p-14 rounded-xs text-center border border-[#cfc4bd]/30 shadow-xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#eae1da] mb-3 font-semibold">
            DANISH VOGUE GAZETTE
          </p>
          <h3 className="text-2xl sm:text-4xl font-serif mb-4 text-white">
            Receive Private Editorial Invites &amp; Seasonal Previews
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto mb-8 leading-relaxed font-sans">
            Subscribe to receive private seasonal invitations, capsule launch alerts, and subscriber-only archive access.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 text-xs rounded-xs focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-[#191715] px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#eae1da] transition-colors rounded-xs cursor-pointer shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="mt-4 text-xs text-emerald-400 font-medium animate-fade-in">
              ✓ Welcome to the Danish Vogue Gazette. Check your inbox shortly.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
