import { databases, DB_ID, WISHLIST_COLLECTION, ID, Query } from '../lib/appwrite';

export interface WishlistDoc {
  $id: string;
  productId: string;
  userId: string;
}

/** Add a product to the Appwrite wishlist. Returns the document $id if saved to cloud. */
export async function addToWishlist(productId: string, userId: string): Promise<string | null> {
  try {
    const doc = await databases.createDocument(
      DB_ID,
      WISHLIST_COLLECTION,
      ID.unique(),
      { productId, userId }
    );
    return doc.$id;
  } catch (err: any) {
    console.warn('[Appwrite] addToWishlist cloud save skipped (saved locally):', err?.message || err);
    return null;
  }
}

/** Remove a wishlist document by productId and userId. */
export async function removeFromWishlist(productId: string, userId: string): Promise<void> {
  try {
    const res = await databases.listDocuments(DB_ID, WISHLIST_COLLECTION, [
      Query.limit(100),
    ]);
    const matches = res.documents.filter(
      (doc: any) => doc.userId === userId && doc.productId === productId
    );
    for (const doc of matches) {
      await databases.deleteDocument(DB_ID, WISHLIST_COLLECTION, doc.$id);
    }
  } catch (err: any) {
    console.warn('[Appwrite] removeFromWishlist cloud delete skipped:', err?.message || err);
  }
}

/** Fetch all wishlist entries for a given userId. */
export async function fetchWishlist(userId: string): Promise<string[]> {
  try {
    const res = await databases.listDocuments(DB_ID, WISHLIST_COLLECTION, [
      Query.limit(100),
    ]);
    return res.documents
      .filter((doc: any) => doc.userId === userId)
      .map((d: any) => d.productId);
  } catch (err: any) {
    console.warn('[Appwrite] fetchWishlist cloud fetch skipped (using local):', err?.message || err);
    return [];
  }
}
