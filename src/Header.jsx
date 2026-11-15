import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight">Nusantara Roast Direct</span>
            <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Distributor Resmi Biji Kopi Grosir &amp; Roastery Partner</span>
          </div>
        </div>
        <nav className="hidden xl:flex items-center gap-8" data-active-classes="text-tertiary font-bold">
          <Link aria-current="page" className="transition-colors text-tertiary font-bold" data-path="katalog-produk" to="/">Katalog Produk</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="tentang-kami" to="/tentang-kami">Tentang Kami</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="kontak" to="/kontak">Kontak</Link>
        </nav>
        <div className="flex items-center gap-5 shrink-0">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">B2B Direct Line</span>
            <span className="font-headline-sm text-headline-sm text-tertiary">+62 812-8899-2345</span>
          </div>
          <a className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-on-surface text-primary-container font-label-lg text-label-lg rounded-lg hover:bg-white hover:text-background transition-all shadow-[0_0_12px_rgba(225,220,201,0.25)]" data-path="minta-penawaran-grosir" href="#">Minta Penawaran Grosir</a>
        </div>
      </div>
    </header>
  )
}
