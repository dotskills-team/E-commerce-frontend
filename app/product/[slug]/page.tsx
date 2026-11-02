import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck } from "lucide-react";
import { getProduct, allProducts } from "@/lib/all-products";
import { taka } from "@/lib/utils";
import { ProductCard } from "@/components/product-card";
import { ProductActions } from "@/components/product-actions";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="overflow-hidden rounded-xl border bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>

          <div className="mt-2 flex items-center gap-2 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="text-sm text-gray-500">
              ({product.reviews ?? 0} reviews)
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-accent">
              {taka(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                {taka(product.oldPrice)}
              </span>
            )}
            {discount > 0 && (
              <span className="rounded bg-accent/10 px-2 py-0.5 text-sm font-semibold text-accent">
                Save {discount}%
              </span>
            )}
          </div>

          <ProductActions product={product} />

          <button className="mt-3 w-full rounded-md border-2 border-accent py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-white">
            Order Now · Cash on Delivery
          </button>

          {/* Trust badges */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> Cash on Delivery all over Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 7-day easy return &amp; exchange
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mt-16">
        <h2 className="mb-6 text-xl font-bold">You may also like</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
