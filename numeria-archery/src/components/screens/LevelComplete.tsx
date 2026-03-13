import React from 'react';
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

  React.useEffect(() => {
    playSound('complete');
  }, [playSound]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 flex flex-col items-center justify-center p-6">
      <Confetti active={stars === 3} />

      {/* Celebration Header */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-center mb-8"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-4xl font-bold text-dark-text mb-2">Level Complete!</h1>
        <p className="text-gray-600">Amazing work!</p>
      </motion.div>

      {/* Stars */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="mb-8"
      >
        <StarDisplay count={stars} size="lg" animate />
      </motion.div>

      {/* Score Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm mb-8"
      >
        <h2 className="text-xl font-bold text-center mb-4">Your Score</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Points earned</span>
            <span className="text-2xl font-bold text-academy-gold">{score}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Coins earned</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">🪙</span>
              <span className="text-xl font-bold text-academy-gold">+{coinsEarned}</span>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total coins</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">🪙</span>
                <span className="text-xl font-bold">{coins + coinsEarned}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
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
