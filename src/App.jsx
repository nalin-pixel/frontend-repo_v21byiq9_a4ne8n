import React, { useMemo, useState } from 'react'
import HeaderBar from './components/HeaderBar'
import LandFilters from './components/LandFilters'
import PropertyCard from './components/PropertyCard'
import MapPanel from './components/MapPanel'

const MOCK = [
  { id: 1, title: 'Sea-view plot in La Marsa', gov: 'Tunis', city: 'La Marsa', price: 380000, area: 420, lat: 36.8762, lng: 10.3253, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Olive farm near Sfax', gov: 'Sfax', city: 'Sakiet Ezzit', price: 190000, area: 5000, lat: 34.7394, lng: 10.7603, image: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Desert land in Douz', gov: 'Kebili', city: 'Douz', price: 60000, area: 10000, lat: 33.4591, lng: 9.0222, image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Build-ready lot in Hammamet', gov: 'Nabeul', city: 'Hammamet', price: 220000, area: 300, lat: 36.4073, lng: 10.6223, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop' },
]

function App() {
  const [filters, setFilters] = useState({ gov: '', city: '', minPrice: '', maxPrice: '', minArea: '', maxArea: '' })
  const [searchKey, setSearchKey] = useState(0)
  const [savedIds, setSavedIds] = useState(new Set())

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

  const toggleSave = (id) => {
    setSavedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen relative text-white">
      {/* Fullscreen map in background */}
      <MapPanel />

      {/* Top bar */}
      <HeaderBar />

      {/* Left side menu / drawer */}
      <aside className="fixed top-16 left-0 bottom-0 z-20 w-full sm:w-[380px] md:w-[420px] bg-slate-950/70 backdrop-blur border-r border-white/10 p-4 overflow-y-auto">
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-white">Search</h2>
          <p className="text-xs text-blue-200/70">Filter by location, price and size</p>
        </div>
        <div className="mb-4">
          <LandFilters
            filters={filters}
            onChange={setFilters}
            onSearch={() => setSearchKey(k => k + 1)}
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold">Results</h3>
          <span className="text-xs text-blue-300">{filtered.length} found</span>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {filtered.map(item => (
            <PropertyCard
              key={item.id}
              item={item}
              onToggleSave={toggleSave}
              saved={savedIds.has(item.id)}
            />
          ))}
        </div>
      </aside>
    </div>
  )}

export default App
