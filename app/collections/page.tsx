import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { allProducts } from "@/lib/all-products";

export default function CollectionsPage() {
  return (
    <div className="container py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">All Collections</span>
      </nav>

      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">All Products</h1>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {allProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
