import Image from "next/image";

const aluProfiles = ["Alumil M9650", "Alumil M1100", "Alumil M940", "Alumil M9400", "Alumil M900", "Alumil M9000"];
const pvcProfiles = ["WP 3000", "WP 4000", "WP 5000", "Gealan S 8000 IQ"];

export function ProfileSystemsSection() {
  return (
    <section id="sales" className="border-y border-white/10 bg-[#0c1016] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
            Prodaja profila i materijala
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Veleprodaja sistema za proizvođače stolarije.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62">
            Evrometal prodaje aluminijumske profile ALUMIL i WEISS, PVC profile,
            ukrasnu bravariju, okove, prateći materijal i termopan staklo. Po zahtevu
            se rade i sistemi evropskih proizvođača profila.
          </p>
          <div className="image-fill-frame mt-8 aspect-[16/9] overflow-hidden border border-white/10 bg-[#151b23]">
            <Image
              src="/images/profiles-warehouse.jpg"
              alt="Skladište aluminijumskih i PVC profila"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ProfileColumn title="Aluminijumski sistemi" items={aluProfiles} accent="ALU" />
          <ProfileColumn title="PVC sistemi" items={pvcProfiles} accent="PVC" />
        </div>
      </div>
    </section>
  );
}

function ProfileColumn({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <article className="border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="rounded-sm bg-amber-300 px-2.5 py-1 text-xs font-black text-[#11100b]">
          {accent}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border border-white/8 bg-[#10151c] px-4 py-3 text-sm text-white/70"
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 bg-amber-300" />
          </div>
        ))}
      </div>
    </article>
  );
}
