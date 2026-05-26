import { dictionary, type Lang } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Lang;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const t = dictionary[lang].footer;

  return (
    <footer className="border-t border-white/10 bg-[#0d1218] px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {lang === "sr" ? "Evrometal" : lang === "en" ? "Evrometal" : "Evrometal"}
            </h3>
            <p className="text-sm text-white/60 mb-4">
              {lang === "sr" ? "Skoro pet decenija iskustva u aluminijumskim i PVC sistemima." : 
               lang === "en" ? "Almost five decades of experience in aluminium and PVC systems." : 
               "Fast fünf Jahrzehnte Erfahrung in Aluminium- und PVC-Systemen."}
            </p>
            <div className="flex gap-4">
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {lang === "sr" ? "Kontakt" : lang === "en" ? "Contact" : "Kontakt"}
            </h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>Evrometal d.o.o</p>
              <p>Industrijska zona bb</p>
              <p>12300 Petrovac na Mlavi</p>
              <div className="pt-2 space-y-1">
                <a href="mailto:office@evrometal.rs" className="block transition hover:text-white">
                  office@evrometal.rs
                </a>
                <a href="tel:+38112327682" className="block transition hover:text-white">
                  012 327 682
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {lang === "sr" ? "Brzi linkovi" : lang === "en" ? "Quick links" : "Schnelllinks"}
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#products" className="block text-white/60 transition hover:text-white">
                {lang === "sr" ? "Proizvodi" : lang === "en" ? "Products" : "Produkte"}
              </a>
              <a href="#services" className="block text-white/60 transition hover:text-white">
                {lang === "sr" ? "Usluge" : lang === "en" ? "Services" : "Leistungen"}
              </a>
              <a href="#contact" className="block text-white/60 transition hover:text-white">
                {lang === "sr" ? "Kontakt" : lang === "en" ? "Contact" : "Kontakt"}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Evrometal. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
