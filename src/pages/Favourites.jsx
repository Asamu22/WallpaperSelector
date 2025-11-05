import { Link } from 'react-router-dom'
import { useWallpaper } from '../context/WallpaperContext'
import EmptyFavorites from '../components/EmptyFavorites'

const Favourites = () => {
  const { favorites, toggleFavorite, isFavorite } = useWallpaper()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 
          className="mb-2"
          style={{
            fontFamily: 'Clash Display',
            fontSize: '60px',
            fontWeight: 500,
            lineHeight: '100%',
            backgroundImage: 'linear-gradient(90deg, #FBB03B 0%, #EC0C43 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Saved Wallpapers
        </h1>
        <p className="text-neutral-gray text-lg">
          Your saved wallpapers collection
        </p>
      </div>

      {/* Content */}
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {favorites.map((wallpaper) => (
            <div
              key={wallpaper.id}
              className="relative group"
            >
              {/* Wallpaper Card */}
              <div
                className="block relative overflow-hidden border-[1.69px] border-gray-200"
                style={{ 
                  width: '190.18px', 
                  height: '290.71px',
                  borderRadius: '14.23px'
                }}
              >
                <img
                  src={wallpaper.image}
                  alt={wallpaper.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1">{wallpaper.name}</h3>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                    {wallpaper.categoryName || 'Nature'}
                  </span>
                </div>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleFavorite(wallpaper)
                }}
                className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
              >
                <svg width="20" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M15.1875 0C13.2516 0 11.5566 0.8325 10.5 2.23969C9.44344 0.8325 7.74844 0 5.8125 0C4.27146 0.00173694 2.79404 0.614681 1.70436 1.70436C0.614681 2.79404 0.00173694 4.27146 0 5.8125C0 12.375 9.73031 17.6869 10.1447 17.9062C10.2539 17.965 10.376 17.9958 10.5 17.9958C10.624 17.9958 10.7461 17.965 10.8553 17.9062C11.2697 17.6869 21 12.375 21 5.8125C20.9983 4.27146 20.3853 2.79404 19.2956 1.70436C18.206 0.614681 16.7285 0.00173694 15.1875 0Z" 
                    fill={isFavorite(wallpaper.id) ? "#FFA821" : "none"}
                    stroke="#FFA821"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourites