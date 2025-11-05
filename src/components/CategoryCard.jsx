import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link
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
  )
}

export default CategoryCard
