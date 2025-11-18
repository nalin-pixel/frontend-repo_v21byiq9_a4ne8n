import React from 'react'

function PropertyCard({ item, onSave }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition">
      <div className="aspect-[16/9] bg-slate-800 relative">
        {/* placeholder image */}
        <img
          src={item.image || `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onSave?.(item)}
          className="absolute top-2 right-2 bg-white/90 text-slate-900 text-xs px-2 py-1 rounded-md hover:bg-white"
        >
          Save
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-white font-semibold truncate pr-2">{item.title}</h3>
          <span className="text-blue-300 font-medium whitespace-nowrap">{item.price.toLocaleString()} TND</span>
        </div>
        <p className="text-blue-200/80 text-sm mb-2 truncate">{item.gov}{item.city ? ` • ${item.city}` : ''}</p>
        <div className="text-blue-200/80 text-sm">Area: <span className="text-white">{item.area} m²</span></div>
      </div>
    </div>
  )
}

export default PropertyCard
