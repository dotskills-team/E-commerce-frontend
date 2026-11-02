import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";

export function SectionRow({
  eyebrow,
  title,
  href,
  products,
  cols = 4,
}: {
  eyebrow?: string;
  title: string;
  href: string;
  products: Product[];
  cols?: 3 | 4;
}) {
  const grid =
    cols === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  return (
    <section className="container py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        </div>
        <Link
          href={href}
          className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          View Full Collection <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className={`grid gap-3 sm:gap-4 ${grid}`}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
