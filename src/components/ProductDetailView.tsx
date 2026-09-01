import React, { useState } from 'react';
import { Product, ActiveTab } from '../types';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (productId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onOpenSizeGuide: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onSelectProduct,
  setActiveTab,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Beige');
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0] || 'M');
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);

  // Sync state if product changes
  React.useEffect(() => {
    setSelectedImage(product.mainImage);
    setSelectedColor(product.colors[0]?.name || 'Default');
    setSelectedSize(product.sizes[1] || product.sizes[0] || 'M');
  }, [product]);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const isSaved = isWishlisted(product.id);

  // Related products - exclude current product
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="w-full max-w-[1440px] mx-auto px-5 md:px-16 pt-10 md:pt-14 pb-20">
      {/* Breadcrumbs */}
      <div className="text-[12px] uppercase tracking-[0.1em] text-[#69635e] mb-8 font-medium">
        <button
          onClick={() => setActiveTab('home')}
          className="hover:text-[#191715] transition-colors cursor-pointer"
        >
          HOME
        </button>{' '}
        /{' '}
        <button
          onClick={() => setActiveTab('shop')}
          className="hover:text-[#191715] transition-colors cursor-pointer"
        >
          SHOP
        </button>{' '}
        /{' '}
        <button
          onClick={() => setActiveTab(product.category as ActiveTab)}
          className="hover:text-[#191715] transition-colors cursor-pointer uppercase"
        >
          {product.category}
        </button>{' '}
        /{' '}
        <span className="text-[#191715] font-semibold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Featured Image */}
          <div className="w-full aspect-[3/4] bg-[#f1edec] rounded-xs overflow-hidden relative border border-[#cfc4bd]/40">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {product.isSale && (
              <span className="absolute top-4 left-4 bg-[#ffffff] border border-[#cfc4bd] text-[#191715] text-[10px] tracking-widest uppercase px-3 py-1 font-semibold shadow-xs">
                SALE
              </span>
            )}
          </div>

          {/* Thumbnail Gallery (Supports multiple views) */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {product.gallery.map((imgUrl, index) => {
              const isSelected = selectedImage === imgUrl;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 sm:w-24 aspect-[3/4] shrink-0 bg-[#f1edec] rounded-xs overflow-hidden border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#191715] ring-1 ring-[#191715] opacity-100'
                      : 'border-transparent opacity-70 hover:opacity-100 hover:border-[#cfc4bd]'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Product Details & Controls */}
        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#191715] mb-2 leading-tight">
              {product.name}
            </h1>
            <div className="text-2xl sm:text-3xl font-serif text-[#191715] mb-4 flex items-baseline gap-3">
              <span>${product.price}.00</span>
              {product.originalPrice && (
                <span className="text-lg text-[#7e756f] line-through font-sans font-normal">
                  ${product.originalPrice}.00
                </span>
              )}
            </div>

            {/* Star Rating & Reviews */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#191715]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[17px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <button
                onClick={() => setReviewsModalOpen(true)}
                className="text-[13px] text-[#4c4540] underline hover:text-[#191715] transition-colors cursor-pointer"
              >
                {product.reviewCount} Reviews
              </button>
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[14px] text-[#191715] font-medium">
                Color:{' '}
                <span className="text-[#4c4540] font-normal ml-1">
                  {selectedColor}
                </span>
              </span>
            </div>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  className={`w-8 h-8 rounded-full border transition-all cursor-pointer relative ${
                    selectedColor === color.name
                      ? 'border-[#191715] ring-2 ring-[#191715] ring-offset-2'
                      : 'border-[#cfc4bd] hover:border-[#191715]'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[14px] text-[#191715] font-medium">Size</span>
              <button
                onClick={onOpenSizeGuide}
                className="text-[11px] uppercase tracking-widest text-[#69635e] underline hover:text-[#191715] transition-colors cursor-pointer"
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-[14px] text-center border transition-all rounded-xs cursor-pointer font-medium ${
                      isSelected
                        ? 'border-[#191715] text-[#191715] bg-[#eae1da]'
                        : 'border-[#cfc4bd] text-[#4c4540] hover:border-[#191715] hover:text-[#191715] bg-transparent'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3.5 mb-10">
            <button
              id="add-to-bag-primary-btn"
              onClick={() => onAddToCart(product, selectedSize, selectedColor)}
              className="w-full py-4 bg-[#191715] text-white text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#313030] transition-colors flex justify-center items-center gap-2 rounded-xs shadow-xs cursor-pointer"
            >
              ADD TO BAG
            </button>
            <button
              id="add-to-wishlist-secondary-btn"
              onClick={() => onToggleWishlist(product)}
              className="w-full py-4 bg-transparent border border-[#7e756f] text-[#191715] text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-[#f1edec] transition-colors flex justify-center items-center gap-2 rounded-xs cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
              {isSaved ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
            </button>
          </div>

          {/* Accordion Sections */}
          <div className="border-t border-[#cfc4bd]/60">
            {/* Description Accordion */}
            <div className="border-b border-[#cfc4bd]/60">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-[14px] font-medium text-[#191715]">Description</span>
                <span className="material-symbols-outlined text-[#69635e] group-hover:text-[#191715] transition-colors text-[20px]">
                  {openAccordion === 'description' ? 'remove' : 'add'}
                </span>
              </button>
              {openAccordion === 'description' && (
                <div className="pb-5 text-[14px] leading-relaxed text-[#4c4540] pr-2">
                  {product.description}
                </div>
              )}
            </div>

            {/* Details & Care Accordion */}
            <div className="border-b border-[#cfc4bd]/60">
              <button
                onClick={() => toggleAccordion('details')}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-[14px] font-medium text-[#191715]">Details &amp; Care</span>
                <span className="material-symbols-outlined text-[#69635e] group-hover:text-[#191715] transition-colors text-[20px]">
                  {openAccordion === 'details' ? 'remove' : 'add'}
                </span>
              </button>
              {openAccordion === 'details' && (
                <div className="pb-5 text-[14px] text-[#4c4540] pr-2">
                  <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns Accordion */}
            <div className="border-b border-[#cfc4bd]/60">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-[14px] font-medium text-[#191715]">Shipping &amp; Returns</span>
                <span className="material-symbols-outlined text-[#69635e] group-hover:text-[#191715] transition-colors text-[20px]">
                  {openAccordion === 'shipping' ? 'remove' : 'add'}
                </span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="pb-5 text-[14px] text-[#4c4540] pr-2">
                  <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                    {product.shipping.map((ship, idx) => (
                      <li key={idx}>{ship}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <section className="mt-24 pt-16 border-t border-[#cfc4bd]/40">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#191715] text-center mb-12 uppercase tracking-wider">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((relProduct) => (
            <div
              key={relProduct.id}
              onClick={() => {
                onSelectProduct(relProduct.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group block cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#f1edec] rounded-xs overflow-hidden mb-3.5 relative border border-[#cfc4bd]/30">
                {relProduct.isSale && (
                  <div className="absolute top-2 left-2 bg-[#191715] text-white text-[9px] uppercase px-2 py-1 tracking-wider z-10">
                    Sale
                  </div>
                )}
                <img
                  src={relProduct.mainImage}
                  alt={relProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[14px] font-medium text-[#191715] mb-1 group-hover:underline truncate">
                {relProduct.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className={`text-[14px] ${relProduct.isSale ? 'text-[#ba1a1a] font-semibold' : 'text-[#4c4540]'}`}>
                  ${relProduct.price}.00
                </p>
                {relProduct.originalPrice && (
                  <span className="text-[12px] text-[#7e756f] line-through">
                    ${relProduct.originalPrice}.00
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Modal */}
      {reviewsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-[#fdf8f7] border border-[#cfc4bd] max-w-lg w-full p-8 rounded-xs shadow-2xl relative">
            <button
              onClick={() => setReviewsModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-[#69635e] hover:text-[#191715]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-2xl font-serif text-[#191715] mb-2">{product.name} Reviews</h3>
            <div className="flex items-center gap-2 mb-6 text-sm text-[#4c4540]">
              <span className="font-semibold text-base">{product.rating} / 5.0</span>
              <span>•</span>
              <span>Based on {product.reviewCount} customer evaluations</span>
            </div>

            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 no-scrollbar">
              <div className="p-4 bg-[#f7f3f2] rounded-xs border border-[#cfc4bd]/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm text-[#191715]">James L.</span>
                  <span className="text-xs text-[#69635e]">Verified Purchase</span>
                </div>
                <div className="flex text-[#191715] mb-2 text-xs">★★★★★</div>
                <p className="text-sm text-[#4c4540]">
                  Exceptional craftsmanship. The fabric drape and two-way zipper feel substantial. Fits true to size with room for light knitwear underneath.
                </p>
              </div>

              <div className="p-4 bg-[#f7f3f2] rounded-xs border border-[#cfc4bd]/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm text-[#191715]">Alexander M.</span>
                  <span className="text-xs text-[#69635e]">Verified Purchase</span>
                </div>
                <div className="flex text-[#191715] mb-2 text-xs">★★★★★</div>
                <p className="text-sm text-[#4c4540]">
                  The color is versatile and pairs with tailored trousers or denim effortlessly. Very pleased with the delivery packaging too.
                </p>
              </div>
            </div>

            <button
              onClick={() => setReviewsModalOpen(false)}
              className="w-full mt-6 py-3 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
