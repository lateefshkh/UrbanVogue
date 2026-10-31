import React, { useState, useEffect } from "react";
import { ActiveTab, CartItem, WishlistItem } from "../types";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Liquid Glass SVG Filters Definition (Cross-browser compatible) */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves={2}
              seed={92}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blur"
              scale={77}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="btn-glass" primitiveUnits="objectBoundingBox">
            <feImage
              href="/glass-btn-map.png"
              x="0"
              y="0"
              width="1"
              height="1"
              result="map"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.02"
              result="blur"
            />
            <feDisplacementMap
              id="disp"
              in="blur"
              in2="map"
              scale={1}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <header
        id="main-app-header"
        className="fixed top-0 left-0 right-0 w-full z-40 transition-colors duration-300"
      >
        <div className="glassContainer w-full h-16 md:h-20 flex items-center text-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-12 w-full flex justify-between items-center">
            {/* Mobile Leading menu icon */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                id="mobile-menu-open-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                className="glassBtn w-10 h-10 p-2 hover:opacity-80 transition-all focus:outline-none cursor-pointer text-white"
                aria-label="Open mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Brand Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => {
                setActiveTab("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-white hover:opacity-90 transition-opacity text-left cursor-pointer"
            >
              Urban Vogue
            </button>

            {/* Desktop Navigation - All white minimalist design */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] uppercase tracking-wider font-medium text-white">
              {[
                { id: "home", label: "Home" },
                { id: "shop", label: "Shop" },
                { id: "clothing", label: "Clothing" },
                { id: "footwear", label: "Footwear" },
                { id: "accessories", label: "Accessories" },
                { id: "lookbook", label: "Lookbook" },
                { id: "sale", label: "Sale" },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}-btn`}
                    onClick={() => setActiveTab(item.id as ActiveTab)}
                    className={`pb-1 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-b border-white text-white font-semibold"
                        : "border-b border-transparent text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Action Glass Icons */}
            <div className="flex items-center gap-3 md:gap-4 text-white">
              <button
                type="button"
                id="header-search-btn"
                onClick={() => setIsSearchOpen(true)}
                className="glassBtn w-10 h-10 p-2 hover:opacity-80 transition-all cursor-pointer relative text-white"
                aria-label="Search collection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              <button
                type="button"
                id="header-wishlist-btn"
                onClick={() => setIsWishlistOpen(true)}
                className="glassBtn w-10 h-10 p-2 hover:opacity-80 transition-all cursor-pointer relative text-white"
                aria-label="View wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                id="header-cart-btn"
                onClick={() => setIsCartOpen(true)}
                className="glassBtn w-10 h-10 p-2 hover:opacity-80 transition-all cursor-pointer relative text-white"
                aria-label="View shopping bag"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible delay-300"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Menu */}
        <div
          className={`relative w-72 max-w-[80vw] bg-[#fdf8f7] text-[#191715] h-full shadow-2xl flex flex-col z-10 border-r border-[#cfc4bd] transform transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-[#cfc4bd]/40 flex justify-between items-center bg-[#f7f3f2]">
            <span className="text-xl font-serif font-bold tracking-tight text-[#191715]">
              Urban Vogue
            </span>
            <button
              type="button"
              id="close-mobile-drawer-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-[#4c4540] hover:text-[#191715] focus:outline-none cursor-pointer"
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-1 text-[15px]">
            {[
              { id: "home", label: "Home", icon: "home" },
              { id: "shop", label: "Shop", icon: "shopping_basket" },
              { id: "clothing", label: "Clothing", icon: "apparel" },
              { id: "footwear", label: "Footwear", icon: "straighten" },
              { id: "accessories", label: "Accessories", icon: "watch" },
              { id: "lookbook", label: "Lookbook", icon: "menu_book" },
              { id: "sale", label: "Sale", icon: "sell" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as ActiveTab);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-[#eae1da] text-[#191715] font-medium"
                    : "text-[#4c4540] hover:bg-[#f1edec]"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
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
    </>
  );
};
