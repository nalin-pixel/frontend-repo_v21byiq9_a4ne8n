import React from 'react'

function MapPanel() {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=7.5,29.0,12.0,38.0&layer=mapnik&marker=33.8869,9.5375`

  return (
    <div className="absolute inset-0 -z-10">
      <iframe
        title="Tunisia Map"
        className="w-full h-full"
        src={src}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-950/30 to-slate-900/40 pointer-events-none" />
    </div>
  )
}

export default MapPanel
