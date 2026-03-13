# NUMERIA ARCHERY - COMPLETE BUILD PACKAGE
## Full Implementation-Ready Game Project

---

# TABLE OF CONTENTS

1. [Executive Build Summary](#output-1---executive-build-summary)
2. [Tech Stack & Implementation Decision](#output-2---tech-stack--implementation-decision)
3. [Full Project File Structure](#output-3---full-project-file-structure)
4. [Game Engine Implementation Plan](#output-4---game-engine-implementation-plan)
5. [React Screen Architecture](#output-5---react-screen-architecture)
6. [Numeria World Shell](#output-6---numeria-world-shell)
7. [Quinn Character System](#output-7---quinn-character-system)
8. [Free 10 Levels Specification](#output-8---free-10-levels-playable-implementation-spec)
9. [Premium 90 Levels Structure](#output-9---premium-90-levels-structure)
10. [Save System](#output-10---save-system)
11. [Parent Dashboard System](#output-11---parent-dashboard-system)
12. [Telegram Conversion System](#output-12---telegram-conversion-system)
13. [Audio System](#output-13---audio-system)
14. [UI/Visual System](#output-14---uivisual-system)
15. [Asset Production Package](#output-15---asset-production-package)
16. [Build Order](#output-16---build-order)
17. [Playable Delivery Package](#output-17---playable-delivery-package)
18. [Final Master Build Instruction](#output-18---final-master-build-instruction)

---

# OUTPUT 1 - EXECUTIVE BUILD SUMMARY

## What Game Is Being Built

**Numeria Archery** is an educational web game for children ages 6-8 that combines math learning with archery-themed gameplay. Players solve math problems by selecting the correct answer from floating targets.

## What The Free Version Contains

- **10 Free Levels** in World 1 (Sunny Meadows)
- Addition problems (sums to 10)
- Subtraction problems (differences to 10)
- Mixed practice and boss challenge
- Star rating system (1-3 stars per level)
- Coin rewards and XP progression
- Progress saving via localStorage
- Audio feedback
- Responsive design for all devices

## What The Premium Version Contains

- **90 Additional Levels** across 9 magical worlds:
  - World 2: Crystal Shores (Levels 11-20)
  - World 3: Whisper Woods (Levels 21-30)
  - World 4: Starlight Peaks (Levels 31-40)
  - World 5: Fruit Forest (Levels 41-50)
  - World 6: Cookie Canyon (Levels 51-60)
  - World 7: Ocean Depths (Levels 61-70)
  - World 8: Moon Garden (Levels 71-80)
  - World 9: Rainbow Heights (Levels 81-90)
  - World 10: Golden Mastery Realm (Levels 91-100)
- Character customization for Quinn
- Parent dashboard with progress tracking
- Advanced math concepts (place value, time, money)

## How Conversion Works

1. Child completes Level 10 (all free content)
2. Celebration screen shows progress stats
3. Child sees "Ask a Parent to Unlock" CTA
4. Parent modal explains premium value
5. Parent contacts @DenisBrandMenedjer on Telegram
6. Founder sends premium link: game.com/premium?token=XXXX
7. Premium flag set in localStorage
8. All 90 levels unlocked

## What Makes The Product Commercially Usable

- **Child-Safe**: COPPA compliant, no ads, no external links
- **Parent-Trusted**: Transparent progress tracking
- **Educationally Sound**: Progressive difficulty, aligned with grades 1-2
- **Low Friction**: No account creation, instant play
- **Founder-Friendly**: Manual Telegram conversion, simple token system
- **Scalable**: Easy to add more levels and worlds

---

# OUTPUT 2 - TECH STACK & IMPLEMENTATION DECISION

## Locked Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | React | 18.2.0 |
| Language | TypeScript | 5.3.3 |
| Build Tool | Vite | 5.0.8 |
| Styling | Tailwind CSS | 3.3.6 |
| State Management | Zustand | 4.4.7 |
| Animation | Framer Motion | 10.16.16 |
| Icons | Lucide React | 0.294.0 |
| Persistence | localStorage | Native |

## Why This Stack Is Best

### React + TypeScript
- Industry standard, excellent ecosystem
- Type safety prevents runtime errors
- Component-based architecture scales well
- Strong developer tooling

### Vite
- Fast development server (HMR)
- Optimized production builds
- Simple configuration
- Modern ES modules support

### Tailwind CSS
- Utility-first = rapid UI development
- Small bundle size (purged in production)
- Consistent design system
- Easy responsive design

### Zustand
- Simpler than Redux, powerful enough
- Minimal boilerplate
- Built-in persistence middleware
- Excellent TypeScript support

### Framer Motion
- Declarative animations
- Gesture support
- AnimatePresence for enter/exit
- Great performance

## How It Supports Desktop/Tablet/Mobile

- **Responsive breakpoints**: Mobile-first design
- **Touch targets**: Minimum 48x48px for buttons
- **Flexible layouts**: Flexbox and Grid
- **Viewport units**: vh/vw for full-screen sections
- **Reduced motion**: Respects user preferences

## How It Supports Fast MVP Delivery

- **Hot Module Replacement**: Instant feedback
- **Component reusability**: Build once, use everywhere
- **Utility classes**: No custom CSS needed
- **Type inference**: Less type annotation
- **Dev tools**: React DevTools, Redux DevTools

---

# OUTPUT 3 - FULL PROJECT FILE STRUCTURE

```
numeria-archery/
├── public/                          # Static assets
│   ├── audio/                       # Audio files
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   ├── click.mp3
│   │   ├── complete.mp3
│   │   └── bgm-menu.mp3
│   ├── images/                      # Image assets
│   │   ├── characters/
│   │   │   ├── quinn/
│   │   │   │   ├── idle.png
│   │   │   │   ├── aim.png
│   │   │   │   ├── shoot.png
│   │   │   │   └── celebrate.png
│   │   │   └── numi/
│   │   │       ├── idle.png
│   │   │       └── guide.png
│   │   ├── backgrounds/
│   │   │   ├── world1-sunny-meadows.jpg
│   │   │   ├── world2-crystal-shores.jpg
│   │   │   └── ... (10 worlds)
│   │   ├── ui/
│   │   │   ├── logo.png
│   │   │   ├── star-filled.png
│   │   │   ├── star-empty.png
│   │   │   └── coin.png
│   │   └── icons/
│   │       └── ... (42+ icons)
│   └── fonts/
│       └── ... (if self-hosted)
│
├── src/
│   ├── main.tsx                     # React entry point
│   ├── App.tsx                      # Main app with routing
│   ├── index.css                    # Global styles + Tailwind
│   │
│   ├── types/
│   │   └── index.ts                 # All TypeScript interfaces
│   │
│   ├── constants/
│   │   ├── game.ts                  # Game constants
│   │   └── colors.ts                # Theme colors
│   │
│   ├── store/
│   │   └── gameStore.ts             # Zustand store with persistence
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.ts       # localStorage hook
│   │   ├── useAudio.ts              # Audio playback hook
│   │   └── useGameState.ts          # Game state management hook
│   │
│   ├── utils/
│   │   ├── math.ts                  # Math problem generation
│   │   ├── validation.ts            # Input validation
│   │   └── analytics.ts             # Progress calculations
│   │
│   ├── data/
│   │   └── levels/
│   │       ├── index.ts             # Level exports
│   │       ├── level01.ts           # Level 1 data
│   │       ├── level02.ts           # Level 2 data
│   │       ├── ... (through level100.ts)
│   │       └── templates.ts         # Level generation templates
│   │
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── StarDisplay.tsx
│   │   │   ├── Input.tsx
│   │   │   └── IconButton.tsx
│   │   │
│   │   ├── game/                    # Game-specific components
│   │   │   ├── GameBoard.tsx        # Main game canvas
│   │   │   ├── MathProblem.tsx      # Problem display
│   │   │   ├── Target.tsx           # Answer target
│   │   │   ├── AnswerOptions.tsx    # Target container
│   │   │   ├── Bow.tsx              # Bow component
│   │   │   ├── Arrow.tsx            # Arrow animation
│   │   │   └── ScoreDisplay.tsx     # Score HUD
│   │   │
│   │   ├── screens/                 # Screen components
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── WorldMapScreen.tsx
│   │   │   ├── WorldViewScreen.tsx
│   │   │   ├── GameplayScreen.tsx
│   │   │   ├── LevelCompleteScreen.tsx
│   │   │   ├── ConversionScreen.tsx
│   │   │   ├── ParentDashboardScreen.tsx
│   │   │   ├── PremiumPageScreen.tsx
│   │   │   ├── SettingsScreen.tsx
│   │   │   ├── CustomizeScreen.tsx
│   │   │   └── HelpScreen.tsx
│   │   │
│   │   ├── parent/                  # Parent dashboard components
│   │   │   ├── ProgressChart.tsx
│   │   │   ├── SkillBreakdown.tsx
│   │   │   ├── TimeSettings.tsx
│   │   │   ├── PinLock.tsx
│   │   │   └── AchievementList.tsx
│   │   │
│   │   ├── conversion/              # Conversion flow components
│   │   │   ├── TelegramQR.tsx
│   │   │   ├── CodeInput.tsx
│   │   │   └── BenefitsList.tsx
│   │   │
│   │   ├── characters/              # Character components
│   │   │   ├── Quinn.tsx
│   │   │   └── Numi.tsx
│   │   │
│   │   └── effects/                 # Visual effects
│   │       ├── Confetti.tsx
│   │       ├── StarBurst.tsx
│   │       ├── FloatingText.tsx
│   │       └── ParticleSystem.tsx
│   │
│   └── engine/                      # Game engine modules
│       ├── GameEngine.ts            # Core game loop
│       ├── LevelGenerator.ts        # Procedural generation
│       ├── AnswerValidator.ts       # Answer checking
│       ├── ProgressionManager.ts    # XP and leveling
│       └── CollisionDetector.ts     # Hit detection
│
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite config
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               # Node TS config
├── tailwind.config.js               # Tailwind config
├── postcss.config.js                # PostCSS config
├── index.html                       # HTML entry
├── .eslintrc.cjs                    # ESLint config
├── .gitignore                       # Git ignore
└── README.md                        # Project docs
```

---

# OUTPUT 4 - GAME ENGINE IMPLEMENTATION PLAN

## 1. Game State Machine

```typescript
type GameState = 
  | 'BOOT'
  | 'MENU'
  | 'WORLD_SELECT'
  | 'LEVEL_SELECT'
  | 'LEVEL_INTRO'
  | 'PLAYING'
  | 'PROBLEM_INTRO'
  | 'WAITING_INPUT'
  | 'ARROW_FLYING'
  | 'FEEDBACK'
  | 'LEVEL_COMPLETE'
  | 'CONVERSION'
  | 'PAUSED';

const stateTransitions: Record<GameState, GameState[]> = {
  BOOT: ['MENU'],
  MENU: ['WORLD_SELECT', 'SETTINGS', 'CUSTOMIZE'],
  WORLD_SELECT: ['MENU', 'LEVEL_SELECT'],
  LEVEL_SELECT: ['WORLD_SELECT', 'LEVEL_INTRO'],
  LEVEL_INTRO: ['PLAYING'],
  PLAYING: ['PROBLEM_INTRO', 'PAUSED'],
  PROBLEM_INTRO: ['WAITING_INPUT'],
  WAITING_INPUT: ['ARROW_FLYING'],
  ARROW_FLYING: ['FEEDBACK'],
  FEEDBACK: ['PROBLEM_INTRO', 'LEVEL_COMPLETE'],
  LEVEL_COMPLETE: ['LEVEL_SELECT', 'CONVERSION'],
  CONVERSION: ['MENU', 'PREMIUM'],
  PAUSED: ['PLAYING', 'MENU'],
};
```

## 2. Problem Display Logic

```typescript
interface ProblemDisplayConfig {
  fontSize: number;        // 48-64px
  color: string;           // #1A1A1A
  background: string;      // rgba(255, 254, 247, 0.95)
  borderRadius: number;    // 50% (circle)
  shadow: string;          // 0 4px 16px rgba(0,0,0,0.1)
  animation: {             // Scale in from 0.8
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 200 }
  };
}

// Problem format: "5 + 3 = ?"
// Operator colors: + (gold), - (coral)
// Answer placeholder: ? (gray)
```

## 3. Target Generation Logic

```typescript
interface TargetConfig {
  count: number;           // 3-4 targets per problem
  size: number;            // 120px mobile, 160px desktop
  spacing: number;         // 24px gap
  layout: 'horizontal' | 'grid';  // horizontal for MVP
  colors: {
    default: 'bg-sky-blue',
    correct: 'bg-meadow-green',
    wrong: 'bg-orange-400',
  };
}

function generateTargets(
  correctAnswer: number,
  distractorCount: number = 3
): TargetData[] {
  const distractors = generateDistractors(correctAnswer, distractorCount);
  const allValues = shuffleArray([correctAnswer, ...distractors]);
  
  return allValues.map((value, index) => ({
    id: `target-${index}`,
    value,
    x: calculateXPosition(index, allValues.length),
    y: calculateYPosition(),
    isCorrect: value === correctAnswer,
  }));
}
```

## 4. Aiming/Shooting Logic

```typescript
// For MVP: Direct tap/click selection
// Future: Drag to aim, release to shoot

interface ShootingConfig {
  mode: 'direct' | 'aim';  // MVP uses 'direct'
  aimAssist: boolean;      // Highlight on hover
  autoShoot: boolean;      // Instant on tap
}

function handleTargetClick(targetId: string) {
  const target = getTarget(targetId);
  
  // Play shoot sound
  playSound('shoot');
  
  // Animate arrow to target
  animateArrowTo(target.x, target.y);
  
  // Check answer after animation
  setTimeout(() => validateAnswer(target.value), 500);
}
```

## 5. Hit Detection Logic

```typescript
// For direct selection, hit detection is implicit
// For aim mode, use distance-based detection:

function checkHit(arrowX: number, arrowY: number, targets: Target[]): Target | null {
  const hitRadius = 80; // pixels
  
  for (const target of targets) {
    const distance = Math.sqrt(
      Math.pow(arrowX - target.x, 2) + 
      Math.pow(arrowY - target.y, 2)
    );
    
    if (distance <= hitRadius) {
      return target;
    }
  }
  
  return null;
}
```

## 6. Correct/Wrong Answer Logic

```typescript
function validateAnswer(selectedValue: number): void {
  const currentProblem = getCurrentProblem();
  const isCorrect = selectedValue === currentProblem.answer;
  
  if (isCorrect) {
    // Correct answer flow
    playSound('correct');
    showCorrectFeedback();
    addScore(10);
    incrementCombo();
    
    // Check for level complete
    if (isLastProblem()) {
      transitionTo('LEVEL_COMPLETE');
    } else {
      nextProblem();
      transitionTo('PROBLEM_INTRO');
    }
  } else {
    // Wrong answer flow
    playSound('wrong');
    showWrongFeedback();
    resetCombo();
    
    // Allow retry (same problem)
    setTimeout(() => transitionTo('WAITING_INPUT'), 1000);
  }
}
```

## 7. Feedback Logic

```typescript
interface FeedbackConfig {
  correct: {
    color: '#4CAF50',
    animation: 'glow + scale(1.1)',
    sound: 'correct.mp3',
    message: '🎉 Great job!',
    particleEffect: 'star-burst',
  },
  wrong: {
    color: '#FF9800',
    animation: 'shake(±5px, 3 cycles)',
    sound: 'wrong.mp3',
    message: '😅 Try again!',
    particleEffect: null,
  },
}

// Feedback duration: 1-1.5 seconds
// Next problem delay: 1.5 seconds after correct
```

## 8. Level Completion Logic

```typescript
function calculateLevelResults(): LevelResults {
  const problems = getLevelProblems();
  const correctCount = problems.filter(p => p.answeredCorrectly).length;
  const totalProblems = problems.length;
  const accuracy = correctCount / totalProblems;
  
  // Calculate score
  const baseScore = correctCount * 10;
  const comboBonus = getMaxCombo() * 5;
  const speedBonus = calculateSpeedBonus();
  const totalScore = baseScore + comboBonus + speedBonus;
  
  // Calculate stars
  const stars = calculateStars(totalScore, maxPossibleScore);
  
  // Calculate rewards
  const xpEarned = stars * 10 + Math.floor(totalScore / 10);
  const coinsEarned = stars * 5;
  
  return {
    score: totalScore,
    stars,
    xpEarned,
    coinsEarned,
    accuracy,
    timeSpent: getLevelTime(),
  };
}

function calculateStars(score: number, maxScore: number): number {
  const ratio = score / maxScore;
  if (ratio >= 0.9) return 3;
  if (ratio >= 0.6) return 2;
  if (ratio >= 0.3) return 1;
  return 0;
}
```

## 9. Retry Logic

```typescript
function retryLevel(levelId: number): void {
  // Reset level state
  resetLevelProgress(levelId);
  
  // Keep same problems but reshuffle distractors
  const level = getLevel(levelId);
  level.problems.forEach(problem => {
    problem.distractors = generateDistractors(problem.answer);
  });
  
  // Start level
  startLevel(levelId);
}
```

## 10. Progression Logic

```typescript
function unlockNextLevel(completedLevelId: number): void {
  const nextLevelId = completedLevelId + 1;
  
  // Check if next level exists
  if (nextLevelId <= getTotalLevels()) {
    // Check if premium required
    if (nextLevelId > 10 && !isPremium()) {
      showConversionScreen();
      return;
    }
    
    // Unlock level
    addUnlockedLevel(nextLevelId);
    
    // Show unlock animation
    showLevelUnlockAnimation(nextLevelId);
  }
}

function checkWorldUnlock(levelId: number): void {
  const worldId = getWorldForLevel(levelId);
  const worldLevels = getLevelsInWorld(worldId);
  const allCompleted = worldLevels.every(l => isLevelCompleted(l.id));
  
  if (allCompleted) {
    const nextWorldId = worldId + 1;
    if (nextWorldId <= 10) {
      unlockWorld(nextWorldId);
      showWorldUnlockAnimation(nextWorldId);
    }
  }
}
```

---

# OUTPUT 5 - REACT SCREEN ARCHITECTURE

## Screen Overview

| Screen | Route | Purpose | Priority |
|--------|-------|---------|----------|
| Splash | `/` | Brand intro, loading | P1 |
| Main Menu | `/menu` | Game entry point | P1 |
| World Map | `/worlds` | Select world | P1 |
| World View | `/world/:id` | Level select per world | P1 |
| Gameplay | `/play/:levelId` | Active game | P1 |
| Level Complete | `/complete/:levelId` | Results | P1 |
| Conversion | `/unlock` | Telegram CTA | P1 |
| Parent Dashboard | `/parent` | Progress & settings | P2 |
| Premium Page | `/premium` | Hidden premium access | P2 |
| Settings | `/settings` | Audio, profile | P2 |
| Customize | `/customize` | Character customization | P2 |
| Help | `/help` | Tutorial | P3 |

## Screen Specifications

### Splash Screen
- Duration: 2-3 seconds
- Content: Logo, tagline, loading bar
- Auto-advance to Main Menu
- Skip on tap

### Main Menu
- Logo and title
- Quinn avatar preview
- Primary CTA: "Play Now"
- Secondary CTAs: "Select World", "Customize Quinn"
- Stats bar: XP, coins, stars
- Parent Zone button (subtle)

### World Map
- 10 world nodes in visual layout
- Connected by path lines
- Show lock/unlock status
- Show progress per world
- Numi guide with hints

### World View (Level Select)
- 10 level nodes in grid (2x5)
- Show stars earned per level
- Lock/unlock status
- Progress bar for world

### Gameplay Screen
- Header: Level number, progress bar, pause
- Problem display (center top)
- Answer targets (center)
- Quinn/bow (bottom)
- Problem counter

### Level Complete
- Celebration header with confetti
- Star animation (sequential fill)
- Score panel
- Next Level / Replay / Level Select buttons

### Conversion Screen
- Stats summary
- Value proposition
- Telegram CTA
- "Maybe Later" option

### Parent Dashboard
- PIN entry gate
- Progress overview
- Skill breakdown chart
- Settings panel
- Export/reset options

### Premium Page
- Welcome message
- Unlocked features list
- Open Game button
- Support contact

---

# OUTPUT 6 - NUMERIA WORLD SHELL

## Magical Academy Framing

The game is set in the **Numeria Academy of Mathematical Archery**, a magical school where young apprentices learn math through the ancient art of archery.

### Story Setup
> "Welcome to Numeria Academy! I'm Numi, your guide. Here, you'll learn to become a Math Archer Master by solving problems and hitting targets. Are you ready to begin your journey?"

## World Map Concept

The world map shows a floating island archipelago connected by golden bridges. Each island represents a world with its own theme and mascot.

## 10 Worlds Specification

### World 1: Sunny Meadows (FREE - Levels 1-10)
- **Theme**: Bright meadows, sunflowers, butterflies
- **Colors**: Yellow (#FFD93D), Green (#7CB342), Gold (#F4B942)
- **Background**: Rolling hills, blue sky, fluffy clouds
- **Target Style**: Sunflower targets
- **Mascot**: Sunny the Butterfly
- **Skill Focus**: Addition and subtraction basics
- **Music**: Cheerful, upbeat

### World 2: Crystal Shores (Levels 11-20)
- **Theme**: Beach, seashells, crystal clear water
- **Colors**: Cyan (#00CED1), Mint (#98FF98), White
- **Background**: Sandy beach, ocean waves, palm trees
- **Target Style**: Seashell targets
- **Mascot**: Shelly the Turtle
- **Skill Focus**: Addition to 15
- **Unlock**: Complete World 1 OR Premium

### World 3: Whisper Woods (Levels 21-30)
- **Theme**: Enchanted forest, fireflies, mushrooms
- **Colors**: Green (#228B22), Purple (#8A2BE2), Pink (#FFB6C1)
- **Background**: Tall trees, dappled sunlight, mist
- **Target Style**: Mushroom targets
- **Mascot**: Oliver the Owl
- **Skill Focus**: Subtraction to 15

### World 4: Starlight Peaks (Levels 31-40)
- **Theme**: Mountain peaks, stars, aurora
- **Colors**: Navy (#191970), Silver (#C0C0C0), Gold (#FFD700)
- **Background**: Snowy mountains, night sky, aurora
- **Target Style**: Star targets
- **Mascot**: Stella the Star
- **Skill Focus**: Mixed operations

### World 5: Fruit Forest (Levels 41-50)
- **Theme**: Orchard, fruit trees, harvest
- **Colors**: Red (#FF4444), Yellow (#FFE135), Green (#8EE53F)
- **Background**: Fruit trees, baskets, sunshine
- **Target Style**: Fruit targets
- **Mascot**: Berry the Bear
- **Skill Focus**: Number patterns

### World 6: Cookie Canyon (Levels 51-60)
- **Theme**: Bakery, cookies, sweets
- **Colors**: Brown (#D2691E), Chocolate (#7B3F00), Pink (#FF69B4)
- **Background**: Cookie cliffs, frosting rivers
- **Target Style**: Cookie targets
- **Mascot**: Chip the Chipmunk
- **Skill Focus**: Place value

### World 7: Ocean Depths (Levels 61-70)
- **Theme**: Underwater, coral reef, sea creatures
- **Colors**: Navy (#000080), Cyan (#00FFFF), Gold (#FFD700)
- **Background**: Coral reef, bubbles, fish
- **Target Style**: Bubble targets
- **Mascot**: Bubbles the Dolphin
- **Skill Focus**: Word problems

### World 8: Moon Garden (Levels 71-80)
- **Theme**: Moonlit garden, glowing flowers
- **Colors**: Silver (#C0C0C0), Blue (#4169E1), Cream (#FFFACD)
- **Background**: Moon garden, fireflies, pond
- **Target Style**: Moonflower targets
- **Mascot**: Luna the Rabbit
- **Skill Focus**: Time concepts

### World 9: Rainbow Heights (Levels 81-90)
- **Theme**: Rainbow bridge, clouds, prism light
- **Colors**: Full spectrum
- **Background**: Rainbow bridge, cloud islands
- **Target Style**: Prism targets
- **Mascot**: Prism the Bird
- **Skill Focus**: Money concepts

### World 10: Golden Mastery Realm (Levels 91-100)
- **Theme**: Graduation, golden hall, trophies
- **Colors**: Gold (#FFD700), White, Purple (#800080)
- **Background**: Grand hall, trophies, banners
- **Target Style**: Golden targets
- **Mascot**: King Numi (graduation gown)
- **Skill Focus**: Mastery challenge

## World Progression Visual Logic

### Locked World
- Grayscale filter (80%)
- Lock icon overlay
- "Complete [Previous World] to unlock" tooltip
- Dimmed opacity

### Unlocked World
- Full color
- Playable indicator
- Progress bar showing completion

### Current World
- Pulsing glow effect
- Quinn avatar on world node
- "Continue your journey" label

### Completed World
- Gold border
- Checkmark badge
- Star count display
- "Replay" option

---

# OUTPUT 7 - QUINN CHARACTER SYSTEM

## Quinn Visual Role

Quinn is the player's avatar - a young archer apprentice at Numeria Academy. Quinn appears in:
- Main menu (idle animation)
- Level select (encouraging pose)
- Gameplay (aiming/shooting)
- Level complete (celebration)

## Customization Options (MVP)

### Hair Style (4 options)
1. Short
2. Ponytail
3. Braids
4. Curly

### Hair Color (6 options)
1. Black (#1A1A1A)
2. Brown (#8B4513)
3. Blonde (#FFD700)
4. Red (#FF6B6B)
5. Blue (#4ECDC4)
6. Purple (#9B59B6)

### Skin Tone (4 options)
1. Light (#FFDFC4)
2. Medium-Light (#F0C8A0)
3. Medium (#D4A574)
4. Dark (#8B5A3C)

### Eye Color (4 options)
1. Brown (#5D4037)
2. Blue (#2196F3)
3. Green (#4CAF50)
4. Hazel (#FF9800)

### Outfit Color (6 options)
1. Red (#FF6B6B)
2. Blue (#4ECDC4)
3. Green (#7CB342)
4. Purple (#9B59B6)
5. Orange (#FF8A65)
6. Pink (#FFB6C1)

## Storage Schema

```typescript
interface QuinnCustomization {
  hairStyle: number;   // 0-3
  hairColor: number;   // 0-5
  skinTone: number;    // 0-3
  eyeColor: number;    // 0-3
  outfitColor: number; // 0-5
}

// Saved to localStorage key: 'numeria_quinn_customization'
```

## Where Customization Appears

1. **Main Menu** - Large preview with idle animation
2. **Gameplay** - Small avatar in corner
3. **Level Complete** - Celebration pose
4. **Customize Screen** - Full preview with rotation

## Minimal MVP System

For the first playable version:
- Store customization in localStorage
- Show preview on main menu
- Allow changing in settings
- Apply colors to SVG/emoji avatar

Future versions will have:
- Full SVG character with pose variations
- Accessories (hats, bows, capes)
- Unlockable items

---

# OUTPUT 8 - FREE 10 LEVELS: PLAYABLE IMPLEMENTATION SPEC

## Level 1: First Steps
| Field | Value |
|-------|-------|
| level_id | 1 |
| level_title | First Steps |
| learning_goal | Introduction to addition |
| operation_type | addition |
| number_range | 1-5 |
| problem_count | 5 |
| target_count | 3 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2 from answer |
| assist_logic | Numi highlights correct answer after 10s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 2-3 minutes |
| parent_facing_meaning | Child learns basic addition |
| exact_problems | 1+1, 1+2, 2+1, 2+2, 1+3 |

## Level 2: Sunny Sums
| Field | Value |
|-------|-------|
| level_id | 2 |
| level_title | Sunny Sums |
| learning_goal | Addition to 5 |
| operation_type | addition |
| number_range | 1-5 |
| problem_count | 5 |
| target_count | 3 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2 from answer |
| assist_logic | Numi hints after 15s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 2-3 minutes |
| parent_facing_meaning | Child masters sums to 5 |
| exact_problems | 2+3, 3+1, 1+4, 2+2, 3+2 |

## Level 3: Growing Strong
| Field | Value |
|-------|-------|
| level_id | 3 |
| level_title | Growing Strong |
| learning_goal | Addition to 7 |
| operation_type | addition |
| number_range | 1-7 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi hints after 15s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 3-4 minutes |
| parent_facing_meaning | Child extends addition skills |
| exact_problems | 3+3, 4+2, 5+1, 4+3, 2+5 |

## Level 4: Double Digits
| Field | Value |
|-------|-------|
| level_id | 4 |
| level_title | Double Digits |
| learning_goal | Addition to 10 |
| operation_type | addition |
| number_range | 1-10 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi hints after 20s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 3-4 minutes |
| parent_facing_meaning | Child masters addition to 10 |
| exact_problems | 5+5, 6+3, 7+2, 4+5, 8+1 |

## Level 5: Take Away
| Field | Value |
|-------|-------|
| level_id | 5 |
| level_title | Take Away |
| learning_goal | Introduction to subtraction |
| operation_type | subtraction |
| number_range | 1-5 |
| problem_count | 5 |
| target_count | 3 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2 from answer |
| assist_logic | Numi explains subtraction |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 2-3 minutes |
| parent_facing_meaning | Child learns basic subtraction |
| exact_problems | 3-1, 4-1, 5-2, 4-2, 5-3 |

## Level 6: Subtracting Stars
| Field | Value |
|-------|-------|
| level_id | 6 |
| level_title | Subtracting Stars |
| learning_goal | Subtraction to 7 |
| operation_type | subtraction |
| number_range | 1-7 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi hints after 15s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 3-4 minutes |
| parent_facing_meaning | Child extends subtraction skills |
| exact_problems | 6-2, 7-3, 6-3, 7-4, 5-2 |

## Level 7: Subtraction Master
| Field | Value |
|-------|-------|
| level_id | 7 |
| level_title | Subtraction Master |
| learning_goal | Subtraction to 10 |
| operation_type | subtraction |
| number_range | 1-10 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi hints after 20s |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 3-4 minutes |
| parent_facing_meaning | Child masters subtraction to 10 |
| exact_problems | 10-5, 9-4, 8-3, 10-7, 9-6 |

## Level 8: Math Mix-Up
| Field | Value |
|-------|-------|
| level_id | 8 |
| level_title | Math Mix-Up |
| learning_goal | Mixed addition and subtraction |
| operation_type | mixed |
| number_range | 1-10 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi reminds of operation |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 4-5 minutes |
| parent_facing_meaning | Child practices mixed operations |
| exact_problems | 4+3, 8-3, 2+5, 9-4, 3+4 |

## Level 9: Brain Teasers
| Field | Value |
|-------|-------|
| level_id | 9 |
| level_title | Brain Teasers |
| learning_goal | Challenging mixed problems |
| operation_type | mixed |
| number_range | 1-10 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3 from answer |
| assist_logic | Numi encouragement |
| reward_logic | 5 coins per star |
| world_theme | Sunny Meadows |
| expected_duration | 4-5 minutes |
| parent_facing_meaning | Child tackles challenging problems |
| exact_problems | 7+3, 10-4, 6+4, 8-5, 5+5 |

## Level 10: Boss Challenge
| Field | Value |
|-------|-------|
| level_id | 10 |
| level_title | Boss Challenge |
| learning_goal | Mastery of all skills |
| operation_type | boss |
| number_range | 1-15 |
| problem_count | 5 |
| target_count | 4 |
| target_speed | 0 (static) |
| decoy_logic | ±1, ±2, ±3, ±4 from answer |
| assist_logic | None - this is the challenge! |
| reward_logic | 10 coins per star (bonus) |
| world_theme | Sunny Meadows |
| expected_duration | 5-6 minutes |
| parent_facing_meaning | Child demonstrates mastery |
| exact_problems | 8+4, 15-7, 9+5, 12-6, 7+8 |
| conversion_role | Triggers Telegram conversion CTA |

---

# OUTPUT 9 - PREMIUM 90 LEVELS STRUCTURE

## World Allocation

| World | Levels | Math Focus | Difficulty |
|-------|--------|------------|------------|
| 2: Crystal Shores | 11-20 | Addition to 15 | Easy-Medium |
| 3: Whisper Woods | 21-30 | Subtraction to 15 | Easy-Medium |
| 4: Starlight Peaks | 31-40 | Mixed to 15 | Medium |
| 5: Fruit Forest | 41-50 | Number patterns | Medium |
| 6: Cookie Canyon | 51-60 | Place value | Medium |
| 7: Ocean Depths | 61-70 | Word problems | Medium-Hard |
| 8: Moon Garden | 71-80 | Time concepts | Medium-Hard |
| 9: Rainbow Heights | 81-90 | Money concepts | Hard |
| 10: Golden Mastery | 91-100 | Mastery challenge | Hard |

## Progression Pattern

### Math Progression
```
World 1 (Free):  Addition/Subtraction to 10
World 2:         Addition to 15
World 3:         Subtraction to 15
World 4:         Mixed to 15
World 5:         Number patterns, sequences
World 6:         Place value (tens/ones)
World 7:         Word problems
World 8:         Time (hours, half-hours)
World 9:         Money (coins, making change)
World 10:        Comprehensive mastery
```

### Level Template Usage

| Template | Count | Description |
|----------|-------|-------------|
| Tutorial | 9 | Introduce new concept |
| Practice | 45 | Reinforce learning |
| Focus | 18 | Target specific skill |
| Speed | 9 | Timed challenges |
| Mastery | 9 | Comprehensive review |

### Milestone Levels

| Level | Type | Reward |
|-------|------|--------|
| 20 | World 2 Complete | Unlock World 3 |
| 30 | World 3 Complete | Unlock World 4 |
| 40 | World 4 Complete | Unlock World 5 |
| 50 | Halfway Point | Special achievement |
| 60 | World 6 Complete | Unlock World 7 |
| 70 | World 7 Complete | Unlock World 8 |
| 80 | World 8 Complete | Unlock World 9 |
| 90 | World 9 Complete | Unlock World 10 |
| 100 | Game Complete | Master badge |

### Challenge Levels

- Every 10th level is a "Challenge" level
- Harder problems, no hints
- Bonus coin rewards
- Required for world unlock

### Mastery Levels

- Level 50: Mid-game mastery check
- Level 100: Final mastery challenge
- Combines all learned skills
- Special celebration on completion

## Premium Access Flow

1. Child completes Level 10
2. Conversion screen appears
3. Parent contacts @DenisBrandMenedjer
4. Founder generates unique token
5. Parent receives: game.com/premium?token=XXXX
6. Parent opens link on child's device
7. Premium flag set in localStorage
8. All 90 levels unlocked

---

# OUTPUT 10 - SAVE SYSTEM

## localStorage Schema

### Storage Keys
```typescript
const STORAGE_KEYS = {
  PLAYER_PROGRESS: 'numeria_player_progress',
  QUINN_CUSTOMIZATION: 'numeria_quinn_customization',
  SETTINGS: 'numeria_settings',
  SESSION_DATA: 'numeria_session_data',
  SCHEMA_VERSION: 'numeria_schema_version',
};
```

### Schema Version
```typescript
const SCHEMA_VERSION = '1.0.0';
```

## Player Progress Object

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  "playerId": "na_abc123xyz",
  "progress": {
    "completedLevels": {
      "1": { "stars": 3, "score": 45, "completed": true, "date": "2024-01-10T09:15:00.000Z" },
      "2": { "stars": 2, "score": 30, "completed": true, "date": "2024-01-11T10:20:00.000Z" }
    },
    "unlockedLevels": [1, 2, 3, 4],
    "currentLevel": 4,
    "highestLevelReached": 4
  },
  "currency": {
    "stars": { "total": 19 },
    "coins": 47,
    "totalCoinsEarned": 62
  },
  "achievements": {
    "firstBullseye": { "unlocked": true, "date": "2024-01-10T09:15:00.000Z" },
    "perfectLevel": { "unlocked": false }
  }
}
```

## Premium Levels Save

```json
{
  "premiumLevels": {
    "unlocked": true,
    "purchaseDate": "2024-01-15T14:30:00.000Z",
    "token": "X7K9P2M4",
    "completed": 15,
    "levels": {
      "11": { "stars": 3, "score": 50, "completed": true },
      "12": { "stars": 2, "score": 35, "completed": true }
    }
  }
}
```

## Quinn Customization Save

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  "hairStyle": 2,
  "hairColor": 4,
  "skinTone": 1,
  "eyeColor": 2,
  "outfitColor": 3
}
```

## Settings Save

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  "audio": {
    "musicEnabled": true,
    "sfxEnabled": true,
    "volume": 0.7
  },
  "gameplay": {
    "difficulty": "normal",
    "hintsEnabled": true
  },
  "playerName": "Archer"
}
```

## Save/Load Functions

```typescript
// Save player progress
function savePlayerProgress(progress: PlayerProgress): void {
  const dataToSave = {
    ...progress,
    schemaVersion: SCHEMA_VERSION,
    lastUpdated: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, JSON.stringify(dataToSave));
}

// Load player progress
function loadPlayerProgress(): PlayerProgress | null {
  const stored = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
  if (!stored) return null;
  
  const parsed = JSON.parse(stored);
  
  // Check schema version
  if (parsed.schemaVersion !== SCHEMA_VERSION) {
    return migrateData(parsed, parsed.schemaVersion, SCHEMA_VERSION);
  }
  
  return parsed;
}
```

## Data Validation

```typescript
function validatePlayerProgress(data: any): boolean {
  // Check required fields
  if (!data.schemaVersion || !data.progress) return false;
  
  // Validate level data
  for (const [levelId, levelData] of Object.entries(data.progress.completedLevels)) {
    const level = levelData as LevelProgress;
    if (level.stars < 0 || level.stars > 3) return false;
    if (level.score < 0) return false;
  }
  
  return true;
}
```

## Corruption Recovery

```typescript
function detectAndRepairCorruption(): { repaired: boolean; action: string } {
  const progress = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
  
  if (!progress) {
    return { repaired: false, action: 'no_data' };
  }
  
  try {
    const parsed = JSON.parse(progress);
    
    if (!validatePlayerProgress(parsed)) {
      // Reset to defaults
      localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, JSON.stringify(createDefaultProgress()));
      return { repaired: true, action: 'reset_to_defaults' };
    }
    
    return { repaired: false, action: 'data_valid' };
  } catch (error) {
    // JSON parse error - reset
    localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, JSON.stringify(createDefaultProgress()));
    return { repaired: true, action: 'reset_after_parse_error' };
  }
}
```

---

# OUTPUT 11 - PARENT DASHBOARD SYSTEM

## Access Method

### PIN Entry Gate
- Simple 4-digit PIN (default: 1234)
- Numeric keypad UI
- "Forgot PIN?" → Reset option

### Alternative: Math Challenge
- "What is 7 + 5?" (child can't solve easily)
- For parents who forget PIN

## Metrics Displayed

### Progress Summary Card
```
┌─────────────────────────────┐
│      PROGRESS SUMMARY       │
├─────────────────────────────┤
│  Levels: 8/10 completed     │
│  Stars: 25/30 earned        │
│  Accuracy: 87%              │
│  Time Played: 2h 15m        │
│  Current Streak: 5 days     │
└─────────────────────────────┘
```

### Skill Breakdown Chart
```
┌─────────────────────────────┐
│      SKILL BREAKDOWN        │
├─────────────────────────────┤
│  Addition:     ████████░░ 85% │
│  Subtraction:  ██████░░░░ 72% │
│  Recognition:  █████████░ 95% │
│  Speed:        ███████░░░ 70% │
└─────────────────────────────┘
```

### Learning Areas
- **Strong**: Addition to 10, Number recognition
- **Needs Practice**: Subtraction, Speed

### Recent Activity
- Last played: Today, 3:45 PM
- Levels completed today: 2
- Time played today: 15 minutes

## Settings Panel

### Time Limits
- Daily play limit: [30 min slider]
- Session time limit: [15 min slider]
- Break reminders: [toggle]

### Audio Settings
- Music volume: [slider]
- Sound effects: [slider]
- Master mute: [toggle]

### Game Settings
- Difficulty: [Easy/Normal/Hard dropdown]
- Hints: [toggle]
- Timer display: [toggle]

## Actions

### Export Progress
- Generate shareable summary
- Screenshot-friendly format
- PDF export option

### Reset Progress
- Confirmation dialog required
- "This cannot be undone"
- Option to backup first

## Mobile-Friendly Design

- Single column layout
- Large touch targets
- Scrollable sections
- Collapsible cards

---

# OUTPUT 12 - TELEGRAM CONVERSION SYSTEM

## Conversion Flow

```
Level 10 Complete
    ↓
Celebration Screen
    ↓
Conversion Screen (Child View)
    ↓
Parent Modal (on CTA click)
    ↓
Telegram Contact
    ↓
Premium Link
    ↓
Premium Page
    ↓
All Levels Unlocked
```

## Child View

### Celebration + Conversion
```
┌─────────────────────────────────────────┐
│         🌟 AMAZING WORK! 🌟             │
│                                         │
│    You completed ALL FREE LEVELS!       │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      YOUR STATS             │      │
│    │  🎯 10/10 Levels Complete   │      │
│    │  ⭐ 28/30 Stars Earned      │      │
│    │  🏹 47 Perfect Shots        │      │
│    └─────────────────────────────┘      │
│                                         │
│    ╔═══════════════════════════════════╗│
│    ║   🎁 MORE LEVELS AWAIT!          ║│
│    ║   Unlock 90 MORE levels!         ║│
│    ║   🏔️ 9 New Magical Worlds        ║│
│    ╚═══════════════════════════════════╝│
│                                         │
│    ┌─────────────────────────────┐      │
│    │  📱 ASK A PARENT TO UNLOCK  │      │
│    └─────────────────────────────┘      │
│                                         │
│    [I'll Play Again Later]              │
│                                         │
└─────────────────────────────────────────┘
```

## Parent View

### Value Proposition
```
┌─────────────────────────────────────────┐
│         👋 Hello, Parent!               │
│                                         │
│  Your child loves Numeria Archery!      │
│                                         │
│  ╔═══════════════════════════════════╗  │
│  ║   WHY UPGRADE?                    ║  │
│  ║   ✓ 90 Additional Levels          ║  │
│  ║   ✓ Progressive Math Learning     ║  │
│  ║   ✓ No Ads, No Distractions       ║  │
│  ║   ✓ COPPA Compliant & Safe        ║  │
│  ║   ✓ One-time Purchase             ║  │
│  ╚═══════════════════════════════════╝  │
│                                         │
│  ╔═══════════════════════════════════╗  │
│  ║   📱 HOW TO UNLOCK:               ║  │
│  ║                                   ║  │
│  ║   Contact on Telegram:            ║  │
│  ║   @DenisBrandMenedjer             ║  │
│  ║                                   ║  │
│  ║   [ 📲 OPEN TELEGRAM ]            ║  │
│  ╚═══════════════════════════════════╝  │
│                                         │
│  [🔒 Not Now - Return to Free Levels]   │
│                                         │
└─────────────────────────────────────────┘
```

## Telegram Integration

### Deep Link
```typescript
const TELEGRAM_HANDLE = 'DenisBrandMenedjer';

function openTelegram() {
  const message = encodeURIComponent(
    "Hi! I'd like to unlock Numeria Archery premium for my child."
  );
  const url = `https://t.me/${TELEGRAM_HANDLE}?text=${message}`;
  window.open(url, '_blank');
}
```

## Premium Page

### URL Format
```
https://game.com/premium?token=UNIQUE_TOKEN
```

### Token Validation
```typescript
function validateToken(token: string): boolean {
  // Format: 8 alphanumeric characters
  const tokenRegex = /^[A-Z0-9]{8}$/;
  return tokenRegex.test(token);
}

function unlockPremium(token: string): void {
  if (validateToken(token)) {
    localStorage.setItem('numeria_premium', 'true');
    localStorage.setItem('numeria_token', token);
    localStorage.setItem('numeria_unlockedAt', Date.now().toString());
  }
}
```

## Fallback for "Maybe Later"

### Reminder Badge
- Show on main menu: "🔓 Unlock More!"
- Persistent until premium unlocked

### Re-engagement
- After 3 plays: Subtle banner
- After 7 days: Re-show conversion screen
- After 15 days: Final reminder

---

# OUTPUT 13 - AUDIO SYSTEM

## MVP Audio (Web Audio API)

### Sound Categories

| Category | Sounds | Implementation |
|----------|--------|----------------|
| UI | click, hover | Web Audio beep |
| Gameplay | shoot, hit | Web Audio beep |
| Feedback | correct, wrong | Web Audio beep |
| Celebration | complete, star | Web Audio beep |

### Frequency Mapping
```typescript
const soundFrequencies: Record<string, number> = {
  'correct': 880,    // A5 - happy
  'wrong': 220,      // A3 - sad
  'click': 440,      // A4 - neutral
  'star': 1320,      // E6 - bright
  'complete': 660,   // E5 - celebratory
  'shoot': 550,      // C#5 - action
};
```

## Production Audio (MP3 Files)

### Background Music
| Track | File | Duration | Plays |
|-------|------|----------|-------|
| Menu | bgm_menu.mp3 | 60s loop | Menu, settings |
| World 1 | bgm_world1.mp3 | 90s loop | Sunny Meadows |
| World 2+ | bgm_world2.mp3 | 90s loop | Premium worlds |

### Sound Effects
| Effect | File | Trigger |
|--------|------|---------|
| Button Click | ui_click.mp3 | All button clicks |
| Arrow Shoot | arrow_shoot.mp3 | Target selection |
| Correct | correct.mp3 | Right answer |
| Wrong | wrong.mp3 | Wrong answer |
| Star | star.mp3 | Star earned |
| Level Complete | level_complete.mp3 | Level finish |

## Audio Settings

```typescript
interface AudioSettings {
  musicEnabled: boolean;
  sfxEnabled: boolean;
  volume: number;  // 0-1
}
```

## Mute Toggle

- Master mute button in settings
- Individual music/SFX toggles
- Volume slider (0-100%)
- Saves preference to localStorage

---

# OUTPUT 14 - UI/VISUAL SYSTEM

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Academy Gold | #F4B942 | Primary brand, buttons, stars |
| Sky Blue | #87CEEB | Secondary, backgrounds |
| Cloud White | #FFFEF7 | Cards, containers |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Meadow Green | #7CB342 | Success, correct answers |
| Sunset Coral | #FF8A65 | Warm accents, CTAs |
| Lavender Mist | #B39DDB | Magic effects, premium |

### Feedback Colors
| State | Color |
|-------|-------|
| Correct | #4CAF50 (green) |
| Incorrect | #FF9800 (orange) |
| Neutral | #90A4AE (blue-gray) |

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Game Title | Fredoka One | 48px | 400 |
| Screen Title | Nunito | 36px | 700 |
| Problem Display | Nunito | 64px | 700 |
| Target Numbers | Fredoka One | 48px | 400 |
| Button Text | Nunito | 20px | 700 |
| Body Text | Nunito | 18px | 400 |

## Button System

### Primary Button
- Background: gradient from #F4B942 to #F59E0B
- Text: #1A1A1A (dark)
- Border-radius: 16px
- Shadow: 0 4px 12px rgba(244, 185, 66, 0.4)
- Hover: scale(1.05), translateY(-2px)

### Secondary Button
- Background: gradient from #87CEEB to #5DADE2
- Text: white
- Same styling as primary

### Sizes
| Size | Padding | Min Width |
|------|---------|-----------|
| sm | 8px 16px | 100px |
| md | 12px 24px | 150px |
| lg | 16px 32px | 200px |

## Card System

### Level Card
- Size: 80x100px (mobile), 100x120px (desktop)
- Border-radius: 16px
- Background: white
- Shadow: 0 4px 12px rgba(0,0,0,0.1)
- States: locked, unlocked, completed, perfect

### World Card
- Size: 280x180px
- Border-radius: 24px
- Background: themed gradient
- Shadow: 0 8px 24px rgba(0,0,0,0.15)

## Animation Standards

| Animation | Duration | Easing |
|-----------|----------|--------|
| Button hover | 200ms | ease-out |
| Screen transition | 300ms | ease-out |
| Star appear | 500ms | spring |
| Target hit | 300ms | ease-out |
| Confetti | 2000ms | physics |

---

# OUTPUT 15 - ASSET PRODUCTION PACKAGE

## MVP Assets (Must-Have)

### Characters
| Asset | Format | Priority |
|-------|--------|----------|
| Quinn avatar (emoji/SVG) | SVG/PNG | P1 |
| Numi guide (emoji/SVG) | SVG/PNG | P1 |

### Backgrounds
| Asset | Format | Priority |
|-------|--------|----------|
| World 1 background | JPG/PNG | P1 |
| Menu background | JPG/PNG | P1 |

### UI
| Asset | Format | Priority |
|-------|--------|----------|
| Star icons | SVG | P1 |
| Coin icon | SVG | P1 |
| Lock icon | SVG | P1 |
| Button backgrounds | CSS | P1 |

### Audio
| Asset | Format | Priority |
|-------|--------|----------|
| Correct sound | MP3 | P2 |
| Wrong sound | MP3 | P2 |
| Click sound | MP3 | P2 |

## Nice-to-Have Assets (Post-MVP)

### Characters
- Full Quinn pose set (idle, aim, shoot, celebrate)
- Numi animation set
- World mascots (10)

### Backgrounds
- All 10 world backgrounds
- Menu variations
- Parallax layers

### Audio
- Full music tracks (10 worlds)
- Complete SFX library
- Voice lines

---

# OUTPUT 16 - BUILD ORDER

## Phase 1: Project Setup (Days 1-2)
**Objective**: Foundation and tooling

### Files to Create
- package.json
- vite.config.ts
- tsconfig.json
- tailwind.config.js
- src/types/index.ts
- src/store/gameStore.ts
- src/hooks/useLocalStorage.ts

### Validation
- [ ] `npm install` succeeds
- [ ] `npm run dev` starts
- [ ] No TypeScript errors

## Phase 2: Core UI (Days 3-4)
**Objective**: Reusable components

### Files to Create
- src/components/ui/Button.tsx
- src/components/ui/Card.tsx
- src/components/ui/Modal.tsx
- src/components/ui/StarDisplay.tsx
- src/components/ui/ProgressBar.tsx

### Validation
- [ ] All components render
- [ ] Animations work
- [ ] Responsive on mobile

## Phase 3: Game Components (Days 5-7)
**Objective**: Game-specific components

### Files to Create
- src/components/game/MathProblem.tsx
- src/components/game/Target.tsx
- src/components/game/AnswerOptions.tsx
- src/components/game/GameBoard.tsx
- src/utils/math.ts

### Validation
- [ ] Problem displays correctly
- [ ] Targets render
- [ ] Answer selection works

## Phase 4: Screens (Days 8-12)
**Objective**: All game screens

### Files to Create
- src/components/screens/Home.tsx
- src/components/screens/LevelSelect.tsx
- src/components/screens/Gameplay.tsx
- src/components/screens/LevelComplete.tsx
- src/components/screens/Settings.tsx

### Validation
- [ ] Navigation works
- [ ] All screens accessible
- [ ] Progress saves

## Phase 5: Level Data (Days 13-14)
**Objective**: 10 playable levels

### Files to Create
- src/data/levels.ts (levels 1-10)

### Validation
- [ ] All 10 levels playable
- [ ] Difficulty progression feels right
- [ ] No broken problems

## Phase 6: Polish (Days 15-17)
**Objective**: Audio, effects, bugs

### Files to Create
- src/hooks/useAudio.ts
- src/components/effects/Confetti.tsx

### Validation
- [ ] Audio plays correctly
- [ ] No console errors
- [ ] Smooth animations

## Phase 7: Testing (Days 18-20)
**Objective**: QA and fixes

### Checklist
- [ ] All 10 levels playable end-to-end
- [ ] Progress persists
- [ ] Works on mobile
- [ ] No major bugs

---

# OUTPUT 17 - PLAYABLE DELIVERY PACKAGE

## Priority Files to Build First

### Week 1
| Priority | File | Purpose |
|----------|------|---------|
| 1 | types/index.ts | Type definitions |
| 2 | store/gameStore.ts | State management |
| 3 | components/ui/Button.tsx | Primary UI |
| 4 | components/screens/Home.tsx | Entry point |
| 5 | App.tsx | Router setup |

### Week 2
| Priority | File | Purpose |
|----------|------|---------|
| 6 | components/game/GameBoard.tsx | Core game |
| 7 | components/game/Target.tsx | Answer targets |
| 8 | components/screens/LevelSelect.tsx | Level picker |
| 9 | components/screens/Gameplay.tsx | Game screen |

### Week 3
| Priority | File | Purpose |
|----------|------|---------|
| 10 | data/levels.ts | Level content |
| 11 | components/screens/LevelComplete.tsx | Results |
| 12 | Polish & testing | Final QA |

## What Must Be Playable in First Build

### Core Loop
```
Home → Level Select → Gameplay → Level Complete → Level Select
```

### Minimum Features
- [ ] Click "Play" from home
- [ ] See level select with 3+ levels
- [ ] Click level to start
- [ ] See math problem
- [ ] See 3-4 answer targets
- [ ] Tap target to answer
- [ ] See correct/wrong feedback
- [ ] Complete 3-5 problems
- [ ] See stars earned
- [ ] Return to level select
- [ ] Progress saved

### Excluded from First Build
- Parent dashboard (placeholder)
- Telegram conversion (placeholder)
- Premium content ("Coming Soon")
- Full audio (basic beeps)
- Complex animations

---

# OUTPUT 18 - FINAL MASTER BUILD INSTRUCTION

## For Loveable / AI Developer

```
BUILD A COMPLETE REACT WEB GAME: Numeria Archery

OVERVIEW:
Create "Numeria Archery" - an educational math game for children ages 6-8 
where players solve math problems by shooting arrows at targets.

TECH STACK:
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Zustand (state management)
- Framer Motion (animations)
- Lucide React (icons)

PROJECT STRUCTURE:
Create this exact folder structure:

src/
├── main.tsx
├── App.tsx
├── index.css
├── types/index.ts
├── store/gameStore.ts
├── hooks/useLocalStorage.ts
├── hooks/useAudio.ts
├── utils/math.ts
├── data/levels.ts
├── components/ui/Button.tsx
├── components/ui/StarDisplay.tsx
├── components/ui/ProgressBar.tsx
├── components/game/GameBoard.tsx
├── components/game/Target.tsx
├── components/game/MathProblem.tsx
├── components/game/AnswerOptions.tsx
├── components/screens/Home.tsx
├── components/screens/LevelSelect.tsx
├── components/screens/Gameplay.tsx
├── components/screens/LevelComplete.tsx
├── components/screens/Settings.tsx
└── components/effects/Confetti.tsx

CORE GAME MECHANICS:
1. MATH PROBLEMS: Addition/subtraction within 10-20
2. GAMEPLAY: Problem appears → Tap correct target → Get feedback → Next problem
3. SCORING: 10 points per correct answer, stars based on accuracy

TYPE DEFINITIONS:
export interface MathProblem {
  num1: number;
  operator: '+' | '-';
  num2: number;
  answer: number;
}

export interface Level {
  id: number;
  name: string;
  type: 'addition' | 'subtraction' | 'mixed';
  difficulty: 'easy' | 'medium' | 'hard';
  problems: MathProblem[];
  starThresholds: [number, number, number];
}

GAME STORE:
Use Zustand with persist middleware:
- completedLevels: Record of level progress
- unlockedLevels: Array of unlocked level IDs
- coins: number
- soundEnabled: boolean

LEVELS TO CREATE:
Level 1-4: Addition (to 5, 7, 10)
Level 5-7: Subtraction (to 5, 7, 10)
Level 8-9: Mixed practice
Level 10: Boss challenge

SCREEN SPECIFICATIONS:
1. HOME: Logo, "Play Now" button, stats display
2. LEVEL SELECT: Grid of 10 levels, show stars/locks
3. GAMEPLAY: Problem display, answer targets, score
4. LEVEL COMPLETE: Stars animation, score, next/replay buttons

BUILD INSTRUCTIONS:
1. Create project with Vite: npm create vite@latest numeria-archery -- --template react-ts
2. Install dependencies: npm install zustand framer-motion lucide-react
3. Install dev dependencies: npm install -D tailwindcss postcss autoprefixer
4. Initialize Tailwind: npx tailwindcss init -p
5. Copy all source files
6. Run: npm run dev

TESTING:
- All 10 levels playable
- Progress saves correctly
- Works on mobile
- No console errors
```

---

## END OF BUILD PACKAGE

**Numeria Archery - Complete Implementation Documentation**

*Version 1.0 - Ready for Development*
