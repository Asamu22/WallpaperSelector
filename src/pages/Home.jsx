import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import ActiveWallpaperCard from '../components/ActiveWallpaperCard'
import { categories } from '../data/categories'
import { useWallpaper } from '../context/WallpaperContext'

const Home = () => {
  const { activeWallpaper } = useWallpaper()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Conditional: Show Active Wallpaper Card OR Hero Section */}
      {activeWallpaper ? (
        <ActiveWallpaperCard wallpaper={activeWallpaper} />
      ) : (
        <div className="mb-12">
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
            Discover Beautiful Wallpapers
          </h1>
          <p className="text-neutral-gray text-lg max-w-2xl">
            Discover curated collections of stunning wallpapers. Browse by
            category, preview in full-screen, and set your favorites.
          </p>
        </div>
      )}

      {/* Categories Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl text-neutral-black" style={{ fontWeight: 500 }}>Categories</h2>
          <Link
            to="/browse"
            className="text-neutral-gray hover:text-neutral-black transition-colors text-sm font-medium"
          >
            See All
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
