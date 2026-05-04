import { dictionary, type Lang } from "@/lib/i18n";

type FaqSectionProps = {
  lang: Lang;
};

export function FaqSection({ lang }: FaqSectionProps) {
  const t = dictionary[lang].faq;

  return (
    <section id="faq" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {t.items.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white">
                {question}
                <span className="text-2xl font-light text-amber-200 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/56">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
