import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Volume2, VolumeX, Music, User } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { useAudio } from '../../hooks/useAudio';

interface SettingsProps {
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const { soundEnabled, musicEnabled, volume, updateSettings, playerName } = useGameStore();
  const { playSound } = useAudio();

  const handleBack = () => {
    playSound('click');
    onBack();
  };

  const toggleSound = () => {
    updateSettings({ soundEnabled: !soundEnabled });
    playSound('click');
  };

  const toggleMusic = () => {
    updateSettings({ musicEnabled: !musicEnabled });
    playSound('click');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <button 
          onClick={handleBack}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-dark-text ml-4">Settings</h1>
      </div>

      <div className="p-4 md:p-6 max-w-md mx-auto space-y-4 md:space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-md p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
            <Volume2 className="text-academy-gold" size={24} />
            Audio
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {soundEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
                <span className="text-sm md:text-base">Sound Effects</span>
              </div>
              <button
                onClick={toggleSound}
                className={`
                  w-12 h-6 md:w-14 md:h-8 rounded-full transition-colors relative
                  ${soundEnabled ? 'bg-meadow-green' : 'bg-gray-300'}
                `}
              >
                <div className={`
                  w-5 h-5 md:w-6 md:h-6 bg-white rounded-full absolute top-0.5 transition-all
                  ${soundEnabled ? 'left-6 md:left-7' : 'left-0.5 md:left-1'}
                `} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Music size={22} />
                <span className="text-sm md:text-base">Music</span>
              </div>
              <button
                onClick={toggleMusic}
                className={`
                  w-12 h-6 md:w-14 md:h-8 rounded-full transition-colors relative
                  ${musicEnabled ? 'bg-meadow-green' : 'bg-gray-300'}
                `}
              >
                <div className={`
                  w-5 h-5 md:w-6 md:h-6 bg-white rounded-full absolute top-0.5 transition-all
                  ${musicEnabled ? 'left-6 md:left-7' : 'left-0.5 md:left-1'}
                `} />
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Volume</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => updateSettings({ volume: parseFloat(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-academy-gold"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-4 md:p-6"
        >
          <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
            <User className="text-academy-gold" size={24} />
            Profile
          </h2>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Player Name</label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => updateSettings({ playerName: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-academy-gold focus:outline-none text-sm md:text-base"
              placeholder="Enter your name"
            />
          </div>
        </motion.div>

        <div className="text-center text-gray-400 text-xs md:text-sm">
          Numeria Archery v1.0.0
        </div>
      </div>
    </div>
  );
};
