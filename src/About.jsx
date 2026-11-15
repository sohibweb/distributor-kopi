import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-surface">
        {/* HERO SECTION */}
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
                Profil Perusahaan
              </span>
              <span className="text-label-mono font-label-mono text-on-surface-variant">B2B COMMODITY DIRECT PORTAL</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight leading-tight">
                  Tentang Nusantara Roast Direct
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  Mitra pasokan biji kopi skala industri, eksportir specialty green coffee, dan roastery partner terpercaya yang menghubungkan petani kopi Indonesia dengan pasar global melalui standar kualitas internasional.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-on-surface text-primary-container font-label-lg text-label-lg rounded-lg shadow-md hover:bg-white transition-all transform hover:-translate-y-0.5" href="#katalog-produk">
                    <span>Lihat Katalog Produk</span>
                    <span className="material-symbols-outlined text-lg">arrow_downward</span>
                  </a>
                  <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-secondary-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-highest transition-all" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20perusahaan%20dan%20mitra%20kerjasama." rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-tertiary text-xl">chat</span>
                    <span>Hubungi Kami</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col gap-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-tertiary uppercase">Profil Perusahaan</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">EST. 2020</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                    <span className="font-display text-headline-lg text-secondary">50+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Tonase Stok Bulanan</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                    <span className="font-display text-headline-lg text-tertiary">18+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Varietas Unggulan</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-container p-3 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary text-xl">verified</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">SCAI Certified Lab</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Q-Grader Licensed Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIAPA KAMI */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Mengenal Kami</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Siapa Nusantara Roast Direct?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kami adalah perusahaan komoditas kopi yang berfokus pada perdagangan biji kopi hijau (green beans) dan roasted beans dengan skala industri, menjembatani petani kopi lokal di seluruh Nusantara hingga ke pasar domestik maupun ekspor.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                <div className="bg-surface-container-high p-6 rounded-xl shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Dari Petani ke Cangkir Anda</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Nusantara Roast Direct lahir dari visi untuk mempersingkat rantai pasok kopi Indonesia. Kami bekerja langsung dengan kelompok tani, koperasi, dan petani kecil di Aceh Gayo, Toraja, Kintamani, Preanger, hingga Ijen, memastikan harga adil bagi petani dan kualitas terjamin bagi pembeli.
                  </p>
                </div>
                <div className="bg-surface-container-high p-6 rounded-xl shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Standar Internasional, Sentuhan Lokal</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Setiap lot biji kopi melewati kurasi ketat di laboratorium internal kami yang bersertifikat SCA. Tim Q-Grader berlisensi melakukan cupping ganda untuk memastikan profil rasa konsisten, bebas cacat, dan memenuhi standar ekspor Grade 1 Specialty.
                  </p>
                </div>
              </div>
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden bg-surface-container-highest">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9DjnHHsVJk88-1cHwDeF01STI8ryhJvygrJTjkb7avxAEuFHBU7U-SPgoAuCJ-emVBiNP-u4O8NE5-Cq1CtXjTaNVvj0JCVryEMrDQ97uVNUXWcH7G4MA414-L_t_G5Ezh9FAqZLB1PLUet2hEy4d6A0SB9Zxl0xTu-UTtr9OiZpLaX0wgVvj676yN3KgcmulbfJ008GM09DEmkk_BqfuL-HS4zqE2JNvM2os3ff"
                  alt="Petani kopi di perkebunan Aceh Gayo memanen merica kopi yang matang sempurna di bawah sinar pagi"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                    Petani mitra kami di Aceh Gayo - jantung specialty coffee Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATAR BELAKANG */}
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Latar Belakang</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Mengapa Kami Berdiri?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">grain</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Ketidakadilan Rantai Pasok</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Petani kopi kecil sering tersisihkan oleh tengkulak, menerima harga di bawah biaya produksi sementara kualitas biji mereka berpotensi tinggi di pasar specialty.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">warning</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Inkonsistensi Kualitas</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Roastery dan coffee shop kesulitan mendapatkan pasokan biji dengan kualitas stabil batch-to-batch, menghambat konsistensi rasa di cangkir.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">insights</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Keterbatasan Akses Pasar</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Biji kopi unggul Indonesia sulit menjangkau pasar ekspor premium karena minimnya fasilitas pemrosesan, sertifikasi, dan jaringan distribusi terpercaya.
                </p>
              </div>
            </div>
            <div className="bg-primary-container p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
                <span className="font-label-mono text-label-mono text-tertiary uppercase">SOLUSI KAMI</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Direct Trade: Transparan, Berkelanjutan, Berkualitas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Model direct trade kami memastikan petani mendapatkan harga premium, pembeli menerima kualitas terjamin dengan CoA lengkap, dan rantai pasok menjadi lebih pendek, efisien, serta dapat ditelusuri (traceable).
                </p>
              </div>
              <a className="px-6 py-4 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-tertiary-fixed transition-all flex items-center gap-3 shrink-0" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20tertarik%20dengan%20model%20direct%20trade%20dan%20ingin%20berdiskusi%20mitra%20kerjasama." rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-xl">handshake</span>
                <span>Jadi Mitra Direct Trade</span>
              </a>
            </div>
          </div>
        </section>

        {/* VISI DAN MISI */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Kompas Perusahaan</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Visi & Misi Kami</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* VISI */}
              <div className="bg-surface-container-high p-8 rounded-2xl flex flex-col gap-6 shadow-xl border border-tertiary/30">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-3xl">visibility</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono text-tertiary uppercase">VISI</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">Menjadi Mitra Utama Komoditas Kopi Indonesia di Pasar Global</h3>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-lg">
                  Menghadirkan biji kopi Indonesia ke panggung dunia dengan standar kualitas tertinggi, praktik perdagangan adil, dan rantai pasok yang transparan - memberdayakan petani, memuaskan roaster, menginspirasi dunia.
                </p>
                <div className="pt-4 border-t border-outline-variant/30">
                  <h4 className="font-label-lg text-label-lg text-on-surface mb-3">Target 2026:</h4>
                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>Ekspor ke 15+ negara</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>Mitra petani 5.000+ kepala keluarga</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>Kapasitas 100+ ton/bulan</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>Zero defect tolerance</li>
                  </ul>
                </div>
              </div>

              {/* MISI */}
              <div className="bg-surface-container-high p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-3xl">flag</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono text-secondary uppercase">MISI</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">Komitmen Aksi Nyata</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-surface-container rounded-xl">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-xl">1</span>
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Memberdayakan Petani</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Harga beli premium, pembayaran tunai, pendampingan teknis pertanian berkelanjutan, dan akses pasar langsung.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-surface-container rounded-xl">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-xl">2</span>
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Kualitas Tanpa Kompromi</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Cupping ganda Q-Grader, laboratorium SCAI, kontrol kelembapan di bawah 12%, zero defect tolerance, full traceability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-surface-container rounded-xl">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-xl">3</span>
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Kemitraan Jangka Panjang</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Kontrak volume 6-12 bulan, pricing tier transparan, prioritas stok untuk mitra setia, dukungan profiling custom.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-surface-container rounded-xl">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-xl">4</span>
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Inovasi Berkelanjutan</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">R&D proses fermentasi, varietas unggul baru, kemasan berkelanjutan, digitalisasi rantai pasok blockchain-ready.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-surface-container rounded-xl">
                    <span className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-xl">5</span>
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Edukasi & Komunitas</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Cupping session gratis, pelatihan barista, workshop roasting, sharing knowledge untuk mengangkat industri kopi Indonesia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NILAI-NILAI KAMI */}
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Nilai Inti</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Prinsip yang Menuntun Setiap Keputusan Kami</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bukan sekadar slogan - nilai-nilai ini terwujud dalam SOP, kontrak, dan interaksi harian dengan petani maupun pembeli.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">transparency</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Transparansi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Harga farmgate terbuka, CoA lengkap per lot, traceability dari blok tanam hingga gudang, laporan dampak tahunan untuk stakeholder.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Kejayaan Berkelanjutan</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Praktik pertanian regeneratif, zero waste processing, kemasan biodegradable, program penanaman pohon naungan, carbon footprint tracking.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Keunggulan Teknis</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Probat & Giesen roaster, Artisan/Cropster curve logging, climate-controlled warehouse, SCAI accredited lab, Q-Grader licensed team.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Kemitraan Adil</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Profit sharing transparan, kontrak jangka panjang, prioritas stok untuk mitra, dukungan teknis & edukasi gratis, pertumbuhan bersama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARA KERJA / ALUR */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Alur Kerja</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Dari Tanaman ke Cangkir: Alur Terintegrasi</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                End-to-end supply chain management dengan visibilitas penuh di setiap tahap.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">1</span>
                  <span className="font-label-mono text-label-mono text-outline uppercase">TAHAP 1</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Pemilihan & Panen</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Seleksi blok tanam unggul, panen merah selektif (selective picking), sorting manual, dan pengiriman cepat ke station pengolahan.
                </p>
              </div>
              <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">2</span>
                  <span className="font-label-mono text-label-mono text-outline uppercase">TAHAP 2</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Pengolahan & Fermentasi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Wet hulling, fully washed, natural, honey, anaerobic - dikendalikan suhu, pH, durasi. Monitoring mikroba untuk konsistensi profil.
                </p>
              </div>
              <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">3</span>
                  <span className="font-label-mono text-label-mono text-outline uppercase">TAHAP 3</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Kurasi Laboratorium</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Cupping ganda Q-Grader, uji fisik (moisture, density, screen size, water activity, defect), CoA diterbitkan, lot diblokir/approved.
                </p>
              </div>
              <div className="relative bg-surface-container-low p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-tertiary font-display text-headline-sm flex items-center justify-center font-bold">4</span>
                  <span className="font-label-mono text-label-mono text-outline uppercase">TAHAP 4</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Gudang & Distribusi</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Penyimpanan climate-controlled (15-18 deg C, RH 60%), GrainPro + jute bag, FIFO inventory, pengiriman armada sendiri & kargo terpercaya se-Indonesia.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-lg">
              <div className="flex flex-col gap-2">
                <span className="font-label-mono text-label-mono text-tertiary">TRACEABILITY SYSTEM</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">Setiap Lot Bisa Dilacak</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Scan QR di kemasan untuk lihat: blok tanam, tanggal panen, proses, skor cupping, nama petani, hingga rute pengiriman.</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-surface-container p-4 rounded-lg flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant">BLOK TANAM</span>
                  <span className="font-display text-headline-md text-on-surface pt-1">Gayo-07</span>
                  <span className="font-body-sm text-body-sm text-secondary">Petani: Bpk. Ahmad</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant">TANGGAL PANEN</span>
                  <span className="font-display text-headline-md text-on-surface pt-1">15 Oct 2024</span>
                  <span className="font-body-sm text-body-sm text-secondary">Selective Picking</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant">PROSES</span>
                  <span className="font-display text-headline-md text-on-surface pt-1">Wet Hulled</span>
                  <span className="font-body-sm text-body-sm text-secondary">Fermentasi 18 jam</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant">SKOR CUPPING</span>
                  <span className="font-display text-headline-md text-on-surface pt-1">84.75</span>
                  <span className="font-body-sm text-body-sm text-secondary">SCA Grade 1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KOMITMEN & CTA */}
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary-container p-8 lg:p-16 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl">
              <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
                <span className="font-label-mono text-label-mono text-tertiary uppercase">KOMITMEN KAMI</span>
                <h3 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight">
                  Setiap Biji, Setiap Cangkir, Setiap Mitra - Kami Jaga Kualitasnya
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Kami percaya kopi Indonesia layak di panggung dunia. Bukan hanya menjual biji, kami membangun ekosistem di mana petani makmur, roaster konsisten, dan konsumen menikmati kopi terbaik Nusantara.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a className="px-8 py-4 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-tertiary-fixed transition-all flex items-center gap-3" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20menjadi%20mitra%20dan%20mendiskusikan%20kerjasama%20jangka%20panjang." rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-xl">rocket_launch</span>
                  <span>Mulai Kerjasama Sekarang</span>
                </a>
                <a className="px-8 py-4 bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-highest transition-all flex items-center gap-3 border border-outline-variant/30" href="#katalog-produk">
                  <span className="material-symbols-outlined text-tertiary text-xl">menu_book</span>
                  <span>Lihat Katalog Lengkap</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TIM / LEADERSHIP */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Tim Kepemimpinan</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Orang di Balik Kualitas</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Pengalaman gabungan puluhan tahun di industri kopi, dari hutan hingga cangkir.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Budi Santoso', role: 'CEO & Founder', exp: '15+ th eksport komoditas', icon: 'business' },
                { name: 'Sari Dewi, Q-Grader', role: 'Head of Quality', exp: 'SCA Licensed Q-Grader', icon: 'psychology' },
                { name: 'Ahmad Rizki', role: 'Head Roaster', exp: 'Probat/Giesen Certified', icon: 'local_fire_department' },
                { name: 'Dewi Lestari', role: 'Supply Chain Director', exp: '10+ th logistics kopi', icon: 'local_shipping' }
              ].map((member, i) => (
                <div key={i} className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-4 shadow-sm text-center">
                  <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary mx-auto">
                    <span className="material-symbols-outlined text-3xl">{member.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">{member.name}</h4>
                    <p className="font-label-md text-label-md text-tertiary">{member.role}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{member.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
