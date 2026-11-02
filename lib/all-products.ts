import {
  newArrivals,
  bundles,
  vanCollarPolos,
  solidTees,
  sweatshirts,
  stripedTees,
  hoodies,
  girlsProducts,
  type Product,
} from "@/lib/data";

// Merge every product list and de-duplicate by slug — used by product &
// category pages to resolve a slug to a product.
const map = new Map<string, Product>();
for (const list of [
  newArrivals,
  bundles,
  vanCollarPolos,
  solidTees,
  sweatshirts,
  stripedTees,
  hoodies,
  girlsProducts,
]) {
  for (const p of list) map.set(p.slug, p);
}

export const allProducts = Array.from(map.values());

export function getProduct(slug: string) {
  return map.get(slug);
}

// Men's products only (everything except the Girls range).
const mensProducts = allProducts.filter((p) => !girlsProducts.includes(p));

// Category slug -> products shown on that category page. Unknown slugs fall
// back to all men's products so the page never looks empty.
const productsByCategory: Record<string, Product[]> = {
  sweatshirt: sweatshirts,
  "striped-cotton-t-shirt": stripedTees,
  "solid-cotton-t-shirts": solidTees,
  "van-collar-polo": vanCollarPolos,
  "classic-pk-polo": vanCollarPolos,
  "drop-shoulder-t-shirts": newArrivals.filter((p) =>
    p.name.toLowerCase().includes("drop shoulder")
  ),
  "combo-offer": bundles,
  hoodie: hoodies,
  "t-shirts": [...solidTees, ...stripedTees],
  girls: girlsProducts,
};

export function productsForCategory(slug: string): Product[] {
  return productsByCategory[slug] ?? mensProducts;
}
