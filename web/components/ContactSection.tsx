export function ContactSection() {
  return (
    <section id="contact" className="bg-[#080b0f] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 border border-white/10 bg-white/[0.035] p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Kontakt i ponude
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pošaljite zahtev za proizvod, specifikaciju ili B2B saradnju.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            Za sledeću fazu preporuka je da se ovaj blok poveže sa CMS podešavanjima
            firme ili kontakt formom. Za sada ostaje stabilan frontend CTA bez backend izmene.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="mailto:office@evrometal.rs"
            className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200"
          >
            office@evrometal.rs
          </a>
          <a
            href="tel:+38112327682"
            className="inline-flex justify-center rounded-sm border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/6"
          >
            012 327 682
          </a>
        </div>
      </div>
    </section>
  );
}
