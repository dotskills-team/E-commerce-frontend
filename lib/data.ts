// ---------------------------------------------------------------------------
// DEMO DATA
// Replace `image` paths with your own product photos in /public/images.
// Structure mirrors a typical apparel storefront (same layout as the reference
// site) but all brand names, copy and images here are placeholders you own.
// ---------------------------------------------------------------------------

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;        // selling price
  oldPrice?: number;    // struck-through "was" price
  image: string;
  rating?: number;
  reviews?: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
};

// A tiny inline SVG placeholder so the project runs with zero external images.
// Swap `image` fields for real files like "/images/polo-white.webp".
export function ph(label: string, tone = "#e5e7eb") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750'>
    <rect width='100%' height='100%' fill='${tone}'/>
    <rect x='0' y='0' width='100%' height='100%' fill='url(#g)' opacity='0.5'/>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#f3f4f6'/><stop offset='1' stop-color='#d1d5db'/>
    </linearGradient></defs>
    <text x='50%' y='50%' font-family='sans-serif' font-size='28' fill='#6b7280'
      text-anchor='middle' dominant-baseline='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const categories: Category[] = [
  { id: "c1", name: "Sweatshirt", slug: "sweatshirt", image: "/images/hoodie-grey.jpg" },
  { id: "c2", name: "Striped Cotton T-shirt", slug: "striped-cotton-t-shirt", image: "/images/shirt-striped.jpg" },
  { id: "c3", name: "Solid Cotton T-Shirts", slug: "solid-cotton-t-shirts", image: "/images/tee-white.jpg" },
  { id: "c4", name: "Van Collar Polo", slug: "van-collar-polo", image: "/images/polo-collection.jpg" },
  { id: "c5", name: "Drop Shoulder T-Shirts", slug: "drop-shoulder-t-shirts", image: "/images/tee-oversized.jpg" },
  { id: "c6", name: "Classic PK Polo", slug: "classic-pk-polo", image: "/images/polo-collection.jpg" },
  { id: "c7", name: "Combo Offer", slug: "combo-offer", image: "/images/combo-folded.jpg" },
  { id: "c8", name: "Girls", slug: "girls", image: "/images/girls-dress-floral.jpg" },
];

export const newArrivals: Product[] = [
  { id: "n1", slug: "ash-grey-sweatshirt", name: "Men's Premium Ash Grey Cotton Fleece Sweatshirt", price: 890, oldPrice: 1150, image: "/images/hoodie-grey.jpg", rating: 5, reviews: 12 },
  { id: "n2", slug: "dusty-blue-sweatshirt", name: "Men's Premium Dusty Blue Cotton Fleece Sweatshirt", price: 890, oldPrice: 1150, image: "/images/sweatshirt-pink.jpg", rating: 5, reviews: 12 },
  { id: "n3", slug: "navy-blue-sweatshirt", name: "Men's Premium Navy Blue Fleece Cotton Sweatshirt", price: 890, oldPrice: 1150, image: "/images/hoodie-white.jpg", rating: 5, reviews: 12 },
  { id: "n4", slug: "white-van-collar-polo", name: "Men's White Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
  { id: "n5", slug: "green-van-collar-polo", name: "Men's Green Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
  { id: "n6", slug: "navy-van-collar-polo", name: "Men's Navy Blue Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
  { id: "n7", slug: "brown-drop-shoulder", name: "Men's Premium Brown Drop Shoulder T-Shirt", price: 599, oldPrice: 649, image: "/images/tee-oversized.jpg", rating: 5, reviews: 12 },
  { id: "n8", slug: "maroon-drop-shoulder", name: "Premium Maroon Drop Shoulder T-Shirt for Men", price: 599, oldPrice: 649, image: "/images/tee-oversized.jpg", rating: 5, reviews: 12 },
];

export const bundles: Product[] = [
  { id: "b1", slug: "5pcs-printed-jersey-combo", name: "5 Pcs Printed Jersey T-Shirt Combo for Men", price: 890, oldPrice: 1290, image: "/images/combo-folded.jpg", rating: 5, reviews: 12 },
  { id: "b2", slug: "5pcs-jersey-combo", name: "Men's 5 Pcs Jersey T-Shirt Combo", price: 890, oldPrice: 1290, image: "/images/combo-folded.jpg", rating: 5, reviews: 12 },
  { id: "b3", slug: "3pcs-jersey-combo", name: "3 Pcs Men's Jersey T-Shirt Combo", price: 550, oldPrice: 775, image: "/images/combo-folded.jpg", rating: 5, reviews: 12 },
  { id: "b4", slug: "5pcs-solid-combo", name: "Men's 5 Pcs Solid T-Shirt Combo", price: 990, oldPrice: 1390, image: "/images/combo-folded.jpg", rating: 5, reviews: 12 },
];

export const vanCollarPolos: Product[] = [
  { id: "v1", slug: "white-polo", name: "Men's White Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
  { id: "v2", slug: "green-polo", name: "Men's Green Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
  { id: "v3", slug: "navy-polo", name: "Men's Navy Blue Van Collar Polo T-Shirt", price: 590, oldPrice: 790, image: "/images/polo-collection.jpg", rating: 5, reviews: 12 },
];

export const solidTees: Product[] = [
  { id: "s1", slug: "black-solid", name: "Men's Black Solid T-Shirt", price: 250, oldPrice: 350, image: "/images/tee-black.jpg", rating: 5, reviews: 12 },
  { id: "s2", slug: "white-solid", name: "Men's White Solid T-Shirt", price: 250, oldPrice: 350, image: "/images/tee-white.jpg", rating: 5, reviews: 12 },
  { id: "s3", slug: "maroon-solid", name: "Men's Maroon Solid T-Shirt", price: 250, oldPrice: 350, image: "/images/tee-oversized.jpg", rating: 5, reviews: 12 },
  { id: "s4", slug: "navy-solid", name: "Men's Navy Blue Premium Solid T-Shirt", price: 250, oldPrice: 350, image: "/images/tee-black.jpg", rating: 5, reviews: 12 },
  { id: "s5", slug: "olive-solid", name: "Men's Premium Olive Green Solid T-Shirt", price: 250, oldPrice: 350, image: "/images/tee-white.jpg", rating: 5, reviews: 12 },
];

export const sweatshirts: Product[] = [
  { id: "w1", slug: "ash-grey-sweat", name: "Men's Premium Ash Grey Cotton Fleece Sweatshirt", price: 890, oldPrice: 1150, image: "/images/hoodie-grey.jpg", rating: 5, reviews: 12 },
  { id: "w2", slug: "dusty-blue-sweat", name: "Men's Premium Dusty Blue Cotton Fleece Sweatshirt", price: 890, oldPrice: 1150, image: "/images/sweatshirt-pink.jpg", rating: 5, reviews: 12 },
  { id: "w3", slug: "navy-sweat", name: "Men's Premium Navy Blue Fleece Cotton Sweatshirt", price: 890, oldPrice: 1150, image: "/images/hoodie-white.jpg", rating: 5, reviews: 12 },
];

export const stripedTees: Product[] = [
  { id: "t1", slug: "skyffee-striped", name: "Men's Premium Skyffee Striped Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
  { id: "t2", slug: "olive-cream-striped", name: "Men's Premium Olive Cream Striped Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
  { id: "t3", slug: "sky-green-striped", name: "Men's Premium Sky Green Striped T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
  { id: "t4", slug: "coffee-white-striped", name: "Men's Premium Coffee White Striped Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
  { id: "t5", slug: "coffee-navy-striped", name: "Men's Premium Coffee Navy Striped Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
  { id: "t6", slug: "navy-cream-striped", name: "Men's Premium Navy Cream Striped Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/shirt-striped.jpg", rating: 5, reviews: 12 },
];

export const hoodies: Product[] = [
  { id: "h1", slug: "navy-hoodie", name: "Men's Premium Navy Blue Oversized Cotton Fleece Hoodie", price: 1200, oldPrice: 1500, image: "/images/hoodie-grey.jpg", rating: 5, reviews: 12 },
  { id: "h2", slug: "offwhite-hoodie", name: "Men's Premium Off-White Oversized Cotton Fleece Hoodie", price: 1200, oldPrice: 1500, image: "/images/hoodie-white.jpg", rating: 5, reviews: 12 },
  { id: "h3", slug: "jetblack-hoodie", name: "Men's Premium Jet Black Oversized Cotton Fleece Hoodie", price: 1200, oldPrice: 1500, image: "/images/hoodie-white.jpg", rating: 5, reviews: 12 },
];

export const girlsProducts: Product[] = [
  { id: "g1", slug: "girls-black-crop-tee", name: "Girls Premium Black Crop Cotton T-Shirt", price: 390, oldPrice: 590, image: "/images/girls-tee-black.jpg", rating: 5, reviews: 12 },
  { id: "g2", slug: "girls-red-graphic-tee", name: "Girls Premium Red Graphic Cotton T-Shirt", price: 450, oldPrice: 650, image: "/images/girls-tee-red.jpg", rating: 5, reviews: 12 },
  { id: "g3", slug: "girls-yellow-hoodie-set", name: "Girls Yellow Fleece Crop Hoodie & Jogger Set", price: 1290, oldPrice: 1590, image: "/images/girls-hoodie-set.jpg", rating: 5, reviews: 12 },
  { id: "g4", slug: "girls-floral-wrap-dress", name: "Girls Floral Wrap Midi Dress", price: 890, oldPrice: 1190, image: "/images/girls-dress-floral.jpg", rating: 5, reviews: 12 },
  { id: "g5", slug: "girls-fringe-poncho", name: "Girls Cream Fringe Knit Poncho", price: 690, oldPrice: 890, image: "/images/girls-poncho.jpg", rating: 5, reviews: 12 },
  { id: "g6", slug: "girls-ripped-denim", name: "Girls Premium Ripped Denim Jeans", price: 990, oldPrice: 1290, image: "/images/girls-denim.jpg", rating: 5, reviews: 12 },
  { id: "g7", slug: "girls-chevron-sweater", name: "Girls Orange Chevron Knit Sweater", price: 790, oldPrice: 990, image: "/images/girls-sweater.jpg", rating: 5, reviews: 12 },
  { id: "g8", slug: "girls-long-blue-coat", name: "Girls Long Blue Winter Coat", price: 1490, oldPrice: 1890, image: "/images/girls-coat.jpg", rating: 5, reviews: 12 },
];

// Hero slides (banner carousel)
export const heroSlides = [
  {
    id: "s1",
    eyebrow: "LIMITED TIME OFFER",
    title: "Winter Clearance",
    subtitle: "Buy 1 Get 1",
    text: "Classic Polo 2 pcs ৳490 · Jersey from ৳200 · Half delivery charge",
    cta: "Shop the Sale",
    href: "/collections",
    tone: "#1f2937",
    image: "/images/hero-suit.jpg",
  },
  {
    id: "s2",
    eyebrow: "PREMIUM FASHION",
    title: "Smart Fit",
    subtitle: "Fresh Look",
    text: "Premium T-Shirts & Polos designed for everyday confidence.",
    cta: "Shop Now",
    href: "/collections",
    tone: "#0f172a",
    image: "/images/hero-blazer.jpg",
  },
  {
    id: "s3",
    eyebrow: "PREMIUM COLLECTION",
    title: "Van Collar Polo",
    subtitle: "৳590",
    text: "Premium PK cotton polo designed for smart everyday style.",
    cta: "Shop Polo",
    href: "/collections",
    tone: "#111827",
    image: "/images/hero-navy.jpg",
  },
];
