import { databases, DB_ID, PRODUCTS_COLLECTION, Query } from '../lib/appwrite';
import { Product, ColorOption } from '../types';
import { PRODUCTS as FALLBACK_PRODUCTS } from '../data/products';

const safeParse = <T,>(value: unknown, fallback: T): T => {
  if (!value) return fallback;
  if (typeof value !== 'string') return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export const mapDocToProduct = (doc: Record<string, any>): Product => {
  const fallback = FALLBACK_PRODUCTS.find(
    (p) => p.name.trim().toLowerCase() === (doc.name ?? '').trim().toLowerCase()
  );

  return {
    // Preserve friendly slug id if matched, otherwise Appwrite $id
    id:                 fallback?.id || doc.$id,
    name:               doc.name               ?? fallback?.name ?? 'Untitled',
    price:              doc.price              ?? fallback?.price ?? 0,
    originalPrice:      doc.originalPrice      ?? fallback?.originalPrice ?? undefined,
    rating:             doc.rating             ?? fallback?.rating ?? 4.8,
    reviewCount:        doc.reviewCount        ?? fallback?.reviewCount ?? 12,
    category:           doc.category           ?? fallback?.category ?? 'clothing',
    subCategory:        doc.subCategory        ?? fallback?.subCategory ?? '',
    description:        doc.description        ?? fallback?.description ?? '',
    mainImage:          doc.mainImage          ?? fallback?.mainImage ?? '',
    isNew:              Boolean(doc.isNew ?? fallback?.isNew),
    isSale:             Boolean(doc.isSale ?? fallback?.isSale),
    discountPercentage: doc.discountPercentage ?? fallback?.discountPercentage ?? undefined,
    colors:             safeParse<ColorOption[]>(doc.colors, fallback?.colors ?? []),
    sizes:              safeParse<string[]>(doc.sizes, fallback?.sizes ?? []),
    gallery:            safeParse<string[]>(doc.gallery, fallback?.gallery ?? []),
    details:            safeParse<string[]>(doc.details, fallback?.details ?? []),
    shipping:           safeParse<string[]>(doc.shipping, fallback?.shipping ?? []),
    lookbookTag:        doc.lookbookTag        ?? fallback?.lookbookTag ?? undefined,
  };
};

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await databases.listDocuments(DB_ID, PRODUCTS_COLLECTION, [
      Query.limit(200),
      Query.orderDesc('$createdAt'),
    ]);
    if (res.documents && res.documents.length > 0) {
      return res.documents.map((d) => mapDocToProduct(d as any));
    }
  } catch (err: any) {
    console.warn('[Appwrite] Could not fetch products, using offline catalog fallback:', err?.message || err);
  }
  return FALLBACK_PRODUCTS;
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const doc = await databases.getDocument(DB_ID, PRODUCTS_COLLECTION, id);
    return mapDocToProduct(doc as any);
  } catch {
    const match = FALLBACK_PRODUCTS.find((p) => p.id === id);
    return match ?? null;
  }
}
