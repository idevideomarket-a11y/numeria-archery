import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './components/screens/Home';
import { LevelSelect } from './components/screens/LevelSelect';
import { Gameplay } from './components/screens/Gameplay';
import { LevelComplete } from './components/screens/LevelComplete';
import { Settings } from './components/screens/Settings';
import { useGameStore } from './store/gameStore';
import { getLevelById } from './data/levels';
import { Target, ArrowRight, Star, Trophy } from 'lucide-react';

type Screen = 'splash' | 'home' | 'levels' | 'gameplay' | 'complete' | 'settings';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
  const [levelScore, setLevelScore] = useState(0);
  const [levelStars, setLevelStars] = useState(0);
  
  const { completeLevel, completedLevels } = useGameStore();

  // Splash screen timeout
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
    
    setCurrentScreen('complete');
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
    // For MVP, show a simple alert
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
              <div className="text-8xl mb-6">🏹</div>
              <h1 className="text-5xl font-bold text-dark-text mb-4">
                <span className="text-academy-gold">Numeria</span> Archery
              </h1>
              <p className="text-xl text-gray-600 mb-8">Math Meets Archery!</p>
              <motion.div
                className="w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden"
              >
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
