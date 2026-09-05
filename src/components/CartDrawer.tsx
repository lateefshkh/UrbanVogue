import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onSelectProduct: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onSelectProduct,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const shippingThreshold = 150;
  const freeShipping = subtotal >= shippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, shippingThreshold - subtotal);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VOGUE20') {
      setAppliedDiscount(0.2);
      setPromoMessage('20% Autumn Editorial discount applied!');
    } else if (promoCode.trim().toUpperCase() === 'AUTUMN30') {
      setAppliedDiscount(0.3);
      setPromoMessage('30% Seasonal promotion applied!');
    } else {
      setPromoMessage('Invalid promo code. Try "VOGUE20"');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible delay-300'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div
        className={`relative w-full max-w-md bg-[#fdf8f7] h-full shadow-2xl flex flex-col z-10 border-l border-[#cfc4bd] transform transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#cfc4bd]/40 flex justify-between items-center bg-[#f7f3f2]">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#191715]">Shopping Bag</h2>
            <p className="text-xs text-[#69635e]">
              {cart.reduce((sum, i) => sum + i.quantity, 0)} {cart.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1 text-[#4c4540] hover:text-[#191715] transition-colors focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-3 bg-[#eae1da] border-b border-[#cfc4bd]/40 text-xs text-[#191715]">
          {freeShipping ? (
            <p className="font-medium text-emerald-800">
              ✓ You have qualified for complimentary signature shipping!
            </p>
          ) : (
            <div>
              <p className="mb-1.5">
                Add <span className="font-semibold">${amountNeededForFreeShipping.toFixed(2)}</span> more to qualify for complimentary shipping.
              </p>
              <div className="w-full bg-[#cfc4bd] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#191715] h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-4xl text-[#cfc4bd] mb-3">shopping_bag</span>
              <p className="font-serif text-lg text-[#191715] mb-2">Your bag is currently empty</p>
              <p className="text-xs text-[#69635e] mb-6">Discover tailoring and essentials from our collection.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 luxury-card rounded-xs bg-[#fdf8f7]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    onSelectProduct(item.productId);
                    onClose();
                  }}
                  className="w-20 aspect-[3/4] object-cover rounded-xs cursor-pointer border border-[#cfc4bd]/40"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3
                        onClick={() => {
                          onSelectProduct(item.productId);
                          onClose();
                        }}
                        className="text-sm font-medium text-[#191715] hover:underline cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-xs text-[#7e756f] hover:text-[#ba1a1a] p-0.5"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#69635e] mt-0.5">
                      Size: {item.size} • Color: {item.color}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#cfc4bd] rounded-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-[#4c4540] hover:bg-[#eae1da] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2.5 text-xs font-medium text-[#191715]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-[#4c4540] hover:bg-[#eae1da] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm font-medium text-[#191715]">
                      ${item.price * item.quantity}.00
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#cfc4bd]/60 bg-[#f7f3f2] space-y-4">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="PROMO CODE (e.g. VOGUE20)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white border border-[#cfc4bd] px-3 py-2 text-xs uppercase placeholder:normal-case focus:outline-none focus:border-[#191715] rounded-xs"
              />
              <button
                type="submit"
                className="bg-[#625d5b] text-white px-4 py-2 text-xs uppercase tracking-wider font-medium hover:bg-[#191715] transition-colors rounded-xs cursor-pointer"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p className={`text-xs ${appliedDiscount > 0 ? 'text-emerald-700' : 'text-[#ba1a1a]'}`}>
                {promoMessage}
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#4c4540]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Promotion Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{freeShipping ? 'Complimentary' : '$15.00'}</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-[#191715] pt-2 border-t border-[#cfc4bd]/40">
                <span>Estimated Total</span>
                <span>${(finalTotal + (freeShipping ? 0 : 15)).toFixed(2)}</span>
              </div>
            </div>

            <button
              id="checkout-action-btn"
              onClick={onCheckout}
              className="w-full py-4 bg-[#191715] text-white text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#313030] transition-colors rounded-xs cursor-pointer shadow-sm text-center"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
