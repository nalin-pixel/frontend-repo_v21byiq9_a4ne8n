import React, { useEffect, useRef } from 'react'

// Simple map using Leaflet without external install is not possible here.
// We'll embed a responsive OpenStreetMap via iframe centered on Tunisia.

function MapPanel({ query }) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=7.5,29.0,12.0,38.0&layer=mapnik&marker=33.8869,9.5375`

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-slate-900">
      <iframe
        title="Tunisia Map"
        className="w-full h-full"
        src={src}
        style={{ filter: 'invert(0) hue-rotate(0deg)' }}
      />
    </div>
  )
}

export default MapPanel
