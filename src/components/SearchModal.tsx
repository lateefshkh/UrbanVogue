import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = query.trim() === ''
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible delay-200'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-[#fdf8f7] border border-[#cfc4bd] rounded-xs shadow-2xl overflow-hidden z-10 transform transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 -translate-y-4 opacity-0'
        }`}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#cfc4bd]/50 flex items-center gap-3 bg-[#f7f3f2]">
          <span className="material-symbols-outlined text-[#7e756f]">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tailored blazers, knitwear, coats, chinos..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#191715] placeholder:text-[#97928f] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#7e756f] hover:text-[#191715]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#4c4540] hover:text-[#191715]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {query.trim() === '' && (
          <div className="p-6">
            <p className="text-[11px] uppercase tracking-widest text-[#69635e] font-semibold mb-3">
              Trending Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {['Bomber Jacket', 'Blazer', 'Merino Knitwear', 'Wool Coat', 'Chelsea Boots', 'Poplin Shirt'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3.5 py-1.5 bg-[#f1edec] hover:bg-[#eae1da] text-[#191715] text-xs rounded-xs border border-[#cfc4bd]/40 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim() !== '' && (
          <div className="max-h-[60vh] overflow-y-auto p-6 space-y-4 no-scrollbar">
            {results.length === 0 ? (
              <p className="text-center py-8 text-sm text-[#69635e]">
                No garments matched "{query}".
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product.id);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 hover:bg-[#f1edec] rounded-xs cursor-pointer transition-colors border border-transparent hover:border-[#cfc4bd]/40"
                >
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-14 aspect-[3/4] object-cover rounded-xs"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#191715]">{product.name}</h4>
                    <p className="text-xs text-[#69635e] capitalize">{product.category} • ${product.price}.00</p>
                  </div>
                  <span className="material-symbols-outlined text-[#cfc4bd] text-sm">arrow_forward</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
