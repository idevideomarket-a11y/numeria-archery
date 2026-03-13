import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw, Grid3X3 } from 'lucide-react';
import { Button } from '../ui/Button';
import { StarDisplay } from '../ui/StarDisplay';
import { Confetti } from '../effects/Confetti';
import { useGameStore } from '../../store/gameStore';
import { useAudio } from '../../hooks/useAudio';

interface LevelCompleteProps {
  levelId: number;
  score: number;
  stars: number;
  onNext: () => void;
  onReplay: () => void;
  onLevelSelect: () => void;
}

export const LevelComplete: React.FC<LevelCompleteProps> = ({
  levelId,
  score,
  stars,
  onNext,
  onReplay,
  onLevelSelect,
}) => {
  const { coins } = useGameStore();
  const { playSound } = useAudio();

  const coinsEarned = stars * 5;

  useEffect(() => {
    playSound('complete');
  }, [playSound]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 flex flex-col items-center justify-center p-4 md:p-6">
      <Confetti active={stars === 3} />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-center mb-6 md:mb-8"
      >
        <div className="text-5xl md:text-6xl mb-4">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">Level Complete!</h1>
        <p className="text-gray-600 text-base md:text-lg">Amazing work!</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="mb-6 md:mb-8"
      >
        <StarDisplay count={stars} size="lg" animate />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full max-w-sm mb-6 md:mb-8"
      >
        <h2 className="text-lg md:text-xl font-bold text-center mb-4">Your Score</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm md:text-base">Points earned</span>
            <span className="text-xl md:text-2xl font-bold text-academy-gold">{score}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm md:text-base">Coins earned</span>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">🪙</span>
              <span className="text-lg md:text-xl font-bold text-academy-gold">+{coinsEarned}</span>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm md:text-base">Total coins</span>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">🪙</span>
                <span className="text-lg md:text-xl font-bold">{coins + coinsEarned}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col gap-3 w-full max-w-sm"
      >
        <Button onClick={onNext} variant="primary" size="lg" icon={<ArrowRight size={24} />}>
          Next Level
        </Button>
        
        <div className="flex gap-3">
          <Button onClick={onReplay} variant="secondary" className="flex-1" icon={<RotateCcw size={20} />}>
            Replay
          </Button>
          <Button onClick={onLevelSelect} variant="outline" className="flex-1" icon={<Grid3X3 size={20} />}>
            Levels
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
