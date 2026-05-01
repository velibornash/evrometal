import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/lib/image";

export type Product = {
  _id: string;
  name: string;
  description?: string;
  image?: SanityImageSource;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.image
    ? urlFor(product.image).width(900).height(620).fit("crop").url()
    : null;

  return (
    <article className="group overflow-hidden border border-white/10 bg-[#17202a] transition duration-300 hover:-translate-y-1 hover:border-amber-200/36 hover:bg-[#1b2631] hover:shadow-[0_22px_70px_rgba(0,0,0,0.32)]">
      <div className="image-fill-frame aspect-[4/3] overflow-hidden bg-[#0d1117]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Evrometal
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17202a] to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-px w-12 bg-amber-300/70 transition group-hover:w-20" />
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/32">
            System
          </span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{product.name}</h3>
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-white/58">
          {product.description || "Tehnički sistem dostupan za projektnu specifikaciju i B2B upite."}
        </p>
        <a
          href={`/product/${product._id}`}
          className="mt-5 inline-flex text-sm font-semibold text-amber-200 transition hover:text-amber-100"
        >
          Pogledaj detalje
        </a>
      </div>
    </article>
  );
}
