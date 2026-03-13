import React from 'react';
import { motion } from 'framer-motion';

interface TargetProps {
  value: number;
  onClick: () => void;
  isCorrect?: boolean;
  showResult?: boolean;
  disabled?: boolean;
}

export const Target: React.FC<TargetProps> = ({
  value,
  onClick,
  isCorrect = false,
  showResult = false,
  disabled = false,
}) => {
  const getBackgroundColor = () => {
    if (!showResult) return 'bg-gradient-to-br from-sky-blue to-sky-blue-dark';
    if (isCorrect) return 'bg-gradient-to-br from-meadow-green to-green-500';
    return 'bg-gradient-to-br from-orange-400 to-orange-500';
  };

  return (
    <motion.button
      className={`
        w-24 h-24 md:w-32 md:h-32 rounded-full 
        ${getBackgroundColor()}
        text-white font-bold text-3xl md:text-4xl
        shadow-lg flex items-center justify-center
        ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      animate={showResult && !isCorrect ? { x: [-5, 5, -5, 5, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      {value}
    </motion.button>
  );
};
