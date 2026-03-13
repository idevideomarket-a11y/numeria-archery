# OUTPUT 4 - GAME ENGINE IMPLEMENTATION PLAN
## Numeria Archery - Technical Specification

---

## 1. GAME STATE MACHINE

### 1.1 State Enumeration

```typescript
enum GameState {
  // Initialization
  BOOT = 'BOOT',                    // Engine initialization, asset loading
  LOADING = 'LOADING',              // Level/world data loading
  
  // Menu States
  MAIN_MENU = 'MAIN_MENU',          // Title screen with play/options
  WORLD_SELECT = 'WORLD_SELECT',    // World map selection
  LEVEL_SELECT = 'LEVEL_SELECT',    // Level grid for selected world
  SETTINGS = 'SETTINGS',            // Audio, accessibility options
  
  // Gameplay States
  PLAYING = 'PLAYING',              // Active gameplay
  PAUSED = 'PAUSED',                // Game paused
  PROBLEM_INTRO = 'PROBLEM_INTRO',  // New problem presentation
  AIMING = 'AIMING',                // Player aiming (sub-state of PLAYING)
  ARROW_FLIGHT = 'ARROW_FLIGHT',    // Arrow in motion
  FEEDBACK = 'FEEDBACK',            // Showing correct/wrong result
  
  // Completion States
  LEVEL_COMPLETE = 'LEVEL_COMPLETE', // Level finished, show stars
  WORLD_COMPLETE = 'WORLD_COMPLETE', // All levels in world done
  STAGE_TRANSITION = 'STAGE_TRANSITION', // Between problems
  
  // End States
  GAME_OVER = 'GAME_OVER',          // Out of arrows (if applicable)
  VICTORY = 'VICTORY',              // All worlds completed
}
```

### 1.2 State Transition Map

```typescript
interface StateTransition {
  from: GameState;
  to: GameState;
  trigger: string;
  condition?: () => boolean;
}

const VALID_TRANSITIONS: StateTransition[] = [
  // Boot sequence
  { from: GameState.BOOT, to: GameState.LOADING, trigger: 'init_complete' },
  { from: GameState.LOADING, to: GameState.MAIN_MENU, trigger: 'assets_loaded' },
  
  // Menu navigation
  { from: GameState.MAIN_MENU, to: GameState.WORLD_SELECT, trigger: 'play_clicked' },
  { from: GameState.MAIN_MENU, to: GameState.SETTINGS, trigger: 'settings_clicked' },
  { from: GameState.WORLD_SELECT, to: GameState.LEVEL_SELECT, trigger: 'world_selected' },
  { from: GameState.WORLD_SELECT, to: GameState.MAIN_MENU, trigger: 'back_clicked' },
  { from: GameState.LEVEL_SELECT, to: GameState.PLAYING, trigger: 'level_selected' },
  { from: GameState.LEVEL_SELECT, to: GameState.WORLD_SELECT, trigger: 'back_clicked' },
  { from: GameState.SETTINGS, to: GameState.MAIN_MENU, trigger: 'back_clicked' },
  
  // Gameplay flow
  { from: GameState.PLAYING, to: GameState.PAUSED, trigger: 'pause_clicked' },
  { from: GameState.PAUSED, to: GameState.PLAYING, trigger: 'resume_clicked' },
  { from: GameState.PAUSED, to: GameState.LEVEL_SELECT, trigger: 'quit_clicked' },
  
  // Problem progression
  { from: GameState.PLAYING, to: GameState.ARROW_FLIGHT, trigger: 'arrow_fired' },
  { from: GameState.ARROW_FLIGHT, to: GameState.FEEDBACK, trigger: 'target_hit' },
  { from: GameState.ARROW_FLIGHT, to: GameState.PLAYING, trigger: 'arrow_missed' },
  { from: GameState.FEEDBACK, to: GameState.PLAYING, trigger: 'next_problem' },
  { from: GameState.FEEDBACK, to: GameState.LEVEL_COMPLETE, trigger: 'level_complete' },
  
  // Completion flow
  { from: GameState.LEVEL_COMPLETE, to: GameState.LEVEL_SELECT, trigger: 'continue_clicked' },
  { from: GameState.LEVEL_COMPLETE, to: GameState.PLAYING, trigger: 'replay_clicked' },
  { from: GameState.LEVEL_COMPLETE, to: GameState.WORLD_SELECT, trigger: 'world_map_clicked' },
];
```

### 1.3 State Manager Implementation

```typescript
interface IStateManager {
  currentState: GameState;
  previousState: GameState;
  stateHistory: GameState[];
  
  transitionTo(state: GameState, data?: any): boolean;
  canTransitionTo(state: GameState): boolean;
  goBack(): boolean;
  getStateData(): any;
  
  onStateEnter: EventEmitter<GameState>;
  onStateExit: EventEmitter<GameState>;
  onTransition: EventEmitter<{from: GameState, to: GameState}>;
}

class StateManager implements IStateManager {
  private stateStack: GameState[] = [];
  private stateData: Map<GameState, any> = new Map();
  
  transitionTo(newState: GameState, data?: any): boolean {
    if (!this.canTransitionTo(newState)) {
      console.warn(`Invalid transition: ${this.currentState} -> ${newState}`);
      return false;
    }
    
    this.onStateExit.emit(this.currentState);
    this.stateStack.push(this.currentState);
    this.previousState = this.currentState;
    this.currentState = newState;
    
    if (data) {
      this.stateData.set(newState, data);
    }
    
    this.onStateEnter.emit(newState);
    this.onTransition.emit({ from: this.previousState, to: newState });
    
    return true;
  }
}
```

---

## 2. PROBLEM DISPLAY LOGIC

### 2.1 Problem Structure

```typescript
interface MathProblem {
  id: string;
  type: ProblemType;
  difficulty: DifficultyLevel;
  
  // Problem components
  operandA: number;
  operandB: number;
  operator: Operator;
  correctAnswer: number;
  
  // Display format
  displayFormat: DisplayFormat;
  visualAid?: VisualAidType;
  
  // Wrong answers for target generation
  distractors: number[];
  
  // Metadata
  hint?: string;
  timeLimit?: number; // seconds, null = no limit
}

enum ProblemType {
  ADDITION = 'ADDITION',
  SUBTRACTION = 'SUBTRACTION',
  MISSING_ADDEND = 'MISSING_ADDEND',      // ? + 3 = 5
  MISSING_SUBTRAHEND = 'MISSING_SUBTRAHEND', // 5 - ? = 2
  COMPARISON = 'COMPARISON',              // Which is bigger: 4 or 7?
  SEQUENCE = 'SEQUENCE',                  // What comes next: 2, 4, 6, ?
}

enum Operator {
  PLUS = '+',
  MINUS = '-',
  EQUALS = '=',
  QUESTION = '?',
}

enum DisplayFormat {
  STANDARD = 'STANDARD',        // 3 + 4 = ?
  HORIZONTAL = 'HORIZONTAL',    // 3 + 4 = __
  VISUAL_BLOCKS = 'VISUAL_BLOCKS', // [ooo] + [oooo] = ?
  NUMBER_LINE = 'NUMBER_LINE',  // Show on number line
  WORD_PROBLEM = 'WORD_PROBLEM', // "Sally has 3 apples..."
}

enum VisualAidType {
  NONE = 'NONE',
  COUNTING_BLOCKS = 'COUNTING_BLOCKS',
  FINGERS = 'FINGERS',
  NUMBER_LINE = 'NUMBER_LINE',
  TEN_FRAME = 'TEN_FRAME',
  GROUPS = 'GROUPS',            // Groups of objects
}
```

### 2.2 Problem Display Manager

```typescript
interface IProblemDisplayManager {
  currentProblem: MathProblem | null;
  displayElement: HTMLElement;
  
  // Display methods
  showProblem(problem: MathProblem): void;
  clearDisplay(): void;
  updateDisplayFormat(format: DisplayFormat): void;
  
  // Visual aid methods
  showVisualAid(type: VisualAidType): void;
  hideVisualAid(): void;
  
  // Animation
  animateProblemEntrance(): Promise<void>;
  animateProblemSolved(): Promise<void>;
  
  // Accessibility
  readProblemAloud(): void;
  showHint(): void;
}

class ProblemDisplayManager implements IProblemDisplayManager {
  private problemContainer: HTMLElement;
  private visualAidContainer: HTMLElement;
  private textDisplay: HTMLElement;
  
  showProblem(problem: MathProblem): void {
    this.currentProblem = problem;
    
    switch (problem.displayFormat) {
      case DisplayFormat.STANDARD:
        this.renderStandardFormat(problem);
        break;
      case DisplayFormat.VISUAL_BLOCKS:
        this.renderVisualBlocksFormat(problem);
        break;
      case DisplayFormat.NUMBER_LINE:
        this.renderNumberLineFormat(problem);
        break;
      case DisplayFormat.WORD_PROBLEM:
        this.renderWordProblemFormat(problem);
        break;
    }
    
    if (problem.visualAid && problem.visualAid !== VisualAidType.NONE) {
      this.showVisualAid(problem.visualAid);
    }
    
    this.animateProblemEntrance();
  }
  
  private renderStandardFormat(problem: MathProblem): void {
    const html = `
      <div class="problem-display">
        <span class="operand">${problem.operandA}</span>
        <span class="operator">${problem.operator}</span>
        <span class="operand">${problem.operandB}</span>
        <span class="operator">=</span>
        <span class="question-mark">?</span>
      </div>
    `;
    this.textDisplay.innerHTML = html;
  }
  
  private renderVisualBlocksFormat(problem: MathProblem): void {
    const blockA = '●'.repeat(problem.operandA);
    const blockB = '●'.repeat(problem.operandB);
    
    const html = `
      <div class="problem-display visual">
        <div class="block-group">${blockA}</div>
        <span class="operator">${problem.operator}</span>
        <div class="block-group">${blockB}</div>
        <span class="operator">=</span>
        <span class="question-mark">?</span>
      </div>
    `;
    this.textDisplay.innerHTML = html;
  }
}
```

### 2.3 Problem Generator

```typescript
interface IProblemGenerator {
  generateProblem(config: ProblemConfig): MathProblem;
  generateProblemSet(level: LevelConfig): MathProblem[];
  validateProblem(problem: MathProblem): boolean;
}

interface ProblemConfig {
  type: ProblemType;
  difficulty: DifficultyLevel;
  maxNumber: number;
  allowZero: boolean;
  requireVisualAid: boolean;
}

class ProblemGenerator implements IProblemGenerator {
  generateProblem(config: ProblemConfig): MathProblem {
    let operandA: number;
    let operandB: number;
    let correctAnswer: number;
    
    switch (config.type) {
      case ProblemType.ADDITION:
        operandA = this.randomNumber(1, config.maxNumber - 1, config.allowZero);
        operandB = this.randomNumber(1, config.maxNumber - operandA, config.allowZero);
        correctAnswer = operandA + operandB;
        break;
        
      case ProblemType.SUBTRACTION:
        operandA = this.randomNumber(2, config.maxNumber, config.allowZero);
        operandB = this.randomNumber(1, operandA, config.allowZero);
        correctAnswer = operandA - operandB;
        break;
        
      case ProblemType.MISSING_ADDEND:
        operandA = this.randomNumber(1, config.maxNumber - 1, config.allowZero);
        correctAnswer = this.randomNumber(1, config.maxNumber - operandA, config.allowZero);
        operandB = correctAnswer; // The answer is what they need to find
        correctAnswer = operandA + correctAnswer;
        break;
    }
    
    return {
      id: this.generateId(),
      type: config.type,
      difficulty: config.difficulty,
      operandA,
      operandB,
      operator: config.type === ProblemType.ADDITION ? Operator.PLUS : Operator.MINUS,
      correctAnswer,
      displayFormat: this.selectDisplayFormat(config),
      visualAid: config.requireVisualAid ? VisualAidType.COUNTING_BLOCKS : VisualAidType.NONE,
      distractors: this.generateDistractors(correctAnswer, config),
    };
  }
  
  private generateDistractors(correctAnswer: number, config: ProblemConfig): number[] {
    const distractors: number[] = [];
    const used = new Set<number>([correctAnswer]);
    
    // Common mistake: off by 1
    if (correctAnswer > 1) {
      distractors.push(correctAnswer - 1);
      used.add(correctAnswer - 1);
    }
    if (correctAnswer < config.maxNumber) {
      distractors.push(correctAnswer + 1);
      used.add(correctAnswer + 1);
    }
    
    // Common mistake: reversed digits (for 2-digit numbers)
    if (correctAnswer >= 10) {
      const reversed = parseInt(correctAnswer.toString().split('').reverse().join(''));
      if (!used.has(reversed)) {
        distractors.push(reversed);
        used.add(reversed);
      }
    }
    
    // Random distractors within range
    while (distractors.length < 5) {
      const offset = this.randomNumber(2, 5, false);
      const sign = Math.random() > 0.5 ? 1 : -1;
      const distractor = correctAnswer + (offset * sign);
      
      if (distractor >= 0 && distractor <= config.maxNumber && !used.has(distractor)) {
        distractors.push(distractor);
        used.add(distractor);
      }
    }
    
    return distractors.slice(0, 5);
  }
}
```

---

## 3. TARGET GENERATION LOGIC

### 3.1 Target Structure

```typescript
interface Target {
  id: string;
  value: number;
  position: Position;
  size: Size;
  state: TargetState;
  
  // Visual properties
  color: string;
  ringCount: number;
  hasBullseye: boolean;
  
  // Animation
  isMoving: boolean;
  movementPattern?: MovementPattern;
  
  // Metadata
  isCorrect: boolean;
  wasHit: boolean;
}

interface Position {
  x: number;  // 0-100 (percentage of play area)
  y: number;  // 0-100 (percentage of play area)
  z: number;  // depth layer
}

interface Size {
  width: number;
  height: number;
  radius: number;  // for circular targets
}

enum TargetState {
  SPAWNING = 'SPAWNING',
  IDLE = 'IDLE',
  HIGHLIGHTED = 'HIGHLIGHTED',
  HIT = 'HIT',
  DISAPPEARING = 'DISAPPEARING',
  REMOVED = 'REMOVED',
}

interface MovementPattern {
  type: MovementType;
  speed: number;
  path: Position[];
  currentPointIndex: number;
  isLooping: boolean;
}

enum MovementType {
  STATIC = 'STATIC',
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  CIRCULAR = 'CIRCULAR',
  FIGURE_EIGHT = 'FIGURE_EIGHT',
  RANDOM = 'RANDOM',
}
```

### 3.2 Target Layout Configuration

```typescript
interface TargetLayout {
  name: string;
  positions: Position[];
  minTargets: number;
  maxTargets: number;
}

const TARGET_LAYOUTS: Record<string, TargetLayout> = {
  // Simple horizontal line - Easy
  LINE_HORIZONTAL: {
    name: 'Horizontal Line',
    positions: [
      { x: 15, y: 50, z: 1 },
      { x: 35, y: 50, z: 1 },
      { x: 50, y: 50, z: 1 },
      { x: 65, y: 50, z: 1 },
      { x: 85, y: 50, z: 1 },
    ],
    minTargets: 3,
    maxTargets: 5,
  },
  
  // Arc formation - Medium
  ARC: {
    name: 'Arc Formation',
    positions: [
      { x: 15, y: 70, z: 1 },
      { x: 30, y: 55, z: 1 },
      { x: 50, y: 45, z: 1 },
      { x: 70, y: 55, z: 1 },
      { x: 85, y: 70, z: 1 },
    ],
    minTargets: 3,
    maxTargets: 5,
  },
  
  // Grid formation - Medium
  GRID_2x3: {
    name: '2x3 Grid',
    positions: [
      { x: 25, y: 35, z: 1 },
      { x: 50, y: 35, z: 1 },
      { x: 75, y: 35, z: 1 },
      { x: 25, y: 65, z: 1 },
      { x: 50, y: 65, z: 1 },
      { x: 75, y: 65, z: 1 },
    ],
    minTargets: 4,
    maxTargets: 6,
  },
  
  // Scattered - Hard
  SCATTERED: {
    name: 'Scattered',
    positions: [
      { x: 10, y: 30, z: 1 },
      { x: 30, y: 20, z: 1 },
      { x: 50, y: 35, z: 1 },
      { x: 70, y: 25, z: 1 },
      { x: 90, y: 40, z: 1 },
      { x: 20, y: 60, z: 1 },
      { x: 45, y: 70, z: 1 },
      { x: 75, y: 65, z: 1 },
    ],
    minTargets: 5,
    maxTargets: 8,
  },
  
  // Pyramid - Medium
  PYRAMID: {
    name: 'Pyramid',
    positions: [
      { x: 50, y: 25, z: 1 },
      { x: 35, y: 50, z: 1 },
      { x: 65, y: 50, z: 1 },
      { x: 20, y: 75, z: 1 },
      { x: 50, y: 75, z: 1 },
      { x: 80, y: 75, z: 1 },
    ],
    minTargets: 4,
    maxTargets: 6,
  },
};
```

### 3.3 Target Manager

```typescript
interface ITargetManager {
  targets: Target[];
  playArea: HTMLElement;
  
  // Generation
  generateTargets(problem: MathProblem, layout: TargetLayout, difficulty: DifficultyLevel): Target[];
  spawnTarget(target: Target): void;
  removeTarget(targetId: string): void;
  clearAllTargets(): void;
  
  // State management
  setTargetState(targetId: string, state: TargetState): void;
  highlightTarget(targetId: string): void;
  
  // Queries
  getTargetAtPosition(x: number, y: number): Target | null;
  getTargetByValue(value: number): Target | null;
  getCorrectTarget(): Target | null;
  
  // Animation
  animateTargetsEntrance(): Promise<void>;
  animateTargetsExit(): Promise<void>;
}

class TargetManager implements ITargetManager {
  private targetElements: Map<string, HTMLElement> = new Map();
  private targetPool: Target[] = [];
  
  generateTargets(problem: MathProblem, layout: TargetLayout, difficulty: DifficultyLevel): Target[] {
    this.clearAllTargets();
    
    const targetCount = this.determineTargetCount(difficulty, layout);
    const positions = this.selectPositions(layout, targetCount);
    const values = this.generateTargetValues(problem, targetCount);
    
    const targets: Target[] = [];
    
    for (let i = 0; i < targetCount; i++) {
      const target: Target = {
        id: `target_${i}_${Date.now()}`,
        value: values[i],
        position: positions[i],
        size: this.calculateTargetSize(difficulty, targetCount),
        state: TargetState.SPAWNING,
        color: this.getTargetColor(i, values[i] === problem.correctAnswer),
        ringCount: 3,
        hasBullseye: true,
        isMoving: this.shouldTargetMove(difficulty),
        movementPattern: this.getMovementPattern(difficulty),
        isCorrect: values[i] === problem.correctAnswer,
        wasHit: false,
      };
      
      targets.push(target);
      this.spawnTarget(target);
    }
    
    this.targets = targets;
    return targets;
  }
  
  private generateTargetValues(problem: MathProblem, count: number): number[] {
    const values: number[] = [problem.correctAnswer];
    
    // Add distractors
    const shuffledDistractors = [...problem.distractors].sort(() => Math.random() - 0.5);
    values.push(...shuffledDistractors.slice(0, count - 1));
    
    // Shuffle all values
    return values.sort(() => Math.random() - 0.5);
  }
  
  private determineTargetCount(difficulty: DifficultyLevel, layout: TargetLayout): number {
    switch (difficulty) {
      case DifficultyLevel.EASY:
        return Math.min(3, layout.maxTargets);
      case DifficultyLevel.MEDIUM:
        return Math.min(4, layout.maxTargets);
      case DifficultyLevel.HARD:
        return layout.maxTargets;
      default:
        return 3;
    }
  }
  
  private calculateTargetSize(difficulty: DifficultyLevel, targetCount: number): Size {
    // Larger targets for easier levels and fewer targets
    const baseRadius = difficulty === DifficultyLevel.EASY ? 60 : 
                       difficulty === DifficultyLevel.MEDIUM ? 50 : 40;
    
    const countMultiplier = targetCount <= 3 ? 1.2 : 
                            targetCount <= 5 ? 1.0 : 0.85;
    
    const radius = baseRadius * countMultiplier;
    
    return {
      width: radius * 2,
      height: radius * 2,
      radius,
    };
  }
  
  spawnTarget(target: Target): void {
    const element = document.createElement('div');
    element.className = 'target';
    element.id = target.id;
    element.dataset.value = target.value.toString();
    
    // Apply styles
    element.style.cssText = `
      position: absolute;
      left: ${target.position.x}%;
      top: ${target.position.y}%;
      width: ${target.size.width}px;
      height: ${target.size.height}px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: conic-gradient(
        ${target.color} 0deg,
        white 30deg,
        ${target.color} 60deg,
        white 90deg,
        ${target.color} 120deg,
        white 150deg,
        ${target.color} 180deg,
        white 210deg,
        ${target.color} 240deg,
        white 270deg,
        ${target.color} 300deg,
        white 330deg,
        ${target.color} 360deg
      );
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${target.size.radius * 0.5}px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
      user-select: none;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    `;
    
    element.textContent = target.value.toString();
    
    // Add hit zone for better child-friendly interaction
    const hitZone = document.createElement('div');
    hitZone.className = 'target-hit-zone';
    hitZone.style.cssText = `
      position: absolute;
      width: 120%;
      height: 120%;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
    element.appendChild(hitZone);
    
    this.playArea.appendChild(element);
    this.targetElements.set(target.id, element);
    
    // Animate entrance
    this.animateTargetEntrance(element);
  }
  
  getTargetAtPosition(x: number, y: number): Target | null {
    // Convert screen coordinates to percentage
    const rect = this.playArea.getBoundingClientRect();
    const percentX = ((x - rect.left) / rect.width) * 100;
    const percentY = ((y - rect.top) / rect.height) * 100;
    
    // Find target at position (with some tolerance)
    for (const target of this.targets) {
      const dx = percentX - target.position.x;
      const dy = percentY - target.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Convert radius to approximate percentage
      const radiusPercent = (target.size.radius / rect.width) * 100 * 1.5; // 1.5x for hit zone
      
      if (distance <= radiusPercent) {
        return target;
      }
    }
    
    return null;
  }
}
```

---

## 4. AIMING/SHOOTING LOGIC

### 4.1 Input System

```typescript
interface IInputSystem {
  // Input state
  isAiming: boolean;
  aimPosition: Position;
  aimDirection: Vector2D;
  aimPower: number; // 0-100
  
  // Configuration
  aimAssistEnabled: boolean;
  aimAssistStrength: number; // 0-1
  
  // Event handlers
  onAimStart: EventEmitter<Position>;
  onAimMove: EventEmitter<Position>;
  onAimEnd: EventEmitter<void>;
  onShoot: EventEmitter<ShotData>;
  
  // Methods
  enable(): void;
  disable(): void;
  setAimAssist(enabled: boolean, strength?: number): void;
}

interface ShotData {
  origin: Position;
  direction: Vector2D;
  power: number;
  timestamp: number;
}

interface Vector2D {
  x: number;
  y: number;
  magnitude: number;
  angle: number; // degrees, 0 = right, 90 = down
}

class InputSystem implements IInputSystem {
  private canvas: HTMLElement;
  private isTouch: boolean;
  
  constructor(canvas: HTMLElement) {
    this.canvas = canvas;
    this.isTouch = 'ontouchstart' in window;
    this.setupEventListeners();
  }
  
  private setupEventListeners(): void {
    if (this.isTouch) {
      this.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
      this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
      this.canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    } else {
      this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
      this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
      
      // Keyboard support for accessibility
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }
  
  private handleTouchStart(e: TouchEvent): void {
    e.preventDefault();
    const touch = e.touches[0];
    const pos = this.getPositionFromEvent(touch);
    
    this.isAiming = true;
    this.aimPosition = pos;
    this.onAimStart.emit(pos);
  }
  
  private handleTouchMove(e: TouchEvent): void {
    e.preventDefault();
    if (!this.isAiming) return;
    
    const touch = e.touches[0];
    const pos = this.getPositionFromEvent(touch);
    
    // Apply aim assist for children
    if (this.aimAssistEnabled) {
      pos.x = this.applyAimAssist(pos.x, 'x');
      pos.y = this.applyAimAssist(pos.y, 'y');
    }
    
    this.aimPosition = pos;
    this.updateAimDirection();
    this.onAimMove.emit(pos);
  }
  
  private handleTouchEnd(e: TouchEvent): void {
    e.preventDefault();
    if (!this.isAiming) return;
    
    this.fireArrow();
    this.isAiming = false;
    this.onAimEnd.emit();
  }
  
  private handleMouseDown(e: MouseEvent): void {
    const pos = this.getPositionFromEvent(e);
    this.isAiming = true;
    this.aimPosition = pos;
    this.onAimStart.emit(pos);
  }
  
  private handleMouseMove(e: MouseEvent): void {
    if (!this.isAiming) return;
    
    const pos = this.getPositionFromEvent(e);
    
    if (this.aimAssistEnabled) {
      pos.x = this.applyAimAssist(pos.x, 'x');
      pos.y = this.applyAimAssist(pos.y, 'y');
    }
    
    this.aimPosition = pos;
    this.updateAimDirection();
    this.onAimMove.emit(pos);
  }
  
  private handleMouseUp(e: MouseEvent): void {
    if (!this.isAiming) return;
    
    this.fireArrow();
    this.isAiming = false;
    this.onAimEnd.emit();
  }
  
  private handleKeyDown(e: KeyboardEvent): void {
    // Accessibility: Number keys 1-9 select targets directly
    if (e.key >= '1' && e.key <= '9') {
      const targetIndex = parseInt(e.key) - 1;
      this.selectTargetByIndex(targetIndex);
    }
    
    // Space or Enter to shoot at current aim
    if (e.key === ' ' || e.key === 'Enter') {
      if (!this.isAiming) {
        this.fireArrow();
      }
    }
  }
  
  private applyAimAssist(coordinate: number, axis: 'x' | 'y'): number {
    // Find nearest target center and gently pull aim toward it
    const targets = this.getVisibleTargets();
    let nearestDistance = Infinity;
    let nearestTarget: Target | null = null;
    
    for (const target of targets) {
      const targetCoord = axis === 'x' ? target.position.x : target.position.y;
      const distance = Math.abs(coordinate - targetCoord);
      
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestTarget = target;
      }
    }
    
    // Only apply assist if within assist radius (20% of screen)
    if (nearestTarget && nearestDistance < 20) {
      const targetCoord = axis === 'x' ? nearestTarget.position.x : nearestTarget.position.y;
      const pullStrength = this.aimAssistStrength * (1 - nearestDistance / 20);
      return coordinate + (targetCoord - coordinate) * pullStrength;
    }
    
    return coordinate;
  }
  
  private fireArrow(): void {
    const shotData: ShotData = {
      origin: { x: 50, y: 90, z: 1 }, // Bow position (bottom center)
      direction: this.aimDirection,
      power: 100, // Full power for simplicity with children
      timestamp: Date.now(),
    };
    
    this.onShoot.emit(shotData);
  }
  
  private updateAimDirection(): void {
    const bowPos = { x: 50, y: 90 };
    const dx = this.aimPosition.x - bowPos.x;
    const dy = this.aimPosition.y - bowPos.y;
    const magnitude = Math.sqrt(dx * dx + dy * dy);
    
    this.aimDirection = {
      x: dx / magnitude,
      y: dy / magnitude,
      magnitude,
      angle: Math.atan2(dy, dx) * (180 / Math.PI),
    };
  }
}
```

### 4.2 Arrow System

```typescript
interface IArrowSystem {
  activeArrows: Arrow[];
  
  // Arrow pool for performance
  arrowPool: Arrow[];
  
  // Methods
  fireArrow(shotData: ShotData): Arrow;
  updateArrows(deltaTime: number): void;
  removeArrow(arrowId: string): void;
  
  // Queries
  getArrowAtPosition(x: number, y: number): Arrow | null;
}

interface Arrow {
  id: string;
  position: Position;
  velocity: Vector2D;
  rotation: number;
  state: ArrowState;
  trail: Position[];
  maxTrailLength: number;
}

enum ArrowState {
  FIRED = 'FIRED',
  FLYING = 'FLYING',
  HIT = 'HIT',
  MISSED = 'MISSED',
  STUCK = 'STUCK',
  REMOVED = 'REMOVED',
}

class ArrowSystem implements IArrowSystem {
  private arrowSpeed: number = 80; // percent per second
  private gravity: number = 0; // No gravity for simplicity with children
  
  fireArrow(shotData: ShotData): Arrow {
    const arrow: Arrow = {
      id: `arrow_${Date.now()}`,
      position: { ...shotData.origin },
      velocity: {
        x: shotData.direction.x * this.arrowSpeed,
        y: shotData.direction.y * this.arrowSpeed,
        magnitude: this.arrowSpeed,
        angle: shotData.direction.angle,
      },
      rotation: shotData.direction.angle,
      state: ArrowState.FIRED,
      trail: [{ ...shotData.origin }],
      maxTrailLength: 10,
    };
    
    this.activeArrows.push(arrow);
    this.createArrowVisual(arrow);
    
    return arrow;
  }
  
  updateArrows(deltaTime: number): void {
    for (const arrow of this.activeArrows) {
      if (arrow.state !== ArrowState.FLYING && arrow.state !== ArrowState.FIRED) {
        continue;
      }
      
      arrow.state = ArrowState.FLYING;
      
      // Update position
      arrow.position.x += arrow.velocity.x * deltaTime;
      arrow.position.y += arrow.velocity.y * deltaTime;
      
      // Update trail
      arrow.trail.push({ ...arrow.position });
      if (arrow.trail.length > arrow.maxTrailLength) {
        arrow.trail.shift();
      }
      
      // Update visual
      this.updateArrowVisual(arrow);
      
      // Check bounds
      if (this.isOutOfBounds(arrow.position)) {
        arrow.state = ArrowState.MISSED;
        this.handleMiss(arrow);
      }
    }
    
    // Clean up removed arrows
    this.activeArrows = this.activeArrows.filter(a => a.state !== ArrowState.REMOVED);
  }
  
  private createArrowVisual(arrow: Arrow): void {
    const element = document.createElement('div');
    element.className = 'arrow';
    element.id = arrow.id;
    element.style.cssText = `
      position: absolute;
      width: 40px;
      height: 8px;
      background: linear-gradient(to right, #8B4513, #D2691E);
      border-radius: 0 4px 4px 0;
      transform-origin: left center;
      pointer-events: none;
      z-index: 100;
    `;
    
    // Arrow head
    const head = document.createElement('div');
    head.style.cssText = `
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 12px solid #666;
    `;
    element.appendChild(head);
    
    document.body.appendChild(element);
  }
  
  private updateArrowVisual(arrow: Arrow): void {
    const element = document.getElementById(arrow.id);
    if (!element) return;
    
    const rect = this.playArea.getBoundingClientRect();
    const screenX = rect.left + (arrow.position.x / 100) * rect.width;
    const screenY = rect.top + (arrow.position.y / 100) * rect.height;
    
    element.style.left = `${screenX}px`;
    element.style.top = `${screenY}px`;
    element.style.transform = `rotate(${arrow.rotation}deg)`;
  }
  
  private isOutOfBounds(position: Position): boolean {
    return position.x < 0 || position.x > 100 || position.y < 0 || position.y > 100;
  }
}
```

---

## 5. HIT DETECTION LOGIC

### 5.1 Collision System

```typescript
interface ICollisionSystem {
  // Collision detection methods
  checkArrowTargetCollision(arrow: Arrow, target: Target): CollisionResult;
  checkPointInTarget(point: Position, target: Target): boolean;
  
  // Broad phase optimization
  getPotentialCollisions(arrow: Arrow): Target[];
  
  // Collision response
  onCollision: EventEmitter<CollisionEvent>;
}

interface CollisionResult {
  hasCollided: boolean;
  collisionPoint: Position;
  collisionNormal: Vector2D;
  penetrationDepth: number;
  hitZone: HitZone;
}

interface CollisionEvent {
  arrow: Arrow;
  target: Target;
  result: CollisionResult;
  timestamp: number;
}

enum HitZone {
  MISS = 'MISS',
  OUTER_RING = 'OUTER_RING',
  MIDDLE_RING = 'MIDDLE_RING',
  INNER_RING = 'INNER_RING',
  BULLSEYE = 'BULLSEYE',
}

class CollisionSystem implements ICollisionSystem {
  onCollision: EventEmitter<CollisionEvent> = new EventEmitter();
  
  checkArrowTargetCollision(arrow: Arrow, target: Target): CollisionResult {
    // Calculate distance from arrow tip to target center
    const dx = arrow.position.x - target.position.x;
    const dy = arrow.position.y - target.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Convert target radius to percentage
    const playAreaWidth = 100; // percentage
    const targetRadiusPercent = (target.size.radius / window.innerWidth) * playAreaWidth * 100;
    
    const result: CollisionResult = {
      hasCollided: false,
      collisionPoint: { ...arrow.position },
      collisionNormal: { x: 0, y: 0, magnitude: 0, angle: 0 },
      penetrationDepth: 0,
      hitZone: HitZone.MISS,
    };
    
    if (distance <= targetRadiusPercent) {
      result.hasCollided = true;
      result.penetrationDepth = targetRadiusPercent - distance;
      
      // Determine hit zone
      const normalizedDistance = distance / targetRadiusPercent;
      
      if (normalizedDistance <= 0.2) {
        result.hitZone = HitZone.BULLSEYE;
      } else if (normalizedDistance <= 0.4) {
        result.hitZone = HitZone.INNER_RING;
      } else if (normalizedDistance <= 0.7) {
        result.hitZone = HitZone.MIDDLE_RING;
      } else {
        result.hitZone = HitZone.OUTER_RING;
      }
      
      // Calculate normal
      result.collisionNormal = {
        x: dx / distance,
        y: dy / distance,
        magnitude: 1,
        angle: Math.atan2(dy, dx) * (180 / Math.PI),
      };
    }
    
    return result;
  }
  
  checkPointInTarget(point: Position, target: Target): boolean {
    const dx = point.x - target.position.x;
    const dy = point.y - target.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Use slightly larger hit zone for child-friendly play
    const hitZoneMultiplier = 1.3;
    const targetRadiusPercent = (target.size.radius / window.innerWidth) * 100 * hitZoneMultiplier;
    
    return distance <= targetRadiusPercent;
  }
  
  getPotentialCollisions(arrow: Arrow): Target[] {
    // Broad phase: only check targets in arrow's path
    const potentialTargets: Target[] = [];
    
    for (const target of this.targetManager.targets) {
      // Simple AABB check first
      const arrowBounds = this.getArrowBounds(arrow);
      const targetBounds = this.getTargetBounds(target);
      
      if (this.aabbIntersect(arrowBounds, targetBounds)) {
        potentialTargets.push(target);
      }
    }
    
    return potentialTargets;
  }
  
  private aabbIntersect(a: Bounds, b: Bounds): boolean {
    return a.minX <= b.maxX && a.maxX >= b.minX &&
           a.minY <= b.maxY && a.maxY >= b.minY;
  }
  
  private getArrowBounds(arrow: Arrow): Bounds {
    const margin = 5;
    return {
      minX: arrow.position.x - margin,
      maxX: arrow.position.x + margin,
      minY: arrow.position.y - margin,
      maxY: arrow.position.y + margin,
    };
  }
  
  private getTargetBounds(target: Target): Bounds {
    const radiusPercent = (target.size.radius / window.innerWidth) * 100;
    return {
      minX: target.position.x - radiusPercent,
      maxX: target.position.x + radiusPercent,
      minY: target.position.y - radiusPercent,
      maxY: target.position.y + radiusPercent,
    };
  }
}

interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}
```

### 5.2 Hit Validation

```typescript
interface IHitValidator {
  validateHit(arrow: Arrow, target: Target, problem: MathProblem): HitValidationResult;
  calculateHitScore(collision: CollisionResult): number;
}

interface HitValidationResult {
  isValid: boolean;
  isCorrect: boolean;
  targetValue: number;
  correctValue: number;
  score: number;
  hitZone: HitZone;
  feedback: FeedbackType;
}

class HitValidator implements IHitValidator {
  validateHit(arrow: Arrow, target: Target, problem: MathProblem): HitValidationResult {
    const collision = this.collisionSystem.checkArrowTargetCollision(arrow, target);
    
    if (!collision.hasCollided) {
      return {
        isValid: false,
        isCorrect: false,
        targetValue: target.value,
        correctValue: problem.correctAnswer,
        score: 0,
        hitZone: HitZone.MISS,
        feedback: FeedbackType.MISS,
      };
    }
    
    const isCorrect = target.value === problem.correctAnswer;
    const baseScore = this.calculateHitScore(collision);
    
    return {
      isValid: true,
      isCorrect,
      targetValue: target.value,
      correctValue: problem.correctAnswer,
      score: isCorrect ? baseScore : 0,
      hitZone: collision.hitZone,
      feedback: isCorrect ? FeedbackType.CORRECT : FeedbackType.WRONG,
    };
  }
  
  calculateHitScore(collision: CollisionResult): number {
    const zoneScores: Record<HitZone, number> = {
      [HitZone.MISS]: 0,
      [HitZone.OUTER_RING]: 50,
      [HitZone.MIDDLE_RING]: 75,
      [HitZone.INNER_RING]: 100,
      [HitZone.BULLSEYE]: 150,
    };
    
    return zoneScores[collision.hitZone] || 0;
  }
}
```

---

## 6. CORRECT/WRONG ANSWER LOGIC

### 6.1 Answer Handler

```typescript
interface IAnswerHandler {
  currentProblem: MathProblem;
  currentAttempt: number;
  maxAttempts: number;
  
  // Answer processing
  processAnswer(target: Target, arrow: Arrow): AnswerResult;
  processTimeout(): AnswerResult;
  
  // State
  getRemainingAttempts(): number;
  shouldShowHint(): boolean;
}

interface AnswerResult {
  isCorrect: boolean;
  score: number;
  attemptsUsed: number;
  attemptsRemaining: number;
  canRetry: boolean;
  feedback: FeedbackData;
}

interface FeedbackData {
  type: FeedbackType;
  message: string;
  animation: string;
  sound: string;
  visualEffect: string;
}

enum FeedbackType {
  CORRECT = 'CORRECT',
  WRONG = 'WRONG',
  MISS = 'MISS',
  TIMEOUT = 'TIMEOUT',
  PERFECT = 'PERFECT',
  CLOSE = 'CLOSE',
}

class AnswerHandler implements IAnswerHandler {
  maxAttempts: number = 3;
  currentAttempt: number = 0;
  
  private feedbackMessages: Record<FeedbackType, string[]> = {
    [FeedbackType.CORRECT]: [
      'Great job!',
      'You got it!',
      'Amazing!',
      'Perfect!',
      'Well done!',
    ],
    [FeedbackType.PERFECT]: [
      'Bullseye! Incredible!',
      'Perfect shot!',
      'Amazing aim!',
    ],
    [FeedbackType.WRONG]: [
      'Not quite, try again!',
      'Keep trying!',
      'You can do it!',
    ],
    [FeedbackType.CLOSE]: [
      'So close!',
      'Almost there!',
    ],
    [FeedbackType.MISS]: [
      'Missed! Try again!',
      'Oh no, try once more!',
    ],
    [FeedbackType.TIMEOUT]: [
      'Time\'s up! Let\'s try again!',
    ],
  };
  
  processAnswer(target: Target, arrow: Arrow): AnswerResult {
    this.currentAttempt++;
    
    const validation = this.hitValidator.validateHit(arrow, target, this.currentProblem);
    
    const result: AnswerResult = {
      isCorrect: validation.isCorrect,
      score: validation.score,
      attemptsUsed: this.currentAttempt,
      attemptsRemaining: this.maxAttempts - this.currentAttempt,
      canRetry: !validation.isCorrect && this.currentAttempt < this.maxAttempts,
      feedback: this.generateFeedback(validation),
    };
    
    return result;
  }
  
  private generateFeedback(validation: HitValidationResult): FeedbackData {
    const messages = this.feedbackMessages[validation.feedback];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    return {
      type: validation.feedback,
      message,
      animation: this.getAnimationForFeedback(validation.feedback),
      sound: this.getSoundForFeedback(validation.feedback),
      visualEffect: this.getVisualEffectForFeedback(validation.feedback),
    };
  }
  
  private getAnimationForFeedback(type: FeedbackType): string {
    const animations: Record<FeedbackType, string> = {
      [FeedbackType.CORRECT]: 'celebration',
      [FeedbackType.PERFECT]: 'perfect_celebration',
      [FeedbackType.WRONG]: 'shake',
      [FeedbackType.CLOSE]: 'nudge',
      [FeedbackType.MISS]: 'fade',
      [FeedbackType.TIMEOUT]: 'pulse',
    };
    return animations[type];
  }
  
  private getSoundForFeedback(type: FeedbackType): string {
    const sounds: Record<FeedbackType, string> = {
      [FeedbackType.CORRECT]: 'correct_chime',
      [FeedbackType.PERFECT]: 'perfect_fanfare',
      [FeedbackType.WRONG]: 'wrong_buzz',
      [FeedbackType.CLOSE]: 'close_ding',
      [FeedbackType.MISS]: 'miss_thud',
      [FeedbackType.TIMEOUT]: 'timeout_bell',
    };
    return sounds[type];
  }
  
  private getVisualEffectForFeedback(type: FeedbackType): string {
    const effects: Record<FeedbackType, string> = {
      [FeedbackType.CORRECT]: 'confetti_burst',
      [FeedbackType.PERFECT]: 'star_explosion',
      [FeedbackType.WRONG]: 'target_shake',
      [FeedbackType.CLOSE]: 'gentle_pulse',
      [FeedbackType.MISS]: 'arrow_fade',
      [FeedbackType.TIMEOUT]: 'clock_pulse',
    };
    return effects[type];
  }
}
```

### 6.2 Scoring System

```typescript
interface IScoringSystem {
  currentScore: number;
  totalScore: number;
  streakCount: number;
  maxStreak: number;
  
  // Scoring
  addPoints(points: number, hitZone: HitZone): void;
  calculateStreakBonus(): number;
  calculateAccuracyBonus(): number;
  
  // Star calculation
  calculateStars(levelScore: number, maxPossibleScore: number): number;
  
  // Persistence
  saveHighScore(levelId: string, score: number): void;
  getHighScore(levelId: string): number;
}

class ScoringSystem implements IScoringSystem {
  currentScore: number = 0;
  totalScore: number = 0;
  streakCount: number = 0;
  maxStreak: number = 0;
  
  private streakMultiplier: number = 1.0;
  private readonly STREAK_BONUS_INCREMENT: number = 0.1;
  private readonly MAX_STREAK_MULTIPLIER: number = 2.0;
  
  addPoints(points: number, hitZone: HitZone): void {
    // Apply streak multiplier
    const multipliedPoints = Math.floor(points * this.streakMultiplier);
    
    // Add zone bonus
    const zoneBonus = this.getZoneBonus(hitZone);
    const finalPoints = multipliedPoints + zoneBonus;
    
    this.currentScore += finalPoints;
    this.totalScore += finalPoints;
  }
  
  private getZoneBonus(hitZone: HitZone): number {
    const bonuses: Record<HitZone, number> = {
      [HitZone.MISS]: 0,
      [HitZone.OUTER_RING]: 0,
      [HitZone.MIDDLE_RING]: 10,
      [HitZone.INNER_RING]: 25,
      [HitZone.BULLSEYE]: 50,
    };
    return bonuses[hitZone];
  }
  
  incrementStreak(): void {
    this.streakCount++;
    if (this.streakCount > this.maxStreak) {
      this.maxStreak = this.streakCount;
    }
    
    // Increase multiplier
    this.streakMultiplier = Math.min(
      1.0 + (this.streakCount * this.STREAK_BONUS_INCREMENT),
      this.MAX_STREAK_MULTIPLIER
    );
  }
  
  resetStreak(): void {
    this.streakCount = 0;
    this.streakMultiplier = 1.0;
  }
  
  calculateStars(levelScore: number, maxPossibleScore: number): number {
    const percentage = levelScore / maxPossibleScore;
    
    if (percentage >= 0.9) return 3;
    if (percentage >= 0.7) return 2;
    if (percentage >= 0.4) return 1;
    return 0;
  }
}
```

---

## 7. FEEDBACK LOGIC

### 7.1 Feedback Manager

```typescript
interface IFeedbackManager {
  // Visual feedback
  showCorrectFeedback(position: Position, hitZone: HitZone): void;
  showWrongFeedback(position: Position, correctTarget: Target): void;
  showMissFeedback(position: Position): void;
  
  // Audio feedback
  playSound(soundId: string): void;
  
  // Particle effects
  spawnParticles(type: ParticleType, position: Position, count: number): void;
  
  // Encouragement
  showEncouragement(message: string, position: Position): void;
  
  // Screen effects
  flashScreen(color: string, duration: number): void;
  shakeScreen(intensity: number, duration: number): void;
}

enum ParticleType {
  CONFETTI = 'CONFETTI',
  STARS = 'STARS',
  SPARKLES = 'SPARKLES',
  HEARTS = 'HEARTS',
  NUMBERS = 'NUMBERS',
  SMOKE = 'SMOKE',
}

class FeedbackManager implements IFeedbackManager {
  private particlePool: Particle[] = [];
  private activeParticles: Particle[] = [];
  
  showCorrectFeedback(position: Position, hitZone: HitZone): void {
    // Spawn celebration particles
    const particleCount = hitZone === HitZone.BULLSEYE ? 30 : 15;
    this.spawnParticles(ParticleType.STARS, position, particleCount);
    
    // Flash green
    this.flashScreen('#4CAF50', 200);
    
    // Play sound
    this.playSound(hitZone === HitZone.BULLSEYE ? 'perfect_fanfare' : 'correct_chime');
    
    // Show encouragement
    const messages = ['Great job!', 'Amazing!', 'Perfect!', 'You got it!'];
    const message = messages[Math.floor(Math.random() * messages.length)];
    this.showEncouragement(message, position);
  }
  
  showWrongFeedback(position: Position, correctTarget: Target): void {
    // Highlight correct target
    this.highlightCorrectTarget(correctTarget);
    
    // Shake screen gently
    this.shakeScreen(3, 300);
    
    // Play sound
    this.playSound('wrong_buzz');
    
    // Show encouraging retry message
    const messages = ['Try again!', 'You can do it!', 'Keep trying!'];
    const message = messages[Math.floor(Math.random() * messages.length)];
    this.showEncouragement(message, position);
  }
  
  showMissFeedback(position: Position): void {
    // Spawn fade effect at miss location
    this.spawnParticles(ParticleType.SMOKE, position, 5);
    
    // Play sound
    this.playSound('miss_thud');
  }
  
  spawnParticles(type: ParticleType, position: Position, count: number): void {
    for (let i = 0; i < count; i++) {
      const particle = this.createParticle(type, position);
      this.activeParticles.push(particle);
      this.animateParticle(particle);
    }
  }
  
  private createParticle(type: ParticleType, position: Position): Particle {
    const colors: Record<ParticleType, string[]> = {
      [ParticleType.CONFETTI]: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
      [ParticleType.STARS]: ['#FFD700', '#FFA500', '#FFEC8B'],
      [ParticleType.SPARKLES]: ['#FFFFFF', '#FFFACD', '#F0E68C'],
      [ParticleType.HEARTS]: ['#FF69B4', '#FF1493', '#FFB6C1'],
      [ParticleType.NUMBERS]: ['#333333'],
      [ParticleType.SMOKE]: ['#CCCCCC', '#999999', '#666666'],
    };
    
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 4;
    
    return {
      id: `particle_${Date.now()}_${Math.random()}`,
      type,
      position: { ...position },
      velocity: {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
        magnitude: speed,
        angle: angle * (180 / Math.PI),
      },
      color: colors[type][Math.floor(Math.random() * colors[type].length)],
      size: 5 + Math.random() * 10,
      lifetime: 1000 + Math.random() * 1000,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    };
  }
  
  private animateParticle(particle: Particle): void {
    const element = document.createElement('div');
    element.className = `particle particle-${particle.type.toLowerCase()}`;
    element.style.cssText = `
      position: absolute;
      left: ${particle.position.x}%;
      top: ${particle.position.y}%;
      width: ${particle.size}px;
      height: ${particle.size}px;
      background: ${particle.color};
      border-radius: ${particle.type === ParticleType.STARS ? '0' : '50%'};
      pointer-events: none;
      z-index: 1000;
    `;
    
    if (particle.type === ParticleType.STARS) {
      element.innerHTML = '★';
      element.style.background = 'transparent';
      element.style.color = particle.color;
      element.style.fontSize = `${particle.size}px`;
      element.style.display = 'flex';
      element.style.alignItems = 'center';
      element.style.justifyContent = 'center';
    }
    
    document.body.appendChild(element);
    
    // Animate
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / particle.lifetime;
      
      if (progress >= 1) {
        element.remove();
        return;
      }
      
      // Update position
      particle.position.x += particle.velocity.x * 0.016;
      particle.position.y += particle.velocity.y * 0.016;
      particle.velocity.y += 0.1; // Gravity
      
      // Update rotation
      particle.rotation += particle.rotationSpeed;
      
      // Apply
      const opacity = 1 - progress;
      element.style.left = `${particle.position.x}%`;
      element.style.top = `${particle.position.y}%`;
      element.style.opacity = opacity.toString();
      element.style.transform = `rotate(${particle.rotation}deg)`;
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }
  
  showEncouragement(message: string, position: Position): void {
    const element = document.createElement('div');
    element.className = 'encouragement-text';
    element.textContent = message;
    element.style.cssText = `
      position: absolute;
      left: ${position.x}%;
      top: ${position.y - 15}%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
      color: #FFD700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      pointer-events: none;
      z-index: 1001;
      animation: float-up 1.5s ease-out forwards;
    `;
    
    document.body.appendChild(element);
    
    setTimeout(() => element.remove(), 1500);
  }
  
  flashScreen(color: string, duration: number): void {
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${color};
      opacity: 0.3;
      pointer-events: none;
      z-index: 999;
      animation: flash ${duration}ms ease-out forwards;
    `;
    
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), duration);
  }
  
  shakeScreen(intensity: number, duration: number): void {
    const gameContainer = document.querySelector('.game-container');
    if (!gameContainer) return;
    
    gameContainer.classList.add('shake');
    gameContainer.style.setProperty('--shake-intensity', `${intensity}px`);
    
    setTimeout(() => {
      gameContainer.classList.remove('shake');
    }, duration);
  }
  
  highlightCorrectTarget(target: Target): void {
    const element = document.getElementById(target.id);
    if (!element) return;
    
    element.classList.add('correct-target-highlight');
    element.style.animation = 'pulse-green 1s ease-in-out 3';
    
    setTimeout(() => {
      element.classList.remove('correct-target-highlight');
    }, 3000);
  }
}

interface Particle {
  id: string;
  type: ParticleType;
  position: Position;
  velocity: Vector2D;
  color: string;
  size: number;
  lifetime: number;
  rotation: number;
  rotationSpeed: number;
}
```

---

## 8. LEVEL COMPLETION LOGIC

### 8.1 Level Progression

```typescript
interface ILevelCompletionManager {
  // Current level state
  problemsSolved: number;
  totalProblems: number;
  currentScore: number;
  starsEarned: number;
  
  // Completion check
  checkLevelComplete(): boolean;
  calculateFinalScore(): number;
  calculateStars(): number;
  
  // Rewards
  getRewards(): LevelRewards;
  
  // Progression
  unlockNextLevel(): void;
  saveProgress(): void;
}

interface LevelRewards {
  stars: number;
  coins: number;
  xp: number;
  unlockedItems: string[];
}

class LevelCompletionManager implements ILevelCompletionManager {
  problemsSolved: number = 0;
  totalProblems: number = 10;
  currentScore: number = 0;
  starsEarned: number = 0;
  
  private scoringSystem: IScoringSystem;
  private levelConfig: LevelConfig;
  
  checkLevelComplete(): boolean {
    return this.problemsSolved >= this.totalProblems;
  }
  
  calculateFinalScore(): number {
    // Base score from correct answers
    let finalScore = this.currentScore;
    
    // Accuracy bonus
    const accuracy = this.problemsSolved / this.totalProblems;
    finalScore += Math.floor(finalScore * accuracy * 0.2);
    
    // Streak bonus
    finalScore += this.scoringSystem.maxStreak * 50;
    
    // Speed bonus (if applicable)
    // finalScore += this.calculateSpeedBonus();
    
    return finalScore;
  }
  
  calculateStars(): number {
    const maxPossibleScore = this.totalProblems * 150; // Max per problem
    const finalScore = this.calculateFinalScore();
    
    return this.scoringSystem.calculateStars(finalScore, maxPossibleScore);
  }
  
  getRewards(): LevelRewards {
    const stars = this.calculateStars();
    
    return {
      stars,
      coins: this.calculateCoins(stars),
      xp: this.calculateXP(stars),
      unlockedItems: this.getUnlockedItems(stars),
    };
  }
  
  private calculateCoins(stars: number): number {
    const baseCoins = this.levelConfig.difficulty * 10;
    return baseCoins * stars;
  }
  
  private calculateXP(stars: number): number {
    const baseXP = this.levelConfig.difficulty * 25;
    return baseXP * stars;
  }
  
  private getUnlockedItems(stars: number): string[] {
    const unlocked: string[] = [];
    
    // Unlock based on performance
    if (stars >= 2) {
      unlocked.push('new_arrow_skin');
    }
    if (stars >= 3) {
      unlocked.push('special_target_skin');
    }
    
    return unlocked;
  }
  
  unlockNextLevel(): void {
    const currentLevelId = this.levelConfig.id;
    const nextLevelId = this.getNextLevelId(currentLevelId);
    
    if (nextLevelId) {
      this.saveUnlockedLevel(nextLevelId);
    }
  }
  
  private getNextLevelId(currentId: string): string | null {
    const parts = currentId.split('_');
    const worldNum = parseInt(parts[0].replace('world', ''));
    const levelNum = parseInt(parts[1].replace('level', ''));
    
    // Check if there's another level in this world
    const nextLevelInWorld = `world${worldNum}_level${levelNum + 1}`;
    if (this.levelExists(nextLevelInWorld)) {
      return nextLevelInWorld;
    }
    
    // Check next world
    const nextWorldFirstLevel = `world${worldNum + 1}_level1`;
    if (this.levelExists(nextWorldFirstLevel)) {
      return nextWorldFirstLevel;
    }
    
    return null;
  }
  
  saveProgress(): void {
    const progress: LevelProgress = {
      levelId: this.levelConfig.id,
      score: this.calculateFinalScore(),
      stars: this.calculateStars(),
      completed: true,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(`level_progress_${this.levelConfig.id}`, JSON.stringify(progress));
  }
}

interface LevelProgress {
  levelId: string;
  score: number;
  stars: number;
  completed: boolean;
  timestamp: number;
}
```

---

## 9. RETRY LOGIC

### 9.1 Retry Manager

```typescript
interface IRetryManager {
  // Retry state
  maxRetries: number;
  currentRetry: number;
  
  // Retry methods
  canRetry(): boolean;
  processRetry(): RetryResult;
  resetRetries(): void;
  
  // Wrong answer handling
  handleWrongAnswer(target: Target, correctTarget: Target): void;
  
  // Hint system
  shouldShowHint(): boolean;
  showHint(): void;
}

interface RetryResult {
  canContinue: boolean;
  attemptsRemaining: number;
  showHint: boolean;
  hintType: HintType;
}

enum HintType {
  NONE = 'NONE',
  HIGHLIGHT_AREA = 'HIGHLIGHT_AREA',
  SHOW_VISUAL_AID = 'SHOW_VISUAL_AID',
  NARROW_OPTIONS = 'NARROW_OPTIONS',
  SHOW_CORRECT_ANSWER = 'SHOW_CORRECT_ANSWER',
}

class RetryManager implements IRetryManager {
  maxRetries: number = 3;
  currentRetry: number = 0;
  
  private problem: MathProblem;
  private targetManager: ITargetManager;
  private feedbackManager: IFeedbackManager;
  
  canRetry(): boolean {
    return this.currentRetry < this.maxRetries;
  }
  
  processRetry(): RetryResult {
    this.currentRetry++;
    
    const attemptsRemaining = this.maxRetries - this.currentRetry;
    const shouldShowHint = this.currentRetry >= 2;
    
    return {
      canContinue: attemptsRemaining > 0,
      attemptsRemaining,
      showHint: shouldShowHint,
      hintType: this.determineHintType(),
    };
  }
  
  private determineHintType(): HintType {
    switch (this.currentRetry) {
      case 1:
        return HintType.HIGHLIGHT_AREA;
      case 2:
        return HintType.SHOW_VISUAL_AID;
      case 3:
        return HintType.NARROW_OPTIONS;
      default:
        return HintType.SHOW_CORRECT_ANSWER;
    }
  }
  
  handleWrongAnswer(target: Target, correctTarget: Target): void {
    const retryResult = this.processRetry();
    
    // Show feedback
    this.feedbackManager.showWrongFeedback(target.position, correctTarget);
    
    // Apply hint if needed
    if (retryResult.showHint) {
      this.applyHint(retryResult.hintType, correctTarget);
    }
    
    // If no more retries, show correct answer and move on
    if (!retryResult.canContinue) {
      this.showCorrectAnswerAndContinue(correctTarget);
    }
  }
  
  private applyHint(hintType: HintType, correctTarget: Target): void {
    switch (hintType) {
      case HintType.HIGHLIGHT_AREA:
        this.highlightTargetArea(correctTarget);
        break;
      case HintType.SHOW_VISUAL_AID:
        this.showVisualAid();
        break;
      case HintType.NARROW_OPTIONS:
        this.narrowTargetOptions(correctTarget);
        break;
      case HintType.SHOW_CORRECT_ANSWER:
        this.highlightCorrectTarget(correctTarget);
        break;
    }
  }
  
  private highlightTargetArea(target: Target): void {
    // Create a subtle glow around the correct target area
    const element = document.getElementById(target.id);
    if (!element) return;
    
    element.style.boxShadow = '0 0 30px 10px rgba(255, 215, 0, 0.5)';
    element.style.animation = 'subtle-pulse 1s ease-in-out infinite';
  }
  
  private showVisualAid(): void {
    // Show counting blocks or number line
    // This would integrate with the ProblemDisplayManager
  }
  
  private narrowTargetOptions(correctTarget: Target): void {
    // Remove some wrong targets, keep only 2-3 options
    const wrongTargets = this.targetManager.targets.filter(t => !t.isCorrect);
    const targetsToRemove = wrongTargets.slice(0, Math.floor(wrongTargets.length / 2));
    
    for (const target of targetsToRemove) {
      this.targetManager.removeTarget(target.id);
    }
  }
  
  private highlightCorrectTarget(target: Target): void {
    const element = document.getElementById(target.id);
    if (!element) return;
    
    element.classList.add('correct-answer-highlight');
    element.style.animation = 'strong-pulse 0.5s ease-in-out infinite';
  }
  
  private showCorrectAnswerAndContinue(correctTarget: Target): void {
    // Highlight the correct answer
    this.highlightCorrectTarget(correctTarget);
    
    // Show message
    this.feedbackManager.showEncouragement(
      `The answer was ${correctTarget.value}!`,
      correctTarget.position
    );
    
    // Auto-continue after delay
    setTimeout(() => {
      // Trigger next problem
    }, 2000);
  }
  
  resetRetries(): void {
    this.currentRetry = 0;
  }
}
```

---

## 10. PROGRESSION LOGIC

### 10.1 Progression Manager

```typescript
interface IProgressionManager {
  // Player progress
  playerProgress: PlayerProgress;
  
  // World/Level access
  isWorldUnlocked(worldId: string): boolean;
  isLevelUnlocked(levelId: string): boolean;
  getAvailableWorlds(): World[];
  getAvailableLevels(worldId: string): Level[];
  
  // Unlocking
  unlockWorld(worldId: string): void;
  unlockLevel(levelId: string): void;
  
  // Progression checks
  checkWorldCompletion(worldId: string): boolean;
  checkAllWorldsCompletion(): boolean;
  
  // Save/Load
  saveProgress(): void;
  loadProgress(): PlayerProgress;
}

interface PlayerProgress {
  playerId: string;
  totalStars: number;
  totalCoins: number;
  totalXP: number;
  unlockedWorlds: string[];
  unlockedLevels: string[];
  completedLevels: string[];
  levelScores: Record<string, LevelScore>;
  achievements: string[];
  lastPlayed: number;
}

interface LevelScore {
  score: number;
  stars: number;
  attempts: number;
  bestTime: number;
  timestamp: number;
}

class ProgressionManager implements IProgressionManager {
  playerProgress: PlayerProgress;
  
  private readonly STORAGE_KEY = 'numeria_archery_progress';
  private readonly STARS_TO_UNLOCK_WORLD = 15; // Stars needed to unlock next world
  
  constructor() {
    this.playerProgress = this.loadProgress() || this.createDefaultProgress();
  }
  
  isWorldUnlocked(worldId: string): boolean {
    // First world always unlocked
    if (worldId === 'world1') return true;
    
    return this.playerProgress.unlockedWorlds.includes(worldId);
  }
  
  isLevelUnlocked(levelId: string): boolean {
    // First level always unlocked
    if (levelId === 'world1_level1') return true;
    
    // Check if explicitly unlocked
    if (this.playerProgress.unlockedLevels.includes(levelId)) return true;
    
    // Check if previous level completed
    const prevLevelId = this.getPreviousLevelId(levelId);
    if (prevLevelId && this.playerProgress.completedLevels.includes(prevLevelId)) {
      return true;
    }
    
    return false;
  }
  
  unlockWorld(worldId: string): void {
    if (!this.playerProgress.unlockedWorlds.includes(worldId)) {
      this.playerProgress.unlockedWorlds.push(worldId);
      this.saveProgress();
    }
  }
  
  unlockLevel(levelId: string): void {
    if (!this.playerProgress.unlockedLevels.includes(levelId)) {
      this.playerProgress.unlockedLevels.push(levelId);
      this.saveProgress();
    }
  }
  
  checkWorldCompletion(worldId: string): boolean {
    const worldLevels = this.getLevelsForWorld(worldId);
    return worldLevels.every(level => 
      this.playerProgress.completedLevels.includes(level.id)
    );
  }
  
  checkAllWorldsCompletion(): boolean {
    const allWorlds = ['world1', 'world2', 'world3', 'world4', 'world5'];
    return allWorlds.every(worldId => this.checkWorldCompletion(worldId));
  }
  
  saveLevelCompletion(levelId: string, score: number, stars: number): void {
    // Update level score
    const existingScore = this.playerProgress.levelScores[levelId];
    
    this.playerProgress.levelScores[levelId] = {
      score: Math.max(score, existingScore?.score || 0),
      stars: Math.max(stars, existingScore?.stars || 0),
      attempts: (existingScore?.attempts || 0) + 1,
      bestTime: 0, // TODO: track time
      timestamp: Date.now(),
    };
    
    // Mark as completed
    if (!this.playerProgress.completedLevels.includes(levelId)) {
      this.playerProgress.completedLevels.push(levelId);
    }
    
    // Update totals
    this.recalculateTotals();
    
    // Check for world unlock
    this.checkAndUnlockWorlds();
    
    this.saveProgress();
  }
  
  private checkAndUnlockWorlds(): void {
    const worlds = ['world1', 'world2', 'world3', 'world4', 'world5'];
    
    for (let i = 1; i < worlds.length; i++) {
      const prevWorld = worlds[i - 1];
      const currentWorld = worlds[i];
      
      if (this.isWorldUnlocked(prevWorld) && !this.isWorldUnlocked(currentWorld)) {
        const starsInPrevWorld = this.getStarsInWorld(prevWorld);
        
        if (starsInPrevWorld >= this.STARS_TO_UNLOCK_WORLD) {
          this.unlockWorld(currentWorld);
        }
      }
    }
  }
  
  private getStarsInWorld(worldId: string): number {
    const levels = this.getLevelsForWorld(worldId);
    let totalStars = 0;
    
    for (const level of levels) {
      const score = this.playerProgress.levelScores[level.id];
      if (score) {
        totalStars += score.stars;
      }
    }
    
    return totalStars;
  }
  
  private recalculateTotals(): void {
    let totalStars = 0;
    let totalScore = 0;
    
    for (const levelId in this.playerProgress.levelScores) {
      const score = this.playerProgress.levelScores[levelId];
      totalStars += score.stars;
      totalScore += score.score;
    }
    
    this.playerProgress.totalStars = totalStars;
    this.playerProgress.totalXP = totalScore;
    this.playerProgress.totalCoins = totalStars * 10; // 10 coins per star
  }
  
  saveProgress(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.playerProgress));
  }
  
  loadProgress(): PlayerProgress | null {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  }
  
  private createDefaultProgress(): PlayerProgress {
    return {
      playerId: this.generatePlayerId(),
      totalStars: 0,
      totalCoins: 0,
      totalXP: 0,
      unlockedWorlds: ['world1'],
      unlockedLevels: ['world1_level1'],
      completedLevels: [],
      levelScores: {},
      achievements: [],
      lastPlayed: Date.now(),
    };
  }
  
  private generatePlayerId(): string {
    return `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  
  private getPreviousLevelId(levelId: string): string | null {
    const parts = levelId.split('_');
    const worldNum = parseInt(parts[0].replace('world', ''));
    const levelNum = parseInt(parts[1].replace('level', ''));
    
    if (levelNum > 1) {
      return `world${worldNum}_level${levelNum - 1}`;
    }
    
    if (worldNum > 1) {
      // Get last level of previous world
      const prevWorldLastLevel = this.getLastLevelOfWorld(`world${worldNum - 1}`);
      return prevWorldLastLevel;
    }
    
    return null;
  }
  
  private getLevelsForWorld(worldId: string): Level[] {
    // This would come from level configuration
    return [];
  }
  
  private getLastLevelOfWorld(worldId: string): string | null {
    const levels = this.getLevelsForWorld(worldId);
    return levels.length > 0 ? levels[levels.length - 1].id : null;
  }
}
```

---

## 11. MODULE INTERFACES SUMMARY

```typescript
// Core Game Engine Interface
interface IGameEngine {
  stateManager: IStateManager;
  problemGenerator: IProblemGenerator;
  problemDisplay: IProblemDisplayManager;
  targetManager: ITargetManager;
  inputSystem: IInputSystem;
  arrowSystem: IArrowSystem;
  collisionSystem: ICollisionSystem;
  hitValidator: IHitValidator;
  answerHandler: IAnswerHandler;
  scoringSystem: IScoringSystem;
  feedbackManager: IFeedbackManager;
  levelCompletion: ILevelCompletionManager;
  retryManager: IRetryManager;
  progressionManager: IProgressionManager;
  
  // Lifecycle
  initialize(): void;
  start(): void;
  pause(): void;
  resume(): void;
  stop(): void;
  
  // Update loop
  update(deltaTime: number): void;
}

// Event System
interface IEventEmitter<T> {
  emit(data: T): void;
  subscribe(callback: (data: T) => void): () => void;
  unsubscribe(callback: (data: T) => void): void;
}

// Configuration Interfaces
interface GameConfig {
  targetFPS: number;
  enableAimAssist: boolean;
  aimAssistStrength: number;
  maxRetries: number;
  enableSound: boolean;
  enableParticles: boolean;
  difficulty: DifficultyLevel;
}

enum DifficultyLevel {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}
```

---

## 12. IMPLEMENTATION CHECKLIST

### Core Systems
- [ ] State Machine implementation
- [ ] Problem Generator with all problem types
- [ ] Target Generation with all layouts
- [ ] Input System (touch, mouse, keyboard)
- [ ] Arrow Physics and Trajectory
- [ ] Collision Detection
- [ ] Hit Validation
- [ ] Scoring System
- [ ] Feedback System (visual, audio)
- [ ] Level Completion Logic
- [ ] Retry System with hints
- [ ] Progression System

### UI Components
- [ ] Problem Display Component
- [ ] Target Visual Component
- [ ] Arrow Visual Component
- [ ] Score Display
- [ ] Star Display
- [ ] Progress Bar
- [ ] Feedback Popup
- [ ] Level Complete Screen

### Audio Systems
- [ ] Background Music Manager
- [ ] Sound Effect Player
- [ ] Voice Feedback System

### Data Persistence
- [ ] Progress Save/Load
- [ ] High Score Tracking
- [ ] Settings Storage

---

*Document Version: 1.0*
*Last Updated: Game Engine Implementation Plan for Numeria Archery*
