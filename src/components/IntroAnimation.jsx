// components/IntroAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const IntroAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const name = "PORTFOLIO".split("");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div className="flex space-x-2 mb-8">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-4xl md:text-6xl font-bold text-blue-600"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-600 text-lg"
        >
          Welcome to my portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;