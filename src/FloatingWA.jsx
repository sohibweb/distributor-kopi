import { useState } from 'react'

export default function FloatingWA() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {open && (
          <div className="bg-surface-container-high p-4 rounded-xl shadow-2xl max-w-xs transition-all duration-300 transform translate-y-0 opacity-100 flex flex-col gap-2" id="waPreviewBox">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
                <span className="font-label-mono text-label-mono text-tertiary uppercase">Live B2B Desk</span>
              </div>
              <button className="text-outline hover:text-on-surface text-sm" id="closeWaPreview" type="button" onClick={() => setOpen(false)}>
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
              Ada kebutuhan biji kopi mendesak? Diskusi harga grosir &amp; ketersediaan stok langsung dengan Account Manager B2B kami.
            </p>
            <div className="flex items-center justify-between pt-1">
              <span className="font-label-mono text-label-mono text-secondary">+62 812-8899-2345</span>
              <span className="font-label-mono text-label-mono text-outline">Balasan &lt; 5 Menit</span>
            </div>
          </div>
        )}
        <a className="flex items-center gap-3 bg-secondary-container hover:bg-tertiary text-on-surface hover:text-on-tertiary px-5 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105" href="https://wa.me/6281288992345?text=Halo%20Nusantara%20Roast%20Direct,%20saya%20ingin%20berdiskusi%20mengenai%20katalog%20biji%20kopi%20dan%20penawaran%20harga%20grosir%20B2B." rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-2xl text-tertiary group-hover:text-on-tertiary">chat</span>
          <span className="font-label-lg text-label-lg">Hubungi B2B via WhatsApp</span>
        </a>
      </aside>
      <aside className="fixed bottom-6 right-6 z-50 flex items-center hidden" aria-hidden="true">
        <a className="group flex items-center gap-3 bg-surface-container-high border border-outline-variant/60 rounded-full pl-3 pr-5 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.7)] hover:border-tertiary transition-all duration-300" href="https://wa.me/6281288992345" rel="noopener noreferrer" target="_blank">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container text-on-surface">
            <span className="material-symbols-outlined text-xl text-tertiary">support_agent</span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-primary-container"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-label-mono text-label-mono text-tertiary uppercase">WhatsApp B2B Hotline</span>
            <span className="font-body-sm text-body-sm text-on-surface group-hover:text-tertiary transition-colors">Online - Konsultasi Sampel &amp; Kontrak Grosir</span>
          </div>
        </a>
      </aside>
    </>
  )
}
