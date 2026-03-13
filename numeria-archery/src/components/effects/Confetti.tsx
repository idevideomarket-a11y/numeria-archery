import React from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  active: boolean;
}

export const Confetti: React.FC<ConfettiProps> = ({ active }) => {
  if (!active) return null;

  const colors = ['#F4B942', '#7CB342', '#87CEEB', '#FF8A65', '#B39DDB'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: 'easeOut',
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};
