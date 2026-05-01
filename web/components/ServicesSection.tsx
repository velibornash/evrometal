import Image from "next/image";

const services = [
  {
    label: "01",
    title: "Aluminijumski i PVC prozori",
    text: "Toplotna izolacija, sigurnost, dug vek trajanja i minimalno održavanje za stambene, poslovne i javne objekte.",
    tags: ["ALU", "PVC", "Termoizolacija"],
    image: "/images/alu-window-system.jpg",
  },
  {
    label: "02",
    title: "Ulazna i aluminijumska vrata",
    text: "Sistemi vrata sa dobrom zvučnom izolacijom, stabilnim zaključavanjem i profilima namenjenim intenzivnoj upotrebi.",
    tags: ["Vrata", "Sigurnost", "ALUMIL"],
    image: "/images/pvc-window-system.jpg",
  },
  {
    label: "03",
    title: "Garažna segmentna vrata",
    text: "Automatska, termoizolovana garažna vrata po meri, sa panelima debljine 40 mm i pouzdanom montažom.",
    tags: ["Automatika", "Po meri", "40 mm panel"],
    image: "/images/garage-door.jpg",
  },
  {
    label: "04",
    title: "Ograde, kapije i gelenderi",
    text: "Aluminijumske dvorišne i balkonske ograde, kapije i gelenderi otporni na vremenske uslove.",
    tags: ["Ograde", "Kapije", "Eksterijer"],
    image: "/images/fence-gate.jpg",
  },
  {
    label: "05",
    title: "Roletne, komarnici i okovi",
    text: "Prateći sistemi za kompletiranje stolarije: okovi, roletne, komarnici, dekorativna bravarija i potrošni materijal.",
    tags: ["Okovi", "Roletne", "Magacin"],
    image: "/images/profiles-warehouse.jpg",
  },
  {
    label: "06",
    title: "Termopan staklo",
    text: "Proizvodnja i ugradnja termopan stakla kao deo kompletnog sistema prozora, vrata i fasadnih pozicija.",
    tags: ["Staklo", "Izolacija", "Montaža"],
    image: "/images/production-line.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#111820] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Proizvodi i usluge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Kompletan program za objekte, proizvodnju i veleprodaju.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border border-white/10 bg-[#17202a] p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-200/36 hover:bg-[#1b2631] hover:shadow-[0_24px_90px_rgba(0,0,0,0.36)] md:p-5"
            >
              <div className="image-fill-frame mb-6 aspect-[16/10] overflow-hidden border border-white/10 bg-[#0d131a]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="mb-7 flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-amber-200">{service.label}</span>
                <div className="h-12 w-12 border border-white/10 bg-[linear-gradient(135deg,rgba(246,211,101,0.28),rgba(255,255,255,0.04))] transition group-hover:border-amber-200/36" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{service.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/48"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
