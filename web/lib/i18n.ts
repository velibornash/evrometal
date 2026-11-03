export const languages = [
  { code: "sr", label: "Srpski" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
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
      pvcSystemItems: [
        { label: "GEALAN", href: "#gealan" },
        { label: "Kömmerling", href: "#koemmerling" },
      ],
      aluSystemItems: [
        { label: "Aluminco", href: "#aluminco" },
        { label: "AKPA", href: "#akpa" },
      ],
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
        ["Aluminco / WEISS", "direktan uvoz profila"],
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
          title: "Prednosti naše proizvodnje i RAL montaže:",
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
            "Najbolji svetski i domaći brendovi: Stolarija izrađena od sistema vodećih proizvođača (GEALAN, Kömmerling, Aluminco, AKPA, ALURIS).",
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
        "Kompanija EVROMETAL u svom proizvodnom asortimanu nudi visokokvalitetne prozorske sisteme izrađene od vodećih nemačkih PVC profila: GEALAN S9000, GEALAN S8000 i GEALAN Linear. U nastavku je detaljan prikaz tehničkih karakteristika, opisa i proračuna termoizolacije za gotove prozore, uzimajući u obzir standardnu ugradnju trostrukog izolacionog stakla (4+16+4+16+4 sa dva niska emisiona sloja i argonom, Ug = 0.6 W/m²K).",
      comparisonTitle: "Uporedni pregled tehničkih karakteristika profila",
      comparisonNote:
        "Za gotove prozore sa trostrukim staklom, koeficijent prolaza toplote kroz ceo prozor Uw izračunava se kombinacijom koeficijenta prolaza toplote profila Uf i staklopaketa Ug",
      comparisonHeaders: ["Karakteristika", "GEALAN S9000 (Premium)", "GEALAN Linear (Modern)", "GEALAN S8000 (Klasik)"],
      comparisonRows: [
        ["Ugradna dubina", "82.5 mm", "74 mm", "74 mm"],
        ["Broj komora", "6 komora", "6 komora", "5 ili 6 komora"],
        ["Broj zaptivnih guma", "3 (srednji dihtung)", "3 (srednji dihtung)", "2 (prislone gume)"],
        ["Koeficijent prolaza toplote profila Uf", "~ 0.92 W/m²K", "~ 1.0 W/m²K", "~ 1.2 W/m²K"],
        ["Koeficijent prolaza toplote prozora Uw sa trostrukim staklopaketom Ug = 0,6 W/m²K", "~ 0.78 - 0.80 W/m²K", "~ 0.85 - 0.89 W/m²K", "~ 0.95 - 1.05 W/m²K"],
        ["Zvučna izolacija", "do 47 - 49 dB", "do 47 dB", "do 40 - 44 dB"],
        ["Maksimalna debljina stakla", "do 52 mm", "do 48 mm", "do 48 mm"],
      ],
      descriptionTitle: "Opis",
      glassTitle: "Prozor sa trostrukim staklom",
      geometryTitle: "Vizuelni prikaz i geometrija",
      geometryNote: "Konstruktivni crtež",
      techTitle: "Tehničke karakteristike",
      products: [
        {
          name: "GEALAN S9000",
          tagline: "Sistem za pasivne kuće i maksimalnu uštedu",
          description:
            "Vrhunski kombi-sistem koji spaja prednosti srednjeg i prislonog zaptivanja. Velika ugradna dubina i tri nivoa zaptivanja čine ga idealnim izborom za niskoenergetske i pasivne objekte. Fleksibilna srednja zaptivna guma štiti okove od vlage.",
          tripleGlass:
            "Zahvaljujući masivnom profilu, prozor sa trostrukim staklom dostiže impresivnih Uw ≈ 0,8 W/m²K, što sprečava bilo kakav gubitak toplote.",
          image: "/images/gealan/s-9000-technik.avif",
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalistički dizajn i savremena arhitektura",
          description:
            "Najnovija evolucija u segmentu profila od 74 mm. Karakterišu ga ravne, oštre linije i minimalistički izgled koji propušta maksimalnu količinu svetlosti u prostor. Iako uži, poseduje 6 komora i 3 zaptivne gume (centralni dihtung), što je jedinstveno za ovu klasu dubine.",
          tripleGlass:
            "Sa ugrađenim trostrukim paketom, EVROMETAL Linear prozor ostvaruje odličnu vrednost od Uw ≈ 0,89 W/m²K, kombinujući modernu estetiku sa visokom energetskom efikasnošću.",
          image: "/images/gealan/gealan-linear-technik.avif",
        },
        {
          name: "GEALAN S8000",
          tagline: "Pouzdana klasika i najbolji odnos cene i kvaliteta",
          description:
            "Ekonomičan sistem sa dubinom ugradnje od 74 mm i prislonim zaptivanjem (2 dihtunga). Konstruisan je sa velikom glavnom komorom namenjenom za postavljanje robusnih čeličnih ojačanja, što mu daje izuzetnu statičku stabilnost kod izrade velikih prozorskih elemenata.",
          tripleGlass:
            "Kod ugradnje trostrukog stakla debljine do 48 mm, gotov prozor postiže stabilnih Uw ≈ 1,0 W/m²K. Predstavlja idealan balans za standardnu stanogradnju i renoviranja gde se traži dokazan nemački kvalitet uz optimalan budžet.",
          image: "/images/gealan/s-8000-technik.avif",
        },
      ],
    },
    koemmerling: {
      eyebrow: "Kömmerling PVC sistemi",
      title: "Nemački Kömmerling profili – vrhunska termoizolacija i savremena geometrija.",
      intro:
        "Kompanija EVROMETAL u svom proizvodnom asortimanu nudi i vrhunske prozorske sisteme izrađene od renomiranih nemačkih PVC profila Kömmerling. Izbor sistema obuhvata Kömmerling 88mm (Premium), Kömmerling 76mm (Standard/Svestran) i Kömmerling 70mm (Ekonomik). Svi proračuni u nastavku urađeni su uz pretpostavku ugradnje standardnog visokoefikasnog trostrukog termoizolacionog stakla Ug = 0,60 W/m²K, punjenog argonom, sa dva niskoemisiona premaza.",
      comparisonTitle: "Uporedni pregled tehničkih karakteristika Kömmerling profila",
      comparisonNote:
        "Kombinacijom vrhunske toplotne izolacije rama (Uf) i trostrukog stakla dobijaju se izuzetne krajnje vrednosti toplotne izolacije celog prozora (Uw):",
      comparisonHeaders: ["Karakteristika", "Kömmerling 88 (Premium)", "Kömmerling 76 (MD/AD)", "Kömmerling 70 (Klasik)"],
      comparisonRows: [
        ["Ugradna dubina", "88 mm", "76 mm", "70 mm"],
        ["Broj komora", "7 komora", "5 ili 6 komora", "5 ili 6 komora"],
        ["Zaptivanje", "3 dihtung gume (Srednji MD)", "3 dihtunga (MD) ili 2 (AD)", "2 prislone gume (AD)"],
        ["Koeficijent prolaza toplote profila Uf", "0.95 W/m²K", "1.0 – 1.1 W/m²K", "~ 1.3 W/m²K"],
        ["Koeficijent prolaza toplote prozora Uw sa trostrukim staklopaketom Ug = 0,6 W/m²K", "~ 0.72 – 0.78 W/m²K", "~ 0.82 – 0.88 W/m²K", "~ 0.98 – 1.05 W/m²K"],
        ["Maksimalna debljina stakla", "do 56 / 58 mm", "do 48 / 50 mm", "do 40 mm"],
        ["Zvučna izolacija", "do 47 - 49 dB", "do 47 - 48 dB", "do 42 - 44 dB"],
      ],
      descriptionTitle: "Opis",
      glassTitle: "Prozor sa trostrukim staklom",
      geometryTitle: "Konstruktivni crtež geometrije profila",
      geometryNote: "",
      techTitle: "Tehničke karakteristike",
      products: [
        {
          name: "Kömmerling 88mm",
          tagline: "Vrhunski sistem za pasivne kuće",
          description:
            "Ekskluzivni 7-komorni sistem sa ugradnom dubinom od 88 mm. Dizajniran je da ispuni najstrože evropske ekološke zahteve i standarde za pasivne kuće. Poseduje centralni (srednji) zaptivni sistem koji stvara izolacionu barijeru i štiti hardver od atmosferskih uticaja.",
          tripleGlass:
            "Zahvaljujući velikoj ugradnoj dubini, omogućava montažu masivnih troslojnih stakala debljine i preko 50 mm. Krajnji koeficijent prolaza toplote prozora dostiže fantastičnih Uw ≈ 0,75 W/m²K, što garantuje maksimalnu uštedu energije.",
        },
        {
          name: "Kömmerling 76mm",
          tagline: "Inovativna zlatna sredina – MD i AD varijante",
          description:
            "Inovativna generacija profila koja predstavlja idealne proporcije i tanak vizuelni profil za veću propustljivost svetlosti. EVROMETAL ovaj sistem izrađuje u dve varijante zaptivanja: MD (sa srednjom zaptivnom gumom, 6 komora) i AD (sa dve prislone gume, 5 komora).",
          tripleGlass:
            "Konstrukcija bez problema nosi savremene troslojne pakete stakla debljine do 48–50 mm. Finalni prozor ostvaruje odličnu toplotnu vrednost od Uw ≈ 0,85 W/m²K (za MD varijantu), što u potpunosti zadovoljava visoke standarde moderne niskoenergetske gradnje.",
        },
        {
          name: "Kömmerling 70mm",
          tagline: "Klasik – Ekonomičan i proveren sistem",
          description:
            "Pouzdan, klasičan 5 ili 6-komorni sistem sa dubinom ugradnje od 70 mm i sistemom od dve prislone zaptivne gume (AD). Izuzetno je popularan za renoviranja stanova i zamenu stare stolarije zbog odličnog balansa između investicije i dobijenih performansi.",
          tripleGlass:
            "Iako kompaktnijih dimenzija, profil je projektovan tako da uspešno prihvata troslojne pakete stakla. Sa ugrađenim trostrukim staklom, prozor dostiže toplotnu izolaciju od oko Uw ≈ 1,0 W/m²K, što drastično unapređuje energetski razred starijih objekata.",
        },
      ],
      greenline: {
        title: "Ekološki i proizvodni standardi: Greenline tehnologija",
        text: "Važna karakteristika svih prozora koje EVROMETAL proizvodi od Kömmerling profila jeste greenline tehnologija. To znači da se u proizvodnji sirovog PVC-a ne koristi olovo, već ekološki prihvatljivi stabilizatori na bazi kalcijuma i cinka. Profili su 100% reciklabilni, pokazuju izuzetnu dugovečnost i otpornost na starenje i ekstremne vremenske uslove.",
      },
    },
    aluminco: {
      eyebrow: "Aluminco ALU sistemi",
      title: "Grčki Aluminco profili – aluminijumska stolarija za stambene i komercijalne objekte.",
      intro:
        "Kompanija EVROMETAL u svom proizvodnom asortimanu nudi visokokvalitetne aluminijumske prozorske i klizne sisteme izrađene od profila grčkog proizvođača Aluminco. U nastavku je detaljan pregled tehničkih karakteristika, opisa i performansi vodećih sistema, namenjen arhitektama, projektantima i izvođačima radova.",
      descriptionTitle: "Opis",
      specsTitle: "Tehničke karakteristike",
      schematicTitle: "Šematski prikaz",
      systems: [
        {
          name: "Aluminco W450",
          tagline: "Sistem visokih performansi sa termičkim prekidom",
          description:
            "Aluminco W450 je napredan, univerzalan sistem sa termičkim prekidom, razvijen kako bi ispunio savremene evropske standarde energetske efikasnosti i zvučne izolacije. Idealan je za stambene kuće, stanove, kao i za komercijalne prostore sa frekventnom upotrebom. Karakteriše ga izuzetna strukturna stabilnost uz zadržavanje minimalističkog dizajna i maksimalnog ulaska svetlosti. Sistem poseduje tri nivoa zaptivanja sa centralnom EPDM zaptivkom visokog kvaliteta.",
          specs: [
            ["Ugradna dubina rama", "67 mm"],
            ["Ugradna dubina krila", "75 mm"],
            ["Širina poliamida", "24 mm (ojačan staklenim vlaknima)"],
            ["Toplotna izolacija (Uf)", "2.2 - 2.6 W/m²K"],
            ["Zvučna izolacija (Rw)", "Do 43 dB"],
            ["Maksimalna debljina stakla", "20 mm - 40 mm (troslojno pakovanje)"],
            ["Klasa vazduhopropusnosti", "Klasa 4"],
            ["Klasa vodonepropusnosti", "Klasa E900"],
          ],
          image: "/images/aluminco/w450.png",
        },
        {
          name: "Aluminco W4750",
          tagline: "Visoko-izolacioni premium sistem",
          description:
            "W4750 je vrhunski profil dizajniran specijalno za projekte koji zahtevaju ekstremno niske toplotne gubitke. Sa ugrađenim poliamidima širine 39 mm, ovaj sistem pruža superiornu termičku zaštitu i dramatično smanjuje troškove grejanja i hlađenja. Profil je dodatno ojačan i prilagođen za ugradnju teških troslojnih staklo paketa sa argonskim punjenjem i niskoemisionim premazima.",
          specs: [
            ["Ugradna dubina rama", "76 mm"],
            ["Ugradna dubina krila", "84 mm"],
            ["Širina poliamida", "39 mm (izolovana komora)"],
            ["Toplotna izolacija (Uf)", "≥ 1.2 W/m²K"],
            ["Toplotna izolacija celog prozora (Uw)", "Do 0.85 W/m²K (sa vrhunskim staklom)"],
            ["Zastakljivanje", "Do 52 mm debljine stakla"],
            ["Okov", "Napredni perimetrijski sistem (Euro-Groove ili Alu 16)"],
          ],
          image: "/images/aluminco/w4750.png",
        },
        {
          name: "Aluminco W4900",
          tagline: "Sistem za pasivne kuće",
          description:
            "Sistem W4900 predstavlja apsolutni tehnološki vrh ponude kompanije Aluminco. Razvijen je ekskluzivno za objekte koji se grade po rigoroznim standardima pasivnih i energetski nezavisnih kuća. Sa impresivnim Uw koeficijentom koji ide ispod 0.78 W/m²K, ovaj sistem potpuno eliminiše termičke mostove i nudi vrhunsku zvučnu izolaciju koja pruža maksimalan komfor u urbanim zonama pod visokim nivoom buke.",
          specs: [
            ["Koeficijent toplotnog prolaza (Uw)", "≤ 0.78 W/m²K"],
            ["Namena", "Sertifikovane pasivne i eko-kuće"],
            ["Zaptivanje", "Ekstrudirane sunđeraste zaptivke visoke gustine"],
            ["Mehanička stabilnost", "Klasa izuzetne otpornosti na udare vetra (Klasa C5)"],
          ],
          image: "/images/aluminco/w4900.png",
        },
        {
          name: "Aluminco SL2450",
          tagline: "Premium klizni i podizno-klizni sistemi",
          description:
            "Klizni sistemi iz serije SL (kao i srodni AL200, AL220, AL250) rešavaju zahteve modernih arhitekata za kreiranje ogromnih staklenih zidova gde se spoljašnji i unutrašnji prostor spajaju bez vizuelnih prepreka. Podizno-klizni mehanizam omogućava da se masivna krila, težine do 400 kg, pokreću glatko i bez napora, jednim prstom. Poseban fokus je na tankom centralnom stubu (kuki) koji minimizira prekid vizure.",
          specs: [
            ["Maksimalna težina krila", "Do 400 kg (podizno-klizni mehanizam)"],
            ["Vidljiva širina srednjeg profila", "Svega 30 mm - 35 mm (Slim dizajn)"],
            ["Termička izolacija", "Poliamidne trake od 30 mm sa EPDM barijerama"],
            ["Maksimalne dimenzije krila", "Širina do 3000 mm, Visina do 3200 mm"],
            ["Šine za kretanje", "Inoks (nerđajući čelik) za dugotrajan ravnomeran hod"],
          ],
          image: "/images/aluminco/sl2450.png",
        },
      ],
      note:
        "Napomena: Tehnički podaci i vrednosti su informativnog karaktera i preuzeti su iz zvaničnih kataloga kompanije Aluminco. Prilikom izrade glavnih građevinskih projekata potrebno je konsultovati zvanične CAD/BIM baze proizvođača radi verifikacije statičkih proračuna.",
    },
    akpa: {
      eyebrow: "AKPA ALU sistemi",
      title: "Turski AKPA aluminijumski sistemi – termo i hladni sistemi, klizna i podizno-klizna rešenja.",
      intro:
        "Kompanija EVROMETAL u svom proizvodnom asortimanu nudi aluminijumske sisteme turskog proizvođača AKPA Aluminium. Dokumentacija je namenjena arhitektama, projektantima i izvođačima radova za potrebe specifikacije materijala i izrade radioničkih crteža.",
      descriptionTitle: "Opis",
      specsTitle: "Tehničke karakteristike",
      schematicTitle: "Šematski prikaz",
      materialSpecs: {
        title: "Opšte tehničke specifikacije materijala",
        items: [
          ["Legura i hemijski sastav", "EN AW 6060 / EN AW 6063 (EN 573-3)"],
          ["Termička obrada", "T5 i T6 (veštačko starenje)"],
          ["Sistem zaptivanja", "EPDM zaptivke, tri nivoa zaptivanja (spoljašnja, centralna, unutrašnja)"],
          ["Završna obrada", "Plastifikacija RAL (min. 60 µm, Qualicoat), eloksaža (Qualanod, 15-25 µm), Woodgrain premazi"],
        ],
      },
      comparisonTitle: "Sistemi sa prekinutim termičkim mostom (Termo sistemi)",
      comparisonNote:
        "Sistemi sa prekinutim termičkim mostom koriste poliamidne trake širine od 14 mm do 34 mm koje razdvajaju spoljašnju i unutrašnju zonu aluminijumskog profila, sprečavajući provođenje toplote i pojavu kondenzacije.",
      comparisonHeaders: ["Naziv sistema", "Dubina rama / krila", "Debljina stakla", "Glavne karakteristike i primena"],
      comparisonRows: [
        ["WD 55 Thermo", "55 mm / 65 mm", "Do 30 mm", "Ekonomičan sistem za stambene i poslovne objekte sa umerenim zahtevima izolacije. Poliamidna traka 14.8 mm."],
        ["WD 64 Thermo", "64 mm / 74 mm", "Do 44 mm", "Optimalan balans cene i performansi. Poliamidna traka 24 mm. Podržava dvoslojno i troslojno staklo."],
        ["WD 70 Thermo", "70 mm / 80 mm", "Do 50 mm", "Napredni termo sistem za energetski efikasne objekte. Visoke statičke performanse za veće otvore."],
        ["AKPA 80 Thermo", "80 mm / 90 mm", "Do 60 mm", "Premium sistem sa maksimalnim koeficijentom izolacije. Namenjen za pasivne kuće i ekstremne klimatske uslove."],
      ],
      systems: [
        {
          name: "HS 55 Thermo",
          tagline: "Podizno-klizni sistem",
          description:
            "Koristi napredni 'lift-and-slide' mehanizam gde se okretanjem ručice krilo podiže sa zaptivki i glatko klizi po inoks šinama. Pri zatvaranju, krilo se spušta i sopstvenom težinom vrši pritisak na zaptivke, čime se ostvaruju hermetičke performanse zaptivanja koje su neuporedivo bolje u odnosu na klasične klizne sisteme. Dubina rama iznosi 122 mm do 140 mm u zavisnosti od broja šina.",
          specs: [
            ["Dubina rama", "122 mm - 140 mm"],
            ["Maksimalna težina krila", "Do 400 kg"],
            ["Mehanizam", "Lift-and-slide (podizno-klizni)"],
            ["Vođice", "Inoks (nerđajući čelik)"],
          ],
        },
        {
          name: "S 35 Novaline / CS 35 Thermo",
          tagline: "Standardni klizni sistem",
          description:
            "Standardni klizni sistem sa prekinutim termičkim mostom. Kompaktne dimenzije i uski vidni profil idealni su za balkonska vrata gde se traži moderan, minimalistički dizajn.",
          specs: [
            ["Dubina rama", "35 mm (kompaktni profil)"],
            ["Termo prekid", "Da (poliamidne trake)"],
            ["Primena", "Balkonska vrata, minimalistički dizajn"],
          ],
        },
        {
          name: "S 32 Sliding System",
          tagline: "Hladni klizni sistem",
          description:
            "Ekonomičan sistem bez termo prekida. Koristi se za unutrašnje pregrade ili zatvaranje lođa i terasa koje ne komuniciraju direktno sa grejanim stambenim prostorom.",
          specs: [
            ["Dubina rama", "32 mm"],
            ["Termo prekid", "Ne (hladni sistem)"],
            ["Primena", "Unutrašnje pregrade, lođe, terase"],
          ],
        },
        {
          name: "Aldoks serija",
          tagline: "Hladni sistemi za enterijer (bez termo prekida)",
          description:
            "Istorijski najpoznatiji i najrasprostranjeniji aluminijumski sistem na tržištu. Dubina rama iznosi 45 mm. Odlikuje se izuzetno jednostavnom i brzom obradom na matricama. Prvenstveno se koristi za izradu unutrašnjih pregrada, vrata za kancelarije, magacine, vetrobranske prostore i industrijske objekte.",
          specs: [
            ["Dubina rama", "45 mm (Aldoks)"],
            ["Termo prekid", "Ne"],
            ["Primena", "Unutrašnje pregrade, kancelarijska vrata, magacini, industrijski objekti"],
          ],
        },
        {
          name: "WD 45 / WD 37",
          tagline: "Moderni hladni sistemi",
          description:
            "Moderniji hladni sistemi sa čistijim i ravnijim linijama u poređenju sa Aldoksom. Omogućavaju ugradnju skrivene šarke i integraciju u savremene enterijerske fiksne zidove.",
          specs: [
            ["Dubina rama", "45 mm / 37 mm"],
            ["Termo prekid", "Ne"],
            ["Primena", "Savremeni enterijeri, skrivene šarke"],
          ],
        },
      ],
      certifications: {
        title: "Tehničke karakteristike i atesti",
        items: [
          "Vazdušna propusnost (EN 12207): Klasa 4 (maksimalna zaptivenost pri udarima vetra).",
          "Vodonepropusnost (EN 12208): Klasa 9A do E750 (zadržavanje prodora vode pri visokim pritiscima).",
          "Otpornost na vetar (EN 12210): Klasa C3 / B3 (minimalni ugib profilskog sklopa pod cikličnim opterećenjem).",
          "Toplotna izolativnost (EN ISO 10077-2): Uf od 1.6 W/m²K (AKPA 80) do 2.8 W/m²K (WD 55).",
        ],
      },
      asciiSchematics: [
        {
          title: "Šematski poprečni presek profilskog sklopa (WD 70 Thermo)",
          text: "      SPOLJAŠNJA STRANA                          UNUTRAŠNJA STRANA\n   +-----------------------+                +-----------------------+\n   |    Aluminijumski      |                |    Aluminijumski      |\n   |    spoljni profil     |==[POLIAMID]==  |    unutrašnji profil  |\n   |                       |==[  TRAKA  ]== |                       |\n   +----------+------------+                +------------+----------+\n              |     |                                    |     |\n              |     |======= Centralna zaptivka ========>|     |\n              +------------------------------------------+-----+\n              [================== STAKLO ==================]",
        },
        {
          title: "Šematski prikaz dvokanalne šine kliznog sistema (HS 55)",
          text: "       [ŠINA 1 - FIKSNO KRILO]            [ŠINA 2 - KLIZNO KRILO]\n      +-----------------------+          +-----------------------+\n      |  +-----------------+  |          |  +-----------------+  |\n      |  |     STAKLO      |  |          |  |     STAKLO      |  |\n      |  +-----------------+  |          |  |     STAKLO      |  |\n      +-----------+-----------+          +-----------+-----------+\n==================|==================================|==================\n   +--------------V--------------+    +--------------V--------------+\n   |  [Inoks vođica / Šina 1]   |    |  [Inoks vođica / Šina 2]   |\n   +-----------------------------+    +-----------------------------+\n   |_____________________ ZAJEDNIČKI RAM (122 mm) ___________________|",
        },
      ],
      note:
        "Napomena: Radioničke crteže, statičke proračune i drenažne otvore uvek prilagoditi konkretnoj mikrolokaciji i spratnosti objekta u skladu sa tehničkim uputstvima AKPA Aluminium.",
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
    gallery: { eyebrow: "Galerija", title: "Proizvodnja i proizvodi", production: "Proizvodnja", products: "Proizvodi" },
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
    nav: { home: "Home", about: "About", products: "Products", references: "References", faq: "FAQ", contact: "Contact", quote: "Request quote", subtitle: "ALU / PVC systems", pvcSystems: "PVC systems", aluSystems: "ALU systems", comingSoon: "Coming soon", pvcSystemItems: [{ label: "GEALAN", href: "#gealan" }, { label: "Kömmerling", href: "#koemmerling" }], aluSystemItems: [{ label: "Aluminco", href: "#aluminco" }, { label: "AKPA", href: "#akpa" }] },
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
      trust: [["Aluminco / WEISS", "direct profile import"], ["IMS testing", "standard-compliant products"], ["Transport + installation", "on-site delivery"]],
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
            "Best global and domestic brands: Joinery made from systems of leading manufacturers (GEALAN, Kömmerling, Aluminco, AKPA, ALURIS).",
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
        "In its product range, EVROMETAL offers high-quality window systems made from leading German PVC profiles: GEALAN S9000, GEALAN S8000 and GEALAN Linear. Below is a detailed presentation of the technical characteristics, description and calculation of thermal insulation for finished windows, taking into account the standard installation of triple insulating glass (4+16+4+16+4 with two low-emission layers and argon, Ug = 0,6 W/m²K).",
      comparisonTitle: "Comparative overview of the technical characteristics of the profile",
      comparisonNote:
        "For finished triple-glazed windows, the heat transfer through the entire window Uw is calculated by combining the profile insulation Uf and the glass Ug.",
      comparisonHeaders: ["Characteristics", "GEALAN S9000 (Premium)", "GEALAN Linear (Modern)", "GEALAN S8000 (Classic)"],
      comparisonRows: [
        ["Installation depth", "82.5 mm", "74 mm", "74 mm"],
        ["Number of chambers", "6", "6", "5 or 6"],
        ["Number of sealing gaskets", "3 (centre seal)", "3 (centre seal)", "2 (compression gaskets)"],
        ["Profile insulation Uf", "~ 0.92 W/m²K", "~ 1.0 W/m²K", "~ 1.2 W/m²K"],
        ["Window insulation Uw with triple glazing Ug = 0,6 W/m²K", "~ 0.78 - 0.80 W/m²K", "~ 0.85 - 0.89 W/m²K", "~ 0.95 - 1.05 W/m²K"],
        ["Sound insulation", "up to 47 - 49 dB", "up to 47 dB", "up to 40 - 44 dB"],
        ["Maximum glass thickness", "up to 52 mm", "up to 48 mm", "up to 48 mm"],
      ],
      descriptionTitle: "Description",
      glassTitle: "Window with triple glazing",
      geometryTitle: "Visual representation and geometry",
      geometryNote: "Construction drawing",
      techTitle: "Technical characteristics",
      products: [
        {
          name: "GEALAN S9000",
          tagline: "System for passive houses and maximum savings",
          description:
            "Superior combi-system that combines the advantages of centre and compression sealing. The large installation depth and three sealing levels make it an ideal choice for low-energy and passive buildings. The flexible centre sealing gasket protects fittings from moisture.",
          tripleGlass:
            "Thanks to the robust profile, the triple-glazed window reaches an impressive Uw ≈ 0,8 W/m²K, which effectively prevents heat loss.",
          image: "/images/gealan/s-9000-technik.avif",
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalist design and contemporary architecture",
          description:
            "The latest evolution in the 74 mm profile segment. It is characterised by straight, sharp lines and a minimalist look that lets the maximum amount of light into the space. Although narrower, it has 6 chambers and 3 rubber seals (centre gasket), which is unique for this depth class.",
          tripleGlass:
            "With the built-in triple glazing, the EVROMETAL Linear window achieves an excellent value of Uw ≈ 0,89 W/m²K, combining modern aesthetics with high energy efficiency.",
          image: "/images/gealan/gealan-linear-technik.avif",
        },
        {
          name: "GEALAN S8000",
          tagline: "Reliable classic and the best price–quality ratio",
          description:
            "Economical system with an installation depth of 74 mm and compression sealing (2 gaskets). It is constructed with a large main chamber intended for robust steel reinforcements, which gives it exceptional static stability when producing large window elements.",
          tripleGlass:
            "With triple glazing up to 48 mm thick, the finished window achieves a stable Uw ≈ 1,0 W/m²K. It represents the ideal balance for standard housing construction and renovations where proven German quality is required with an optimal budget.",
          image: "/images/gealan/s-8000-technik.avif",
        },
      ],
    },
    koemmerling: {
      eyebrow: "Kömmerling PVC systems",
      title: "German Kömmerling profiles – superior thermal insulation and modern geometry.",
      intro:
        "In its product range, EVROMETAL also offers top-quality window systems made from renowned German PVC profiles Kömmerling. The system selection includes Kömmerling 88 mm (Premium), Kömmerling 76 mm (Standard/Versatile) and Kömmerling 70 mm (Economy). All calculations below are made assuming the installation of standard high-efficiency triple insulating glass Ug = 0,6 W/m²K, filled with argon and with two low-emission coatings.",
      comparisonTitle: "Comparative overview of the technical characteristics of Kömmerling profiles",
      comparisonNote:
        "For finished triple-glazed windows, the heat transfer through the entire window Uw is calculated by combining the profile insulation Uf and the glass Ug.",
      comparisonHeaders: ["Characteristics", "Kömmerling 88 (Premium)", "Kömmerling 76 (MD/AD)", "Kömmerling 70 (Classic)"],
      comparisonRows: [
        ["Installation depth", "88 mm", "76 mm", "70 mm"],
        ["Number of chambers", "7", "5 or 6", "5 or 6"],
        ["Number of sealing gaskets", "3 (centre seal)", "3 (centre seal)", "2 (compression gaskets)"],
        ["Profile insulation Uf", "~ 0.95 W/m²K", "~ 1.0 W/m²K", "~ 1.3 W/m²K"],
        ["Window insulation Uw with triple glazing Ug = 0,6 W/m²K", "~ 0.73 - 0.80 W/m²K", "~ 0.82 - 0.88 W/m²K", "~ 0.98 - 1.05 W/m²K"],
        ["Sound insulation", "up to 47 - 49 dB", "up to 47-48 dB", "up to 42 - 44 dB"],
        ["Maximum glass thickness", "up to 58 mm", "up to 50 mm", "up to 40 mm"],
      ],
      descriptionTitle: "Description",
      glassTitle: "Window with triple glazing",
      geometryTitle: "Construction drawing of profile geometry",
      geometryNote: "",
      techTitle: "Technical characteristics",
      products: [
        {
          name: "Kömmerling 88 mm",
          tagline: "Top system for passive houses",
          description:
            "Exclusive 7-chamber system with an installation depth of 88 mm. It is designed to meet the strictest European environmental requirements and standards for passive houses. It has a central sealing system that creates an insulating barrier and protects the hardware from atmospheric influences.",
          tripleGlass:
            "Thanks to the large installation depth, it enables the installation of robust triple-glazed windows with a thickness of more than 50 mm. The final heat transfer coefficient of the window reaches Uw ≈ 0,75 W/m²K, which guarantees maximum energy savings.",
        },
        {
          name: "Kömmerling 76 mm",
          tagline: "Innovative golden mean – MD and AD variants",
          description:
            "An innovative profile generation that offers ideal proportions and a slim visual profile for increased light transmission. EVROMETAL produces this system in two sealing variants: MD (with a central sealing gasket, 6 chambers) and AD (with two adjacent gaskets, 5 chambers).",
          tripleGlass:
            "The structure easily supports modern triple-glazed units up to 48–50 mm thick. The finished window reaches an excellent heat transfer value of Uw ≈ 0,85 W/m²K (for the MD variant), fully meeting the high standards of modern low-energy construction.",
        },
        {
          name: "Kömmerling 70 mm",
          tagline: "Classic – economical and proven system",
          description:
            "A reliable, classic 5- or 6-chamber system with an installation depth of 70 mm and a system of two abutting sealing gaskets (AD). It is extremely popular for apartment renovations and replacing old joinery due to its excellent balance between investment and performance.",
          tripleGlass:
            "Although more compact, the profile is designed to successfully accommodate triple-glazed units. With installed triple glazing, the window achieves thermal insulation of about Uw ≈ 1,0 W/m²K, which drastically improves the energy class of older buildings.",
        },
      ],
      greenline: {
        title: "Ecological and production standards: greenline technology",
        text: "An important feature of all windows that EVROMETAL manufactures from Kömmerling profiles is the greenline® technology. This means that no lead is used in the production of raw PVC, but environmentally friendly stabilisers based on calcium and zinc. The profiles are 100% recyclable and offer exceptional longevity and resistance to ageing and extreme weather conditions.",
      },
    },
    aluminco: {
      eyebrow: "Aluminco ALU systems",
      title: "Greek Aluminco profiles – aluminium joinery for residential and commercial buildings.",
      intro:
        "EVROMETAL's production range includes high-quality aluminium window and sliding systems made from profiles of the Greek manufacturer Aluminco. Below is a detailed overview of the technical characteristics, descriptions and performance of the leading systems, intended for architects, designers and contractors.",
      descriptionTitle: "Description",
      specsTitle: "Technical characteristics",
      schematicTitle: "Schematic diagram",
      systems: [
        {
          name: "Aluminco W450",
          tagline: "High-performance system with thermal break",
          description:
            "Aluminco W450 is an advanced, universal system with a thermal break, developed to meet modern European standards of energy efficiency and sound insulation. It is ideal for residential houses, apartments as well as commercial spaces with frequent use. It is characterised by exceptional structural stability while retaining a minimalist design and maximum light intake. The system features three sealing levels with a high-quality central EPDM gasket.",
          specs: [
            ["Frame installation depth", "67 mm"],
            ["Sash installation depth", "75 mm"],
            ["Polyamide width", "24 mm (glass-fibre reinforced)"],
            ["Thermal insulation (Uf)", "2.2 - 2.6 W/m²K"],
            ["Sound insulation (Rw)", "Up to 43 dB"],
            ["Maximum glass thickness", "20 mm - 40 mm (triple glazing)"],
            ["Air permeability class", "Class 4"],
            ["Water tightness class", "Class E900"],
          ],
          image: "/images/aluminco/w450.png",
        },
        {
          name: "Aluminco W4750",
          tagline: "High-insulation premium system",
          description:
            "W4750 is a top-tier profile designed specifically for projects requiring extremely low heat losses. With built-in polyamides 39 mm wide, this system provides superior thermal protection and dramatically reduces heating and cooling costs. The profile is additionally reinforced and adapted for the installation of heavy triple-glazed units with argon filling and low-emission coatings.",
          specs: [
            ["Frame installation depth", "76 mm"],
            ["Sash installation depth", "84 mm"],
            ["Polyamide width", "39 mm (insulated chamber)"],
            ["Thermal insulation (Uf)", "≥ 1.2 W/m²K"],
            ["Whole-window thermal insulation (Uw)", "Up to 0.85 W/m²K (with premium glass)"],
            ["Glazing", "Up to 52 mm glass thickness"],
            ["Hardware", "Advanced perimeter system (Euro-Groove or Alu 16)"],
          ],
          image: "/images/aluminco/w4750.png",
        },
        {
          name: "Aluminco W4900",
          tagline: "System for passive houses",
          description:
            "The W4900 system represents the absolute technological peak of the Aluminco range. It was developed exclusively for buildings constructed to rigorous standards of passive and energy-independent houses. With an impressive Uw coefficient below 0.78 W/m²K, this system completely eliminates thermal bridges and offers supreme sound insulation providing maximum comfort in urban zones with high noise levels.",
          specs: [
            ["Heat transfer coefficient (Uw)", "≤ 0.78 W/m²K"],
            ["Purpose", "Certified passive and eco houses"],
            ["Sealing", "Extruded high-density sponge gaskets"],
            ["Mechanical stability", "Exceptional wind-load resistance class (Class C5)"],
          ],
          image: "/images/aluminco/w4900.png",
        },
        {
          name: "Aluminco SL2450",
          tagline: "Premium sliding and lift-and-slide systems",
          description:
            "Sliding systems from the SL series (and related AL200, AL220, AL250) solve the demands of modern architects for creating huge glass walls where exterior and interior space merge without visual barriers. The lift-and-slide mechanism allows massive sashes weighing up to 400 kg to move smoothly and effortlessly with one finger. Special focus is on the thin central mullion (hook) that minimises the visual interruption.",
          specs: [
            ["Maximum sash weight", "Up to 400 kg (lift-and-slide mechanism)"],
            ["Visible width of middle profile", "Only 30 mm - 35 mm (Slim design)"],
            ["Thermal insulation", "30 mm polyamide strips with EPDM barriers"],
            ["Maximum sash dimensions", "Width up to 3000 mm, Height up to 3200 mm"],
            ["Running rails", "Stainless steel (inox) for long-lasting even travel"],
          ],
          image: "/images/aluminco/sl2450.png",
        },
      ],
      note:
        "Note: Technical data and values are for informational purposes and taken from the official Aluminco catalogues. When preparing main construction projects, always consult the manufacturer's official CAD/BIM databases to verify static calculations.",
    },
    akpa: {
      eyebrow: "AKPA ALU systems",
      title: "Turkish AKPA aluminium systems – thermal-break and cold systems, sliding and lift-and-slide solutions.",
      intro:
        "EVROMETAL's production range includes aluminium systems by the Turkish manufacturer AKPA Aluminium. The documentation is intended for architects, designers and contractors for material specification and workshop drawing preparation.",
      descriptionTitle: "Description",
      specsTitle: "Technical characteristics",
      schematicTitle: "Schematic diagram",
      materialSpecs: {
        title: "General material technical specifications",
        items: [
          ["Alloy and chemical composition", "EN AW 6060 / EN AW 6063 (EN 573-3)"],
          ["Thermal treatment", "T5 and T6 (artificial ageing)"],
          ["Sealing system", "EPDM gaskets, three sealing levels (outer, central, inner)"],
          ["Surface finish", "Powder coating RAL (min. 60 µm, Qualicoat), anodising (Qualanod, 15-25 µm), Woodgrain coatings"],
        ],
      },
      comparisonTitle: "Thermal-break systems (Thermo systems)",
      comparisonNote:
        "Thermal-break systems use polyamide strips 14 mm to 34 mm wide that separate the outer and inner zones of the aluminium profile, preventing heat conduction and condensation.",
      comparisonHeaders: ["System name", "Frame / sash depth", "Glass thickness", "Main characteristics and application"],
      comparisonRows: [
        ["WD 55 Thermo", "55 mm / 65 mm", "Up to 30 mm", "Economical system for residential and commercial buildings with moderate insulation requirements. Polyamide strip 14.8 mm."],
        ["WD 64 Thermo", "64 mm / 74 mm", "Up to 44 mm", "Optimal balance of price and performance. Polyamide strip 24 mm. Supports double and triple glazing."],
        ["WD 70 Thermo", "70 mm / 80 mm", "Up to 50 mm", "Advanced thermo system for energy-efficient buildings. High static performance for larger openings."],
        ["AKPA 80 Thermo", "80 mm / 90 mm", "Up to 60 mm", "Premium system with maximum insulation coefficient. Intended for passive houses and extreme climate conditions."],
      ],
      systems: [
        {
          name: "HS 55 Thermo",
          tagline: "Lift-and-slide system",
          description:
            "Uses an advanced 'lift-and-slide' mechanism where turning the handle lifts the sash off the gaskets and it glides smoothly along stainless-steel rails. When closing, the sash drops and its own weight presses on the gaskets, achieving hermetic sealing performance far superior to classic sliding systems. Frame depth ranges from 122 mm to 140 mm depending on the number of rails.",
          specs: [
            ["Frame depth", "122 mm - 140 mm"],
            ["Maximum sash weight", "Up to 400 kg"],
            ["Mechanism", "Lift-and-slide"],
            ["Rails", "Stainless steel (inox)"],
          ],
        },
        {
          name: "S 35 Novaline / CS 35 Thermo",
          tagline: "Standard sliding system",
          description:
            "Standard sliding system with thermal break. Compact dimensions and a narrow visible profile are ideal for balcony doors where a modern, minimalist design is required.",
          specs: [
            ["Frame depth", "35 mm (compact profile)"],
            ["Thermal break", "Yes (polyamide strips)"],
            ["Application", "Balcony doors, minimalist design"],
          ],
        },
        {
          name: "S 32 Sliding System",
          tagline: "Cold sliding system",
          description:
            "Economical system without thermal break. Used for interior partitions or enclosing loggias and terraces that do not communicate directly with heated living spaces.",
          specs: [
            ["Frame depth", "32 mm"],
            ["Thermal break", "No (cold system)"],
            ["Application", "Interior partitions, loggias, terraces"],
          ],
        },
        {
          name: "Aldoks series",
          tagline: "Cold interior systems (no thermal break)",
          description:
            "The historically best-known and most widespread aluminium system on the market. Frame depth is 45 mm. It is characterised by extremely simple and fast machining on dies. Primarily used for making interior partitions, office doors, warehouses, windbreak spaces and industrial buildings.",
          specs: [
            ["Frame depth", "45 mm (Aldoks)"],
            ["Thermal break", "No"],
            ["Application", "Interior partitions, office doors, warehouses, industrial buildings"],
          ],
        },
        {
          name: "WD 45 / WD 37",
          tagline: "Modern cold systems",
          description:
            "More modern cold systems with cleaner and flatter lines compared to Aldoks. They allow the installation of concealed hinges and integration into modern interior fixed walls.",
          specs: [
            ["Frame depth", "45 mm / 37 mm"],
            ["Thermal break", "No"],
            ["Application", "Modern interiors, concealed hinges"],
          ],
        },
      ],
      certifications: {
        title: "Technical characteristics and certifications",
        items: [
          "Air permeability (EN 12207): Class 4 (maximum tightness under wind impact).",
          "Water tightness (EN 12208): Class 9A to E750 (retention of water penetration under high pressure).",
          "Wind resistance (EN 12210): Class C3 / B3 (minimum deflection of the profile assembly under cyclic load).",
          "Thermal insulation (EN ISO 10077-2): Uf from 1.6 W/m²K (AKPA 80) to 2.8 W/m²K (WD 55).",
        ],
      },
      asciiSchematics: [
        {
          title: "Schematic cross-section of the profile assembly (WD 70 Thermo)",
          text: "      EXTERIOR SIDE                          INTERIOR SIDE\n   +-----------------------+                +-----------------------+\n   |    Aluminium          |                |    Aluminium          |\n   |    outer profile      |==[POLYAMIDE]== |    inner profile      |\n   |                       |==[  STRIP  ]== |                       |\n   +----------+------------+                +------------+----------+\n              |     |                                    |     |\n              |     |======= Central gasket ============>|     |\n              +------------------------------------------+-----+\n              [================== GLASS ==================]",
        },
        {
          title: "Schematic view of the two-channel rail of the sliding system (HS 55)",
          text: "       [RAIL 1 - FIXED SASH]            [RAIL 2 - SLIDING SASH]\n      +-----------------------+          +-----------------------+\n      |  +-----------------+  |          |  +-----------------+  |\n      |  |     GLASS       |  |          |  |     GLASS       |  |\n      |  +-----------------+  |          |  |     GLASS       |  |\n      +-----------+-----------+          +-----------+-----------+\n==================|==================================|==================\n   +--------------V--------------+    +--------------V--------------+\n   |  [Stainless guide / Rail 1] |    |  [Stainless guide / Rail 2] |\n   +-----------------------------+    +-----------------------------+\n   |_____________________ COMMON FRAME (122 mm) _____________________|",
        },
      ],
      note:
        "Note: Workshop drawings, static calculations and drainage openings must always be adapted to the specific micro-location and building height in accordance with the AKPA Aluminium technical instructions.",
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
    gallery: { eyebrow: "Gallery", title: "Production and products", production: "Production", products: "Products" },
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
    nav: { home: "Start", about: "Über uns", products: "Produkte", references: "Referenzen", faq: "FAQ", contact: "Kontakt", quote: "Angebot anfragen", subtitle: "ALU / PVC Systeme", pvcSystems: "PVC-Systeme", aluSystems: "ALU-Systeme", comingSoon: "Demnächst", pvcSystemItems: [{ label: "GEALAN", href: "#gealan" }, { label: "Kömmerling", href: "#koemmerling" }], aluSystemItems: [{ label: "Aluminco", href: "#aluminco" }, { label: "AKPA", href: "#akpa" }] },
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
      trust: [["Aluminco / WEISS", "direkter Profilimport"], ["IMS Prüfungen", "Produkte nach Standard"], ["Transport + Montage", "Lieferung vor Ort"]],
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
            "Beste internationale und heimische Marken: Bauelemente aus Systemen führender Hersteller (GEALAN, Kömmerling, Aluminco, AKPA, ALURIS).",
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
        },
        {
          name: "GEALAN Linear",
          tagline: "Minimalistisches Design und moderne Architektur",
          description:
            "Die neueste Entwicklung im 74-mm-Profilsegment. Gekennzeichnet durch gerade, scharfe Linien und ein minimalistisches Erscheinungsbild, das maximales Licht in den Raum lässt. Trotz der schlankeren Bauweise bietet es 6 Kammern und 3 Dichtungen (Mitteldichtung) – einzigartig in dieser Tiefenklasse.",
          tripleGlass:
            "Mit dem eingebauten Dreifachglas-Paket erreicht das EVROMETAL Linear Fenster einen hervorragenden Wert von Uw ≈ 0,89 W/m²K und verbindet moderne Ästhetik mit hoher Energieeffizienz.",
          image: "/images/gealan/gealan-linear-technik.avif",
        },
        {
          name: "GEALAN S 8000",
          tagline: "Zuverlässiger Klassiker und bestes Preis-Leistungs-Verhältnis",
          description:
            "Ein wirtschaftliches System mit einer Einbautiefe von 74 mm und Anschlagdichtung (2 Dichtungen). Konstruiert mit einer großen Hauptkammer für robuste Stahlverstärkungen, bietet es außergewöhnliche statische Stabilität bei der Herstellung großer Fensterelemente.",
          tripleGlass:
            "Mit Dreifachverglasung bis 48 mm Glasstärke erreicht das fertige Fenster stabile Uw ≈ 1,0 W/m²K. Es ist der ideale Kompromiss für den standardmäßigen Wohnungsbau und Renovierungen, wo bewährte deutsche Qualität zu einem optimalen Budget gefragt ist.",
          image: "/images/gealan/s-8000-technik.avif",
        },
      ],
    },
    koemmerling: {
      eyebrow: "Kömmerling PVC-Systeme",
      title: "Deutsche Kömmerling-Profile – erstklassige Wärmedämmung und moderne Geometrie.",
      intro:
        "Das Produktionsprogramm von EVROMETAL umfasst auch erstklassige Fenstersysteme aus renommierten deutschen PVC-Profilen von Kömmerling. Die Systemauswahl umfasst Kömmerling 88 mm (Premium), Kömmerling 76 mm (Standard/Vielseitig) und Kömmerling 70 mm (Economy). Alle nachfolgenden Berechnungen basieren auf dem Einbau von standardmäßigem, hocheffizientem Dreifach-Isolierglas mit Ug = 0,6 W/m²K, gefüllt mit Argon und zwei niedrig emittierenden Beschichtungen.",
      comparisonTitle: "Vergleichende Übersicht der technischen Eigenschaften der Kömmerling-Profile",
      comparisonNote:
        "Bei fertigen Fenstern mit Dreifachverglasung wird der Wärmedurchgang durch das gesamte Fenster (Uw) aus der Dämmung des Profils (Uf) und des Glases (Ug) berechnet.",
      comparisonHeaders: ["Eigenschaft", "Kömmerling 88 (Premium)", "Kömmerling 76 (MD/AD)", "Kömmerling 70 (Klassik)"],
      comparisonRows: [
        ["Einbautiefe", "88 mm", "76 mm", "70 mm"],
        ["Anzahl Kammern", "7", "5 oder 6", "5 oder 6"],
        ["Anzahl Dichtungen", "3 (Mitteldichtung)", "3 (MD) oder 2 (AD)", "2 (Anschlagdichtungen)"],
        ["Profildämmung (Uf)", "~ 0,95 W/m²K", "~ 1,0 – 1,1 W/m²K", "~ 1,3 W/m²K"],
        ["Fensterdämmung (Uw) mit Dreifachglas (Ug = 0,6)", "~ 0,72 – 0,78 W/m²K", "~ 0,82 – 0,88 W/m²K", "~ 0,98 – 1,05 W/m²K"],
        ["Maximale Glasstärke", "bis 56 / 58 mm", "bis 48 / 50 mm", "bis 40 mm"],
        ["Schalldämmung", "bis 47 – 49 dB", "bis 47 – 48 dB", "bis 42 – 44 dB"],
      ],
      descriptionTitle: "Beschreibung",
      glassTitle: "Fenster mit Dreifachverglasung",
      geometryTitle: "Konstruktionszeichnung der Profilgeometrie",
      geometryNote: "",
      techTitle: "Technische Eigenschaften",
      products: [
        {
          name: "Kömmerling 88 mm",
          tagline: "Hochwertiges System für Passivhäuser",
          description:
            "Exklusives 7-Kammer-System mit einer Einbautiefe von 88 mm. Es ist darauf ausgelegt, die strengsten europäischen Umweltanforderungen und Standards für Passivhäuser zu erfüllen. Es verfügt über ein zentrales (mittleres) Dichtungssystem, das eine Isolierbarriere bildet und die Beschläge vor Witterungseinflüssen schützt.",
          tripleGlass:
            "Dank der großen Einbautiefe ermöglicht es den Einbau robuster Dreifachverglasungen mit einer Dicke von über 50 mm. Der Wärmedurchgangskoeffizient des Fensters erreicht hervorragende Uw ≈ 0,75 W/m²K, was maximale Energieeinsparungen garantiert.",
        },
        {
          name: "Kömmerling 76 mm",
          tagline: "Innovative goldene Mitte – MD- und AD-Varianten",
          description:
            "Eine innovative Profilgeneration mit idealen Proportionen und einem schlanken Profilbild für mehr Lichtdurchlässigkeit. EVROMETAL fertigt dieses System in zwei Dichtungsvarianten: MD (mit Mitteldichtung, 6 Kammern) und AD (mit zwei Anschlagdichtungen, 5 Kammern).",
          tripleGlass:
            "Die Konstruktion trägt moderne Dreifachglas-Pakete mit einer Dicke von bis zu 48–50 mm problemlos. Das fertige Fenster erreicht einen hervorragenden Wärmedämmwert von Uw ≈ 0,85 W/m²K (MD-Variante) und erfüllt damit vollständig die hohen Anforderungen des modernen Niedrigenergiebaus.",
        },
        {
          name: "Kömmerling 70 mm",
          tagline: "Klassiker – wirtschaftliches und bewährtes System",
          description:
            "Ein zuverlässiges, klassisches 5- oder 6-Kammer-System mit einer Einbautiefe von 70 mm und einem System aus zwei Anschlagdichtungen (AD). Es ist besonders beliebt für Renovierungen von Wohnungen und den Austausch alter Bauelemente dank des hervorragenden Verhältnisses zwischen Investition und erzielter Leistung.",
          tripleGlass:
            "Trotz kompakterer Abmessungen ist das Profil so konstruiert, dass es Dreifachglas-Pakete problemlos aufnimmt. Mit eingebautem Dreifachglas erreicht das Fenster eine Wärmedämmung von etwa Uw ≈ 1,0 W/m²K, was die Energieeffizienzklasse älterer Gebäude drastisch verbessert.",
        },
      ],
      greenline: {
        title: "Ökologische und produktionstechnische Standards: Greenline-Technologie",
        text: "Ein wichtiges Merkmal aller Fenster, die EVROMETAL aus Kömmerling-Profilen herstellt, ist die greenline-Technologie. Das bedeutet, dass bei der Herstellung des Roh-PVC kein Blei verwendet wird, sondern umweltfreundliche Stabilisatoren auf Basis von Calcium und Zink. Die Profile sind zu 100 % recycelbar und bieten eine außergewöhnliche Langlebigkeit sowie Widerstandsfähigkeit gegen Alterung und extreme Wetterbedingungen.",
      },
    },
    aluminco: {
      eyebrow: "Aluminco ALU-Systeme",
      title: "Griechische Aluminco-Profile – Aluminiumbauelemente für Wohn- und Gewerbeobjekte.",
      intro:
        "Das Produktionsprogramm von EVROMETAL umfasst hochwertige Aluminium-Fenster- und Schiebesysteme aus Profilen des griechischen Herstellers Aluminco. Nachfolgend finden Sie eine detaillierte Übersicht der technischen Eigenschaften, Beschreibungen und Leistungsdaten der führenden Systeme, bestimmt für Architekten, Planer und Ausführende.",
      descriptionTitle: "Beschreibung",
      specsTitle: "Technische Eigenschaften",
      schematicTitle: "Schematische Darstellung",
      systems: [
        {
          name: "Aluminco W450",
          tagline: "Hochleistungssystem mit thermischer Trennung",
          description:
            "Aluminco W450 ist ein fortschrittliches, universelles System mit thermischer Trennung, entwickelt zur Erfüllung moderner europäischer Standards für Energieeffizienz und Schalldämmung. Es eignet sich ideal für Einfamilienhäuser, Wohnungen sowie Gewerberäume mit intensiver Nutzung. Es zeichnet sich durch außergewöhnliche strukturelle Stabilität bei gleichzeitig minimalistischem Design und maximalem Lichteinfall aus. Das System verfügt über drei Dichtungsebenen mit einer hochwertigen zentralen EPDM-Dichtung.",
          specs: [
            ["Einbautiefe des Rahmens", "67 mm"],
            ["Einbautiefe des Flügels", "75 mm"],
            ["Polyamid-Breite", "24 mm (glasfaserverstärkt)"],
            ["Wärmedämmung (Uf)", "2,2 - 2,6 W/m²K"],
            ["Schalldämmung (Rw)", "Bis 43 dB"],
            ["Maximale Glasstärke", "20 mm - 40 mm (Dreifachverglasung)"],
            ["Luftdurchlässigkeit", "Klasse 4"],
            ["Wasserdichtheit", "Klasse E900"],
          ],
          image: "/images/aluminco/w450.png",
        },
        {
          name: "Aluminco W4750",
          tagline: "Hochdämmendes Premiumsystem",
          description:
            "W4750 ist ein erstklassiges Profil, speziell entwickelt für Projekte mit extrem niedrigen Wärmeverlusten. Mit eingebauten Polyamiden von 39 mm Breite bietet dieses System überlegene Wärmedämmung und reduziert Heiz- und Kühlkosten drastisch. Das Profil ist zusätzlich verstärkt und für den Einbau schwerer Dreifachglas-Pakete mit Argonfüllung und niedrig emittierenden Beschichtungen angepasst.",
          specs: [
            ["Einbautiefe des Rahmens", "76 mm"],
            ["Einbautiefe des Flügels", "84 mm"],
            ["Polyamid-Breite", "39 mm (isolierte Kammer)"],
            ["Wärmedämmung (Uf)", "≥ 1,2 W/m²K"],
            ["Wärmedämmung des Fensters (Uw)", "Bis 0,85 W/m²K (mit Premiumglas)"],
            ["Verglasung", "Bis 52 mm Glasstärke"],
            ["Beschlag", "Fortschrittliches Perimetersystem (Euro-Groove oder Alu 16)"],
          ],
          image: "/images/aluminco/w4750.png",
        },
        {
          name: "Aluminco W4900",
          tagline: "System für Passivhäuser",
          description:
            "Das System W4900 stellt den absoluten technologischen Höchststand des Aluminco-Sortiments dar. Es wurde exklusiv für Gebäude entwickelt, die nach strengen Standards für Passiv- und energieautarke Häuser errichtet werden. Mit einem beeindruckenden Uw-Koeffizienten unter 0,78 W/m²K eliminiert dieses System thermische Brücken vollständig und bietet erstklassige Schalldämmung für maximalen Komfort in städtischen Zonen mit hohem Lärmpegel.",
          specs: [
            ["Wärmedurchgangskoeffizient (Uw)", "≤ 0,78 W/m²K"],
            ["Verwendung", "Zertifizierte Passiv- und Ökohäuser"],
            ["Dichtung", "Extrudierte hochdichte Schwammdichtungen"],
            ["Mechanische Stabilität", "Außergewöhnliche Windlastwiderstandsklasse (Klasse C5)"],
          ],
          image: "/images/aluminco/w4900.png",
        },
        {
          name: "Aluminco SL2450",
          tagline: "Premium-Schiebe- und Hebe-Schiebesysteme",
          description:
            "Schiebesysteme der Serie SL (sowie verwandte AL200, AL220, AL250) lösen die Anforderungen moderner Architekten an die Schaffung riesiger Glaswände, bei denen Außen- und Innenraum ohne visuelle Barrieren verschmelzen. Der Hebe-Schiebemechanismus ermöglicht es, massive Flügel mit bis zu 400 kg Gewicht mühelos mit einem Finger zu bewegen. Besonderes Augenmerk liegt auf dem dünnen Mittelsteg (Haken), der den Sichtunterbruch minimiert.",
          specs: [
            ["Maximales Flügelgewicht", "Bis 400 kg (Hebe-Schiebemechanismus)"],
            ["Sichtbare Breite des Mittelprofils", "Nur 30 mm - 35 mm (Slim-Design)"],
            ["Wärmedämmung", "30 mm Polyamidstreifen mit EPDM-Barrieren"],
            ["Maximale Flügelabmessungen", "Breite bis 3000 mm, Höhe bis 3200 mm"],
            ["Laufschienen", "Edelstahl (Inox) für langlebigen gleichmäßigen Lauf"],
          ],
          image: "/images/aluminco/sl2450.png",
        },
      ],
      note:
        "Hinweis: Technische Daten und Werte sind informativ und aus den offiziellen Aluminco-Katalogen entnommen. Bei der Erstellung von Hauptbauprojekten sind stets die offiziellen CAD/BIM-Datenbanken des Herstellers zur Verifikation der statischen Berechnungen zu konsultieren.",
    },
    akpa: {
      eyebrow: "AKPA ALU-Systeme",
      title: "Türkische AKPA-Aluminiumsysteme – Thermische und kalte Systeme, Schiebe- und Hebe-Schiebelösungen.",
      intro:
        "Das Produktionsprogramm von EVROMETAL umfasst Aluminiumsysteme des türkischen Herstellers AKPA Aluminium. Die Dokumentation ist für Architekten, Planer und Ausführende zur Materialspezifikation und Erstellung von Werkstattzeichnungen bestimmt.",
      descriptionTitle: "Beschreibung",
      specsTitle: "Technische Eigenschaften",
      schematicTitle: "Schematische Darstellung",
      materialSpecs: {
        title: "Allgemeine technische Materialeigenschaften",
        items: [
          ["Legierung und chemische Zusammensetzung", "EN AW 6060 / EN AW 6063 (EN 573-3)"],
          ["Wärmebehandlung", "T5 und T6 (künstliche Alterung)"],
          ["Dichtungssystem", "EPDM-Dichtungen, drei Dichtungsebenen (außen, mittig, innen)"],
          ["Oberflächenbehandlung", "Pulverbeschichtung RAL (min. 60 µm, Qualicoat), Eloxal (Qualanod, 15-25 µm), Woodgrain-Beschichtungen"],
        ],
      },
      comparisonTitle: "Systeme mit thermischer Trennung (Thermo-Systeme)",
      comparisonNote:
        "Systeme mit thermischer Trennung verwenden Polyamidstreifen von 14 mm bis 34 mm Breite, die den äußeren und inneren Bereich des Aluminiumprofils trennen und Wärmeleitung sowie Kondensation verhindern.",
      comparisonHeaders: ["Systemname", "Rahmen- / Flügeltiefe", "Glasstärke", "Hauptmerkmale und Anwendung"],
      comparisonRows: [
        ["WD 55 Thermo", "55 mm / 65 mm", "Bis 30 mm", "Wirtschaftliches System für Wohn- und Gewerbeobjekte mit moderaten Dämmungsanforderungen. Polyamidstreifen 14,8 mm."],
        ["WD 64 Thermo", "64 mm / 74 mm", "Bis 44 mm", "Optimaler Preis-Leistungs-Balance. Polyamidstreifen 24 mm. Unterstützt Zwei- und Dreifachverglasung."],
        ["WD 70 Thermo", "70 mm / 80 mm", "Bis 50 mm", "Fortschrittliches Thermo-System für energieeffiziente Gebäude. Hohe statische Leistung für größere Öffnungen."],
        ["AKPA 80 Thermo", "80 mm / 90 mm", "Bis 60 mm", "Premium-System mit maximalem Isolationskoeffizienten. Für Passivhäuser und extreme Klimabedingungen."],
      ],
      systems: [
        {
          name: "HS 55 Thermo",
          tagline: "Hebe-Schiebesystem",
          description:
            "Verwendet einen fortschrittlichen 'Lift-and-Slide'-Mechanismus, bei dem durch Drehen des Griffes der Flügel von den Dichtungen angehoben wird und mühelos auf Edelstahlschienen gleitet. Beim Schließen senkt sich der Flügel und übt durch sein eigenes Gewicht Druck auf die Dichtungen aus, wodurch hermetische Dichtleistungen erreicht werden, die klassischen Schiebesystemen weit überlegen sind. Die Rahmentiefe beträgt je nach Anzahl der Schienen 122 mm bis 140 mm.",
          specs: [
            ["Rahmentiefe", "122 mm - 140 mm"],
            ["Maximales Flügelgewicht", "Bis 400 kg"],
            ["Mechanismus", "Lift-and-Slide (Hebe-Schiebe)"],
            ["Führungen", "Edelstahl (Inox)"],
          ],
        },
        {
          name: "S 35 Novaline / CS 35 Thermo",
          tagline: "Standard-Schiebesystem",
          description:
            "Standard-Schiebesystem mit thermischer Trennung. Kompakte Abmessungen und schmales Sichtprofil sind ideal für Balkontüren, bei denen ein modernes, minimalistisches Design gefordert ist.",
          specs: [
            ["Rahmentiefe", "35 mm (kompaktes Profil)"],
            ["Thermische Trennung", "Ja (Polyamidstreifen)"],
            ["Anwendung", "Balkontüren, minimalistisches Design"],
          ],
        },
        {
          name: "S 32 Sliding System",
          tagline: "Kaltes Schiebesystem",
          description:
            "Wirtschaftliches System ohne thermische Trennung. Verwendet für Innenraumtrennwände oder den Verschluss von Loggien und Terrassen, die nicht direkt mit beheizten Wohnräumen kommunizieren.",
          specs: [
            ["Rahmentiefe", "32 mm"],
            ["Thermische Trennung", "Nein (kaltes System)"],
            ["Anwendung", "Innenraumtrennwände, Loggien, Terrassen"],
          ],
        },
        {
          name: "Aldoks-Serie",
          tagline: "Kalte Innenraumsysteme (ohne thermische Trennung)",
          description:
            "Das historisch bekannteste und am weitesten verbreitete Aluminiumsystem auf dem Markt. Die Rahmentiefe beträgt 45 mm. Es zeichnet sich durch äußerst einfache und schnelle Bearbeitung auf Matrizen aus. Primär verwendet für die Herstellung von Innenraumtrennwänden, Bürotüren, Lagerräumen, Windfängen und Industrieobjekten.",
          specs: [
            ["Rahmentiefe", "45 mm (Aldoks)"],
            ["Thermische Trennung", "Nein"],
            ["Anwendung", "Innenraumtrennwände, Bürotüren, Lager, Industrieobjekte"],
          ],
        },
        {
          name: "WD 45 / WD 37",
          tagline: "Moderne kalte Systeme",
          description:
            "Modernere kalte Systeme mit saubereren und flacheren Linien im Vergleich zu Aldoks. Sie ermöglichen den Einbau verdeckter Bänder und die Integration in moderne innenarchitektonische Festwände.",
          specs: [
            ["Rahmentiefe", "45 mm / 37 mm"],
            ["Thermische Trennung", "Nein"],
            ["Anwendung", "Moderne Innenräume, verdeckte Bänder"],
          ],
        },
      ],
      certifications: {
        title: "Technische Eigenschaften und Zertifizierungen",
        items: [
          "Luftdurchlässigkeit (EN 12207): Klasse 4 (maximale Dichtigkeit bei Windstößen).",
          "Wasserdichtheit (EN 12208): Klasse 9A bis E750 (Rückhalt von Wassereintritt bei hohen Drücken).",
          "Windwiderstand (EN 12210): Klasse C3 / B3 (minimaler Durchbiegung der Profilbaugruppe unter zyklischer Belastung).",
          "Wärmedämmung (EN ISO 10077-2): Uf von 1,6 W/m²K (AKPA 80) bis 2,8 W/m²K (WD 55).",
        ],
      },
      asciiSchematics: [
        {
          title: "Schematischer Querschnitt der Profilbaugruppe (WD 70 Thermo)",
          text: "      AUßENSEITE                          INNENSEITE\n   +-----------------------+                +-----------------------+\n   |    Aluminium          |                |    Aluminium          |\n   |    Außenprofil        |==[POLYAMID]==  |    Innenprofil        |\n   |                       |==[  STREIFEN]== |                       |\n   +----------+------------+                +------------+----------+\n              |     |                                    |     |\n              |     |======= Zentrale Dichtung =========>|     |\n              +------------------------------------------+-----+\n              [================== GLAS ==================]",
        },
        {
          title: "Schematische Ansicht der Zweikanal-Schiene des Schiebesystems (HS 55)",
          text: "       [SCHIENE 1 - FESTFLÜGEL]            [SCHIENE 2 - SCHIEBEFLÜGEL]\n      +-----------------------+          +-----------------------+\n      |  +-----------------+  |          |  +-----------------+  |\n      |  |     GLAS        |  |          |  |     GLAS        |  |\n      |  +-----------------+  |          |  |     GLAS        |  |\n      +-----------+-----------+          +-----------+-----------+\n==================|==================================|==================\n   +--------------V--------------+    +--------------V--------------+\n   |  [Edelstahlführung/Schiene1]|    |  [Edelstahlführung/Schiene2]|\n   +-----------------------------+    +-----------------------------+\n   |_____________________ GEMEINSAMER RAHMEN (122 mm) ___________________|",
        },
      ],
      note:
        "Hinweis: Werkstattzeichnungen, statische Berechnungen und Entwässerungsöffnungen sind stets an den konkreten Mikrostandort und die Gebäudehöhe gemäß den technischen Anweisungen von AKPA Aluminium anzupassen.",
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
    gallery: { eyebrow: "Galerie", title: "Produktion und Produkte", production: "Produktion", products: "Produkte" },
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

