import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SectionFloatingLogos = () => {
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

  // Memoize logo instances to prevent re-creation on every render
  const logoInstances = useMemo(() => {
    const instances = [];
    
    // Create a grid system for better distribution
    const gridCols = 6; // 6 columns
    const gridRows = 8; // 8 rows
    const cellWidth = 100 / gridCols; // ~16.67% per cell
    const cellHeight = 100 / gridRows; // ~12.5% per cell
    
    // Create grid positions with some randomness within each cell
    const gridPositions = [];
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const baseX = col * cellWidth;
        const baseY = row * cellHeight;
        
        // Add some randomness within each cell (but keep them well separated)
        const randomX = baseX + (Math.random() * 8) + 4; // 4-12% randomness
        const randomY = baseY + (Math.random() * 6) + 3; // 3-9% randomness
        
        gridPositions.push({
          x: Math.min(randomX, 90), // Cap at 90% to avoid edges
          y: Math.min(randomY, 90)  // Cap at 90% to avoid edges
        });
      }
    }
    
    // Shuffle the grid positions for random distribution
    const shuffledPositions = gridPositions.sort(() => Math.random() - 0.5);
    
    // Add logos using the grid positions
    let positionIndex = 0;
    logos.forEach((logo, logoIndex) => {
      // Add 2-3 instances of each logo for good coverage
      const instancesPerLogo = Math.floor(Math.random() * 2) + 2; // 2-3 instances
      
      for (let i = 0; i < instancesPerLogo; i++) {
        if (positionIndex < shuffledPositions.length) {
          const position = shuffledPositions[positionIndex];
          instances.push({
            id: instances.length,
            logo,
            baseX: position.x,
            baseY: position.y,
          });
          positionIndex++;
        }
      }
    });
    
    // Add some extra logos for bottom areas using remaining grid positions
    const remainingPositions = shuffledPositions.slice(positionIndex);
    const bottomPositions = remainingPositions.filter(pos => pos.y > 60); // Bottom 40%
    
    logos.forEach((logo, logoIndex) => {
      // Add 1 extra instance for bottom areas
      if (bottomPositions.length > 0) {
        const randomBottomPos = bottomPositions[Math.floor(Math.random() * bottomPositions.length)];
        instances.push({
          id: instances.length,
          logo,
          baseX: randomBottomPos.x,
          baseY: randomBottomPos.y,
        });
      }
    });
    
    return instances;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this only runs once

  // Generate stable animations for each logo instance
  const getStableAnimation = (instance) => {
    // Use instance.id as seed for consistent random values
    const seed = instance.id;
    const baseDelay = seed * 0.3;
    
    // Create pseudo-random but stable values based on seed
    const duration = 20 + (seed % 20); // 20-40 seconds
    const xRange = ((seed * 7) % 60) - 30; // -30 to 30px movement
    const yRange = ((seed * 11) % 60) - 30; // -30 to 30px movement
    
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {logoInstances.map((instance) => (
        <motion.div
          key={instance.id}
          className="absolute"
          style={{
            left: `${instance.baseX}%`,
            top: `${instance.baseY}%`,
          }}
          animate={getStableAnimation(instance)}
        >
          <img
            src={instance.logo}
            alt={`Tech logo ${instance.id + 1}`}
            loading="lazy"
            className="w-12 h-12 md:w-16 md:h-16 opacity-20 hover:opacity-40 transition-opacity duration-300"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionFloatingLogos;
