import Image from "next/image";

const proofPoints = [
  {
    title: "Proizvodnja i montaža",
    text: "Prozori, vrata, roletne, komarnici, ograde i fasadne pozicije sa organizovanom isporukom i ugradnjom.",
  },
  {
    title: "Prodaja profila i okova",
    text: "Distribucija ALU i PVC profila, okova, pratećeg materijala, termopan stakla i opreme za proizvođače.",
  },
  {
    title: "Sertifikovan kvalitet",
    text: "Rad po standardima kvaliteta, uz garancije na proizvode, montažu i ugrađene sisteme.",
  },
];

export function CompanySection() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#0f151c] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Evrometal doo Petrovac na Mlavi
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Skoro pet decenija iskustva u stolariji, aluminijumu, PVC-u i staklu.
          </h2>
          <div className="image-fill-frame mt-8 aspect-[16/10] overflow-hidden border border-white/10 bg-[#17202a]">
            <Image
              src="/images/production-line.jpg"
              alt="Proizvodnja aluminijumske i PVC stolarije"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-8 text-white/62 md:text-lg">
            Modernizujemo postojeći Evrometal identitet u pregledan B2B katalog koji
            jasno komunicira proizvodnju, prodaju sistema, servis za projektante i
            pouzdanu podršku za proizvođače stolarije.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <article key={item.title} className="border border-white/10 bg-white/[0.035] p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
