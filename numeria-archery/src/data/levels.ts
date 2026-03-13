import { Level } from '../types';
import { generateAdditionProblem, generateSubtractionProblem } from '../utils/math';

// Generate problems for each level
const generateProblems = (count: number, type: 'addition' | 'subtraction' | 'mixed', max: number): any[] => {
  const problems = [];
  for (let i = 0; i < count; i++) {
    if (type === 'addition') {
      problems.push(generateAdditionProblem(max));
    } else if (type === 'subtraction') {
      problems.push(generateSubtractionProblem(max));
    } else {
      problems.push(Math.random() > 0.5 ? generateAdditionProblem(max) : generateSubtractionProblem(max));
    }
  }
  return problems;
};

export const levels: Level[] = [
  // Level 1: Introduction to Addition (1+1 to 3+2)
  {
    id: 1,
    name: 'First Steps',
    type: 'addition',
    difficulty: 'easy',
    description: 'Start your math journey with simple addition!',
    problems: [
      { num1: 1, operator: '+', num2: 1, answer: 2 },
      { num1: 1, operator: '+', num2: 2, answer: 3 },
      { num1: 2, operator: '+', num2: 1, answer: 3 },
      { num1: 2, operator: '+', num2: 2, answer: 4 },
      { num1: 1, operator: '+', num2: 3, answer: 4 },
    ],
    distractors: [1, 5, 6],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: null,
    worldId: 1,
  },
  
  // Level 2: Addition to 5
  {
    id: 2,
    name: 'Sunny Sums',
    type: 'addition',
    difficulty: 'easy',
    description: 'Add numbers up to 5!',
    problems: [
      { num1: 2, operator: '+', num2: 3, answer: 5 },
      { num1: 3, operator: '+', num2: 1, answer: 4 },
      { num1: 1, operator: '+', num2: 4, answer: 5 },
      { num1: 2, operator: '+', num2: 2, answer: 4 },
      { num1: 3, operator: '+', num2: 2, answer: 5 },
    ],
    distractors: [2, 3, 6, 7],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 1,
    worldId: 1,
  },
  
  // Level 3: Addition to 7
  {
    id: 3,
    name: 'Growing Strong',
    type: 'addition',
    difficulty: 'easy',
    description: 'Add bigger numbers up to 7!',
    problems: [
      { num1: 3, operator: '+', num2: 3, answer: 6 },
      { num1: 4, operator: '+', num2: 2, answer: 6 },
      { num1: 5, operator: '+', num2: 1, answer: 6 },
      { num1: 4, operator: '+', num2: 3, answer: 7 },
      { num1: 2, operator: '+', num2: 5, answer: 7 },
    ],
    distractors: [4, 5, 8, 9],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 2,
    worldId: 1,
  },
  
  // Level 4: Addition to 10
  {
    id: 4,
    name: 'Double Digits',
    type: 'addition',
    difficulty: 'medium',
    description: 'Master addition up to 10!',
    problems: [
      { num1: 5, operator: '+', num2: 5, answer: 10 },
      { num1: 6, operator: '+', num2: 3, answer: 9 },
      { num1: 7, operator: '+', num2: 2, answer: 9 },
      { num1: 4, operator: '+', num2: 5, answer: 9 },
      { num1: 8, operator: '+', num2: 1, answer: 9 },
    ],
    distractors: [7, 8, 11, 12],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 3,
    worldId: 1,
  },
  
  // Level 5: Introduction to Subtraction (5-1 to 5-3)
  {
    id: 5,
    name: 'Take Away',
    type: 'subtraction',
    difficulty: 'easy',
    description: 'Learn to subtract small numbers!',
    problems: [
      { num1: 3, operator: '-', num2: 1, answer: 2 },
      { num1: 4, operator: '-', num2: 1, answer: 3 },
      { num1: 5, operator: '-', num2: 2, answer: 3 },
      { num1: 4, operator: '-', num2: 2, answer: 2 },
      { num1: 5, operator: '-', num2: 3, answer: 2 },
    ],
    distractors: [1, 4, 5, 6],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 4,
    worldId: 1,
  },
  
  // Level 6: Subtraction to 7
  {
    id: 6,
    name: 'Subtracting Stars',
    type: 'subtraction',
    difficulty: 'medium',
    description: 'Subtract numbers up to 7!',
    problems: [
      { num1: 6, operator: '-', num2: 2, answer: 4 },
      { num1: 7, operator: '-', num2: 3, answer: 4 },
      { num1: 6, operator: '-', num2: 3, answer: 3 },
      { num1: 7, operator: '-', num2: 4, answer: 3 },
      { num1: 5, operator: '-', num2: 2, answer: 3 },
    ],
    distractors: [2, 5, 6, 8],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 5,
    worldId: 1,
  },
  
  // Level 7: Subtraction to 10
  {
    id: 7,
    name: 'Subtraction Master',
    type: 'subtraction',
    difficulty: 'medium',
    description: 'Master subtraction up to 10!',
    problems: [
      { num1: 10, operator: '-', num2: 5, answer: 5 },
      { num1: 9, operator: '-', num2: 4, answer: 5 },
      { num1: 8, operator: '-', num2: 3, answer: 5 },
      { num1: 10, operator: '-', num2: 7, answer: 3 },
      { num1: 9, operator: '-', num2: 6, answer: 3 },
    ],
    distractors: [4, 6, 7, 8],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 6,
    worldId: 1,
  },
  
  // Level 8: Mixed Practice (Easy)
  {
    id: 8,
    name: 'Math Mix-Up',
    type: 'mixed',
    difficulty: 'medium',
    description: 'Addition and subtraction together!',
    problems: [
      { num1: 4, operator: '+', num2: 3, answer: 7 },
      { num1: 8, operator: '-', num2: 3, answer: 5 },
      { num1: 2, operator: '+', num2: 5, answer: 7 },
      { num1: 9, operator: '-', num2: 4, answer: 5 },
      { num1: 3, operator: '+', num2: 4, answer: 7 },
    ],
    distractors: [4, 6, 8, 9],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 7,
    worldId: 1,
  },
  
  // Level 9: Mixed Practice (Medium)
  {
    id: 9,
    name: 'Brain Teasers',
    type: 'mixed',
    difficulty: 'medium',
    description: 'Challenge yourself with mixed problems!',
    problems: [
      { num1: 7, operator: '+', num2: 3, answer: 10 },
      { num1: 10, operator: '-', num2: 4, answer: 6 },
      { num1: 6, operator: '+', num2: 4, answer: 10 },
      { num1: 8, operator: '-', num2: 5, answer: 3 },
      { num1: 5, operator: '+', num2: 5, answer: 10 },
    ],
    distractors: [5, 7, 8, 9],
    timeLimit: 60,
    starThresholds: [15, 30, 45],
    unlockRequirement: 8,
    worldId: 1,
  },
  
  // Level 10: Boss Level - All Skills
  {
    id: 10,
    name: 'Boss Challenge',
    type: 'boss',
    difficulty: 'hard',
    description: 'Prove you are a Math Archer Master!',
    problems: [
      { num1: 8, operator: '+', num2: 4, answer: 12 },
      { num1: 15, operator: '-', num2: 7, answer: 8 },
      { num1: 9, operator: '+', num2: 5, answer: 14 },
      { num1: 12, operator: '-', num2: 6, answer: 6 },
      { num1: 7, operator: '+', num2: 8, answer: 15 },
    ],
    distractors: [6, 10, 11, 13, 16],
    timeLimit: 90,
    starThresholds: [20, 40, 50],
    unlockRequirement: 9,
    worldId: 1,
  },
];

// Helper function to get level by ID
export const getLevelById = (id: number): Level | undefined => {
  return levels.find(level => level.id === id);
};
