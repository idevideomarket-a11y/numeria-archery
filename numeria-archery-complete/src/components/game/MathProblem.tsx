import React from 'react';
import { motion } from 'framer-motion';
import { MathProblem as MathProblemType } from '../../types';

interface MathProblemProps {
  problem: MathProblemType;
}

export const MathProblem: React.FC<MathProblemProps> = ({ problem }) => {
  return (
    <motion.div
      className="bg-white/95 rounded-full px-8 py-6 md:px-12 md:py-8 shadow-xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="text-4xl md:text-6xl font-bold text-dark-text flex items-center gap-3 md:gap-4">
        <span>{problem.num1}</span>
        <span className="text-academy-gold">{problem.operator}</span>
        <span>{problem.num2}</span>
        <span className="text-sky-blue">=</span>
        <span className="text-3xl md:text-4xl text-gray-400">?</span>
      </div>
    </motion.div>
  );
};
