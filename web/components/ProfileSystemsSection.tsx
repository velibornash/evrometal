import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type ProfileSystemsSectionProps = {
  lang: Lang;
};

export function ProfileSystemsSection({ lang }: ProfileSystemsSectionProps) {
  const t = dictionary[lang].sales;

  return (
    <section id="sales" className="border-y border-white/10 bg-[#0f151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62">
            {t.text}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {t.facts.map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/62">
                {item}
              </div>
            ))}
          </div>
          <div className="image-fill-frame mt-8 aspect-[16/9] overflow-hidden border border-white/10 bg-[#17202a]">
            <Image
              src="/images/profiles-warehouse.jpg"
              alt={t.imageAlt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ProfileColumn title={t.alu} items={[...t.aluProfiles]} accent="ALU" />
          <ProfileColumn title={t.pvc} items={[...t.pvcProfiles]} accent="PVC" />
        </div>
      </div>
    </section>
  );
}

function ProfileColumn({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <article className="border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="rounded-sm bg-amber-300 px-2.5 py-1 text-xs font-black text-[#11100b]">
          {accent}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border border-white/8 bg-[#111820] px-4 py-3 text-sm text-white/70"
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 bg-amber-300" />
          </div>
        ))}
      </div>
    </article>
  );
}
