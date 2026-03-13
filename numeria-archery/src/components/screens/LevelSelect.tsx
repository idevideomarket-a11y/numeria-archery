import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Star, Play } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { levels } from '../../data/levels';
import { useAudio } from '../../hooks/useAudio';

interface LevelSelectProps {
  onBack: () => void;
  onSelectLevel: (levelId: number) => void;
}

export const LevelSelect: React.FC<LevelSelectProps> = ({ onBack, onSelectLevel }) => {
  const { unlockedLevels, completedLevels } = useGameStore();
  const { playSound } = useAudio();

  const handleLevelClick = (levelId: number) => {
    if (unlockedLevels.includes(levelId)) {
      playSound('click');
      onSelectLevel(levelId);
    }
  };

  const handleBack = () => {
    playSound('click');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <button 
          onClick={handleBack}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-dark-text">🌻 Sunny Meadows</h1>
        <div className="w-12" /> {/* Spacer for alignment */}
      </div>

      {/* Level Grid */}
      <div className="p-6">
        <div className="text-center mb-6">
          <p className="text-gray-600">Levels 1-10 • Free Version</p>
        </div>

        <div className="grid grid-cols-5 gap-3 max-w-lg mx-auto">
          {levels.slice(0, 10).map((level, index) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const isCompleted = completedLevels[level.id]?.completed;
            const stars = completedLevels[level.id]?.stars || 0;

            return (
              <motion.button
                key={level.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleLevelClick(level.id)}
                disabled={!isUnlocked}
                className={`
                  aspect-square rounded-2xl flex flex-col items-center justify-center
                  transition-all duration-200
                  ${isUnlocked 
                    ? 'bg-white shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer' 
                    : 'bg-gray-200 cursor-not-allowed'
                  }
                  ${isCompleted ? 'border-3 border-meadow-green' : ''}
                `}
              >
                {isUnlocked ? (
                  <>
                    <span className="text-xl font-bold text-dark-text">{level.id}</span>
                    {isCompleted ? (
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
                          />
                        ))}
                      </div>
                    ) : (
                      <Play size={16} className="text-academy-gold mt-1" />
                    )}
                  </>
                ) : (
                  <Lock size={24} className="text-gray-400" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Progress */}
        <div className="mt-8 max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Your Progress</span>
              <span className="font-bold text-academy-gold">
                {Object.keys(completedLevels).length} / 10 completed
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-academy-gold to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${(Object.keys(completedLevels).length / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Premium Teaser */}
        {Object.keys(completedLevels).length >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-lg mx-auto"
          >
            <div className="bg-gradient-to-r from-lavender-mist to-purple-200 rounded-2xl p-4 shadow-md text-center">
              <p className="text-purple-800 font-bold">🔒 Complete all 10 levels to unlock more!</p>
              <p className="text-purple-600 text-sm">90 more levels in 9 magical worlds await!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
