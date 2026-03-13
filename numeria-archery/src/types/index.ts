// ============================================
// NUMERIA ARCHERY - TYPE DEFINITIONS
// ============================================

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
  distractors: number[];
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
  // Player
  playerName: string;
  totalXP: number;
  coins: number;
  
  // Progress
  completedLevels: Record<number, LevelProgress>;
  unlockedLevels: number[];
  
  // Settings
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  
  // Premium
  isPremium: boolean;
  premiumToken: string | null;
  
  // Parent
  dailyTimeLimit: number;
  parentPin: string | null;
}

export interface GameSession {
  levelId: number;
  currentProblemIndex: number;
  score: number;
  correctAnswers: number;
  startTime: number;
  combo: number;
}

export interface TargetData {
  id: string;
  value: number;
  x: number;
  y: number;
  isCorrect: boolean;
}

export interface QuinnCustomization {
  hairStyle: number;
  hairColor: number;
  skinTone: number;
  eyeColor: number;
  outfitColor: number;
}

export type GameScreen = 
  | 'splash' 
  | 'menu' 
  | 'worlds' 
  | 'world' 
  | 'gameplay' 
  | 'complete' 
  | 'unlock' 
  | 'parent' 
  | 'premium' 
  | 'settings' 
  | 'customize' 
  | 'help';
