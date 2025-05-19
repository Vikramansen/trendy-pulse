import React from 'react';
import { motion } from 'framer-motion';
import { TrendingItem } from '../utils/trending';
import { FaChartLine, FaHashtag, FaMusic, FaNewspaper, FaGamepad } from 'react-icons/fa';
import { FaTshirt, FaMicrochip, FaTv } from 'react-icons/fa';

interface TrendingCardProps {
  item: TrendingItem;
  index: number;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ item, index }) => {
  // Get icon based on category
  const getIcon = () => {
    switch (item.category.toLowerCase()) {
      case 'news':
        return <FaNewspaper className="text-blue-400" />;
      case 'social':
        return <FaHashtag className="text-purple-400" />;
      case 'entertainment':
        return <FaTv className="text-pink-400" />;
      case 'music':
        return <FaMusic className="text-green-400" />;
      case 'sports':
        return <FaChartLine className="text-red-400" />;
      case 'tech':
        return <FaMicrochip className="text-cyan-400" />;
      case 'fashion':
        return <FaTshirt className="text-yellow-400" />;
      case 'gaming':
        return <FaGamepad className="text-orange-400" />;
      default:
        return <FaChartLine className="text-gray-400" />;
    }
  };

  return (
    <motion.div
      className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 card-glow border border-purple-500/30 hover:border-purple-500/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-purple-300">#{item.rank}</span>
          <div className="mt-1">
            {getIcon()}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          
          {item.description && (
            <p className="text-sm text-gray-300 mb-2">{item.description}</p>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-300 uppercase font-medium">
              {item.category}
            </span>
            
            {item.url && (
              <motion.button
                className="text-xs bg-purple-600 hover:bg-purple-500 px-2 py-1 rounded text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(item.url, '_blank')}
              >
                Learn More
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingCard; 