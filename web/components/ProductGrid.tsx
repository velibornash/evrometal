"use client";

import { useMemo, useState } from "react";
import { Product, ProductCard } from "./ProductCard";
import { ProductGridSkeleton } from "./Skeleton";
import { dictionary, type Lang } from "@/lib/i18n";

type ProductGridProps = {
  products: Product[];
  lang: Lang;
  isLoading?: boolean;
};

const filters = [
  { label: "Sve", value: "all" },
  { label: "ALU", value: "alu" },
  { label: "PVC", value: "pvc" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

function matchesFilter(product: Product, filter: FilterValue) {
  if (filter === "all") {
    return true;
  }

  if (product.category === filter) {
    return true;
  }

  const content = `${product.name} ${product.description ?? ""}`.toLowerCase();

  if (filter === "alu") {
    return content.includes("alu") || content.includes("alumin");
  }

  return content.includes("pvc");
}

export function ProductGrid({ products, lang, isLoading = false }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const t = dictionary[lang].products;

  const filteredProducts = useMemo(
    () => products.filter((product) => matchesFilter(product, activeFilter)),
    [activeFilter, products],
  );

  if (isLoading) {
    return (
      <section id="products" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="h-4 w-32 bg-amber-200/20 rounded animate-pulse mb-3" />
              <div className="h-12 w-3/4 bg-white/10 rounded animate-pulse mb-5" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
              <div className="flex rounded-sm border border-white/10 bg-white/[0.035] p-1">
                {filters.map((filter) => (
                  <div key={filter.value} className="min-w-16 h-10 bg-white/10 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
          <ProductGridSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/58">
              {t.text}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <span className="text-sm font-medium text-white/45">
              {filteredProducts.length} / {products.length} {t.count}
            </span>
            <div className="flex rounded-sm border border-white/10 bg-white/[0.035] p-1">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={
                    activeFilter === filter.value
                      ? "min-w-16 rounded-sm bg-amber-300 px-4 py-2 text-sm font-bold text-[#11100b]"
                      : "min-w-16 rounded-sm px-4 py-2 text-sm font-semibold text-white/58 transition hover:bg-white/6 hover:text-white"
                  }
                >
                  {filter.value === "all" ? t.filters[0] : filter.value === "alu" ? t.filters[1] : t.filters[2]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="border border-white/10 bg-white/[0.04] p-8 text-white/58">
            {t.empty}
          </div>
        )}
      </div>
    </section>
  );
}
