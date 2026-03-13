import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Pause } from 'lucide-react';
import { GameBoard } from '../game/GameBoard';
import { Level } from '../../types';
import { useAudio } from '../../hooks/useAudio';

interface GameplayProps {
  level: Level;
  onComplete: (score: number, stars: number) => void;
  onExit: () => void;
}

export const Gameplay: React.FC<GameplayProps> = ({ level, onComplete, onExit }) => {
  const { playSound } = useAudio();

  const handleExit = () => {
    playSound('click');
    onExit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <button 
          onClick={handleExit}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-base md:text-lg font-bold text-dark-text">Level {level.id}</span>
          <div className="w-20 md:w-32 h-2 md:h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-academy-gold rounded-full" style={{ width: '30%' }} />
          </div>
        </div>

        <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
          <Pause size={24} className="text-gray-600" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-3 md:py-4"
      >
        <h2 className="text-lg md:text-xl font-bold text-dark-text">{level.name}</h2>
        <p className="text-gray-600 text-xs md:text-sm">{level.description}</p>
      </motion.div>

      <div className="px-4">
        <GameBoard level={level} onComplete={onComplete} />
      </div>
    </div>
  );
};
