import { dictionary, type Lang } from "@/lib/i18n";

type ProjectFlowSectionProps = {
  lang: Lang;
};

export function ProjectFlowSection({ lang }: ProjectFlowSectionProps) {
  const t = dictionary[lang].flow;

  return (
    <section className="border-y border-white/10 bg-[#0d1218] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t.title}
            </h2>
          </div>
          <p className="text-base leading-8 text-white/58">
            {t.text}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
          {t.steps.map(([title, text], index) => (
            <article key={title} className="bg-[#111820] p-5 md:min-h-72 md:p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 bg-amber-300" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
