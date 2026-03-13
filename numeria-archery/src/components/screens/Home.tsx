import React from 'react';
import { motion } from 'framer-motion';
import { Play, Settings, User, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';
import { useGameStore } from '../../store/gameStore';
import { useAudio } from '../../hooks/useAudio';

interface HomeProps {
  onPlay: () => void;
  onSettings: () => void;
  onParent: () => void;
  onCustomize: () => void;
}

export const Home: React.FC<HomeProps> = ({ 
  onPlay, 
  onSettings, 
  onParent, 
  onCustomize 
}) => {
  const { playerName, totalXP, coins, completedLevels } = useGameStore();
  const { playSound } = useAudio();

  const completedCount = Object.keys(completedLevels).length;
  const totalStars = Object.values(completedLevels).reduce((sum, level) => sum + level.stars, 0);

  const handlePlay = () => {
    playSound('click');
    onPlay();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <button 
          onClick={onSettings}
          className="p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <Settings size={24} className="text-gray-600" />
        </button>
        <div className="flex gap-4">
          <div className="bg-white/80 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <Trophy size={20} className="text-academy-gold" />
            <span className="font-bold text-dark-text">{totalXP} XP</span>
          </div>
          <div className="bg-white/80 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <span className="text-xl">🪙</span>
            <span className="font-bold text-dark-text">{coins}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">🏹</div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-2">
            <span className="text-academy-gold">Numeria</span> Archery
          </h1>
          <p className="text-gray-600 text-lg">Math Meets Archery!</p>
        </motion.div>

        {/* Character Preview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-academy-gold to-orange-300 rounded-full flex items-center justify-center text-6xl shadow-lg mb-4 mx-auto animate-bounce-gentle">
            🏹
          </div>
          <p className="text-xl font-bold text-dark-text">Welcome back, {playerName}!</p>
          <p className="text-gray-600">{completedCount} levels completed • {totalStars} stars earned</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <Button onClick={handlePlay} variant="primary" size="lg" icon={<Play size={24} />}>
            PLAY NOW
          </Button>
          
          <div className="flex gap-4">
            <Button 
              onClick={onCustomize} 
              variant="secondary" 
              className="flex-1"
              icon={<User size={20} />}
            >
              Customize
            </Button>
            <Button 
              onClick={onParent} 
              variant="outline" 
              className="flex-1"
            >
              Parent Zone
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-gray-500 text-sm">
        Numeria Archery - Educational Math Game for Ages 6-8
      </div>
    </div>
  );
};
