"use client";

import Link from "next/link";
import { Heart, ShoppingCart, X } from "lucide-react";
import { getProduct } from "@/lib/all-products";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, inCart } = useStore();

  const items = wishlist
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">My Wishlist</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border bg-white py-16 text-center">
          <Heart className="h-10 w-10 text-gray-300" />
          <p className="text-gray-500">Your wishlist is empty.</p>
          <Link
            href="/collections"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((p) => (
            <div
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => removeFromWishlist(p.slug)}
                aria-label="Remove from wishlist"
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow transition-colors hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </button>

              <Link href={`/product/${p.slug}`} className="block aspect-[4/5] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-2.5 sm:p-3">
                <Link
                  href={`/product/${p.slug}`}
                  className="line-clamp-2 min-h-[2.25rem] text-xs font-medium leading-snug text-gray-800 hover:text-accent sm:min-h-[2.5rem] sm:text-sm"
                >
                  {p.name}
                </Link>
                <span className="mt-1.5 text-sm font-bold text-accent">{taka(p.price)}</span>

                <button
                  type="button"
                  onClick={() => addToCart(p.slug)}
                  disabled={inCart(p.slug)}
                  className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-brand py-1.5 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-accent disabled:bg-green-600 sm:py-2 sm:text-xs"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  {inCart(p.slug) ? "In Cart ✓" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
