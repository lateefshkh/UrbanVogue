import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';

interface FootwearViewProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onQuickAdd: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const FootwearView: React.FC<FootwearViewProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [filterState, setFilterState] = useState<FilterState>({
    category: 'footwear',
    subCategory: 'all',
    color: 'all',
    size: 'all',
    minPrice: 0,
    maxPrice: 600,
    sortBy: 'recommended',
    searchQuery: '',
  });

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const footwearCategories = [
    { id: 'all', label: 'All Footwear' },
    { id: 'Boots', label: 'Boots & Chukkas' },
    { id: 'Loafers', label: 'Suede & Leather Loafers' },
    { id: 'Sneakers', label: 'Minimalist Sneakers' },
  ];

  const footwearProducts = useMemo(() => {
    return products.filter((p) => p.category === 'footwear');
  }, [products]);

  const filteredProducts = useMemo(() => {
    return footwearProducts
      .filter((p) => {
        if (filterState.subCategory !== 'all' && p.subCategory !== filterState.subCategory) {
          return false;
        }

        if (filterState.size !== 'all' && !p.sizes.includes(filterState.size)) {
          return false;
        }

        if (p.price < filterState.minPrice || p.price > filterState.maxPrice) {
          return false;
        }

        if (filterState.searchQuery) {
          const q = filterState.searchQuery.toLowerCase();
          return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        }

        return true;
      })
      .sort((a, b) => {
        if (filterState.sortBy === 'price-low') return a.price - b.price;
        if (filterState.sortBy === 'price-high') return b.price - a.price;
        if (filterState.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        if (filterState.sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [footwearProducts, filterState]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-16 pt-10 md:pt-14 pb-24">
      {/* Footwear Editorial Hero */}
      <section className="relative mb-14 bg-[#211f1d] text-white border border-[#4a4744] rounded-xs overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-3/5 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d6cbbe] font-semibold mb-3">
              ARTISANAL FOOTWEAR
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight leading-tight">
              Footwear Collection
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#d1c8bd] max-w-lg leading-relaxed mb-6 font-sans">
              Hand-lasted Tuscan calfskin boots, Blake-stitched reverse suede loafers, and low-profile Nappa leather sneakers engineered for enduring comfort and character.
            </p>
            <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#a89f95] font-medium">
              <span>Goodyear Welted</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#706a64]" />
              <span>Full-Grain Calfskin</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#706a64] hidden sm:inline-block" />
              <span className="hidden sm:inline-block">Vibram & Leather Soles</span>
            </div>
          </div>
          <div className="w-full md:w-2/5 min-h-[220px] md:min-h-[300px] relative overflow-hidden bg-[#161514]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmiTj7I_Hd95nRgxhzUi7UkmOVVBKxDWUKwmki2qO0LQuP__1LTNeLVP5grd0Kj9KSS6iLDxf1wYE5WzuIbdO_D914LEqB5xAlOEJeQByyozxHRTfIF3YaHGGDDPKwLD9mXTgZ82dMXb5F3oUfIqgCKtfjYpct3eYC97Z63XqRH4dh97dSESnMo2CzTs6pjxtSLQ-xd7nMAX4e_DA1q-E-ugbUdfO8oCIuSvHlRtwUlDwx8soOoo2G"
              alt="Footwear collection editorial"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* Subcategory Navigation */}
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-[#cfc4bd]/40">
        {footwearCategories.map((sub) => (
          <button
            key={sub.id}
            id={`footwear-subcat-${sub.id}`}
            onClick={() => setFilterState((prev) => ({ ...prev, subCategory: sub.id }))}
            className={`px-4 py-2 text-[12px] uppercase tracking-wider font-medium whitespace-nowrap transition-all rounded-xs cursor-pointer ${
              filterState.subCategory === sub.id
                ? 'bg-[#191715] text-white border border-[#191715]'
                : 'bg-[#f7f3f2] text-[#4c4540] hover:bg-[#eae1da] border border-[#cfc4bd]/50'
            }`}
          >
            {sub.label}
          </button>
        ))}
      </div>

      {/* Filter and Sorting Toolbar */}
      <div className="flex justify-between items-center border-b border-[#cfc4bd] pb-4 mb-10 text-[12px] uppercase tracking-widest font-medium">
        <button
          id="footwear-filter-toggle-btn"
          onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
          className="flex items-center gap-2 text-[#1c1b1b] hover:text-[#625d5b] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          FILTER {filterState.size !== 'all' || filterState.subCategory !== 'all' ? `(ACTIVE)` : ''}
        </button>

        <div className="flex items-center gap-6 text-[#4c4540]">
          <span className="text-[#69635e]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'PAIR' : 'PAIRS'}
          </span>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[#69635e]">SORT:</span>
            <select
              value={filterState.sortBy}
              onChange={(e) => setFilterState((prev) => ({ ...prev, sortBy: e.target.value as FilterState['sortBy'] }))}
              className="bg-transparent border-0 text-[#191715] font-medium uppercase tracking-widest text-[12px] focus:outline-none cursor-pointer pr-4"
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="newest">NEWEST ARRIVALS</option>
              <option value="rating">HIGHEST RATED</option>
            </select>
          </div>
        </div>
      </div>

      {/* Collapsible Filter Panel */}
      {isFilterDrawerOpen && (
        <div className="bg-[#f7f3f2] border border-[#cfc4bd] p-6 mb-10 rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest font-semibold text-[#191715] mb-3">
              EU Shoe Size
            </label>
            <div className="flex flex-wrap gap-2">
              {['all', '40', '41', '42', '43', '44', '45'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFilterState((prev) => ({ ...prev, size }))}
                  className={`px-3 py-1.5 text-xs rounded-xs border cursor-pointer ${
                    filterState.size === size
                      ? 'bg-[#191715] text-white border-[#191715]'
                      : 'bg-white text-[#4c4540] border-[#cfc4bd] hover:border-[#191715]'
                  }`}
                >
                  {size === 'all' ? 'All Sizes' : `EU ${size}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest font-semibold text-[#191715] mb-3">
              Max Price: ${filterState.maxPrice}
            </label>
            <input
              type="range"
              min="100"
              max="500"
              step="25"
              value={filterState.maxPrice}
              onChange={(e) => setFilterState((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
              className="w-full accent-[#191715] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#69635e] mt-1">
              <span>$100</span>
              <span>$500+</span>
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={() =>
                setFilterState({
                  category: 'footwear',
                  subCategory: 'all',
                  color: 'all',
                  size: 'all',
                  minPrice: 0,
                  maxPrice: 600,
                  sortBy: 'recommended',
                  searchQuery: '',
                })
              }
              className="text-xs uppercase tracking-wider text-[#69635e] hover:text-[#191715] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* Footwear Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#f7f3f2] rounded-xs border border-[#cfc4bd]/40">
          <p className="text-lg font-serif text-[#191715] mb-2">No footwear matching current filters</p>
          <p className="text-sm text-[#69635e] mb-6">Try selecting "All Footwear" or resetting your size selection.</p>
          <button
            onClick={() => setFilterState((prev) => ({ ...prev, subCategory: 'all', size: 'all', maxPrice: 600 }))}
            className="px-6 py-2.5 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
          >
            Show All Footwear
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map((product) => {
            const isSaved = isWishlisted(product.id);
            return (
              <div key={product.id} className="group relative flex flex-col">
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="relative w-full aspect-[3/4] bg-[#f7f3f2] mb-4 overflow-hidden rounded-xs cursor-pointer border border-[#cfc4bd]/30"
                >
                  {product.isSale && (
                    <div className="absolute top-3 left-3 z-10 bg-[#ffffff] border border-[#cfc4bd] px-2.5 py-1 shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#191715]">
                        SALE {product.discountPercentage ? `-${product.discountPercentage}%` : ''}
                      </span>
                    </div>
                  )}

                  {product.isNew && (
                    <div className="absolute top-3 left-3 z-10 bg-[#ffffff] border border-[#cfc4bd] px-2.5 py-1 shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#191715]">
                        NEW
                      </span>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-xs transition-all duration-300 ${
                      isSaved
                        ? 'bg-white text-[#ba1a1a] opacity-100 shadow-sm'
                        : 'bg-white/70 text-[#191715] opacity-0 group-hover:opacity-100 hover:bg-white'
                    }`}
                    aria-label="Save to wishlist"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>

                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(product);
                      }}
                      className="w-full bg-[#ffffff] text-[#191715] text-[11px] uppercase tracking-widest font-medium py-3 border border-[#cfc4bd] hover:bg-[#191715] hover:text-white transition-colors shadow-sm cursor-pointer rounded-xs"
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#7e756f] block mb-0.5">
                      {product.subCategory || 'Footwear'}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(product.id)}
                      className="text-[14px] md:text-[15px] font-medium text-[#191715] mb-1 hover:underline cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className={`text-[14px] ${product.isSale ? 'text-[#ba1a1a] font-semibold' : 'text-[#4c4540]'}`}>
                        ${product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-[13px] text-[#7e756f] line-through">${product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
