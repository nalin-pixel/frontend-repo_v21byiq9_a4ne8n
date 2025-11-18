import React from 'react'

function LandFilters({ filters, onChange, onSearch }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">Governorate</label>
          <select
            value={filters.gov}
            onChange={(e) => onChange({ ...filters, gov: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            {['Tunis','Ariana','Ben Arous','Manouba','Bizerte','Nabeul','Zaghouan','Béja','Jendouba','Kef','Siliana','Sousse','Monastir','Mahdia','Sfax','Kairouan','Kasserine','Sidi Bouzid','Gabès','Medenine','Tataouine','Gafsa','Tozeur','Kebili'].map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">City</label>
          <input
            value={filters.city}
            onChange={(e) => onChange({ ...filters, city: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. La Marsa"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">Min Price (TND)</label>
          <input type="number" min="0"
            value={filters.minPrice}
            onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">Max Price (TND)</label>
          <input type="number" min="0"
            value={filters.maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="200000"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">Min Area (m²)</label>
          <input type="number" min="0"
            value={filters.minArea}
            onChange={(e) => onChange({ ...filters, minArea: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="100"
          />
        </div>
        <div>
          <label className="block text-blue-200/80 text-xs mb-1">Max Area (m²)</label>
          <input type="number" min="0"
            value={filters.maxArea}
            onChange={(e) => onChange({ ...filters, maxArea: e.target.value })}
            className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1000"
          />
        </div>
      </div>

      <button onClick={onSearch} className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition">Search</button>
    </div>
  )
}

export default LandFilters
