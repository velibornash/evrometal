import { dictionary, type Lang } from "@/lib/i18n";

type StructuredDataProps = {
  lang: Lang;
};

export function StructuredData({ lang }: StructuredDataProps) {
  const t = dictionary[lang];
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evrometal",
    url: "https://evrometal.rs",
    logo: "https://evrometal.rs/logoEvrometal.jpg",
    email: "office@evrometal.rs",
    telephone: "+38112327682",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrijska zona bb",
      postalCode: "12300",
      addressLocality: "Petrovac na Mlavi",
      addressCountry: "RS",
    },
    description: t.hero.text,
    makesOffer: t.services.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item[1],
        description: item[2],
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
