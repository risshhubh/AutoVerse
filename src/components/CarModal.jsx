import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const CarModal = ({ car, isOpen, onClose }) => {
  if (!car) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const getCategoryColor = (category) => {
    // Simplified palette usage for clarity and consistency
    const colors = {
      sedan: 'bg-pastel-sky/50 text-white border-pastel-blue',
      suv: 'bg-pastel-beige text-white border-pastel-blue',
      hatchback: 'bg-pastel-light text-pastel-blue border-pastel-blue',
      luxury: 'bg-pastel-blue/20 text-pastel-blue border-pastel-blue',
      electric: 'bg-white text-pastel-blue border-pastel-blue',
      sports: 'bg-red-500/20 text-red-700 border-red-500' // Distinctive color for sports
    }
    return colors[category] || 'bg-pastel-light text-pastel-blue border-pastel-blue'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-pastel-blue/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all shadow-sm group"
              >
                <X size={20} className="text-pastel-blue group-hover:text-blue-600" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getCategoryColor(car.category)}`}>
                  {car.category.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-extrabold text-pastel-blue tracking-tight">
                    {car.brand} {car.name}
                  </h2>
                  <p className="text-pastel-blue/70 text-lg font-medium">{car.year}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-pastel-blue">
                    {formatPrice(car.price)}
                  </span>
                </div>
              </div>

              <p className="text-pastel-blue/80 mb-8 leading-relaxed text-lg">
                {car.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-pastel-light rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-pastel-blue mb-4">Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-pastel-sky pb-2">
                      <span className="text-pastel-blue/70">Engine</span>
                      <span className="font-semibold text-pastel-blue">{car.specs.engine}</span>
                    </div>
                    <div className="flex justify-between border-b border-pastel-sky pb-2">
                      <span className="text-pastel-blue/70">Fuel Economy</span>
                      <span className="font-semibold text-pastel-blue">{car.specs.mpg}</span>
                    </div>
                    <div className="flex justify-between border-b border-pastel-sky pb-2">
                      <span className="text-pastel-blue/70">Transmission</span>
                      <span className="font-semibold text-pastel-blue">{car.specs.transmission}</span>
                    </div>
                    <div className="flex justify-between border-b border-pastel-sky pb-2">
                      <span className="text-pastel-blue/70">Drivetrain</span>
                      <span className="font-semibold text-pastel-blue">{car.specs.drivetrain}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-pastel-light rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-pastel-blue mb-4">Features</h3>
                  <ul className="space-y-3 text-pastel-blue/80">
                    {['Advanced Safety Systems', 'Modern Infotainment', 'Premium Materials', 'Fuel Efficient'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2.5 h-2.5 bg-pastel-blue rounded-full mr-3 shadow-sm"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 bg-pastel-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-500 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Dealer
                </motion.button>
                <motion.button
                  className="flex-1 bg-white text-pastel-blue border-2 border-pastel-light py-4 rounded-xl font-bold text-lg hover:border-pastel-sky hover:bg-pastel-light transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Test Drive
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CarModal