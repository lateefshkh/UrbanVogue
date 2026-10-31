import { Client, Databases, Storage, Account, ID, Query } from 'appwrite';

const endpoint  = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://nyc.cloud.appwrite.io/v1';
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID || '69bb4bbf00308595371a';

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

export const databases = new Databases(client);
export const storage   = new Storage(client);
export const account   = new Account(client);

export const DB_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || '69bb4bce0021808aaf50';

// ── Actual Appwrite collection $ids ────────────────────────────────────────
export const PRODUCTS_COLLECTION  = '6ae59ee800189530bea4';
export const ORDERS_COLLECTION    = '6ae5a08a003c549f3866';
export const WISHLIST_COLLECTION  = '6ae5a20900091cb74867';

export { ID, Query, client };
