# Appwrite Setup Guide — UrbanVogue

## Your Credentials
| Key | Value |
|-----|-------|
| Endpoint | `https://nyc.cloud.appwrite.io/v1` |
| Project ID | `69bb4bbf00308595371a` |
| Database ID | `69bb4bce0021808aaf50` |

---

## Step 1 — Create the `urbanproducts` Collection

1. Open [Appwrite Console](https://cloud.appwrite.io) → your project → **Databases** → select your database.
2. Click **Create Collection** → set **Collection ID** to exactly `urbanproducts` → name it `Urban Vogue Products`.
3. Go to **Settings** tab of the collection → **Permissions** → Add:
   - **Role: Any** → check ✅ Read, ✅ Create, ✅ Update, ✅ Delete

### Add These Attributes (Attributes tab):

| Key | Type | Size | Required | Default |
|-----|------|------|----------|---------|
| `name` | String | 255 | ✅ | — |
| `price` | Float | — | ✅ | — |
| `originalPrice` | Float | — | — | — |
| `rating` | Float | — | — | `0` |
| `reviewCount` | Integer | — | — | `0` |
| `category` | String | 50 | ✅ | — |
| `subCategory` | String | 100 | — | — |
| `description` | String | 5000 | — | — |
| `mainImage` | String | 2048 | ✅ | — |
| `isNew` | Boolean | — | — | `false` |
| `isSale` | Boolean | — | — | `false` |
| `discountPercentage` | Integer | — | — | — |
| `colors` | String | 5000 | — | — |
| `sizes` | String | 1000 | — | — |
| `gallery` | String | 5000 | — | — |
| `details` | String | 5000 | — | — |
| `shipping` | String | 2000 | — | — |
| `lookbookTag` | String | 100 | — | — |

---

## Step 2 — Create the `urbanoders` Collection

1. Click **Create Collection** → set **Collection ID** to exactly `urbanoders` → name it `Urban Vogue Orders`.
2. **Permissions** → Add **Role: Any** → ✅ Read, ✅ Create, ✅ Update, ✅ Delete.

### Add These Attributes:

| Key | Type | Size | Required | Default |
|-----|------|------|----------|---------|
| `items` | String | 10000 | ✅ | — |
| `subtotal` | Float | — | ✅ | — |
| `total` | Float | — | ✅ | — |
| `status` | String | 20 | — | `pending` |
| `email` | String | 255 | ✅ | — |
| `firstName` | String | 100 | ✅ | — |
| `lastName` | String | 100 | ✅ | — |
| `address` | String | 500 | ✅ | — |
| `city` | String | 100 | ✅ | — |
| `postalCode` | String | 20 | ✅ | — |

---

## Step 3 — Seed Products

After both collections are created with correct attributes, run:

```bash
npm run seed
```

This will populate all 18 female fashion products into Appwrite.

---

## Step 4 — Verify Connection

Run the dev server and confirm products load from Appwrite:

```bash
npm run dev
```

Open `http://localhost:3000` — you should see all products loading from the database.

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Collection with the requested ID could not be found` | Create the collection in Appwrite console with the exact ID |
| `Attribute not found` | Add the missing attribute listed above |
| `Missing scope` / `Unauthorized` | Set permissions to **Role: Any** → Read + Create |
| `Endpoint must be a valid string` | Check your `.env` file has all three vars |

