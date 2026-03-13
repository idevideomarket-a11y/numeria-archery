export interface MathProblem {
  num1: number;
  operator: '+' | '-';
  num2: number;
  answer: number;
}

export type LevelType = 'recognition' | 'addition' | 'subtraction' | 'mixed' | 'boss';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Level {
  id: number;
  name: string;
  type: LevelType;
  difficulty: Difficulty;
  description: string;
  problems: MathProblem[];
  timeLimit: number;
  starThresholds: [number, number, number];
  unlockRequirement: number | null;
  worldId: number;
}

export interface LevelProgress {
  stars: number;
  score: number;
  completed: boolean;
  date?: string;
}

export interface GameState {
  playerName: string;
  totalXP: number;
  coins: number;
  completedLevels: Record<number, LevelProgress>;
  unlockedLevels: number[];
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  isPremium: boolean;
  premiumToken: string | null;
}

export type GameScreen = 
  | 'splash' 
  | 'home' 
  | 'levels' 
  | 'gameplay' 
  | 'complete' 
  | 'settings' 
  | 'conversion'
  | 'parent'
  | 'customize';
