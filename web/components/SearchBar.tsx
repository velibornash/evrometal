"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Product } from "./ProductCard";
import { dictionary, type Lang, withLang } from "@/lib/i18n";

type SearchBarProps = {
  products: Product[];
  lang: Lang;
};

export function SearchBar({ products, lang }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const t = dictionary[lang];

  const filterProducts = useCallback((searchQuery: string, productList: Product[]) => {
    if (searchQuery.trim() === "") {
      return [];
    }

    return productList.filter((product) => {
      const searchFields = [
        product.name,
        product.nameEn,
        product.nameDe,
        product.description,
        product.descriptionEn,
        product.descriptionDe,
        product.category,
      ].filter(Boolean);

      return searchFields.some((field) =>
        field?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }).slice(0, 5);
  }, []);

  const filteredProducts = filterProducts(query, products);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = (product: Product) => {
    const slug = product.slug?.current || product._id;
    const productHref = `/product/${slug}`;
    router.push(withLang(productHref, lang));
    setIsOpen(false);
    setQuery("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchHref = `/search?q=${encodeURIComponent(query)}`;
      router.push(withLang(searchHref, lang));
      setIsOpen(false);
    }
  };

  const getTitle = (product: Product) => {
    return lang === "en" ? product.nameEn || product.name : 
           lang === "de" ? product.nameDe || product.name : 
           product.name;
  };

  const getDescription = (product: Product) => {
    return lang === "en" ? product.descriptionEn || product.description :
           lang === "de" ? product.descriptionDe || product.description :
           product.description;
  };

  return (
    <div className="relative" ref={inputRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t.search?.placeholder || "Pretraži proizvode..."}
          className="w-full rounded-sm border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-white placeholder-white/40 transition focus:border-amber-200/40 focus:bg-white/10 focus:outline-none lg:w-48"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1.5 text-white/40 transition hover:text-amber-200"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {isOpen && filteredProducts.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-sm border border-white/10 bg-[#0d1218]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="max-h-80 overflow-y-auto">
            {filteredProducts.map((product) => (
              <button
                key={product._id}
                onClick={() => handleProductClick(product)}
                className="w-full border-b border-white/5 bg-white/[0.02] px-4 py-3 text-left transition hover:bg-white/[0.06] last:border-b-0"
              >
                <div className="text-sm font-medium text-white">{getTitle(product)}</div>
                <div className="mt-1 line-clamp-2 text-xs text-white/50">
                  {getDescription(product)}
                </div>
                {product.category && (
                  <div className="mt-1 text-xs text-amber-200/60">
                    {product.category}
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 p-2">
            <button
              onClick={handleSearch}
              className="w-full rounded-sm bg-amber-300/10 px-3 py-2 text-xs font-medium text-amber-200 transition hover:bg-amber-300/20"
            >
              {t.search?.seeAll || "Pogledaj sve rezultate"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
