# SKOVA STORE
Arabic-first storefront using React, Vite, and the existing Supabase store database.

## Local setup
Copy .env.example to .env, set VITE_SUPABASE_ANON_KEY to the project's publishable/anon key, then run npm install and npm run build. Never expose a service-role key in browser code.

## Data
Reads active categories from public.store_categories and active/in-stock products from public.store_products. Checkout calls public.submit_store_order. The current database function does not calculate delivery fees; the interface tells customers that delivery is confirmed separately. No products, prices, contact numbers, or delivery promises are fabricated.

## Brand
Premium purple/black/silver direction. The official supplied SKOVA logo asset must be installed unchanged when its source image is available. The temporary typographic SK monogram is not the official logo.

## Railway
Build: npm run build | Output: dist