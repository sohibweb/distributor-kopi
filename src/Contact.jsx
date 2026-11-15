import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    perusahaan: '',
    jenis: 'konsultasi',
    pesan: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const waMessage = `Halo Nusantara Roast Direct,%0ASaya ${formData.nama} dari ${formData.perusahaan || 'perusahaan kami'} ingin ${formData.jenis}.%0ADetail: ${formData.pesan}%0AEmail: ${formData.email}%0ATelp: ${formData.telepon}`
    window.open(`https://wa.me/6281288992345?text=${waMessage}`, '_blank')
    setSubmitted(true)
    setFormData({ nama: '', email: '', telepon: '', perusahaan: '', jenis: 'konsultasi', pesan: '' })
  }

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
                Hubungi Tim B2B
              </span>
              <span className="text-label-mono font-label-mono text-on-surface-variant">RESPON &lt; 5 MENIT</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight leading-tight">
                  Mari Bicara Tentang Kebutuhan Kopi Anda
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  Tim Account Manager kami siap membantu: konsultasi profil rasa, penawaran harga grosir, sample gratis, hingga kontrak pasokan bulanan. Balasan via WhatsApp dalam 5 menit jam kerja.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-on-surface text-primary-container font-label-lg text-label-lg rounded-lg shadow-md hover:bg-white transition-all transform hover:-translate-y-0.5" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20konsultasi%20pasokan%20biji%20kopi." rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>WhatsApp Langsung</span>
                  </a>
                  <a className="inline-flex items-center gap-3 px-6 py-3.5 bg-secondary-container text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-highest transition-all" href="mailto:sales@nusantararoast.co.id?subject=Inquiry%20Pasokan%20Biji%20Kopi&body=Halo%20Tim%20Nusantara%20Roast%20Direct%2C%0A%0ASaya%20tertarik%20untuk%20konsultasi%20pasokan%20biji%20kopi.%20Berikut%20detail%20kebutuhan%20saya%3A%0A%0A- Nama%3A%20%0A- Perusahaan%3A%20%0A- Jenis Kopi%3A%20%0A- Volume Bulanan%3A%20%0A- Catatan%3A%20">
                    <span className="material-symbols-outlined text-tertiary text-xl">email</span>
                    <span>Kirim Email</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col gap-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-tertiary uppercase">B2B Hotline</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">ONLINE</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                    <span className="font-display text-headline-lg text-secondary">+62</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">812-8899-2345</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-high p-4 rounded-lg">
                    <span className="font-display text-headline-lg text-tertiary">&lt; 5</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Menit Response</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-container p-3 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary text-xl">schedule</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Jam Operasional</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Sen-Jum 08-17, Sab 08-14 WIB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM KONTAK */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="max-w-3xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Formulir Konsultasi</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Kirimkan Detail Kebutuhan Anda</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Isi formulir di bawah, tim kami akan menghubungi via WhatsApp dengan penawaran terbaik dalam 5 menit jam kerja.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* FORM */}
              <div className="bg-surface-container-high p-8 rounded-2xl shadow-xl">
                {submitted ? (
                  <div className="flex flex-col items-center text-center gap-4 py-8">
                    <div className="w-16 h-16 rounded-full bg-tertiary/15 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-3xl">check_circle</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Pesan Terkirim!</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                      Detail kebutuhan Anda telah diterima. Tim B2B kami akan membuka WhatsApp dengan pesan terisi otomatis. Silakan kirim untuk memulai konsultasi.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg hover:bg-tertiary-fixed transition-all">
                      <span className="material-symbols-outlined text-lg align-middle">refresh</span>
                      Kirim Lagi
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nama" className="font-label-md text-label-md text-on-surface block mb-1.5">Nama Lengkap *</label>
                        <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary" placeholder="Budi Santoso" />
                      </div>
                      <div>
                        <label htmlFor="email" className="font-label-md text-label-md text-on-surface block mb-1.5">Email Bisnis *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary" placeholder="budi@perusahaan.co.id" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telepon" className="font-label-md text-label-md text-on-surface block mb-1.5">Nomor WhatsApp *</label>
                        <input type="tel" id="telepon" name="telepon" value={formData.telepon} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary" placeholder="0812-3456-7890" />
                      </div>
                      <div>
                        <label htmlFor="perusahaan" className="font-label-md text-label-md text-on-surface block mb-1.5">Nama Perusahaan / Brand</label>
                        <input type="text" id="perusahaan" name="perusahaan" value={formData.perusahaan} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary" placeholder="Kopi Nusantara Jaya" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="jenis" className="font-label-md text-label-md text-on-surface block mb-1.5">Jenis Kebutuhan *</label>
                      <select id="jenis" name="jenis" value={formData.jenis} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary cursor-pointer">
                        <option value="konsultasi">Konsultasi & Sample Gratis</option>
                        <option value="penawaran">Minta Penawaran Harga Grosir</option>
                        <option value="kontrak">Diskusi Kontrak Pasokan Bulanan</option>
                        <option value="custom">Profiling Custom / House Blend</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pesan" className="font-label-md text-label-md text-on-surface block mb-1.5">Detail Kebutuhan *</label>
                      <textarea id="pesan" name="pesan" value={formData.pesan} onChange={handleChange} required rows="5" className="w-full px-4 py-2.5 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md shadow-inner outline-none focus:bg-surface-bright focus:ring-2 focus:ring-tertiary resize-none" placeholder="Contoh: Butuh 500kg Aceh Gayo Grade 1 per bulan untuk roastery di Bandung. Ingin sample dulu untuk cupping. Budget ~Rp 110k/kg."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-tertiary-fixed transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined text-xl">send</span>
                      <span>Kirim ke WhatsApp B2B</span>
                    </button>
                    <p className="font-label-mono text-label-mono text-outline text-center">Form akan membuka WhatsApp dengan pesan terisi otomatis • Data tidak disimpan di server kami</p>
                  </form>
                )}
              </div>

              {/* INFO KONTAK */}
              <div className="flex flex-col gap-6">
                <div className="bg-surface-container-high p-8 rounded-2xl shadow-xl flex flex-col gap-6">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Informasi Kontak Lengkap</h3>
                  <div className="space-y-5">
                    <a href="https://wa.me/6281288992345" className="flex items-center gap-4 p-4 bg-surface-container rounded-xl hover:bg-surface-container-highest transition-colors group" target="_blank" rel="noopener noreferrer">
                      <div className="w-12 h-12 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                        <span className="material-symbols-outlined text-2xl">chat</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-label-md text-label-md text-tertiary">WhatsApp B2B Hotline</p>
                        <p className="font-body-md text-body-md text-on-surface">+62 812-8899-2345</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Balasan &lt; 5 menit jam kerja</p>
                      </div>
                    </a>
                    <a href="mailto:sales@nusantararoast.co.id" className="flex items-center gap-4 p-4 bg-surface-container rounded-xl hover:bg-surface-container-highest transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                        <span className="material-symbols-outlined text-2xl">email</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-label-md text-label-md text-secondary">Email Bisnis & Tender</p>
                        <p className="font-body-md text-body-md text-on-surface">sales@nusantararoast.co.id</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Untuk RFQ, PO, kontrak formal</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 p-4 bg-surface-container rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl">schedule</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-primary">Jam Operasional Pengiriman</p>
                        <p className="font-body-md text-body-md text-on-surface">Senin - Jumat: 08.00 - 17.00 WIB</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Sabtu: 08.00 - 14.00 WIB • Minggu: Khusus kontainer terjadwal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-container p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Butuh Response Lebih Cepat?</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Klik tombol WhatsApp di kanan bawah halaman (floating button) untuk chat langsung tanpa mengisi formulir.
                  </p>
                  <a href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20butuh%20info%20cepat%20tentang%20stok%20dan%20harga." className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg hover:bg-tertiary-fixed transition-all shrink-0" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined">chat</span>
                    <span>Buka WhatsApp Langsung</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOKASI GUDANG */}
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-wider">Fasilitas Kami</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Gudang & Roastery Pusat</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kunjungi fasilitas kami untuk cupping session, audit kualitas, atau diskusi teknis langsung dengan tim roaster & QC.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-surface-container-high p-8 rounded-2xl shadow-xl flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-2xl">warehouse</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Gudang Utama Jakarta</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Klimatik-controlled storage 5.000+ m²</p>
                  </div>
                </div>
                <div className="space-y-3 pt-2 border-t border-outline-variant/30">
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Alamat</span>
                    <span className="font-body-sm text-body-sm text-on-surface text-right max-w-[60%] text-right">Kawasan Industri Pergudangan Kopi, Marunda Center Blok B3 No. 12, Tarumajaya, Bekasi - Jakarta Utara</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Kapasitas</span>
                    <span className="font-body-sm text-body-sm text-tertiary">50+ ton stok siap kirim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Fasilitas</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Climate control, GrainPro storage, loading dock, CCTV 24/7, asuransi komoditas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Akses</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Dekat Tol Cikampek & Pelabuhan Tanjung Priok</span>
                  </div>
                </div>
                <a href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20mengunjungi%20gudang%20Jakarta%20untuk%20audit%20/ cupping." className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg hover:bg-tertiary-fixed transition-all shrink-0 mt-2" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Jadwalkan Kunjungan</span>
                </a>
              </div>

              <div className="bg-surface-container-high p-8 rounded-2xl shadow-xl flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Warehouse & Roastery Bandung</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Highland coffee center dengan roastery modern</p>
                  </div>
                </div>
                <div className="space-y-3 pt-2 border-t border-outline-variant/30">
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Alamat</span>
                    <span className="font-body-sm text-body-sm text-on-surface text-right max-w-[60%] text-right">Sentra Agro Industri Kopi Highland, Jl. Kolonel Masturi KM 4.5, Lembang, Jawa Barat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Peralatan</span>
                    <span className="font-body-sm text-body-sm text-tertiary">Probat P12, Giesen W15A, colorimeter, moisture analyzer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Lab QC</span>
                    <span className="font-body-sm text-body-sm text-on-surface">SCAI certified, Q-Grader station, cupping room 8 kursi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">Kegiatan</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Roasting production, R&D fermentasi, pelatihan barista, cupping session mitra</span>
                  </div>
                </div>
                <a href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20mengunjungi%20roastery%20Bandung%20untuk%20cupping%20/ training." className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary font-label-lg text-label-lg rounded-lg hover:bg-secondary-fixed transition-all shrink-0 mt-2" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Jadwalkan Kunjungan</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SINGKAT */}
        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wired">Pertanyaan Umum</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Quick FAQ B2B</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: 'Berapa MOQ (Minimum Order Quantity)?', a: 'Green Beans: 5 kg (karung) / 25 kg (karung besar) / 60 kg (jute bag). Roasted Beans: 1 kg (valve bag) / 5 kg (box) / 25 kg (bulk). Kontrak bulanan minimal 500 kg untuk harga khusus.' },
                { q: 'Apakah bisa request sample gratis?', a: 'Ya. Mitra bisnis (cafe, roastery, hotel, restaurant) bisa request sample kit 200g hingga 3 varietas gratis ongkir. Hubungi WhatsApp B2B kami untuk prosesnya.' },
                { q: 'Bagaimana sistem pricing grosir?', a: 'Tiered pricing: 5 kg (harga dasar), 25 kg (diskon ~10%), 100 kg (diskon ~15%), 500 kg+ (harga kontrak eksportir/khusus). Harga inklusif kemasan GrainPro food-grade.' },
                { q: 'Berapa lama lead time pengiriman?', a: 'Jabodetabek: 1-2 hari kerja. Pulau Jawa: 2-4 hari. Luar Jawa: 3-7 hari tergantung lokasi. Kontainer: 7-14 hari. Semua via armada sendiri / kargo partner terpercaya dengan asuransi.' },
                { q: 'Apakah ada sertifikasi Halal & P-IRT?', a: 'Ya, lengkap. Sertifikat Halal BPJPH: ID31110001892010823. Izin Edar P-IRT: 5103175010042-26. NIB: 1204000349811. CoA & Phytosanitary Certificate tersedia per lot.' },
                { q: 'Bisa custom house blend / profiling?', a: 'Bisa. Tim roaster kami (Probat/Giesen certified) bisa develop profil custom sesuai target rasa Anda. Minimal 25 kg untuk trial blend, 100 kg untuk production run.' }
              ].map((faq, i) => (
                <div key={i} className="bg-surface-container-high p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">{faq.q}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <a href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20punya%20pertanyaan%20lain%20yang%20tidak%20terdaftar%20di%20FAQ." className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg hover:bg-tertiary-fixed transition-all" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">help</span>
                <span>Tanya Langsung via WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary-container p-8 lg:p-16 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl">
              <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
                <span className="font-label-mono text-label-mono text-tertiary uppercase">SIAP MEMULAI?</span>
                <h3 className="font-headline-lg text-headline-lg lg:text-display text-on-surface tracking-tight">
                  Dapatkan Penawaran Terbaik untuk Bisnis Kopi Anda Hari Ini
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sample gratis, harga grosir transparan, kontrak fleksibel, dukungan teknis penuh. Ribuan coffee shop & roastery sudah percaya.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a className="px-8 py-4 bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-lg shadow-md hover:bg-tertiary-fixed transition-all flex items-center gap-3" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20siap%20memulai%20kerjasama%20dan%20ingin%20mendapatkan%20penawaran%20terbaik." rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-xl">rocket_launch</span>
                  <span>Mulai Konsultasi Sekarang</span>
                </a>
                <a className="px-8 py-4 bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-highest transition-all flex items-center gap-3 border border-outline-variant/30" href="mailto:sales@nusantararoast.co.id?subject=RFQ%20Pasokan%20Biji%20Kopi&body=Halo%20Tim%20Nusantara%20Roast%20Direct%2C%0A%0ASaya%20ingin%20mengajukan%20RFQ%20untuk%20pasokan%20biji%20kopi.%20Detail%20kebutuhan%3A%0A%0A- Jenis%3A%20%0A- Varietas%3A%20%0A- Volume Bulanan%3A%20%0A- Tujuan Pengiriman%3A%20%0A- Catatan%3A%20">
                  <span className="material-symbols-outlined text-tertiary text-xl">description</span>
                  <span>Kirim RFQ via Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}