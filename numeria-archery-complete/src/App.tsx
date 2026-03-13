import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './components/screens/Home';
import { LevelSelect } from './components/screens/LevelSelect';
import { Gameplay } from './components/screens/Gameplay';
import { LevelComplete } from './components/screens/LevelComplete';
import { Settings } from './components/screens/Settings';
import { useGameStore } from './store/gameStore';
import { getLevelById } from './data/levels';

type Screen = 'splash' | 'home' | 'levels' | 'gameplay' | 'complete' | 'settings' | 'conversion';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
  const [levelScore, setLevelScore] = useState(0);
  const [levelStars, setLevelStars] = useState(0);
  
  const { completeLevel, completedLevels, isPremium } = useGameStore();

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handlePlay = () => {
    setCurrentScreen('levels');
  };

  const handleSelectLevel = (levelId: number) => {
    setSelectedLevelId(levelId);
    setCurrentScreen('gameplay');
  };

  const handleLevelComplete = (score: number, stars: number) => {
    setLevelScore(score);
    setLevelStars(stars);
    
    if (selectedLevelId) {
      completeLevel(selectedLevelId, stars, score);
    }
    
    if (selectedLevelId === 10 && !isPremium) {
      setCurrentScreen('conversion');
    } else {
      setCurrentScreen('complete');
    }
  };

  const handleNextLevel = () => {
    if (selectedLevelId && selectedLevelId < 10) {
      setSelectedLevelId(selectedLevelId + 1);
      setCurrentScreen('gameplay');
    } else {
      setCurrentScreen('levels');
    }
  };

  const handleReplay = () => {
    setCurrentScreen('gameplay');
  };

  const handleBackToLevels = () => {
    setCurrentScreen('levels');
  };

  const handleSettings = () => {
    setCurrentScreen('settings');
  };

  const handleParent = () => {
    alert('Parent Dashboard - Coming Soon!\n\nFeatures:\n- View child progress\n- Manage time limits\n- Adjust settings');
  };

  const handleCustomize = () => {
    alert('Character Customization - Coming Soon!\n\nCustomize Quinn with:\n- Different hairstyles\n- Colors\n- Accessories');
  };

  const selectedLevel = selectedLevelId ? getLevelById(selectedLevelId) : null;

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center"
            >
              <div className="text-7xl md:text-8xl mb-6">🏹</div>
              <h1 className="text-4xl md:text-6xl font-bold text-dark-text mb-4">
                <span className="text-academy-gold">Numeria</span> Archery
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">Math Meets Archery!</p>
              <motion.div className="w-48 md:w-64 h-3 bg-gray-200 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-academy-gold"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {currentScreen === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Home
              onPlay={handlePlay}
              onSettings={handleSettings}
              onParent={handleParent}
              onCustomize={handleCustomize}
            />
          </motion.div>
        )}

        {currentScreen === 'levels' && (
          <motion.div
            key="levels"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <LevelSelect
              onBack={() => setCurrentScreen('home')}
              onSelectLevel={handleSelectLevel}
            />
          </motion.div>
        )}

        {currentScreen === 'gameplay' && selectedLevel && (
          <motion.div
            key="gameplay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gameplay
              level={selectedLevel}
              onComplete={handleLevelComplete}
              onExit={() => setCurrentScreen('levels')}
            />
          </motion.div>
        )}

        {currentScreen === 'complete' && selectedLevelId && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <LevelComplete
              levelId={selectedLevelId}
              score={levelScore}
              stars={levelStars}
              onNext={handleNextLevel}
              onReplay={handleReplay}
              onLevelSelect={handleBackToLevels}
            />
          </motion.div>
        )}

        {currentScreen === 'conversion' && (
          <motion.div
            key="conversion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 flex flex-col items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-6 md:mb-8"
            >
              <div className="text-5xl md:text-6xl mb-4">🌟</div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">Amazing Work!</h1>
              <p className="text-gray-600 text-base md:text-lg">You completed ALL FREE LEVELS!</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full max-w-md mb-6 md:mb-8"
            >
              <h2 className="text-lg md:text-xl font-bold text-center mb-4">Your Stats</h2>
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex justify-between">
                  <span className="text-gray-600">🎯 Levels Complete:</span>
                  <span className="font-bold">10/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">⭐ Total Stars:</span>
                  <span className="font-bold">{Object.values(completedLevels).reduce((s, l) => s + l.stars, 0)}/30</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-lavender-mist to-purple-200 rounded-2xl p-4 md:p-6 w-full max-w-md mb-6 md:mb-8"
            >
              <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2">🎁 More Levels Await!</h3>
              <ul className="text-purple-700 text-sm md:text-base space-y-1">
                <li>✨ Unlock 90 MORE levels!</li>
                <li>🏔️ 9 New Magical Worlds</li>
                <li>🎨 New bows & costumes</li>
                <li>🏆 Special achievements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-3 w-full max-w-md"
            >
              <button
                onClick={() => window.open('https://t.me/DenisBrandMenedjer', '_blank')}
                className="w-full py-4 bg-gradient-to-b from-sky-blue to-sky-blue-dark text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                📱 Contact @DenisBrandMenedjer on Telegram
              </button>
              <button
                onClick={() => setCurrentScreen('home')}
                className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                I'll Play Again Later
              </button>
            </motion.div>
          </motion.div>
        )}

        {currentScreen === 'settings' && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Settings onBack={() => setCurrentScreen('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
