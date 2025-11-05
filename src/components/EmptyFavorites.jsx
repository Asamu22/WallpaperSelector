import { Link } from 'react-router-dom'

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Empty State Icon */}
      <div className="mb-8">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            {/* Left Card - Rotated */}
            <rect x="30" y="80" width="140" height="220" rx="24" fill="#C4C4C4" transform="rotate(-25 100 190)"/>
            
            {/* Right Card - Slightly Rotated */}
            <rect x="180" y="40" width="160" height="260" rx="28" fill="#D9D9D9" transform="rotate(8 260 170)"/>
            
            {/* Phone Icon on Right Card */}
            <g transform="translate(240, 140) rotate(8)">
              <rect x="-15" y="-25" width="30" height="50" rx="4" stroke="#B0B0B0" strokeWidth="2" fill="none"/>
              <circle cx="0" cy="18" r="3" fill="#B0B0B0"/>
            </g>
            
            {/* Phone Icon on Left Card */}
            <g transform="translate(80, 160) rotate(-25)">
              <rect x="-12" y="-20" width="24" height="40" rx="3" stroke="#A0A0A0" strokeWidth="2" fill="none"/>
              <circle cx="0" cy="14" r="2.5" fill="#A0A0A0"/>
            </g>
            
            {/* Diagonal Slash Line */}
            <line x1="100" y1="350" x2="320" y2="50" stroke="#C4C4C4" strokeWidth="12" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Text */}
      <h2 className="text-3xl font-semibold text-neutral-black mb-3">
        No Saved Wallpapers
      </h2>
      <p className="text-neutral-gray text-center mb-8 max-w-md">
        Start saving your favorite wallpapers to see them here
      </p>

      {/* Button */}
      <Link
        to="/browse"
        className="bg-primary-orange text-white px-12 py-4 rounded-full hover:bg-primary-secondary transition-colors font-medium text-lg"
      >
        Browse Wallpapers
      </Link>
    </div>
  )
}

export default EmptyFavorites