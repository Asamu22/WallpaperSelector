import { useState } from 'react'
import toast from 'react-hot-toast'

const Settings = () => {
  const [imageQuality, setImageQuality] = useState('high')
  const [notifications, setNotifications] = useState(true)
  const [isConnected, setIsConnected] = useState(true)

  const handleSaveSettings = () => {
    // Show success toast
    toast.success('Settings saved successfully!')
  }

  const handleCancel = () => {
    // Reset to default values or just show a message
    toast('Changes discarded', { icon: 'ℹ️' })
  }

  const toggleConnection = () => {
    setIsConnected(!isConnected)
    if (isConnected) {
      toast.success('Disconnected from device')
    } else {
      toast.success('Connected to device')
    }
  }

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
          Settings
        </h1>
        <p className="text-neutral-gray text-lg">
          Customize your Wallpaper Studio experience
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-3xl p-12 shadow-sm">
        <div className="flex gap-12">
          {/* Left Side - Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-3">Wallpaper Setup</h2>
            <p className="text-neutral-gray mb-8">
              Configure your wallpaper settings and enable auto-rotation
            </p>

            {/* Image Quality Dropdown */}
            <div className="mb-8">
              <label className="block text-xl font-medium mb-4">Image Quality</label>
              <div className="relative">
                <select
                  value={imageQuality}
                  onChange={(e) => setImageQuality(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl appearance-none cursor-pointer text-neutral-gray focus:outline-none focus:border-primary-orange transition-colors"
                  style={{ fontSize: '16px' }}
                >
                  <option value="high">High ( Best Quality )</option>
                  <option value="medium">Medium ( Balanced )</option>
                  <option value="low">Low ( Save Data )</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Notification Toggle */}
            <div className="mb-12 p-6 border-2 border-gray-200 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium mb-2">Notification</h3>
                  <p className="text-neutral-gray text-sm">
                    Get notified about new wallpapers and updates
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    notifications ? 'bg-primary-orange' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      notifications ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSettings}
                className="flex-1 px-8 py-4 bg-primary-orange text-white rounded-full hover:bg-primary-secondary transition-colors font-medium text-lg"
              >
                Save Settings
              </button>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div 
                className="bg-white border-[8px] border-gray-300 rounded-[3rem] shadow-2xl"
                style={{ width: '280px', height: '560px' }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-full" />
                
                {/* Phone Content */}
                <div className="h-full flex flex-col items-center justify-center p-8">
                  {/* Connection Status */}
                  <button
                    onClick={toggleConnection}
                    className={`flex items-center transition-all mb-4 ${
                      isConnected 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    style={{
                      width: 'fit-content',
                      height: '44px',
                      borderRadius: '40px',
                      padding: '10px',
                      gap: '8px',
                      fontSize: '12px',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 17.0002L10.4999 18.5002C9.83684 19.1631 8.93758 19.5355 7.99994 19.5355C7.0623 19.5355 6.16304 19.1631 5.49994 18.5002C4.83701 17.8371 4.4646 16.9378 4.4646 16.0002C4.4646 15.0625 4.83701 14.1633 5.49994 13.5002L8.49994 10.5002C9.16304 9.83726 10.0623 9.46484 10.9999 9.46484C11.9376 9.46484 12.8368 9.83726 13.4999 10.5002" stroke="#168200" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 7.00018L13.5 5.50018C14.1631 4.83726 15.0624 4.46484 16 4.46484C16.9376 4.46484 17.8369 4.83726 18.5 5.50018C19.1629 6.16329 19.5353 7.06254 19.5353 8.00018C19.5353 8.93783 19.1629 9.83708 18.5 10.5002L15.5 13.5002C14.8369 14.1631 13.9376 14.5355 13 14.5355C12.0624 14.5355 11.1631 14.1631 10.5 13.5002" stroke="#168200" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {isConnected ? 'Connected to device' : 'Disconnected'}
                  </button>
                  
                  <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                    Click to {isConnected ? 'disconnect' : 'connect'}
                  </p>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings