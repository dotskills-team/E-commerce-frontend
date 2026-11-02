"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  Phone,
  ChevronDown,
  X,
} from "lucide-react";
import { categories } from "@/lib/data";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";

const mainNav = [
  { name: "MEN'S FASHION", href: "/category/mens-fashion" },
  { name: "Sweatshirt", href: "/category/sweatshirt" },
  { name: "Striped Cotton T-shirt", href: "/category/striped-cotton-t-shirt" },
  { name: "Combo Offer", href: "/category/combo-offer" },
  { name: "HOODIE", href: "/category/hoodie" },
  { name: "GIRLS", href: "/category/girls" },
  { name: "T-SHIRTS", href: "/category/t-shirts" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { wishlist, cartCount, cartTotal } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Promo bar */}
      <div className="bg-brand text-white text-[11px] sm:text-xs">
        <div className="container flex h-9 items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="hidden sm:inline">⚡ Cash on Delivery all over Bangladesh</span>
            <span className="sm:hidden">⚡ Cash on Delivery</span>
            <span className="hidden md:inline opacity-50">|</span>
            <Link href="/orders" className="hidden md:inline hover:underline">
              Track Your Order
            </Link>
            <span className="hidden md:inline opacity-50">|</span>
            <Link href="/wholesale" className="hidden md:inline hover:underline">
              Wholesale
            </Link>
            <span className="hidden md:inline opacity-50">|</span>
            <Link href="/dropship" className="hidden md:inline hover:underline">
              Dropshipping
            </Link>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Link
              href="https://wa.me/8801800000000"
              className="hover:underline hidden xs:inline"
            >
              WhatsApp
            </Link>
            <span className="opacity-50 hidden xs:inline">|</span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> +880 1800-000000
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b">
        <div className="container flex h-16 items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo — replace with your own */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-2xl font-extrabold tracking-tight">
              Your<span className="text-accent">Brand</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto">
            <div className="flex w-full items-center rounded-full border bg-gray-50 px-4 focus-within:ring-2 focus-within:ring-brand/10">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-transparent px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="ml-auto flex items-center gap-4 sm:gap-5">
            <Link href="/wishlist" className="relative flex flex-col items-center text-[11px]">
              <span className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] text-white">
                    {wishlist.length}
                  </span>
                )}
              </span>
              <span className="hidden lg:block">Wishlist</span>
            </Link>
            <Link href="/cart" className="relative flex flex-col items-center text-[11px]">
              <span className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] text-white">
                  {cartCount}
                </span>
              </span>
              <span className="hidden lg:block">{taka(cartTotal)}</span>
            </Link>
            <Link href="/login" className="flex flex-col items-center text-[11px]">
              <User className="h-5 w-5" />
              <span className="hidden lg:block">Sign In</span>
            </Link>
          </div>
        </div>

        {/* Nav row */}
        <nav className="hidden lg:block border-t">
          <div className="container flex h-11 items-center gap-6 text-sm font-medium">
            <button className="flex items-center gap-1.5 rounded-md bg-brand px-4 py-1.5 text-white">
              <Menu className="h-4 w-4" /> All Categories
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-gray-700 hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile search */}
      <div className="md:hidden border-b px-4 py-2">
        <div className="flex w-full items-center rounded-full border bg-gray-50 px-4">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 bg-white p-5 shadow-xl animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold">
                Your<span className="text-accent">Brand</span>
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-1">
              <p className="px-2 text-xs font-semibold uppercase text-gray-400">
                Categories
              </p>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm hover:bg-gray-100"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
