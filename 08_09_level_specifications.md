# Numeria Archery - Level Design Specifications

## Document Information
- **Game**: Numeria Archery
- **Target Age**: 6-8 years (Grade 1-2)
- **Math Focus**: Addition and Subtraction (0-20)
- **Document**: OUTPUT 8 & 9 - Level Specifications

---

# OUTPUT 8 - FREE 10 LEVELS: PLAYABLE IMPLEMENTATION SPEC

## World 1: Sunny Meadows - Complete Level Breakdown

### Level 1: "Meet the Numbers" (Tutorial)

| Field | Specification |
|-------|---------------|
| **level_id** | 1 |
| **level_title** | Meet the Numbers |
| **learning_goal** | Recognize numbers 1-3 visually and associate with quantities |
| **operation_type** | recognition |
| **number_range** | 1-3 |
| **problem_count** | 3 |
| **target_count** | 3 (one correct, two decoys) |
| **target_speed** | 0 (static) |
| **decoy_logic** | Other numbers from same range (1-3, excluding correct answer) |
| **assist_logic** | Finger-guide arrow appears pointing to correct target; voice says "Find the number [X]" |
| **reward_logic** | 3 stars guaranteed on first completion; 5 coins; "First Shot!" achievement |
| **world_theme** | Sunny Meadows - morning light, butterflies, gentle hills |
| **expected_duration** | 45-60 seconds |
| **parent_facing_meaning** | "Your child learned to identify numbers 1-3" |

**Exact Problems:**
| # | Prompt | Correct | Decoy A | Decoy B |
|---|--------|---------|---------|---------|
| 1 | "Find the number 2" | 2 | 1 | 3 |
| 2 | "Find the number 1" | 1 | 2 | 3 |
| 3 | "Find the number 3" | 3 | 1 | 2 |

---

### Level 2: "Counting Friends" (Practice)

| Field | Specification |
|-------|---------------|
| **level_id** | 2 |
| **level_title** | Counting Friends |
| **learning_goal** | Recognize numbers 1-5, strengthen number-quantity association |
| **operation_type** | recognition |
| **number_range** | 1-5 |
| **problem_count** | 4 |
| **target_count** | 3 |
| **target_speed** | 0 (static) |
| **decoy_logic** | Numbers within ±2 of correct answer |
| **assist_logic** | Numbers pulse gently when child hesitates (>3 seconds); hint button shows quantity dots |
| **reward_logic** | Up to 3 stars based on accuracy; 5-8 coins; streak bonus starts |
| **world_theme** | Sunny Meadows - rabbits hopping in background |
| **expected_duration** | 60-75 seconds |
| **parent_facing_meaning** | "Your child practiced recognizing numbers 1-5" |

**Exact Problems:**
| # | Prompt | Correct | Decoy A | Decoy B |
|---|--------|---------|---------|---------|
| 1 | "Find the number 4" | 4 | 2 | 5 |
| 2 | "Find the number 2" | 2 | 3 | 1 |
| 3 | "Find the number 5" | 5 | 3 | 4 |
| 4 | "Find the number 1" | 1 | 3 | 2 |

---

### Level 3: "Number Garden" (Focus)

| Field | Specification |
|-------|---------------|
| **level_id** | 3 |
| **level_title** | Number Garden |
| **learning_goal** | Master recognition of numbers 1-10 |
| **operation_type** | recognition |
| **number_range** | 1-10 |
| **problem_count** | 5 |
| **target_count** | 4 |
| **target_speed** | 1 (slow bob - gentle up/down float) |
| **decoy_logic** | One number from same decade, one from different decade, one visually similar |
| **assist_logic** | After 2 wrong attempts, targets slow down; number is spoken aloud |
| **reward_logic** | 3 stars = 100% accuracy; 2 stars = 80%; 8-10 coins; "Number Master" badge |
| **world_theme** | Sunny Meadows - flower garden with bees |
| **expected_duration** | 75-90 seconds |
| **parent_facing_meaning** | "Your child mastered recognizing numbers 1-10" |

**Exact Problems:**
| # | Prompt | Correct | Decoy A | Decoy B | Decoy C |
|---|--------|---------|---------|---------|---------|
| 1 | "Find the number 7" | 7 | 5 | 9 | 1 |
| 2 | "Find the number 3" | 3 | 8 | 5 | 2 |
| 3 | "Find the number 10" | 10 | 6 | 8 | 1 |
| 4 | "Find the number 6" | 6 | 9 | 4 | 0 |
| 5 | "Find the number 8" | 8 | 3 | 10 | 6 |

---

### Level 4: "First Addition" (Tutorial)

| Field | Specification |
|-------|---------------|
| **level_id** | 4 |
| **level_title** | First Addition |
| **learning_goal** | Understand addition as combining quantities; sums 2-4 |
| **operation_type** | addition |
| **number_range** | 1+1 to 2+2 (sums 2-4) |
| **problem_count** | 4 |
| **target_count** | 3 |
| **target_speed** | 0 (static) |
| **decoy_logic** | Sum ±1, sum ±2 (staying positive) |
| **assist_logic** | Visual counters appear (apples/blocks) to represent each number; equation read aloud |
| **reward_logic** | 3 stars guaranteed first time; 8 coins; "First Sum!" achievement |
| **world_theme** | Sunny Meadows - apple trees with falling apples |
| **expected_duration** | 60-90 seconds |
| **parent_facing_meaning** | "Your child learned basic addition with small numbers" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B | Visual Aid |
|---|----------|---------|---------|---------|------------|
| 1 | 1 + 1 = ? | 2 | 3 | 1 | 1 apple + 1 apple |
| 2 | 1 + 2 = ? | 3 | 2 | 4 | 1 apple + 2 apples |
| 3 | 2 + 1 = ? | 3 | 4 | 2 | 2 apples + 1 apple |
| 4 | 2 + 2 = ? | 4 | 3 | 5 | 2 apples + 2 apples |

---

### Level 5: "Adding Up" (Practice)

| Field | Specification |
|-------|---------------|
| **level_id** | 5 |
| **level_title** | Adding Up |
| **learning_goal** | Practice addition with sums 3-6; build fluency |
| **operation_type** | addition |
| **number_range** | Addends 1-4, sums 3-6 |
| **problem_count** | 5 |
| **target_count** | 3 |
| **target_speed** | 1 (slow bob) |
| **decoy_logic** | Sum ±1, common error (adding instead of combining), visually similar number |
| **assist_logic** | Finger counting animation available; equation can be tapped to hear aloud |
| **reward_logic** | Up to 3 stars; 8-12 coins; streak multiplier (2x for 3 correct in a row) |
| **world_theme** | Sunny Meadows - birds carrying numbers |
| **expected_duration** | 75-100 seconds |
| **parent_facing_meaning** | "Your child practiced addition with sums up to 6" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B |
|---|----------|---------|---------|---------|
| 1 | 2 + 3 = ? | 5 | 6 | 4 |
| 2 | 1 + 3 = ? | 4 | 5 | 3 |
| 3 | 3 + 2 = ? | 5 | 4 | 6 |
| 4 | 2 + 2 = ? | 4 | 5 | 3 |
| 5 | 1 + 4 = ? | 5 | 6 | 4 |

---

### Level 6: "Sum Safari" (Focus)

| Field | Specification |
|-------|---------------|
| **level_id** | 6 |
| **level_title** | Sum Safari |
| **learning_goal** | Master addition with sums up to 8; introduce commutative property |
| **operation_type** | addition |
| **number_range** | Addends 1-5, sums 3-8 |
| **problem_count** | 6 |
| **target_count** | 4 |
| **target_speed** | 1 (slow bob) |
| **decoy_logic** | Sum ±1, sum ±2, reverse digits (if sum is 7, include 6 as decoy) |
| **assist_logic** | Number line appears at bottom; can drag finger to count; hint shows visual grouping |
| **reward_logic** | 3 stars = 5/6+ correct; 10-15 coins; "Addition Adventurer" badge |
| **world_theme** | Sunny Meadows - safari animals in tall grass |
| **expected_duration** | 90-120 seconds |
| **parent_facing_meaning** | "Your child is becoming fluent in addition up to 8" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B | Decoy C |
|---|----------|---------|---------|---------|---------|
| 1 | 3 + 4 = ? | 7 | 8 | 6 | 5 |
| 2 | 2 + 5 = ? | 7 | 6 | 8 | 3 |
| 3 | 4 + 2 = ? | 6 | 7 | 5 | 8 |
| 4 | 1 + 5 = ? | 6 | 7 | 5 | 4 |
| 5 | 3 + 3 = ? | 6 | 5 | 7 | 9 |
| 6 | 5 + 2 = ? | 7 | 8 | 6 | 9 |

---

### Level 7: "Take Away" (Tutorial)

| Field | Specification |
|-------|---------------|
| **level_id** | 7 |
| **level_title** | Take Away |
| **learning_goal** | Understand subtraction as taking away; differences 1-2 |
| **operation_type** | subtraction |
| **number_range** | Minuend 2-4, subtrahend 1-2, differences 1-2 |
| **problem_count** | 4 |
| **target_count** | 3 |
| **target_speed** | 0 (static) |
| **decoy_logic** | Difference ±1, minuend as decoy (common error: repeating first number) |
| **assist_logic** | Visual removal animation (objects fly away); equation read with "take away" phrasing |
| **reward_logic** | 3 stars guaranteed first time; 10 coins; "First Difference!" achievement |
| **world_theme** | Sunny Meadows - apples being picked from tree |
| **expected_duration** | 60-90 seconds |
| **parent_facing_meaning** | "Your child learned the concept of subtraction" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B | Visual Aid |
|---|----------|---------|---------|---------|------------|
| 1 | 2 - 1 = ? | 1 | 2 | 3 | 2 apples, 1 falls |
| 2 | 3 - 1 = ? | 2 | 3 | 1 | 3 apples, 1 falls |
| 3 | 3 - 2 = ? | 1 | 2 | 3 | 3 apples, 2 fall |
| 4 | 4 - 2 = ? | 2 | 3 | 4 | 4 apples, 2 fall |

---

### Level 8: "Subtracting Stars" (Practice)

| Field | Specification |
|-------|---------------|
| **level_id** | 8 |
| **level_title** | Subtracting Stars |
| **learning_goal** | Practice subtraction with differences 1-4 |
| **operation_type** | subtraction |
| **number_range** | Minuend 3-6, subtrahend 1-3, differences 1-4 |
| **problem_count** | 5 |
| **target_count** | 3 |
| **target_speed** | 1 (slow bob) |
| **decoy_logic** | Difference ±1, sum of numbers (common error), minuend as decoy |
| **assist_logic** | Count-back animation on number line; visual aid button shows starting quantity |
| **reward_logic** | Up to 3 stars; 10-15 coins; streak bonus for 3+ correct |
| **world_theme** | Sunny Meadows - stars twinkling and disappearing |
| **expected_duration** | 75-100 seconds |
| **parent_facing_meaning** | "Your child practiced subtraction with small numbers" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B |
|---|----------|---------|---------|---------|
| 1 | 5 - 2 = ? | 3 | 4 | 2 |
| 2 | 4 - 1 = ? | 3 | 4 | 2 |
| 3 | 6 - 3 = ? | 3 | 4 | 2 |
| 4 | 5 - 3 = ? | 2 | 3 | 1 |
| 5 | 4 - 2 = ? | 2 | 3 | 1 |

---

### Level 9: "Difference Detectives" (Focus)

| Field | Specification |
|-------|---------------|
| **level_id** | 9 |
| **level_title** | Difference Detectives |
| **learning_goal** | Master subtraction with differences up to 5; build fluency |
| **operation_type** | subtraction |
| **number_range** | Minuend 4-9, subtrahend 2-4, differences 2-5 |
| **problem_count** | 6 |
| **target_count** | 4 |
| **target_speed** | 1 (slow bob) |
| **decoy_logic** | Difference ±1, difference ±2, subtrahend + minuend (sum error) |
| **assist_logic** | Number line with jump animation; hint shows finger-counting method |
| **reward_logic** | 3 stars = 5/6+ correct; 12-18 coins; "Subtraction Sleuth" badge |
| **world_theme** | Sunny Meadows - magnifying glass, detective hat on archer |
| **expected_duration** | 90-120 seconds |
| **parent_facing_meaning** | "Your child is becoming fluent in subtraction up to 5" |

**Exact Problems:**
| # | Equation | Correct | Decoy A | Decoy B | Decoy C |
|---|----------|---------|---------|---------|---------|
| 1 | 7 - 3 = ? | 4 | 5 | 3 | 10 |
| 2 | 8 - 2 = ? | 6 | 7 | 5 | 10 |
| 3 | 9 - 4 = ? | 5 | 6 | 4 | 13 |
| 4 | 6 - 2 = ? | 4 | 5 | 3 | 8 |
| 5 | 7 - 2 = ? | 5 | 6 | 4 | 9 |
| 6 | 8 - 3 = ? | 5 | 6 | 4 | 11 |

---

### Level 10: "The Math Meadow Challenge" (Boss/Mastery)

| Field | Specification |
|-------|---------------|
| **level_id** | 10 |
| **level_title** | The Math Meadow Challenge |
| **learning_goal** | Demonstrate mastery of all World 1 skills: recognition, addition, subtraction |
| **operation_type** | mixed (recognition + addition + subtraction) |
| **number_range** | Recognition 1-10, Addition sums 2-8, Subtraction differences 1-5 |
| **problem_count** | 8 |
| **target_count** | 4 |
| **target_speed** | 2 (medium bob - more noticeable movement) |
| **decoy_logic** | Adaptive based on problem type; includes all previous decoy strategies |
| **assist_logic** | Limited assists - only 2 hints available; visual aids disabled after problem 4 |
| **reward_logic** | 3 stars = 7/8+ correct; 20 coins; "World 1 Champion" trophy; unlocks World 2 preview |
| **world_theme** | Sunny Meadows - golden hour, celebration atmosphere, rainbow appears |
| **expected_duration** | 120-150 seconds |
| **parent_facing_meaning** | "Your child mastered all math skills in Sunny Meadows!" |

**Exact Problems:**
| # | Type | Problem | Correct | Decoy A | Decoy B | Decoy C |
|---|------|---------|---------|---------|---------|---------|
| 1 | recognition | "Find the number 9" | 9 | 6 | 10 | 7 |
| 2 | addition | 4 + 3 = ? | 7 | 8 | 6 | 12 |
| 3 | subtraction | 7 - 2 = ? | 5 | 6 | 4 | 9 |
| 4 | addition | 2 + 5 = ? | 7 | 6 | 8 | 10 |
| 5 | recognition | "Find the number 4" | 4 | 5 | 3 | 7 |
| 6 | subtraction | 8 - 3 = ? | 5 | 6 | 4 | 11 |
| 7 | addition | 3 + 3 = ? | 6 | 5 | 7 | 9 |
| 8 | subtraction | 6 - 2 = ? | 4 | 5 | 3 | 8 |

---

## Free Levels Summary Table

| Level | Title | Type | Range | Problems | Duration | Key Skill |
|-------|-------|------|-------|----------|----------|-----------|
| 1 | Meet the Numbers | Recognition | 1-3 | 3 | 45-60s | Number ID |
| 2 | Counting Friends | Recognition | 1-5 | 4 | 60-75s | Number ID |
| 3 | Number Garden | Recognition | 1-10 | 5 | 75-90s | Number ID |
| 4 | First Addition | Addition | 2-4 | 4 | 60-90s | Addition intro |
| 5 | Adding Up | Addition | 3-6 | 5 | 75-100s | Addition practice |
| 6 | Sum Safari | Addition | 3-8 | 6 | 90-120s | Addition mastery |
| 7 | Take Away | Subtraction | 1-2 | 4 | 60-90s | Subtraction intro |
| 8 | Subtracting Stars | Subtraction | 1-4 | 5 | 75-100s | Subtraction practice |
| 9 | Difference Detectives | Subtraction | 2-5 | 6 | 90-120s | Subtraction mastery |
| 10 | Math Meadow Challenge | Mixed | All | 8 | 120-150s | Boss level |

---

## Free Progression Flowchart

```
Level 1 (Tutorial) → Level 2 (Practice) → Level 3 (Focus)
     ↓                      ↓                    ↓
  [Recognition 1-3]    [Recognition 1-5]   [Recognition 1-10]
     ↓                      ↓                    ↓
     └──────────────────────┴────────────────────┘
                          ↓
              Level 4 (Tutorial - Addition)
                          ↓
              Level 5 (Practice - Addition)
                          ↓
              Level 6 (Focus - Addition)
                          ↓
              Level 7 (Tutorial - Subtraction)
                          ↓
              Level 8 (Practice - Subtraction)
                          ↓
              Level 9 (Focus - Subtraction)
                          ↓
              Level 10 (BOSS - Mixed Mastery)
                          ↓
              [Unlock World 2 Preview + Premium CTA]
```

---

# OUTPUT 9 - PREMIUM 90 LEVELS STRUCTURE

## Premium Access Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    PREMIUM ACCESS FLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Complete Level 10 (Free)                                │
│           ↓                                                 │
│  2. Dialog: "Chat with @DenisBrandMenedjer for Premium!"   │
│           ↓                                                 │
│  3. User opens Telegram, messages founder                   │
│           ↓                                                 │
│  4. Founder manually sends: game.com/premium?token=XYZ     │
│           ↓                                                 │
│  5. User visits premium page → Loads 90 levels             │
│           ↓                                                 │
│  6. Worlds 2-10 unlocked!                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## World Allocation (10 Worlds × 10 Levels = 100 Total)

| World | Name | Theme | Math Focus | Level Range |
|-------|------|-------|------------|-------------|
| 1 | Sunny Meadows | Meadow/Forest | Recognition, +, - (intro) | 1-10 (FREE) |
| 2 | Crystal Caves | Cave/Crystals | Addition to 10 | 11-20 |
| 3 | Starlight Summit | Mountain/Night | Subtraction to 10 | 21-30 |
| 4 | Bubble Bay | Ocean/Beach | Mixed +/- to 10 | 31-40 |
| 5 | Windy Cliffs | Cliffs/Clouds | Addition to 15 | 41-50 |
| 6 | Magma Mines | Volcano/Lava | Subtraction to 15 | 51-60 |
| 7 | Frost Falls | Ice/Waterfall | Mixed +/- to 15 | 61-70 |
| 8 | Thunder Plateau | Storm/Sky | Addition to 20 | 71-80 |
| 9 | Shadow Ravine | Canyon/Dusk | Subtraction to 20 | 81-90 |
| 10 | Rainbow Peak | Rainbow/Sky | Mixed mastery 0-20 | 91-100 |

---

## Level Template System

Each world uses 6 level templates in rotation:

| Template | Description | Position in World |
|----------|-------------|-------------------|
| **Tutorial** | Introduces new concept with heavy assistance | Level X1 |
| **Practice** | Builds fluency with moderate assistance | Level X2, X5 |
| **Focus** | Concentrated practice, fewer assists | Level X3, X6 |
| **Speed** | Timed challenges for automaticity | Level X4 |
| **Mastery** | Comprehensive review of world skills | Level X9 |
| **Challenge** | Boss level - tests all world skills | Level X0 |

**World Template Pattern:**
```
Level X1: Tutorial  → New concept introduction
Level X2: Practice  → Skill building
Level X3: Focus     → Concentrated practice
Level X4: Speed     → Timed challenge
Level X5: Practice  → More skill building
Level X6: Focus     → Advanced practice
Level X7: Tutorial  → Next concept intro
Level X8: Practice  → Integration practice
Level X9: Mastery   → World skill review
Level X0: Challenge → Boss battle
```

---

## Math Progression Across 100 Levels

### Addition Progression

| World | Level Range | Addend Range | Sum Range | Focus |
|-------|-------------|--------------|-----------|-------|
| 1 | 4-6, 10 | 1-5 | 2-8 | Introduction |
| 2 | 11-20 | 1-9 | 2-10 | To 10 mastery |
| 4 | 31-40 | 0-10 | 0-10 | Mixed practice |
| 5 | 41-50 | 1-12 | 3-15 | To 15 |
| 7 | 61-70 | 0-15 | 0-15 | Mixed to 15 |
| 8 | 71-80 | 1-18 | 3-20 | To 20 |
| 10 | 91-100 | 0-20 | 0-20 | Full mastery |

### Subtraction Progression

| World | Level Range | Minuend Range | Difference Range | Focus |
|-------|-------------|---------------|------------------|-------|
| 1 | 7-9, 10 | 2-9 | 1-5 | Introduction |
| 3 | 21-30 | 2-10 | 1-9 | To 10 mastery |
| 4 | 31-40 | 0-10 | 0-10 | Mixed practice |
| 6 | 51-60 | 3-15 | 1-12 | To 15 |
| 7 | 61-70 | 0-15 | 0-15 | Mixed to 15 |
| 9 | 81-90 | 4-20 | 1-16 | To 20 |
| 10 | 91-100 | 0-20 | 0-20 | Full mastery |

---

## Detailed Premium World Specifications

### World 2: Crystal Caves (Levels 11-20)
**Theme:** Underground caves with glowing crystals, bioluminescent creatures
**Math Focus:** Addition facts to 10 mastery

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 11 | Tutorial | Cave of Sums | + with 0 and 1 | 4 | 0 |
| 12 | Practice | Crystal Calculations | Sums 5-7 | 5 | 1 |
| 13 | Focus | Glowing Equations | Sums 6-8 | 5 | 1 |
| 14 | Speed | Rapid Refraction | Sums 4-8 (timed) | 8 | 2 |
| 15 | Practice | Stalactite Sums | Sums 7-9 | 5 | 1 |
| 16 | Focus | Bioluminescent Math | Sums 8-10 | 6 | 1 |
| 17 | Tutorial | Double Digits | Doubles (2+2, 3+3, etc.) | 5 | 0 |
| 18 | Practice | Gemstone Addition | Mixed sums to 10 | 6 | 1 |
| 19 | Mastery | Crystal Clear | All addition to 10 | 8 | 2 |
| 20 | Challenge | The Diamond Defender | Boss: addition to 10 | 10 | 2 |

---

### World 3: Starlight Summit (Levels 21-30)
**Theme:** Mountain peak at night, stars, aurora borealis
**Math Focus:** Subtraction facts to 10 mastery

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 21 | Tutorial | Starry Subtraction | - with 0 and 1 | 4 | 0 |
| 22 | Practice | Mountain Minus | Differences 3-5 | 5 | 1 |
| 23 | Focus | Aurora Arithmetic | Differences 4-6 | 5 | 1 |
| 24 | Speed | Shooting Star Speed | Differences 3-6 (timed) | 8 | 2 |
| 25 | Practice | Summit Subtract | Differences 5-7 | 5 | 1 |
| 26 | Focus | Night Sky Numbers | Differences 6-8 | 6 | 1 |
| 27 | Tutorial | Counting Back | Count-back strategy | 5 | 0 |
| 28 | Practice | Lunar Logic | Mixed subtraction to 10 | 6 | 1 |
| 29 | Mastery | Peak Performance | All subtraction to 10 | 8 | 2 |
| 30 | Challenge | The Comet Conqueror | Boss: subtraction to 10 | 10 | 2 |

---

### World 4: Bubble Bay (Levels 31-40)
**Theme:** Underwater ocean scene, fish, bubbles, coral
**Math Focus:** Mixed addition and subtraction to 10

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 31 | Tutorial | Bubble Basics | Mixed +/- (easy) | 5 | 0 |
| 32 | Practice | Fishy Facts | Mixed +/- | 6 | 1 |
| 33 | Focus | Coral Calculations | Mixed +/- | 6 | 1 |
| 34 | Speed | Rapid Reef | Mixed +/- (timed) | 10 | 2 |
| 35 | Practice | Ocean Operations | Mixed +/- | 6 | 1 |
| 36 | Focus | Deep Sea Digits | Mixed +/- (harder) | 7 | 1 |
| 37 | Tutorial | Fact Families | Related facts (3+4=7, 7-4=3) | 5 | 0 |
| 38 | Practice | Wave Workouts | Mixed +/- | 7 | 1 |
| 39 | Mastery | Bubble Mastery | All +/- to 10 | 10 | 2 |
| 40 | Challenge | The Kraken Keeper | Boss: mixed to 10 | 12 | 3 |

---

### World 5: Windy Cliffs (Levels 41-50)
**Theme:** High cliffs, wind, clouds, flying creatures
**Math Focus:** Addition to 15

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 41 | Tutorial | Cliff Climbing | + to 11-12 | 5 | 0 |
| 42 | Practice | Breezy Addition | Sums 10-12 | 6 | 1 |
| 43 | Focus | Gusty Sums | Sums 11-13 | 6 | 1 |
| 44 | Speed | Windy Whiz | Sums 10-13 (timed) | 10 | 2 |
| 45 | Practice | Cloud Calculations | Sums 12-14 | 6 | 1 |
| 46 | Focus | Sky High Sums | Sums 13-15 | 7 | 1 |
| 47 | Tutorial | Making Tens | 10 + n strategy | 5 | 0 |
| 48 | Practice | Feathered Facts | Mixed sums to 15 | 7 | 1 |
| 49 | Mastery | Cliff Champion | All addition to 15 | 10 | 2 |
| 50 | Challenge | The Eagle Encounter | Boss: addition to 15 | 12 | 3 |

---

### World 6: Magma Mines (Levels 51-60)
**Theme:** Underground volcano, lava flows, heat, fire creatures
**Math Focus:** Subtraction to 15

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 51 | Tutorial | Lava Launch | - to 11-12 | 5 | 0 |
| 52 | Practice | Magma Minus | Differences 8-10 | 6 | 1 |
| 53 | Focus | Heat Subtract | Differences 9-11 | 6 | 1 |
| 54 | Speed | Eruption Express | Differences 8-11 (timed) | 10 | 2 |
| 55 | Practice | Volcanic Values | Differences 10-12 | 6 | 1 |
| 56 | Focus | Fiery Facts | Differences 11-15 | 7 | 1 |
| 57 | Tutorial | Count Up Strategy | Finding difference by counting up | 5 | 0 |
| 58 | Practice | Ember Equations | Mixed subtraction to 15 | 7 | 1 |
| 59 | Mastery | Magma Master | All subtraction to 15 | 10 | 2 |
| 60 | Challenge | The Dragon Duel | Boss: subtraction to 15 | 12 | 3 |

---

### World 7: Frost Falls (Levels 61-70)
**Theme:** Frozen waterfall, ice, snow, winter creatures
**Math Focus:** Mixed addition and subtraction to 15

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 61 | Tutorial | Frozen Formulas | Mixed +/- to 12 | 6 | 0 |
| 62 | Practice | Icy Operations | Mixed +/- to 13 | 6 | 1 |
| 63 | Focus | Snowy Sums | Mixed +/- to 14 | 7 | 1 |
| 64 | Speed | Avalanche Attack | Mixed +/- to 15 (timed) | 10 | 2 |
| 65 | Practice | Blizzard Basics | Mixed +/- to 15 | 7 | 1 |
| 66 | Focus | Winter Workouts | Mixed +/- (harder) | 7 | 1 |
| 67 | Tutorial | Ice Strategy | Choosing operation | 6 | 0 |
| 68 | Practice | Polar Problems | Mixed +/- to 15 | 8 | 1 |
| 69 | Mastery | Frost Fighter | All +/- to 15 | 10 | 2 |
| 70 | Challenge | The Yeti Battle | Boss: mixed to 15 | 12 | 3 |

---

### World 8: Thunder Plateau (Levels 71-80)
**Theme:** Stormy plateau, lightning, rain, dramatic sky
**Math Focus:** Addition to 20 mastery

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 71 | Tutorial | Stormy Sums | + to 16-17 | 6 | 0 |
| 72 | Practice | Lightning Addition | Sums 14-16 | 6 | 1 |
| 73 | Focus | Thunder Totals | Sums 15-17 | 7 | 1 |
| 74 | Speed | Rapid Rain | Sums 14-17 (timed) | 10 | 2 |
| 75 | Practice | Cloud Burst | Sums 16-18 | 7 | 1 |
| 76 | Focus | Electric Equations | Sums 17-20 | 8 | 1 |
| 77 | Tutorial | Doubles to 20 | 10+10, 9+9, etc. | 6 | 0 |
| 78 | Practice | Storm Surge | Mixed sums to 20 | 8 | 1 |
| 79 | Mastery | Thunder Titan | All addition to 20 | 10 | 2 |
| 80 | Challenge | The Lightning Lord | Boss: addition to 20 | 12 | 3 |

---

### World 9: Shadow Ravine (Levels 81-90)
**Theme:** Dark canyon, shadows, dusk, mysterious creatures
**Math Focus:** Subtraction to 20 mastery

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 81 | Tutorial | Shadow Subtract | - to 16-17 | 6 | 0 |
| 82 | Practice | Canyon Calculations | Differences 12-14 | 6 | 1 |
| 83 | Focus | Dusk Differences | Differences 13-15 | 7 | 1 |
| 84 | Speed | Rapid Ravine | Differences 12-15 (timed) | 10 | 2 |
| 85 | Practice | Twilight Takeaway | Differences 14-16 | 7 | 1 |
| 86 | Focus | Mystery Minus | Differences 15-20 | 8 | 1 |
| 87 | Tutorial | Near Doubles | Using doubles to subtract | 6 | 0 |
| 88 | Practice | Shadow Solver | Mixed subtraction to 20 | 8 | 1 |
| 89 | Mastery | Ravine Ruler | All subtraction to 20 | 10 | 2 |
| 90 | Challenge | The Phantom Fight | Boss: subtraction to 20 | 12 | 3 |

---

### World 10: Rainbow Peak (Levels 91-100)
**Theme:** Mountain peak with rainbow, celebration, ultimate challenge
**Math Focus:** Complete mastery of addition and subtraction 0-20

| Level | Template | Title | Math Focus | Problem Count | Target Speed |
|-------|----------|-------|------------|---------------|--------------|
| 91 | Tutorial | Rainbow Review | Mixed +/- review | 8 | 0 |
| 92 | Practice | Colorful Calculations | Mixed +/- to 20 | 8 | 1 |
| 93 | Focus | Prism Problems | Mixed +/- (all ranges) | 8 | 1 |
| 94 | Speed | Spectrum Speed | Mixed +/- (timed) | 12 | 2 |
| 95 | Practice | Hue Hunt | Mixed +/- challenging | 8 | 1 |
| 96 | Focus | Chroma Challenge | Mixed +/- advanced | 9 | 1 |
| 97 | Tutorial | Final Formulas | Missing number problems | 8 | 0 |
| 98 | Practice | Rainbow Rush | Mixed +/- all types | 9 | 1 |
| 99 | Mastery | Peak Perfection | Ultimate +/- mastery | 12 | 2 |
| 100 | Challenge | The Rainbow Guardian | FINAL BOSS | 15 | 3 |

---

## Milestone Levels (Every 10th Level)

| Milestone | Level | Name | Reward | Special Feature |
|-----------|-------|------|--------|-----------------|
| World 1 | 10 | Math Meadow Challenge | World 1 Trophy | Unlocks World 2 preview |
| World 2 | 20 | Diamond Defender | Crystal Crown | +50 bonus coins |
| World 3 | 30 | Comet Conqueror | Star Scepter | +50 bonus coins |
| World 4 | 40 | Kraken Keeper | Pearl Pendant | +75 bonus coins |
| World 5 | 50 | Eagle Encounter | Wind Wings | +75 bonus coins |
| World 6 | 60 | Dragon Duel | Flame Heart | +100 bonus coins |
| World 7 | 70 | Yeti Battle | Ice Crown | +100 bonus coins |
| World 8 | 80 | Lightning Lord | Storm Badge | +125 bonus coins |
| World 9 | 90 | Phantom Fight | Shadow Cloak | +125 bonus coins |
| World 10 | 100 | Rainbow Guardian | Math Master Crown | +200 bonus coins, Game Complete |

---

## Challenge Level Specifications

All Challenge levels (10, 20, 30, 40, 50, 60, 70, 80, 90, 100) share these characteristics:

| Attribute | Specification |
|-----------|---------------|
| **Problem Count** | 10-15 (increasing per world) |
| **Target Count** | 4-5 |
| **Target Speed** | 2-3 (medium to fast) |
| **Assist Logic** | Limited hints (2-3 max), no visual aids after halfway |
| **Decoy Logic** | All decoy types combined |
| **Time Pressure** | Optional timer for bonus stars |
| **Reward** | Trophy + bonus coins + unlock next world |
| **Retry Logic** | Can retry unlimited, but must beat to progress |

---

## Mastery Level Specifications

All Mastery levels (9, 19, 29, 39, 49, 59, 69, 79, 89, 99) share these characteristics:

| Attribute | Specification |
|-----------|---------------|
| **Problem Count** | 8-12 |
| **Target Count** | 4 |
| **Target Speed** | 2 (medium) |
| **Assist Logic** | Moderate assists available |
| **Decoy Logic** | Comprehensive - tests all concepts |
| **Purpose** | Review all skills before Challenge level |
| **Reward** | Badge + standard coins |

---

## Speed Level Specifications

All Speed levels (14, 24, 34, 44, 54, 64, 74, 84, 94) share these characteristics:

| Attribute | Specification |
|-----------|---------------|
| **Problem Count** | 8-12 |
| **Target Count** | 4 |
| **Target Speed** | 2 (medium) |
| **Time Limit** | 60-90 seconds for all problems |
| **Assist Logic** | Minimal - builds automaticity |
| **Reward** | Time bonus coins + speed badge |
| **Star Logic** | 3 stars = all correct within time; 2 stars = 80%+ within time; 1 star = complete |

---

## Difficulty Curve Visualization

```
Difficulty
    │
100 ┤                                    ★ L100
    │                              ★ L90
 80 ┤                        ★ L80
    │                  ★ L70
 60 ┤            ★ L60
    │      ★ L50
 40 ┤ ★ L40
    │★ L30
 20 ┤★ L20
    │★ L10
  0 ┼────┬────┬────┬────┬────┬────┬────┬────┬────┬────
    W1   W2   W3   W4   W5   W6   W7   W8   W9   W10

    ★ = Challenge Level (Boss)
```

---

## Premium Level Decoy Logic by World

| World | Decoy Types Used |
|-------|------------------|
| 1 | ±1, ±2, visually similar |
| 2 | ±1, ±2, reverse digits, sum of addends |
| 3 | ±1, ±2, minuend repeat, sum error |
| 4 | All above + operation confusion |
| 5 | All above + decade boundary errors |
| 6 | All above + borrowing confusion |
| 7 | All above + mixed operation errors |
| 8 | All above + near-miss doubles |
| 9 | All above + larger number errors |
| 10 | All decoy types at maximum difficulty |

---

## Reward Economy (Premium)

| Action | Coin Reward |
|--------|-------------|
| Complete Tutorial level | 10 coins |
| Complete Practice level | 10-15 coins |
| Complete Focus level | 12-18 coins |
| Complete Speed level | 15-25 coins (time bonus) |
| Complete Mastery level | 15-20 coins |
| Complete Challenge level | 20-30 coins + trophy |
| 3-star any level | +5 bonus coins |
| Perfect streak (5+) | +10 bonus coins |
| Daily login | 50 coins |

---

## Parent Dashboard Data Points

For each premium level completed, parents see:

| Data Point | Description |
|------------|-------------|
| **Level Completed** | Name and number |
| **Skills Practiced** | Specific math facts covered |
| **Accuracy** | Percentage correct |
| **Time Spent** | Duration to complete |
| **Assists Used** | How much help was needed |
| **Mastery Status** | Beginning/Developing/Secure |
| **Next Skills** | What comes next in progression |

---

## Technical Implementation Notes

### Level Data Structure

```javascript
const levelSchema = {
  level_id: Number,           // 1-100
  world_id: Number,           // 1-10
  template_type: String,      // 'tutorial'|'practice'|'focus'|'speed'|'mastery'|'challenge'
  title: String,
  learning_goal: String,
  operation_types: [String],  // ['recognition', 'addition', 'subtraction']
  number_range: {
    min: Number,
    max: Number
  },
  problem_count: Number,
  target_count: Number,
  target_speed: Number,       // 0-3
  decoy_logic: [String],
  assist_logic: [String],
  reward_logic: {
    base_coins: Number,
    star_bonus: Number,
    streak_bonus: Number
  },
  time_limit: Number,         // seconds (0 = no limit)
  exact_problems: [Object]    // Predefined or generated
};
```

### Level Generation vs. Predefined

| Level Type | Generation Method |
|------------|-------------------|
| Tutorial | Predefined exact problems |
| Practice | Predefined with slight variation |
| Focus | Algorithmic generation within constraints |
| Speed | Algorithmic generation |
| Mastery | Algorithmic generation covering all skills |
| Challenge | Predefined exact problems |

---

## Summary

### Free Levels (1-10)
- **World 1: Sunny Meadows** - Complete introduction to number recognition, addition, and subtraction
- 3 Recognition levels → 3 Addition levels → 3 Subtraction levels → 1 Mixed boss level
- Gentle difficulty curve with heavy assistance early
- Designed to hook players and demonstrate value

### Premium Levels (11-100)
- **9 Worlds** with distinct themes and progressive math difficulty
- **6 Level Templates** create variety and engagement
- **Math Progression**: Addition to 10 → Subtraction to 10 → Mixed to 10 → Addition to 15 → Subtraction to 15 → Mixed to 15 → Addition to 20 → Subtraction to 20 → Mixed Mastery
- **Milestone Rewards** every 10 levels maintain motivation
- **Challenge Levels** test true mastery before progression
- **Speed Levels** build automaticity and fluency

---

*Document Version: 1.0*
*Created for Numeria Archery Educational Game*
