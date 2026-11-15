import { categories } from './data.jsx'

export default function FilterToolbar({ filters, setFilters }) {
  const { category, query, variety, roast, origin } = filters
  const set = (patch) => setFilters((f) => ({ ...f, ...patch }))

  return (
    <section className="w-full bg-surface-container-lowest py-8 px-6 lg:px-12 sticky top-20 z-40 shadow-xl" id="katalog-produk">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" id="categoryTabs">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                data-cat={c.id}
                onClick={() => set({ category: c.id })}
                className={
                  'category-btn whitespace-nowrap px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all ' +
                  (category === c.id
                    ? 'bg-on-surface text-primary-container shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface')
                }
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative min-w-[280px] lg:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright"
              id="searchInput"
              placeholder="Cari varietas, daerah asal, atau profil rasa..."
              type="text"
              value={query}
              onChange={(e) => set({ query: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-3 bg-surface-container-high px-3.5 py-2 rounded-lg">
            <span className="font-label-mono text-label-mono text-tertiary uppercase whitespace-nowrap">Varietas:</span>
            <select
              className="w-full bg-transparent text-on-surface font-label-lg text-label-lg outline-none cursor-pointer"
              id="varietyFilter"
              value={variety}
              onChange={(e) => set({ variety: e.target.value })}
            >
              <option className="bg-surface-container-high text-on-surface" value="all">Semua Varietas</option>
              <option className="bg-surface-container-high text-on-surface" value="arabica">100% Arabica Specialty</option>
              <option className="bg-surface-container-high text-on-surface" value="robusta">Fine Robusta Standard</option>
              <option className="bg-surface-container-high text-on-surface" value="blend">House Blend Komersial</option>
            </select>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-high px-3.5 py-2 rounded-lg">
            <span className="font-label-mono text-label-mono text-tertiary uppercase whitespace-nowrap">Roast Level:</span>
            <select
              className="w-full bg-transparent text-on-surface font-label-lg text-label-lg outline-none cursor-pointer"
              id="roastFilter"
              value={roast}
              onChange={(e) => set({ roast: e.target.value })}
            >
              <option className="bg-surface-container-high text-on-surface" value="all">Semua Roast Level</option>
              <option className="bg-surface-container-high text-on-surface" value="green">Unroasted / Green Beans</option>
              <option className="bg-surface-container-high text-on-surface" value="light">Light Roast (Filter)</option>
              <option className="bg-surface-container-high text-on-surface" value="medium">Medium Roast (All-Round)</option>
              <option className="bg-surface-container-high text-on-surface" value="medium-dark">Medium-Dark (Espresso Base)</option>
              <option className="bg-surface-container-high text-on-surface" value="dark">Dark Roast (Traditional)</option>
            </select>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-high px-3.5 py-2 rounded-lg">
            <span className="font-label-mono text-label-mono text-tertiary uppercase whitespace-nowrap">Asal Origin:</span>
            <select
              className="w-full bg-transparent text-on-surface font-label-lg text-label-lg outline-none cursor-pointer"
              id="originFilter"
              value={origin}
              onChange={(e) => set({ origin: e.target.value })}
            >
              <option className="bg-surface-container-high text-on-surface" value="all">Seluruh Wilayah Indonesia</option>
              <option className="bg-surface-container-high text-on-surface" value="gayo">Aceh Gayo (Bener Meriah)</option>
              <option className="bg-surface-container-high text-on-surface" value="mandheling">Sumatra Mandheling</option>
              <option className="bg-surface-container-high text-on-surface" value="preanger">Java Preanger (Pangalengan)</option>
              <option className="bg-surface-container-high text-on-surface" value="kintamani">Bali Kintamani</option>
              <option className="bg-surface-container-high text-on-surface" value="toraja">Toraja Sapan</option>
              <option className="bg-surface-container-high text-on-surface" value="dampit">Dampit Malang</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
