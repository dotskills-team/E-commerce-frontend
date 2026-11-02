"use client";

import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { type Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const wished = isWishlisted(product.slug);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <>
      {/* Size selector */}
      <div className="mt-6">
        <p className="mb-2 text-sm font-medium">
          Size {size && <span className="text-gray-500">· {size}</span>}
        </p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={cn(
                "h-10 w-10 rounded-md border text-sm font-medium transition-colors duration-200",
                size === s
                  ? "border-brand bg-brand text-white"
                  : "hover:border-brand hover:bg-brand hover:text-white"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => {
            addToCart(product.slug);
            setAdded(true);
          }}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.99]",
            added ? "bg-green-600" : "bg-brand hover:bg-accent"
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={wished}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-md border transition-colors duration-200 hover:border-accent hover:text-accent",
            wished && "border-accent text-accent"
          )}
        >
          <Heart className={cn("h-5 w-5", wished && "fill-current")} />
        </button>
      </div>
    </>
  );
}
