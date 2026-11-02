# YourBrand — Next.js Apparel Storefront (Frontend)

A clean, responsive e-commerce **frontend** built with **Next.js 14 (App Router)**,
**Tailwind CSS**, and **shadcn-style** components. Layout and structure follow a
modern apparel storefront (hero carousel, category rail, featured collections,
and multiple product sections). All brand names, copy, and images are
**placeholders you own** — swap them for your own.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx            # Header + Footer wrapper, fonts, metadata
  page.tsx              # Homepage (all sections)
  globals.css
  product/[slug]/       # Product detail page
  category/[slug]/      # Category listing page
  collections/          # All products page
components/
  header.tsx            # Promo bar + nav + search + mobile drawer
  footer.tsx
  hero.tsx              # Auto-playing banner carousel
  category-rail.tsx
  featured-collections.tsx
  section-row.tsx       # Reusable product-grid section
  product-card.tsx
lib/
  data.ts               # ALL demo data + SVG placeholder generator
  all-products.ts
  utils.ts
public/images/          # Put your real product photos here
```

## How to make it yours

1. **Logo** — in `components/header.tsx` and `components/footer.tsx`, replace the
   `Your<span>Brand</span>` text with your logo (`<img src="/images/logo.png" />`).
2. **Colors** — edit `brand` and `accent` in `tailwind.config.ts`.
3. **Products & images** — edit `lib/data.ts`. Drop real photos into
   `public/images/` and change each `image:` field from `ph("...")` to
   `"/images/your-photo.webp"`.
4. **Phone / WhatsApp / address** — search for `+880 1800-000000` and the address
   string, and replace.

## What this is NOT

This is a **frontend only** — no cart logic, no checkout, no database. To go live
you'll add a backend/CMS (e.g. Medusa, WooCommerce headless, or a custom API) and
a payment gateway (EPS / SSLCommerz / bKash). The UI is ready to wire up.
