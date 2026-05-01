"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Početna", href: "#" },
  { label: "O nama", href: "#about" },
  { label: "Usluge", href: "#services" },
  { label: "Prodaja", href: "#sales" },
  { label: "Proizvodi", href: "#products" },
  { label: "Reference", href: "#references" },
  { label: "Kontakt", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1218]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="Evrometal početna">
          <span className="image-fill-frame h-10 w-10 overflow-hidden rounded-sm border border-white/15 bg-white shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <Image src="/logoEvrometal.jpg" alt="" fill sizes="40px" className="object-cover object-left" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.22em] text-white">
              EVROMETAL
            </span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              ALU / PVC sistemi
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium text-white/62 md:flex lg:gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-amber-300/40 bg-amber-300 px-4 py-2 text-sm font-semibold text-[#11100b] transition hover:bg-amber-200 lg:inline-flex"
        >
          Zatraži ponudu
        </a>

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
