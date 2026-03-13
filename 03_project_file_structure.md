# Numeria Archery - Full Project File Structure

## Project Overview
**Game Title:** Numeria Archery  
**Genre:** Educational Math Web Game  
**Target Audience:** Children ages 6-8  
**Platform:** React Web Application  
**Total Levels:** 100 (10 free + 90 premium)  

---

## 📁 Complete File/Folder Tree

```
numeria-archery/
│
├── 📄 .env                          # Environment variables
├── 📄 .env.example                  # Environment template
├── 📄 .gitignore                    # Git ignore rules
├── 📄 package.json                  # NPM dependencies & scripts
├── 📄 package-lock.json             # Lock file
├── 📄 README.md                     # Project documentation
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vite.config.ts                # Vite build configuration
├── 📄 index.html                    # Entry HTML file
├── 📄 manifest.json                 # PWA manifest
│
├── 📁 public/                       # Static public assets
│   ├── 📄 favicon.ico
│   ├── 📄 favicon-16x16.png
│   ├── 📄 favicon-32x32.png
│   ├── 📄 apple-touch-icon.png
│   ├── 📄 robots.txt
│   └── 📁 icons/
│       ├── 📄 icon-192x192.png
│       ├── 📄 icon-512x512.png
│       └── 📄 maskable-icon.png
│
├── 📁 src/                          # Source code root
│   │
│   ├── 📄 main.tsx                  # React entry point
│   ├── 📄 App.tsx                   # Root App component
│   ├── 📄 App.css                   # Global App styles
│   ├── 📄 index.css                 # Global CSS reset & vars
│   │
│   ├── 📁 types/                    # TypeScript type definitions
│   │   ├── 📄 index.ts              # Main types export
│   │   ├── 📄 game.ts               # Game-related types
│   │   ├── 📄 player.ts             # Player/progress types
│   │   ├── 📄 levels.ts             # Level configuration types
│   │   ├── 📄 assets.ts             # Asset types
│   │   └── 📄 api.ts                # API/telegram types
│   │
│   ├── 📁 constants/                # App constants
│   │   ├── 📄 index.ts              # Constants export
│   │   ├── 📄 game.ts               # Game constants (speeds, sizes)
│   │   ├── 📄 levels.ts             # Level constants
│   │   ├── 📄 math.ts               # Math operation constants
│   │   ├── 📄 storage.ts            # localStorage keys
│   │   └── 📄 routes.ts             # Route paths
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   │   ├── 📄 index.ts              # Hooks export
│   │   ├── 📄 useGameState.ts       # Game state management
│   │   ├── 📄 useLevelProgress.ts   # Level progress tracking
│   │   ├── 📄 usePlayerProgress.ts  # Player progress hook
│   │   ├── 📄 useLocalStorage.ts    # localStorage hook
│   │   ├── 📄 useAudio.ts           # Audio playback hook
│   │   ├── 📄 useAnimation.ts       # Animation utilities
│   │   ├── 📄 useCollision.ts       # Collision detection hook
│   │   ├── 📄 useInput.ts           # Input handling hook
│   │   └── 📄 useTelegram.ts        # Telegram integration hook
│   │
│   ├── 📁 context/                  # React Context providers
│   │   ├── 📄 index.ts              # Context exports
│   │   ├── 📄 GameContext.tsx       # Game state context
│   │   ├── 📄 PlayerContext.tsx     # Player data context
│   │   ├── 📄 AudioContext.tsx      # Audio management context
│   │   ├── 📄 ThemeContext.tsx      # Theme/settings context
│   │   └── 📄 ParentContext.tsx     # Parent mode context
│   │
│   ├── 📁 utils/                    # Utility functions
│   │   ├── 📄 index.ts              # Utils export
│   │   ├── 📄 math.ts               # Math problem generators
│   │   ├── 📄 random.ts             # Random number utilities
│   │   ├── 📄 validation.ts         # Input validation
│   │   ├── 📄 formatting.ts         # Number/text formatting
│   │   ├── 📄 physics.ts            # Physics calculations
│   │   ├── 📄 geometry.ts           # Geometry helpers
│   │   └── 📄 telegram.ts           # Telegram API helpers
│   │
│   ├── 📁 services/                 # Business logic services
│   │   ├── 📄 index.ts              # Services export
│   │   ├── 📄 saveService.ts        # Save/load game state
│   │   ├── 📄 progressService.ts    # Progress tracking service
│   │   ├── 📄 levelService.ts       # Level management service
│   │   ├── 📄 audioService.ts       # Audio management service
│   │   ├── 📄 analyticsService.ts   # Analytics tracking
│   │   └── 📄 telegramService.ts    # Telegram bot service
│   │
│   ├── 📁 assets/                   # Game assets
│   │   │
│   │   ├── 📁 images/               # Image assets
│   │   │   ├── 📁 backgrounds/
│   │   │   │   ├── 📄 bg-forest.png
│   │   │   │   ├── 📄 bg-meadow.png
│   │   │   │   ├── 📄 bg-mountain.png
│   │   │   │   ├── 📄 bg-desert.png
│   │   │   │   ├── 📄 bg-snow.png
│   │   │   │   ├── 📄 bg-beach.png
│   │   │   │   ├── 📄 bg-castle.png
│   │   │   │   └── 📄 bg-space.png
│   │   │   │
│   │   │   ├── 📁 characters/
│   │   │   │   ├── 📄 archer-default.png
│   │   │   │   ├── 📄 archer-happy.png
│   │   │   │   ├── 📄 archer-sad.png
│   │   │   │   ├── 📄 archer-celebrate.png
│   │   │   │   ├── 📁 outfits/
│   │   │   │   │   ├── 📄 outfit-01.png
│   │   │   │   │   ├── 📄 outfit-02.png
│   │   │   │   │   ├── 📄 outfit-03.png
│   │   │   │   │   └── 📄 outfit-04.png
│   │   │   │   │
│   │   │   │   └── 📁 bows/
│   │   │   │       ├── 📄 bow-wooden.png
│   │   │   │       ├── 📄 bow-golden.png
│   │   │   │       ├── 📄 bow-crystal.png
│   │   │   │       └── 📄 bow-magic.png
│   │   │   │
│   │   │   ├── 📁 targets/
│   │   │   │   ├── 📄 target-red.png
│   │   │   │   ├── 📄 target-blue.png
│   │   │   │   ├── 📄 target-gold.png
│   │   │   │   ├── 📄 target-broken.png
│   │   │   │   └── 📄 bullseye.png
│   │   │   │
│   │   │   ├── 📁 arrows/
│   │   │   │   ├── 📄 arrow-normal.png
│   │   │   │   ├── 📄 arrow-fire.png
│   │   │   │   ├── 📄 arrow-ice.png
│   │   │   │   └── 📄 arrow-magic.png
│   │   │   │
│   │   │   ├── 📁 balloons/
│   │   │   │   ├── 📄 balloon-red.png
│   │   │   │   ├── 📄 balloon-blue.png
│   │   │   │   ├── 📄 balloon-green.png
│   │   │   │   ├── 📄 balloon-yellow.png
│   │   │   │   ├── 📄 balloon-purple.png
│   │   │   │   └── 📄 balloon-pop.png
│   │   │   │
│   │   │   ├── 📁 ui/
│   │   │   │   ├── 📄 logo.png
│   │   │   │   ├── 📄 star-empty.png
│   │   │   │   ├── 📄 star-filled.png
│   │   │   │   ├── 📄 coin.png
│   │   │   │   ├── 📄 gem.png
│   │   │   │   ├── 📄 heart.png
│   │   │   │   ├── 📄 trophy.png
│   │   │   │   ├── 📄 medal-bronze.png
│   │   │   │   ├── 📄 medal-silver.png
│   │   │   │   ├── 📄 medal-gold.png
│   │   │   │   ├── 📄 lock.png
│   │   │   │   └── 📄 checkmark.png
│   │   │   │
│   │   │   └── 📁 effects/
│   │   │       ├── 📄 sparkle.png
│   │   │       ├── 📄 confetti.png
│   │   │       ├── 📄 explosion.png
│   │   │       └── 📄 trail.png
│   │   │
│   │   ├── 📁 audio/                # Audio assets
│   │   │   ├── 📁 music/
│   │   │   │   ├── 📄 menu-music.mp3
│   │   │   │   ├── 📄 game-music-1.mp3
│   │   │   │   ├── 📄 game-music-2.mp3
│   │   │   │   ├── 📄 game-music-3.mp3
│   │   │   │   ├── 📄 victory-music.mp3
│   │   │   │   └── 📄 boss-music.mp3
│   │   │   │
│   │   │   ├── 📁 sfx/
│   │   │   │   ├── 📄 arrow-shoot.mp3
│   │   │   │   ├── 📄 arrow-hit.mp3
│   │   │   │   ├── 📄 balloon-pop.mp3
│   │   │   │   ├── 📄 target-hit.mp3
│   │   │   │   ├── 📄 correct-answer.mp3
│   │   │   │   ├── 📄 wrong-answer.mp3
│   │   │   │   ├── 📄 level-complete.mp3
│   │   │   │   ├── 📄 level-fail.mp3
│   │   │   │   ├── 📄 star-earn.mp3
│   │   │   │   ├── 📄 coin-earn.mp3
│   │   │   │   ├── 📄 button-click.mp3
│   │   │   │   ├── 📄 unlock-sound.mp3
│   │   │   │   └── 📄 celebration.mp3
│   │   │   │
│   │   │   └── 📁 voice/
│   │   │       ├── 📄 voice-correct.mp3
│   │   │       ├── 📄 voice-try-again.mp3
│   │   │       ├── 📄 voice-great-job.mp3
│   │   │       ├── 📄 voice-awesome.mp3
│   │   │       └── 📄 numbers/          # Number pronunciations
│   │   │           ├── 📄 num-0.mp3
│   │   │           ├── 📄 num-1.mp3
│   │   │           ├── 📄 num-2.mp3
│   │   │           └── ... (0-100)
│   │   │
│   │   └── 📁 fonts/                # Font files
│   │       ├── 📄 Nunito-Regular.ttf
│   │       ├── 📄 Nunito-Bold.ttf
│   │       ├── 📄 Nunito-ExtraBold.ttf
│   │       ├── 📄 ComicNeue-Regular.ttf
│   │       └── 📄 ComicNeue-Bold.ttf
│   │
│   ├── 📁 styles/                   # Global styles
│   │   ├── 📄 variables.css         # CSS variables
│   │   ├── 📄 animations.css        # Keyframe animations
│   │   ├── 📄 mixins.css            # CSS mixins
│   │   └── 📄 responsive.css        # Responsive breakpoints
│   │
│   ├── 📁 data/                     # Static data files
│   │   ├── 📄 achievements.json     # Achievement definitions
│   │   ├── 📄 rewards.json          # Reward definitions
│   │   └── 📄 tips.json             # Educational tips
│   │
│   ├── 📁 config/                   # Configuration files
│   │   ├── 📄 game.config.ts        # Game settings
│   │   ├── 📄 levels.config.ts      # Level progression config
│   │   └── 📄 premium.config.ts     # Premium features config
│   │
│   ├── 📁 levels/                   # Level definitions (100 levels)
│   │   ├── 📄 index.ts              # Levels export
│   │   ├── 📄 level-01.json         # Level 1: Addition (1-5)
│   │   ├── 📄 level-02.json         # Level 2: Addition (1-10)
│   │   ├── 📄 level-03.json         # Level 3: Subtraction (1-5)
│   │   ├── 📄 level-04.json         # Level 4: Subtraction (1-10)
│   │   ├── 📄 level-05.json         # Level 5: Mixed +-
│   │   ├── 📄 level-06.json         # Level 6: Addition (1-20)
│   │   ├── 📄 level-07.json         # Level 7: Subtraction (1-20)
│   │   ├── 📄 level-08.json         # Level 8: Mixed +-
│   │   ├── 📄 level-09.json         # Level 9: Number bonds
│   │   ├── 📄 level-10.json         # Level 10: Boss Level
│   │   │
│   │   ├── 📄 level-11.json         # Level 11: Premium - Multiplication intro
│   │   ├── 📄 level-12.json         # Level 12: Premium - x2 tables
│   │   ├── 📄 level-13.json         # Level 13: Premium - x3 tables
│   │   ├── 📄 level-14.json         # Level 14: Premium - x4 tables
│   │   ├── 📄 level-15.json         # Level 15: Premium - x5 tables
│   │   ├── 📄 level-16.json         # Level 16: Premium - Mixed x2-5
│   │   ├── 📄 level-17.json         # Level 17: Premium - x6 tables
│   │   ├── 📄 level-18.json         # Level 18: Premium - x7 tables
│   │   ├── 📄 level-19.json         # Level 19: Premium - x8 tables
│   │   ├── 📄 level-20.json         # Level 20: Premium - x9 tables
│   │   │
│   │   ├── 📄 level-21.json         # Level 21-30: Division intro
│   │   ├── 📄 level-22.json
│   │   ├── 📄 level-23.json
│   │   ├── 📄 level-24.json
│   │   ├── 📄 level-25.json
│   │   ├── 📄 level-26.json
│   │   ├── 📄 level-27.json
│   │   ├── 📄 level-28.json
│   │   ├── 📄 level-29.json
│   │   ├── 📄 level-30.json
│   │   │
│   │   ├── 📄 level-31.json         # Level 31-40: Mixed operations
│   │   ├── 📄 level-32.json
│   │   ├── 📄 level-33.json
│   │   ├── 📄 level-34.json
│   │   ├── 📄 level-35.json
│   │   ├── 📄 level-36.json
│   │   ├── 📄 level-37.json
│   │   ├── 📄 level-38.json
│   │   ├── 📄 level-39.json
│   │   ├── 📄 level-40.json
│   │   │
│   │   ├── 📄 level-41.json         # Level 41-50: Word problems
│   │   ├── 📄 level-42.json
│   │   ├── 📄 level-43.json
│   │   ├── 📄 level-44.json
│   │   ├── 📄 level-45.json
│   │   ├── 📄 level-46.json
│   │   ├── 📄 level-47.json
│   │   ├── 📄 level-48.json
│   │   ├── 📄 level-49.json
│   │   ├── 📄 level-50.json
│   │   │
│   │   ├── 📄 level-51.json         # Level 51-60: Time & money
│   │   ├── 📄 level-52.json
│   │   ├── 📄 level-53.json
│   │   ├── 📄 level-54.json
│   │   ├── 📄 level-55.json
│   │   ├── 📄 level-56.json
│   │   ├── 📄 level-57.json
│   │   ├── 📄 level-58.json
│   │   ├── 📄 level-59.json
│   │   ├── 📄 level-60.json
│   │   │
│   │   ├── 📄 level-61.json         # Level 61-70: Patterns & sequences
│   │   ├── 📄 level-62.json
│   │   ├── 📄 level-63.json
│   │   ├── 📄 level-64.json
│   │   ├── 📄 level-65.json
│   │   ├── 📄 level-66.json
│   │   ├── 📄 level-67.json
│   │   ├── 📄 level-68.json
│   │   ├── 📄 level-69.json
│   │   ├── 📄 level-70.json
│   │   │
│   │   ├── 📄 level-71.json         # Level 71-80: Fractions intro
│   │   ├── 📄 level-72.json
│   │   ├── 📄 level-73.json
│   │   ├── 📄 level-74.json
│   │   ├── 📄 level-75.json
│   │   ├── 📄 level-76.json
│   │   ├── 📄 level-77.json
│   │   ├── 📄 level-78.json
│   │   ├── 📄 level-79.json
│   │   ├── 📄 level-80.json
│   │   │
│   │   ├── 📄 level-81.json         # Level 81-90: Challenge levels
│   │   ├── 📄 level-82.json
│   │   ├── 📄 level-83.json
│   │   ├── 📄 level-84.json
│   │   ├── 📄 level-85.json
│   │   ├── 📄 level-86.json
│   │   ├── 📄 level-87.json
│   │   ├── 📄 level-88.json
│   │   ├── 📄 level-89.json
│   │   ├── 📄 level-90.json
│   │   │
│   │   ├── 📄 level-91.json         # Level 91-100: Master levels
│   │   ├── 📄 level-92.json
│   │   ├── 📄 level-93.json
│   │   ├── 📄 level-94.json
│   │   ├── 📄 level-95.json
│   │   ├── 📄 level-96.json
│   │   ├── 📄 level-97.json
│   │   ├── 📄 level-98.json
│   │   ├── 📄 level-99.json
│   │   └── 📄 level-100.json        # Final boss level
│   │
│   ├── 📁 game-engine/              # Core game engine
│   │   ├── 📄 index.ts              # Engine exports
│   │   │
│   │   ├── 📁 state-machine/        # Game state management
│   │   │   ├── 📄 GameStateMachine.ts
│   │   │   ├── 📄 states/
│   │   │   │   ├── 📄 BaseState.ts
│   │   │   │   ├── 📄 MenuState.ts
│   │   │   │   ├── 📄 PlayingState.ts
│   │   │   │   ├── 📄 PausedState.ts
│   │   │   │   ├── 📄 LevelCompleteState.ts
│   │   │   │   ├── 📄 LevelFailState.ts
│   │   │   │   ├── 📄 VictoryState.ts
│   │   │   │   └── 📄 GameOverState.ts
│   │   │   └── 📄 transitions/
│   │   │       ├── 📄 StateTransition.ts
│   │   │       └── 📄 TransitionRules.ts
│   │   │
│   │   ├── 📁 input/                # Input handling
│   │   │   ├── 📄 InputManager.ts
│   │   │   ├── 📄 KeyboardInput.ts
│   │   │   ├── 📄 MouseInput.ts
│   │   │   ├── 📄 TouchInput.ts
│   │   │   └── 📄 InputActions.ts
│   │   │
│   │   ├── 📁 physics/              # Physics engine
│   │   │   ├── 📄 PhysicsEngine.ts
│   │   │   ├── 📄 Trajectory.ts
│   │   │   ├── 📄 ProjectileMotion.ts
│   │   │   ├── 📄 WindSystem.ts
│   │   │   └── 📄 GravitySystem.ts
│   │   │
│   │   ├── 📁 collision/            # Collision detection
│   │   │   ├── 📄 CollisionDetector.ts
│   │   │   ├── 📄 CollisionShapes.ts
│   │   │   ├── 📄 HitTester.ts
│   │   │   └── 📄 CollisionResponse.ts
│   │   │
│   │   ├── 📁 renderer/             # Rendering system
│   │   │   ├── 📄 GameRenderer.ts
│   │   │   ├── 📄 LayerManager.ts
│   │   │   ├── 📄 SpriteRenderer.ts
│   │   │   ├── 📄 ParticleSystem.ts
│   │   │   └── 📄 EffectsRenderer.ts
│   │   │
│   │   ├── 📁 entities/             # Game entities
│   │   │   ├── 📄 Entity.ts
│   │   │   ├── 📄 EntityManager.ts
│   │   │   ├── 📄 Archer.ts
│   │   │   ├── 📄 Arrow.ts
│   │   │   ├── 📄 Target.ts
│   │   │   ├── 📄 Balloon.ts
│   │   │   └── 📄 Obstacle.ts
│   │   │
│   │   ├── 📁 systems/              # Game systems
│   │   │   ├── 📄 ScoringSystem.ts
│   │   │   ├── 📄 TimerSystem.ts
│   │   │   ├── 📄 ComboSystem.ts
│   │   │   ├── 📄 StarSystem.ts
│   │   │   └── 📄 DifficultySystem.ts
│   │   │
│   │   └── 📁 math/                 # Math problem system
│   │       ├── 📄 MathProblem.ts
│   │       ├── 📄 ProblemGenerator.ts
│   │       ├── 📄 AnswerValidator.ts
│   │       └── 📄 DifficultyScaler.ts
│   │
│   ├── 📁 components/               # Reusable UI components
│   │   ├── 📄 index.ts              # Components export
│   │   │
│   │   ├── 📁 buttons/
│   │   │   ├── 📄 Button.tsx
│   │   │   ├── 📄 IconButton.tsx
│   │   │   ├── 📄 ArrowButton.tsx
│   │   │   ├── 📄 ActionButton.tsx
│   │   │   └── 📄 AnswerButton.tsx
│   │   │
│   │   ├── 📁 display/
│   │   │   ├── 📄 ScoreDisplay.tsx
│   │   │   ├── 📄 TimerDisplay.tsx
│   │   │   ├── 📄 StarDisplay.tsx
│   │   │   ├── 📄 CoinDisplay.tsx
│   │   │   ├── 📄 LevelBadge.tsx
│   │   │   ├── 📄 ProgressBar.tsx
│   │   │   └── 📄 ComboCounter.tsx
│   │   │
│   │   ├── 📁 game/
│   │   │   ├── 📄 ArcherCharacter.tsx
│   │   │   ├── 📄 TargetBoard.tsx
│   │   │   ├── 📄 BalloonCluster.tsx
│   │   │   ├── 📄 ArrowProjectile.tsx
│   │   │   ├── 📄 MathProblemDisplay.tsx
│   │   │   ├── 📄 AnswerOptions.tsx
│   │   │   ├── 📄 AimGuide.tsx
│   │   │   └── 📄 PowerMeter.tsx
│   │   │
│   │   ├── 📁 feedback/
│   │   │   ├── 📄 CorrectFeedback.tsx
│   │   │   ├── 📄 WrongFeedback.tsx
│   │   │   ├── 📄 CelebrationEffect.tsx
│   │   │   ├── 📄 StarEarned.tsx
│   │   │   └── 📄 ConfettiEffect.tsx
│   │   │
│   │   ├── 📁 modals/
│   │   │   ├── 📄 Modal.tsx
│   │   │   ├── 📄 PauseModal.tsx
│   │   │   ├── 📄 LevelCompleteModal.tsx
│   │   │   ├── 📄 LevelFailModal.tsx
│   │   │   ├── 📄 SettingsModal.tsx
│   │   │   ├── 📄 ConfirmModal.tsx
│   │   │   └── 📄 UnlockModal.tsx
│   │   │
│   │   ├── 📁 navigation/
│   │   │   ├── 📄 BackButton.tsx
│   │   │   ├── 📄 HomeButton.tsx
│   │   │   ├── 📄 MenuButton.tsx
│   │   │   └── 📄 NavigationBar.tsx
│   │   │
│   │   └── 📁 layout/
│   │       ├── 📄 Container.tsx
│   │       ├── 📄 Card.tsx
│   │       ├── 📄 Grid.tsx
│   │       ├── 📄 Flex.tsx
│   │       └── 📄 SafeArea.tsx
│   │
│   ├── 📁 screens/                  # Game screens/pages
│   │   ├── 📄 index.ts              # Screens export
│   │   │
│   │   ├── 📁 splash/
│   │   │   ├── 📄 SplashScreen.tsx
│   │   │   ├── 📄 SplashScreen.css
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 loading/
│   │   │   ├── 📄 LoadingScreen.tsx
│   │   │   ├── 📄 LoadingScreen.css
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 main-menu/
│   │   │   ├── 📄 MainMenuScreen.tsx
│   │   │   ├── 📄 MainMenuScreen.css
│   │   │   ├── 📄 MenuBackground.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 level-select/
│   │   │   ├── 📄 LevelSelectScreen.tsx
│   │   │   ├── 📄 LevelSelectScreen.css
│   │   │   ├── 📄 LevelGrid.tsx
│   │   │   ├── 📄 LevelCard.tsx
│   │   │   ├── 📄 WorldSelector.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 game-play/
│   │   │   ├── 📄 GamePlayScreen.tsx
│   │   │   ├── 📄 GamePlayScreen.css
│   │   │   ├── 📄 GameCanvas.tsx
│   │   │   ├── 📄 GameUI.tsx
│   │   │   ├── 📄 ProblemPanel.tsx
│   │   │   ├── 📄 ControlPanel.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 level-complete/
│   │   │   ├── 📄 LevelCompleteScreen.tsx
│   │   │   ├── 📄 LevelCompleteScreen.css
│   │   │   ├── 📄 RewardsPanel.tsx
│   │   │   ├── 📄 StarAnimation.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 level-fail/
│   │   │   ├── 📄 LevelFailScreen.tsx
│   │   │   ├── 📄 LevelFailScreen.css
│   │   │   ├── 📄 RetryPanel.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 character-customize/
│   │   │   ├── 📄 CustomizeScreen.tsx
│   │   │   ├── 📄 CustomizeScreen.css
│   │   │   ├── 📄 OutfitSelector.tsx
│   │   │   ├── 📄 BowSelector.tsx
│   │   │   ├── 📄 ColorPicker.tsx
│   │   │   ├── 📄 PreviewPanel.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 achievements/
│   │   │   ├── 📄 AchievementsScreen.tsx
│   │   │   ├── 📄 AchievementsScreen.css
│   │   │   ├── 📄 AchievementCard.tsx
│   │   │   ├── 📄 AchievementGrid.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 settings/
│   │   │   ├── 📄 SettingsScreen.tsx
│   │   │   ├── 📄 SettingsScreen.css
│   │   │   ├── 📄 AudioSettings.tsx
│   │   │   ├── 📄 DisplaySettings.tsx
│   │   │   ├── 📄 GameplaySettings.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 help/
│   │   │   ├── 📄 HelpScreen.tsx
│   │   │   ├── 📄 HelpScreen.css
│   │   │   ├── 📄 HowToPlay.tsx
│   │   │   ├── 📄 TipsPanel.tsx
│   │   │   └── 📄 index.ts
│   │   │
│   │   └── 📁 credits/
│   │       ├── 📄 CreditsScreen.tsx
│   │       ├── 📄 CreditsScreen.css
│   │       └── 📄 index.ts
│   │
│   ├── 📁 parent-dashboard/         # Parent dashboard (hidden)
│   │   ├── 📄 index.ts              # Dashboard exports
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── 📄 ParentGate.tsx    # Math gate to enter
│   │   │   ├── 📄 DashboardLayout.tsx
│   │   │   ├── 📄 StatCard.tsx
│   │   │   ├── 📄 ProgressChart.tsx
│   │   │   ├── 📄 TimeLimitSetter.tsx
│   │   │   ├── 📄 SkillBreakdown.tsx
│   │   │   └── 📄 ReportCard.tsx
│   │   │
│   │   ├── 📁 screens/
│   │   │   ├── 📄 ParentLoginScreen.tsx
│   │   │   ├── 📄 DashboardScreen.tsx
│   │   │   ├── 📄 ProgressScreen.tsx
│   │   │   ├── 📄 SettingsScreen.tsx
│   │   │   └── 📄 ReportsScreen.tsx
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 useParentAuth.ts
│   │   │   ├── 📄 useChildProgress.ts
│   │   │   └── 📄 useTimeTracking.ts
│   │   │
│   │   └── 📁 utils/
│   │       ├── 📄 reportGenerator.ts
│   │       └── 📄 progressAnalyzer.ts
│   │
│   ├── 📁 premium/                  # Premium features
│   │   ├── 📄 index.ts              # Premium exports
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── 📄 PremiumGate.tsx
│   │   │   ├── 📄 PremiumBadge.tsx
│   │   │   ├── 📄 UnlockButton.tsx
│   │   │   ├── 📄 FeatureList.tsx
│   │   │   ├── 📄 PricingCard.tsx
│   │   │   └── 📄 TelegramButton.tsx
│   │   │
│   │   ├── 📁 screens/
│   │   │   ├── 📄 PremiumScreen.tsx
│   │   │   ├── 📄 UnlockScreen.tsx
│   │   │   ├── 📄 SuccessScreen.tsx
│   │   │   └── 📄 TelegramScreen.tsx
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 usePremiumStatus.ts
│   │   │   ├── 📄 useTelegram.ts
│   │   │   └── 📄 usePurchase.ts
│   │   │
│   │   └── 📁 services/
│   │       ├── 📄 telegramBot.ts
│   │       └── 📄 purchaseService.ts
│   │
│   ├── 📁 shared-ui/                # Shared UI system
│   │   ├── 📄 index.ts              # Shared UI exports
│   │   │
│   │   ├── 📁 animations/
│   │   │   ├── 📄 FadeIn.tsx
│   │   │   ├── 📄 SlideIn.tsx
│   │   │   ├── 📄 Bounce.tsx
│   │   │   ├── 📄 Shake.tsx
│   │   │   ├── 📄 Pulse.tsx
│   │   │   ├── 📄 Scale.tsx
│   │   │   └── 📄 TransitionWrapper.tsx
│   │   │
│   │   ├── 📁 icons/
│   │   │   ├── 📄 GameIcons.tsx
│   │   │   ├── 📄 UIIcons.tsx
│   │   │   ├── 📄 SocialIcons.tsx
│   │   │   └── 📄 IconSprite.tsx
│   │   │
│   │   ├── 📁 loaders/
│   │   │   ├── 📄 Spinner.tsx
│   │   │   ├── 📄 DotsLoader.tsx
│   │   │   ├── 📄 ProgressLoader.tsx
│   │   │   └── 📄 Skeleton.tsx
│   │   │
│   │   ├── 📁 overlays/
│   │   │   ├── 📄 Overlay.tsx
│   │   │   ├── 📄 Backdrop.tsx
│   │   │   ├── 📄 Tooltip.tsx
│   │   │   └── 📄 Toast.tsx
│   │   │
│   │   ├── 📁 forms/
│   │   │   ├── 📄 Input.tsx
│   │   │   ├── 📄 NumberInput.tsx
│   │   │   ├── 📄 Select.tsx
│   │   │   └── 📄 Toggle.tsx
│   │   │
│   │   └── 📁 typography/
│   │       ├── 📄 Heading.tsx
│   │       ├── 📄 Text.tsx
│   │       ├── 📄 Number.tsx
│   │       └── 📄 MathExpression.tsx
│   │
│   ├── 📁 save-system/              # Save/Load system
│   │   ├── 📄 index.ts              # Save system exports
│   │   ├── 📄 SaveManager.ts        # Main save manager
│   │   ├── 📄 LocalStorageAdapter.ts
│   │   ├── 📄 SaveValidator.ts      # Validate save data
│   │   ├── 📄 SaveMigrator.ts       # Migrate old saves
│   │   ├── 📄 BackupSystem.ts       # Create backups
│   │   └── 📄 types.ts              # Save-related types
│   │
│   └── 📁 router/                   # Routing configuration
│       ├── 📄 AppRouter.tsx         # Main router
│       ├── 📄 routes.tsx            # Route definitions
│       ├── 📄 RouteGuard.tsx        # Route protection
│       └── 📄 LazyLoader.tsx        # Lazy loading wrapper
│
├── 📁 scripts/                      # Build/utility scripts
│   ├── 📄 generate-levels.js        # Generate level JSONs
│   ├── 📄 optimize-assets.js        # Asset optimization
│   └── 📄 deploy.js                 # Deployment script
│
├── 📁 docs/                         # Documentation
│   ├── 📄 API.md
│   ├── 📄 ARCHITECTURE.md
│   ├── 📄 CONTRIBUTING.md
│   └── 📁 assets/
│       └── 📄 wireframes/
│
└── 📁 tests/                        # Test files
    ├── 📁 unit/
    ├── 📁 integration/
    └── 📁 e2e/
```

---

## 📊 File Count Summary

| Category | Files | Description |
|----------|-------|-------------|
| **Configuration** | 8 | Build, env, and project config |
| **Types** | 6 | TypeScript type definitions |
| **Constants** | 6 | App constants and enums |
| **Hooks** | 10 | Custom React hooks |
| **Context** | 5 | React context providers |
| **Utils** | 8 | Utility functions |
| **Services** | 7 | Business logic services |
| **Assets (Images)** | ~50 | Game sprites and UI images |
| **Assets (Audio)** | ~40 | Music and sound effects |
| **Assets (Fonts)** | 5 | Custom fonts |
| **Styles** | 4 | Global CSS files |
| **Data** | 3 | Static JSON data |
| **Config** | 3 | Game configuration |
| **Levels** | 100 | Level definition JSONs |
| **Game Engine** | 25 | Core game systems |
| **Components** | ~35 | Reusable UI components |
| **Screens** | ~25 | Game screens/pages |
| **Parent Dashboard** | 15 | Parent features |
| **Premium** | 15 | Premium features |
| **Shared UI** | 20 | Common UI elements |
| **Save System** | 6 | Save/load functionality |
| **Router** | 4 | Routing configuration |
| **Scripts** | 3 | Build utilities |
| **Tests** | - | Test suites |
| **TOTAL** | **~400** | Complete project files |

---

## 🎯 Key Architecture Decisions

### 1. **Component Organization**
- Components grouped by function (buttons, display, game, etc.)
- Each component has its own folder with `.tsx`, `.css`, and `index.ts`
- Barrel exports (`index.ts`) for clean imports

### 2. **Screen Organization**
- Each screen is a self-contained module
- Screens follow naming convention: `[Name]Screen.tsx`
- Screens handle their own routing and data fetching

### 3. **Game Engine Structure**
- Modular engine with separate systems
- State machine for game flow control
- Entity-Component-System (ECS) inspired architecture
- Physics and collision detection separated

### 4. **Level System**
- JSON-based level definitions for easy editing
- 100 individual level files for granular control
- Levels follow naming convention: `level-XX.json`

### 5. **Save System**
- Centralized save manager
- LocalStorage adapter for web storage
- Validation and migration for data integrity
- Backup system for recovery

### 6. **Parent Dashboard**
- Hidden behind math gate (parent verification)
- Separate component folder for isolation
- Progress tracking and time management

### 7. **Premium System**
- Dedicated folder for premium features
- Telegram integration for conversion
- Purchase and unlock flow management

---

## 📁 Sample Level JSON Structure

```json
// src/levels/level-01.json
{
  "id": 1,
  "name": "First Shots",
  "world": "forest",
  "difficulty": "easy",
  "isPremium": false,
  "mathConfig": {
    "operations": ["addition"],
    "numberRange": { "min": 1, "max": 5 },
    "problemCount": 5,
    "timeLimit": 60
  },
  "gameConfig": {
    "targetCount": 3,
    "balloonSpeed": "slow",
    "windEnabled": false,
    "obstacles": []
  },
  "rewards": {
    "stars": [1000, 2000, 3000],
    "coins": 10,
    "unlock": null
  }
}
```

---

## 📁 Sample Component Structure

```typescript
// src/components/buttons/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

---

*Generated for Numeria Archery - Math Educational Game*
*Target: Children ages 6-8 | Platform: React Web*
