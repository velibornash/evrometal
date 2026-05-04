import { Header } from "@/components/Header";
import { Product, ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { dictionary, getLang } from "@/lib/i18n";
import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
    lang?: string;
  }>;
};


async function searchProducts(query: string): Promise<Product[]> {
  const searchQuery = `*${query}*`;
  return client.fetch<Product[]>(
    `*[_type == "product" && (
      name match $query || 
      nameEn match $query || 
      nameDe match $query || 
      description match $query || 
      descriptionEn match $query || 
      descriptionDe match $query || 
      category match $query
    )] | order(featured desc, _createdAt desc) {
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
    }`,
    { query: searchQuery } as any // eslint-disable-line @typescript-eslint/no-explicit-any
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const query = params?.q;

  if (!query) {
    notFound();
  }

  const products = await searchProducts(query);
  const t = dictionary[lang];

  return (
    <main className="min-h-screen bg-[#111820] text-white">
      <Header lang={lang} products={products} />
      
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {lang === "sr" ? `Rezultati pretrage za "${query}"` : 
               lang === "en" ? `Search results for "${query}"` : 
               `Suchergebnisse für "${query}"`}
            </h1>
            <p className="mt-2 text-sm text-white/60">
              {products.length} {lang === "sr" ? "proizvoda pronađeno" : 
                              lang === "en" ? "products found" : 
                              "Produkte gefunden"}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-12 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-amber-300/10 p-4">
                <svg className="h-8 w-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {t.search?.noResults || "Nema pronađenih proizvoda"}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {lang === "sr" ? "Pokušajte sa drugim ključnim rečima" : 
                 lang === "en" ? "Try different keywords" : 
                 "Versuchen Sie andere Schlüsselwörter"}
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
