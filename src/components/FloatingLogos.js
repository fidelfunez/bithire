import React from 'react';
import { motion } from 'framer-motion';

const FloatingLogos = () => {
  // Array of logo paths - using the 2D logos you provided
  const logos = [
    '/logos/2D Logos/1.webp',
    '/logos/2D Logos/2.webp',
    '/logos/2D Logos/3.webp',
    '/logos/2D Logos/4.webp',
    '/logos/2D Logos/5.webp',
    '/logos/2D Logos/6.webp',
    '/logos/2D Logos/7.webp',
    '/logos/2D Logos/8.webp'
  ];

  // Create more instances by repeating logos and varying positions
  const logoInstances = Array.from({ length: 24 }, (_, index) => {
    const logoIndex = index % logos.length;
    const logo = logos[logoIndex];
    
    // Better distribution across the screen
    const row = Math.floor(index / 6); // 6 logos per row
    const col = index % 6; // 6 columns
    
    return {
      id: index,
      logo,
      baseX: (col * 16.67) + (Math.random() * 8), // 16.67% per column + random offset
      baseY: (row * 20) + (Math.random() * 10), // 20% per row + random offset
    };
  });

  // Generate random animations for each logo instance
  const getRandomAnimation = (instance) => {
    const baseDelay = instance.id * 0.3; // Faster cycling
    const duration = 25 + Math.random() * 15; // 25-40 seconds
    const xRange = Math.random() * 150 - 75; // -75 to 75px movement
    const yRange = Math.random() * 150 - 75; // -75 to 75px movement
    
    return {
      x: [0, xRange, 0],
      y: [0, yRange, 0],
      rotate: [0, 360],
      scale: [1, 1.15, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
        delay: baseDelay
      }
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {logoInstances.map((instance) => (
        <motion.div
          key={instance.id}
          className="absolute"
          style={{
            left: `${instance.baseX}%`,
            top: `${instance.baseY}%`,
          }}
          animate={getRandomAnimation(instance)}
        >
          <img
            src={instance.logo}
            alt={`Tech logo ${instance.id + 1}`}
            loading="lazy"
            className="w-14 h-14 md:w-18 md:h-18 opacity-20 hover:opacity-40 transition-opacity duration-300"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLogos;
