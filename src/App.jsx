import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Favourites from './pages/Favourites'
import Settings from './pages/Settings'
import CategoryWallpapers from './pages/CategoryWallpapers'
import { WallpaperProvider } from './context/WallpaperContext'

function App() {
  return (
    <WallpaperProvider>
      <Router>
        <div className="min-h-screen bg-neutral-lightGray">
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/category/:categoryId" element={<CategoryWallpapers />} />
            </Routes>
          </div>
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#333',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
            success: {
              iconTheme: {
                primary: '#FFA821',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
    </WallpaperProvider>
  )
}

export default App
