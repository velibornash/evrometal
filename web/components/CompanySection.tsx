import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type CompanySectionProps = {
  lang: Lang;
};

export function CompanySection({ lang }: CompanySectionProps) {
  const t = dictionary[lang].company;

  return (
    <section id="about" className="border-b border-white/10 bg-[#0f151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          {t.eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {t.title}
        </h2>

        <div className="image-fill-frame mt-10 aspect-[16/9] overflow-hidden border border-white/10 bg-[#17202a]">
          <Image
            src="/images/production-line.jpg"
            alt={t.imageAlt}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 space-y-9">
          <p className="text-base leading-8 text-white/62 md:text-lg">
            {t.intro}
          </p>

          {t.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                {section.title}
              </h3>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-white/62">
                    {paragraph}
                  </p>
                ))}
                {section.list.length > 0 ? (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 bg-amber-300" />
                        <span className="text-sm leading-6 text-white/62 md:text-base md:leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
