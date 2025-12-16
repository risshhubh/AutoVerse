import { motion } from 'framer-motion'
import { carCategories } from '../data/cars'

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-slate-700 mb-4 tracking-tight">Categories</h3>
      <div className="flex flex-wrap gap-3">
        {carCategories.map((category, index) => (
          <motion.button
            key={category.id}
            className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 shadow-sm border ${selectedCategory === category.id
              ? 'bg-sky-200 text-sky-900 border-sky-300 shadow-md'
              : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:border-slate-200'
              }`}
            onClick={() => onCategoryChange(category.id)}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default CategoryFilter