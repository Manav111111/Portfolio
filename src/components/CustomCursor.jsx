// components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
        setIsPointer(true);
        setCursorVariant('pointer');
      } else if (e.target.closest('.skill-item')) {
        setCursorVariant('skill');
      } else {
        setIsPointer(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      mixBlendMode: 'difference' ,
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: '#3B82F6',
      mixBlendMode: 'normal' ,
    },
    skill: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 2,
      backgroundColor: '#8B5CF6',
      mixBlendMode: 'normal' ,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 shadow-lg"
        variants={variants}
        animate={cursorVariant}
        transition={{ 
          type: "tween", 
          ease: "backOut",
          duration: 0.15
        }}
      />
      <motion.div
        className="cursor-ring hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-50"
        variants={{
          default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0.7
          },
          pointer: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1.8,
            opacity: 1,
            borderColor: '#3B82F6'
          },
          skill: {
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            scale: 2.5,
            opacity: 1,
            borderColor: '#8B5CF6'
          }
        }}
        animate={cursorVariant}
        transition={{ 
          type: "tween", 
          ease: "backOut",
          duration: 0.2
        }}
      />
    </>
  );
};

export default CustomCursor;