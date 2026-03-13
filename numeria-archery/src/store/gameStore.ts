import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, LevelProgress } from '../types';

interface GameStore extends GameState {
  // Actions
  completeLevel: (levelId: number, stars: number, score: number) => void;
  unlockLevel: (levelId: number) => void;
  setPremium: (value: boolean, token?: string) => void;
  setParentPin: (pin: string | null) => void;
  updateSettings: (settings: Partial<GameState>) => void;
  resetProgress: () => void;
  addCoins: (amount: number) => void;
}

const initialState: GameState = {
  playerName: 'Archer',
  totalXP: 0,
  coins: 0,
  completedLevels: {},
  unlockedLevels: [1, 2, 3], // First 3 levels unlocked for demo
  soundEnabled: true,
  musicEnabled: true,
  volume: 0.7,
  isPremium: false,
  premiumToken: null,
  dailyTimeLimit: 30,
  parentPin: null,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeLevel: (levelId: number, stars: number, score: number) => {
        const { completedLevels, totalXP, coins } = get();
        
        const levelProgress: LevelProgress = {
          stars,
          score,
          completed: true,
          date: new Date().toISOString(),
        };

        // Calculate rewards
        const xpEarned = stars * 10 + Math.floor(score / 10);
        const coinsEarned = stars * 5;

        set({
          completedLevels: {
            ...completedLevels,
            [levelId]: levelProgress,
          },
          totalXP: totalXP + xpEarned,
          coins: coins + coinsEarned,
        });

        // Auto-unlock next level
        const nextLevelId = levelId + 1;
        if (nextLevelId <= 10) {
          get().unlockLevel(nextLevelId);
        }
      },

      unlockLevel: (levelId: number) => {
        const { unlockedLevels } = get();
        if (!unlockedLevels.includes(levelId)) {
          set({
            unlockedLevels: [...unlockedLevels, levelId],
          });
        }
      },

      setPremium: (value: boolean, token?: string) => {
        set({
          isPremium: value,
          premiumToken: token || null,
        });
      },

      setParentPin: (pin: string | null) => {
        set({ parentPin: pin });
      },

      updateSettings: (settings: Partial<GameState>) => {
        set(settings);
      },

      resetProgress: () => {
        set({
          completedLevels: {},
          unlockedLevels: [1],
          totalXP: 0,
          coins: 0,
        });
      },

      addCoins: (amount: number) => {
        set({ coins: get().coins + amount });
      },
    }),
    {
      name: 'numeria-archery-storage',
    }
  )
);
