"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { dictionary, type Lang } from "@/lib/i18n";

const productionImages = [
  "/images/gallery/proizvodnja1.jpg",
  "/images/gallery/proizvodnja2.jpg",
  "/images/gallery/proizvodnja3.jpg",
  "/images/gallery/proizvodnja4.jpg",
  "/images/gallery/proizvodnja5.jpg",
  "/images/gallery/proizvodnja7.jpg",
  "/images/gallery/proizvodnja8.jpg",
  "/images/gallery/proizvodnja9.jpg",
  "/images/gallery/proizvodnja10.jpg",
];

const productsImages = [
  "/images/gallery/proizvodi1.jpg",
  "/images/gallery/proizvodi2.jpg",
  "/images/gallery/proizvodi3.jpg",
  "/images/gallery/proizvodi4.jpg",
  "/images/gallery/proizvodi5.jpg",
];

type CarouselProps = {
  title: string;
  images: string[];
};

function Carousel({ title, images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [next, paused, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-center text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h3>
      <div
        className="relative mt-6 overflow-hidden rounded-sm border border-white/10 bg-[#0a192f]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={images[index]}
            alt={`${title} ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-contain"
            priority={index === 0}
          />
        </div>

        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#0a192f]/70 text-white backdrop-blur transition hover:border-amber-200/40 hover:bg-[#0a192f]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-[#0a192f]/70 text-white backdrop-blur transition hover:border-amber-200/40 hover:bg-[#0a192f]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-amber-200" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function GallerySection({ lang }: { lang: Lang }) {
  const t = dictionary[lang].gallery;
  return (
    <section id="gallery" className="border-y border-white/10 bg-[#0a192f] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
        </div>

        <Carousel title={t.production} images={productionImages} />
        <Carousel title={t.products} images={productsImages} />
      </div>
    </section>
  );
}
