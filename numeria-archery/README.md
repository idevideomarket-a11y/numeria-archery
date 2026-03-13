# Numeria Archery

An educational math game for children ages 6-8 where players solve math problems by shooting arrows at targets.

## Features

- 🎯 **10 Free Levels** - Progressive math difficulty from addition to subtraction
- ⭐ **Star Rating System** - Earn up to 3 stars per level
- 🪙 **Coin Rewards** - Collect coins for completing levels
- 💾 **Progress Saving** - Local storage persistence
- 🔊 **Audio Feedback** - Sound effects for correct/wrong answers
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Zustand (state management)
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd numeria-archery

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Game Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── game/         # Game-specific components
│   ├── screens/      # Screen components
│   └── effects/      # Visual effects
├── data/
│   └── levels.ts     # Level definitions
├── store/
│   └── gameStore.ts  # Zustand store
├── hooks/
│   ├── useAudio.ts   # Audio hook
│   └── useLocalStorage.ts
├── utils/
│   └── math.ts       # Math utilities
└── types/
    └── index.ts      # TypeScript types
```

## Level Progression

| Level | Type | Description |
|-------|------|-------------|
| 1 | Addition | First Steps (1+1 to 3+2) |
| 2 | Addition | Sunny Sums (up to 5) |
| 3 | Addition | Growing Strong (up to 7) |
| 4 | Addition | Double Digits (up to 10) |
| 5 | Subtraction | Take Away (small numbers) |
| 6 | Subtraction | Subtracting Stars (up to 7) |
| 7 | Subtraction | Subtraction Master (up to 10) |
| 8 | Mixed | Math Mix-Up |
| 9 | Mixed | Brain Teasers |
| 10 | Boss | Boss Challenge (all skills) |

## Future Features (Premium)

- 90 additional levels across 9 magical worlds
- Character customization for Quinn
- Parent dashboard with progress tracking
- Telegram conversion flow
- Premium unlock via hidden link

## License

Copyright © 2024 Numeria Archery. All rights reserved.
