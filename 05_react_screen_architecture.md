# OUTPUT 5 - REACT SCREEN ARCHITECTURE
## Numeria Archery - Complete Screen & Component Specification

---

## SCREEN OVERVIEW

| Screen | Route | Purpose | Priority |
|--------|-------|---------|----------|
| **Intro/Splash** | `/` | Brand intro, loading assets | P1 |
| **Main Menu** | `/menu` | Game entry point | P1 |
| **World Map** | `/worlds` | Select world to play | P1 |
| **World 1 View** | `/world/1` | Sunny Meadows level select | P1 |
| **Gameplay** | `/play/:levelId` | Active game screen | P1 |
| **Level Complete** | `/complete/:levelId` | Results & rewards | P1 |
| **Conversion Screen** | `/unlock` | Telegram CTA after level 10 | P1 |
| **Parent Dashboard** | `/parent` | Progress & settings | P2 |
| **Premium Page** | `/premium` | Hidden premium access | P2 |
| **Settings** | `/settings` | Audio, profile options | P2 |
| **Quinn Customize** | `/customize` | Character customization | P2 |
| **Help/How to Play** | `/help` | Tutorial & instructions | P3 |

---

## 1. INTRO/SPLASH SCREEN

### Purpose
First screen on app launch. Shows brand, loads assets, transitions to main menu.

### Layout
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         🏹 NUMERIA ARCHERY 🏹           │
│                                         │
│         [Animated Logo]                 │
│                                         │
│         "Math Meets Archery"            │
│                                         │
│                                         │
│         [Loading Bar]                   │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `Logo` - Animated game logo
- `LoadingBar` - Asset loading progress
- `Tagline` - "Math Meets Archery"

### Data Needed
- Loading progress from asset loader

### Interaction Logic
1. Auto-advance to Main Menu after 2-3 seconds OR when assets loaded
2. Skip on tap/click

---

## 2. MAIN MENU SCREEN

### Purpose
Primary navigation hub. Entry point to all game features.

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  NUMERIA ARCHERY          [⚙️]    │
├─────────────────────────────────────────┤
│                                         │
│         [Quinn Avatar - Animated]       │
│                                         │
│         "Welcome back, Archer!"         │
│                                         │
│    ┌─────────────────────────────┐      │
│    │                             │      │
│    │      🎯 PLAY NOW            │      │
│    │                             │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │    🌍 SELECT WORLD          │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │    ✨ CUSTOMIZE QUINN       │      │
│    └─────────────────────────────┘      │
│                                         │
│    ⭐ 28 Stars    🪙 47 Coins           │
│                                         │
│         [👤 Parent Zone]                │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `Header` - Back button, title, settings button
- `QuinnAvatar` - Animated character preview
- `WelcomeText` - Personalized greeting
- `PrimaryButton` - "Play Now" (large, gold)
- `SecondaryButton` - "Select World", "Customize Quinn"
- `StatsBar` - Stars and coins display
- `ParentZoneButton` - Hidden parent access

### Data Needed
- Player name
- Total stars earned
- Total coins
- Quinn customization state

### Interaction Logic
- "Play Now" → Resume last level OR go to World Map
- "Select World" → World Map screen
- "Customize Quinn" → Character customization
- Settings icon → Settings screen
- Parent Zone → PIN entry → Parent Dashboard

---

## 3. WORLD MAP SCREEN

### Purpose
Visual map showing all 10 worlds with progress indicators.

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  SELECT WORLD             [?]      │
├─────────────────────────────────────────┤
│                                         │
│    🌻 W1        🔒 W2        🔒 W3      │
│   [Sunny]    [Crystal]    [Whisper]     │
│   ⭐⭐⭐⭐⭐    Locked       Locked      │
│      │          │            │          │
│      └──────────┴────────────┘          │
│                                         │
│    🔒 W4        🔒 W5        🔒 W6      │
│   [Star]      [Fruit]     [Cookie]      │
│   Locked      Locked       Locked       │
│      │          │            │          │
│      └──────────┴────────────┘          │
│                                         │
│    🔒 W7        🔒 W8        🔒 W9      │
│   [Ocean]     [Moon]     [Rainbow]      │
│   Locked      Locked       Locked       │
│      │          │            │          │
│      └──────────┴────┬───────┘          │
│                      🔒 W10             │
│                    [Golden]             │
│                     Locked              │
│                                         │
│  Progress: 10/100 levels completed      │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `WorldNode` - Individual world card with icon, name, stars, lock status
- `PathConnector` - Visual path between worlds
- `ProgressIndicator` - Overall completion stats
- `NumiGuide` - Floating guide with hints

### Data Needed
- World data (name, theme, levels)
- Unlock status per world
- Stars earned per world
- Current progress

### Interaction Logic
- Tap unlocked world → World Level Select
- Tap locked world → Show unlock requirements
- Numi appears with contextual hints

---

## 4. WORLD 1 VIEW (SUNNY MEADOWS)

### Purpose
Level selection grid for World 1 (free levels 1-10).

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  🌻 SUNNY MEADOWS         [?]      │
├─────────────────────────────────────────┤
│                                         │
│    Levels 1-10    ⭐ 25/30 Stars         │
│                                         │
│    ┌────┬────┬────┬────┬────┐          │
│    │ 1  │ 2  │ 3  │ 4  │ 5  │          │
│    │⭐⭐⭐│⭐⭐ │⭐⭐⭐│⭐  │⭐⭐ │          │
│    ├────┼────┼────┼────┼────┤          │
│    │ 6  │ 7  │ 8  │ 9  │ 10 │          │
│    │⭐⭐ │⭐⭐⭐│⭐⭐ │ 🔒 │ 🔒 │          │
│    └────┴────┴────┴────┴────┘          │
│                                         │
│    [Path connecting levels]             │
│                                         │
│    Level 10 unlocks next world!         │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `LevelGrid` - 2x5 grid of level nodes
- `LevelNode` - Individual level with number, stars, lock status
- `WorldHeader` - World name, icon, progress
- `UnlockMessage` - Next unlock hint

### Data Needed
- Level data for world 1 (1-10)
- Completion status per level
- Stars earned per level
- Unlock requirements

### Interaction Logic
- Tap unlocked level → Gameplay screen
- Tap locked level → Show "Complete previous level" message
- Long press level → Preview/info

---

## 5. GAMEPLAY SCREEN

### Purpose
Core game experience. Display problem, targets, handle shooting.

### Layout
```
┌─────────────────────────────────────────┐
│  [⏸️]  Level 5    [======]    ⭐⭐⭐    │
├─────────────────────────────────────────────────────┤
│                                                     │
│              ┌─────────────────┐                    │
│              │   5 + 3 = ?     │  ← Problem         │
│              └─────────────────┘                    │
│                                                     │
│                                                     │
│         [8]        [6]        [9]                   │
│       (Target)   (Target)   (Target)                │
│                                                     │
│                                                     │
│              [Quinn with Bow]                       │
│                   🏹                                │
│                                                     │
│         Problem 2 of 5                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Components
- `GameHeader` - Pause button, level number, progress bar, stars
- `ProblemDisplay` - Large math problem (e.g., "5 + 3 = ?")
- `TargetArea` - Container for targets
- `Target` - Individual answer target with number
- `Bow` - Player bow (bottom center)
- `Arrow` - Projectile animation
- `FeedbackOverlay` - Correct/wrong feedback
- `ProblemCounter` - "Problem X of Y"

### Data Needed
- Current level data
- Current problem
- Answer options (correct + distractors)
- Player score/stars
- Problems remaining

### Interaction Logic
1. Problem displays
2. Targets spawn with answer options
3. Player taps/clicks target to "shoot"
4. Arrow animation flies to target
5. Hit detection triggers
6. Feedback shows (green for correct, orange for wrong)
7. Next problem OR level complete

### Game States
- `PROBLEM_INTRO` - New problem appearing
- `WAITING_INPUT` - Ready for player action
- `ARROW_FLYING` - Arrow in motion
- `FEEDBACK` - Showing result
- `LEVEL_COMPLETE` - All problems done

---

## 6. LEVEL COMPLETE SCREEN

### Purpose
Celebrate completion, show rewards, progress to next level.

### Layout
```
┌─────────────────────────────────────────┐
│                                         │
│         🎉 LEVEL COMPLETE! 🎉           │
│                                         │
│         [Confetti Animation]            │
│                                         │
│              ⭐ → ⭐⭐ → ⭐⭐⭐          │
│              (Stars fill sequentially)  │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      YOUR SCORE             │      │
│    │                             │      │
│    │      450 points             │      │
│    │      +50 speed bonus        │      │
│    │                             │      │
│    │      🪙 15 coins earned     │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      NEXT LEVEL →           │      │
│    └─────────────────────────────┘      │
│                                         │
│    [Replay]  [Level Select]             │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `CelebrationHeader` - "Level Complete!" with confetti
- `StarAnimation` - Stars fill one by one
- `ScorePanel` - Points, bonus, coins earned
- `PrimaryButton` - "Next Level"
- `SecondaryButtons` - "Replay", "Level Select"
- `QuinnCelebrate` - Character celebration animation

### Data Needed
- Level ID just completed
- Stars earned (1-3)
- Score
- Coins earned
- Next level unlocked status

### Interaction Logic
- Stars animate in sequence (500ms each)
- Score counts up
- "Next Level" enabled if unlocked
- Auto-save progress

---

## 7. CONVERSION SCREEN (After Level 10)

### Purpose
Convert free players to premium after completing all free levels.

### Layout - Child View
```
┌─────────────────────────────────────────┐
│                                         │
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
│    ║                                   ║│
│    ║   Unlock 90 MORE levels!         ║│
│    ║   🏔️ 9 New Magical Worlds        ║│
│    ║   🎨 New bows & costumes         ║│
│    ║   🏆 Special achievements        ║│
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

### Layout - Parent Modal
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

### Components
- `CelebrationHeader` - Achievement celebration
- `StatsPanel` - Player progress summary
- `ValueProposition` - Premium benefits list
- `TelegramCTA` - Contact button for Telegram
- `QRCode` - Optional QR for Telegram
- `SecondaryAction` - "Maybe Later" option

### Data Needed
- Player stats (levels, stars, accuracy)
- Telegram handle (@DenisBrandMenedjer)
- Premium benefits list

### Interaction Logic
- "Ask Parent" → Show parent modal
- Telegram button → Open Telegram link
- "Maybe Later" → Return to menu with reminder badge

---

## 8. PARENT DASHBOARD

### Purpose
Parent-facing interface for monitoring progress and managing settings.

### Layout - PIN Entry
```
┌─────────────────────────────────────────┐
│  [←]  PARENT ZONE                       │
├─────────────────────────────────────────┤
│                                         │
│         🔒 PARENT ACCESS                │
│                                         │
│    Enter PIN to continue:               │
│                                         │
│         [•] [•] [•] [•]                 │
│                                         │
│    ┌────┬────┬────┐                     │
│    │ 1  │ 2  │ 3  │                     │
│    ├────┼────┼────┤                     │
│    │ 4  │ 5  │ 6  │                     │
│    ├────┼────┼────┤                     │
│    │ 7  │ 8  │ 9  │                     │
│    ├────┼────┼────┤                     │
│    │ ⌫  │ 0  │ ✓  │                     │
│    └────┴────┴────┘                     │
│                                         │
│    Default PIN: 1234                    │
│                                         │
└─────────────────────────────────────────┘
```

### Layout - Dashboard Main
```
┌─────────────────────────────────────────┐
│  [←]  PARENT DASHBOARD         [⚙️]     │
├─────────────────────────────────────────┤
│                                         │
│    ┌─────────────────────────────┐      │
│    │      PROGRESS SUMMARY       │      │
│    ├─────────────────────────────┤      │
│    │  Levels: 8/10 completed     │      │
│    │  Stars: 25/30 earned        │      │
│    │  Accuracy: 87%              │      │
│    │  Time Played: 2h 15m        │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      SKILL BREAKDOWN        │      │
│    ├─────────────────────────────┤      │
│    │  Addition:     ████████░░ 85% │    │
│    │  Subtraction:  ██████░░░░ 72% │    │
│    │  Recognition:  █████████░ 95% │    │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      SETTINGS               │      │
│    ├─────────────────────────────┤      │
│    │  ⏱️ Daily Time Limit: 30min │      │
│    │  🔊 Sound: ON               │      │
│    │  🎵 Music: ON               │      │
│    └─────────────────────────────┘      │
│                                         │
│    [📊 Export Progress]                 │
│    [🔄 Reset All Progress]              │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `PinPad` - Numeric keypad for PIN entry
- `ProgressCard` - Levels, stars, accuracy summary
- `SkillChart` - Bar chart of math skills
- `TimeDisplay` - Total play time
- `SettingsPanel` - Time limit, audio toggles
- `ActionButtons` - Export, reset progress

### Data Needed
- All player progress data
- Session statistics
- Skill breakdown by operation type
- Settings

### Interaction Logic
- PIN entry → Dashboard (default: 1234)
- Time limit slider → Save setting
- Audio toggles → Immediate effect + save
- Export → Generate shareable summary
- Reset → Confirmation dialog → Clear progress

---

## 9. PREMIUM PAGE

### Purpose
Hidden page accessed via Telegram link to unlock premium content.

### Layout
```
┌─────────────────────────────────────────┐
│                                         │
│         🎉 WELCOME TO PREMIUM!          │
│                                         │
│    Numeria Archery - Full Version       │
│                                         │
│    ┌─────────────────────────────┐      │
│    │  ✅ All 90 levels unlocked  │      │
│    │  ✅ All 10 worlds available │      │
│    │  ✅ No ads, no distractions │      │
│    │  ✅ Lifetime access         │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │                             │      │
│    │   [ 🎮 OPEN GAME ]          │      │
│    │                             │      │
│    └─────────────────────────────┘      │
│                                         │
│    Thank you for supporting             │
│    Numeria Archery!                     │
│                                         │
│    Questions? @DenisBrandMenedjer       │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `PremiumHeader` - Welcome message
- `BenefitsList` - Unlocked features
- `OpenGameButton` - Launch game with premium
- `SupportInfo` - Contact info

### Data Needed
- Token validation status
- Premium unlock flag

### Interaction Logic
- Validate token from URL
- Set premium flag in localStorage
- "Open Game" → Launch game with all levels unlocked

---

## 10. SETTINGS SCREEN

### Purpose
Manage audio, profile, and game preferences.

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  SETTINGS                          │
├─────────────────────────────────────────┤
│                                         │
│    ┌─────────────────────────────┐      │
│    │      🔊 AUDIO               │      │
│    ├─────────────────────────────┤      │
│    │  Music:    [ON]  ○──●───○   │      │
│    │  Sound FX: [ON]  ○──●───○   │      │
│    │  Voice:    [ON]  ○──●───○   │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      👤 PROFILE             │      │
│    ├─────────────────────────────┤      │
│    │  Name: [Archer        ]     │      │
│    │  [Change Avatar]            │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      🎮 GAMEPLAY            │      │
│    ├─────────────────────────────┤      │
│    │  Difficulty: [Normal ▼]     │      │
│    │  Show Hints: [✓]            │      │
│    │  Timer:      [✓]            │      │
│    └─────────────────────────────┘      │
│                                         │
│    [💾 SAVE SETTINGS]                   │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `AudioSettings` - Music, SFX, voice toggles + sliders
- `ProfileSettings` - Name input, avatar selector
- `GameplaySettings` - Difficulty, hints, timer toggles
- `SaveButton` - Persist settings

### Data Needed
- Current settings values
- Available avatars

### Interaction Logic
- Toggles → Immediate preview + save
- Sliders → Real-time volume adjustment
- Name input → Save on blur/enter
- Avatar click → Select + preview

---

## 11. QUINN CUSTOMIZATION SCREEN

### Purpose
Allow players to customize their archer character.

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  CUSTOMIZE QUINN          [💾]     │
├─────────────────────────────────────────┤
│                                         │
│         ┌─────────────┐                 │
│         │             │                 │
│         │   [QUINN    │                 │
│         │   PREVIEW]  │                 │
│         │             │                 │
│         │  [Rotate]   │                 │
│         └─────────────┘                 │
│                                         │
│  [Hair] [Skin] [Eyes] [Outfit] [Acc]    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Opt] [Opt] [Opt] [Opt]       │    │
│  │  [Opt] [Opt] [Opt] [Opt]       │    │
│  │  [Opt] [Opt] [Opt] [Opt]       │    │
│  └─────────────────────────────────┘    │
│                                         │
│    [Reset to Default]                   │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `CharacterPreview` - Large Quinn preview with rotation
- `CategoryTabs` - Hair, Skin, Eyes, Outfit, Accessories
- `OptionGrid` - Selectable customization options
- `ResetButton` - Return to defaults

### Data Needed
- Current customization state
- Available options per category
- Unlocked items

### Interaction Logic
- Tab click → Switch category
- Option click → Apply to preview + save
- Rotate button → Spin character 360°
- Reset → Confirmation → Default values

---

## 12. HELP/HOW TO PLAY SCREEN

### Purpose
Teach new players how to play the game.

### Layout
```
┌─────────────────────────────────────────┐
│  [←]  HOW TO PLAY                       │
├─────────────────────────────────────────┤
│                                         │
│    ┌─────────────────────────────┐      │
│    │  1. READ THE PROBLEM        │      │
│    │     [5 + 3 = ?]             │      │
│    │     "Look at the math problem"    │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │  2. FIND THE ANSWER         │      │
│    │     [8] [6] [9]             │      │
│    │     "Tap the correct number"      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │  3. SHOOT THE TARGET        │      │
│    │     [Arrow hitting 8]       │      │
│    │     "Quinn shoots automatically!" │      │
│    └─────────────────────────────┘      │
│                                         │
│    ┌─────────────────────────────┐      │
│    │  4. EARN STARS              │      │
│    │     ⭐⭐⭐                   │      │
│    │     "Get 3 stars for perfect!"    │      │
│    └─────────────────────────────┘      │
│                                         │
│    [🎮 START PLAYING]                   │
│                                         │
└─────────────────────────────────────────┘
```

### Components
- `TutorialStep` - Visual + text instruction cards
- `NumiGuide` - Character providing tips
- `StartButton` - Begin playing

### Data Needed
- Tutorial content

### Interaction Logic
- Scroll/swipe through steps
- "Start Playing" → Go to Level 1

---

## COMPONENT HIERARCHY

```
App.tsx
├── Routes
│   ├── / → SplashScreen
│   ├── /menu → MainMenuScreen
│   ├── /worlds → WorldMapScreen
│   ├── /world/:id → WorldViewScreen
│   ├── /play/:levelId → GameplayScreen
│   ├── /complete/:levelId → LevelCompleteScreen
│   ├── /unlock → ConversionScreen
│   ├── /parent → ParentDashboardScreen
│   ├── /premium → PremiumPageScreen
│   ├── /settings → SettingsScreen
│   ├── /customize → CustomizeScreen
│   └── /help → HelpScreen
│
├── Shared Components
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── StarDisplay.tsx
│   │   └── IconButton.tsx
│   ├── game/
│   │   ├── GameBoard.tsx
│   │   ├── Target.tsx
│   │   ├── Bow.tsx
│   │   ├── Arrow.tsx
│   │   ├── MathProblem.tsx
│   │   └── AnswerOptions.tsx
│   ├── effects/
│   │   ├── Confetti.tsx
│   │   ├── StarBurst.tsx
│   │   └── FloatingText.tsx
│   └── characters/
│       ├── Quinn.tsx
│       └── Numi.tsx
│
└── Context/State
    ├── GameContext
    ├── AudioContext
    └── ProgressContext
```

---

## ROUTING TABLE

| Route | Component | Access | Params |
|-------|-----------|--------|--------|
| `/` | `SplashScreen` | Public | - |
| `/menu` | `MainMenuScreen` | Public | - |
| `/worlds` | `WorldMapScreen` | Public | - |
| `/world/:id` | `WorldViewScreen` | Public | `id: number` |
| `/play/:levelId` | `GameplayScreen` | Public | `levelId: number` |
| `/complete/:levelId` | `LevelCompleteScreen` | Public | `levelId: number` |
| `/unlock` | `ConversionScreen` | Public (after L10) | - |
| `/parent` | `ParentDashboardScreen` | PIN Protected | - |
| `/premium` | `PremiumPageScreen` | Token Required | `?token=xxx` |
| `/settings` | `SettingsScreen` | Public | - |
| `/customize` | `CustomizeScreen` | Public | - |
| `/help` | `HelpScreen` | Public | - |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Compact layout, larger touch targets |
| Tablet | 640-1024px | Balanced layout |
| Desktop | > 1024px | Full layout, more spacing |

---

*Document Version: 1.0*
*For Numeria Archery Educational Game*
