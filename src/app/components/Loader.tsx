import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const dotVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <motion.div
        className="flex items-center justify-center gap-2"
        variants={containerVariants}
        animate="animate"
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-pink-500"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={0}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-purple-500"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={0.1}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-blue-500"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={0.2}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-cyan-500"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={0.3}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-green-500"
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={0.4}
        />
      </motion.div>
      <p className="mt-4 text-gray-400 text-lg party-font">Loading trendy content...</p>
    </div>
  );
};

export default Loader; 