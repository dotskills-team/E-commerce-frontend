import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newArrivals } from "@/lib/data";
import { taka } from "@/lib/utils";

export function FeaturedCollections() {
  const items = newArrivals.slice(0, 4);
  return (
    <section className="container py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Featured Collections</h2>
          <p className="text-sm text-gray-500">
            Curated product selections across our catalogue.
          </p>
        </div>
        <Link
          href="/collections"
          className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          Explore Options <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Big feature tile */}
        <Link
          href="/collection/clearance-sale"
          className="group relative col-span-1 overflow-hidden rounded-xl md:row-span-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-suit.jpg"
            alt="Winter Clearance Sale"
            className="h-full min-h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl font-bold">Winter Clearance Sale</h3>
            <p className="text-sm text-white/80">17 Premium Items</p>
          </div>
        </Link>

        {/* Small product tiles */}
        <div className="col-span-1 grid grid-cols-2 gap-4 md:col-span-2">
          {items.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}`}
              className="group flex gap-3 rounded-lg border bg-white p-3"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="line-clamp-2 text-sm font-medium group-hover:text-accent">
                  {p.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-bold text-accent">{taka(p.price)}</span>
                  {p.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {taka(p.oldPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
