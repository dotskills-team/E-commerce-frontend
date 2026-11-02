import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { productsForCategory } from "@/lib/all-products";
import { categories } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);
  const title = category?.name ?? params.slug.replace(/-/g, " ");
  const products = productsForCategory(params.slug);

  return (
    <div className="container py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="capitalize text-gray-800">{title}</span>
      </nav>

      <div className="mb-6 flex items-end justify-between">
        <h1 className="text-2xl font-bold capitalize sm:text-3xl">{title}</h1>
        <p className="text-sm text-gray-500">{products.length} products</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-gray-500">No products here yet.</p>
      )}
    </div>
  );
}
