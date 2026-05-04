import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import type { Product } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { dictionary, getLang, withLang } from "@/lib/i18n";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<{
    lang?: string;
  }>;
};

async function getProduct(id: string): Promise<Product | null> {
  return client.fetch(`*[_type == "product" && _id == $id][0]`, { id });
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { id } = await params;
  const lang = getLang((await searchParams)?.lang);
  const t = dictionary[lang].productPage;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const imageUrl = product.image
    ? urlFor(product.image).width(1400).height(900).fit("crop").url()
    : null;

  return (
    <main className="min-h-screen bg-[#111820] text-white">
      <Header lang={lang} />
      <section className="border-b border-white/10 bg-[#0d1218] px-6 py-12 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link href={withLang("/#products", lang)} className="text-sm font-semibold text-amber-200 transition hover:text-amber-100">
              {t.back}
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              {t.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              {product.description ||
                t.fallback}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:office@evrometal.rs"
                className="inline-flex justify-center rounded-sm bg-amber-300 px-6 py-3 text-sm font-bold text-[#11100b] transition hover:bg-amber-200"
              >
                {t.quote}
              </a>
              <a
                href="tel:+38112327682"
                className="inline-flex justify-center rounded-sm border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/6"
              >
                {t.call}
              </a>
            </div>
          </div>

          <div className="image-fill-frame aspect-[4/3] overflow-hidden border border-white/10 bg-[#17202a]">
            {imageUrl ? (
              <Image src={imageUrl} alt={product.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
            ) : (
              <div className="grid h-full place-items-center bg-[linear-gradient(135deg,rgba(246,211,101,0.18),rgba(255,255,255,0.04))]">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
                  Evrometal
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {t.cards.map(([title, text]) => (
            <article key={title} className="border border-white/10 bg-white/[0.035] p-5">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/56">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
