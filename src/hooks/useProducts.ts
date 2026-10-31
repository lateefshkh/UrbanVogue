import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { fetchProducts } from '../services/productService';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (e: any) {
      console.error('Failed to load products:', e);
      setError(e?.message ?? 'Failed to load products');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { products, isLoading, error, refetch: load };
}