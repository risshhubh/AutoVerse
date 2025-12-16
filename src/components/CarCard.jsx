import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CarCard = ({ car, onViewDetails }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getCategoryColor = (category) => {
    const colors = {
      sedan: 'bg-blue-100 text-blue-800',
      suv: 'bg-green-100 text-green-800',
      hatchback: 'bg-purple-100 text-purple-800',
      luxury: 'bg-yellow-100 text-yellow-800',
      electric: 'bg-emerald-100 text-emerald-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(car.category)}`}>
            {car.category.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            {car.brand} {car.name}
          </h3>
          <span className="text-sm text-gray-500">{car.year}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {car.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Engine:</span>
            <span className="text-gray-800 font-medium">{car.specs.engine}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Fuel Economy:</span>
            <span className="text-gray-800 font-medium">{car.specs.mpg}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Drivetrain:</span>
            <span className="text-gray-800 font-medium">{car.specs.drivetrain}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">
              {formatPrice(car.price)}
            </span>
          </div>

          <Link
            to={`/vehicle/${car.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default CarCard