const categories = [
  { label: "ALU sistemi", value: "prozori, vrata, fasadne pozicije", code: "01" },
  { label: "PVC sistemi", value: "stolarija, profili i gotovi elementi", code: "02" },
  { label: "Staklo", value: "termopan staklo i prateći materijal", code: "03" },
  { label: "Okovi", value: "roletne, komarnici, bravarija i oprema", code: "04" },
];

export function CategoryStrip() {
  return (
    <section id="systems" className="border-b border-white/10 bg-[#111820] px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Kategorije
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Sistemi spremni za specifikaciju
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="bg-[#17202a] p-5 transition hover:bg-[#1d2935]"
            >
              <div className="mb-8 text-sm font-semibold text-amber-200">{category.code}</div>
              <h3 className="text-lg font-semibold text-white">{category.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">{category.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
