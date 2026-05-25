import type { Product } from "@/components/ProductCard";

export const staticProducts: Product[] = [
  {
    _id: "static-prozori",
    name: "ALU i PVC prozori",
    nameEn: "Aluminium and PVC windows",
    nameDe: "Aluminium- und PVC-Fenster",
    description:
      "Prozori po meri sa odličnom toplotnom izolacijom, minimalnim održavanjem i visokim nivoom sigurnosti. Aluminijumski sistemi se lako uklapaju u arhitekturu, a PVC višekomorni profili nude dobar odnos cene i kvaliteta.",
    descriptionEn:
      "Made-to-measure windows with thermal insulation, low maintenance and a high level of security. Aluminium systems fit architectural requirements, while multi-chamber PVC profiles offer strong value.",
    descriptionDe:
      "Fenster nach Maß mit Wärmedämmung, geringem Wartungsaufwand und hoher Sicherheit. Aluminiumsysteme passen sich der Architektur an, PVC-Mehrkammerprofile bieten ein gutes Preis-Leistungs-Verhältnis.",
    category: "alu",
    slug: { current: "alu-pvc-prozori" },
    localImage: "/oldwebsite/Proizvodi_files/prozori.jpg",
    specs: [
      { label: "Program", labelEn: "Programme", labelDe: "Programm", value: "ALU / PVC" },
      { label: "Primena", labelEn: "Use", labelDe: "Anwendung", value: "Stambeni, poslovni i javni objekti" },
    ],
  },
  {
    _id: "static-aluminijumska-vrata",
    name: "Aluminijumska vrata",
    nameEn: "Aluminium doors",
    nameDe: "Aluminiumtüren",
    description:
      "Vrata od modernih višekomornih ALUMIL profila sa dobrom zvučnom i toplotnom izolacijom, otpornosti na vremenske uslove i visokim nivoom protivprovalne zaštite.",
    descriptionEn:
      "Doors made from modern multi-chamber ALUMIL profiles, with sound and thermal insulation, weather resistance and a high level of burglary protection.",
    descriptionDe:
      "Türen aus modernen ALUMIL-Mehrkammerprofilen mit Schall- und Wärmedämmung, Wetterbeständigkeit und hohem Einbruchschutz.",
    category: "alu",
    slug: { current: "aluminijumska-vrata" },
    localImage: "/oldwebsite/Proizvodi_files/ulazna-vrata.jpg",
    specs: [
      { label: "Profili", labelEn: "Profiles", labelDe: "Profile", value: "ALUMIL" },
      { label: "Izolacija", labelEn: "Insulation", labelDe: "Dämmung", value: "Toplotna i zvučna" },
    ],
  },
  {
    _id: "static-pvc-vrata",
    name: "PVC vrata",
    nameEn: "PVC doors",
    nameDe: "PVC-Türen",
    description:
      "PVC vrata sa dobrom toplotnom i zvučnom izolacijom, sigurnim sistemima zaključavanja i materijalom otpornim na klimatske uslove za dug vek i lako održavanje.",
    descriptionEn:
      "PVC doors with thermal and sound insulation, secure locking systems and weather-resistant materials for long service life and easy maintenance.",
    descriptionDe:
      "PVC-Türen mit Wärme- und Schalldämmung, sicheren Schließsystemen und wetterbeständigem Material für lange Lebensdauer und einfache Pflege.",
    category: "pvc",
    slug: { current: "pvc-vrata" },
    localImage: "/oldwebsite/Proizvodi_files/pvc-ulazna-vrata.jpg",
    specs: [
      { label: "Materijal", labelEn: "Material", labelDe: "Material", value: "PVC" },
      { label: "Prednosti", labelEn: "Advantages", labelDe: "Vorteile", value: "Sigurnost, izolacija, lako održavanje" },
    ],
  },
  {
    _id: "static-garazna-vrata",
    name: "Segmentna garažna vrata",
    nameEn: "Sectional garage doors",
    nameDe: "Sektional-Garagentore",
    description:
      "Automatska, segmentna i termoizolovana garažna vrata po meri. Izrađuju se od kompozitnih panela debljine 40 mm sa poliuretanskom izolacijom.",
    descriptionEn:
      "Automatic, sectional and insulated garage doors made to measure, using 40 mm composite panels with polyurethane insulation.",
    descriptionDe:
      "Automatische, sektionale und wärmegedämmte Garagentore nach Maß aus 40 mm Verbundpaneelen mit Polyurethan-Dämmung.",
    category: "alu",
    slug: { current: "segmentna-garazna-vrata" },
    localImage: "/oldwebsite/Proizvodi_files/garazna-vrata.jpg",
    specs: [
      { label: "Panel", labelEn: "Panel", labelDe: "Paneel", value: "40 mm" },
      { label: "Otvaranje", labelEn: "Opening", labelDe: "Öffnung", value: "Automatsko" },
    ],
  },
  {
    _id: "static-ograde-kapije",
    name: "Ograde, kapije i gelenderi",
    nameEn: "Fences, gates and railings",
    nameDe: "Zäune, Tore und Geländer",
    description:
      "Dvorišne i balkonske ograde, kapije i gelenderi od aluminijuma, sa lepim izgledom i velikom otpornošću na ekstremne vremenske uslove.",
    descriptionEn:
      "Aluminium yard and balcony fences, gates and railings with a clean appearance and strong resistance to extreme weather conditions.",
    descriptionDe:
      "Aluminium-Zäune, Tore und Geländer für Hof und Balkon mit sauberer Optik und hoher Beständigkeit gegen extreme Witterung.",
    category: "alu",
    slug: { current: "ograde-kapije-gelenderi" },
    localImage: "/oldwebsite/Proizvodi_files/kapije.jpg",
    specs: [
      { label: "Primena", labelEn: "Use", labelDe: "Anwendung", value: "Dvorišta, balkoni, stepeništa" },
      { label: "Materijal", labelEn: "Material", labelDe: "Material", value: "Aluminijum" },
    ],
  },
  {
    _id: "static-profili-materijal",
    name: "Profili, okovi i prateći materijal",
    nameEn: "Profiles, hardware and accessories",
    nameDe: "Profile, Beschläge und Zubehör",
    description:
      "Veleprodaja ALUMIL i WEISS aluminijumskih profila, PVC profila, ukrasne bravarije, okova, pratećeg materijala i termopan stakla za proizvođače stolarije.",
    descriptionEn:
      "Wholesale of ALUMIL and WEISS aluminium profiles, PVC profiles, decorative metalwork, hardware, accessories and insulated glass for joinery manufacturers.",
    descriptionDe:
      "Großhandel mit ALUMIL- und WEISS-Aluminiumprofilen, PVC-Profilen, Metallteilen, Beschlägen, Zubehör und Isolierglas für Bauelement-Hersteller.",
    category: "alu",
    slug: { current: "profili-okovi-materijal" },
    localImage: "/images/profiles-warehouse.jpg",
    specs: [
      { label: "Brendovi", labelEn: "Brands", labelDe: "Marken", value: "ALUMIL / WEISS" },
      { label: "Kupci", labelEn: "Customers", labelDe: "Kunden", value: "Proizvođači stolarije" },
    ],
  },
];

export function findStaticProduct(slug: string) {
  return staticProducts.find((product) => product.slug?.current === slug || product._id === slug) || null;
}
