"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dictionary, languages, type Lang, withLang } from "@/lib/i18n";
import { SearchBar } from "./SearchBar";
import type { Product } from "./ProductCard";

type HeaderProps = {
  lang: Lang;
  products?: Product[];
};

export function Header({ lang, products = [] }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = dictionary[lang];
  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.sales, href: "/#sales" },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.references, href: "/#references" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1218]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Evrometal početna">
          <span className="image-fill-frame h-12 w-12 overflow-hidden rounded-sm border border-white/15 bg-white shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <Image src="/logoEvrometal.jpg" alt="" fill sizes="48px" className="object-cover object-left" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.22em] text-white">
              EVROMETAL
            </span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              {t.nav.subtitle}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-white/62 lg:flex xl:gap-6 whitespace-nowrap">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-amber-300/40 bg-amber-300 px-4 py-2 text-sm font-semibold text-[#11100b] transition hover:bg-amber-200 lg:inline-flex lg:ml-6 lg:mr-6"
        >
          {t.nav.quote}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {languages.map((language) => (
            <a
              key={language.code}
              href={withLang("#", language.code)}
              aria-label={language.label}
              className={
                language.code === lang
                  ? "grid h-9 w-9 place-items-center rounded-sm border border-amber-300/50 bg-white/10 text-lg"
                  : "grid h-9 w-9 place-items-center rounded-sm border border-white/10 text-lg opacity-62 transition hover:opacity-100"
              }
            >
              {language.flag}
            </a>
          ))}
        </div>

        <div className="hidden lg:block lg:ml-8">
          <SearchBar products={products} lang={lang} />
        </div>

        <button
          type="button"
          aria-label="Otvori navigaciju"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white transition hover:border-white/30 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#0d1218] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-white/72">
            <div className="mb-3 px-2">
              <SearchBar products={products} lang={lang} />
            </div>
            <div className="mb-3 flex gap-2 px-2">
              {languages.map((language) => (
                <a
                  key={language.code}
                  href={withLang("#", language.code)}
                  aria-label={language.label}
                  className={
                    language.code === lang
                      ? "grid h-10 w-10 place-items-center rounded-sm border border-amber-300/50 bg-white/10 text-lg"
                      : "grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-lg opacity-62"
                  }
                >
                  {language.flag}
                </a>
              ))}
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
