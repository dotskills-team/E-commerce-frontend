import { Hero } from "@/components/hero";
import { CategoryRail } from "@/components/category-rail";
import { FeaturedCollections } from "@/components/featured-collections";
import { SectionRow } from "@/components/section-row";
import {
  newArrivals,
  bundles,
  vanCollarPolos,
  solidTees,
  sweatshirts,
  stripedTees,
  hoodies,
  girlsProducts,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryRail />
      <FeaturedCollections />

      <SectionRow
        eyebrow="Explore our latest arrivals"
        title="New Arrival"
        href="/collections"
        products={newArrivals}
      />
      <SectionRow
        eyebrow="More Style. More Value. One Bundle."
        title="Bundle Offer"
        href="/category/combo-offer"
        products={bundles}
      />
      <SectionRow
        eyebrow="Smart Collar. Premium Comfort."
        title="Van Collar Polo"
        href="/category/van-collar-polo"
        products={vanCollarPolos}
        cols={3}
      />
      <SectionRow
        eyebrow="Clean Look. Soft Cotton."
        title="Solid Cotton T-Shirts"
        href="/category/solid-cotton-t-shirts"
        products={solidTees}
      />
      <SectionRow
        eyebrow="Soft Fleece. Made for Cooler Days."
        title="Sweatshirt"
        href="/category/sweatshirt"
        products={sweatshirts}
        cols={3}
      />
      <SectionRow
        eyebrow="Bold Stripes. Soft Cotton."
        title="Striped Cotton T-Shirt"
        href="/category/striped-cotton-t-shirt"
        products={stripedTees}
      />
      <SectionRow
        eyebrow="Oversized Cotton Fleece"
        title="Men's Premium Hoodie"
        href="/category/hoodie"
        products={hoodies}
        cols={3}
      />
      <SectionRow
        eyebrow="Soft Style. Everyday Comfort."
        title="Girls Collection"
        href="/category/girls"
        products={girlsProducts}
      />
    </>
  );
}
