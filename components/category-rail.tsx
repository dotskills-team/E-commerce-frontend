import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryRail() {
  return (
    <section className="container py-10">
      <h2 className="mb-6 text-xl font-bold sm:text-2xl">Top Categories</h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/category/${c.slug}`}
            className="group flex flex-col items-center gap-2 text-center"
          >
            <div className="aspect-square w-full overflow-hidden rounded-full border bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xs font-medium leading-tight text-gray-700 group-hover:text-accent">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
