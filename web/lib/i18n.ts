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
      products: "Proizvodi",
      references: "Reference",
      faq: "FAQ",
      contact: "Kontakt",
      quote: "Zatraži ponudu",
      subtitle: "ALU / PVC sistemi",
      pvcSystems: "PVC sistemi",
      aluSystems: "ALU sistemi",
      comingSoon: "Dolazi uskoro",
    },
    search: {
      placeholder: "Pretraži proizvode...",
      seeAll: "Pogledaj sve rezultate",
      noResults: "Nema pronađenih proizvoda",
      results: "rezultati",
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
      eyebrow: "O nama",
      title: "EVROMETAL – Tradicija kvaliteta i inovacija u svetu stolarije.",
      imageAlt: "Proizvodnja aluminijumske i PVC stolarije",
      intro:
        "Sa preko 40 godina uspešnog poslovanja, EVROMETAL predstavlja sinonim za pouzdanost, vrhunski kvalitet i dugovečnost. Od zanatske radionice do lidera na tržištu, naš cilj je ostao isti: pružiti vrhunsku PVC i aluminijumsku stolariju koja transformiše vaš dom ili poslovni prostor. Spajamo decenijsko iskustvo sa najsavremenijim tehnologijama kako bismo vam obezbedili maksimalnu energetsku efikasnost, sigurnost i estetski savršen dizajn.",
      sections: [
        {
          title: "Nova era: EVROMETAL i LJUBENKOVIĆ",
          paragraphs: [
            "Godina 2025. donela je veliku i stratešku prekretnicu za našu kompaniju. EVROMETAL je postao ponosni deo kompanije LJUBENKOVIĆ, renomiranog lidera u proizvodnji vrhunskih roletni i sistema zaštite od sunca.",
            "Ova akvizicija spojila je dve vodeće snage u industriji. Spajanjem tradicije brenda EVROMETAL i inovativnih rešenja kompanije LJUBENKOVIĆ, našim klijentima nudimo jedinstven koncept „sve na jednom mestu“ – od najkvalitetnijih prozora i vrata do vrhunskih roletni i prateće opreme.",
          ],
          list: [],
        },
        {
          title: "Naš proizvodni program",
          paragraphs: [],
          list: [
            "PVC stolarija: Izrađena od najkvalitetnijih višekomornih profila koji garantuju vrhunsku termo i zvučnu izolaciju.",
            "Aluminijumska stolarija: Elegantna, moderna i izuzetno otporna rešenja, idealna za velike staklene površine i savremenu arhitekturu.",
            "Sistemi roletni LJUBENKOVIĆ: Vrhunska zaštita od svetlosti, spoljnih uticaja i neželjenih pogleda, savršeno integrisana sa našom stolarijom.",
            "Sopstveni staklopaket centar (Novo od 2026.): Kompletna proizvodnja stakla unutar naše fabrike za maksimalnu energetsku efikasnost.",
          ],
        },
        {
          title: "Specijalnost: 100% sopstveni staklopaketi i profesionalna RAL montaža",
          paragraphs: [
            "Budući da staklo čini preko 70% površine svakog prozora, njegova uloga u izolaciji je ključna. Od 2026. godine, kompanija EVROMETAL je pokrenula sopstvenu, najsavremeniju liniju za proizvodnju staklopaketa. Kod nas dobijate proizvod koji je u potpunosti projektovan, proizveden i kontrolisan unutar naše kompanije.",
            "U ponudi imamo visokoefikasna troslojna stakla, kao i niskoemisiona (Low-E) stakla punjena argonom. Ova tehnologija zadržava toplotu zimi, a sprečava pregrevanje prostora leti.",
            "Vrhunski prozor gubi svoju funkciju ako nije pravilno ugrađen. Zato EVROMETAL sa ponosom ističe svoju drugu veliku specijalnost – RAL montažu. Za razliku od klasične ugradnje penom, RAL ugradnja se izvodi po strogim evropskim standardima koristeći specijalne paropropusne i vodonepropusne trake.",
          ],
          list: [],
        },
        {
          title: "Prednosti naše proizvodnje i RAL montaže",
          paragraphs: [],
          list: [
            "Maksimalna energetska efikasnost: Kombinacija naših Low-E troslojnih staklopaketa sa argonom i RAL ugradnje drastično smanjuje troškove grejanja i hlađenja.",
            "Stop vlazi i buđi: RAL montaža i savršeno zaptiveni staklopaketi potpuno sprečavaju pojavu vlage, buđi i kondenzacije oko prozora.",
            "Savršena zvučna izolacija: Izolujemo vaš prostor od spoljne buke i kreiramo miran ambijent unutar doma.",
          ],
        },
        {
          title: "Zašto izabrati EVROMETAL?",
          paragraphs: [],
          list: [
            "Preko 40 godina tradicije: Decenije zadovoljnih klijenata su naša najbolja preporuka.",
            "Sinergija sa brendom LJUBENKOVIĆ: Kompletna rešenja za stolariju i roletne na jednom mestu.",
            "Zaokružen proces proizvodnje: Sve proizvode i staklopakete izrađujemo unutar kompanije, što garantuje brži rok isporuke i strogu kontrolu.",
            "Najbolji svetski i domaći brendovi: Stolarija izrađena od sistema vodećih proizvođača (GEALAN, Kömmerling, ALUMIL, AKPA, ALURIS).",
            "Evropski sertifikati: Proizvodi spremni za izvoz u EU koji zadovoljavaju najviše standarde građevinske industrije.",
            "Stručan tim: Naši monteri su licencirani za najzahtevnije projekte i energetski efikasnu ugradnju.",
          ],
        },
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
    categories: {
      eyebrow: "Kategorije",
      title: "Sistemi spremni za porudžbinu",
      items: [
        ["01", "ALU sistemi", "prozori, vrata, fasadne pozicije"],
        ["02", "PVC sistemi", "stolarija, profili i gotovi elementi"],
      ],
    },
    gealan: {
      eyebrow: "GEALAN PVC sistemi",
      title: "Nemački GEALAN profili – vrhunska termoizolacija i moderna geometrija.",
      intro:
        "Kompanija EVROMETAL u svom proizvodnom asortimanu nudi visokokvalitetne prozorske sisteme izrađene od vodećih nemačkih PVC profila: GEALAN S 9000, GEALAN S 8000 i GEALAN Linear. U nastavku je detaljan prikaz tehničkih karakteristika, opisa i proračuna termoizolacije za gotove prozore, uzimajući u obzir standardnu ugradnju trostrukog izolacionog stakla (4+16+4+16+4 sa dva niskoemisiona sloja i argonom, Ug = 0.6 W/m²K).",
      comparisonTitle: "Uporedni pregled tehničkih karakteristika profila",
      comparisonNote:
        "Za gotove prozore sa trostrukim staklom, prenos toplote kroz ceo prozor (Uw) izračunava se kombinacijom izolacije profila (Uf) i stakla (Ug):",
      comparisonHeaders: ["Karakteristika", "GEALAN S 9000 (Premium)", "GEALAN Linear (Modern)", "GEALAN S 8000 (Klasik)"],
      comparisonRows: [
        ["Ugradna dubina", "82.5 mm", "74 mm", "74 mm"],
        ["Broj komora", "6 komora", "6 komora", "5 ili 6 komora"],
        ["Broj zaptivnih guma", "3 (srednji dihtung)", "3 (srednji dihtung)", "2 (prislone gume)"],
        ["Izolacija profila (Uf)", "~ 0.92 W/m²K", "~ 1.0 W/m²K", "~ 1.2 W/m²K"],
        ["Izolacija prozora (Uw) uz trostruko staklo (Ug = 0.6)", "~ 0.78 – 0.80 W/m²K", "~ 0.85 – 0.89 W/m²K", "~ 0.95 – 1.05 W/m²K"],
        ["Zvučna izolacija", "do 47 – 49 dB", "do 47 dB", "do 40 – 44 dB"],
        ["Maksimalna debljina stakla", "do 52 mm", "do 48 mm", "do 48 mm"],
      ],
      descriptionTitle: "Opis",
      glassTitle: "Prozor sa trostrukim staklom",
      geometryTitle: "Vizuelni prikaz i geometrija",
      geometryNote: "Konstruktivni crtež",
      techTitle: "Tehničke karakteristike",
      products: [
        {
          name: "GEALAN S 9000",
          tagline: "Sistem za pasivne kuće i maksimalnu uštedu",
          description:
            "Vrhunski kombi-sistem koji spaja prednosti srednjeg i prislonog zaptivanja. Velika ugradna dubina i tri nivoa zaptivanja čine ga idealnim izborom za niskoenergetske i pasivne objekte. Fleksibilna srednja zaptivna guma štiti okove od vlage.",
          tripleGlass:
            "Zahvaljujući masivnom profilu, prozor sa trostrukim staklom dostiže impresivnih Uw ≈ 0.80 W/m²K, što sprečava bilo kakav gubitak toplote.",
          image: "/images/gealan/s-9000-technik.avif",
          specs: [
            ["Sistem profila", "S 9000"],
            ["Ugradna dubina", "82,5 mm"],
            ["Izvedbe", "bela, GEALAN-acrylcolor®, dekor folije, aluminijumske prednje obloge, BALANCE"],
            ["Visina preklopa", "Okvir: 26 mm · Krilo: 18 mm + 26 mm"],
            ["Maksimalna debljina stakla", "do 56 mm (sa zaptivnom gumom), do 58 mm (STV®)"],
            ["Uf vrednost", "do 0,89 W/(m²K)"],
            ["Vrste izvedbi", "rešenja za prozore, rešenja za ulazna vrata, podizno-klizna vrata"],
            ["Nepropusnost na kišu (DIN EN 12208)", "do klase 9A"],
            ["Propusnost vazduha (DIN EN 12207)", "do klase 4"],
            ["Otpor na vetar (DIN EN 12210)", "do klase C5/B5"],
            ["Udarna čvrstoća (DIN EN 13049)", "do klase 2"],
            ["Zvučna izolacija", "34 do 45 dB"],
          ],
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalistički dizajn i savremena arhitektura",
          description:
            "Najnovija evolucija u segmentu profila od 74 mm. Karakterišu ga ravne, oštre linije i minimalistički izgled koji propušta maksimalnu količinu svetlosti u prostor. Iako uži, poseduje 6 komora i 3 zaptivne gume (centralni dihtung), što je jedinstveno za ovu klasu dubine.",
          tripleGlass:
            "Sa ugrađenim trostrukim paketom, EVROMETAL Linear prozor ostvaruje odličnu vrednost od Uw ≈ 0.89 W/m²K, kombinujući modernu estetiku sa visokom energetskom efikasnošću.",
          image: "/images/gealan/gealan-linear-technik.avif",
          specs: [
            ["Sistem profila", "GEALAN-LINEAR®"],
            ["Dubina sistema", "74 mm"],
            ["Izvedbe", "bela, GEALAN-acrylcolor®, dekor folije, aluminijumska obloga"],
            ["Visina preklopa", "Okvir: 26 mm · Krilo: 18 mm"],
            ["Maksimalna debljina stakla", "do 48 mm (sa zaptivnom gumom), do 50 mm (STV®)"],
            ["Uf vrednost", "do 1,0 W/(m²K)"],
            ["Vrste izvedbi", "rešenja za prozore, rešenja za ulazna vrata, klizna rešenja"],
            ["Nepropusnost na jaku kišu (DIN EN 12208)", "do klase 9A"],
            ["Propusnost vazduha (DIN EN 12207)", "do klase 4"],
            ["Opterećenje vetrom (DIN EN 12210)", "do klase C5/B5"],
            ["Otpornost na udarce", "do klase 3"],
            ["Zvučna izolacija", "34 do 47 dB"],
          ],
        },
        {
          name: "GEALAN S 8000",
          tagline: "Pouzdana klasika i najbolji odnos cene i kvaliteta",
          description:
            "Ekonomičan sistem sa dubinom ugradnje od 74 mm i prislonim zaptivanjem (2 dihtunga). Konstruisan je sa velikom glavnom komorom namenjenom za postavljanje robusnih čeličnih ojačanja, što mu daje izuzetnu statičku stabilnost kod izrade velikih prozorskih elemenata.",
          tripleGlass:
            "Kod ugradnje trostrukog stakla debljine do 48 mm, gotov prozor postiže stabilnih Uw ≈ 1.0 W/m²K. Predstavlja idealan balans za standardnu stanogradnju i renoviranja gde se traži dokazan nemački kvalitet uz optimalan budžet.",
          image: "/images/gealan/s-8000-technik.avif",
          specs: [
            ["Sistem profila", "S 8000"],
            ["Dubina sistema", "74 mm"],
            ["Varijante", "bela, dekorativna folija, BALANCE"],
            ["Visina preklopa", "Okvir: 18/20 mm · Krilo: 18/20 mm"],
            ["Maksimalna debljina stakla", "do 48 mm (sa zaptivnom gumom), do 50 mm (STV®)"],
            ["Uf vrednost", "do 1,2 W/(m²K)"],
            ["Tipovi", "rešenja za prozore, rešenja za ulazna vrata"],
            ["Nepropusnost na kišu (DIN EN 12208)", "do klase 9A"],
            ["Propusnost vazduha (DIN EN 12207)", "do klase 4"],
            ["Opterećenje vetrom (DIN EN 12210)", "do klase C5/B5"],
            ["Otpornost na udarce", "do klase 4"],
            ["Zvučna izolacija", "34 do 47 dB"],
          ],
        },
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
      pdfLabel: "Preuzmi Evrocert PDF",
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
    error: {
      title: "Došlo je do greške",
      message:
        "Izvinjavamo se, došlo je do neočekivane greške. Molimo osvežite stranicu.",
      retry: "Osveži stranicu",
    },
    meta: {
      title: "Evrometal | ALU, PVC i stakleni sistemi",
      description:
        "Evrometal proizvodi, isporučuje i montira aluminijumske i PVC sisteme, termopan staklo, okove, profile i prateći materijal za B2B projekte.",
      keywords: [
        "Evrometal",
        "aluminijumska stolarija",
        "PVC stolarija",
        "ALU profili",
        "termopan staklo",
        "Petrovac na Mlavi",
      ],
    },
    aria: {
      home: "Evrometal početna",
      menu: "Otvori navigaciju",
    },
    contactApi: {
      notConfigured:
        "Email servis nije konfigurisan. Molimo kontaktirajte administratora.",
      sendError: "Greška pri slanju mejla. Molimo pokušajte ponovo.",
      success: "Poruka je uspešno poslata!",
      genericError: "Došlo je do greške. Molimo pokušajte ponovo.",
    },
  },
  en: {
    nav: { home: "Home", about: "About", products: "Products", references: "References", faq: "FAQ", contact: "Contact", quote: "Request quote", subtitle: "ALU / PVC systems", pvcSystems: "PVC systems", aluSystems: "ALU systems", comingSoon: "Coming soon" },
    search: {
      placeholder: "Search products...",
      seeAll: "See all results",
      noResults: "No products found",
      results: "results",
    },
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
      eyebrow: "About us",
      title: "EVROMETAL – Tradition of quality and innovation in joinery.",
      imageAlt: "Aluminium and PVC joinery production",
      intro:
        "With over 40 years of successful operations, EVROMETAL is synonymous with reliability, top quality and longevity. From a craft workshop to a market leader, our goal has remained the same: to deliver premium PVC and aluminium joinery that transforms your home or business space. We combine decades of experience with the latest technologies to provide maximum energy efficiency, safety and aesthetically perfect design.",
      sections: [
        {
          title: "A new era: EVROMETAL and LJUBENKOVIĆ",
          paragraphs: [
            "The year 2025 brought a major strategic turning point for our company. EVROMETAL became a proud part of LJUBENKOVIĆ, a renowned leader in the production of premium roller shutters and sun protection systems.",
            "This acquisition brought together two leading forces in the industry. By combining the EVROMETAL brand tradition with LJUBENKOVIĆ's innovative solutions, we offer our clients a unique \"everything in one place\" concept – from the highest quality windows and doors to premium roller shutters and related equipment.",
          ],
          list: [],
        },
        {
          title: "Our production programme",
          paragraphs: [],
          list: [
            "PVC joinery: Made from the highest quality multi-chamber profiles guaranteeing superior thermal and acoustic insulation.",
            "Aluminium joinery: Elegant, modern and extremely durable solutions, ideal for large glass surfaces and contemporary architecture.",
            "LJUBENKOVIĆ roller shutter systems: Premium protection from light, external influences and unwanted views, perfectly integrated with our joinery.",
            "Own glass unit centre (New from 2026): Complete in-house glass production for maximum energy efficiency.",
          ],
        },
        {
          title: "Speciality: 100% own glass units and professional RAL installation",
          paragraphs: [
            "Since glass makes up over 70% of every window's surface, its role in insulation is crucial. From 2026, EVROMETAL has launched its own state-of-the-art line for glass unit production. With us you get a product that is fully designed, manufactured and controlled within our company.",
            "We offer highly efficient triple-glazed glass as well as argon-filled low-emission (Low-E) glass. This technology retains heat in winter and prevents overheating in summer.",
            "A top-quality window loses its function if not installed properly. That is why EVROMETAL proudly highlights its second major speciality – RAL installation. Unlike classic foam installation, RAL installation is performed according to strict European standards using special vapour-permeable and water-resistant tapes.",
          ],
          list: [],
        },
        {
          title: "Benefits of our production and RAL installation",
          paragraphs: [],
          list: [
            "Maximum energy efficiency: The combination of our argon-filled Low-E triple-glazed units with RAL installation drastically reduces heating and cooling costs.",
            "Stop to moisture and mould: RAL installation and perfectly sealed glass units completely prevent moisture, mould and condensation around windows.",
            "Perfect acoustic insulation: We insulate your space from outside noise and create a peaceful ambience inside your home.",
          ],
        },
        {
          title: "Why choose EVROMETAL?",
          paragraphs: [],
          list: [
            "Over 40 years of tradition: Decades of satisfied clients are our best recommendation.",
            "Synergy with the LJUBENKOVIĆ brand: Complete joinery and roller shutter solutions in one place.",
            "Complete production process: We manufacture all products and glass units in-house, guaranteeing faster delivery times and strict control.",
            "Best global and domestic brands: Joinery made from systems of leading manufacturers (GEALAN, Kömmerling, ALUMIL, AKPA, ALURIS).",
            "European certificates: Products ready for EU export meeting the highest construction industry standards.",
            "Expert team: Our installers are licensed for the most demanding projects and energy-efficient installation.",
          ],
        },
      ],
    },

    flow: {
      eyebrow: "From request to site",
      title: "A workflow that reduces operational risk for investors.",
      text: "Customers can order materials, finished products or complete delivery with installation. Products are transported with company vehicles and installed on site.",
      steps: [["Specification", "Profile, glass, hardware, colour and installation method are defined according to the building and expected load."], ["Production", "ALU/PVC elements, insulated glass, shutters, screens, doors, gates and fences are produced in a controlled process."], ["Transport", "Finished products are transported with company vehicles and prepared for on-site installation."], ["Installation", "The team performs installation, mechanical or remote opening setup and final position control."], ["Warranty", "The warranty covers the product, installation and assembly according to the system and project type."]],
    },
    categories: { eyebrow: "Categories", title: "Systems ready for specification", items: [["01", "ALU systems", "windows, doors, facade positions"], ["02", "PVC systems", "joinery, profiles and finished elements"]] },
    gealan: {
      eyebrow: "GEALAN PVC systems",
      title: "German GEALAN profiles – superior thermal insulation and modern geometry.",
      intro:
        "EVROMETAL's production range includes high-quality window systems made from leading German PVC profiles: GEALAN S 9000, GEALAN S 8000 and GEALAN Linear. Below is a detailed overview of technical characteristics, descriptions and thermal insulation calculations for finished windows, assuming standard installation of triple-glazed insulating glass (4+16+4+16+4 with two low-emissivity coatings and argon, Ug = 0.6 W/m²K).",
      comparisonTitle: "Comparative overview of profile technical characteristics",
      comparisonNote:
        "For finished windows with triple glazing, heat transfer through the entire window (Uw) is calculated by combining profile insulation (Uf) and glass insulation (Ug):",
      comparisonHeaders: ["Characteristic", "GEALAN S 9000 (Premium)", "GEALAN Linear (Modern)", "GEALAN S 8000 (Classic)"],
      comparisonRows: [
        ["Installation depth", "82.5 mm", "74 mm", "74 mm"],
        ["Number of chambers", "6 chambers", "6 chambers", "5 or 6 chambers"],
        ["Number of gaskets", "3 (central gasket)", "3 (central gasket)", "2 (compression gaskets)"],
        ["Profile insulation (Uf)", "~ 0.92 W/m²K", "~ 1.0 W/m²K", "~ 1.2 W/m²K"],
        ["Window insulation (Uw) with triple glazing (Ug = 0.6)", "~ 0.78 – 0.80 W/m²K", "~ 0.85 – 0.89 W/m²K", "~ 0.95 – 1.05 W/m²K"],
        ["Sound insulation", "up to 47 – 49 dB", "up to 47 dB", "up to 40 – 44 dB"],
        ["Maximum glass thickness", "up to 52 mm", "up to 48 mm", "up to 48 mm"],
      ],
      descriptionTitle: "Description",
      glassTitle: "Window with triple glazing",
      geometryTitle: "Visual representation and geometry",
      geometryNote: "Construction drawing",
      techTitle: "Technical characteristics",
      products: [
        {
          name: "GEALAN S 9000",
          tagline: "System for passive houses and maximum savings",
          description:
            "A premium combination system that combines the advantages of central and compression sealing. Its large installation depth and three sealing levels make it ideal for low-energy and passive buildings. The flexible central gasket protects hardware from moisture.",
          tripleGlass:
            "Thanks to its massive profile, a window with triple glazing achieves an impressive Uw ≈ 0.80 W/m²K, preventing any heat loss.",
          image: "/images/gealan/s-9000-technik.avif",
          specs: [
            ["Profile system", "S 9000"],
            ["System depth", "82.5 mm"],
            ["Versions", "white, GEALAN-acrylcolor®, decorative foils, aluminium cladding, BALANCE"],
            ["Rebate height", "Frame: 26 mm · Sash: 18 mm + 26 mm"],
            ["Maximum glass thickness", "up to 56 mm (with gasket), up to 58 mm (STV®)"],
            ["Uf value", "up to 0.89 W/(m²K)"],
            ["Types", "window solutions, entrance door solutions, lift-and-slide doors"],
            ["Rain-tightness (DIN EN 12208)", "up to class 9A"],
            ["Air permeability (DIN EN 12207)", "up to class 4"],
            ["Wind load (DIN EN 12210)", "up to class C5/B5"],
            ["Impact resistance (DIN EN 13049)", "up to class 2"],
            ["Sound insulation", "34 to 45 dB"],
          ],
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalist design and contemporary architecture",
          description:
            "The latest evolution in the 74 mm profile segment. It is characterised by straight, sharp lines and a minimalist look that lets the maximum amount of light into the space. Although slimmer, it features 6 chambers and 3 gaskets (central gasket), which is unique for this depth class.",
          tripleGlass:
            "With the installed triple-glazing package, the EVROMETAL Linear window achieves an excellent value of Uw ≈ 0.89 W/m²K, combining modern aesthetics with high energy efficiency.",
          image: "/images/gealan/gealan-linear-technik.avif",
          specs: [
            ["Profile system", "GEALAN-LINEAR®"],
            ["System construction depth", "74 mm"],
            ["Versions", "white, GEALAN-acrylcolor®, decorative foils, aluminium cladding"],
            ["Rebate height", "Frame: 26 mm · Sash: 18 mm"],
            ["Maximum glass thickness", "up to 48 mm (with gasket), up to 50 mm (STV®)"],
            ["Uf value", "up to 1.0 W/(m²K)"],
            ["Types", "window solutions, entrance door solutions, sliding solutions"],
            ["Heavy rain-tightness (DIN EN 12208)", "up to class 9A"],
            ["Air permeability (DIN EN 12207)", "up to class 4"],
            ["Wind load (DIN EN 12210)", "up to class C5/B5"],
            ["Impact resistance", "up to class 3"],
            ["Sound insulation", "34 to 47 dB"],
          ],
        },
        {
          name: "GEALAN S 8000",
          tagline: "Reliable classic and best value for money",
          description:
            "An economical system with an installation depth of 74 mm and compression sealing (2 gaskets). It is built with a large main chamber designed for robust steel reinforcements, giving it exceptional static stability in the production of large window elements.",
          tripleGlass:
            "When installing triple glazing up to 48 mm thick, the finished window achieves a stable Uw ≈ 1.0 W/m²K. It represents the ideal balance for standard residential construction and renovations where proven German quality at an optimal budget is required.",
          image: "/images/gealan/s-8000-technik.avif",
          specs: [
            ["Profile system", "S 8000"],
            ["System construction depth", "74 mm"],
            ["Variants", "white, decorative foil, BALANCE"],
            ["Rebate height", "Frame: 18/20 mm · Sash: 18/20 mm"],
            ["Maximum glass thickness", "up to 48 mm (with gasket), up to 50 mm (STV®)"],
            ["Uf value", "up to 1.2 W/(m²K)"],
            ["Types", "window solutions, entrance door solutions"],
            ["Rain-tightness (DIN EN 12208)", "up to class 9A"],
            ["Air permeability (DIN EN 12207)", "up to class 4"],
            ["Wind load (DIN EN 12210)", "up to class C5/B5"],
            ["Impact resistance", "up to class 4"],
            ["Sound insulation", "34 to 47 dB"],
          ],
        },
      ],
    },
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
    certs: { eyebrow: "Certificates and warranties", title: "Standardised quality, tested products and multi-year warranties.", text: "Evrometal holds certificates confirming compliance with ISO 9001 quality standards. Products are tested by the Serbian Institute of Measures - IMS Belgrade and meet domestic and international standard requirements.", imageAlt: "Evrometal ISO certificate", items: ["ISO 9001", "IMS tests", "EU standards", "Installation warranty"], pdfLabel: "Download Evrocert PDF" },
    contact: { eyebrow: "Contact and quotes", title: "Send a request for a quote, specification or B2B cooperation.", text: "Evrometal d.o.o, Industrial zone bb, 12300 Petrovac na Mlavi. Sales, production, warehouse and installation operate as one workflow, giving buyers clear technical and logistical support.", phoneLabels: ["Main office", "Sales", "Production", "Warehouse"] },
    footer: { rights: "All rights reserved." },
    productPage: { back: "Back to products", eyebrow: "Evrometal product", fallback: "Technical system available for project specification, production, delivery and B2B enquiries.", quote: "Request quote", call: "Call sales", cards: [["Application", "windows, doors, facade and project positions"], ["Support", "specification, delivery and installation consultations"], ["Quality", "tested systems, standardised production and warranties"]] },
    error: {
      title: "An error occurred",
      message:
        "We apologize, an unexpected error occurred. Please refresh the page.",
      retry: "Refresh page",
    },
    meta: {
      title: "Evrometal | ALU, PVC and glass systems",
      description:
        "Evrometal produces, supplies and installs aluminium and PVC systems, insulated glass, hardware, profiles and accessories for B2B projects.",
      keywords: [
        "Evrometal",
        "aluminium joinery",
        "PVC joinery",
        "ALU profiles",
        "insulated glass",
        "Petrovac na Mlavi",
      ],
    },
    aria: {
      home: "Evrometal homepage",
      menu: "Open navigation",
    },
    contactApi: {
      notConfigured:
        "Email service is not configured. Please contact the administrator.",
      sendError: "Error sending email. Please try again.",
      success: "Message sent successfully!",
      genericError: "An error occurred. Please try again.",
    },
  },
  de: {
    nav: { home: "Start", about: "Über uns", products: "Produkte", references: "Referenzen", faq: "FAQ", contact: "Kontakt", quote: "Angebot anfragen", subtitle: "ALU / PVC Systeme", pvcSystems: "PVC-Systeme", aluSystems: "ALU-Systeme", comingSoon: "Demnächst" },
    search: {
      placeholder: "Produkte suchen...",
      seeAll: "Alle Ergebnisse anzeigen",
      noResults: "Keine Produkte gefunden",
      results: "Ergebnisse",
    },
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
      eyebrow: "Über uns",
      title: "EVROMETAL – Tradition von Qualität und Innovation in der Welt der Bauelemente.",
      imageAlt: "Produktion von Aluminium- und PVC-Bauelementen",
      intro:
        "Mit über 40 Jahren erfolgreicher Geschäftstätigkeit steht EVROMETAL für Zuverlässigkeit, höchste Qualität und Langlebigkeit. Von der Handwerkswerkstatt zum Marktführer – unser Ziel ist dasselbe geblieben: erstklassige PVC- und Aluminium-Bauelemente zu liefern, die Ihr Zuhause oder Geschäft verwandeln. Wir verbinden jahrzehntelange Erfahrung mit modernsten Technologien, um maximale Energieeffizienz, Sicherheit und ästhetisch perfektes Design zu bieten.",
      sections: [
        {
          title: "Eine neue Ära: EVROMETAL und LJUBENKOVIĆ",
          paragraphs: [
            "Das Jahr 2025 brachte einen großen strategischen Wendepunkt für unser Unternehmen. EVROMETAL wurde stolzer Teil der Firma LJUBENKOVIĆ, einem renommierten Marktführer in der Produktion hochwertiger Rollläden und Sonnenschutzsysteme.",
            "Diese Akquisition vereinte zwei führende Kräfte der Branche. Durch die Verbindung der Tradition der Marke EVROMETAL mit den innovativen Lösungen von LJUBENKOVIĆ bieten wir unseren Kunden ein einzigartiges „Alles an einem Ort“-Konzept – von Fenstern und Türen höchster Qualität bis zu erstklassigen Rollläden und Zubehör.",
          ],
          list: [],
        },
        {
          title: "Unser Produktionsprogramm",
          paragraphs: [],
          list: [
            "PVC-Bauelemente: Hergestellt aus hochwertigsten Mehrkammerprofilen, die hervorragende Wärme- und Schalldämmung garantieren.",
            "Aluminium-Bauelemente: Elegante, moderne und äußerst widerstandsfähige Lösungen, ideal für große Glasflächen und moderne Architektur.",
            "Rollladensysteme LJUBENKOVIĆ: Erstklassiger Schutz vor Licht, äußeren Einflüssen und unerwünschten Blicken, perfekt integriert mit unseren Bauelementen.",
            "Eigenes Isolierglaszentrum (Neu ab 2026): Komplette Glasproduktion in unserem Werk für maximale Energieeffizienz.",
          ],
        },
        {
          title: "Spezialität: 100% eigene Isoliergläser und professionelle RAL-Montage",
          paragraphs: [
            "Da Glas über 70% der Fläche jedes Fensters ausmacht, ist seine Rolle bei der Isolierung entscheidend. Ab 2026 hat EVROMETAL eine eigene, modernste Linie zur Herstellung von Isoliergläsern in Betrieb genommen. Bei uns erhalten Sie ein Produkt, das vollständig innerhalb unseres Unternehmens entworfen, hergestellt und kontrolliert wird.",
            "Wir bieten hocheffiziente Dreifachverglasungen sowie argonbefüllte Niedrigenergie- (Low-E-) Gläser. Diese Technologie hält im Winter die Wärme zurück und verhindert im Sommer eine Überhitzung der Räume.",
            "Ein hochwertiges Fenster verliert seine Funktion, wenn es nicht fachgerecht eingebaut wird. Deshalb hebt EVROMETAL stolz seine zweite große Spezialität hervor – die RAL-Montage. Im Gegensatz zum klassischen Einbau mit Schaum erfolgt die RAL-Montage nach strengen europäischen Standards mit speziellen dampfdurchlässigen und wasserdichten Bändern.",
          ],
          list: [],
        },
        {
          title: "Vorteile unserer Produktion und RAL-Montage",
          paragraphs: [],
          list: [
            "Maximale Energieeffizienz: Die Kombination unserer argonbefüllten Low-E-Dreifachverglasung mit RAL-Montage senkt Heiz- und Kühlkosten drastisch.",
            "Schluss mit Feuchtigkeit und Schimmel: RAL-Montage und perfekt abgedichtete Isoliergläser verhindern Feuchtigkeit, Schimmel und Kondensation rund um das Fenster vollständig.",
            "Perfekte Schalldämmung: Wir isolieren Ihren Raum vor Außenlärm und schaffen eine ruhige Atmosphäre im Haus.",
          ],
        },
        {
          title: "Warum EVROMETAL?",
          paragraphs: [],
          list: [
            "Über 40 Jahre Tradition: Jahrzehnte zufriedener Kunden sind unsere beste Empfehlung.",
            "Synergie mit der Marke LJUBENKOVIĆ: Komplette Lösungen für Bauelemente und Rollläden an einem Ort.",
            "Geschlossener Produktionsprozess: Alle Produkte und Isoliergläser fertigen wir im eigenen Haus – für schnellere Lieferzeiten und strenge Kontrolle.",
            "Beste internationale und heimische Marken: Bauelemente aus Systemen führender Hersteller (GEALAN, Kömmerling, ALUMIL, AKPA, ALURIS).",
            "Europäische Zertifikate: Produkte bereit für den EU-Export, die höchste Standards der Baubranche erfüllen.",
            "Fachkundiges Team: Unsere Monteure sind lizenziert für anspruchsvollste Projekte und energieeffizienten Einbau.",
          ],
        },
      ],
    },

    flow: {
      eyebrow: "Von Anfrage bis Objekt",
      title: "Ein Arbeitsablauf, der operatives Risiko reduziert.",
      text: "Kunden können Material, fertige Produkte oder komplette Lieferung mit Montage bestellen. Produkte werden mit eigenen Fahrzeugen transportiert und vor Ort montiert.",
      steps: [["Spezifikation", "Profil, Glas, Beschlag, Farbe und Montageart werden nach Objekt und erwarteter Belastung definiert."], ["Produktion", "ALU/PVC-Elemente, Isolierglas, Rollläden, Insektenschutz, Türen, Tore und Zäune entstehen in einem kontrollierten Prozess."], ["Transport", "Fertige Produkte werden mit eigenem Transport geliefert und für die Montage vorbereitet."], ["Montage", "Das Team montiert, richtet mechanische oder ferngesteuerte Öffnungen ein und prüft die Positionen."], ["Garantie", "Die Garantie umfasst Produkt, Einbau und Montage je nach System- und Projekttyp."]],
    },
    categories: { eyebrow: "Kategorien", title: "Systeme bereit für Spezifikation", items: [["01", "ALU-Systeme", "Fenster, Türen, Fassadenpositionen"], ["02", "PVC-Systeme", "Bauelemente, Profile und fertige Elemente"]] },
    gealan: {
      eyebrow: "GEALAN PVC-Systeme",
      title: "Deutsche GEALAN-Profile – erstklassige Wärmedämmung und moderne Geometrie.",
      intro:
        "Das Produktionsprogramm von EVROMETAL umfasst hochwertige Fenstersysteme aus führenden deutschen PVC-Profilen: GEALAN S 9000, GEALAN S 8000 und GEALAN Linear. Nachfolgend finden Sie eine detaillierte Übersicht der technischen Eigenschaften, Beschreibungen und Wärmedämmberechnungen für fertige Fenster bei standardmäßigem Einbau von Dreifach-Isolierglas (4+16+4+16+4 mit zwei niedrig emittierenden Schichten und Argon, Ug = 0,6 W/m²K).",
      comparisonTitle: "Vergleichende Übersicht der technischen Profileigenschaften",
      comparisonNote:
        "Bei fertigen Fenstern mit Dreifachverglasung wird der Wärmedurchgang durch das gesamte Fenster (Uw) aus der Dämmung des Profils (Uf) und des Glases (Ug) berechnet:",
      comparisonHeaders: ["Eigenschaft", "GEALAN S 9000 (Premium)", "GEALAN Linear (Modern)", "GEALAN S 8000 (Klassik)"],
      comparisonRows: [
        ["Einbautiefe", "82,5 mm", "74 mm", "74 mm"],
        ["Anzahl Kammern", "6 Kammern", "6 Kammern", "5 oder 6 Kammern"],
        ["Anzahl Dichtungen", "3 (Mitteldichtung)", "3 (Mitteldichtung)", "2 (Anschlagdichtungen)"],
        ["Profildämmung (Uf)", "~ 0,92 W/m²K", "~ 1,0 W/m²K", "~ 1,2 W/m²K"],
        ["Fensterdämmung (Uw) mit Dreifachglas (Ug = 0,6)", "~ 0,78 – 0,80 W/m²K", "~ 0,85 – 0,89 W/m²K", "~ 0,95 – 1,05 W/m²K"],
        ["Schalldämmung", "bis 47 – 49 dB", "bis 47 dB", "bis 40 – 44 dB"],
        ["Maximale Glasstärke", "bis 52 mm", "bis 48 mm", "bis 48 mm"],
      ],
      descriptionTitle: "Beschreibung",
      glassTitle: "Fenster mit Dreifachverglasung",
      geometryTitle: "Visuelle Darstellung und Geometrie",
      geometryNote: "Konstruktionszeichnung",
      techTitle: "Technische Eigenschaften",
      products: [
        {
          name: "GEALAN S 9000",
          tagline: "System für Passivhäuser und maximale Ersparnis",
          description:
            "Ein erstklassiges Kombisystem, das die Vorteile von Mittel- und Anschlagdichtung vereint. Die große Einbautiefe und drei Dichtungsebenen machen es zur idealen Wahl für Niedrigenergie- und Passivhäuser. Die flexible Mitteldichtung schützt die Beschläge vor Feuchtigkeit.",
          tripleGlass:
            "Dank des massiven Profils erreicht ein Fenster mit Dreifachverglasung beeindruckende Uw ≈ 0,80 W/m²K und verhindert so jeglichen Wärmeverlust.",
          image: "/images/gealan/s-9000-technik.avif",
          specs: [
            ["Profilsystem", "S 9000"],
            ["Einbautiefe", "82,5 mm"],
            ["Ausführungen", "Weiß, GEALAN-acrylcolor®, Dekorfolien, Aluminium-Vorsatzschalen, BALANCE"],
            ["Falzhöhe", "Rahmen: 26 mm · Flügel: 18 mm + 26 mm"],
            ["Maximale Glasstärke", "bis 56 mm (Dichtung), bis 58 mm (STV®)"],
            ["Uf-Wert", "bis 0,89 W/(m²K)"],
            ["Ausführungstypen", "Fensterlösungen, Haustürlösungen, Hebe-Schiebetüren"],
            ["Schlagregendichtheit (DIN EN 12208)", "bis Klasse 9A"],
            ["Luftdurchlässigkeit (DIN EN 12207)", "bis Klasse 4"],
            ["Windwiderstand (DIN EN 12210)", "bis Klasse C5/B5"],
            ["Stoßfestigkeit (DIN EN 13049)", "bis Klasse 2"],
            ["Schalldämmung", "34 bis 45 dB"],
          ],
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalistisches Design und moderne Architektur",
          description:
            "Die neueste Entwicklung im 74-mm-Profilsegment. Gekennzeichnet durch gerade, scharfe Linien und ein minimalistisches Erscheinungsbild, das maximales Licht in den Raum lässt. Trotz der schlankeren Bauweise bietet es 6 Kammern und 3 Dichtungen (Mitteldichtung) – einzigartig in dieser Tiefenklasse.",
          tripleGlass:
            "Mit dem eingebauten Dreifachglas-Paket erreicht das EVROMETAL Linear Fenster einen hervorragenden Wert von Uw ≈ 0,89 W/m²K und verbindet moderne Ästhetik mit hoher Energieeffizienz.",
          image: "/images/gealan/gealan-linear-technik.avif",
          specs: [
            ["Profilsystem", "GEALAN-LINEAR®"],
            ["Konstruktionstiefe des Systems", "74 mm"],
            ["Ausführungen", "Weiß, GEALAN-acrylcolor®, Dekorfolien, Aluminium-Vorsatzschalen"],
            ["Falzhöhe", "Rahmen: 26 mm · Flügel: 18 mm"],
            ["Maximale Glasstärke", "bis 48 mm (Dichtung), bis 50 mm (STV®)"],
            ["Uf-Wert", "bis 1,0 W/(m²K)"],
            ["Typen", "Fensterlösungen, Haustürlösungen, Schiebelösungen"],
            ["Schlagregendichtheit (DIN EN 12208)", "bis Klasse 9A"],
            ["Luftdurchlässigkeit (DIN EN 12207)", "bis Klasse 4"],
            ["Windlast (DIN EN 12210)", "bis Klasse C5/B5"],
            ["Stoßfestigkeit", "bis Klasse 3"],
            ["Schalldämmung", "34 bis 47 dB"],
          ],
        },
        {
          name: "GEALAN S 8000",
          tagline: "Zuverlässiger Klassiker und bestes Preis-Leistungs-Verhältnis",
          description:
            "Ein wirtschaftliches System mit einer Einbautiefe von 74 mm und Anschlagdichtung (2 Dichtungen). Konstruiert mit einer großen Hauptkammer für robuste Stahlverstärkungen, bietet es außergewöhnliche statische Stabilität bei der Herstellung großer Fensterelemente.",
          tripleGlass:
            "Mit Dreifachverglasung bis 48 mm Glasstärke erreicht das fertige Fenster stabile Uw ≈ 1,0 W/m²K. Es ist der ideale Kompromiss für den standardmäßigen Wohnungsbau und Renovierungen, wo bewährte deutsche Qualität zu einem optimalen Budget gefragt ist.",
          image: "/images/gealan/s-8000-technik.avif",
          specs: [
            ["Profilsystem", "S 8000"],
            ["Konstruktionstiefe des Systems", "74 mm"],
            ["Varianten", "Weiß, Dekorfolie, BALANCE"],
            ["Falzhöhe", "Rahmen: 18/20 mm · Flügel: 18/20 mm"],
            ["Maximale Glasstärke", "bis 48 mm (Dichtung), bis 50 mm (STV®)"],
            ["Uf-Wert", "bis 1,2 W/(m²K)"],
            ["Typen", "Fensterlösungen, Haustürlösungen"],
            ["Schlagregendichtheit (DIN EN 12208)", "bis Klasse 9A"],
            ["Luftdurchlässigkeit (DIN EN 12207)", "bis Klasse 4"],
            ["Windlast (DIN EN 12210)", "bis Klasse C5/B5"],
            ["Stoßfestigkeit", "bis Klasse 4"],
            ["Schalldämmung", "34 bis 47 dB"],
          ],
        },
      ],
    },
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
    certs: { eyebrow: "Zertifikate und Garantien", title: "Standardisierte Qualität, geprüfte Produkte und mehrjährige Garantien.", text: "Evrometal besitzt Zertifikate zur Erfüllung des Qualitätsstandards ISO 9001. Produkte werden vom Institut für Maße Serbiens - IMS Belgrad geprüft und erfüllen inländische und internationale Standards.", imageAlt: "Evrometal ISO-Zertifikat", items: ["ISO 9001", "IMS Prüfungen", "EU-Standards", "Montagegarantie"], pdfLabel: "Evrocert PDF herunterladen" },
    contact: { eyebrow: "Kontakt und Angebote", title: "Senden Sie eine Anfrage für Angebot, Spezifikation oder B2B-Zusammenarbeit.", text: "Evrometal d.o.o, Industriezone bb, 12300 Petrovac na Mlavi. Vertrieb, Produktion, Lager und Montage arbeiten als ein Prozess und geben Käufern klare technische und logistische Unterstützung.", phoneLabels: ["Zentrale", "Vertrieb", "Produktion", "Lager"] },
    footer: { rights: "Alle Rechte vorbehalten." },
    productPage: { back: "Zurück zu Produkten", eyebrow: "Evrometal Produkt", fallback: "Technisches System verfügbar für Projektspezifikation, Produktion, Lieferung und B2B-Anfragen.", quote: "Angebot anfragen", call: "Vertrieb anrufen", cards: [["Anwendung", "Fenster, Türen, Fassaden- und Projektpositionen"], ["Support", "Spezifikation, Lieferung und Beratung zur Montage"], ["Qualität", "geprüfte Systeme, standardisierte Produktion und Garantien"]] },
    error: {
      title: "Ein Fehler ist aufgetreten",
      message:
        "Es tut uns leid, es ist ein unerwarteter Fehler aufgetreten. Bitte aktualisieren Sie die Seite.",
      retry: "Seite aktualisieren",
    },
    meta: {
      title: "Evrometal | ALU-, PVC- und Glassysteme",
      description:
        "Evrometal produziert, liefert und montiert Aluminium- und PVC-Systeme, Isolierglas, Beschläge, Profile und Zubehör für B2B-Projekte.",
      keywords: [
        "Evrometal",
        "Aluminium-Bauelemente",
        "PVC-Bauelemente",
        "ALU-Profile",
        "Isolierglas",
        "Petrovac na Mlavi",
      ],
    },
    aria: {
      home: "Evrometal Startseite",
      menu: "Navigation öffnen",
    },
    contactApi: {
      notConfigured:
        "E-Mail-Dienst nicht konfiguriert. Bitte kontaktieren Sie den Administrator.",
      sendError:
        "Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.",
      success: "Nachricht erfolgreich gesendet!",
      genericError:
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    },
  },
};

