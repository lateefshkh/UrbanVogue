import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../.env') });

import { Client, Databases, ID } from 'appwrite';
import { PRODUCTS } from '../src/data/products';

const ENDPOINT   = process.env.VITE_APPWRITE_ENDPOINT!;
const PROJECT_ID = process.env.VITE_APPWRITE_PROJECT_ID!;
const DB_ID      = process.env.VITE_APPWRITE_DATABASE_ID!;

if (!ENDPOINT || !PROJECT_ID || !DB_ID) {
  console.error('❌  Missing env vars.');
  process.exit(1);
}

const client    = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const databases = new Databases(client);

// Use the actual Appwrite collection $id (not the display name)
const PRODUCTS_COLLECTION = '6ae59ee800189530bea4';

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

async function seed(): Promise<void> {
  console.log(`\n🔗  Appwrite : ${ENDPOINT}`);
  console.log(`📦  Project  : ${PROJECT_ID}`);
  console.log(`🗃️   Database : ${DB_ID}`);
  console.log(`📂  Collection: ${PRODUCTS_COLLECTION}`);
  console.log(`\n🌱 Seeding ${PRODUCTS.length} products...\n`);

  let ok = 0, fail = 0;

  for (const p of PRODUCTS) {
    // Destructure out fields that are NOT in the Appwrite schema:
    // - originalPrice (not an attribute in the collection)
    // - lookbookTag   (not an attribute in the collection)
    // - id            (we let Appwrite generate the $id)
    const {
      id,
      originalPrice,  // eslint-disable-line @typescript-eslint/no-unused-vars
      lookbookTag,    // eslint-disable-line @typescript-eslint/no-unused-vars
      colors,
      sizes,
      gallery,
      details,
      shipping,
      price,
      ...rest
    } = p;

    const doc: Record<string, unknown> = {
      ...rest,
      price:    Math.round(price),            // schema is integer
      colors:   JSON.stringify(colors   ?? []),
      sizes:    JSON.stringify(sizes    ?? []),
      gallery:  JSON.stringify(gallery  ?? []),
      details:  JSON.stringify(details  ?? []),
      shipping: JSON.stringify(shipping ?? []),
    };

    // Strip any remaining undefined / null fields
    for (const k of Object.keys(doc)) {
      if (doc[k] === undefined || doc[k] === null) delete doc[k];
    }

    try {
      await databases.createDocument(DB_ID, PRODUCTS_COLLECTION, ID.unique(), doc);
      console.log(`  ✅  ${p.name}`);
      ok++;
    } catch (e: any) {
      console.error(`  ❌  ${p.name}  →  ${e.message}`);
      fail++;
    }

    await sleep(150);
  }

  console.log(`\n🎉  Done.  Success: ${ok}  |  Failed: ${fail}`);
  if (fail > 0) {
    console.log('\n⚠️  Tips:');
    console.log('   • Make sure collection permissions are set to Role: Any → Read + Create');
    console.log('   • Verify the collection $id matches what is in the Appwrite console');
  }
}

seed().catch((e) => {
  console.error('\n💥  Fatal:', e.message);
  process.exit(1);
});
