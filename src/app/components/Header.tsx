import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot } from 'react-icons/fa6';
import { GiPartyPopper } from 'react-icons/gi';
import { LocationData } from '../utils/location';

interface HeaderProps {
  location: LocationData | null;
  loading: boolean;
}

const Header: React.FC<HeaderProps> = ({ location, loading }) => {
  return (
    <header className="w-full py-6 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div 
        className="flex items-center gap-2 mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          animate={{ rotate: [0, 15, -15, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <GiPartyPopper className="text-4xl text-pink-500" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold party-font gradient-text">
          Trendy Pulse
        </h1>
        
        <motion.div 
          animate={{ rotate: [0, -15, 15, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <GiPartyPopper className="text-4xl text-blue-500" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-md md:text-xl text-center mb-2 max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-300">
          Discover what's hot right now, personalized for your location!
        </p>
      </motion.div>
      
      <motion.div
        className="flex items-center mt-2 text-sm md:text-base"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FaLocationDot className="text-red-500 mr-1" />
        {loading ? (
          <span className="text-gray-400">Detecting location...</span>
        ) : location ? (
          <span className="text-gray-300">
            {location.city ? `${location.city}, ` : ''}
            {location.country || 'Location detected'}
          </span>
        ) : (
          <span className="text-gray-400">Location unavailable</span>
        )}
      </motion.div>
    </header>
  );
};

export default Header; 