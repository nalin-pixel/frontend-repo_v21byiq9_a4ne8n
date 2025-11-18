import React from 'react'

function PropertyCard({ item }) {
  return (
    <div className="bg-slate-800/70 border border-white/10 rounded-xl p-4 hover:border-blue-500/40 transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <span className="text-blue-300 font-medium">{item.price.toLocaleString()} TND</span>
      </div>
      <p className="text-blue-200/80 text-sm mb-2">{item.gov}{item.city ? ` • ${item.city}` : ''}</p>
      <div className="text-blue-200/80 text-sm">Area: <span className="text-white">{item.area} m²</span></div>
    </div>
  )
}

export default PropertyCard
