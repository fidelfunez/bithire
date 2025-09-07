import React from 'react';
import { motion } from 'framer-motion';

const ParticleSystem = () => {
  // Array of code symbols to use as particles
  const symbols = ['<>', '</>', '{}', '[]', '()', '//', '/*', '*/', '=>', '&&', '||', '++', '--'];
  
  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-primary-400/10 font-mono text-sm md:text-base"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleSystem;
