const steps = [
  {
    title: "Specifikacija",
    text: "Profil, staklo, okov, boja i način ugradnje se definišu prema objektu i očekivanom opterećenju.",
  },
  {
    title: "Proizvodnja",
    text: "ALU/PVC elementi, termopan staklo, roletne, komarnici, vrata, kapije i ograde rade se u kontrolisanom procesu.",
  },
  {
    title: "Transport",
    text: "Gotovi proizvodi se prevoze sopstvenim transportom, uz pripremu za montažu na terenu.",
  },
  {
    title: "Montaža",
    text: "Tim izvodi ugradnju, mehaničko ili daljinsko otvaranje i završnu kontrolu pozicija.",
  },
  {
    title: "Garancija",
    text: "Garancija pokriva proizvod, ugradnju i montažu u skladu sa tipom sistema i projektom.",
  },
];

export function ProjectFlowSection() {
  return (
    <section className="border-y border-white/10 bg-[#080b0f] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Od zahteva do objekta
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Sistem rada koji investitoru skida operativni rizik.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/58">
            Stari Evrometal je imao snagu u proizvodnji, transportu i montaži. Novi sajt
            to prikazuje kao jasan proces, jer B2B kupac želi da vidi ko preuzima odgovornost.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="bg-[#10151c] p-5 md:min-h-72 md:p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 bg-amber-300" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
