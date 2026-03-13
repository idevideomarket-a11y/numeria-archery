import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface StarDisplayProps {
  count: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const StarDisplay: React.FC<StarDisplayProps> = ({
  count,
  maxStars = 3,
  size = 'md',
  animate = true,
}) => {
  const sizes = {
    sm: 20,
    md: 32,
    lg: 48,
  };

  const starSize = sizes[size];

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }).map((_, index) => (
        <motion.div
          key={index}
          initial={animate ? { scale: 0, rotate: -180 } : false}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
        >
          <Star
            size={starSize}
            className={index < count ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
          />
        </motion.div>
      ))}
    </div>
  );
};
