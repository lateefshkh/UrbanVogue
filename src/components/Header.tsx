import React, { useState, useEffect } from 'react';
import { ActiveTab, CartItem, WishlistItem } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cart: CartItem[];
  wishlist: WishlistItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  onOpenProduct?: (productId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  wishlist,
  setIsCartOpen,
  setIsWishlistOpen,
  setIsSearchOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        id="main-app-header"
        className={`sticky top-0 left-0 right-0 w-full z-40 bg-[#fdf8f7] text-[#191715] border-b border-[#cfc4bd]/70 transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm' : 'shadow-none'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 h-20 flex justify-between items-center">
          {/* Mobile Leading menu icon */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              id="mobile-menu-open-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 text-[#191715] hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Open mobile menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>

          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-[#191715] hover:opacity-85 transition-opacity text-left cursor-pointer"
          >
            Urban Vogue
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-wider font-medium">
            <button
              id="nav-home-btn"
              onClick={() => setActiveTab('home')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'home'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Home
            </button>

            <button
              id="nav-shop-btn"
              onClick={() => setActiveTab('shop')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'shop'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Shop
            </button>

            <button
              id="nav-clothing-btn"
              onClick={() => setActiveTab('clothing')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'clothing'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Clothing
            </button>

            <button
              id="nav-footwear-btn"
              onClick={() => setActiveTab('footwear')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'footwear'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Footwear
            </button>

            <button
              id="nav-accessories-btn"
              onClick={() => setActiveTab('accessories')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'accessories'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Accessories
            </button>

            <button
              id="nav-lookbook-btn"
              onClick={() => setActiveTab('lookbook')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'lookbook'
                  ? 'border-b-2 border-[#191715] text-[#191715] font-semibold'
                  : 'text-[#5d5651] hover:text-[#191715] border-b-2 border-transparent'
              }`}
            >
              Lookbook
            </button>

            <button
              id="nav-sale-btn"
              onClick={() => setActiveTab('sale')}
              className={`transition-all pb-1 cursor-pointer ${
                activeTab === 'sale'
                  ? 'border-b-2 border-[#ba1a1a] text-[#ba1a1a] font-semibold'
                  : 'text-[#ba1a1a]/85 hover:text-[#ba1a1a] border-b-2 border-transparent font-medium'
              }`}
            >
              Sale
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-[#191715]">
            <button
              id="header-search-btn"
              onClick={() => setIsSearchOpen(true)}
              className="p-1 text-[#191715] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center relative"
              aria-label="Search collection"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            <button
              id="header-wishlist-btn"
              onClick={() => setIsWishlistOpen(true)}
              className="p-1 text-[#191715] hover:opacity-70 transition-opacity cursor-pointer relative flex items-center justify-center"
              aria-label="View wishlist"
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              id="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="p-1 text-[#191715] hover:opacity-70 transition-opacity cursor-pointer relative flex items-center justify-center"
              aria-label="View shopping bag"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#191715] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-[#fdf8f7]">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="relative w-72 max-w-[80vw] bg-[#fdf8f7] text-[#191715] h-full shadow-2xl flex flex-col z-10 border-r border-[#cfc4bd]">
            <div className="p-6 border-b border-[#cfc4bd]/40 flex justify-between items-center">
              <span className="text-xl font-serif font-bold tracking-tight">Urban Vogue</span>
              <button
                id="close-mobile-drawer-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-[#4c4540] hover:text-[#191715] focus:outline-none"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1 text-[15px]">
              {[
                { id: 'home', label: 'Home', icon: 'home' },
                { id: 'shop', label: 'Shop', icon: 'shopping_basket' },
                { id: 'clothing', label: 'Clothing', icon: 'apparel' },
                { id: 'footwear', label: 'Footwear', icon: 'straighten' },
                { id: 'accessories', label: 'Accessories', icon: 'watch' },
                { id: 'lookbook', label: 'Lookbook', icon: 'menu_book' },
                { id: 'sale', label: 'Sale', icon: 'sell' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as ActiveTab);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#eae1da] text-[#191715] font-medium'
                      : 'text-[#4c4540] hover:bg-[#f1edec]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-[#cfc4bd]/40 text-xs text-[#69635e]">
              <p className="font-serif italic mb-1">AUTUMN / WINTER 2026</p>
              <p>© 2026 Urban Vogue Editorial</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
