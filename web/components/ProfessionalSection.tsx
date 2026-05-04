import { dictionary, type Lang } from "@/lib/i18n";

type ProfessionalSectionProps = {
  lang: Lang;
};

export function ProfessionalSection({ lang }: ProfessionalSectionProps) {
  const t = dictionary[lang].professional;

  return (
    <section className="border-y border-white/10 bg-[#0f151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/58">{t.text}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {t.items.map(([title, text], index) => (
            <article key={title} className="border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 bg-amber-300" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/56">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
