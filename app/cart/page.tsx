"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { getProduct } from "@/lib/all-products";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";

export default function CartPage() {
  const { cart, setQty, removeFromCart, cartTotal } = useStore();

  const lines = cart
    .map((l) => ({ line: l, product: getProduct(l.slug) }))
    .filter((x): x is { line: typeof x.line; product: NonNullable<typeof x.product> } => !!x.product);

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Shopping Cart</h1>

      {lines.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border bg-white py-16 text-center">
          <ShoppingBag className="h-10 w-10 text-gray-300" />
          <p className="text-gray-500">Your cart is empty.</p>
          <Link
            href="/collections"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <ul className="space-y-3">
            {lines.map(({ line, product }) => (
              <li
                key={line.slug}
                className="flex gap-3 rounded-xl border bg-white p-3 transition-shadow duration-300 hover:shadow-sm sm:gap-4 sm:p-4"
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100 sm:h-28 sm:w-24"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col">
                  <Link
                    href={`/product/${product.slug}`}
                    className="line-clamp-2 text-sm font-medium text-gray-800 hover:text-accent"
                  >
                    {product.name}
                  </Link>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-bold text-accent">{taka(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">{taka(product.oldPrice)}</span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-md border">
                      <button
                        type="button"
                        onClick={() => setQty(line.slug, line.qty - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-gray-100"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{line.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(line.slug, line.qty + 1)}
                        aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-gray-100"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(line.slug)}
                      className="flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-xl border bg-white p-5 lg:sticky lg:top-24">
            <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>{taka(cartTotal)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="mt-4 flex justify-between border-t pt-4 text-base font-bold">
              <span>Total</span>
              <span className="text-accent">{taka(cartTotal)}</span>
            </div>
            <button
              type="button"
              className="mt-5 w-full rounded-md bg-brand py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent"
            >
              Order Now · Cash on Delivery
            </button>
            <Link href="/collections" className="mt-3 block text-center text-sm text-accent hover:underline">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
