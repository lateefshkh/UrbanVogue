import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ActiveTab, Product, CartItem, WishlistItem } from './types';
import { useProducts } from './hooks/useProducts';
import { addToWishlist as saveWishlistToCloud, removeFromWishlist as removeWishlistFromCloud } from './services/wishlistService';

const getGuestUserId = (): string => {
  let uid = localStorage.getItem('uv_user_id');
  if (!uid) {
    uid = 'guest_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('uv_user_id', uid);
  }
  return uid;
};

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ShopView } from './components/ShopView';
import { ClothingView } from './components/ClothingView';
import { FootwearView } from './components/FootwearView';
import { AccessoriesView } from './components/AccessoriesView';
import { SaleView } from './components/SaleView';
import { LookbookView } from './components/LookbookView';
import { ProductDetailView } from './components/ProductDetailView';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { PolicyModal } from './components/PolicyModal';
import { NotificationToast } from './components/NotificationToast';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const { products, isLoading, error } = useProducts();

  // ---- Navigation ----
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // ---- Cart & Wishlist ----
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // ---- Drawers / Modals ----
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState<string | null>(null);

  // ---- Toast ----
  const [toast, setToast] = useState<{
    message: string | null;
    type: 'bag' | 'wishlist' | 'info';
    onAction?: () => void;
    actionText?: string;
  }>({ message: null, type: 'bag' });

  // ---- Persistence: Cart & Wishlist in localStorage ----
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('uv_cart');
      const savedWish = localStorage.getItem('uv_wishlist');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWish) setWishlist(JSON.parse(savedWish));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('uv_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('uv_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // ---- Toast helper ----
  const showToast = useCallback(
    (
      message: string,
      type: 'bag' | 'wishlist' | 'info' = 'bag',
      onAction?: () => void,
      actionText?: string
    ) => {
      setToast({ message, type, onAction, actionText });
      window.setTimeout(() => {
        setToast((t) => (t.message === message ? { ...t, message: null } : t));
      }, 4500);
    },
    []
  );

  // ---- Wishlist helpers ----
  const isWishlisted = useCallback(
    (productId: string) => wishlist.some((w) => w.productId === productId),
    [wishlist]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      const userId = getGuestUserId();
      setWishlist((prev) => {
        const exists = prev.some((w) => w.productId === product.id);
        if (exists) {
          showToast(`Removed ${product.name} from wishlist`, 'wishlist');
          removeWishlistFromCloud(product.id, userId);
          return prev.filter((w) => w.productId !== product.id);
        }
        showToast(`Saved ${product.name} to wishlist`, 'wishlist');
        saveWishlistToCloud(product.id, userId);
        return [...prev, { productId: product.id, addedAt: new Date().toISOString() }];
      });
    },
    [showToast]
  );

  const removeFromWishlist = useCallback((productId: string) => {
    const userId = getGuestUserId();
    removeWishlistFromCloud(productId, userId);
    setWishlist((prev) => prev.filter((w) => w.productId !== productId));
  }, []);

  // ---- Cart helpers ----
  const addToCart = useCallback(
    (product: Product, size?: string, color?: string) => {
      const chosenSize = size ?? product.sizes[0] ?? 'One Size';
      const chosenColor = color ?? product.colors[0]?.name ?? 'Default';
      const lineId = `${product.id}-${chosenSize}-${chosenColor}`;

      setCart((prev) => {
        const existing = prev.find((item) => item.id === lineId);
        if (existing) {
          return prev.map((item) =>
            item.id === lineId ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [
          ...prev,
          {
            id: lineId,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.mainImage,
            size: chosenSize,
            color: chosenColor,
            quantity: 1,
          },
        ];
      });

      showToast(`${product.name} added to bag`, 'bag', () => setIsCartOpen(true), 'View Bag');
    },
    [showToast]
  );

  const quickAdd = useCallback((product: Product) => addToCart(product), [addToCart]);

  const updateCartQuantity = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // ---- Product navigation ----
  const openProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setActiveTab('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToTab = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ---- Derived product lists ----
  const featuredProducts = useMemo(() => products.slice(0, 16), [products]);
  const selectedProduct = useMemo(
    () => products.find((p) => p.id === selectedProductId) ?? null,
    [products, selectedProductId]
  );

  const handleCheckoutComplete = useCallback(() => {
    setCart([]);
    setIsCheckoutOpen(false);
    showToast('Order placed successfully. Thank you!', 'info');
  }, [showToast]);

  // ---- Loading / error gate ----
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf8f7]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#191715] border-t-transparent rounded-full animate-spin mx-auto mb-5" />
          <p className="text-sm uppercase tracking-[0.2em] text-[#69635e]">
            Loading Collection
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf8f7] p-6">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-5xl text-[#ba1a1a] mb-4">
            error
          </span>
          <h2 className="text-2xl font-serif text-[#191715] mb-2">
            Unable to load collection
          </h2>
          <p className="text-sm text-[#69635e] mb-6">{error}</p>
          <p className="text-xs text-[#69635e] mb-6">
            Check your Appwrite environment variables and collection permissions.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#191715] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f7] text-[#1c1b1b] flex flex-col">
      <Header
        activeTab={activeTab}
        setActiveTab={goToTab}
        cart={cart}
        wishlist={wishlist}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      <main className="flex-1 pt-16 md:pt-20">
        {activeTab === 'home' && (
          <HomeView
            featuredProducts={featuredProducts}
            onSelectProduct={openProduct}
            setActiveTab={goToTab}
            onFilterByCategory={() => goToTab('shop')}
            onQuickAdd={quickAdd}
          />
        )}

        {activeTab === 'shop' && (
          <ShopView
            products={products}
            onSelectProduct={openProduct}
            onQuickAdd={quickAdd}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
          />
        )}

        {activeTab === 'clothing' && (
          <ClothingView
            products={products}
            onSelectProduct={openProduct}
            onQuickAdd={quickAdd}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
          />
        )}

        {activeTab === 'footwear' && (
          <FootwearView
            products={products}
            onSelectProduct={openProduct}
            onQuickAdd={quickAdd}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
          />
        )}

        {activeTab === 'accessories' && (
          <AccessoriesView
            products={products}
            onSelectProduct={openProduct}
            onQuickAdd={quickAdd}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
          />
        )}

        {activeTab === 'sale' && (
          <SaleView
            products={products}
            onSelectProduct={openProduct}
            onQuickAdd={quickAdd}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
          />
        )}

        {activeTab === 'lookbook' && (
          <LookbookView
            setActiveTab={goToTab}
            onSelectProduct={openProduct}
            onFilterByCategory={() => goToTab('shop')}
          />
        )}

        {activeTab === 'product' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            allProducts={products}
            onSelectProduct={openProduct}
            setActiveTab={goToTab}
            onAddToCart={addToCart}
            onToggleWishlist={toggleWishlist}
            isWishlisted={isWishlisted}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}
      </main>

      <Footer
        setActiveTab={goToTab}
        onOpenPolicyModal={(title) => setPolicyTitle(title)}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onSelectProduct={openProduct}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        products={products}
        onRemoveWishlist={removeFromWishlist}
        onMoveToCart={(product) => addToCart(product)}
        onSelectProduct={openProduct}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={openProduct}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <PolicyModal
        title={policyTitle}
        onClose={() => setPolicyTitle(null)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onCompleteOrder={handleCheckoutComplete}
      />

      <NotificationToast
        message={toast.message}
        type={toast.type}
        onAction={toast.onAction}
        actionText={toast.actionText}
        onClose={() => setToast({ ...toast, message: null })}
      />
    </div>
  );
}