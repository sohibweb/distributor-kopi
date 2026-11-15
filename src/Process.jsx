export default function Process() {
  return (
    <section className="w-full bg-surface py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Alur Pengadaan Terstruktur</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Skema Kerjasama B2B Sederhana &amp; Amanah</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mulai dari pengujian kalibrasi hingga pasokan tonase berkelanjutan, kami hadir sebagai perpanjangan tangan suplai rantai dingin bisnis kopi Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">1</span>
              <span className="font-label-mono text-label-mono text-outline uppercase">FASE 1</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Request Sample &amp; Cupping</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Hubungi tim WhatsApp kami untuk memilih hingga 3 varietas sampel (200g per bag). Uji karakter rasa langsung pada mesin espresso atau manual brewer Anda.
            </p>
          </div>
          <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">2</span>
              <span className="font-label-mono text-label-mono text-outline uppercase">FASE 2</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Penentuan MOQ &amp; Pricing Tier</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Dapatkan formulir penetapan tier volume (5 kg, 25 kg, 100 kg, hingga kontrak tonase bulanan) dengan skema diskon volume dan termin pembayaran B2B terverifikasi.
            </p>
          </div>
          <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">3</span>
              <span className="font-label-mono text-label-mono text-outline uppercase">FASE 3</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Pengiriman Cepat Berjadwal</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pengiriman langsung via armada gudang Jakarta &amp; Bandung, atau kargo laut/darat terpercaya ke seluruh Indonesia dengan garansi asuransi komoditas penuh.
            </p>
          </div>
          <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">4</span>
              <span className="font-label-mono text-label-mono text-outline uppercase">FASE 4</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Profiling Custom &amp; Edukasi Barista</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Bimbingan penyesuaian brew profile, resep seduh espresso, dan edukasi parameter ekstraksi bagi tim barista Anda agar konsistensi di cangkir terjaga maksimal.
            </p>
          </div>
        </div>
        <div className="bg-primary-container p-8 lg:p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <span className="font-label-mono text-label-mono text-tertiary uppercase">PENETAPAN KONTRAK BISNIS</span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">Siap Mengamankan Suplai Kopi Berkualitas untuk Bisnis Anda?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Konsultasikan profil seduh yang diinginkan atau diskusikan kebutuhan tonase khusus bersama Manajer Akun B2B kami hari ini.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a className="px-6 py-4 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-tertiary-fixed transition-all flex items-center gap-3" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20membuat%20janji%20temu%20dan%20diskusi%20kontrak%20pasokan%20biji%20kopi." rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-xl">contact_support</span>
              <span>Jadwalkan Konsultasi Pasokan</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
