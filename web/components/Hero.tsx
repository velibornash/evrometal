import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-73px)] overflow-hidden border-b border-white/10 bg-[#080b0f]">
      <Image
        src="/images/hero-factory.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-42"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#080b0f_0%,rgba(8,11,15,0.92)_32%,rgba(8,11,15,0.56)_64%,rgba(8,11,15,0.86)_100%),linear-gradient(rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.052)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="absolute left-0 top-0 h-full w-1/3 border-r border-white/10 bg-white/[0.025]" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#10151c] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Petrovac na Mlavi / od radionice do sistema
          </div>

          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Aluminijum.
            <span className="block text-white/72">PVC. Staklo.</span>
            <span className="block text-amber-200">Gotovo za objekat.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Proizvodnja, veleprodaja i montaža aluminijumske i PVC stolarije,
            termopan stakla, okova i sistema za proizvođače. Direktan uvoz profila,
            sopstveni transport i ugradnja na terenu.
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

        <div className="border border-white/12 bg-[#10151c]/72 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-md">
          <div className="grid gap-3">
            {[
              ["ALUMIL / WEISS", "direktan uvoz profila"],
              ["IMS atesti", "proizvodi po standardu"],
              ["Transport + montaža", "isporuka na terenu"],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-white/[0.045] p-4">
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.16em] text-white/42">
                  {text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-amber-200/24 bg-amber-200 p-5 text-[#11100b]">
            <p className="text-xs font-black uppercase tracking-[0.2em]">B2B program</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              Materijal, gotov proizvod ili kompletna ugradnja.
            </p>
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
