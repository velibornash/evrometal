import Image from "next/image";

const certificates = ["ISO 9001", "IMS atesti", "EU standardi", "Garancija montaže"];

export function CertificationsSection() {
  return (
    <section id="certificates" className="border-y border-white/10 bg-[#0c1016] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Sertifikati i garancije
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Standardizovan kvalitet, atestirani proizvodi i višegodišnje garancije.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58 md:text-base">
            Originalni sajt navodi ISO sertifikate i ateste Instituta za mere Srbije.
            Ovu sekciju kasnije treba povezati sa PDF dokumentima iz CMS-a.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] md:grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="image-fill-frame min-h-72 overflow-hidden border border-white/10 bg-[#151b23]">
            <Image
              src="/images/certificate-iso.jpg"
              alt="ISO sertifikat Evrometal"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {certificates.map((certificate) => (
              <div
                key={certificate}
                className="grid min-h-24 place-items-center border border-white/10 bg-white/[0.035] px-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white/72"
              >
                {certificate}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
