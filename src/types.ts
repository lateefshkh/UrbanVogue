export interface ColorOption {
  name: string;
  hex: string;
  bgClass?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  isSale?: boolean;
  isNew?: boolean;
  discountPercentage?: number;
  category: 'clothing' | 'footwear' | 'accessories' | 'outerwear' | 'knitwear' | 'shirting';
  subCategory?: string;
  rating: number;
  reviewCount: number;
  colors: ColorOption[];
  sizes: string[];
  mainImage: string;
  gallery: string[];
  description: string;
  details: string[];
  shipping: string[];
  lookbookTag?: string;
}

export interface CartItem {
  id: string; // unique item id based on product + size + color
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export type ActiveTab = 'home' | 'shop' | 'clothing' | 'footwear' | 'accessories' | 'lookbook' | 'sale';

export interface FilterState {
  category: string;
  subCategory: string;
  color: string;
  size: string;
  minPrice: number;
  maxPrice: number;
  discountFilter?: string;
  sortBy: 'recommended' | 'price-low' | 'price-high' | 'newest' | 'rating';
  searchQuery: string;
}

