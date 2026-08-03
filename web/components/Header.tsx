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

type MenuItem = {
  label: string;
  href?: string;
  comingSoon?: boolean;
};

export function Header({ lang, products = [] }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const t = dictionary[lang];

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.references, href: "#references" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const productGroups: { title: string; items: MenuItem[] }[] = [
    {
      title: t.nav.pvcSystems,
      items: t.nav.pvcSystemItems,
    },
    {
      title: t.nav.aluSystems,
      items: t.nav.aluSystemItems,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1218]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href={withLang("/", lang)} className="flex items-center gap-3" aria-label={t.aria.home}>
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
          {navItems.slice(0, 2).map((item) => (
            <a key={item.href} href={withLang(item.href, lang)} className="transition hover:text-white">
              {item.label}
            </a>
          ))}

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              {t.nav.products}
              <svg
                className="h-3 w-3 transition duration-200 group-hover:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                aria-hidden="true"
              >
                <path d="M2 4.5L6 8.5L10 4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
                {productGroups.map((group) => (
                  <div key={group.title} className="bg-[#0f151c] p-6">
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                      {group.title}
                    </h3>
                    <div className="space-y-2">
                      {group.items.map((item) =>
                        item.comingSoon ? (
                          <div
                            key={item.label}
                            className="flex items-center justify-between gap-3 rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3"
                          >
                            <span className="text-sm font-medium text-white/45">{item.label}</span>
                            <span className="rounded-sm border border-amber-200/30 bg-amber-200/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-200">
                              {t.nav.comingSoon}
                            </span>
                          </div>
                        ) : (
                          <a
                            key={item.label}
                            href={withLang(item.href ?? "", lang)}
                            className="flex items-center justify-between gap-3 rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/72 transition hover:border-amber-200/30 hover:bg-white/[0.06] hover:text-white"
                          >
                            {item.label}
                            <span className="h-1.5 w-1.5 bg-amber-300" />
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <a key={item.href} href={withLang(item.href, lang)} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={withLang("#contact", lang)}
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
          aria-label={t.aria.menu}
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen((value) => !value);
            setIsProductsOpen(false);
          }}
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
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.href}
                href={withLang(item.href, lang)}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="border-b border-white/8">
              <button
                type="button"
                aria-expanded={isProductsOpen}
                onClick={() => setIsProductsOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-sm px-2 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {t.nav.products}
                <svg
                  className={`h-3 w-3 transition duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  aria-hidden="true"
                >
                  <path d="M2 4.5L6 8.5L10 4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isProductsOpen ? (
                <div className="space-y-5 px-2 pb-4">
                  {productGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                        {group.title}
                      </h4>
                      <div className="space-y-2">
                        {group.items.map((item) =>
                          item.comingSoon ? (
                            <div
                              key={item.label}
                              className="flex items-center justify-between gap-3 rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3"
                            >
                              <span className="text-sm text-white/45">{item.label}</span>
                              <span className="rounded-sm border border-amber-200/30 bg-amber-200/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-200">
                                {t.nav.comingSoon}
                              </span>
                            </div>
                          ) : (
                            <a
                              key={item.label}
                              href={withLang(item.href ?? "", lang)}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72 transition hover:bg-white/5 hover:text-white"
                            >
                              {item.label}
                              <span className="h-1.5 w-1.5 bg-amber-300" />
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {navItems.slice(2).map((item) => (
              <a
                key={item.href}
                href={withLang(item.href, lang)}
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
