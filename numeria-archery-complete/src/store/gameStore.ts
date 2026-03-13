import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, LevelProgress } from '../types';

interface GameStore extends GameState {
  completeLevel: (levelId: number, stars: number, score: number) => void;
  unlockLevel: (levelId: number) => void;
  setPremium: (value: boolean, token?: string) => void;
  updateSettings: (settings: Partial<GameState>) => void;
  resetProgress: () => void;
  addCoins: (amount: number) => void;
}

const initialState: GameState = {
  playerName: 'Archer',
  totalXP: 0,
  coins: 0,
  completedLevels: {},
  unlockedLevels: [1, 2, 3],
  soundEnabled: true,
  musicEnabled: true,
  volume: 0.7,
  isPremium: false,
  premiumToken: null,
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

        const nextLevelId = levelId + 1;
        if (nextLevelId <= 10 && !get().unlockedLevels.includes(nextLevelId)) {
          set({
            unlockedLevels: [...get().unlockedLevels, nextLevelId],
          });
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
