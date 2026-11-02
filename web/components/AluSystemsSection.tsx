import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type SystemItem = {
  name: string;
  tagline: string;
  description: string;
  specs: string[][];
  image?: string;
};

type SpecBlock = {
  title: string;
  items: string[][];
};

type CertBlock = {
  title: string;
  items: string[];
};

type AsciiBlock = {
  title: string;
  text: string;
};

type AluSectionData = {
  eyebrow: string;
  title: string;
  intro: string;
  descriptionTitle?: string;
  specsTitle?: string;
  schematicTitle?: string;
  materialSpecs?: SpecBlock;
  comparisonTitle?: string;
  comparisonNote?: string;
  comparisonHeaders?: string[];
  comparisonRows?: string[][];
  systems: SystemItem[];
  certifications?: CertBlock;
  asciiSchematics?: AsciiBlock[];
  note?: string;
};

type AluSystemsSectionProps = {
  lang: Lang;
  system: "aluminco" | "akpa";
};

export function AluSystemsSection({ lang, system }: AluSystemsSectionProps) {
  const t = dictionary[lang][system] as unknown as AluSectionData;

  return (
    <section id={system} className="border-y border-white/10 bg-[#0d1218] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">
            {t.intro}
          </p>
        </div>

        {t.materialSpecs ? (
          <div className="mt-12">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {t.materialSpecs.title}
            </h3>
            <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {t.materialSpecs.items.map(([label, value]) => (
                <div key={label} className="bg-[#111820] p-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-200/70">
                    {label}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/72">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {t.comparisonTitle ? (
          <div className="mt-12">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {t.comparisonTitle}
            </h3>
            {t.comparisonNote ? (
              <p className="mt-3 text-sm leading-6 text-white/52">{t.comparisonNote}</p>
            ) : null}
            <div className="mt-6 overflow-x-auto rounded-sm border border-white/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-white/[0.06]">
                    {t.comparisonHeaders?.map((header, i) => (
                      <th
                        key={header}
                        className={`px-5 py-4 text-sm font-semibold ${i === 0 ? "w-[34%] text-xs font-black uppercase tracking-[0.16em] text-amber-200" : "text-white"}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparisonRows?.map((row, rowIndex) => (
                    <tr
                      key={row[0]}
                      className={`border-t border-white/8 ${rowIndex % 2 === 0 ? "bg-[#0f151c]" : "bg-[#121a24]"}`}
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-white/72">
                        {row[0]}
                      </td>
                      {row.slice(1).map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-5 py-4 text-sm leading-6 ${cellIndex === 0 ? "text-white" : "text-white/62"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        <div className="mt-16 space-y-10">
          {t.systems.map((systemItem, index) => (
            <article
              key={systemItem.name}
              className="overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <header className="flex flex-col gap-4 border-b border-white/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-amber-300 text-sm font-black text-[#11100b]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {systemItem.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                      {systemItem.tagline}
                    </p>
                  </div>
                </div>
              </header>

              <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-2">
                <div className="space-y-7">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {t.descriptionTitle ?? "Description"}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {systemItem.description}
                    </p>
                  </div>
                  {systemItem.specs && systemItem.specs.length > 0 ? (
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                        {t.specsTitle ?? "Technical characteristics"}
                      </h4>
                      <div className="mt-4 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                        {systemItem.specs.map(([label, value]) => (
                          <div key={label} className="bg-[#111820] p-4">
                            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-200/70">
                              {label}
                            </div>
                            <div className="mt-1 text-sm leading-6 text-white/72">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {systemItem.image ? (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {t.schematicTitle ?? "Schematic diagram"}
                    </h4>
                    <div className="image-fill-frame mt-4 overflow-hidden border border-white/10 bg-[#17202a]">
                      <Image
                        src={systemItem.image}
                        alt={systemItem.name}
                        width={962}
                        height={556}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {t.asciiSchematics && t.asciiSchematics.length > 0 ? (
          <div className="mt-16 space-y-10">
            {t.asciiSchematics.map((s) => (
              <div key={s.title} className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {s.title}
                </h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre text-xs leading-5 text-white/70 md:text-sm">
                  {s.text}
                </pre>
              </div>
            ))}
          </div>
        ) : null}

        {t.certifications ? (
          <div className="mt-16 border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {t.certifications.title}
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-white/70">
              {t.certifications.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {t.note ? (
          <p className="mt-12 text-sm leading-7 text-white/52">{t.note}</p>
        ) : null}
      </div>
    </section>
  );
}
