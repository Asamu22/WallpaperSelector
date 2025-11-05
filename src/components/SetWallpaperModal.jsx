import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useWallpaper } from '../context/WallpaperContext'

const SetWallpaperModal = ({ isOpen, onClose, wallpaper }) => {
  const { activateWallpaper } = useWallpaper()
  const [displayMode, setDisplayMode] = useState('fit')
  const [autoRotation, setAutoRotation] = useState(true)
  const [lockWallpaper, setLockWallpaper] = useState(true)
  const [syncDevices, setSyncDevices] = useState(false)

  const handleSaveSettings = () => {
    const settings = {
      displayMode,
      autoRotation,
      lockWallpaper,
      syncDevices
    }
    
    // Save wallpaper with settings
    activateWallpaper(wallpaper, settings)
    
    // Show success toast
    toast.success(`${wallpaper.name} has been set as your active wallpaper!`, {
      duration: 4000,
    })
    
    // Close modal
    onClose()
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur - only below navbar */}
      <div 
        className="fixed left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-40"
        style={{ top: '80px' }}
        onClick={onClose}
      />
      
      {/* Modal Container - Below navbar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex items-stretch justify-end pointer-events-none" style={{ top: '80px' }}>
        {/* Modal Content - Slide from right */}
        <div className="relative bg-white w-full max-w-md shadow-2xl overflow-y-auto pointer-events-auto">
          <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl mb-2" style={{ fontWeight: 600, fontFamily: 'Clash Display' }}>
              Wallpaper Setup
            </h2>
            <p className="text-neutral-gray text-sm">
              Configure your wallpaper settings and enable auto-rotation
            </p>
          </div>

          {/* Activate Wallpaper */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>
                  Activate Wallpaper
                </h3>
                <p className="text-neutral-gray text-sm">
                  Set the selected wallpaper as your desktop background
                </p>
              </div>
              <div className="ml-4 bg-green-100 text-green-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Activated
              </div>
            </div>
          </div>

          {/* Display Mode */}
          <div className="mb-6">
            <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
              Display mode
            </h3>
            
            {/* Fit Option */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl mb-3 cursor-pointer hover:border-primary-orange transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="radio"
                  name="displayMode"
                  value="fit"
                  checked={displayMode === 'fit'}
                  onChange={(e) => setDisplayMode(e.target.value)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary-orange checked:border-[6px] transition-all cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Fit</p>
                <p className="text-neutral-gray text-sm">Scale to fit without cropping</p>
              </div>
            </label>

            {/* Fill Option */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl mb-3 cursor-pointer hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="radio"
                  name="displayMode"
                  value="fill"
                  checked={displayMode === 'fill'}
                  onChange={(e) => setDisplayMode(e.target.value)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary-orange checked:border-[6px] transition-all cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Fill</p>
                <p className="text-neutral-gray text-sm">Scale to fill the entire screen</p>
              </div>
            </label>

            {/* Stretch Option */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl mb-3 cursor-pointer hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="radio"
                  name="displayMode"
                  value="stretch"
                  checked={displayMode === 'stretch'}
                  onChange={(e) => setDisplayMode(e.target.value)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary-orange checked:border-[6px] transition-all cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Stretch</p>
                <p className="text-neutral-gray text-sm">Stretch to fill the screen</p>
              </div>
            </label>

            {/* Tile Option */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="radio"
                  name="displayMode"
                  value="tile"
                  checked={displayMode === 'tile'}
                  onChange={(e) => setDisplayMode(e.target.value)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary-orange checked:border-[6px] transition-all cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Tile</p>
                <p className="text-neutral-gray text-sm">Repeat the image to fill the screen</p>
              </div>
            </label>
          </div>

          {/* Auto-Rotation */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>
                  Auto - Rotation
                </h3>
                <p className="text-neutral-gray text-sm">
                  Automatically change your wallpaper at regular intervals
                </p>
              </div>
              <button
                onClick={() => setAutoRotation(!autoRotation)}
                className={`ml-4 relative w-12 h-6 rounded-full transition-colors ${
                  autoRotation ? 'bg-primary-orange' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    autoRotation ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="mb-8">
            <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
              Advanced Settings
            </h3>

            {/* Lock Wallpaper */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl mb-3 cursor-pointer hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="checkbox"
                  checked={lockWallpaper}
                  onChange={(e) => setLockWallpaper(e.target.checked)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded checked:bg-primary-orange checked:border-primary-orange transition-all cursor-pointer"
                />
                {lockWallpaper && (
                  <svg className="absolute pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Lock Wallpaper</p>
                <p className="text-neutral-gray text-sm">Prevent accidental changes</p>
              </div>
            </label>

            {/* Sync Across Devices */}
            <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-colors">
              <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
                <input
                  type="checkbox"
                  checked={syncDevices}
                  onChange={(e) => setSyncDevices(e.target.checked)}
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded checked:bg-primary-orange checked:border-primary-orange transition-all cursor-pointer"
                />
                {syncDevices && (
                  <svg className="absolute pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Sync Across Devices</p>
                <p className="text-neutral-gray text-sm">Keep wallpaper consistent on all devices</p>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors font-medium"
              style={{ height: '50px', fontSize: '14px' }}
            >
              Cancel
            </button>
            <button 
              onClick={handleSaveSettings}
              className="flex-1 bg-primary-orange text-white rounded-2xl hover:bg-primary-secondary transition-colors font-medium"
              style={{ height: '50px', fontSize: '14px' }}
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SetWallpaperModal
