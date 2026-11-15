export default function Quality() {
  return (
    <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
            <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Standar Kualitas Perdagangan</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">4 Pilar Komitmen Mutu Nusantara Roast Direct</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kami memadukan dedikasi agrikultur tradisional kepulauan dengan kepatuhan sensorik internasional agar operasional seduh bisnis Anda terbebas dari inkonsistensi rasa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Konsistensi Profil Sangrai Komputerisasi</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Mesin Probat industri &amp; Giesen bersertifikasi dengan pencatatan curve Artisan/Cropster terintegrasi cloud demi profil batch-to-batch yang identik.
            </p>
          </div>
          <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Kurasi Q-Grader Berlisensi</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Setiap lot biji kopi mentah dan hasil sangrai melewati uji organoleptik ganda di laboratorium internal bersertifikasi Specialty Coffee Association (SCA).
            </p>
          </div>
          <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">lock_clock</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Jaminan Ketersediaan Stok (Continuity)</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Kontrak pasokan volume terikat selama 6-12 bulan untuk melindungi operasional coffee shop Anda dari lonjakan harga pasar komoditas global.
            </p>
          </div>
          <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-2xl">coffee</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Sampel Uji Gratis &amp; Cupping Session</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pengiriman sample kit 200g bebas biaya untuk mitra bisnis, lengkap dengan sesi kalibrasi online bersama head roaster kami.
            </p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-lg">
          <div className="flex flex-col gap-2">
            <span className="font-label-mono text-label-mono text-tertiary">SPESIFIKASI STANDAR EKSPOR</span>
            <h4 className="font-headline-md text-headline-md text-on-surface">Fisik Biji Terinspeksi Ketat</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Batas toleransi defect di bawah 3% sesuai klasifikasi Green Coffee Grade 1 Specialty Nasional.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-surface-container p-4 rounded-lg flex flex-col">
              <span className="font-label-mono text-label-mono text-on-surface-variant">WATER ACTIVITY</span>
              <span className="font-display text-headline-md text-on-surface pt-1">0.58 aW</span>
              <span className="font-body-sm text-body-sm text-secondary">Anti Jamur &amp; Rusak</span>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex flex-col">
              <span className="font-label-mono text-label-mono text-on-surface-variant">KELEMBAPAN</span>
              <span className="font-display text-headline-md text-on-surface pt-1">11.2%</span>
              <span className="font-body-sm text-body-sm text-secondary">Standar Ideal Ekspor</span>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex flex-col">
              <span className="font-label-mono text-label-mono text-on-surface-variant">DENSITAS BIJI</span>
              <span className="font-display text-headline-md text-on-surface pt-1">685 g/L</span>
              <span className="font-body-sm text-body-sm text-secondary">High Density Lot</span>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex flex-col">
              <span className="font-label-mono text-label-mono text-on-surface-variant">SCREEN SIZE</span>
              <span className="font-display text-headline-md text-on-surface pt-1">17 - 18</span>
              <span className="font-body-sm text-body-sm text-secondary">Biji Seragam &amp; Bersih</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
