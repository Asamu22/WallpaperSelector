import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'
import SetWallpaperModal from '../components/SetWallpaperModal'
import { useWallpaper } from '../context/WallpaperContext'

const CategoryWallpapers = () => {
  const { categoryId } = useParams()
  const category = categories.find(c => c.id === parseInt(categoryId))
  
  // Map category names to wallpaper keys
  const categoryKey = category?.name.toLowerCase() || 'nature'
  const categoryWallpapers = wallpapers[categoryKey] || wallpapers.nature
  
  const { toggleFavorite, isFavorite } = useWallpaper()
  
  const [viewMode, setViewMode] = useState('grid')
  const [selectedWallpaper, setSelectedWallpaper] = useState(categoryWallpapers[0])
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleFavorite = () => {
    toggleFavorite(selectedWallpaper)
    if (isFavorite(selectedWallpaper.id)) {
      toast.success('Removed from favorites')
    } else {
      toast.success('Added to favorites!')
    }
  }

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link 
        to="/browse" 
        className="flex items-center gap-2 text-neutral-gray hover:text-neutral-black transition-colors mb-8"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to Categories</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Wallpapers Grid */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-5xl" style={{ fontWeight: 400, fontSize: '38px', fontFamily: 'Clash Display' }}>
              {category.name}
            </h1>
            
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

          {/* Wallpapers Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
            {categoryWallpapers.map((wallpaper) => (
              <div
                key={wallpaper.id}
                onClick={() => {
                  setSelectedWallpaper(wallpaper)
                  setIsDescriptionExpanded(false)
                }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ width: '190.18px', height: '290.71px' }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${wallpaper.image})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-4">
                  {/* Favorite Icon */}
                  <div className="flex justify-end">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg width="20" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1875 0C13.2516 0 11.5566 0.8325 10.5 2.23969C9.44344 0.8325 7.74844 0 5.8125 0C4.27146 0.00173694 2.79404 0.614681 1.70436 1.70436C0.614681 2.79404 0.00173694 4.27146 0 5.8125C0 12.375 9.73031 17.6869 10.1447 17.9062C10.2539 17.965 10.376 17.9958 10.5 17.9958C10.624 17.9958 10.7461 17.965 10.8553 17.9062C11.2697 17.6869 21 12.375 21 5.8125C20.9983 4.27146 20.3853 2.79404 19.2956 1.70436C18.206 0.614681 16.7285 0.00173694 15.1875 0ZM10.5 16.3875C8.78813 15.39 1.5 10.8459 1.5 5.8125C1.50149 4.66921 1.95632 3.57317 2.76475 2.76475C3.57317 1.95632 4.66921 1.50149 5.8125 1.5C7.63594 1.5 9.16687 2.47125 9.80625 4.03125C9.86275 4.16881 9.95888 4.28646 10.0824 4.36926C10.2059 4.45207 10.3513 4.49627 10.5 4.49627C10.6487 4.49627 10.7941 4.45207 10.9176 4.36926C11.0411 4.28646 11.1372 4.16881 11.1937 4.03125C11.8331 2.46844 13.3641 1.5 15.1875 1.5C16.3308 1.50149 17.4268 1.95632 18.2353 2.76475C19.0437 3.57317 19.4985 4.66921 19.5 5.8125C19.5 10.8384 12.21 15.3891 10.5 16.3875Z" fill="white"/>
                      </svg>
                    </button>
                  </div>

                  {/* Title and Tag */}
                  <div>
                    <h3 className="text-white text-lg mb-2" style={{ fontWeight: 500 }}>
                      {wallpaper.name}
                    </h3>
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {wallpaper.categoryName}
                    </span>
                  </div>
                </div>

                {/* Active Indicator */}
                {selectedWallpaper.id === wallpaper.id && (
                  <div className="absolute top-4 right-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.25" y="0.25" width="39.5" height="39.5" rx="19.75" fill="white"/>
                      <rect x="0.25" y="0.25" width="39.5" height="39.5" rx="19.75" stroke="url(#paint0_linear_1_890)" strokeWidth="0.5"/>
                      <path d="M20 16C20 16 20 16 19.24 15C18.36 13.84 17.06 13 15.5 13C13.01 13 11 15.01 11 17.5C11 18.43 11.28 19.29 11.76 20C12.57 21.21 20 29 20 29M20 16C20 16 20 16 20.76 15C21.64 13.84 22.94 13 24.5 13C26.99 13 29 15.01 29 17.5C29 18.43 28.72 19.29 28.24 20C27.43 21.21 20 29 20 29" fill="#FFA821"/>
                      <defs>
                        <linearGradient id="paint0_linear_1_890" x1="1.48115" y1="4.35914" x2="39.8294" y2="6.59133" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="0.240561" stopColor="#CFCFCF" stopOpacity="0"/>
                          <stop offset="0.735621" stopColor="#EEEEEE" stopOpacity="0"/>
                          <stop offset="1" stopColor="white"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-5xl mb-12" style={{ fontWeight: 600, fontFamily: 'Clash Display' }}>
                Preview
              </h2>

              {/* Wallpaper Info */}
              <div className="mb-8">
                <p className="text-neutral-gray text-sm mb-2">Name</p>
                <h3 className="text-3xl mb-8" style={{ fontWeight: 500 }}>
                  {selectedWallpaper.name}
                </h3>

                <p className="text-neutral-gray text-sm mb-3">Tags</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedWallpaper.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-lightGray text-neutral-black text-sm px-4 py-2 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-gray text-sm mb-3">Description</p>
                <div className="mb-8">
                  <div 
                    onClick={() => selectedWallpaper.description.length > 100 && setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className={`relative ${selectedWallpaper.description.length > 100 ? 'cursor-pointer' : ''}`}
                  >
                    <p 
                      className={`text-neutral-gray text-base leading-relaxed ${
                        !isDescriptionExpanded ? 'line-clamp-4' : ''
                      }`}
                    >
                      {selectedWallpaper.description}
                    </p>
                    {!isDescriptionExpanded && selectedWallpaper.description.length > 100 && (
                      <div className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-3 mb-12">
                <button className="hover:opacity-80 transition-opacity">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" fill="#7C7C7C" fillOpacity="0.1"/>
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" stroke="#E5E5E5" strokeWidth="0.5"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 22.5C19.5 22.7652 19.6054 23.0196 19.7929 23.2071C19.9804 23.3947 20.2348 23.5 20.5 23.5C20.7652 23.5 21.0196 23.3947 21.2071 23.2071C21.3946 23.0196 21.5 22.7652 21.5 22.5V14.5H23.5C23.6978 14.5 23.891 14.4413 24.0555 14.3314C24.2199 14.2215 24.348 14.0654 24.4237 13.8827C24.4993 13.7 24.5192 13.499 24.4806 13.305C24.442 13.111 24.3468 12.9329 24.207 12.793L21.207 9.79303C21.0195 9.60556 20.7652 9.50024 20.5 9.50024C20.2348 9.50024 19.9805 9.60556 19.793 9.79303L16.793 12.793C16.6532 12.9329 16.558 13.111 16.5194 13.305C16.4808 13.499 16.5007 13.7 16.5763 13.8827C16.652 14.0654 16.7801 14.2215 16.9445 14.3314C17.109 14.4413 17.3022 14.5 17.5 14.5H19.5V22.5ZM12.5 16.5C12.2348 16.5 11.9804 16.6054 11.7929 16.7929C11.6054 16.9805 11.5 17.2348 11.5 17.5V26.5C11.5 27.2957 11.8161 28.0587 12.3787 28.6214C12.9413 29.184 13.7044 29.5 14.5 29.5H26.5C27.2956 29.5 28.0587 29.184 28.6213 28.6214C29.1839 28.0587 29.5 27.2957 29.5 26.5V17.5C29.5 17.2348 29.3946 16.9805 29.2071 16.7929C29.0196 16.6054 28.7652 16.5 28.5 16.5H26.5C26.2348 16.5 25.9804 16.6054 25.7929 16.7929C25.6054 16.9805 25.5 17.2348 25.5 17.5C25.5 17.7652 25.6054 18.0196 25.7929 18.2071C25.9804 18.3947 26.2348 18.5 26.5 18.5H27.5V26.5C27.5 26.7652 27.3946 27.0196 27.2071 27.2071C27.0196 27.3947 26.7652 27.5 26.5 27.5H14.5C14.2348 27.5 13.9804 27.3947 13.7929 27.2071C13.6054 27.0196 13.5 26.7652 13.5 26.5V18.5H14.5C14.7652 18.5 15.0196 18.3947 15.2071 18.2071C15.3946 18.0196 15.5 17.7652 15.5 17.5C15.5 17.2348 15.3946 16.9805 15.2071 16.7929C15.0196 16.6054 14.7652 16.5 14.5 16.5H12.5Z" fill="#808080"/>
                  </svg>
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" fill="#7C7C7C" fillOpacity="0.1"/>
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" stroke="#E5E5E5" strokeWidth="0.5"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5 22.5C19.5 22.7652 19.6054 23.0196 19.7929 23.2071C19.9804 23.3947 20.2348 23.5 20.5 23.5C20.7652 23.5 21.0196 23.3947 21.2071 23.2071C21.3946 23.0196 21.5 22.7652 21.5 22.5V14.5H23.5C23.6978 14.5 23.891 14.4413 24.0555 14.3314C24.2199 14.2215 24.348 14.0654 24.4237 13.8827C24.4993 13.7 24.5192 13.499 24.4806 13.305C24.442 13.111 24.3468 12.9329 24.207 12.793L21.207 9.79303C21.0195 9.60556 20.7652 9.50024 20.5 9.50024C20.2348 9.50024 19.9805 9.60556 19.793 9.79303L16.793 12.793C16.6532 12.9329 16.558 13.111 16.5194 13.305C16.4808 13.499 16.5007 13.7 16.5763 13.8827C16.652 14.0654 16.7801 14.2215 16.9445 14.3314C17.109 14.4413 17.3022 14.5 17.5 14.5H19.5V22.5ZM12.5 16.5C12.2348 16.5 11.9804 16.6054 11.7929 16.7929C11.6054 16.9805 11.5 17.2348 11.5 17.5V26.5C11.5 27.2957 11.8161 28.0587 12.3787 28.6214C12.9413 29.184 13.7044 29.5 14.5 29.5H26.5C27.2956 29.5 28.0587 29.184 28.6213 28.6214C29.1839 28.0587 29.5 27.2957 29.5 26.5V17.5C29.5 17.2348 29.3946 16.9805 29.2071 16.7929C29.0196 16.6054 28.7652 16.5 28.5 16.5H26.5C26.2348 16.5 25.9804 16.6054 25.7929 16.7929C25.6054 16.9805 25.5 17.2348 25.5 17.5C25.5 17.7652 25.6054 18.0196 25.7929 18.2071C25.9804 18.3947 26.2348 18.5 26.5 18.5H27.5V26.5C27.5 26.7652 27.3946 27.0196 27.2071 27.2071C27.0196 27.3947 26.7652 27.5 26.5 27.5H14.5C14.2348 27.5 13.9804 27.3947 13.7929 27.2071C13.6054 27.0196 13.5 26.7652 13.5 26.5V18.5H14.5C14.7652 18.5 15.0196 18.3947 15.2071 18.2071C15.3946 18.0196 15.5 17.7652 15.5 17.5C15.5 17.2348 15.3946 16.9805 15.2071 16.7929C15.0196 16.6054 14.7652 16.5 14.5 16.5H12.5Z" fill="#808080"/>
                  </svg>
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" fill="#7C7C7C" fillOpacity="0.1"/>
                    <rect x="0.25" y="0.25" width="40.5" height="40.5" rx="11.25" stroke="#E5E5E5" strokeWidth="0.5"/>
                    <path d="M28.3999 21.1599C28.2396 20.9774 28.1512 20.7428 28.1512 20.4999C28.1512 20.257 28.2396 20.0224 28.3999 19.8399L29.6799 18.3999C29.8209 18.2426 29.9085 18.0446 29.9301 17.8344C29.9516 17.6242 29.9061 17.4126 29.7999 17.2299L27.7999 13.7699C27.6948 13.5874 27.5348 13.4428 27.3426 13.3566C27.1505 13.2704 26.9361 13.2471 26.7299 13.2899L24.8499 13.6699C24.6107 13.7193 24.3616 13.6795 24.1498 13.5579C23.9379 13.4363 23.7779 13.2414 23.6999 13.0099L23.0899 11.1799C23.0228 10.9813 22.895 10.8088 22.7245 10.6867C22.5541 10.5647 22.3495 10.4994 22.1399 10.4999H18.1399C17.9218 10.4885 17.706 10.5488 17.5255 10.6716C17.3449 10.7944 17.2095 10.9729 17.1399 11.1799L16.5799 13.0099C16.5019 13.2414 16.3419 13.4363 16.13 13.5579C15.9181 13.6795 15.6691 13.7193 15.4299 13.6699L13.4999 13.2899C13.3044 13.2623 13.1052 13.2931 12.9272 13.3785C12.7493 13.464 12.6006 13.6001 12.4999 13.7699L10.4999 17.2299C10.3911 17.4105 10.3421 17.621 10.3601 17.8311C10.378 18.0413 10.462 18.2403 10.5999 18.3999L11.8699 19.8399C12.0302 20.0224 12.1186 20.257 12.1186 20.4999C12.1186 20.7428 12.0302 20.9774 11.8699 21.1599L10.5999 22.5999C10.462 22.7595 10.378 22.9585 10.3601 23.1687C10.3421 23.3788 10.3911 23.5892 10.4999 23.7699L12.4999 27.2299C12.605 27.4124 12.765 27.557 12.9571 27.6432C13.1493 27.7294 13.3637 27.7527 13.5699 27.7099L15.4499 27.3299C15.6891 27.2805 15.9381 27.3203 16.15 27.4419C16.3619 27.5635 16.5219 27.7584 16.5999 27.9899L17.2099 29.8199C17.2795 30.0269 17.4149 30.2054 17.5955 30.3282C17.776 30.451 17.9918 30.5113 18.2099 30.4999H22.2099C22.4195 30.5004 22.6241 30.4351 22.7945 30.3131C22.965 30.191 23.0928 30.0185 23.1599 29.8199L23.7699 27.9899C23.8479 27.7584 24.0079 27.5635 24.2198 27.4419C24.4316 27.3203 24.6807 27.2805 24.9199 27.3299L26.7999 27.7099C27.0061 27.7527 27.2205 27.7294 27.4126 27.6432C27.6048 27.557 27.7648 27.4124 27.8699 27.2299L29.8699 23.7699C29.9761 23.5872 30.0216 23.3756 30.0001 23.1654C29.9785 22.9552 29.8909 22.7572 29.7499 22.5999L28.3999 21.1599ZM26.9099 22.4999L27.7099 23.3999L26.4299 25.6199L25.2499 25.3799C24.5297 25.2327 23.7805 25.355 23.1445 25.7237C22.5085 26.0924 22.03 26.6817 21.7999 27.3799L21.4199 28.4999H18.8599L18.4999 27.3599C18.2698 26.6617 17.7913 26.0724 17.1553 25.7037C16.5193 25.335 15.7701 25.2127 15.0499 25.3599L13.8699 25.5999L12.5699 23.3899L13.3699 22.4899C13.8619 21.9399 14.1338 21.2278 14.1338 20.4899C14.1338 19.752 13.8619 19.0399 13.3699 18.4899L12.5699 17.5899L13.8499 15.3899L15.0299 15.6299C15.7501 15.7771 16.4993 15.6548 17.1353 15.2861C17.7713 14.9174 18.2498 14.3281 18.4799 13.6299L18.8599 12.4999H21.4199L21.7999 13.6399C22.03 14.3381 22.5085 14.9274 23.1445 15.2961C23.7805 15.6648 24.5297 15.7871 25.2499 15.6399L26.4299 15.3999L27.7099 17.6199L26.9099 18.5199C26.4235 19.0687 26.1549 19.7766 26.1549 20.5099C26.1549 21.2432 26.4235 21.9511 26.9099 22.4999ZM20.1399 16.4999C19.3488 16.4999 18.5754 16.7345 17.9176 17.174C17.2598 17.6135 16.7471 18.2383 16.4444 18.9692C16.1416 19.7001 16.0624 20.5043 16.2168 21.2803C16.3711 22.0562 16.7521 22.7689 17.3115 23.3283C17.8709 23.8877 18.5836 24.2687 19.3595 24.423C20.1355 24.5774 20.9397 24.4982 21.6706 24.1954C22.4015 23.8927 23.0262 23.38 23.4658 22.7222C23.9053 22.0644 24.1399 21.291 24.1399 20.4999C24.1399 19.439 23.7185 18.4216 22.9683 17.6715C22.2182 16.9213 21.2008 16.4999 20.1399 16.4999ZM20.1399 22.4999C19.7443 22.4999 19.3577 22.3826 19.0288 22.1628C18.6999 21.9431 18.4435 21.6307 18.2921 21.2653C18.1408 20.8998 18.1012 20.4977 18.1783 20.1097C18.2555 19.7218 18.446 19.3654 18.7257 19.0857C19.0054 18.806 19.3618 18.6155 19.7497 18.5383C20.1377 18.4612 20.5398 18.5008 20.9053 18.6521C21.2707 18.8035 21.5831 19.0599 21.8028 19.3888C22.0226 19.7177 22.1399 20.1043 22.1399 20.4999C22.1399 21.0303 21.9292 21.539 21.5541 21.9141C21.179 22.2892 20.6703 22.4999 20.1399 22.4999Z" fill="#808080"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Phone Mockup and Buttons */}
            <div className="flex flex-col items-end">
              <div className="relative w-72 h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div 
                  className="w-full h-full rounded-[2.5rem] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${selectedWallpaper.image})`,
                  }}
                />
              </div>
              
              {/* Action Buttons - Below Phone */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={handleToggleFavorite}
                  className={`flex items-center justify-center gap-3 px-8 border-2 rounded-2xl transition-colors whitespace-nowrap ${
                    isFavorite(selectedWallpaper.id) 
                      ? 'border-primary-orange bg-primary-orange/10' 
                      : 'border-neutral-black hover:bg-neutral-lightGray'
                  }`} 
                  style={{ width: '200px', height: '50px' }}
                >
                  <svg width="20" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M15.1875 0C13.2516 0 11.5566 0.8325 10.5 2.23969C9.44344 0.8325 7.74844 0 5.8125 0C4.27146 0.00173694 2.79404 0.614681 1.70436 1.70436C0.614681 2.79404 0.00173694 4.27146 0 5.8125C0 12.375 9.73031 17.6869 10.1447 17.9062C10.2539 17.965 10.376 17.9958 10.5 17.9958C10.624 17.9958 10.7461 17.965 10.8553 17.9062C11.2697 17.6869 21 12.375 21 5.8125C20.9983 4.27146 20.3853 2.79404 19.2956 1.70436C18.206 0.614681 16.7285 0.00173694 15.1875 0Z" 
                      fill={isFavorite(selectedWallpaper.id) ? "#FFA821" : "none"}
                      stroke={isFavorite(selectedWallpaper.id) ? "#FFA821" : "currentColor"}
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="font-medium" style={{ fontSize: '14px' }}>
                    {isFavorite(selectedWallpaper.id) ? 'Saved' : 'Save to Favorites'}
                  </span>
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 bg-primary-orange text-white rounded-2xl hover:bg-primary-secondary transition-colors font-medium whitespace-nowrap" 
                  style={{ width: '200px', height: '50px', fontSize: '14px' }}
                >
                  Set to Wallpaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Set Wallpaper Modal */}
      <SetWallpaperModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wallpaper={selectedWallpaper}
      />
    </div>
  )
}

export default CategoryWallpapers
