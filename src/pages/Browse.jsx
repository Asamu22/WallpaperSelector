import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

const Browse = () => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 
              className="mb-4"
              style={{
                fontFamily: 'Clash Display',
                fontSize: '60px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '0%',
                backgroundImage: 'linear-gradient(90deg, #FBB03B 0%, #EC0C43 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Browse Categories
            </h1>
            <p className="text-neutral-gray text-lg">
              Explore our curated collections of stunning wallpapers
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className="p-2 rounded-lg transition-colors"
              aria-label="Grid view"
            >
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.79592 0H2.44898C1.79947 0 1.17656 0.258017 0.717289 0.717289C0.258017 1.17656 0 1.79947 0 2.44898V9.79592C0 10.4454 0.258017 11.0683 0.717289 11.5276C1.17656 11.9869 1.79947 12.2449 2.44898 12.2449H9.79592C10.4454 12.2449 11.0683 11.9869 11.5276 11.5276C11.9869 11.0683 12.2449 10.4454 12.2449 9.79592V2.44898C12.2449 1.79947 11.9869 1.17656 11.5276 0.717289C11.0683 0.258017 10.4454 0 9.79592 0ZM9.79592 9.79592H2.44898V2.44898H9.79592V9.79592ZM24.4898 0H17.1429C16.4933 0 15.8704 0.258017 15.4112 0.717289C14.9519 1.17656 14.6939 1.79947 14.6939 2.44898V9.79592C14.6939 10.4454 14.9519 11.0683 15.4112 11.5276C15.8704 11.9869 16.4933 12.2449 17.1429 12.2449H24.4898C25.1393 12.2449 25.7622 11.9869 26.2215 11.5276C26.6808 11.0683 26.9388 10.4454 26.9388 9.79592V2.44898C26.9388 1.79947 26.6808 1.17656 26.2215 0.717289C25.7622 0.258017 25.1393 0 24.4898 0ZM24.4898 9.79592H17.1429V2.44898H24.4898V9.79592ZM9.79592 14.6939H2.44898C1.79947 14.6939 1.17656 14.9519 0.717289 15.4112C0.258017 15.8704 0 16.4933 0 17.1429V24.4898C0 25.1393 0.258017 25.7622 0.717289 26.2215C1.17656 26.6808 1.79947 26.9388 2.44898 26.9388H9.79592C10.4454 26.9388 11.0683 26.6808 11.5276 26.2215C11.9869 25.7622 12.2449 25.1393 12.2449 24.4898V17.1429C12.2449 16.4933 11.9869 15.8704 11.5276 15.4112C11.0683 14.9519 10.4454 14.6939 9.79592 14.6939ZM9.79592 24.4898H2.44898V17.1429H9.79592V24.4898ZM24.4898 14.6939H17.1429C16.4933 14.6939 15.8704 14.9519 15.4112 15.4112C14.9519 15.8704 14.6939 16.4933 14.6939 17.1429V24.4898C14.6939 25.1393 14.9519 25.7622 15.4112 26.2215C15.8704 26.6808 16.4933 26.9388 17.1429 26.9388H24.4898C25.1393 26.9388 25.7622 26.6808 26.2215 26.2215C26.6808 25.7622 26.9388 25.1393 26.9388 24.4898V17.1429C26.9388 16.4933 26.6808 15.8704 26.2215 15.4112C25.7622 14.9519 25.1393 14.6939 24.4898 14.6939ZM24.4898 24.4898H17.1429V17.1429H24.4898V24.4898Z" fill={viewMode === 'grid' ? '#FFA821' : 'rgba(0, 0, 0, 0.1)'}/>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className="p-2 rounded-lg transition-colors"
              aria-label="List view"
            >
              <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4 13.2H2.4C1.76348 13.2 1.15303 13.4529 0.702944 13.9029C0.252856 14.353 0 14.9635 0 15.6V21.6C0 22.2365 0.252856 22.847 0.702944 23.2971C1.15303 23.7471 1.76348 24 2.4 24H26.4C27.0365 24 27.647 23.7471 28.0971 23.2971C28.5471 22.847 28.8 22.2365 28.8 21.6V15.6C28.8 14.9635 28.5471 14.353 28.0971 13.9029C27.647 13.4529 27.0365 13.2 26.4 13.2ZM26.4 21.6H2.4V15.6H26.4V21.6ZM26.4 0H2.4C1.76348 0 1.15303 0.252856 0.702944 0.702944C0.252856 1.15303 0 1.76348 0 2.4V8.4C0 9.03652 0.252856 9.64697 0.702944 10.0971C1.15303 10.5471 1.76348 10.8 2.4 10.8H26.4C27.0365 10.8 27.647 10.5471 28.0971 10.0971C28.5471 9.64697 28.8 9.03652 28.8 8.4V2.4C28.8 1.76348 28.5471 1.15303 28.0971 0.702944C27.647 0.252856 27.0365 0 26.4 0ZM26.4 8.4H2.4V2.4H26.4V8.4Z" fill={viewMode === 'list' ? '#FFA821' : 'rgba(0, 0, 0, 0.1)'}/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl mb-2" style={{ fontWeight: 600 }}>
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm mb-3">
                  {category.description}
                </p>
                <div className="inline-flex">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {category.wallpaperCount} wallpapers
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex items-center gap-6 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow p-4"
            >
              {/* Thumbnail */}
              <div 
                className="w-40 h-32 rounded-xl bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl mb-2 text-neutral-black" style={{ fontWeight: 600 }}>
                  {category.name}
                </h3>
                <p className="text-neutral-gray text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-neutral-black text-sm">
                  {category.wallpaperCount} wallpapers
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Browse
