import { dictionary, type Lang } from "@/lib/i18n";

type ContactSectionProps = {
  lang: Lang;
};

export function ContactSection({ lang }: ContactSectionProps) {
  const t = dictionary[lang].contact;
  const phones = [
    [t.phoneLabels[0], "012 327 681", "tel:+38112327681"],
    [t.phoneLabels[1], "012 327 682", "tel:+38112327682"],
    [t.phoneLabels[2], "012 327 683", "tel:+38112327683"],
    [t.phoneLabels[3], "012 327 684", "tel:+38112327684"],
  ];

  return (
    <section id="contact" className="bg-[#0d1218] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.16),rgba(255,255,255,0.045)_36%,rgba(255,255,255,0.02))] p-6 md:p-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            {t.text}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {phones.map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              className="border border-white/10 bg-[#0d1218]/72 p-4 transition hover:border-amber-200/36 hover:bg-[#111820]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                {label}
              </span>
              <span className="mt-2 block text-xl font-semibold text-white">{value}</span>
            </a>
          ))}
          <a
            href="mailto:office@evrometal.rs"
            className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200 sm:col-span-2"
          >
            office@evrometal.rs
          </a>
        </div>
      </div>
    </section>
  );
}
