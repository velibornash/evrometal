import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type ServicesSectionProps = {
  lang: Lang;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  const t = dictionary[lang].services;

  return (
    <section id="services" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.items.map(([label, title, text, tags, image]) => (
            <article
              key={title}
              className="group border border-white/10 bg-[#17202a] p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-200/36 hover:bg-[#1b2631] hover:shadow-[0_24px_90px_rgba(0,0,0,0.36)] md:p-5"
            >
              <div className="image-fill-frame mb-6 aspect-[16/10] overflow-hidden border border-white/10 bg-[#0d131a]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="mb-7 flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-amber-200">{label}</span>
                <div className="h-12 w-12 border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.28),rgba(255,255,255,0.04))] transition group-hover:border-amber-200/36" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/48"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
