import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-headline-sm text-headline-sm text-on-surface">PT Nusantara Roast Komoditas</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Mitra pasokan biji kopi skala industri, eksportir specialty green coffee, dan roastery partner terpercaya di seluruh kepulauan Indonesia.</p>
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-label-mono text-label-mono text-tertiary">LEGALITAS &amp; REGULASI:</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">NIB: 1204000349811</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Izin Edar P-IRT: 5103175010042-26</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Sertifikat Halal BPJPH: ID31110001892010823</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-mono text-label-mono text-tertiary uppercase">Fasilitas Gudang Pusat</span>
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface">Gudang Utama Jakarta</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Kawasan Industri Pergudangan Kopi, Marunda Center Blok B3 No. 12, Tarumajaya, Bekasi - Jakarta Utara</span>
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-label-lg text-label-lg text-on-surface">Warehouse &amp; Roastery Bandung</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Sentra Agro Industri Kopi Highland, Jl. Kolonel Masturi KM 4.5, Lembang, Jawa Barat</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-mono text-label-mono text-tertiary uppercase">Navigasi B2B Supply</span>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
            <li className="text-on-surface-variant hover:text-on-surface transition-colors"><Link data-path="katalog-produk" to="/">Green Beans Single Origin</Link></li>
            <li className="text-on-surface-variant hover:text-on-surface transition-colors"><Link data-path="katalog-produk" to="/">Commercial Grade &amp; Fine Robusta</Link></li>
            <li className="text-on-surface-variant hover:text-on-surface transition-colors"><Link data-path="skema-grosir" to="/">Program Pasokan Kafe &amp; Roastery</Link></li>
            <li className="text-on-surface-variant hover:text-on-surface transition-colors"><Link data-path="standar-dan-sertifikasi" to="/">Laboratorium Uji SCA &amp; Q-Grader</Link></li>
            <li className="text-on-surface-variant hover:text-on-surface transition-colors"><Link data-path="skema-grosir" to="/">Kontrak Volume Bulanan &amp; Tonase</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-mono text-label-mono text-tertiary uppercase">Jam Operasional &amp; Kontak</span>
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-on-surface">Operasional Pengiriman</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Senin - Jumat: 08.00 - 17.00 WIB</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Sabtu: 08.00 - 14.00 WIB</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Minggu &amp; Hari Besar: Khusus Pengiriman Kontainer Terjadwal</span>
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-label-mono text-label-mono text-tertiary">EMAIL BISNIS &amp; TENDER:</span>
            <a className="font-body-sm text-body-sm text-on-surface underline underline-offset-4 hover:text-tertiary transition-colors" href="mailto:sales@nusantararoast.co.id">sales@nusantararoast.co.id</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 PT Nusantara Roast Komoditas. Seluruh hak cipta dilindungi undang-undang.</span>
        <div className="flex items-center gap-6 font-body-sm text-body-sm text-on-surface-variant">
          <span>Syarat &amp; Ketentuan Grosir</span>
          <span>Kebijakan Mutu</span>
          <span>Sertifikasi Ekspor</span>
        </div>
      </div>
    </footer>
  )
}
