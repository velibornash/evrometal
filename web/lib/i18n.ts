export const languages = [
  { code: "sr", label: "Srpski", flag: "🇷🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

export type Lang = (typeof languages)[number]["code"];

export function getLang(value?: string): Lang {
  return value === "en" || value === "de" ? value : "sr";
}

export function withLang(href: string, lang: Lang) {
  if (href.startsWith("#")) {
    return lang === "sr" ? `/${href}` : `/?lang=${lang}${href}`;
  }

  if (lang === "sr") {
    return href;
  }

  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}lang=${lang}`;
}

export const dictionary = {
  sr: {
    nav: {
      home: "Početna",
      about: "O nama",
      services: "Usluge",
      sales: "Prodaja",
      products: "Proizvodi",
      references: "Reference",
      faq: "FAQ",
      contact: "Kontakt",
      quote: "Zatraži ponudu",
      subtitle: "ALU / PVC sistemi",
    },
    hero: {
      eyebrow: "Petrovac na Mlavi / proizvodnja, prodaja i montaža",
      title1: "Aluminijum.",
      title2: "PVC. Staklo.",
      title3: "Gotovo za objekat.",
      text:
        "Evrometal skoro pet decenija razvija proizvodnju aluminijumske i PVC stolarije, termopan stakla, okova i sistema za proizvođače. Direktno uvozimo profile, isporučujemo materijal i gotove proizvode, organizujemo transport i montažu na terenu.",
      productsCta: "Pogledaj proizvode",
      contactCta: "Razgovaraj sa timom",
      trust: [
        ["ALUMIL / WEISS", "direktan uvoz profila"],
        ["IMS atesti", "proizvodi po standardu"],
        ["Transport + montaža", "isporuka na terenu"],
      ],
      program: "B2B program",
      programText: "Materijal, gotov proizvod ili kompletna ugradnja.",
      stats: [
        ["45+", "godina iskustva"],
        ["ALU / PVC", "sistemi i profili"],
        ["IMS / ISO", "atest i standardi"],
      ],
    },
    company: {
      eyebrow: "Evrometal doo Petrovac na Mlavi",
      title: "Skoro pet decenija iskustva u stolariji, aluminijumu, PVC-u i staklu.",
      text:
        "Delatnost firme usmerena je na proizvodnju aluminijumske i PVC stolarije, termopan stakla, uvoz i distribuciju repro-materijala, profila, okova i mašina za druge proizvođače stolarije.",
      imageAlt: "Proizvodnja aluminijumske i PVC stolarije",
      proof: [
        ["Proizvodnja i montaža", "Prozori, vrata, roletne, komarnici, ograde i fasadne pozicije sa organizovanom isporukom i ugradnjom."],
        ["Prodaja profila i okova", "Distribucija ALU i PVC profila, okova, pratećeg materijala, termopan stakla i opreme za proizvođače."],
        ["Sertifikovan kvalitet", "Proizvodi su atestirani na Institutu za mere Srbije, uz garancije na proizvod, ugradnju i montažu."],
      ],
    },
    services: {
      eyebrow: "Proizvodi i usluge",
      title: "Kompletan program za objekte, proizvodnju i veleprodaju.",
      items: [
        ["01", "Aluminijumski i PVC prozori", "Toplotna izolacija, sigurnost, dug vek trajanja i minimalno održavanje za stambene, poslovne i javne objekte.", ["ALU", "PVC", "Termoizolacija"], "/images/alu-window-system.jpg"],
        ["02", "Ulazna i aluminijumska vrata", "Vrata na mehaničko i daljinsko otvaranje, sa dobrom zvučnom izolacijom i profilima za intenzivnu upotrebu.", ["Vrata", "Sigurnost", "ALUMIL"], "/images/pvc-window-system.jpg"],
        ["03", "Garažna segmentna vrata", "Automatska, termoizolovana garažna vrata po meri, sa pouzdanom montažom i pripremom za svakodnevnu upotrebu.", ["Automatika", "Po meri", "Panel"], "/images/garage-door.jpg"],
        ["04", "Ograde, kapije i gelenderi", "Aluminijumske dvorišne i balkonske ograde, kapije i gelenderi otporni na vremenske uslove.", ["Ograde", "Kapije", "Eksterijer"], "/images/fence-gate.jpg"],
        ["05", "Roletne, komarnici i okovi", "Prateći sistemi za kompletiranje stolarije: okovi, roletne, komarnici, dekorativna bravarija i potrošni materijal.", ["Okovi", "Roletne", "Magacin"], "/images/profiles-warehouse.jpg"],
        ["06", "Termopan staklo", "Proizvodnja i ugradnja termopan stakla kao deo kompletnog sistema prozora, vrata i fasadnih pozicija.", ["Staklo", "Izolacija", "Montaža"], "/images/production-line.jpg"],
      ],
    },
    flow: {
      eyebrow: "Od zahteva do objekta",
      title: "Sistem rada koji investitoru smanjuje operativni rizik.",
      text:
        "Kupac može da naruči materijal, gotov proizvod ili kompletnu isporuku sa ugradnjom. Proizvodi se transportuju sopstvenim vozilima i montiraju na terenu.",
      steps: [
        ["Specifikacija", "Profil, staklo, okov, boja i način ugradnje definišu se prema objektu i očekivanom opterećenju."],
        ["Proizvodnja", "ALU/PVC elementi, termopan staklo, roletne, komarnici, vrata, kapije i ograde rade se u kontrolisanom procesu."],
        ["Transport", "Gotovi proizvodi se prevoze sopstvenim transportom, uz pripremu za montažu na terenu."],
        ["Montaža", "Tim izvodi ugradnju, mehaničko ili daljinsko otvaranje i završnu kontrolu pozicija."],
        ["Garancija", "Garancija pokriva proizvod, ugradnju i montažu u skladu sa tipom sistema i projektom."],
      ],
    },
    sales: {
      eyebrow: "Prodaja profila i materijala",
      title: "Profili, okovi, staklo i materijal za proizvođače stolarije.",
      text:
        "U veleprodajnim objektima u Petrovcu na Mlavi vršimo prodaju aluminijumskih profila firmi ALUMIL i WEISS, PVC profila, ukrasne bravarije, okova, pratećeg materijala i termopan stakla. Po želji kupaca uvozimo i radimo stolariju od evropskih proizvođača profila.",
      facts: ["Industrijska zona bb", "07:30 - 15:30", "Veleprodaja + magacin"],
      imageAlt: "Skladište aluminijumskih i PVC profila",
      alu: "Aluminijumski sistemi",
      pvc: "PVC sistemi",
      aluProfiles: ["Alumil M9650", "Alumil M1100", "Alumil M940", "Alumil M9400", "Alumil M900", "Alumil M9000", "WEISS sistemi"],
      pvcProfiles: ["WP 3000", "WP 4000", "WP 5000", "Gealan S 8000 IQ"],
    },
    categories: {
      eyebrow: "Kategorije",
      title: "Sistemi spremni za porudžbinu",
      items: [
        ["01", "ALU sistemi", "prozori, vrata, fasadne pozicije"],
        ["02", "PVC sistemi", "stolarija, profili i gotovi elementi"],
        ["03", "Staklo", "termopan staklo i prateći materijal"],
        ["04", "Okovi", "roletne, komarnici, bravarija i oprema"],
      ],
    },
    professional: {
      eyebrow: "Za arhitekte, investitore i izvođače",
      title: "Brži put do pravog sistema, tačne ponude i pouzdane ugradnje.",
      text:
        "Za svaki objekat pomažemo pri izboru profila, stakla, okova i načina ugradnje, uz jasnu ponudu, tehničke podatke i podršku tima koji poznaje proizvodnju i montažu.",
      items: [
        ["Tehnička dokumentacija", "PDF tehnički listovi, karakteristike sistema i dokumentacija po proizvodu."],
        ["Projektna podrška", "Pomoć pri izboru profila, stakla, okova, boje i načina ugradnje za konkretan objekat."],
        ["Veleprodaja i logistika", "Magacin, transport i isporuka profila, okova, stakla i gotovih elemenata."],
        ["Reference i garancije", "Pregled izvedenih objekata, IMS atesti, ISO standard i garancija na proizvod i montažu."],
      ],
    },
    faq: {
      eyebrow: "Česta pitanja",
      title: "Informacije koje kupci traže pre prvog poziva.",
      items: [
        ["Da li Evrometal radi samo montažu ili i prodaju materijala?", "Evrometal radi proizvodnju, montažu i veleprodaju profila, okova, stakla i pratećeg materijala za druge proizvođače."],
        ["Da li proizvodi imaju garanciju?", "Garancija se daje na proizvod, ugradnju i montažu u skladu sa tipom sistema i projektom."],
        ["Da li radite aluminijumske i PVC sisteme?", "Da. Program obuhvata ALU i PVC stolariju, vrata, prozore, ograde, kapije, roletne, komarnike, okove i termopan staklo."],
        ["Da li postoje tehnički listovi i PDF dokumentacija?", "Za proizvode mogu biti dostupni tehnički listovi, karakteristike sistema, fotografije i prateća dokumentacija."],
      ],
    },
    products: {
      eyebrow: "Katalog proizvoda",
      title: "Izaberite sistem za prozore, vrata, staklo ili prateću opremu.",
      text:
        "U katalogu su prikazani sistemi i proizvodi iz našeg programa. Za detalje, tehničke karakteristike, dostupnost i ponudu možete direktno kontaktirati prodaju.",
      count: "artikala u katalogu",
      filters: ["Sve", "ALU", "PVC"],
      empty: "Trenutno nema objavljenih proizvoda.",
      fallback: "Sistem je dostupan za porudžbinu, tehničku proveru i B2B upite.",
      details: "Pogledaj detalje",
      badge: "System",
    },
    references: {
      eyebrow: "Reference",
      title: "Projekti u javnim, poslovnim i stambenim objektima.",
      imageAlt: "Referentni javni objekat sa Evrometal stolarijom",
      items: [
        "Bolnica u Smederevu",
        "Upravna zgrada Kopova u Kostolcu",
        "Poljoprivredna škola Požarevac",
        "MUP Požarevac",
        "TV DUGA Požarevac",
        "Tržni centar Stig u Petrovcu na Mlavi",
        "Bolnica u Somboru",
        "Bolnica u Užicu",
        "TV SAT Požarevac",
        "NELT u Dobanovcima",
        "Osnovna škola Malo Crniće",
        "Opština Žagubica",
        "Porodična kuća Dubočka",
      ],
    },
    certs: {
      eyebrow: "Sertifikati i garancije",
      title: "Standardizovan kvalitet, atestirani proizvodi i višegodišnje garancije.",
      text:
        "Evrometal poseduje sertifikate o ispunjenju standarda kvaliteta ISO 9001. Proizvodi se atestiraju na Institutu za mere Srbije - IMS Beograd i ispunjavaju zahteve domaćih i inostranih standarda.",
      imageAlt: "ISO sertifikat Evrometal",
      items: ["ISO 9001", "IMS atesti", "EU standardi", "Garancija montaže"],
    },
    contact: {
      eyebrow: "Kontakt i ponude",
      title: "Pošaljite zahtev za ponudu, tehničku proveru ili B2B saradnju.",
      text:
        "Evrometal d.o.o, Industrijska zona bb, 12300 Petrovac na Mlavi. Prodaja, proizvodnja, magacin i montaža rade kao jedan tok, pa kupac dobija jasnu tehničku i logističku podršku.",
      phoneLabels: ["Centrala", "Prodaja", "Proizvodnja", "Magacin"],
    },
    footer: {
      rights: "Sva prava zadržana.",
    },
    productPage: {
      back: "Nazad na proizvode",
      eyebrow: "Evrometal proizvod",
      fallback: "Sistem je dostupan za proizvodnju, isporuku, ugradnju i B2B upite.",
      quote: "Zatraži ponudu",
      call: "Pozovi prodaju",
      cards: [
        ["Primena", "prozori, vrata, fasadne i projektne pozicije"],
        ["Podrška", "izbor sistema, isporuka i konsultacije za ugradnju"],
        ["Kvalitet", "atestirani sistemi, standardizovana proizvodnja i garancije"],
      ],
    },
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", sales: "Sales", products: "Products", references: "References", faq: "FAQ", contact: "Contact", quote: "Request quote", subtitle: "ALU / PVC systems" },
    hero: {
      eyebrow: "Petrovac na Mlavi / manufacturing, sales and installation",
      title1: "Aluminium.",
      title2: "PVC. Glass.",
      title3: "Ready for site.",
      text: "For almost five decades Evrometal has developed aluminium and PVC joinery, insulated glass, hardware and systems for manufacturers. We import profiles directly, supply materials and finished products, and organise transport and on-site installation.",
      productsCta: "View products",
      contactCta: "Talk to the team",
      trust: [["ALUMIL / WEISS", "direct profile import"], ["IMS testing", "standard-compliant products"], ["Transport + installation", "on-site delivery"]],
      program: "B2B programme",
      programText: "Materials, finished products or complete installation.",
      stats: [["45+", "years of experience"], ["ALU / PVC", "systems and profiles"], ["IMS / ISO", "testing and standards"]],
    },
    company: {
      eyebrow: "Evrometal doo Petrovac na Mlavi",
      title: "Almost five decades of experience in joinery, aluminium, PVC and glass.",
      text: "The company focuses on aluminium and PVC joinery, insulated glass production, import and distribution of production materials, profiles, hardware and machinery for other joinery manufacturers.",
      imageAlt: "Aluminium and PVC joinery production",
      proof: [["Production and installation", "Windows, doors, roller shutters, insect screens, fences and facade positions with organised delivery and installation."], ["Profiles and hardware sales", "Distribution of ALU and PVC profiles, hardware, accessories, insulated glass and equipment for manufacturers."], ["Certified quality", "Products are tested by the Serbian Institute of Measures, with warranties for product, installation and assembly."]],
    },
    services: {
      eyebrow: "Products and services",
      title: "A complete programme for buildings, manufacturing and wholesale.",
      items: [
        ["01", "Aluminium and PVC windows", "Thermal insulation, security, long service life and low maintenance for residential, commercial and public buildings.", ["ALU", "PVC", "Thermal"], "/images/alu-window-system.jpg"],
        ["02", "Entrance and aluminium doors", "Mechanically or remotely operated doors with sound insulation and profiles for intensive use.", ["Doors", "Security", "ALUMIL"], "/images/pvc-window-system.jpg"],
        ["03", "Sectional garage doors", "Custom insulated automatic garage doors with reliable installation and everyday-use preparation.", ["Automation", "Custom", "Panel"], "/images/garage-door.jpg"],
        ["04", "Fences, gates and railings", "Aluminium yard and balcony fences, gates and railings resistant to weather conditions.", ["Fences", "Gates", "Exterior"], "/images/fence-gate.jpg"],
        ["05", "Shutters, screens and hardware", "Supporting systems for complete joinery: hardware, roller shutters, insect screens, decorative metalwork and consumables.", ["Hardware", "Shutters", "Warehouse"], "/images/profiles-warehouse.jpg"],
        ["06", "Insulated glass", "Production and installation of insulated glass as part of complete window, door and facade systems.", ["Glass", "Insulation", "Installation"], "/images/production-line.jpg"],
      ],
    },
    flow: {
      eyebrow: "From request to site",
      title: "A workflow that reduces operational risk for investors.",
      text: "Customers can order materials, finished products or complete delivery with installation. Products are transported with company vehicles and installed on site.",
      steps: [["Specification", "Profile, glass, hardware, colour and installation method are defined according to the building and expected load."], ["Production", "ALU/PVC elements, insulated glass, shutters, screens, doors, gates and fences are produced in a controlled process."], ["Transport", "Finished products are transported with company vehicles and prepared for on-site installation."], ["Installation", "The team performs installation, mechanical or remote opening setup and final position control."], ["Warranty", "The warranty covers the product, installation and assembly according to the system and project type."]],
    },
    sales: {
      eyebrow: "Profiles and materials sales",
      title: "Profiles, hardware, glass and materials for joinery manufacturers.",
      text: "In wholesale facilities in Petrovac na Mlavi, Evrometal sells ALUMIL and WEISS aluminium profiles, PVC profiles, decorative metalwork, hardware, accessories and insulated glass. On request, we import and manufacture joinery from European profile systems.",
      facts: ["Industrial zone bb", "07:30 - 15:30", "Wholesale + warehouse"],
      imageAlt: "Aluminium and PVC profile warehouse",
      alu: "Aluminium systems",
      pvc: "PVC systems",
      aluProfiles: ["Alumil M9650", "Alumil M1100", "Alumil M940", "Alumil M9400", "Alumil M900", "Alumil M9000", "WEISS systems"],
      pvcProfiles: ["WP 3000", "WP 4000", "WP 5000", "Gealan S 8000 IQ"],
    },
    categories: { eyebrow: "Categories", title: "Systems ready for specification", items: [["01", "ALU systems", "windows, doors, facade positions"], ["02", "PVC systems", "joinery, profiles and finished elements"], ["03", "Glass", "insulated glass and accessories"], ["04", "Hardware", "shutters, screens, metalwork and equipment"]] },
    professional: {
      eyebrow: "For architects, investors and contractors",
      title: "A faster route to specification, quotation and installation.",
      text: "A modern B2B buyer needs more than a good image. They need a system, technical sheet, clear category, reference projects and a contact who understands what is being installed.",
      items: [["Technical documentation", "PDF technical sheets, system features and product documentation."], ["Project support", "Support in selecting profiles, glass, hardware, colour and installation method for a specific building."], ["Wholesale and logistics", "Warehouse, transport and delivery of profiles, hardware, glass and finished elements."], ["References and warranties", "Completed projects, IMS testing, ISO standard and warranty for product and installation."]],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Information buyers need before the first call.",
      items: [["Does Evrometal only install or also sell materials?", "Evrometal handles production, installation and wholesale of profiles, hardware, glass and accessories for other manufacturers."], ["Do products include a warranty?", "Warranty is provided for the product, installation and assembly according to system and project type."], ["Do you work with aluminium and PVC systems?", "Yes. The programme includes ALU and PVC joinery, doors, windows, fences, gates, shutters, insect screens, hardware and insulated glass."], ["Are technical sheets and PDF documents available?", "Products can include technical sheets, system characteristics, images and supporting documentation."]],
    },
    products: { eyebrow: "Product catalogue", title: "Choose a system for windows, doors, glass or accessories.", text: "The catalogue presents systems and products from our programme. For details, technical characteristics, availability and quotations, contact our sales team directly.", count: "items in catalogue", filters: ["All", "ALU", "PVC"], empty: "There are currently no published products.", fallback: "System available for orders, technical review and B2B enquiries.", details: "View details", badge: "System" },
    references: { eyebrow: "References", title: "Projects in public, commercial and residential buildings.", imageAlt: "Reference public building with Evrometal joinery", items: ["Hospital in Smederevo", "Kostolac Mine Administration Building", "Agricultural School Požarevac", "Police Department Požarevac", "TV DUGA Požarevac", "Stig Shopping Centre in Petrovac na Mlavi", "Hospital in Sombor", "Hospital in Užice", "TV SAT Požarevac", "NELT in Dobanovci", "Primary School Malo Crniće", "Municipality of Žagubica", "Family house Dubočka"] },
    certs: { eyebrow: "Certificates and warranties", title: "Standardised quality, tested products and multi-year warranties.", text: "Evrometal holds certificates confirming compliance with ISO 9001 quality standards. Products are tested by the Serbian Institute of Measures - IMS Belgrade and meet domestic and international standard requirements.", imageAlt: "Evrometal ISO certificate", items: ["ISO 9001", "IMS tests", "EU standards", "Installation warranty"] },
    contact: { eyebrow: "Contact and quotes", title: "Send a request for a quote, specification or B2B cooperation.", text: "Evrometal d.o.o, Industrial zone bb, 12300 Petrovac na Mlavi. Sales, production, warehouse and installation operate as one workflow, giving buyers clear technical and logistical support.", phoneLabels: ["Main office", "Sales", "Production", "Warehouse"] },
    footer: { rights: "All rights reserved." },
    productPage: { back: "Back to products", eyebrow: "Evrometal product", fallback: "Technical system available for project specification, production, delivery and B2B enquiries.", quote: "Request quote", call: "Call sales", cards: [["Application", "windows, doors, facade and project positions"], ["Support", "specification, delivery and installation consultations"], ["Quality", "tested systems, standardised production and warranties"]] },
  },
  de: {
    nav: { home: "Start", about: "Über uns", services: "Leistungen", sales: "Vertrieb", products: "Produkte", references: "Referenzen", faq: "FAQ", contact: "Kontakt", quote: "Angebot anfragen", subtitle: "ALU / PVC Systeme" },
    hero: {
      eyebrow: "Petrovac na Mlavi / Produktion, Vertrieb und Montage",
      title1: "Aluminium.",
      title2: "PVC. Glas.",
      title3: "Bereit fürs Objekt.",
      text: "Seit fast fünf Jahrzehnten entwickelt Evrometal Aluminium- und PVC-Bauelemente, Isolierglas, Beschläge und Systeme für Hersteller. Wir importieren Profile direkt, liefern Material und fertige Elemente und organisieren Transport sowie Montage vor Ort.",
      productsCta: "Produkte ansehen",
      contactCta: "Team kontaktieren",
      trust: [["ALUMIL / WEISS", "direkter Profilimport"], ["IMS Prüfungen", "Produkte nach Standard"], ["Transport + Montage", "Lieferung vor Ort"]],
      program: "B2B Programm",
      programText: "Material, fertiges Produkt oder komplette Montage.",
      stats: [["45+", "Jahre Erfahrung"], ["ALU / PVC", "Systeme und Profile"], ["IMS / ISO", "Prüfung und Standards"]],
    },
    company: {
      eyebrow: "Evrometal doo Petrovac na Mlavi",
      title: "Fast fünf Jahrzehnte Erfahrung mit Bauelementen, Aluminium, PVC und Glas.",
      text: "Das Unternehmen konzentriert sich auf Aluminium- und PVC-Bauelemente, Isolierglasproduktion sowie Import und Vertrieb von Produktionsmaterial, Profilen, Beschlägen und Maschinen für andere Hersteller.",
      imageAlt: "Produktion von Aluminium- und PVC-Bauelementen",
      proof: [["Produktion und Montage", "Fenster, Türen, Rollläden, Insektenschutz, Zäune und Fassadenpositionen mit organisierter Lieferung und Montage."], ["Profile und Beschläge", "Vertrieb von ALU- und PVC-Profilen, Beschlägen, Zubehör, Isolierglas und Ausrüstung für Hersteller."], ["Zertifizierte Qualität", "Produkte werden vom serbischen Institut für Maße geprüft, mit Garantien für Produkt, Einbau und Montage."]],
    },
    services: {
      eyebrow: "Produkte und Leistungen",
      title: "Ein komplettes Programm für Objekte, Produktion und Großhandel.",
      items: [
        ["01", "Aluminium- und PVC-Fenster", "Wärmedämmung, Sicherheit, lange Lebensdauer und geringer Wartungsaufwand für Wohn-, Gewerbe- und öffentliche Gebäude.", ["ALU", "PVC", "Wärme"], "/images/alu-window-system.jpg"],
        ["02", "Eingangs- und Aluminiumtüren", "Mechanisch oder ferngesteuerte Türen mit Schalldämmung und Profilen für intensive Nutzung.", ["Türen", "Sicherheit", "ALUMIL"], "/images/pvc-window-system.jpg"],
        ["03", "Sektional-Garagentore", "Maßgefertigte, isolierte automatische Garagentore mit zuverlässiger Montage.", ["Automatik", "Nach Maß", "Paneel"], "/images/garage-door.jpg"],
        ["04", "Zäune, Tore und Geländer", "Aluminium-Zäune, Tore und Geländer für Hof und Balkon, widerstandsfähig gegen Witterung.", ["Zäune", "Tore", "Außen"], "/images/fence-gate.jpg"],
        ["05", "Rollläden, Insektenschutz und Beschläge", "Ergänzende Systeme für komplette Bauelemente: Beschläge, Rollläden, Insektenschutz, dekorative Metallteile und Verbrauchsmaterial.", ["Beschläge", "Rollläden", "Lager"], "/images/profiles-warehouse.jpg"],
        ["06", "Isolierglas", "Produktion und Einbau von Isolierglas als Teil kompletter Fenster-, Tür- und Fassadensysteme.", ["Glas", "Dämmung", "Montage"], "/images/production-line.jpg"],
      ],
    },
    flow: {
      eyebrow: "Von Anfrage bis Objekt",
      title: "Ein Arbeitsablauf, der operatives Risiko reduziert.",
      text: "Kunden können Material, fertige Produkte oder komplette Lieferung mit Montage bestellen. Produkte werden mit eigenen Fahrzeugen transportiert und vor Ort montiert.",
      steps: [["Spezifikation", "Profil, Glas, Beschlag, Farbe und Montageart werden nach Objekt und erwarteter Belastung definiert."], ["Produktion", "ALU/PVC-Elemente, Isolierglas, Rollläden, Insektenschutz, Türen, Tore und Zäune entstehen in einem kontrollierten Prozess."], ["Transport", "Fertige Produkte werden mit eigenem Transport geliefert und für die Montage vorbereitet."], ["Montage", "Das Team montiert, richtet mechanische oder ferngesteuerte Öffnungen ein und prüft die Positionen."], ["Garantie", "Die Garantie umfasst Produkt, Einbau und Montage je nach System- und Projekttyp."]],
    },
    sales: {
      eyebrow: "Profile und Materialvertrieb",
      title: "Profile, Beschläge, Glas und Material für Bauelement-Hersteller.",
      text: "In den Großhandelsobjekten in Petrovac na Mlavi verkauft Evrometal Aluminiumprofile von ALUMIL und WEISS, PVC-Profile, dekorative Metallteile, Beschläge, Zubehör und Isolierglas. Auf Wunsch importieren und fertigen wir Bauelemente aus europäischen Profilsystemen.",
      facts: ["Industriezone bb", "07:30 - 15:30", "Großhandel + Lager"],
      imageAlt: "Lager für Aluminium- und PVC-Profile",
      alu: "Aluminium-Systeme",
      pvc: "PVC-Systeme",
      aluProfiles: ["Alumil M9650", "Alumil M1100", "Alumil M940", "Alumil M9400", "Alumil M900", "Alumil M9000", "WEISS Systeme"],
      pvcProfiles: ["WP 3000", "WP 4000", "WP 5000", "Gealan S 8000 IQ"],
    },
    categories: { eyebrow: "Kategorien", title: "Systeme bereit für Spezifikation", items: [["01", "ALU-Systeme", "Fenster, Türen, Fassadenpositionen"], ["02", "PVC-Systeme", "Bauelemente, Profile und fertige Elemente"], ["03", "Glas", "Isolierglas und Zubehör"], ["04", "Beschläge", "Rollläden, Insektenschutz, Metallteile und Ausrüstung"]] },
    professional: {
      eyebrow: "Für Architekten, Investoren und Ausführer",
      title: "Schneller zur Spezifikation, zum Angebot und zur Montage.",
      text: "Ein moderner B2B-Käufer braucht mehr als ein gutes Bild. Er braucht ein System, ein technisches Datenblatt, klare Kategorien, Referenzprojekte und einen Ansprechpartner, der die Montage versteht.",
      items: [["Technische Dokumentation", "PDF-Datenblätter, Systemeigenschaften und Produktdokumentation."], ["Projektunterstützung", "Unterstützung bei Profil, Glas, Beschlag, Farbe und Montageart für ein konkretes Objekt."], ["Großhandel und Logistik", "Lager, Transport und Lieferung von Profilen, Beschlägen, Glas und fertigen Elementen."], ["Referenzen und Garantien", "Ausgeführte Projekte, IMS-Prüfungen, ISO-Standard und Garantie für Produkt und Montage."]],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Informationen, die Käufer vor dem ersten Anruf benötigen.",
      items: [["Montiert Evrometal nur oder verkauft es auch Material?", "Evrometal übernimmt Produktion, Montage und Großhandel mit Profilen, Beschlägen, Glas und Zubehör für andere Hersteller."], ["Gibt es Garantie auf Produkte?", "Garantie wird für Produkt, Einbau und Montage je nach System- und Projekttyp gewährt."], ["Arbeiten Sie mit Aluminium- und PVC-Systemen?", "Ja. Das Programm umfasst ALU- und PVC-Bauelemente, Türen, Fenster, Zäune, Tore, Rollläden, Insektenschutz, Beschläge und Isolierglas."], ["Gibt es technische Datenblätter und PDF-Dokumente?", "Produkte können technische Datenblätter, Systemeigenschaften, Bilder und begleitende Dokumentation enthalten."]],
    },
    products: { eyebrow: "Produktkatalog", title: "Wählen Sie ein System für Fenster, Türen, Glas oder Zubehör.", text: "Der Katalog zeigt Systeme und Produkte aus unserem Programm. Für Details, technische Eigenschaften, Verfügbarkeit und Angebote kontaktieren Sie direkt den Vertrieb.", count: "Artikel im Katalog", filters: ["Alle", "ALU", "PVC"], empty: "Derzeit sind keine Produkte veröffentlicht.", fallback: "System verfügbar für Bestellungen, technische Prüfung und B2B-Anfragen.", details: "Details ansehen", badge: "System" },
    references: { eyebrow: "Referenzen", title: "Projekte in öffentlichen, gewerblichen und Wohngebäuden.", imageAlt: "Referenzobjekt mit Evrometal-Bauelementen", items: ["Krankenhaus Smederevo", "Verwaltungsgebäude der Gruben in Kostolac", "Landwirtschaftsschule Požarevac", "Polizeiverwaltung Požarevac", "TV DUGA Požarevac", "Einkaufszentrum Stig in Petrovac na Mlavi", "Krankenhaus Sombor", "Krankenhaus Užice", "TV SAT Požarevac", "NELT in Dobanovci", "Grundschule Malo Crniće", "Gemeinde Žagubica", "Familienhaus Dubočka"] },
    certs: { eyebrow: "Zertifikate und Garantien", title: "Standardisierte Qualität, geprüfte Produkte und mehrjährige Garantien.", text: "Evrometal besitzt Zertifikate zur Erfüllung des Qualitätsstandards ISO 9001. Produkte werden vom Institut für Maße Serbiens - IMS Belgrad geprüft und erfüllen inländische und internationale Standards.", imageAlt: "Evrometal ISO-Zertifikat", items: ["ISO 9001", "IMS Prüfungen", "EU-Standards", "Montagegarantie"] },
    contact: { eyebrow: "Kontakt und Angebote", title: "Senden Sie eine Anfrage für Angebot, Spezifikation oder B2B-Zusammenarbeit.", text: "Evrometal d.o.o, Industriezone bb, 12300 Petrovac na Mlavi. Vertrieb, Produktion, Lager und Montage arbeiten als ein Prozess und geben Käufern klare technische und logistische Unterstützung.", phoneLabels: ["Zentrale", "Vertrieb", "Produktion", "Lager"] },
    footer: { rights: "Alle Rechte vorbehalten." },
    productPage: { back: "Zurück zu Produkten", eyebrow: "Evrometal Produkt", fallback: "Technisches System verfügbar für Projektspezifikation, Produktion, Lieferung und B2B-Anfragen.", quote: "Angebot anfragen", call: "Vertrieb anrufen", cards: [["Anwendung", "Fenster, Türen, Fassaden- und Projektpositionen"], ["Support", "Spezifikation, Lieferung und Beratung zur Montage"], ["Qualität", "geprüfte Systeme, standardisierte Produktion und Garantien"]] },
  },
} as const;
