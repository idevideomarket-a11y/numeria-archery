import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  max: number;
  showLabel?: boolean;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  max,
  showLabel = true,
  color = 'bg-gradient-to-r from-academy-gold to-yellow-400',
}) => {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{current} / {max}</span>
        </div>
      )}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
