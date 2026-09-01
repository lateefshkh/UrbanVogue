import React from "react";
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
      name: "Formal Wear",
      category: "clothing",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpEOuLX7HYB4g013tWaLsN5U-W_t3fgg54QtYpirntkdAN2ONpfvPqXHVSRMxXI7zDnv_1EKWWHzQmrGMFb3jLMLB1fG2ydZxVk6hB6soQhaBhKaxW8Q1hc6g4FT3UW_dVzzgTHxEsvVKNHyrdTdw77iswaIn6wvK1CgC56L58mfknew3-lOBEbdZRAGbZztkjPFasYUCNU2Ek9ZxWelQyH4CaQCjsaCqwdxk5wezAi6Hd54fSnk-",
    },
    {
      id: "street-style",
      name: "Street Style",
      category: "outerwear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBj2A-uVo6yu5uFRIfIDuEzryaS-COHX_pXgDQpsaihJHDBBVvijV04feZ3S0Jvdi_F52K2DBldk2qV4K_amZxdKjyT7DImhTwBHoCP77NilZRgQmt6jbyrTVu2lU75NQqZGS1TEze_DwYU4WLsjwWoiOi4wigekDBhcC_lZbz6A9i_CLOLIrRfWf2g92z4G_Poy3q9vA9Rt0DGXiO4N5RFfx6aKn4PMjTGLX4dpFwjKM4D77o1XveC",
    },
    {
      id: "outerwear-cat",
      name: "Outerwear",
      category: "outerwear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrqRpn5adGx8quwceBjFFHRddLDquUwQrWmylKu1z-8HhbaBSQWgovwFq6wD947YGr5DG_81BGeoU8FiW-jkmhh9zgEWhhzlfctSC8NRSH8aaSRkM9AznDPwqavFD6R6PjATHGwtYX-YNGvY8PYAPS2IpudRvD9CDcGAYQ4JZWc6ew4aW7UpxURaOAX71YbpqLGX5wND0Kz4E3312It6xOIis2icXFps3LmIeqqItUOTmTDr1A-vpl",
    },
    {
      id: "footwear-cat",
      name: "Footwear",
      category: "footwear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G",
    },
    {
      id: "accessories-cat",
      name: "Accessories",
      category: "accessories",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8pvWpVATTjLV_h5E2WgsaMmpG6zqRg5FitWQ57greFhrQNSkkZeFP4Sk1F7DLDkrmP8PBtkT16sTXSuuTbxMs7XMAXudKnepLbrO9AfxxpUkOeDO9CCrJIJ_vu6u1NryzU9-oFWa2W4uZ7THxnDx_XAAXa0DxGkuHchTZ22L_FsbsxZxNohl-zza5U1A4vkwloQAeT4AHWCIW96-3MxhwJBW5p82fpp5MtP2z1VVqTj0SW0v4AGsE",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[580px] lg:h-[calc(100vh-80px)] max-h-[860px] flex items-center justify-center overflow-hidden bg-[#191715]">
        {/* Hero Background Image with Subtle Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/homepage/homepage1.jpg"
            alt="Danish Vogue Modern Menswear"
            className="w-full h-full object-cover object-center scale-100 filter brightness-95"
          />
          {/* Subtle Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 md:bg-gradient-to-r md:from-black/50 md:via-black/20 md:to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-16 text-white py-16 md:py-24">
          <div className="max-w-xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[#eae1da] mb-4 font-medium">
              AUTUMN / WINTER 2026
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-[1.1] mb-6 text-white drop-shadow-md">
              Define
              <br />
              Your Style
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 mb-8 max-w-md drop-shadow-sm font-sans">
              Modern Menswear for Every Occasion
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                id="hero-shop-now-btn"
                onClick={() => {
                  setActiveTab("shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#f1edec] text-[#191715] px-8 py-3.5 border border-[#cfc4bd] text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-white transition-all shadow-sm cursor-pointer rounded-xs"
              >
                Shop Now
              </button>
              <button
                id="hero-new-arrivals-btn"
                onClick={() => {
                  setActiveTab("lookbook");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-transparent text-white px-8 py-3.5 border border-white/60 text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-white/15 backdrop-blur-xs transition-all cursor-pointer rounded-xs"
              >
                New Arrivals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials Section */}
      <section className="py-20 md:py-28 w-full max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[#4c4540] font-semibold whitespace-nowrap">
              ESSENTIALS
            </h2>
            <div className="flex-1 h-[1px] bg-[#cfc4bd]" />
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 snap-x snap-mandatory">
          {essentials.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onFilterByCategory(item.category);
                setActiveTab("shop");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group relative flex-none w-[260px] sm:w-[280px] aspect-[3/4] snap-start cursor-pointer overflow-hidden rounded-xs bg-[#f7f3f2] shadow-xs border border-[#cfc4bd]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#fdf8f7]/95 backdrop-blur-xs py-3 px-4 text-center border border-[#cfc4bd]/40 text-[13px] tracking-wide text-[#1c1b1b] font-medium group-hover:bg-white transition-colors shadow-xs">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Autumn Collection Promotional Split Banner */}
      <section className="w-full max-w-[1440px] mx-auto px-5 md:px-16 mb-24">
        <div className="flex flex-col md:flex-row bg-[#eae1da] rounded-xs overflow-hidden border border-[#cfc4bd]/60">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2 p-10 sm:p-14 md:p-18 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-[#cfc4bd]/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#69635e] mb-3 font-semibold">
              Seasonal Privilege
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#191715] mb-6 max-w-md leading-tight">
              Autumn Collection – Up to 30% OFF
            </h3>
            <p className="text-[14px] text-[#635d58] mb-8 max-w-md leading-relaxed">
              Curated layering pieces designed with tactile Italian fabrics,
              relaxed drape, and enduring construction.
            </p>
            <button
              id="autumn-collection-shop-btn"
              onClick={() => {
                setActiveTab("sale");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[#625d5b] text-white px-8 py-3.5 rounded-xs text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-[#191715] transition-colors shadow-xs cursor-pointer"
            >
              SHOP COLLECTION
            </button>
          </div>

          {/* Right Image Block */}
          <div className="w-full md:w-1/2 relative min-h-[340px] md:min-h-[440px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrRXMSeMT_Ae5lZOvkQNMabDLAX-v5qFpSuy_vOZiPuItDwfE-kQv9UFOXZMEx0cMvLOa0FZAzKVljS5louJr4GwYqDzqDQNF_qn3QnfBxI3oLr3tEkdyencGMOSzKXRbfI4z09I6C2sZncLfeWkNhYywWoaDe7CjMaWEykhaPSUWJ_IEkmUMX6ZmFKqnOGHRpEdWCrc00OVuoR7eZm1PHnVRYUjWP-mS9a7ZF0N06oZjkL7egUmvO"
              alt="Autumn Collection Outerwear"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* Featured Editorial Highlights */}
      <section className="w-full max-w-[1440px] mx-auto px-5 md:px-16 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#69635e] mb-2 font-semibold">
              Capsule Focus
            </p>
            <h2 className="text-3xl font-serif text-[#191715]">
              Featured Editor's Picks
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab("shop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-4 md:mt-0 text-[12px] uppercase tracking-[0.1em] text-[#191715] border-b border-[#191715] pb-1 hover:text-[#625d5b] transition-colors cursor-pointer"
          >
            View Full Catalog →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative w-full aspect-[3/4] bg-[#f7f3f2] rounded-xs overflow-hidden mb-3.5 cursor-pointer border border-[#cfc4bd]/40"
              >
                {product.isSale && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#191715] text-white text-[9px] tracking-wider uppercase px-2 py-1">
                    Sale
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#fdf8f7] text-[#191715] border border-[#cfc4bd] text-[9px] tracking-wider uppercase px-2 py-1">
                    New
                  </span>
                )}
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 bg-gradient-to-t from-black/30 to-transparent">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product);
                    }}
                    className="w-full bg-[#ffffff] text-[#191715] text-[11px] uppercase tracking-widest font-medium py-2.5 border border-[#cfc4bd] hover:bg-[#f1edec] transition-colors shadow-xs cursor-pointer rounded-xs"
                  >
                    Quick Add
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
                <span
                  className={
                    product.isSale
                      ? "text-[#ba1a1a] font-medium"
                      : "text-[#4c4540]"
                  }
                >
                  ${product.price}
                </span>
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
    </div>
  );
};
