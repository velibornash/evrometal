const categories = [
  { label: "ALU sistemi", value: "Aluminijumski prozori, vrata i fasadne pozicije" },
  { label: "PVC sistemi", value: "PVC stolarija, profili i gotovi elementi" },
  { label: "Staklo", value: "Termopan staklo i prateći materijal" },
  { label: "Okovi", value: "Okovi, roletne, komarnici i oprema" },
];

export function CategoryStrip() {
  return (
    <section id="systems" className="border-b border-white/10 bg-[#10151c]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Kategorije
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Sistemi spremni za specifikaciju
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="border border-white/10 bg-white/[0.035] p-4 transition hover:border-amber-200/34 hover:bg-white/[0.055]"
            >
              <h3 className="text-sm font-semibold text-white">{category.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">{category.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
