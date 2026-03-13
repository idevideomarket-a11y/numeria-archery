# Numeria Archery - Final Build Instruction

## For Loveable / AI Developer / Human Developer

This document provides complete instructions to build the Numeria Archery educational web game.

---

## QUICK START (Copy-Paste Ready)

```bash
# 1. Create project directory
mkdir numeria-archery && cd numeria-archery

# 2. Copy all files from the provided package
# (See file structure below)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

---

## COMPLETE FILE STRUCTURE

```
numeria-archery/
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
├── tsconfig.node.json        # TypeScript node config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── index.html                # HTML entry point
├── README.md                 # Project documentation
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   ├── store/
│   │   └── gameStore.ts      # Zustand state store
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useAudio.ts       # Audio hook
│   ├── utils/
│   │   └── math.ts           # Math utilities
│   ├── data/
│   │   └── levels.ts         # Level definitions
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── StarDisplay.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Card.tsx
│   │   ├── game/
│   │   │   ├── MathProblem.tsx
│   │   │   ├── Target.tsx
│   │   │   ├── AnswerOptions.tsx
│   │   │   └── GameBoard.tsx
│   │   ├── screens/
│   │   │   ├── Home.tsx
│   │   │   ├── LevelSelect.tsx
│   │   │   ├── Gameplay.tsx
│   │   │   ├── LevelComplete.tsx
│   │   │   └── Settings.tsx
│   │   └── effects/
│   │       └── Confetti.tsx
```

---

## KEY FEATURES IMPLEMENTED

### ✅ Core Gameplay
- Math problem display with large, readable numbers
- 3-4 answer targets per problem
- Tap/click to select answer
- Immediate correct/wrong feedback
- Score tracking
- Problem progression

### ✅ Level System
- 10 free levels with progressive difficulty
- Addition (levels 1-4)
- Subtraction (levels 5-7)
- Mixed practice (levels 8-9)
- Boss level (level 10)

### ✅ Progress System
- Star rating (1-3 stars per level)
- Level unlocking (complete previous to unlock next)
- XP and coin rewards
- LocalStorage persistence

### ✅ UI/UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations (Framer Motion)
- Child-friendly colors and typography
- Audio feedback (Web Audio API)

### ✅ Screens
- Splash screen
- Home screen with stats
- Level select grid
- Gameplay screen
- Level complete celebration
- Settings screen

---

## PREMIUM FEATURES (To Be Implemented)

### Phase 2: Premium Content
1. **90 Additional Levels**
   - Worlds 2-10 (9 worlds × 10 levels)
   - Progressive difficulty
   - New math concepts (place value, time, money)

2. **Character Customization**
   - Quinn customization screen
   - Hair styles, colors, accessories
   - Outfit customization

3. **Parent Dashboard**
   - PIN protection
   - Progress charts
   - Skill breakdown
   - Time limit settings

4. **Telegram Conversion**
   - Conversion screen after level 10
   - Telegram CTA (@DenisBrandMenedjer)
   - Premium page (game.com/premium)
   - Token-based unlock

---

## CUSTOMIZATION GUIDE

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'academy-gold': '#F4B942',  // Primary brand color
  'sky-blue': '#87CEEB',      // Secondary color
  'meadow-green': '#7CB342',  // Success color
  // ... more colors
}
```

### Adding New Levels
Edit `src/data/levels.ts`:
```typescript
{
  id: 11,
  name: 'New Level Name',
  type: 'addition',
  difficulty: 'medium',
  description: 'Level description',
  problems: [
    { num1: 5, operator: '+', num2: 3, answer: 8 },
    // ... more problems
  ],
  distractors: [6, 7, 9, 10],
  timeLimit: 60,
  starThresholds: [15, 30, 45],
  unlockRequirement: 10,
  worldId: 2,
}
```

### Changing Audio
Edit `src/hooks/useAudio.ts`:
- Currently uses Web Audio API beeps
- Replace with actual audio files for production

---

## DEPLOYMENT

### Build for Production
```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to Static Hosting
Upload `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

---

## TESTING CHECKLIST

- [ ] Game loads without errors
- [ ] All 10 levels playable
- [ ] Progress saves correctly
- [ ] Stars display correctly
- [ ] Level unlocking works
- [ ] Audio plays on correct/wrong
- [ ] Responsive on mobile
- [ ] No console errors

---

## SUPPORT

For questions or issues:
- Telegram: @DenisBrandMenedjer
- Email: [your-email]

---

**Built with ❤️ for young math learners!**
