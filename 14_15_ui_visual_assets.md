# OUTPUT 14 & 15 - UI/VISUAL SYSTEM & ASSET PRODUCTION PACKAGE
## Numeria Archery - Complete Visual Design & Asset Documentation

**Game Title:** Numeria Archery  
**Target Age:** 6-8 years old  
**Theme:** Magical Academy World  
**Feel:** Magical, premium, child-friendly, visually clear  
**Art Style:** Whimsical Storybook Vector  

---

# OUTPUT 14 - UI/VISUAL SYSTEM

## 1. COLOR PALETTE SYSTEM

### 1.1 Primary Brand Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Academy Gold** | `#F4B942` | 244, 185, 66 | Primary brand, stars, buttons, highlights |
| **Sky Blue** | `#87CEEB` | 135, 206, 235 | Backgrounds, secondary actions, calm areas |
| **Cloud White** | `#FFFEF7` | 255, 254, 247 | Cards, containers, text on dark backgrounds |

### 1.2 Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Meadow Green** | `#7CB342` | 124, 179, 66 | Success states, correct answers, growth |
| **Sunset Coral** | `#FF8A65` | 255, 138, 101 | Warm accents, encouragement, CTAs |
| **Lavender Mist** | `#B39DDB` | 179, 157, 219 | Magic effects, special moments, premium |

### 1.3 Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Dark Text** | `#1A1A1A` | 26, 26, 26 | Primary text, headings |
| **Gray Dark** | `#424242` | 66, 66, 66 | Secondary text |
| **Gray** | `#757575` | 117, 117, 117 | Muted text, placeholders |
| **Gray Light** | `#BDBDBD` | 189, 189, 189 | Disabled states, borders |
| **Light BG** | `#F5F5F5` | 245, 245, 245 | Page backgrounds |

### 1.4 Feedback Colors

| State | Color | Hex Code | Animation |
|-------|-------|----------|-----------|
| **Correct** | Success Green | `#4CAF50` | Glow pulse + scale up |
| **Incorrect** | Gentle Orange | `#FF9800` | Gentle shake (3px) |
| **Neutral** | Blue Gray | `#90A4AE` | None |
| **Highlighted** | Yellow Glow | `#FFD54F` | Subtle pulse loop |
| **Premium** | Royal Purple | `#7E57C2` | Sparkle shimmer |

### 1.5 World Color Schemes

| World | Primary | Secondary | Accent | Background |
|-------|---------|-----------|--------|------------|
| 1. Sunny Meadows | `#FFD93D` | `#7CB342` | `#F4B942` | `#FFF8E1` |
| 2. Crystal Shores | `#00CED1` | `#98FF98` | `#E0FFFF` | `#E0F7FA` |
| 3. Whisper Woods | `#228B22` | `#8A2BE2` | `#FFB6C1` | `#F1F8E9` |
| 4. Starlight Peaks | `#191970` | `#C0C0C0` | `#FFD700` | `#EDE7F6` |
| 5. Fruit Forest | `#FF4444` | `#FFE135` | `#8EE53F` | `#FFF3E0` |
| 6. Cookie Canyon | `#D2691E` | `#7B3F00` | `#FF69B4` | `#F5F5DC` |
| 7. Ocean Depths | `#000080` | `#00FFFF` | `#FFD700` | `#E0F2F1` |
| 8. Moon Garden | `#C0C0C0` | `#4169E1` | `#FFFACD` | `#F5F5F5` |
| 9. Rainbow Heights | Full Spectrum | `#87CEEB` | Prism | `#E8F5E9` |
| 10. Golden Mastery | `#FFD700` | `#FFFFFF` | `#800080` | `#FFF8E1` |

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Font Families

| Purpose | Font | Fallback | Characteristics |
|---------|------|----------|-----------------|
| **Headings** | Fredoka One | Arial Rounded, sans-serif | Rounded, friendly, playful |
| **Body Text** | Nunito | Open Sans, sans-serif | Clean, readable, modern |
| **Numbers/Scores** | Fredoka One | Arial Rounded, sans-serif | Bold, highly legible |
| **UI Labels** | Nunito SemiBold | Open Sans, sans-serif | Clear, professional |

### 2.2 Type Scale

| Element | Font | Mobile Size | Desktop Size | Line Height | Weight |
|---------|------|-------------|--------------|-------------|--------|
| **Game Title** | Fredoka One | 36px | 48px | 1.2 | 400 |
| **Screen Title** | Nunito | 28px | 36px | 1.3 | 700 |
| **Section Header** | Nunito | 22px | 26px | 1.4 | 600 |
| **Problem Display** | Nunito | 48px | 64px | 1.0 | 700 |
| **Target Numbers** | Fredoka One | 48px | 64px | 1.0 | 400 |
| **Button Text** | Nunito | 18px | 20px | 1.0 | 700 |
| **Body Text** | Nunito | 16px | 18px | 1.6 | 400 |
| **Small Labels** | Nunito | 12px | 14px | 1.4 | 600 |

### 2.3 Typography Rules for Ages 6-8

| Rule | Implementation |
|------|----------------|
| Minimum Size | Never below 14px for any text |
| Contrast Ratio | 4.5:1 minimum (WCAG AA) |
| Letter Spacing | Generous spacing for body text (+0.5px) |
| Case | Title case for headings, sentence case for body |
| ALL CAPS | Avoid — harder for early readers |
| Line Length | Max 40 characters per line for children |
| Numbers | Tabular figures (equal width) for math problems |

---

## 3. BUTTON SYSTEM

### 3.1 Button Types

| Type | Description | Size (Mobile) | Size (Desktop) | Use Case |
|------|-------------|---------------|----------------|----------|
| **Primary** | Main CTA, gold gradient | 280x64px | 320x72px | Play, Continue, Shoot |
| **Secondary** | Alternative, blue gradient | 240x56px | 280x64px | Back, Settings, Help |
| **Tertiary** | Subtle, outline style | 160x48px | 200x56px | Skip, Cancel |
| **Icon Button** | Circular, icon only | 48x48px | 64x64px | Close, Sound toggle |
| **FAB** | Floating action | 72x72px | 80x80px | Quick actions |
| **Back** | Navigation | 48x48px | 48x48px | Return navigation |

### 3.2 Button States

#### Primary Button States

```
DEFAULT STATE:
- Background: linear-gradient(180deg, #F4B942 0%, #F59E0B 100%)
- Text: #1A1A1A (dark for contrast)
- Border-radius: 16px
- Shadow: 0 4px 12px rgba(244, 185, 66, 0.4)
- Font: Nunito Bold, 18px

HOVER STATE:
- Transform: translateY(-2px)
- Filter: brightness(1.1)
- Shadow: 0 6px 16px rgba(244, 185, 66, 0.5)
- Transition: all 0.2s ease-out

ACTIVE/PRESSED STATE:
- Transform: translateY(0) scale(0.98)
- Filter: brightness(0.95)
- Shadow: 0 2px 8px rgba(244, 185, 66, 0.3)
- Transition: all 0.1s ease-out

DISABLED STATE:
- Opacity: 0.5
- Filter: grayscale(0.5)
- Cursor: not-allowed
- Shadow: none

LOADING STATE:
- Spinner overlay (24px)
- Text: "Loading..." or spinner only
- Disabled interactions
```

#### Secondary Button States

```
DEFAULT STATE:
- Background: linear-gradient(180deg, #87CEEB 0%, #5DADE2 100%)
- Text: #FFFFFF
- Border-radius: 16px
- Shadow: 0 4px 12px rgba(135, 206, 235, 0.4)

HOVER/ACTIVE/DISABLED:
- Same transitions as Primary
- Adjusted shadow colors
```

### 3.3 Button Layout Guidelines

```
┌─────────────────────────────────────┐
│         BUTTON SPACING              │
├─────────────────────────────────────┤
│                                     │
│   [Primary Button]                  │
│                                     │
│   [Secondary Button]                │
│                                     │
│   [Tertiary Button]                 │
│                                     │
└─────────────────────────────────────┘

Spacing Rules:
- Between buttons: 16px minimum
- From screen edge: 24px minimum
- Touch target: 48x48px minimum (even if visual is smaller)
```

---

## 4. CARD SYSTEM

### 4.1 Card Types & Specifications

#### Level Card

```
Level Card Structure:
┌─────────────────────────────┐
│  ┌─────┐                    │
│  │  12 │  Level Number      │
│  └─────┘                    │
│                             │
│  [Preview Image]            │
│                             │
│  ⭐⭐⭐                     │  Star Rating
│                             │
│  [Lock Icon] or [Play Btn]  │
└─────────────────────────────┘

Specifications:
- Size: 200x240px (mobile), 240x280px (desktop)
- Border-radius: 20px
- Background: linear-gradient(180deg, #FFFEF7 0%, #FFF8E1 100%)
- Border: 3px solid (varies by state)
- Shadow: 0 8px 24px rgba(0,0,0,0.1)
```

#### Level Card States

| State | Border Color | Background | Icon |
|-------|--------------|------------|------|
| **Locked** | `#BDBDBD` | `#F5F5F5` | Lock icon |
| **Unlocked** | `#F4B942` | `#FFFEF7` | Play button |
| **Completed** | `#7CB342` | `#F1F8E9` | Checkmark |
| **Perfect** | `#FFD700` | `#FFF8E1` | Gold star + sparkle |

#### World Card

```
World Card Structure:
┌─────────────────────────────────┐
│                                 │
│     [World Illustration]        │
│         (full bleed)            │
│                                 │
├─────────────────────────────────┤
│  🌟 SUNNY MEADOWS               │
│  Levels 1-10                    │
│                                 │
│  ⭐⭐⭐⭐⭐ (25/30)              │
│  [Progress Bar]                 │
│                                 │
│  [Enter World]                  │
└─────────────────────────────────┘

Specifications:
- Size: 320x200px (mobile), 400x260px (desktop)
- Border-radius: 24px
- Background: Themed gradient per world
- Shadow: 0 12px 32px rgba(0,0,0,0.15)
```

#### Achievement Card

```
Achievement Card Structure:
┌─────────────────────────────────┐
│  🏆  [Icon]    Achievement Name │
│                Description      │
│                [Progress]       │
└─────────────────────────────────┘

Specifications:
- Size: 280x120px
- Border-radius: 16px
- Background: #FFFEF7
- Border: 2px solid #F4B942 (if unlocked)
```

### 4.2 Card Container Specifications

```
Container Specs:
- Background: #FFFEF7 or #FFFFFF
- Border Radius: 20px (friendly, approachable)
- Shadow: 0 4px 20px rgba(0,0,0,0.08)
- Padding: 24px minimum
- Border: Optional 2px accent color

Card Animation:
- Enter: slide up 20px + fade in, 400ms, ease-out
- Hover: translateY(-4px) + shadow increase, 200ms
- Select: scale(1.02) + border highlight, 150ms
```

---

## 5. WORLD NODE SYSTEM

### 5.1 World Map Node Design

```
World Node Visual Structure:
┌─────────────────────────┐
│    [World Icon/Mascot]  │  ← 64x64px illustration
│         🌟              │
│                         │
│    WORLD NAME           │  ← Fredoka One, 18px
│    Levels XX-XX         │  ← Nunito, 14px
│                         │
│    ⭐⭐⭐⭐⭐           │  ← Stars earned
│    [Lock/Unlock Badge]  │  ← Status indicator
└─────────────────────────┘

Node States:
- Size: 120x140px
- Border-radius: 16px
- Connected by path line (4px, dashed)
```

### 5.2 World Node States

| State | Visual Treatment | Interaction |
|-------|------------------|-------------|
| **Locked** | Grayscale, lock overlay, fog effect | Tap shows requirements |
| **Unlocked** | Full color, glow effect, animated | Tap to enter |
| **Current** | Pulsing border, Quinn avatar, highlighted | Active selection |
| **Completed** | Gold border, checkmark, star count | Replay available |

### 5.3 Path Design

```
Path Specifications:
- Width: 8px
- Style: Dashed line (12px dash, 8px gap)
- Color: #F4B942 (gold)
- Glow: 0 0 8px rgba(244, 185, 66, 0.5)
- Animation: Subtle pulse on current segment
```

---

## 6. LEVEL NODE SYSTEM

### 6.1 Level Node Design

```
Level Node Structure:
┌─────────────┐
│      1      │  ← Level number
│             │
│   [Icon]    │  ← World-themed icon
│             │
│    ⭐⭐⭐    │  ← Star rating (earned)
└─────────────┘

Specifications:
- Size: 64x80px (mobile), 80x100px (desktop)
- Border-radius: 12px
- Background: Varies by state
```

### 6.2 Level Node States

| State | Background | Border | Number Color |
|-------|------------|--------|--------------|
| **Locked** | `#E0E0E0` | `#BDBDBD` | `#9E9E9E` |
| **Available** | `#FFFEF7` | `#F4B942` | `#1A1A1A` |
| **Completed** | `#E8F5E9` | `#7CB342` | `#1A1A1A` |
| **Perfect** | `#FFF8E1` | `#FFD700` | `#1A1A1A` |

### 6.3 Level Grid Layout

```
Level Grid (10 levels per world):
┌────┬────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │ 5  │
├────┼────┼────┼────┼────┤
│ 6  │ 7  │ 8  │ 9  │ 10 │
└────┴────┴────┴────┴────┘

Spacing:
- Gap: 16px between nodes
- Path: Curved line connecting sequential levels
```

---

## 7. GAME HUD SYSTEM

### 7.1 HUD Layout

```
Gameplay HUD Layout:
┌─────────────────────────────────────────────────────┐
│  [←]  Level 5    [==========]    ⭐⭐⭐   [⚙️]      │
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│              5 + 3 = ?                              │  ← Problem Display
│                                                     │
│                                                     │
│                                                     │
│         [8]      [6]      [9]                       │  ← Target Options
│                                                     │
│                                                     │
│                                                     │
│  [Quinn]                                            │  ← Character
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 7.2 Problem Display

```
Problem Display Specifications:
- Font: Fredoka One, 64px (desktop), 48px (mobile)
- Color: #1A1A1A
- Background: Semi-transparent white circle
  - Background: rgba(255, 254, 247, 0.95)
  - Border-radius: 50%
  - Size: 200x200px
- Shadow: 0 4px 16px rgba(0,0,0,0.1)
- Position: Top center

Animation:
- New problem: Scale from 0.8 to 1.0, 300ms, ease-out
- Correct answer: Glow green, pulse
```

### 7.3 Progress Indicators

#### Star Rating Display

```
Star Rating:
- Size: 32px each star
- Spacing: 4px between stars
- Empty: #E0E0E0 outline
- Filled: #FFD700 filled with sparkle
- Animation: Sequential fill on earn (200ms each)
```

#### Level Progress Bar

```
Progress Bar:
- Width: 200px
- Height: 12px
- Border-radius: 6px
- Background: #E0E0E0
- Fill: linear-gradient(90deg, #F4B942, #FFD700)
- Animation: Smooth fill, 800ms ease-out
```

### 7.4 Target Display

```
Target Specifications:
- Size: 120x120px (mobile), 160x160px (desktop)
- Border-radius: 50%
- Background: World-themed design
- Number: Fredoka One, 48px, centered
- Shadow: 0 4px 12px rgba(0,0,0,0.15)

States:
- Idle: Subtle pulse animation (2s loop)
- Highlight: Glow effect, scale 1.05
- Hit Correct: Green flash + star burst
- Hit Wrong: Orange flash + gentle shake
```

---

## 8. FEEDBACK SYSTEM

### 8.1 Correct Answer Feedback

```
Visual Feedback (Correct):
1. Target glows green (#4CAF50)
2. Star burst particles emit
3. Number turns green with checkmark
4. Score increments with animation
5. Progress bar advances
6. Quinn celebrates (small cheer)

Animation Sequence:
- 0ms: Target glow begins
- 100ms: Star burst starts
- 300ms: Score count up
- 500ms: Progress bar fill
- 800ms: Next problem appears
```

### 8.2 Incorrect Answer Feedback

```
Visual Feedback (Incorrect):
1. Target shakes gently (3px, 3 cycles)
2. Turns orange (#FF9800) briefly
3. "Try again!" message appears
4. Quinn gives encouraging gesture
5. Target returns to normal state

Animation Sequence:
- 0ms: Shake begins (300ms total)
- 150ms: Orange flash peak
- 300ms: Encouragement message
- 1000ms: Message fades
```

### 8.3 Level Complete Feedback

```
Level Complete Sequence:
1. Freeze gameplay (300ms)
2. Success sound begins
3. Stars appear sequentially with sparkle
4. Confetti burst (for 3 stars)
5. Quinn victory dance
6. Progress bar fills completely
7. "Continue" button bounces in
8. Celebration music loop

Duration: 3-4 seconds total
```

---

## 9. PREMIUM VS FREE VISUAL DIFFERENTIATION

### 9.1 Free World (Sunny Meadows)

```
Visual Treatment:
- "FREE" badge (top-left corner)
- Full color, no restrictions
- All features available
- No purchase prompts

Badge:
- Text: "FREE"
- Background: #7CB342 (green)
- Text color: #FFFFFF
- Border-radius: 8px
- Size: 60x28px
```

### 9.2 Premium Worlds (2-10)

```
Locked State:
- Grayscale filter (80%)
- Lock icon overlay
- "Unlock" label
- Star requirement displayed
- Preview button (disabled)

Unlock Animation:
1. Lock shatters with particle effect
2. Grayscale fades to full color
3. World name appears with fanfare
4. "New World Unlocked!" banner
5. Numi celebration animation
```

### 9.3 Purchase Screen Design

```
Purchase Screen:
┌─────────────────────────────────────┐
│     🔒 PREMIUM WORLDS 🔒           │
│                                     │
│  [World Preview Carousel]           │
│                                     │
│  Unlock 9 Magical Worlds!           │
│  • 90 More Levels                   │
│  • New Math Challenges              │
│  • Ad-Free Experience               │
│                                     │
│  [Unlock All Worlds - $X.99]        │
│  [Restore Purchases]                │
│                                     │
│  [Ask a Grown-Up 👤]                │
│                                     │
│  ✓ One-time purchase                │
│  ✓ No subscriptions                 │
│  ✓ All future updates included      │
└─────────────────────────────────────┘

Design Notes:
- Respectful, parent-friendly
- No pressure tactics
- Clear value proposition
- "Ask a Grown-Up" button prominent
```

---

## 10. ANIMATION TIMING STANDARDS

### 10.1 Standard Easing Curves

| Name | CSS Value | Use Case |
|------|-----------|----------|
| **Ease Out** | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering screen |
| **Ease In** | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving screen |
| **Spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Celebrations, bounces |
| **Smooth** | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |

### 10.2 Animation Duration Standards

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Button hover | 200ms | Ease Out |
| Button press | 100ms | Ease In |
| Screen transition | 300-400ms | Smooth |
| Card enter | 400ms | Ease Out |
| Star appear | 500ms | Spring |
| Target hit | 300-500ms | Ease Out |
| Confetti burst | 2000ms | Physics-based |
| Progress fill | 800ms | Ease Out |
| Character reaction | 400ms | Spring |

### 10.3 Animation Patterns Reference

```
BUTTON INTERACTIONS:
Hover:   scale(1.05) + translateY(-2px)  [200ms, ease-out]
Press:   scale(0.98)                      [100ms, ease-in]
Release: scale(1.0)                       [150ms, spring]

SCREEN TRANSITIONS:
Enter:   opacity(0→1) + translateY(20px→0)  [300ms, ease-out]
Exit:    opacity(1→0) + translateY(0→-20px) [200ms, ease-in]

FEEDBACK ANIMATIONS:
Correct: glow + scale(1.1) + star burst    [500ms, spring]
Wrong:   shake(±3px, 3 cycles)             [300ms, ease-in-out]
Star:    scale(0→1.2→1) + rotate(0→360°)   [600ms, spring]
```

### 10.4 Performance Guidelines

```
Optimization Rules:
- Use transform and opacity only for animations
- Apply will-change: transform, opacity sparingly
- Limit simultaneous animations to 5 max
- Use CSS animations for simple effects
- Use Lottie for complex character animations
- Support prefers-reduced-motion media query

60fps Target:
- All animations should maintain 60fps
- Test on mid-range mobile devices
- Degrade gracefully on low-end devices
```

---

## 11. ICON SYSTEM

### 11.1 Icon Style

```
Icon Specifications:
- Style: Line icons with soft fills
- Stroke: 2px
- Caps: Rounded
- Joins: Rounded
- Viewbox: 24x24px (base)
- Sizes: 24px, 48px, 96px
```

### 11.2 Core Icon Set (42+ icons)

#### Navigation Icons (7)
| Icon | Name | Usage |
|------|------|-------|
| 🏠 | home | Main menu |
| ← | back | Return navigation |
| ⚙️ | settings | Options menu |
| 👤 | profile | User account |
| ❓ | help | Tutorial access |
| ✕ | close | Dismiss modal |
| ☰ | menu | Hamburger menu |

#### Gameplay Icons (15)
| Icon | Name | Usage |
|------|------|-------|
| 🏹 | bow | Weapon indicator |
| ➤ | arrow | Ammo indicator |
| ◎ | target | Objective marker |
| ⭐ | star | Achievement/rating |
| 🪙 | coin | Currency |
| 💎 | gem | Premium currency |
| ❤️ | heart | Lives/health |
| ⚡ | lightning | Power-up |
| ⏱️ | clock | Timer |
| ✓ | check | Correct answer |
| ✕ | x-mark | Wrong answer |
| ⏸️ | pause | Game pause |
| ▶️ | play | Resume/start |
| 🔄 | restart | Replay level |
| ⏭️ | skip | Skip level |

#### Progress Icons (7)
| Icon | Name | Usage |
|------|------|-------|
| 🏆 | trophy | Achievement |
| 🥇 | medal | Reward |
| 👑 | crown | Mastery |
| 🚩 | flag | Milestone |
| 🔖 | bookmark | Saved |
| 🔒 | lock | Locked content |
| 🔓 | unlock | Unlocked content |

#### Math Icons (6)
| Icon | Name | Usage |
|------|------|-------|
| + | plus | Addition |
| − | minus | Subtraction |
| × | multiply | Multiplication |
| ÷ | divide | Division |
| = | equals | Equation |
| 0-9 | numbers | Digits |

#### Audio Icons (4)
| Icon | Name | Usage |
|------|------|-------|
| 🔊 | sound-on | Audio enabled |
| 🔇 | sound-off | Audio muted |
| 🎵 | music-on | Music enabled |
| 🎵 | music-off | Music muted |

#### World Icons (10)
| Icon | World | Symbol |
|------|-------|--------|
| 🌻 | Sunny Meadows | Sunflower |
| 🐚 | Crystal Shores | Seashell |
| 🌲 | Whisper Woods | Tree |
| ⭐ | Starlight Peaks | Star |
| 🍎 | Fruit Forest | Apple |
| 🍪 | Cookie Canyon | Cookie |
| 🐠 | Ocean Depths | Fish |
| 🌙 | Moon Garden | Moon |
| 🌈 | Rainbow Heights | Rainbow |
| 👑 | Golden Mastery | Crown |

---

## 12. SPACING & LAYOUT SYSTEM

### 12.1 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight spacing, icon gaps |
| space-2 | 8px | Small gaps, internal padding |
| space-3 | 12px | Medium gaps |
| space-4 | 16px | Standard spacing |
| space-5 | 24px | Section padding |
| space-6 | 32px | Large sections |
| space-7 | 48px | Major sections |
| space-8 | 64px | Screen padding |

### 12.2 Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 8px | Small elements, badges |
| radius-md | 12px | Buttons, inputs |
| radius-lg | 16px | Cards, modals |
| radius-xl | 20px | Large cards, containers |
| radius-2xl | 24px | World cards |
| radius-full | 50% | Circles, avatars |

### 12.3 Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 2px 4px rgba(0,0,0,0.05) | Subtle elevation |
| shadow-md | 0 4px 12px rgba(0,0,0,0.08) | Cards, buttons |
| shadow-lg | 0 8px 24px rgba(0,0,0,0.12) | Elevated cards |
| shadow-xl | 0 12px 32px rgba(0,0,0,0.15) | Modals, world cards |
| shadow-glow | 0 0 16px rgba(244,185,66,0.4) | Premium highlights |

---

# OUTPUT 15 - ASSET PRODUCTION PACKAGE

## 1. CHARACTER ASSETS

### 1.1 Quinn (Main Character)

**Role:** Playable avatar, customizable character  
**Base Specifications:**
- Format: SVG (source), PNG (export), Lottie (animation)
- Base Size: 512x512px
- Export Sizes: 256x256, 512x512, 1024x1024 (@2x)
- Style: Child-proportioned, neutral expression, customizable

#### Poses Required (5 poses)

| Pose | Description | Animation | Priority |
|------|-------------|-----------|----------|
| idle | Standing relaxed, breathing | Subtle bounce, 2s loop | P1 |
| aim | Drawing bow, focused | Hold pose, tension | P1 |
| shoot | Releasing arrow | Quick release motion | P1 |
| celebrate | Arms up, happy | Jump/bounce, 1.5s | P1 |
| encourage | Thumbs up, supportive | Nodding, 2s loop | P2 |

#### Customization Variations (MVP)

| Feature | Options | Priority |
|---------|---------|----------|
| Hair Style | 4 styles (short, ponytail, braids, curly) | P1 |
| Hair Color | 6 colors | P1 |
| Skin Tone | 4 tones | P1 |
| Eye Color | 4 colors | P1 |
| Outfit Color | 6 colors | P1 |
| Accessories | 5 starter items | P2 |

**Total MVP Combinations:** 4 × 6 × 4 × 4 × 6 = 2,304 unique variations

#### Quinn Asset Count

```
MVP Assets:
- Base poses (SVG): 5
- Hair variations: 4 styles
- Color variations: 6 options
- PNG exports: 5 poses × 4 hairs × 6 colors × 3 sizes = 360 files
- Lottie animations: 5 poses = 5 animations

Post-MVP:
- Additional hair styles: +4
- Additional colors: +6
- Additional accessories: +15
- Additional poses: +2
```

### 1.2 Numi (Guide Mascot)

**Role:** Tutorial guide, emotional support, narrator  
**Base Specifications:**
- Format: SVG (source), PNG (export), Lottie (animation)
- Base Size: 512x512px
- Export Sizes: 128x128, 256x256, 512x512
- Style: Star-fox hybrid, floating, expressive

#### Color Palette

| Element | Hex Code | Usage |
|---------|----------|-------|
| Warm Cream | `#FFF3E0` | Main body fur |
| Academy Gold | `#F4B942` | Star accents, eyes |
| Sunset Coral | `#FF8A65` | Inner ears, nose |
| Cloud White | `#FFFEF7` | Star tips, highlights |

#### Poses Required (9 poses)

| Pose | Description | Animation | Priority |
|------|-------------|-----------|----------|
| idle | Floating, gentle bob | Bobbing, 3s loop | P1 |
| welcome | Arms open, greeting | Wave motion, 2s | P1 |
| teaching | Pointing, instructing | Gesture loop, 3s | P1 |
| happy | Big smile, excited | Bouncing, 1.5s | P1 |
| celebrate | Spinning, stars around | 360° spin, 2s | P1 |
| thinking | Hand on chin, pondering | Thought bubble, 3s | P2 |
| encourage | Fist pump, supportive | Pump motion, 1.5s | P2 |
| sleepy | Yawning, droopy eyes | Slow bob, 4s loop | P3 |
| surprised | Wide eyes, gasp | Quick pop, 0.5s | P2 |

#### Numi Asset Count

```
Total Assets:
- Base poses (SVG): 9
- PNG exports: 9 poses × 3 sizes = 27 files
- Lottie animations: 9 poses = 9 animations
- Expression variants: 9 (integrated into poses)
```

### 1.3 World Mascots (10 total)

Each world has a unique mascot that appears in:
- World card illustration
- Level select background
- Celebration animations
- Tutorial overlays

| World | Mascot | Design Notes | Priority |
|-------|--------|--------------|----------|
| 1. Sunny Meadows | Sunny the Butterfly | Yellow wings, friendly face | P1 |
| 2. Crystal Shores | Shelly the Turtle | Shell with number pattern | P1 |
| 3. Whisper Woods | Oliver the Owl | Wise, leaf accessories | P1 |
| 4. Starlight Peaks | Stella the Star | Glowing, celestial | P2 |
| 5. Fruit Forest | Berry the Bear | Fruit-themed fur | P2 |
| 6. Cookie Canyon | Chip the Chipmunk | Cookie spots, chef hat | P2 |
| 7. Ocean Depths | Bubbles the Dolphin | Bioluminescent accents | P2 |
| 8. Moon Garden | Luna the Rabbit | Silver fur, moon mark | P2 |
| 9. Rainbow Heights | Prism the Bird | Rainbow feathers | P2 |
| 10. Golden Mastery | King Numi | Royal crown, graduation gown | P2 |

#### World Mascot Asset Count

```
Per Mascot:
- Base pose (SVG): 1
- PNG exports: 3 sizes = 3 files
- Lottie animation: 1 idle loop

Total (10 mascots):
- SVG: 10 files
- PNG: 30 files
- Lottie: 10 animations
```

---

## 2. BACKGROUND ASSETS

### 2.1 World Backgrounds (10 worlds)

**Format:** JPG (compressed), PNG (if transparency needed)  
**Base Resolution:** 1920x1080 (Full HD minimum)  
**Export Sizes:** 1920x1080, 2560x1440, 3840x2160  
**Style:** Whimsical storybook, layered for parallax

#### Layer Structure (per world)

| Layer | Description | Parallax Speed | Priority |
|-------|-------------|----------------|----------|
| Layer 1 (Sky) | Far background | 0.1x | P1 |
| Layer 2 (Far) | Distant elements | 0.2x | P1 |
| Layer 3 (Mid) | Middle ground | 0.4x | P1 |
| Layer 4 (Near) | Foreground elements | 0.7x | P2 |
| Layer 5 (Close) | Very close details | 1.0x | P2 |

#### World Background Breakdown

| World | Layers | P1 Layers | P2 Layers | Total Files |
|-------|--------|-----------|-----------|-------------|
| 1. Sunny Meadows | 5 | 3 | 2 | 15 (×3 res = 45) |
| 2. Crystal Shores | 5 | 3 | 2 | 15 (×3 res = 45) |
| 3. Whisper Woods | 5 | 3 | 2 | 15 (×3 res = 45) |
| 4. Starlight Peaks | 5 | 3 | 2 | 15 (×3 res = 45) |
| 5. Fruit Forest | 5 | 2 | 3 | 15 (×3 res = 45) |
| 6. Cookie Canyon | 5 | 2 | 3 | 15 (×3 res = 45) |
| 7. Ocean Depths | 5 | 2 | 3 | 15 (×3 res = 45) |
| 8. Moon Garden | 5 | 2 | 3 | 15 (×3 res = 45) |
| 9. Rainbow Heights | 5 | 2 | 3 | 15 (×3 res = 45) |
| 10. Golden Mastery | 5 | 2 | 3 | 15 (×3 res = 45) |

**Total Background Files: 450 (10 worlds × 5 layers × 3 resolutions × 3 variants)**

### 2.2 Menu Backgrounds

| Background | Description | Resolution | Priority |
|------------|-------------|------------|----------|
| Main Menu | Academy hall, warm lighting | 1920x1080 | P1 |
| World Select | Map view, floating islands | 1920x1080 | P1 |
| Settings | Clean, minimal | 1920x1080 | P2 |
| Profile | Character showcase | 1920x1080 | P2 |
| Parent Dashboard | Professional, informative | 1920x1080 | P2 |
| Loading | Animated, branded | 1920x1080 | P1 |

**Total Menu Backgrounds: 6 (×3 resolutions = 18 files)**

### 2.3 UI Backgrounds

| Background | Description | Size | Priority |
|------------|-------------|------|----------|
| Modal Overlay | Semi-transparent dark | Full screen | P1 |
| Card Background | Subtle pattern | Various | P1 |
| Achievement Frame | Ornate border | 400x300 | P2 |
| Star Frame | Decorative | 200x200 | P2 |

---

## 3. TARGET ASSETS

### 3.1 Target Designs (10 worlds)

**Format:** SVG (source), PNG (export), Lottie (hit animation)  
**Base Size:** 256x256px  
**Export Sizes:** 128x128, 256x256, 512x512

#### Target Specifications

```
Base Target Structure:
- Outer ring: 256px diameter
- Middle ring: 192px diameter
- Inner ring: 128px diameter
- Bullseye: 64px diameter
- Border: 4px stroke
- Center: Answer number display
```

#### World-Specific Targets

| World | Target Theme | Colors | Priority |
|-------|--------------|--------|----------|
| 1. Sunny Meadows | Flower target | Petal rings | P1 |
| 2. Crystal Shores | Seashell target | Pearl/blue rings | P1 |
| 3. Whisper Woods | Tree ring target | Wood grain | P1 |
| 4. Starlight Peaks | Star target | Golden star shape | P2 |
| 5. Fruit Forest | Apple target | Red/green rings | P2 |
| 6. Cookie Canyon | Cookie target | Chocolate chip center | P2 |
| 7. Ocean Depths | Bubble target | Blue gradient rings | P2 |
| 8. Moon Garden | Moon phase target | Silver crescent | P2 |
| 9. Rainbow Heights | Rainbow target | Color rings | P2 |
| 10. Golden Mastery | Crown target | Royal gold | P2 |

### 3.2 Target States

| State | Description | Animation | Priority |
|-------|-------------|-----------|----------|
| Idle | Waiting for shot | Subtle pulse | P1 |
| Highlight | Potential target | Glow effect | P1 |
| Hit Correct | Right answer | Burst + points | P1 |
| Hit Wrong | Wrong answer | Shake + fade | P1 |
| Destroyed | Target eliminated | Shatter/disappear | P2 |

#### Target Asset Count

```
Per World:
- 1 design × 5 states = 5 variants
- 3 sizes each = 15 PNG files
- 1 hit animation (Lottie)

Total (10 worlds):
- SVG designs: 10 files
- PNG exports: 150 files
- Lottie animations: 10 files
```

---

## 4. UI ASSETS

### 4.1 Buttons

**Format:** SVG (scalable), PNG (fallback)  
**Style:** Rounded corners, subtle gradient, shadow

#### Button Types & States

| Type | Sizes | States | Priority |
|------|-------|--------|----------|
| Primary | 200x56, 280x64 | default, hover, active, disabled, loading | P1 |
| Secondary | 200x56, 280x64 | default, hover, active, disabled | P1 |
| Tertiary | 160x48, 200x56 | default, hover, active | P2 |
| Icon Button | 48x48, 64x64 | default, hover, active | P1 |
| FAB | 72x72 | default, hover, active | P2 |
| Back Button | 48x48 | default, hover, active | P1 |
| Close Button | 32x32, 48x48 | default, hover, active | P1 |

#### Button Asset Count

```
Total Buttons:
- 7 types × 5 states = 35 SVG components
- PNG exports: 35 × 2 sizes = 70 files
```

### 4.2 Icons (42+ icons)

**Format:** SVG (primary), PNG (fallback @2x)  
**Sizes:** 24px, 48px, 96px  
**Style:** Line icons, 2px stroke, rounded caps

#### Icon Categories

| Category | Count | Priority |
|----------|-------|----------|
| Navigation | 7 | P1 |
| Gameplay | 15 | P1 |
| Progress | 7 | P2 |
| Math | 6 | P1 |
| Audio | 4 | P1 |
| World | 10 | P2 |

#### Icon Asset Count

```
Total Icons:
- 49 icons × 3 sizes = 147 SVG files
- PNG fallback: 49 × 3 sizes = 147 files
- Icon font (optional): 1 file
```

### 4.3 Cards

| Card Type | Dimensions | States | Priority |
|-----------|------------|--------|----------|
| Level Card | 200x240 | locked, unlocked, completed, perfect | P1 |
| World Card | 320x200 | locked, unlocked, completed | P1 |
| Achievement Card | 280x120 | locked, unlocked | P2 |
| Character Card | 160x200 | default, selected | P2 |
| Reward Card | 240x160 | default | P2 |
| Modal Card | 480x400 | default | P1 |
| Toast Card | 360x64 | default | P2 |
| Stat Card | 140x100 | default | P2 |

#### Card Asset Count

```
Total Cards:
- 8 types × 4 states avg = 32 SVG components
- PNG exports: 32 files
```

### 4.4 Progress Indicators

| Element | Description | Animation | Priority |
|---------|-------------|-----------|----------|
| Progress Bar | Linear progress | Fill animation | P1 |
| Circular Progress | Ring progress | Stroke animation | P2 |
| Star Rating | 1-3 stars | Sequential fill | P1 |
| Level Badge | Current level | Pulse on new | P2 |
| XP Bar | Experience points | Smooth fill | P2 |
| Streak Counter | Consecutive wins | Bounce on increment | P2 |
| Timer | Countdown | Number tick | P1 |
| Loading Spinner | Wait indicator | Continuous spin | P1 |

#### Progress Asset Count

```
Total Progress:
- 8 types × 3 sizes = 24 SVG files
- Lottie animations: 5 types
```

### 4.5 Stars & Coins

#### Star Assets

| Asset | Description | Sizes | Priority |
|-------|-------------|-------|----------|
| Star Empty | Unearned star | 32, 48, 64, 96, 128 | P1 |
| Star Filled | Earned star | 32, 48, 64, 96, 128 | P1 |
| Star Gold | Perfect score | 32, 48, 64, 96, 128 | P1 |
| Star Silver | Good score | 32, 48, 64 | P2 |
| Star Bronze | Pass score | 32, 48, 64 | P2 |
| Star Burst | Celebration | 128, 256 | P1 |

#### Coin Assets

| Asset | Description | Sizes | Priority |
|-------|-------------|-------|----------|
| Coin Single | One coin | 24, 32, 48, 64 | P1 |
| Coin Stack | Multiple coins | 48, 64, 96 | P2 |
| Coin Pile | Large amount | 96, 128 | P2 |
| Coin Spin | Rotating | 48, 64 | P1 |

#### Star/Coin Asset Count

```
Total Stars & Coins:
- Star SVG: 6 types × 5 sizes = 30 files
- Star PNG: 6 types × 5 sizes = 30 files
- Star Lottie: 3 animations
- Coin SVG: 4 types × 4 sizes = 16 files
- Coin PNG: 4 types × 4 sizes = 16 files
- Coin Lottie: 2 animations
```

---

## 5. PARTICLE EFFECTS

### 5.1 Effect Categories

**Format:** PNG spritesheets, Lottie JSON, CSS animations  
**Style:** Whimsical, magical, child-friendly

#### Star Burst Effects

| Effect | Description | Duration | Priority |
|--------|-------------|----------|----------|
| Star Burst Small | 5-8 stars | 0.5s | P1 |
| Star Burst Medium | 12-16 stars | 0.8s | P1 |
| Star Burst Large | 20-30 stars | 1.2s | P1 |
| Star Trail | Following motion | Continuous | P2 |
| Star Sparkle | Single twinkle | 0.3s loop | P2 |

#### Confetti Effects

| Effect | Description | Duration | Priority |
|--------|-------------|----------|----------|
| Confetti Burst | Multi-color spray | 2s | P1 |
| Confetti Rain | Falling pieces | 3s | P2 |
| Confetti Cannon | Directional burst | 1.5s | P2 |

#### Sparkle Effects

| Effect | Description | Duration | Priority |
|--------|-------------|----------|----------|
| Magic Sparkle | Soft glow particles | 1s loop | P2 |
| Dust Sparkle | Golden dust | 2s | P2 |
| Gem Sparkle | Crystal shine | 0.5s | P2 |

#### Arrow Trail Effects

| Effect | Description | Duration | Priority |
|--------|-------------|----------|----------|
| Arrow Trail | Motion streak | Flight duration | P1 |
| Arrow Glow | Magical aura | Flight duration | P2 |
| Arrow Spark | Speed lines | Flight duration | P2 |

#### Celebration Effects

| Effect | Description | Duration | Priority |
|--------|-------------|----------|----------|
| Level Complete | Full screen celebration | 3s | P1 |
| Star Earned | Single star celebration | 1s | P1 |
| Perfect Score | Maximum celebration | 4s | P2 |
| World Unlock | Grand reveal | 5s | P2 |

### 5.2 Particle Asset Count

```
Total Particles:
- PNG spritesheets: 15 effects
- Lottie animations: 15 effects
- CSS animations: 5 simple effects
```

---

## 6. AUDIO ASSETS

### 6.1 Music Tracks

**Format:** MP3 (compressed), WAV (source)  
**Quality:** 192kbps MP3, 44.1kHz WAV  
**Loop:** Seamless looping enabled

#### Menu Music

| Track | Description | BPM | Duration | Priority |
|-------|-------------|-----|----------|----------|
| Main Menu | Welcome theme | 90 | 2:00 loop | P1 |
| World Select | Adventure feel | 100 | 1:30 loop | P2 |
| Character Customization | Playful | 110 | 1:00 loop | P3 |
| Parent Dashboard | Calm, informative | 80 | 2:00 loop | P2 |

#### Gameplay Music (10 worlds)

| Track | Description | BPM | Duration | Priority |
|-------|-------------|-----|----------|----------|
| Sunny Meadows | Cheerful, nature | 110 | 2:00 loop | P1 |
| Crystal Shores | Playful, bouncy | 115 | 2:00 loop | P1 |
| Whisper Woods | Magical, wonder | 100 | 2:30 loop | P1 |
| Starlight Peaks | Awe-inspiring | 100 | 2:30 loop | P1 |
| Fruit Forest | Playful, bouncy | 115 | 2:00 loop | P2 |
| Cookie Canyon | Whimsical, sweet | 120 | 2:00 loop | P2 |
| Ocean Depths | Calm, flowing | 95 | 2:30 loop | P2 |
| Moon Garden | Dreamlike, peaceful | 90 | 2:30 loop | P2 |
| Rainbow Heights | Uplifting, colorful | 120 | 2:00 loop | P2 |
| Golden Mastery | Triumphant, royal | 140 | 3:00 loop | P2 |

#### Event Music

| Track | Description | BPM | Duration | Priority |
|-------|-------------|-----|----------|----------|
| Level Complete | Victory fanfare | 120 | 0:30 | P1 |
| Perfect Score | Celebration | 140 | 0:45 | P1 |
| World Unlock | Grand reveal | 130 | 0:30 | P2 |
| Achievement | Success chime | - | 0:15 | P2 |
| Game Over | Gentle failure | 70 | 0:20 | P2 |

#### Music Asset Count

```
Total Music:
- Menu tracks: 4 (MP3 + WAV = 8 files)
- Gameplay tracks: 10 (MP3 + WAV = 20 files)
- Event tracks: 5 (MP3 + WAV = 10 files)
- Total: 38 audio files
- Estimated size: 50-80MB
```

### 6.2 Sound Effects (SFX)

**Format:** WAV (source), MP3 (fallback)  
**Quality:** 44.1kHz, 16-bit

#### UI Sounds (9)

| Sound | Description | Duration | Priority |
|-------|-------------|----------|----------|
| Button Click | Standard click | 0.1s | P1 |
| Button Hover | Subtle tick | 0.05s | P2 |
| Toggle On | Switch activate | 0.1s | P1 |
| Toggle Off | Switch deactivate | 0.1s | P1 |
| Back Navigation | Return sound | 0.15s | P1 |
| Menu Open | Slide in | 0.2s | P2 |
| Menu Close | Slide out | 0.2s | P2 |
| Modal Open | Popup appear | 0.15s | P1 |
| Modal Close | Popup dismiss | 0.1s | P1 |

#### Gameplay Sounds (9)

| Sound | Description | Duration | Priority |
|-------|-------------|----------|----------|
| Bow Draw | Tension buildup | 0.3s | P1 |
| Arrow Release | Shoot sound | 0.2s | P1 |
| Arrow Fly | Whoosh | 0.5s | P2 |
| Target Hit Correct | Success thud | 0.5s | P1 |
| Target Hit Wrong | Error buzz | 0.3s | P1 |
| Target Destroy | Break sound | 0.4s | P2 |
| Target Spawn | Appear pop | 0.2s | P2 |
| Target Highlight | Selection ping | 0.15s | P2 |

#### Feedback Sounds (11)

| Sound | Description | Duration | Priority |
|-------|-------------|----------|----------|
| Star Earned | Magical chime | 0.8s | P1 |
| Star 2 Earned | Bigger chime | 1.0s | P1 |
| Star 3 Earned | Grand chime | 1.2s | P1 |
| Coin Collect | Coin clink | 0.3s | P1 |
| Coin Multi | Multiple coins | 0.5s | P2 |
| Level Complete | Victory fanfare | 3.0s | P1 |
| Perfect Score | Celebration | 2.0s | P1 |
| Combo | Streak bonus | 0.5s | P2 |
| Power Up | Enhancement | 0.8s | P2 |

#### Achievement Sounds (6)

| Sound | Description | Duration | Priority |
|-------|-------------|----------|----------|
| Achievement Unlock | Fanfare | 2.0s | P2 |
| Medal Bronze | Third place | 1.0s | P2 |
| Medal Silver | Second place | 1.2s | P2 |
| Medal Gold | First place | 1.5s | P2 |
| Trophy | Major award | 2.5s | P2 |
| Crown | Mastery | 3.0s | P3 |

#### SFX Asset Count

```
Total SFX:
- UI sounds: 9
- Gameplay sounds: 9
- Feedback sounds: 11
- Achievement sounds: 6
- Total unique: 35 sounds
- Each: WAV + MP3 = 70 files
- Estimated size: 10-15MB
```

### 6.3 Voiceover (Optional P3)

| Character | Lines | Priority |
|-----------|-------|----------|
| Numi | 8 lines | P3 |

---

## 7. PRODUCTION PRIORITIES

### 7.1 P1 - Must-Have MVP Assets

#### Characters (P1)
- [ ] Quinn: idle, aim, shoot, celebrate poses (1 hair, 1 color)
- [ ] Numi: idle, welcome, teaching, happy, celebrate poses
- [ ] Basic PNG exports (512x512)
- [ ] World mascots 1-3 (Sunny, Crystal, Whisper)

#### UI Elements (P1)
- [ ] Primary & Secondary buttons (all states)
- [ ] Navigation icons (home, back, settings, close)
- [ ] Gameplay icons (bow, arrow, target, star, check, x-mark)
- [ ] Level cards (4 states)
- [ ] World cards (3 worlds)
- [ ] Modal dialogs
- [ ] Progress bar
- [ ] Star rating (empty, filled)

#### Backgrounds (P1)
- [ ] World 1: Sunny Meadows (all 5 layers)
- [ ] World 2: Crystal Shores (all 5 layers)
- [ ] World 3: Whisper Woods (all 5 layers)
- [ ] Main menu background
- [ ] Loading screen background

#### Targets (P1)
- [ ] World 1 target design (all 5 states)
- [ ] World 2 target design (all 5 states)
- [ ] World 3 target design (all 5 states)

#### Audio (P1)
- [ ] Main menu music
- [ ] World 1-3 gameplay music
- [ ] Button click, toggle, back sounds
- [ ] Bow draw, arrow release sounds
- [ ] Target hit correct/wrong sounds
- [ ] Star earned, level complete sounds

#### Particles (P1)
- [ ] Star burst small, medium, large
- [ ] Confetti burst
- [ ] Arrow trail

#### Animations (P1)
- [ ] Quinn: idle, aim, shoot, celebrate (Lottie)
- [ ] Numi: idle, welcome, teaching, happy, celebrate (Lottie)
- [ ] Button hover, active states (CSS)
- [ ] Card enter/exit transitions (CSS)
- [ ] Target hit effects (Lottie)

**P1 Asset Count:**
```
Estimated P1 Assets:
- Images: ~250 files
- Audio: ~30 files
- Animations: ~15 Lottie files
- Total: ~295 assets
```

### 7.2 P2 - Important Enhancement Assets

#### Characters (P2)
- [ ] Quinn: All 4 hair styles, 6 colors
- [ ] Quinn: encourage pose
- [ ] Numi: thinking, encourage, surprised poses
- [ ] World mascots 4-10

#### UI Elements (P2)
- [ ] Tertiary buttons
- [ ] Icon buttons, FAB
- [ ] All remaining icons (42 total)
- [ ] Achievement cards
- [ ] Character cards
- [ ] Reward cards
- [ ] Toast notifications
- [ ] Stat cards
- [ ] Circular progress
- [ ] Timer display
- [ ] Loading spinner

#### Backgrounds (P2)
- [ ] Worlds 4-10 (all layers)
- [ ] 2560x1440 and 3840x2160 resolutions
- [ ] Menu backgrounds (settings, profile, parent)

#### Targets (P2)
- [ ] Worlds 4-10 target designs
- [ ] Destroyed state animations

#### Particles (P2)
- [ ] All confetti effects
- [ ] All sparkle effects
- [ ] Arrow glow effects
- [ ] Celebration effects

#### Audio (P2)
- [ ] Worlds 4-10 gameplay music
- [ ] All remaining SFX
- [ ] Achievement sounds
- [ ] World unlock sounds

**P2 Asset Count:**
```
Estimated P2 Assets:
- Images: ~400 files
- Audio: ~50 files
- Animations: ~30 Lottie files
- Total: ~480 assets
```

### 7.3 P3 - Nice-to-Have Premium Assets

#### Characters (P3)
- [ ] Additional outfit options for Quinn
- [ ] Seasonal variants (holiday themes)
- [ ] Numi: sleepy pose
- [ ] Bree and Pip full implementation

#### UI Elements (P3)
- [ ] Skeleton loaders
- [ ] Advanced tooltip animations
- [ ] Custom cursor designs

#### Backgrounds (P3)
- [ ] Sunset variants
- [ ] Dawn variants
- [ ] Weather effects (rain, snow)

#### Audio (P3)
- [ ] Numi voiceover lines
- [ ] Ambient soundscapes per world
- [ ] Dynamic music layers

#### Accessibility (P3)
- [ ] High contrast variants
- [ ] Larger UI scale options
- [ ] Reduced motion alternatives

**P3 Asset Count:**
```
Estimated P3 Assets:
- Images: ~150 files
- Audio: ~20 files
- Animations: ~15 Lottie files
- Total: ~185 assets
```

---

## 8. FILE NAMING CONVENTIONS

### 8.1 Folder Structure

```
/assets
├── /characters
│   ├── /quinn
│   │   ├── /svg
│   │   ├── /png
│   │   │   ├── /256
│   │   │   ├── /512
│   │   │   └── /1024
│   │   └── /lottie
│   ├── /numi
│   ├── /mascots
│   │   ├── /sunny
│   │   ├── /crystal
│   │   └── ...
├── /ui
│   ├── /buttons
│   ├── /icons
│   │   ├── /24
│   │   ├── /48
│   │   └── /96
│   ├── /cards
│   ├── /progress
│   └── /stars-coins
├── /backgrounds
│   ├── /world-01-meadow
│   ├── /world-02-crystal
│   ├── /world-03-whisper
│   ├── /world-04-star
│   ├── /world-05-fruit
│   ├── /world-06-cookie
│   ├── /world-07-ocean
│   ├── /world-08-moon
│   ├── /world-09-rainbow
│   ├── /world-10-mastery
│   └── /menus
├── /targets
│   ├── /svg
│   └── /png
├── /particles
│   ├── /spritesheets
│   └── /lottie
├── /audio
│   ├── /music
│   │   ├── /menu
│   │   ├── /gameplay
│   │   └── /events
│   ├── /sfx
│   │   ├── /ui
│   │   ├── /gameplay
│   │   ├── /feedback
│   │   └── /achievements
│   └── /voiceover
└── /fonts
```

### 8.2 Naming Convention Rules

#### General Format
```
[category]-[subcategory]-[name]-[variant]-[state]-[size].[ext]
```

#### Character Files
```
quinn-[pose]-[hair]-[color]-[size].png
Examples:
- quinn-idle-ponytail-gold-512.png
- quinn-aim-braids-blue-256.png
- quinn-celebrate-short-brown-1024.png

numi-[pose]-[size].png
Examples:
- numi-idle-512.png
- numi-welcome-256.png
- numi-celebrate.json (lottie)

mascot-[world]-[pose]-[size].png
Examples:
- mascot-meadow-idle-512.png
- mascot-crystal-happy-256.png
```

#### UI Files
```
btn-[type]-[state].svg
Examples:
- btn-primary-default.svg
- btn-primary-hover.svg
- btn-primary-disabled.svg

icon-[name]-[size].svg
Examples:
- icon-home-24.svg
- icon-star-48.svg
- icon-settings-96.svg

card-[type]-[state].svg
Examples:
- card-level-locked.svg
- card-level-completed.svg
- card-world-unlocked.svg

progress-[type].svg
Examples:
- progress-bar.svg
- progress-stars.svg
```

#### Background Files
```
bg-[world]-[layer]-[variant]-[resolution].jpg
Examples:
- bg-meadow-sky-day-1920.jpg
- bg-meadow-hills-day-1920.jpg
- bg-crystal-ocean-day-2560.jpg
- bg-menu-main-1920.jpg

Variant codes:
- day (default)
- sunset
- night
- dawn
```

#### Target Files
```
target-[world]-[state].[ext]
Examples:
- target-meadow-idle.svg
- target-meadow-hit-correct.json
- target-crystal-highlight.png
```

#### Particle Files
```
fx-[type]-[variant].[ext]
Examples:
- fx-star-burst-small.json
- fx-star-burst-medium.json
- fx-confetti-burst.json
- fx-arrow-trail.png
```

#### Audio Files
```
Music:
music-[category]-[name]-[bpm].[ext]
Examples:
- music-menu-main-90.mp3
- music-gameplay-meadow-110.mp3
- music-event-level-complete-120.mp3

SFX:
sfx-[category]-[name].[ext]
Examples:
- sfx-ui-button-click.mp3
- sfx-gameplay-bow-draw.mp3
- sfx-feedback-star-earned.mp3

Voiceover:
vo-[character]-[line].[ext]
Examples:
- vo-numi-welcome.mp3
- vo-numi-encourage-01.mp3
```

### 8.3 Version Control

```
Version Suffix Format:
[name]-v[major].[minor].[patch].[ext]

Examples:
- quinn-idle-ponytail-gold-512-v1.0.0.png
- btn-primary-default-v2.1.0.svg
- music-menu-main-90-v1.0.0.mp3

Version Rules:
- Major: Significant redesign
- Minor: Minor updates, new variants
- Patch: Bug fixes, optimizations
```

---

## 9. TECHNICAL SPECIFICATIONS

### 9.1 Image Specifications

| Format | Use Case | Compression | Notes |
|--------|----------|-------------|-------|
| SVG | UI elements, icons | N/A | Scalable, preferred |
| PNG | Characters, targets | TinyPNG | Transparency support |
| JPG | Backgrounds | 80% quality | No transparency needed |
| WebP | All images | Auto | Modern format fallback |

### 9.2 Audio Specifications

| Format | Use Case | Quality | Notes |
|--------|----------|---------|-------|
| MP3 | All audio | 192kbps | Compressed, streaming |
| WAV | Source files | 44.1kHz/16-bit | Lossless, editing |
| OGG | Fallback | 192kbps | Open source option |

### 9.3 Animation Specifications

| Format | Use Case | Size Limit | Notes |
|--------|----------|------------|-------|
| Lottie JSON | Complex animations | <100KB | After Effects export |
| CSS | Simple transitions | N/A | Performance optimal |
| Spritesheet | Particle effects | <500KB | PNG sequence |
| WebM | Video backgrounds | <2MB | Optional |

### 9.4 Performance Budget

```
Per Screen Load:
- Images: <2MB total
- Audio: <500KB (initial)
- Animations: <200KB
- Fonts: <300KB
- Total: <3MB initial load

Optimization:
- Lazy load non-critical assets
- Use CDN for delivery
- Implement asset preloading
- Cache aggressively
```

---

## 10. PRODUCTION SUMMARY

### 10.1 Total Asset Count by Priority

| Category | P1 (MVP) | P2 (Enhanced) | P3 (Premium) | Total |
|----------|----------|---------------|--------------|-------|
| Characters | 50 | 150 | 50 | 250 |
| Backgrounds | 45 | 315 | 90 | 450 |
| Targets | 45 | 105 | 0 | 150 |
| UI Elements | 80 | 200 | 50 | 330 |
| Particles | 10 | 20 | 5 | 35 |
| Audio | 30 | 50 | 20 | 100 |
| **TOTAL** | **260** | **840** | **215** | **1,315** |

### 10.2 Asset Type Breakdown

| Type | Count | Estimated Size |
|------|-------|----------------|
| PNG Images | ~600 | 100-150MB |
| SVG Vectors | ~150 | 5-10MB |
| JPG Backgrounds | ~450 | 150-200MB |
| Audio (MP3+WAV) | ~100 | 60-100MB |
| Lottie Animations | ~60 | 5-10MB |
| **TOTAL** | **~1,360** | **320-470MB** |

### 10.3 Production Timeline Estimate

| Phase | Duration | Assets | Team Size |
|-------|----------|--------|-----------|
| P1 - MVP | 4 weeks | 260 | 2-3 artists |
| P2 - Enhanced | 4 weeks | 840 | 3-4 artists |
| P3 - Premium | 4 weeks | 215 | 2 artists |
| **Total** | **12 weeks** | **1,315** | **3-4 artists** |

---

## APPENDIX: QUICK REFERENCE

### Color Quick Reference
```
Primary:
- Academy Gold: #F4B942
- Sky Blue: #87CEEB
- Cloud White: #FFFEF7

Secondary:
- Meadow Green: #7CB342
- Sunset Coral: #FF8A65
- Lavender Mist: #B39DDB

Feedback:
- Correct: #4CAF50
- Incorrect: #FF9800
- Dark Text: #1A1A1A
```

### Typography Quick Reference
```
Headings: Fredoka One
Body: Nunito
Numbers: Fredoka One, 48px minimum
```

### Animation Quick Reference
```
Button hover: 200ms, ease-out
Screen transition: 300ms, smooth
Star appear: 500ms, spring
Target hit: 300-500ms, ease-out
```

### Naming Quick Reference
```
Character: quinn-[pose]-[hair]-[color]-[size].png
Button: btn-[type]-[state].svg
Icon: icon-[name]-[size].svg
Background: bg-[world]-[layer]-[variant]-[res].jpg
Target: target-[world]-[state].svg
Audio: sfx-[category]-[name].mp3
```

---

*Document Version: 1.0*  
*Created for: Numeria Archery MVP*  
*Last Updated: 2024*  
*Target Platform: Web (Responsive)*  
*Audience: Children ages 6-8*
