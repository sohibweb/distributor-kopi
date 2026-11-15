import { products } from './data.jsx'

function productText(p) {
  return [p.name, p.originLabel, p.notes, ...p.specs.map((s) => s.value), ...p.pricing.map((r) => r.label + ' ' + r.price), p.stock]
    .join(' ')
    .toLowerCase()
}

function matches(p, { category, query = '', variety, roast, origin }) {
  const q = query.toLowerCase().trim()
  if (category !== 'all' && !p.category.includes(category)) return false
  if (variety !== 'all' && p.variety !== variety) return false
  if (roast !== 'all' && p.roast !== roast) return false
  if (origin !== 'all' && !p.origin.includes(origin)) return false
  if (q && !productText(p).includes(q)) return false
  return true
}

export default function ProductGrid({ filters }) {
  const visible = products.filter((p) => matches(p, filters))

  return (
    <section className="w-full bg-surface py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
              <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Katalog Pengadaan Komoditas</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Daftar Biji Kopi Grosir Siap Distribusi</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Penyimpanan climate-controlled di gudang Marunda &amp; Lembang. Semua stok telah lulus cupping lab dengan dokumen CoA &amp; Phytosanitary Certificate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="productGrid">
          {visible.map((p) => (
            <article
              key={p.id}
              className="coffee-card flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-lg"
              data-category={p.category}
              data-origin={p.origin}
              data-roast={p.roast}
              data-variety={p.variety}
            >
              <div className="relative h-60 w-full overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-alt={p.imageAlt} src={p.image} alt={p.imageAlt} />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className={`${p.badge1Class} font-label-mono text-label-mono px-2.5 py-1 rounded`}>{p.badge1}</span>
                  <span className={`${p.badge2Class} font-label-mono text-label-mono px-2.5 py-1 rounded`}>{p.badge2}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 px-3 py-1 rounded-lg">
                  <span className={`font-label-mono text-label-mono ${p.stockClass}`}>{p.stock}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-5">
                <div className="flex flex-col gap-1">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">{p.originLabel}</span>
                  <h3 className="font-headline-md text-headline-sm lg:text-headline-md text-on-surface">{p.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3 bg-surface-container rounded-lg">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">{s.label}</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{s.value}</span>
                    </div>
                  ))}
                  <div className="flex flex-col col-span-2 pt-1">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">CUPPING NOTES</span>
                    <span className="font-body-sm text-body-sm text-tertiary">{p.notes}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 bg-surface-container-high p-3.5 rounded-lg">
                  <span className="font-label-mono text-label-mono text-tertiary uppercase">Skema Grosir B2B:</span>
                  {p.pricing.map((r) => (
                    <div key={r.label} className={`flex items-center justify-between font-body-sm text-body-sm${r.top ? ' pt-1' : ''}`}>
                      <span className="text-on-surface-variant">{r.label}</span>
                      <span className={r.priceClass}>{r.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <a className="flex items-center justify-center gap-2 w-full py-3 bg-secondary-container hover:bg-tertiary hover:text-on-tertiary text-on-surface font-label-lg text-label-lg rounded-lg transition-colors shadow-sm" href={p.waLink} rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-lg">send</span>
                    <span>Pesan / Konsultasi via WhatsApp</span>
                  </a>
                  <span className="font-label-mono text-label-mono text-outline text-center">{p.waNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
