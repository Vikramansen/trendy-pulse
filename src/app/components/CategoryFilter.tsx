import React from 'react';
import { motion } from 'framer-motion';
import { TREND_CATEGORIES } from '../utils/trending';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onChange }) => {
  return (
    <div className="w-full mb-6">
      <h3 className="text-gray-300 mb-3 text-center">Filter by Category</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <motion.button
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedCategory === null 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(null)}
        >
          All
        </motion.button>
        
        {TREND_CATEGORIES.map(category => (
          <motion.button
            key={category}
            className={`px-3 py-1 rounded-full text-sm capitalize transition-colors ${
              selectedCategory === category 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 