import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type ReferencesSectionProps = {
  lang: Lang;
};

export function ReferencesSection({ lang }: ReferencesSectionProps) {
  const t = dictionary[lang].references;

  return (
    <section id="references" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t.title}
            </h2>
            <div className="image-fill-frame mt-8 aspect-[16/10] overflow-hidden border border-white/10 bg-[#17202a]">
              <Image
                src="/images/reference-kostolac.jpg"
                alt={t.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.items.map((reference) => (
              <div
                key={reference}
                className="min-h-24 border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-white/70 transition hover:-translate-y-0.5 hover:border-amber-200/34 hover:bg-white/[0.055] hover:text-white"
              >
                {reference}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
