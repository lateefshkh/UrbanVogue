import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';

interface ShopViewProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onQuickAdd: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  initialCategory?: string;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted,
  initialCategory = 'all',
}) => {
  const [filterState, setFilterState] = useState<FilterState>({
    category: initialCategory,
    color: 'all',
    size: 'all',
    minPrice: 0,
    maxPrice: 500,
    sortBy: 'recommended',
    searchQuery: '',
  });

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'clothing', label: 'Tailoring & Trousers' },
    { id: 'knitwear', label: 'Knitwear' },
    { id: 'shirting', label: 'Shirting' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'sale', label: 'Sale' },
    { id: 'new', label: 'New Arrivals' }
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (filterState.category === 'sale') return p.isSale;
        if (filterState.category === 'new') return p.isNew;
        if (filterState.category !== 'all' && p.category !== filterState.category) return false;

        // Size filter
        if (filterState.size !== 'all' && !p.sizes.includes(filterState.size)) return false;

        // Price filter
        if (p.price < filterState.minPrice || p.price > filterState.maxPrice) return false;

        // Search query
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
        return 0; // recommended default
      });
  }, [products, filterState]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-16 pt-10 md:pt-14 pb-20">
      {/* Shop Hero Header */}
      <section className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#191715] mb-4 tracking-tight">
          SHOP
        </h1>
        <p className="text-base sm:text-lg font-sans text-[#4c4540] max-w-xl">
          Explore modern essentials, refined tailoring and everyday luxury.
        </p>
      </section>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-[#cfc4bd]/40">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilterState((prev) => ({ ...prev, category: cat.id }))}
            className={`px-4 py-2 text-[12px] uppercase tracking-wider font-medium whitespace-nowrap transition-all rounded-xs cursor-pointer ${
              filterState.category === cat.id
                ? 'bg-[#191715] text-white border border-[#191715]'
                : 'bg-[#f7f3f2] text-[#4c4540] hover:bg-[#eae1da] border border-[#cfc4bd]/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filter and Sorting Bar */}
      <div className="flex justify-between items-center border-b border-[#cfc4bd] pb-4 mb-10 text-[12px] uppercase tracking-widest font-medium">
        <button
          id="shop-filter-toggle-btn"
          onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
          className="flex items-center gap-2 text-[#1c1b1b] hover:text-[#625d5b] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          FILTER {filterState.category !== 'all' || filterState.size !== 'all' ? `(ACTIVE)` : ''}
        </button>

        <div className="flex items-center gap-6 text-[#4c4540]">
          <span className="hidden sm:inline-block text-[#69635e]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'ITEM' : 'ITEMS'}
          </span>

          <div className="flex items-center gap-2 relative">
            <span className="hidden md:inline text-[#69635e]">SORT BY:</span>
            <select
              value={filterState.sortBy}
              onChange={(e) => setFilterState((prev) => ({ ...prev, sortBy: e.target.value as FilterState['sortBy'] }))}
              className="bg-transparent border-0 text-[#191715] font-medium uppercase tracking-widest text-[12px] focus:outline-none cursor-pointer pr-4"
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="newest">NEWEST ARRIVALS</option>
            </select>
          </div>
        </div>
      </div>

      {/* Collapsible Filter Panel */}
      {isFilterDrawerOpen && (
        <div className="bg-[#f7f3f2] border border-[#cfc4bd] p-6 mb-10 rounded-xs transition-all grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest font-semibold text-[#191715] mb-3">
              Size
            </label>
            <div className="flex flex-wrap gap-2">
              {['all', 'S', 'M', 'L', 'XL', '40', '42', '44'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFilterState((prev) => ({ ...prev, size }))}
                  className={`px-3 py-1.5 text-xs rounded-xs border cursor-pointer ${
                    filterState.size === size
                      ? 'bg-[#191715] text-white border-[#191715]'
                      : 'bg-white text-[#4c4540] border-[#cfc4bd] hover:border-[#191715]'
                  }`}
                >
                  {size === 'all' ? 'All Sizes' : size}
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
              min="50"
              max="500"
              step="25"
              value={filterState.maxPrice}
              onChange={(e) => setFilterState((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
              className="w-full accent-[#191715] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#69635e] mt-1">
              <span>$50</span>
              <span>$500+</span>
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={() =>
                setFilterState({
                  category: 'all',
                  color: 'all',
                  size: 'all',
                  minPrice: 0,
                  maxPrice: 500,
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

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#f7f3f2] rounded-xs border border-[#cfc4bd]/40">
          <p className="text-lg font-serif text-[#191715] mb-2">No garments found</p>
          <p className="text-sm text-[#69635e] mb-6">Try clearing or adjusting your filter selections.</p>
          <button
            onClick={() => setFilterState((prev) => ({ ...prev, category: 'all', size: 'all', maxPrice: 500 }))}
            className="px-6 py-2.5 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
          >
            Show All Items
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map((product) => {
            const isSaved = isWishlisted(product.id);
            return (
              <div key={product.id} className="group relative flex flex-col">
                {/* Image Container with Badges and Hover */}
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="relative w-full aspect-[3/4] bg-[#f7f3f2] mb-4 overflow-hidden rounded-xs cursor-pointer border border-[#cfc4bd]/30"
                >
                  {/* Badges */}
                  {product.isSale && (
                    <div className="absolute top-3 left-3 z-10 bg-[#ffffff] border border-[#cfc4bd] px-2.5 py-1 shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#191715]">
                        SALE
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

                  {/* Wishlist Button */}
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

                  {/* Product Image */}
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Add to Bag */}
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

                {/* Product Metadata */}
                <div className="flex justify-between items-start">
                  <div>
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
