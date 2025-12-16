import { motion } from 'framer-motion'
import { carBrands } from '../data/cars'

const BrandFilter = ({ selectedBrand, onBrandChange }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-xl font-bold text-pastel-blue mb-4 tracking-tight">Select Brand</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {carBrands.map((brand, index) => (
          <motion.button
            key={brand}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm border ${selectedBrand === brand
                ? 'bg-pastel-blue text-white border-pastel-blue shadow-md'
                : 'bg-white text-pastel-blue border-pastel-sky hover:bg-pastel-light hover:border-pastel-blue'
              }`}
            onClick={() => onBrandChange(brand)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {brand}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default BrandFilter