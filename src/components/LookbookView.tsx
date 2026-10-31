import React from 'react';
import { ActiveTab } from '../types';

interface LookbookViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectProduct: (productId: string) => void;
  onFilterByCategory: (category: string) => void;
}

export const LookbookView: React.FC<LookbookViewProps> = ({
  setActiveTab,
  onSelectProduct,
  onFilterByCategory,
}) => {
  return (
    <div className="w-full">
      {/* Hero Campaign */}
      <section className="relative w-full min-h-[540px] lg:h-[calc(100vh-80px)] max-h-[820px] flex items-center justify-center bg-[#f7f3f2] overflow-hidden">
        {/* Editorial Campaign Background */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full object-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        {/* Soft Contrast Veil */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Center Campaign Title Overlay */}
        <div className="relative z-10 text-center text-white px-5 md:px-16 py-16 max-w-3xl">
          <p className="text-[12px] uppercase tracking-[0.25em] text-[#eae1da] mb-4 font-medium">
            VOGUE COUTURE | LOOKBOOK 2026
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-6 tracking-tight drop-shadow-md leading-[1.1]">
            AUTUMN / WINTER 2026
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-sans max-w-xl mx-auto text-white/90 drop-shadow-sm font-normal">
            Quiet confidence. Refined essentials.
          </p>
        </div>
      </section>

      {/* Asymmetric Lookbook Grid */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Large Portrait Left (Col 7) */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xs border border-[#cfc4bd]/30">
            <img
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80"
              alt="Floor-length velvet evening gown"
              className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-8 left-8">
              <button
                id="lookbook-shop-the-look-btn"
                onClick={() => onSelectProduct('textured-wool-coat')}
                className="inline-flex items-center gap-2 text-white bg-[#191715]/40 backdrop-blur-md border border-white/40 px-6 py-3.5 text-[11px] uppercase tracking-widest font-medium hover:bg-white hover:text-[#191715] transition-colors duration-300 cursor-pointer rounded-xs"
              >
                SHOP THE LOOK
              </button>
            </div>
          </div>

          {/* Text & Small Image Right (Col 5) */}
          <div className="md:col-span-5 flex flex-col justify-between pt-6 md:pt-0 h-full">
            <div className="max-w-sm mb-16 md:mb-0 md:mt-20 ml-auto md:ml-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#69635e] mb-3 font-semibold">The Philosophy</p>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-[#191715] leading-snug">
                The New Standard
              </h2>
              <p className="text-base leading-relaxed text-[#4c4540]">
                Elevating haute couture archetypes through liquid silk drapes, sculptural silhouettes, and uncompromising materials. This season focuses on feminine poise and subtle texture.
              </p>
            </div>

            {/* Knitwear Detail Shot */}
            <div className="group relative overflow-hidden mt-12 md:mt-24 ml-auto w-full md:w-4/5 rounded-xs border border-[#cfc4bd]/30">
              <img
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
                alt="Close up detail shot of knit dress texture"
                className="w-full h-auto object-cover aspect-square transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-6 left-6">
                <button
                  id="explore-knitwear-btn"
                  onClick={() => {
                    onFilterByCategory('clothing');
                    setActiveTab('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#191715] border-b border-[#191715] pb-1 text-[11px] uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity cursor-pointer bg-white/70 px-3 py-1.5 backdrop-blur-xs"
                >
                  EXPLORE DRESSES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Break */}
        <div className="mt-24 mb-24 grid grid-cols-1 border-t border-[#cfc4bd] pt-20">
          <div className="w-full group relative overflow-hidden rounded-xs border border-[#cfc4bd]/30">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
              alt="Haute couture runway exhibition"
              className="w-full h-[380px] sm:h-[460px] md:h-[530px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <div className="bg-[#fdf8f7]/90 backdrop-blur-md px-8 sm:px-14 py-8 sm:py-10 text-center pointer-events-auto border border-[#cfc4bd] shadow-lg max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#69635e] mb-2 font-medium">Capsule II</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-[#191715]">
                  The Couture Exhibition
                </h3>
                <button
                  id="shop-outerwear-editorial-btn"
                  onClick={() => {
                    onFilterByCategory('clothing');
                    setActiveTab('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-block text-[11px] uppercase tracking-widest font-semibold border-b border-[#191715] pb-1 hover:text-[#625d5b] transition-colors cursor-pointer"
                >
                  SHOP COUTURE DRESSES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          {/* Card 1: Shirting */}
          <div className="group relative overflow-hidden md:mt-12 rounded-xs border border-[#cfc4bd]/30">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
              alt="Silk bias-cut slip dress editorial"
              className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <button
              onClick={() => {
                onFilterByCategory('clothing');
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="absolute bottom-6 left-6 text-[11px] uppercase tracking-widest font-semibold text-[#1c1b1b] bg-[#f1edec]/95 px-5 py-3 hover:bg-[#191715] hover:text-white transition-colors cursor-pointer border border-[#cfc4bd]/50 shadow-xs"
            >
              SLIP DRESSES
            </button>
          </div>

          {/* Card 2: Footwear */}
          <div className="group relative overflow-hidden rounded-xs border border-[#cfc4bd]/30">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
              alt="Italian pointed stiletto pumps editorial"
              className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <button
              onClick={() => {
                onFilterByCategory('footwear');
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="absolute bottom-6 left-6 text-[11px] uppercase tracking-widest font-semibold text-[#1c1b1b] bg-[#f1edec]/95 px-5 py-3 hover:bg-[#191715] hover:text-white transition-colors cursor-pointer border border-[#cfc4bd]/50 shadow-xs"
            >
              FOOTWEAR ATELIER
            </button>
          </div>

          {/* Card 3: Casual Essentials */}
          <div className="group relative overflow-hidden md:mt-24 rounded-xs border border-[#cfc4bd]/30">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
              alt="Sculptural cocktail dress haute couture"
              className="w-full h-auto object-cover aspect-square transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <button
              onClick={() => {
                onFilterByCategory('clothing');
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="absolute bottom-6 left-6 text-[11px] uppercase tracking-widest font-semibold text-[#1c1b1b] bg-[#f1edec]/95 px-5 py-3 hover:bg-[#191715] hover:text-white transition-colors cursor-pointer border border-[#cfc4bd]/50 shadow-xs"
            >
              COCKTAIL DRESSES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
