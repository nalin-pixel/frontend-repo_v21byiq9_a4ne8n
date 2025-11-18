import React, { useMemo, useState } from 'react'
import HeaderBar from './components/HeaderBar'
import LandFilters from './components/LandFilters'
import PropertyCard from './components/PropertyCard'
import MapPanel from './components/MapPanel'

const MOCK = [
  { id: 1, title: 'Sea-view plot in La Marsa', gov: 'Tunis', city: 'La Marsa', price: 380000, area: 420, lat: 36.8762, lng: 10.3253 },
  { id: 2, title: 'Olive farm near Sfax', gov: 'Sfax', city: 'Sakiet Ezzit', price: 190000, area: 5000, lat: 34.7394, lng: 10.7603 },
  { id: 3, title: 'Desert land in Douz', gov: 'Kebili', city: 'Douz', price: 60000, area: 10000, lat: 33.4591, lng: 9.0222 },
  { id: 4, title: 'Build-ready lot in Hammamet', gov: 'Nabeul', city: 'Hammamet', price: 220000, area: 300, lat: 36.4073, lng: 10.6223 },
]

function App() {
  const [filters, setFilters] = useState({ gov: '', city: '', minPrice: '', maxPrice: '', minArea: '', maxArea: '' })
  const [searchKey, setSearchKey] = useState(0)

  const filtered = useMemo(() => {
    return MOCK.filter(i => (
      (!filters.gov || i.gov === filters.gov) &&
      (!filters.city || i.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.minPrice || i.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || i.price <= Number(filters.maxPrice)) &&
      (!filters.minArea || i.area >= Number(filters.minArea)) &&
      (!filters.maxArea || i.area <= Number(filters.maxArea))
    ))
  }, [filters, searchKey])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeaderBar />
      <main className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Property list and filters */}
        <section className="space-y-4">
          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-3">Filters</h2>
            <LandFilters
              filters={filters}
              onChange={setFilters}
              onSearch={() => setSearchKey(k => k + 1)}
            />
          </div>

          <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Results</h2>
              <span className="text-blue-300 text-sm">{filtered.length} found</span>
            </div>
            <div className="space-y-3">
              {filtered.map(item => (
                <PropertyCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Right: Map */}
        <section className="h-[70vh] lg:h-[calc(100vh-140px)]">
          <MapPanel query={filters} />
        </section>
      </main>
    </div>
  )
}

export default App
