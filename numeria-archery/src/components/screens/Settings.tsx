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
      {/* Header */}
      <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <button 
          onClick={handleBack}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-dark-text ml-4">Settings</h1>
      </div>

      {/* Settings Content */}
      <div className="p-6 max-w-md mx-auto space-y-6">
        {/* Audio Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Volume2 className="text-academy-gold" />
            Audio
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                <span>Sound Effects</span>
              </div>
              <button
                onClick={toggleSound}
                className={`
                  w-14 h-8 rounded-full transition-colors relative
                  ${soundEnabled ? 'bg-meadow-green' : 'bg-gray-300'}
                `}
              >
                <div className={`
                  w-6 h-6 bg-white rounded-full absolute top-1 transition-all
                  ${soundEnabled ? 'left-7' : 'left-1'}
                `} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Music size={24} />
                <span>Music</span>
              </div>
              <button
                onClick={toggleMusic}
                className={`
                  w-14 h-8 rounded-full transition-colors relative
                  ${musicEnabled ? 'bg-meadow-green' : 'bg-gray-300'}
                `}
              >
                <div className={`
                  w-6 h-6 bg-white rounded-full absolute top-1 transition-all
                  ${musicEnabled ? 'left-7' : 'left-1'}
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

        {/* Profile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <User className="text-academy-gold" />
            Profile
          </h2>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Player Name</label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => updateSettings({ playerName: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-academy-gold focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
        </motion.div>

        {/* Version */}
        <div className="text-center text-gray-400 text-sm">
          Numeria Archery v1.0.0
        </div>
      </div>
    </div>
  );
};
