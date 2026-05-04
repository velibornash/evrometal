import { dictionary, type Lang } from "@/lib/i18n";
import { ContactForm } from "./ContactForm";

type ContactSectionProps = {
  lang: Lang;
};

export function ContactSection({ lang }: ContactSectionProps) {
  const t = dictionary[lang].contact;
  const phones = [
    [t.phoneLabels[0], "012 327 681", "tel:+38112327681"],
    [t.phoneLabels[1], "012 327 682", "tel:+38112327682"],
    [t.phoneLabels[2], "012 327 683", "tel:+38112327683"],
    [t.phoneLabels[3], "012 327 684", "tel:+38112327684"],
  ];

  return (
    <section id="contact" className="bg-[#0d1218] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            {t.text}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-sm border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.16),rgba(255,255,255,0.045)_36%,rgba(255,255,255,0.02))] p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                {lang === "sr" ? "Kontakt informacije" : 
                 lang === "en" ? "Contact information" : 
                 "Kontaktinformationen"}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {phones.map(([label, value, href]) => (
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
              </div>
              <a
                href="mailto:office@evrometal.rs"
                className="mt-4 inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200 w-full"
              >
                office@evrometal.rs
              </a>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                {lang === "sr" ? "Adresa" : 
                 lang === "en" ? "Address" : 
                 "Adresse"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-white">Evrometal d.o.o</p>
                    <p className="text-sm text-white/60">Industrijska zona bb</p>
                    <p className="text-sm text-white/60">12300 Petrovac na Mlavi</p>
                    <p className="text-sm text-white/60">Srbija</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {lang === "sr" ? "Radno vreme" : 
                       lang === "en" ? "Working hours" : 
                       "Öffnungszeiten"}
                    </p>
                    <p className="text-sm text-white/60">
                      {lang === "sr" ? "Ponedeljak - Petak: 07:30 - 15:30" : 
                       lang === "en" ? "Monday - Friday: 07:30 - 15:30" : 
                       "Montag - Freitag: 07:30 - 15:30"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
              {lang === "sr" ? "Pošaljite nam poruku" : 
               lang === "en" ? "Send us a message" : 
               "Senden Sie uns eine Nachricht"}
            </h3>
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
