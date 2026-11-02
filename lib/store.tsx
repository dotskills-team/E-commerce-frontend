"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/lib/all-products";

// Demo cart + wishlist. Kept in the browser's localStorage so it survives a
// refresh. Swap for real API calls when you connect a backend.

export type CartLine = { slug: string; qty: number };

type StoreState = { cart: CartLine[]; wishlist: string[] };

type StoreContextValue = StoreState & {
  cartCount: number;
  cartTotal: number;
  addToCart: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  inCart: (slug: string) => boolean;
  toggleWishlist: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
};

const STORAGE_KEY = "ehumu-store";
const EMPTY: StoreState = { cart: [], wishlist: [] };

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoreState>(EMPTY);
  const [loaded, setLoaded] = useState(false);

  // Read saved state after mount (avoids server/client HTML mismatch).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoreState>;
        setState({
          cart: Array.isArray(parsed.cart) ? parsed.cart : [],
          wishlist: Array.isArray(parsed.wishlist) ? parsed.wishlist : [],
        });
      }
    } catch {
      // Private mode or corrupt data — start empty.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage unavailable — state still works for this visit.
    }
  }, [state, loaded]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    setState((s) => {
      const existing = s.cart.find((l) => l.slug === slug);
      if (existing) {
        return {
          ...s,
          cart: s.cart.map((l) =>
            l.slug === slug ? { ...l, qty: l.qty + qty } : l
          ),
        };
      }
      return { ...s, cart: [...s.cart, { slug, qty }] };
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setState((s) => ({
      ...s,
      cart:
        qty <= 0
          ? s.cart.filter((l) => l.slug !== slug)
          : s.cart.map((l) => (l.slug === slug ? { ...l, qty } : l)),
    }));
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    setState((s) => ({ ...s, cart: s.cart.filter((l) => l.slug !== slug) }));
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setState((s) => ({
      ...s,
      wishlist: s.wishlist.includes(slug)
        ? s.wishlist.filter((x) => x !== slug)
        : [...s.wishlist, slug],
    }));
  }, []);

  const removeFromWishlist = useCallback((slug: string) => {
    setState((s) => ({ ...s, wishlist: s.wishlist.filter((x) => x !== slug) }));
  }, []);

  const value = useMemo<StoreContextValue>(() => {
    const cartCount = state.cart.reduce((n, l) => n + l.qty, 0);
    const cartTotal = state.cart.reduce(
      (sum, l) => sum + (getProduct(l.slug)?.price ?? 0) * l.qty,
      0
    );
    return {
      ...state,
      cartCount,
      cartTotal,
      addToCart,
      setQty,
      removeFromCart,
      inCart: (slug) => state.cart.some((l) => l.slug === slug),
      toggleWishlist,
      removeFromWishlist,
      isWishlisted: (slug) => state.wishlist.includes(slug),
    };
  }, [state, addToCart, setQty, removeFromCart, toggleWishlist, removeFromWishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
