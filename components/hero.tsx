"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";

export function Hero() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="container pt-4">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((s) => (
            <div
              key={s.id}
              className="relative min-w-full"
              style={{ background: s.tone }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
              <div className="relative flex min-h-[260px] items-center px-6 py-10 sm:min-h-[360px] sm:px-14">
                <div className="max-w-lg text-white animate-fade-in">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                    {s.eyebrow}
                  </p>
                  <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-2xl font-bold text-accent sm:text-3xl">
                    {s.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-white/80 sm:text-base">
                    {s.text}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-6 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-accent hover:text-white"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
