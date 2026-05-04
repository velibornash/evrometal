import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type HeroProps = {
  lang: Lang;
};

export function Hero({ lang }: HeroProps) {
  const t = dictionary[lang].hero;

  return (
    <section className="relative min-h-[calc(100svh-73px)] overflow-hidden border-b border-white/10 bg-[#0f1419]">
      <Image
        src="/images/hero-factory.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-34 saturate-90"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(246,211,101,0.18),transparent_28%),radial-gradient(circle_at_20%_82%,rgba(125,158,178,0.2),transparent_34%),linear-gradient(105deg,rgba(15,20,25,0.94)_0%,rgba(15,20,25,0.82)_38%,rgba(15,20,25,0.48)_66%,rgba(15,20,25,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:84px_84px] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0f1419] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#111820] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            {t.eyebrow}
          </div>

          <h1 className="text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl">
            {t.title1}
            <span className="block text-white/72">{t.title2}</span>
            <span className="block text-amber-200">{t.title3}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {t.text}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200"
            >
              {t.productsCta}
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center rounded-sm border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/6"
            >
              {t.contactCta}
            </a>
          </div>
        </div>

        <div className="border border-white/12 bg-[#121923]/72 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl">
          <div className="grid gap-3">
            {t.trust.map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-white/[0.045] p-4">
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.16em] text-white/42">
                  {text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-amber-200/24 bg-amber-200 p-5 text-[#11100b]">
            <p className="text-xs font-black uppercase tracking-[0.2em]">{t.program}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              {t.programText}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
          {t.stats.map(([value, label]) => (
            <div
              key={label}
              className="border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition hover:border-amber-200/30"
            >
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
