import React from 'react'

function HeaderBar() {
  return (
    <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <h1 className="text-white text-lg font-semibold tracking-tight">Tunisian Lands</h1>
        </div>
        <div className="text-blue-200 text-sm">Explore land listings across Tunisia</div>
      </div>
    </header>
  )
}

export default HeaderBar
