import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080b0f]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0,transparent_32%),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#10151c] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.03fr_0.97fr] lg:items-end">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Industrijski sistemi za zahtevne objekte
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Vrhunska stolarija, aluminijum, PVC i staklo za ozbiljne objekte.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Evrometal isporučuje savremena rešenja za prozore, vrata, pregrade i
            fasadne sisteme, uz fokus na preciznost, dug vek trajanja i stabilan
            kvalitet u serijskoj i projektnoj proizvodnji.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200"
            >
              Pogledaj proizvode
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center rounded-sm border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/6"
            >
              Razgovaraj sa timom
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.2),rgba(255,255,255,0.055)_38%,rgba(255,255,255,0.02)),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
            <Image
              src="/images/hero-factory.jpg"
              alt="Evrometal proizvodni pogon"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="relative flex h-full flex-col justify-between border border-white/10 bg-[#10151c]/62 p-5 backdrop-blur-[2px]">
              <div className="grid grid-cols-3 gap-3">
                {["ALU", "PVC", "IMS"].map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[0.045] p-3 text-center text-sm font-black tracking-[0.18em] text-white/76">
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                  Petrovac na Mlavi
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Proizvodnja. Veleprodaja. Montaža.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
          {[
            ["45+", "godina iskustva"],
            ["ALU / PVC", "sistemi i profili"],
            ["IMS / ISO", "atest i standardi"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition hover:border-amber-200/30"
            >
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
