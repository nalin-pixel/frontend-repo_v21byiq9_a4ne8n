import React from 'react'

function HeaderBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-7 h-7" />
          <h1 className="text-white text-base font-semibold tracking-tight">Tunisian Lands</h1>
        </div>
        <div className="text-blue-200 text-xs">Find land anywhere in Tunisia</div>
      </div>
    </header>
  )
}

export default HeaderBar
