import Image from "next/image";

const references = [
  "Bolnica u Smederevu",
  "Upravna zgrada Kopova u Kostolcu",
  "Poljoprivredna škola Požarevac",
  "MUP Požarevac",
  "Tržni centar Stig u Petrovcu na Mlavi",
  "Bolnica u Užicu",
  "NELT u Dobanovcima",
  "Opština Žagubica",
];

export function ReferencesSection() {
  return (
    <section id="references" className="bg-[#10151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Reference
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Projekti u javnim, poslovnim i stambenim objektima.
            </h2>
            <div className="image-fill-frame mt-8 aspect-[16/10] overflow-hidden border border-white/10 bg-[#151b23]">
              <Image
                src="/images/reference-kostolac.jpg"
                alt="Referentni javni objekat sa Evrometal stolarijom"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {references.map((reference) => (
              <div
                key={reference}
                className="border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-white/70 transition hover:border-amber-200/34 hover:text-white"
              >
                {reference}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
