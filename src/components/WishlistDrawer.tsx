import React from 'react';
import { Product, WishlistItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: WishlistItem[];
  products: Product[];
  onRemoveWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
  onSelectProduct: (productId: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  products,
  onRemoveWishlist,
  onMoveToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) =>
    wishlist.some((w) => w.productId === p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div className="relative w-full max-w-md bg-[#fdf8f7] h-full shadow-2xl flex flex-col z-10 border-l border-[#cfc4bd]">
        {/* Header */}
        <div className="p-6 border-b border-[#cfc4bd]/40 flex justify-between items-center bg-[#f7f3f2]">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#191715]">Saved Items</h2>
            <p className="text-xs text-[#69635e]">
              {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'saved piece' : 'saved pieces'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#4c4540] hover:text-[#191715] transition-colors focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-4xl text-[#cfc4bd] mb-3">favorite</span>
              <p className="font-serif text-lg text-[#191715] mb-2">Your wishlist is empty</p>
              <p className="text-xs text-[#69635e] mb-6">Save items you love to review them anytime.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 pb-6 border-b border-[#cfc4bd]/30 last:border-b-0"
              >
                <img
                  src={product.mainImage}
                  alt={product.name}
                  onClick={() => {
                    onSelectProduct(product.id);
                    onClose();
                  }}
                  className="w-20 aspect-[3/4] object-cover rounded-xs cursor-pointer border border-[#cfc4bd]/40"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3
                        onClick={() => {
                          onSelectProduct(product.id);
                          onClose();
                        }}
                        className="text-sm font-medium text-[#191715] hover:underline cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <button
                        onClick={() => onRemoveWishlist(product.id)}
                        className="text-xs text-[#7e756f] hover:text-[#ba1a1a] p-0.5"
                        title="Remove from saved"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#69635e] mt-1">
                      ${product.price}.00 {product.originalPrice ? `(was $${product.originalPrice}.00)` : ''}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onMoveToCart(product);
                      onRemoveWishlist(product.id);
                    }}
                    className="mt-3 w-full py-2 bg-[#eae1da] hover:bg-[#191715] hover:text-white text-[#191715] text-[11px] uppercase tracking-wider font-medium transition-colors rounded-xs border border-[#cfc4bd]"
                  >
                    Move to Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
