import { dictionary, type Lang } from "@/lib/i18n";

type CategoryStripProps = {
  lang: Lang;
};

export function CategoryStrip({ lang }: CategoryStripProps) {
  const t = dictionary[lang].categories;

  return (
    <section id="systems" className="border-b border-white/10 bg-[#111820] px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map(([code, label, value]) => (
            <div
              key={label}
              className="bg-[#17202a] p-5 transition hover:bg-[#1d2935]"
            >
              <div className="mb-8 text-sm font-semibold text-amber-200">{code}</div>
              <h3 className="text-lg font-semibold text-white">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
