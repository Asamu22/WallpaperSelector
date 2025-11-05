import { createContext, useContext, useState } from 'react'

const WallpaperContext = createContext()

export const useWallpaper = () => {
  const context = useContext(WallpaperContext)
  if (!context) {
    throw new Error('useWallpaper must be used within WallpaperProvider')
  }
  return context
}

export const WallpaperProvider = ({ children }) => {
  const [activeWallpaper, setActiveWallpaper] = useState(null)
  const [wallpaperSettings, setWallpaperSettings] = useState({
    displayMode: 'fit',
    autoRotation: true,
    lockWallpaper: true,
    syncDevices: false
  })
  const [favorites, setFavorites] = useState([])

  const activateWallpaper = (wallpaper, settings) => {
    setActiveWallpaper(wallpaper)
    setWallpaperSettings(settings)
  }

  const toggleFavorite = (wallpaper) => {
    setFavorites(prev => {
      const isFavorite = prev.some(fav => fav.id === wallpaper.id)
      if (isFavorite) {
        return prev.filter(fav => fav.id !== wallpaper.id)
      } else {
        return [...prev, wallpaper]
      }
    })
  }

  const isFavorite = (wallpaperId) => {
    return favorites.some(fav => fav.id === wallpaperId)
  }

  return (
    <WallpaperContext.Provider 
      value={{ 
        activeWallpaper, 
        wallpaperSettings, 
        activateWallpaper,
        favorites,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </WallpaperContext.Provider>
  )
}