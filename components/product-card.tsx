"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Star } from "lucide-react";
import { type Product } from "@/lib/data";
import { cn, taka } from "@/lib/utils";
import { useStore } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.slug);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(t);
  }, [added]);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-gray-100"
      >
        {discount > 0 && (
          <span className="absolute left-2 top-2 z-10 rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-white">
            -{discount}%
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.slug);
          }}
          className={cn(
            "absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow transition-all duration-300 hover:scale-110",
            wished ? "text-accent opacity-100" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          )}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        {product.rating ? (
          <div className="mb-1 flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.round(product.rating!) ? "fill-current" : "text-gray-200"
                )}
              />
            ))}
            <span className="ml-1 text-[11px] text-gray-400">
              ({product.reviews ?? 0})
            </span>
          </div>
        ) : null}

        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-2 min-h-[2.25rem] text-xs font-medium leading-snug text-gray-800 transition-colors hover:text-accent sm:min-h-[2.5rem] sm:text-sm"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-bold text-accent">
            {taka(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {taka(product.oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            addToCart(product.slug);
            setAdded(true);
          }}
          className={cn(
            "mt-2.5 w-full rounded-md py-1.5 text-[11px] font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:mt-3 sm:py-2 sm:text-xs",
            added ? "bg-green-600" : "bg-brand hover:bg-accent"
          )}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
