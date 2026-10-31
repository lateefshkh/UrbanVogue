import React, { useState } from 'react';
import { CartItem } from '../types';
import { createOrder } from '../services/orderService';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onCompleteOrder: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onCompleteOrder,
}) => {
  const [stage, setStage] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  const [formData, setFormData] = useState({
    firstName: 'Marcus',
    lastName: 'Vance',
    email: 'marcus.vance@example.com',
    address: '450 Mayfair Boulevard',
    city: 'London',
    postalCode: 'W1J 8AJ',
    cardNumber: '4242 4242 4242 4242',
    expDate: '11/28',
    cvv: '123',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOrderError(null);

    if (stage === 'shipping') {
      setStage('payment');
      return;
    }

    if (stage === 'payment') {
      setIsSubmitting(true);
      try {
        const created = await createOrder({
          items: cart,
          subtotal,
          total,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        });

        setOrderNumber(created.id);
        setStage('confirmed');
        setTimeout(() => onCompleteOrder(), 3500);
      } catch (err: any) {
        console.error('Order failed:', err);
        setOrderError(err?.message ?? 'Order failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible delay-200'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-350 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={stage !== 'confirmed' ? onClose : undefined}
      />

      <div
        className={`relative w-full max-w-lg bg-[#fdf8f7] border border-[#cfc4bd] p-8 rounded-xs shadow-2xl z-10 transform transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-3 opacity-0'
        }`}
      >
        <div className="flex justify-between items-center mb-6 border-b border-[#cfc4bd]/40 pb-4">
          <h3 className="text-2xl font-serif text-[#191715]">
            {stage === 'confirmed' ? 'Order Confirmed' : 'Express Checkout'}
          </h3>
          {stage !== 'confirmed' && (
            <button
              onClick={onClose}
              className="p-1 text-[#4c4540] hover:text-[#191715] cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>

        {stage === 'confirmed' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#eae1da] text-[#191715] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#cfc4bd]">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="text-xl font-serif text-[#191715] mb-2">Thank you for your order</h4>
            <p className="text-xs text-[#69635e] mb-6">
              Confirmation #{orderNumber.slice(0, 8).toUpperCase()} has been dispatched to{' '}
              {formData.email}.
            </p>
            <div className="p-4 bg-[#f7f3f2] rounded-xs border border-[#cfc4bd]/40 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between text-[#191715] font-medium">
                <span>Total Paid</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-[#69635e]">
                Estimated delivery: 2-3 Business Days via Priority Courier.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
            >
              Return to Lookbook
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {orderError && (
              <div className="p-3 bg-[#fbe9e9] border border-[#ba1a1a]/40 text-[#ba1a1a] text-xs rounded-xs">
                {orderError}
              </div>
            )}

            {stage === 'shipping' ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#4c4540] mb-1 font-medium">
                    Email for Order Tracking
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#4c4540] mb-1 font-medium">Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#cfc4bd]/40 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] text-[#69635e]">Order Summary</p>
                    <p className="text-base font-serif font-bold text-[#191715]">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#313030] cursor-pointer"
                  >
                    Continue to Payment →
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 bg-[#eae1da] rounded-xs border border-[#cfc4bd]/60 mb-2">
                  <p className="text-[11px] font-semibold text-[#191715]">Delivering to:</p>
                  <p className="text-xs text-[#4c4540]">
                    {formData.firstName} {formData.lastName}, {formData.address}, {formData.city}
                  </p>
                </div>

                <div>
                  <label className="block text-[#4c4540] mb-1 font-medium">Card Number</label>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">Expires</label>
                    <input
                      type="text"
                      required
                      value={formData.expDate}
                      onChange={(e) => setFormData({ ...formData, expDate: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4c4540] mb-1 font-medium">
                      Security Code (CVV)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full bg-white border border-[#cfc4bd] p-2.5 rounded-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#cfc4bd]/40 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStage('shipping')}
                    disabled={isSubmitting}
                    className="text-xs text-[#69635e] hover:text-[#191715] underline cursor-pointer disabled:opacity-50"
                  >
                    ← Edit Address
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#313030] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing…
                      </>
                    ) : (
                      <>Authorize Payment (${total.toFixed(2)})</>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};