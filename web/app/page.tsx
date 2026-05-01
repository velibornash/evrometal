import { CategoryStrip } from "@/components/CategoryStrip";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CompanySection } from "@/components/CompanySection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfileSystemsSection } from "@/components/ProfileSystemsSection";
import { ProductGrid } from "@/components/ProductGrid";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import type { Product } from "@/components/ProductCard";
import { client } from "@/lib/sanity";

async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"] | order(_createdAt desc)`);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#10151c] text-white">
      <Header />
      <Hero />
      <CompanySection />
      <ServicesSection />
      <ProfileSystemsSection />
      <CategoryStrip />
      <ProductGrid products={products} />
      <ReferencesSection />
      <CertificationsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
