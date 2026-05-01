export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d1218] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.16),rgba(255,255,255,0.045)_36%,rgba(255,255,255,0.02))] p-6 md:p-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Kontakt i ponude
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pošaljite zahtev za ponudu, specifikaciju ili B2B saradnju.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            Petrovac na Mlavi, Industrijska zona bb. Prodaja, proizvodnja, magacin
            i montaža rade kao jedan tok, pa kupac dobija jasnu tehničku i logističku podršku.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Centrala", "012 327 681", "tel:+38112327681"],
            ["Prodaja", "012 327 682", "tel:+38112327682"],
            ["Proizvodnja", "012 327 683", "tel:+38112327683"],
            ["Magacin", "012 327 684", "tel:+38112327684"],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              className="border border-white/10 bg-[#0d1218]/72 p-4 transition hover:border-amber-200/36 hover:bg-[#111820]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                {label}
              </span>
              <span className="mt-2 block text-xl font-semibold text-white">{value}</span>
            </a>
          ))}
          <a
            href="mailto:office@evrometal.rs"
            className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200 sm:col-span-2"
          >
            office@evrometal.rs
          </a>
        </div>
      </div>
    </section>
  );
}
