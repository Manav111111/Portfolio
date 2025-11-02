
import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0"
      style={{ zIndex: 9999 }}
      aria-hidden
    >
      <div
        // keep Tailwind classes for projects with Tailwind; inline styles ensure visibility when Tailwind isn't applied
        className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80"
        style={{
          transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`,
          // inline fallback background + blur to mimic Tailwind classes
          background: 'linear-gradient(90deg, #ec4899 0%, #3b82f6 100%)',
          filter: 'blur(20px)',
          opacity: 0.8,
          width: 80,
          height: 80,
          borderRadius: '9999px',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}