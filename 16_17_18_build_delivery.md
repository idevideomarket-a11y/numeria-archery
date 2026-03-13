# Numeria Archery - Build & Delivery Package
## Complete Implementation Guide for AI/Developer

---

# OUTPUT 16 - BUILD ORDER

## Phase Overview (7 Phases, ~6-8 weeks)

---

## PHASE 1: Project Setup & Core Architecture
**Objective:** Establish the foundation, tooling, and architectural patterns

### Files to Create/Modify:
```
├── package.json (dependencies)
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── types/
│   │   └── index.ts (all TypeScript interfaces)
│   ├── constants/
│   │   └── game.ts (game constants)
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   │   └── useGameState.ts
│   └── store/
│       └── gameStore.ts (Zustand store)
```

### Key Deliverables:
1. React + Vite + TypeScript project initialized
2. Tailwind CSS configured with custom theme colors
3. Zustand state management store created
4. TypeScript interfaces for all game entities
5. LocalStorage persistence hook
6. Basic routing structure (React Router)

### Validation Criteria:
- [ ] `npm run dev` starts without errors
- [ ] Store persists data to localStorage
- [ ] All TypeScript types compile
- [ ] Basic routing works (/, /game, /parent, /premium)

### Estimated Time: **2-3 days**

---

## PHASE 2: Game Engine & State Machine
**Objective:** Build the core game mechanics and state management

### Files to Create:
```
src/
├── engine/
│   ├── GameEngine.ts (main game loop)
│   ├── LevelGenerator.ts (procedural level generation)
│   ├── AnswerValidator.ts (answer checking logic)
│   └── ProgressionManager.ts (XP, leveling, unlocks)
├── components/
│   ├── game/
│   │   ├── GameBoard.tsx
│   │   ├── Target.tsx
│   │   ├── Arrow.tsx
│   │   ├── Bow.tsx
│   │   └── ScoreDisplay.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── ProgressBar.tsx
```

### Key Deliverables:
1. Game loop with requestAnimationFrame
2. Arrow physics (trajectory, gravity, wind)
3. Target hit detection
4. Math problem generation (addition, subtraction, 6-8 age appropriate)
5. Score calculation and combo system
6. Star rating per level (0-3 stars)

### Validation Criteria:
- [ ] Arrow shoots and follows parabolic arc
- [ ] Target registers hits accurately
- [ ] Math problems generate correctly
- [ ] Score updates in real-time
- [ ] 3-star rating system works

### Estimated Time: **4-5 days**

---

## PHASE 3: Free Levels 1-10
**Objective:** Implement the complete free level experience

### Files to Create:
```
src/
├── data/
│   └── levels/
│       ├── level01.ts (Counting 1-10)
│       ├── level02.ts (Counting 11-20)
│       ├── level03.ts (Addition within 10)
│       ├── level04.ts (Addition within 20)
│       ├── level05.ts (Subtraction within 10)
│       ├── level06.ts (Subtraction within 20)
│       ├── level07.ts (Number bonds to 10)
│       ├── level08.ts (Doubles 1-10)
│       ├── level09.ts (Mixed addition/subtraction)
│       └── level10.ts (Boss level - all skills)
├── components/
│   ├── screens/
│   │   ├── LevelSelect.tsx
│   │   ├── LevelIntro.tsx
│   │   ├── Gameplay.tsx
│   │   └── LevelComplete.tsx
│   └── game/
│       ├── MathProblem.tsx
│       ├── AnswerOptions.tsx
│       └── RewardAnimation.tsx
```

### Level Progression Design:
| Level | Skill | Difficulty | Stars to Unlock |
|-------|-------|------------|-----------------|
| 1 | Counting 1-10 | Easy | Free |
| 2 | Counting 11-20 | Easy | Free |
| 3 | Addition +1,+2 | Easy | Free |
| 4 | Addition to 10 | Medium | Free |
| 5 | Subtraction -1,-2 | Easy | Free |
| 6 | Subtraction to 10 | Medium | Free |
| 7 | Number bonds | Medium | Free |
| 8 | Doubles | Medium | Free |
| 9 | Mixed + and - | Medium | Free |
| 10 | Boss Challenge | Hard | Free |

### Key Deliverables:
1. Level select map with 10 nodes
2. Each level has unique math focus
3. Progressive difficulty curve
4. Level completion with star rewards
5. Unlock progression (complete previous to advance)
6. Mini celebration animations

### Validation Criteria:
- [ ] All 10 levels playable end-to-end
- [ ] Level select shows progress
- [ ] Stars save and persist
- [ ] Unlock logic works correctly
- [ ] No level-breaking bugs

### Estimated Time: **5-6 days**

---

## PHASE 4: Parent Dashboard
**Objective:** Create the parent-facing progress and settings interface

### Files to Create:
```
src/
├── components/
│   ├── screens/
│   │   └── ParentDashboard.tsx
│   └── parent/
│       ├── ProgressChart.tsx
│       ├── SkillBreakdown.tsx
│       ├── TimeSettings.tsx
│       ├── ChildProfile.tsx
│       └── AchievementList.tsx
├── utils/
│   └── analytics.ts (progress calculations)
```

### Features to Implement:
1. **Progress Overview**
   - Total levels completed
   - Average stars per level
   - Time spent playing
   - Skills mastered chart

2. **Skill Breakdown**
   - Addition proficiency %
   - Subtraction proficiency %
   - Number recognition %
   - Problem-solving speed

3. **Settings**
   - Daily play time limit
   - Sound on/off
   - Difficulty adjustment
   - Reset progress

4. **Security**
   - Simple PIN lock (4 digits)
   - Math problem gate ("What is 5+3?")

### Validation Criteria:
- [ ] PIN lock prevents child access
- [ ] Progress data displays accurately
-- [ ] Settings save and apply
- [ ] Charts render correctly
- [ ] Mobile responsive

### Estimated Time: **3-4 days**

---

## PHASE 5: Telegram Conversion Flow
**Objective:** Integrate Telegram bot for premium conversion

### Files to Create:
```
src/
├── components/
│   ├── screens/
│   │   └── TelegramConnect.tsx
│   └── conversion/
│       ├── TelegramQR.tsx
│       ├── BotInstructions.tsx
│       └── PremiumBenefits.tsx
├── utils/
│   └── telegram.ts (bot API integration)
```

### Flow Implementation:
```
Level 10 Complete
    ↓
"Want 90 more levels?"
    ↓
Show Telegram QR + @BotName
    ↓
User messages bot
    ↓
Bot sends unique code
    ↓
User enters code in game
    ↓
Unlock premium status
```

### Key Deliverables:
1. QR code generator for Telegram bot link
2. Code input validation
3. Premium status flag in store
4. Bot webhook handler (optional, can be manual)
5. Conversion tracking

### Validation Criteria:
- [ ] QR code scans to correct bot
- [ ] Code validation works
- [ ] Premium unlocks immediately
- [ ] Conversion event tracked

### Estimated Time: **2-3 days**

---

## PHASE 6: Premium Page & 90 Levels
**Objective:** Build premium content structure and gating

### Files to Create:
```
src/
├── data/
│   └── levels/
│       ├── level11.ts - level50.ts (Tier 1)
│       ├── level51.ts - level80.ts (Tier 2)
│       └── level81.ts - level100.ts (Tier 3)
├── components/
│   ├── screens/
│   │   └── PremiumPage.tsx
│   └── premium/
│       ├── TierCard.tsx
│       ├── SkillTree.tsx
│       └── PremiumLevelSelect.tsx
```

### Premium Content Structure:
| Tier | Levels | Skills | Unlock Condition |
|------|--------|--------|------------------|
| Starter | 11-50 | Multiplication intro, Place value | Telegram connect |
| Explorer | 51-80 | Division basics, Word problems | Complete 25 levels |
| Master | 81-100 | Mixed operations, Time, Money | Complete 50 levels |

### Key Deliverables:
1. Premium page with tier cards
2. 90 level data files (can be stubbed initially)
3. Premium gating logic
4. Skill tree visualization
5. Progress sync indicator

### Validation Criteria:
- [ ] Premium page shows correctly
- [ ] Locked levels display lock icon
- [ ] Unlock flow works end-to-end
- [ ] Premium progress saves

### Estimated Time: **4-5 days**

---

## PHASE 7: Polish, Audio & Final QA
**Objective:** Add audio, animations, and final testing

### Files to Create/Modify:
```
public/
├── audio/
│   ├── bow-draw.mp3
│   ├── arrow-release.mp3
│   ├── target-hit.mp3
│   ├── correct-answer.mp3
│   ├── wrong-answer.mp3
│   ├── level-complete.mp3
│   ├── star-1.mp3
│   ├── star-2.mp3
│   ├── star-3.mp3
│   └── background-music.mp3
src/
├── hooks/
│   └── useAudio.ts
├── components/
│   └── effects/
│       ├── Confetti.tsx
│       ├── StarBurst.tsx
│       └── FloatingText.tsx
```

### Polish Checklist:
- [ ] All button hover/active states
- [ ] Page transitions
- [ ] Loading states
- [ ] Error boundaries
- [ ] Sound toggle in settings
- [ ] Volume control
- [ ] Mute on focus loss

### Validation Criteria:
- [ ] No console errors
- [ ] Lighthouse score > 80
- [ ] Works on mobile/tablet
- [ ] Audio plays correctly
- [ ] All animations smooth (60fps)

### Estimated Time: **3-4 days**

---

## Build Timeline Summary

| Phase | Duration | Cumulative |
|-------|----------|------------|
| 1. Setup & Architecture | 2-3 days | 2-3 days |
| 2. Game Engine | 4-5 days | 6-8 days |
| 3. Free Levels 1-10 | 5-6 days | 11-14 days |
| 4. Parent Dashboard | 3-4 days | 14-18 days |
| 5. Telegram Conversion | 2-3 days | 16-21 days |
| 6. Premium Page | 4-5 days | 20-26 days |
| 7. Polish & Audio | 3-4 days | 23-30 days |

**Total Estimated Time: 4-5 weeks for single developer**
**Playable Demo Ready: End of Phase 3 (Day 11-14)**

---

# OUTPUT 17 - PLAYABLE DELIVERY PACKAGE

## Final Recommended Folder Tree

```
numeria-archery/
├── public/
│   ├── audio/
│   │   ├── bow-draw.mp3
│   │   ├── arrow-release.mp3
│   │   ├── target-hit.mp3
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   ├── level-complete.mp3
│   │   └── bg-music.mp3
│   ├── images/
│   │   ├── characters/
│   │   ├── backgrounds/
│   │   ├── ui/
│   │   └── icons/
│   └── fonts/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   └── index.ts
│   ├── constants/
│   │   ├── game.ts
│   │   └── levels.ts
│   ├── store/
│   │   └── gameStore.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useGameState.ts
│   │   └── useAudio.ts
│   ├── engine/
│   │   ├── GameEngine.ts
│   │   ├── LevelGenerator.ts
│   │   └── AnswerValidator.ts
│   ├── data/
│   │   └── levels/
│   │       ├── level01.ts
│   │       ├── level02.ts
│   │       ├── ... (through level10.ts)
│   │       └── levelTemplates.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── StarDisplay.tsx
│   │   │   └── Card.tsx
│   │   ├── game/
│   │   │   ├── GameBoard.tsx
│   │   │   ├── Bow.tsx
│   │   │   ├── Arrow.tsx
│   │   │   ├── Target.tsx
│   │   │   ├── MathProblem.tsx
│   │   │   ├── AnswerOptions.tsx
│   │   │   └── ScoreDisplay.tsx
│   │   ├── screens/
│   │   │   ├── Home.tsx
│   │   │   ├── LevelSelect.tsx
│   │   │   ├── Gameplay.tsx
│   │   │   ├── LevelComplete.tsx
│   │   │   ├── ParentDashboard.tsx
│   │   │   ├── TelegramConnect.tsx
│   │   │   └── PremiumPage.tsx
│   │   ├── parent/
│   │   │   ├── ProgressChart.tsx
│   │   │   ├── SkillBreakdown.tsx
│   │   │   ├── TimeSettings.tsx
│   │   │   └── PinLock.tsx
│   │   ├── conversion/
│   │   │   ├── TelegramQR.tsx
│   │   │   ├── CodeInput.tsx
│   │   │   └── BenefitsList.tsx
│   │   └── effects/
│   │       ├── Confetti.tsx
│   │       ├── StarBurst.tsx
│   │       └── FloatingText.tsx
│   └── utils/
│       ├── math.ts
│       ├── telegram.ts
│       └── analytics.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── index.html
```

---

## Priority Files to Build First (In Order)

### Week 1 Priority:
| Priority | File | Purpose |
|----------|------|---------|
| 1 | `types/index.ts` | All TypeScript interfaces |
| 2 | `constants/game.ts` | Game configuration |
| 3 | `store/gameStore.ts` | State management |
| 4 | `hooks/useLocalStorage.ts` | Persistence |
| 5 | `components/ui/Button.tsx` | Reusable button |
| 6 | `components/ui/Modal.tsx` | Reusable modal |
| 7 | `components/screens/Home.tsx` | Entry point |
| 8 | `App.tsx` | Router setup |

### Week 2 Priority:
| Priority | File | Purpose |
|----------|------|---------|
| 9 | `engine/GameEngine.ts` | Core game loop |
| 10 | `components/game/GameBoard.tsx` | Game canvas |
| 11 | `components/game/Bow.tsx` | Bow component |
| 12 | `components/game/Arrow.tsx` | Arrow physics |
| 13 | `components/game/Target.tsx` | Target hit detection |
| 14 | `components/game/MathProblem.tsx` | Problem display |
| 15 | `components/game/AnswerOptions.tsx` | Answer buttons |

### Week 3 Priority:
| Priority | File | Purpose |
|----------|------|---------|
| 16 | `data/levels/level01.ts` - `level10.ts` | Level data |
| 17 | `components/screens/LevelSelect.tsx` | Level picker |
| 18 | `components/screens/Gameplay.tsx` | Game screen |
| 19 | `components/screens/LevelComplete.tsx` | Completion screen |
| 20 | `engine/LevelGenerator.ts` | Procedural generation |

---

## Reusable Components List

### UI Components (Build First):
```typescript
// Button.tsx - Primary action button
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
}

// Modal.tsx - Overlay modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

// ProgressBar.tsx - Progress indicator
interface ProgressBarProps {
  current: number;
  max: number;
  color?: string;
  showLabel?: boolean;
}

// StarDisplay.tsx - Star rating display
interface StarDisplayProps {
  count: number; // 0-3
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

// Card.tsx - Content container
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}
```

### Game Components:
```typescript
// GameBoard.tsx - Main game canvas
interface GameBoardProps {
  levelId: number;
  onComplete: (stars: number, score: number) => void;
  onExit: () => void;
}

// MathProblem.tsx - Problem display
interface MathProblemProps {
  problem: { num1: number; operator: string; num2: number };
  showAnswer?: boolean;
  answer?: number;
}

// AnswerOptions.tsx - Answer buttons
interface AnswerOptionsProps {
  options: number[];
  correctAnswer: number;
  onAnswer: (answer: number, isCorrect: boolean) => void;
  disabled?: boolean;
}
```

---

## JSON/Config Files Required

### 1. Game Constants (`constants/game.ts`):
```typescript
export const GAME_CONFIG = {
  // Physics
  GRAVITY: 0.5,
  ARROW_SPEED: 15,
  MAX_POWER: 100,
  
  // Scoring
  BASE_POINTS: 10,
  COMBO_MULTIPLIER: 1.5,
  PERFECT_BONUS: 50,
  
  // Stars
  STAR_THRESHOLDS: {
    ONE: 30,    // 30% score
    TWO: 60,    // 60% score
    THREE: 90,  // 90% score
  },
  
  // Progression
  XP_PER_LEVEL: 100,
  LEVELS_TO_UNLOCK: 1,
  
  // Telegram
  TELEGRAM_BOT_NAME: 'NumeriaArcheryBot',
  TELEGRAM_BOT_LINK: 'https://t.me/NumeriaArcheryBot',
};

export const LEVEL_TYPES = {
  COUNTING: 'counting',
  ADDITION: 'addition',
  SUBTRACTION: 'subtraction',
  MIXED: 'mixed',
  BOSS: 'boss',
};
```

### 2. Level Data Template (`data/levels/level01.ts`):
```typescript
export const level01 = {
  id: 1,
  name: 'Counting Stars',
  type: 'counting',
  difficulty: 'easy',
  description: 'Count the stars and shoot the right answer!',
  problems: [
    { num1: 1, operator: '+', num2: 2, answer: 3 },
    { num1: 2, operator: '+', num2: 3, answer: 5 },
    // ... more problems
  ],
  timeLimit: 60,
  targetPositions: [
    { x: 200, y: 300 },
    { x: 400, y: 250 },
    { x: 600, y: 350 },
  ],
  unlockRequirement: null,
  rewards: {
    xp: 100,
    stars: [30, 60, 90], // score thresholds
  },
};
```

### 3. Store Schema (`store/gameStore.ts`):
```typescript
interface GameState {
  // Player
  playerName: string;
  avatar: string;
  totalXP: number;
  
  // Progress
  completedLevels: { [levelId: number]: { stars: number; score: number } };
  unlockedLevels: number[];
  
  // Settings
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  
  // Premium
  isPremium: boolean;
  telegramCode: string | null;
  
  // Parent
  dailyTimeLimit: number; // minutes
  pin: string | null;
}
```

---

## Screens to Implement First (Priority Order)

### Phase 1 Screens (Week 1):
1. **Home Screen** - Landing page with play button
2. **Level Select** - Map showing available levels

### Phase 2 Screens (Week 2):
3. **Gameplay Screen** - Main game interface
4. **Level Complete Screen** - Results and rewards

### Phase 3 Screens (Week 3):
5. **Parent Dashboard** - Progress and settings
6. **Telegram Connect Screen** - Conversion flow
7. **Premium Page** - Premium content showcase

---

## First Working Build Requirements

### What MUST be playable:

#### Core Loop:
```
Home → Level Select → Gameplay → Level Complete → Level Select
```

#### Minimum Viable Features:
- [ ] Click "Play" from home screen
- [ ] See level select with at least 3 levels
- [ ] Click level to start
- [ ] See math problem displayed
- [ ] See 3-4 answer options
- [ ] Click answer to "shoot" arrow
- [ ] See correct/incorrect feedback
- [ ] Complete 3 problems to finish level
- [ ] See stars earned (1-3)
- [ ] Return to level select
- [ ] See progress saved (stars shown on level)

#### First Build Excludes:
- Parent dashboard (can be placeholder button)
- Telegram integration (can be placeholder)
- Premium content (show "Coming Soon")
- Audio (can be added later)
- Complex animations (simple fade transitions OK)

---

## Component Dependencies

```
App.tsx
├── Home.tsx
│   └── Button.tsx
├── LevelSelect.tsx
│   ├── Card.tsx
│   ├── StarDisplay.tsx
│   └── ProgressBar.tsx
├── Gameplay.tsx
│   ├── GameBoard.tsx
│   │   ├── Bow.tsx
│   │   ├── Arrow.tsx
│   │   └── Target.tsx
│   ├── MathProblem.tsx
│   ├── AnswerOptions.tsx
│   └── ScoreDisplay.tsx
├── LevelComplete.tsx
│   ├── StarDisplay.tsx
│   ├── Button.tsx
│   └── Confetti.tsx
├── ParentDashboard.tsx
│   ├── Modal.tsx
│   ├── ProgressChart.tsx
│   └── PinLock.tsx
├── TelegramConnect.tsx
│   ├── TelegramQR.tsx
│   └── CodeInput.tsx
└── PremiumPage.tsx
    ├── TierCard.tsx
    └── SkillTree.tsx
```

---

## Integration Points

### 1. Store → Components:
```typescript
// All components read from and write to gameStore
const { completedLevels, unlockLevel } = useGameStore();
```

### 2. Engine → GameBoard:
```typescript
// GameEngine handles physics, GameBoard renders
const engine = new GameEngine(canvasRef);
engine.onHit = (target) => handleCorrectAnswer();
```

### 3. Level Data → Gameplay:
```typescript
// Level data drives the game
const level = getLevelData(levelId);
const currentProblem = level.problems[problemIndex];
```

### 4. LocalStorage → Store:
```typescript
// Store automatically persists to localStorage
useLocalStorage('numeria-game', gameState);
```

### 5. Telegram → Premium:
```typescript
// Telegram code unlocks premium
const validateCode = async (code) => {
  const valid = await telegramAPI.validate(code);
  if (valid) setPremium(true);
};
```

---

# OUTPUT 18 - FINAL MASTER BUILD INSTRUCTION

## Copy-Paste Ready Prompt for Loveable/Developer

```
BUILD A COMPLETE REACT WEB GAME: Numeria Archery

OVERVIEW:
Create "Numeria Archery" - an educational math game for children ages 6-8 where players solve math problems by shooting arrows at targets. Built with React, TypeScript, Vite, Tailwind CSS, and Zustand.

TECH STACK:
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Zustand (state management)
- React Router (navigation)
- Lucide React (icons)

PROJECT STRUCTURE:
Create this exact folder structure:

src/
├── main.tsx
├── App.tsx
├── index.css
├── types/index.ts (ALL TypeScript interfaces)
├── constants/game.ts (game configuration)
├── store/gameStore.ts (Zustand store with persistence)
├── hooks/useLocalStorage.ts
├── hooks/useAudio.ts
├── engine/GameEngine.ts
├── engine/LevelGenerator.ts
├── data/levels/level01.ts through level10.ts
├── components/ui/Button.tsx
├── components/ui/Modal.tsx
├── components/ui/ProgressBar.tsx
├── components/ui/StarDisplay.tsx
├── components/game/GameBoard.tsx
├── components/game/Bow.tsx
├── components/game/Arrow.tsx
├── components/game/Target.tsx
├── components/game/MathProblem.tsx
├── components/game/AnswerOptions.tsx
├── components/screens/Home.tsx
├── components/screens/LevelSelect.tsx
├── components/screens/Gameplay.tsx
├── components/screens/LevelComplete.tsx
├── components/screens/ParentDashboard.tsx
├── components/screens/TelegramConnect.tsx
├── components/screens/PremiumPage.tsx
└── utils/math.ts

CORE GAME MECHANICS:

1. MATH PROBLEMS:
   - Addition within 20 (e.g., 5 + 3 = ?)
   - Subtraction within 20 (e.g., 12 - 4 = ?)
   - Counting sequences
   - Number bonds to 10
   - Each level focuses on one skill type

2. GAMEPLAY FLOW:
   - Problem appears at top of screen
   - 3-4 answer targets appear on screen
   - Player clicks/holds bow to aim
   - Release to shoot arrow
   - Arrow follows arc to target
   - Hit = correct answer, Miss = wrong answer
   - 3 problems per level
   - Score based on accuracy and speed

3. SCORING & STARS:
   - Base points: 10 per correct answer
   - Speed bonus: up to 20 extra points
   - Star thresholds: 30% = 1 star, 60% = 2 stars, 90% = 3 stars
   - Stars unlock next levels

TYPE DEFINITIONS (types/index.ts):

export interface MathProblem {
  num1: number;
  operator: '+' | '-';
  num2: number;
  answer: number;
}

export interface Level {
  id: number;
  name: string;
  type: 'counting' | 'addition' | 'subtraction' | 'mixed' | 'boss';
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  problems: MathProblem[];
  timeLimit: number;
  starThresholds: [number, number, number]; // scores for 1, 2, 3 stars
  unlockRequirement: number | null; // level ID required to unlock
}

export interface GameState {
  playerName: string;
  totalXP: number;
  completedLevels: Record<number, { stars: number; score: number; date: string }>;
  unlockedLevels: number[];
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  isPremium: boolean;
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

GAME STORE (store/gameStore.ts):

Use Zustand with persist middleware. Store must:
- Save to localStorage automatically
- Initialize with 10 free levels unlocked
- Track completed levels with stars and scores
- Handle premium unlock status
- Manage sound settings

const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      playerName: 'Archer',
      totalXP: 0,
      completedLevels: {},
      unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      soundEnabled: true,
      musicEnabled: true,
      volume: 0.7,
      isPremium: false,
      dailyTimeLimit: 30,
      parentPin: null,
      
      completeLevel: (levelId, stars, score) => { ... },
      unlockLevel: (levelId) => { ... },
      setPremium: (value) => { ... },
      setParentPin: (pin) => { ... },
      resetProgress: () => { ... },
    }),
    { name: 'numeria-archery-storage' }
  )
);

LEVEL DATA - Create 10 levels:

Level 1: Counting 1-10 (easy)
Level 2: Counting 11-20 (easy)
Level 3: Addition +1, +2 (easy)
Level 4: Addition to 10 (medium)
Level 5: Subtraction -1, -2 (easy)
Level 6: Subtraction to 10 (medium)
Level 7: Number bonds to 10 (medium)
Level 8: Doubles (1+1 to 10+10) (medium)
Level 9: Mixed + and - (medium)
Level 10: Boss - All skills (hard)

Each level has 5-8 problems. Generate problems programmatically.

SCREEN SPECIFICATIONS:

1. HOME SCREEN:
   - Game title "Numeria Archery" with archery theme
   - Big "Play" button
   - "Parent Dashboard" button (small, bottom corner)
   - Background: Forest/target range theme
   - Animated bow/arrow decoration

2. LEVEL SELECT SCREEN:
   - Path/map showing 10 level nodes
   - Each node shows: level number, star rating (if completed), lock icon (if locked)
   - Click node to play (if unlocked)
   - Back button to home
   - Progress indicator (X/10 levels completed)

3. GAMEPLAY SCREEN:
   - Top bar: Score, pause button, home button
   - Math problem displayed prominently
   - Game area with bow at bottom center
   - 3-4 target circles with answer numbers
   - Visual feedback: green flash for correct, red for wrong
   - Progress: "Problem 2 of 3"

4. LEVEL COMPLETE SCREEN:
   - "Level Complete!" celebration
   - 3 empty star outlines, fill based on performance
   - Score display
   - XP earned
   - "Next Level" button (if unlocked)
   - "Level Select" button
   - Confetti animation

5. PARENT DASHBOARD:
   - PIN lock screen first (4-digit PIN, default: "1234")
   - Progress overview: levels completed, average stars, total XP
   - Skill breakdown: addition %, subtraction %, counting %
   - Settings: time limit slider, sound toggle, reset progress
   - Back button (returns to game)

6. TELEGRAM CONNECT SCREEN:
   - "Unlock 90 More Levels!"
   - QR code for Telegram bot (@NumeriaArcheryBot)
   - Instructions: "1. Scan QR code 2. Message the bot 3. Enter code below"
   - Code input field (6 characters)
   - Validate button
   - "Get 90 premium levels for FREE!"

7. PREMIUM PAGE:
   - Show locked levels 11-100 as grayed out
   - "Premium Content" header
   - Benefits list: "90 new levels", "New skills", "Special characters"
   - "Unlock via Telegram" button
   - If premium: show all levels unlocked

GAME ENGINE REQUIREMENTS:

The GameEngine class must:
- Handle canvas rendering for bow/arrow/target
- Calculate arrow trajectory with simple physics
- Detect collision between arrow and targets
- Support aim mechanic (mouse/touch position)
- Trigger callbacks on hit/miss
- Animate arrow flight

ROUTING (App.tsx):

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/levels" element={<LevelSelect />} />
    <Route path="/play/:levelId" element={<Gameplay />} />
    <Route path="/complete" element={<LevelComplete />} />
    <Route path="/parent" element={<ParentDashboard />} />
    <Route path="/telegram" element={<TelegramConnect />} />
    <Route path="/premium" element={<PremiumPage />} />
  </Routes>
</BrowserRouter>

STYLING REQUIREMENTS:

- Use Tailwind CSS exclusively
- Color palette: Primary #4F46E5 (indigo), Success #10B981 (green), 
  Warning #F59E0B (amber), Danger #EF4444 (red)
- Rounded corners: rounded-lg for cards, rounded-full for buttons
- Shadows: shadow-lg for elevated elements
- Responsive: must work on tablet and desktop (min width 768px)
- Child-friendly: large buttons, clear text, bright colors

AUDIO (placeholder for now):

Create useAudio hook that:
- Plays sounds when enabled
- Supports: bow-draw, arrow-release, target-hit, correct, wrong, level-complete
- For now, just console.log the sound name
- Full audio implementation can be added later

TELEGRAM INTEGRATION:

For the TelegramConnect screen:
- Generate QR code linking to https://t.me/NumeriaArcheryBot
- Code validation: accept any 6-character code for demo
- On valid code: set isPremium = true in store
- Show success message and redirect to premium page

DELIVERABLES:

1. Fully functional React app with all screens
2. 10 playable levels with math problems
3. Progress saving to localStorage
4. Star rating system
5. Parent dashboard with PIN
6. Telegram conversion flow (UI + basic logic)
7. Premium page with gating
8. Clean, commented code
9. No build errors
10. Ready to deploy

TESTING CHECKLIST:

- [ ] Can complete a full level (3 problems)
- [ ] Stars save and display correctly
- [ ] Level unlock progression works
- [ ] Parent PIN blocks/allows access
- [ ] Telegram code unlocks premium
- [ ] Progress persists after refresh
- [ ] All navigation works
- [ ] No console errors

Build this game step by step, ensuring each component works before moving to the next. Start with types, store, and Home screen, then build out gameplay, levels, and additional features.
```

---

## Quick Start Commands for Developer

```bash
# 1. Create project
npm create vite@latest numeria-archery -- --template react-ts
cd numeria-archery

# 2. Install dependencies
npm install zustand react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Configure Tailwind (tailwind.config.js)
# Add content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# 4. Add Tailwind directives to src/index.css
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# 5. Start development
npm run dev

# 6. Build for production
npm run build
```

---

## Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "zustand": "^4.4.0",
    "lucide-react": "^0.294.0",
    "qrcode.react": "^3.1.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

---

## Summary

This document provides:
- **OUTPUT 16**: 7-phase build order with timelines and validation criteria
- **OUTPUT 17**: Complete delivery package with folder structure, priority files, reusable components, and integration points
- **OUTPUT 18**: Copy-paste ready master instruction for AI/developer implementation

The game should be playable after Phase 3 (approximately 2 weeks), with full features complete by Phase 7 (4-5 weeks total).
