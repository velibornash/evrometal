"use client";

import { useMemo, useState } from "react";
import { Product, ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
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

  const content = `${product.name} ${product.description ?? ""}`.toLowerCase();

  if (filter === "alu") {
    return content.includes("alu") || content.includes("alumin");
  }

  return content.includes("pvc");
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProducts = useMemo(
    () => products.filter((product) => matchesFilter(product, activeFilter)),
    [activeFilter, products],
  );

  return (
    <section id="products" className="bg-[#10151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Proizvodi
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Pregled sistema za vrata, prozore i fasadne pozicije
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <span className="text-sm font-medium text-white/45">
              {filteredProducts.length} / {products.length} artikala iz Sanity CMS-a
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
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border border-white/10 bg-white/[0.04] p-8 text-white/58">
            Trenutno nema objavljenih proizvoda.
          </div>
        )}
      </div>
    </section>
  );
}
