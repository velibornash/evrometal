import Image from "next/image";
import { dictionary, type Lang } from "@/lib/i18n";

type SystemsSectionProps = {
  lang: Lang;
  system: "gealan" | "koemmerling";
};

export function SystemsSection({ lang, system }: SystemsSectionProps) {
  const t = dictionary[lang][system];

  return (
    <section
      id={system}
      className="border-y border-white/10 bg-[#111820] px-6 py-16 md:px-10 md:py-24"
    >
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

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            {t.comparisonTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/52">
            {t.comparisonNote}
          </p>

          <div className="mt-6 overflow-x-auto rounded-sm border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="w-[34%] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-amber-200">
                    {t.comparisonHeaders[0]}
                  </th>
                  {t.comparisonHeaders.slice(1).map((header) => (
                    <th key={header} className="px-5 py-4 text-sm font-semibold text-white">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparisonRows.map((row, rowIndex) => (
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

        <div className="mt-16 space-y-10">
          {t.products.map((product, index) => (
            <article
              key={product.name}
              className="overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <header className="flex flex-col gap-4 border-b border-white/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-amber-300 text-sm font-black text-[#11100b]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                      {product.tagline}
                    </p>
                  </div>
                </div>
              </header>

              <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-2">
                <div className="space-y-7">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {t.descriptionTitle}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      {t.glassTitle}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {product.tripleGlass}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                    {t.geometryTitle}{" "}
                    {t.geometryNote ? (
                      <span className="text-white/35">({t.geometryNote})</span>
                    ) : null}
                  </h4>
                  <div className="image-fill-frame mt-4 aspect-[600/653] max-w-md overflow-hidden border border-white/10 bg-[#17202a]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {"greenline" in t ? (
          <div className="mt-16 border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {t.greenline.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              {t.greenline.text}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
