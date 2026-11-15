export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-container py-16 lg:py-24 px-6 lg:px-12">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="48" id="b2b-grid-pattern" patternUnits="userSpaceOnUse" width="48">
              <path className="text-secondary/40" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.75"></path>
            </pattern>
          </defs>
          <rect fill="url(#b2b-grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10 px-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-tertiary text-label-mono font-label-mono uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Mitra Resmi Coffee Shop, Roastery &amp; Industri F&amp;B Se-Indonesia
          </span>
          <span className="text-label-mono font-label-mono text-on-surface-variant">B2B COMMODITY DIRECT PORTAL • V.2024</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight leading-tight">
              Mitra Terpercaya Pasokan Biji Kopi Hijau &amp; Roasted Bean Berkualitas Tinggi untuk Bisnis Anda
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Stabilitas pasokan bulanan terjamin langsung dari petani mitra di Aceh Gayo, Toraja, Kintamani, hingga Ijen. Dilengkapi kurasi Q-Grader bersertifikat dan kapasitas suplai hingga 50 ton per bulan.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-on-surface text-primary-container font-label-lg text-label-lg rounded-lg shadow-md hover:bg-white transition-all transform hover:-translate-y-0.5" href="#katalog-produk">
                <span>Lihat Katalog Biji Kopi</span>
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </a>
              <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-secondary-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-highest transition-all" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20tertarik%20untuk%20konsultasi%20pasokan%20biji%20kopi%20dan%20meminta%20sample%20gratis%20untuk%20bisnis%20saya." rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-tertiary text-xl">chat</span>
                <span>Konsultasi &amp; Sample Gratis via WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col gap-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-tertiary uppercase">Manifest Gudang Pusat</span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">Q4 REALTIME LOG</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                <span className="font-display text-headline-lg text-secondary">50+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Tonase Stok Siap Kirim</span>
              </div>
              <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                <span className="font-display text-headline-lg text-tertiary">84.2</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Rata-rata Skor SCA</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-3 rounded-lg">
              <span className="material-symbols-outlined text-tertiary text-xl">verified</span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">Akreditasi Laboratorium SCAI</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">100% Lulus Uji Kelembapan &lt;12%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="flex items-center gap-3.5 p-4 rounded-lg bg-surface-container-high shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-2xl">warehouse</span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface">Kapasitas 50+ Ton/Bulan</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Skalabilitas suplai konsisten</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-lg bg-surface-container-high shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-2xl">workspace_premium</span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface">Garansi Cupping Score 82+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Uji sensorik Q-Grader resmi</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-lg bg-surface-container-high shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-2xl">verified_user</span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface">Halal &amp; P-IRT Lengkap</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Higienis &amp; kepatuhan audit BPJPH</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-lg bg-surface-container-high shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-2xl">local_shipping</span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface">MOQ 5 Kg s/d Kontainer</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Pengiriman se-Indonesia terpadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
