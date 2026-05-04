import { CategoryStrip } from "@/components/CategoryStrip";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CompanySection } from "@/components/CompanySection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FaqSection } from "@/components/FaqSection";
import { ProfileSystemsSection } from "@/components/ProfileSystemsSection";
import { ProfessionalSection } from "@/components/ProfessionalSection";
import { ProjectFlowSection } from "@/components/ProjectFlowSection";
import { ProductGrid } from "@/components/ProductGrid";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import type { Product } from "@/components/ProductCard";
import { getLang } from "@/lib/i18n";
import { client } from "@/lib/sanity";

async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"] | order(featured desc, _createdAt desc) {
    _id,
    name,
    nameEn,
    nameDe,
    description,
    descriptionEn,
    descriptionDe,
    image,
    slug,
    category,
    featured,
    "documentUrl": document.asset->url,
    specs
  }`);
}

type HomeProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const lang = getLang((await searchParams)?.lang);
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#111820] text-white">
      <StructuredData lang={lang} />
      <Header lang={lang} products={products} />
      <Hero lang={lang} />
      <CompanySection lang={lang} />
      <ServicesSection lang={lang} />
      <ProjectFlowSection lang={lang} />
      <ProfessionalSection lang={lang} />
      <ProfileSystemsSection lang={lang} />
      <CategoryStrip lang={lang} />
      <ProductGrid products={products} lang={lang} />
      <ReferencesSection lang={lang} />
      <CertificationsSection lang={lang} />
      <FaqSection lang={lang} />
      <ContactSection lang={lang} />
      <SiteFooter lang={lang} />
    </main>
  );
}
