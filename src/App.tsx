import { useState, useEffect } from 'react';
import { ActiveTab, CartItem, WishlistItem, Product } from './types';
import { PRODUCTS } from './data/products';
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
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';
import { NotificationToast } from './components/NotificationToast';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [shopCategoryFilter, setShopCategoryFilter] = useState<string>('all');

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  // Toast feedback state
  const [toast, setToast] = useState<{
    message: string;
    type: 'bag' | 'wishlist' | 'info';
    actionText?: string;
    onAction?: () => void;
  } | null>(null);

  // Cart state with local storage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('urban_vogue_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'beige-bomber-jacket-M-Champagne-Ivory',
          productId: 'beige-bomber-jacket',
          name: 'Silk Bias-Cut Slip Dress',
          price: 245,
          size: 'M',
          color: 'Champagne Ivory',
          image: PRODUCTS[0].mainImage,
          quantity: 1,
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state with local storage
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem('urban_vogue_wishlist');
      return saved ? JSON.parse(saved) : [
        { productId: 'knitted-polo-shirt', addedAt: Date.now() },
        { productId: 'leather-chelsea-boots', addedAt: Date.now() }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('urban_vogue_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('urban_vogue_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Handler for opening a specific product
  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct category navigation handler
  const handleTabChange = (tab: ActiveTab) => {
    setSelectedProductId(null);
    if (activeTab === 'home' && (tab === 'clothing' || tab === 'footwear' || tab === 'accessories' || tab === 'lookbook' || tab === 'sale')) {
      const sectionId = `${tab}-section`;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setActiveTab(tab);
    if (tab === 'clothing' || tab === 'footwear' || tab === 'accessories' || tab === 'sale') {
      setShopCategoryFilter(tab);
    } else if (tab === 'shop') {
      setShopCategoryFilter('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterByCategory = (category: string) => {
    setShopCategoryFilter(category);
    setActiveTab('shop');
    setSelectedProductId(null);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product, size: string, color: string) => {
    const itemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          size,
          color,
          image: product.mainImage,
          quantity: 1,
        },
      ];
    });

    setToast({
      message: `Added "${product.name}" (${size}, ${color}) to bag`,
      type: 'bag',
      actionText: 'View Bag',
      onAction: () => {
        setIsCartOpen(true);
        setToast(null);
      },
    });

    setTimeout(() => setToast(null), 4000);
  };

  // Quick add from card (defaults to Medium and first color)
  const handleQuickAdd = (product: Product) => {
    const size = product.sizes[1] || product.sizes[0] || 'M';
    const color = product.colors[0]?.name || 'Standard';
    handleAddToCart(product, size, color);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some((item) => item.productId === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.productId !== product.id));
      setToast({
        message: `Removed "${product.name}" from wishlist`,
        type: 'wishlist',
      });
    } else {
      setWishlist((prev) => [...prev, { productId: product.id, addedAt: Date.now() }]);
      setToast({
        message: `Saved "${product.name}" to wishlist`,
        type: 'wishlist',
        actionText: 'View Saved',
        onAction: () => {
          setIsWishlistOpen(true);
          setToast(null);
        },
      });
    }
    setTimeout(() => setToast(null), 3500);
  };

  const isProductWishlisted = (productId: string) => {
    return wishlist.some((item) => item.productId === productId);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleCompleteOrder = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setActiveTab('home');
    setSelectedProductId(null);
  };

  const currentProduct = selectedProductId
    ? PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0]
    : null;

  return (
    <div className="min-h-screen bg-[#fdf8f7] text-[#1c1b1b] flex flex-col font-sans selection:bg-[#eae1da] selection:text-[#69635e]">
      {/* Universal Sticky / Adaptive Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        cart={cart}
        wishlist={wishlist}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* Main View Router */}
      <div className={`flex-1 w-full ${activeTab === 'home' && !selectedProductId ? '' : 'pt-24 md:pt-28'}`}>
        {selectedProductId && currentProduct ? (
          <ProductDetailView
            product={currentProduct}
            allProducts={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            setActiveTab={handleTabChange}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        ) : activeTab === 'home' ? (
          <HomeView
            onSelectProduct={handleSelectProduct}
            setActiveTab={handleTabChange}
            onFilterByCategory={handleFilterByCategory}
            featuredProducts={PRODUCTS}
            onQuickAdd={handleQuickAdd}
          />
        ) : activeTab === 'lookbook' ? (
          <LookbookView
            setActiveTab={handleTabChange}
            onSelectProduct={handleSelectProduct}
            onFilterByCategory={handleFilterByCategory}
          />
        ) : activeTab === 'clothing' ? (
          <ClothingView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
          />
        ) : activeTab === 'footwear' ? (
          <FootwearView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
          />
        ) : activeTab === 'accessories' ? (
          <AccessoriesView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
          />
        ) : activeTab === 'sale' ? (
          <SaleView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
          />
        ) : (
          <ShopView
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isProductWishlisted}
            initialCategory={shopCategoryFilter}
          />
        )}
      </div>

      {/* Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenPolicyModal={(title) => setActivePolicyModal(title)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onSelectProduct={handleSelectProduct}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        products={PRODUCTS}
        onRemoveWishlist={handleRemoveWishlist}
        onMoveToCart={handleQuickAdd}
        onSelectProduct={handleSelectProduct}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Checkout Flow Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* Policy & Concierge Information Modal */}
      <PolicyModal
        title={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />

      {/* Notification Toast Feedback */}
      <NotificationToast
        message={toast?.message || null}
        type={toast?.type}
        actionText={toast?.actionText}
        onAction={toast?.onAction}
        onClose={() => setToast(null)}
      />
    </div>
  );
};
