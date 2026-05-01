export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080b0f] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Evrometal. Sva prava zadržana.</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <a href="mailto:office@evrometal.rs" className="transition hover:text-white">
            office@evrometal.rs
          </a>
          <a href="tel:+38112327682" className="transition hover:text-white">
            012 327 682
          </a>
        </div>
      </div>
    </footer>
  );
}
