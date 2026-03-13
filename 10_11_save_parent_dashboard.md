# Numeria Archery - Save System & Parent Dashboard

## OUTPUT 10 - SAVE SYSTEM

### 1. localStorage Schema Design

#### 1.1 Storage Keys Overview

```javascript
const STORAGE_KEYS = {
  // Core game data
  PLAYER_PROGRESS: 'numeria_player_progress',
  LEVEL_DATA: 'numeria_level_data',
  
  // Customization & settings
  QUINN_CUSTOMIZATION: 'numeria_quinn_customization',
  SETTINGS: 'numeria_settings',
  
  // Analytics & parent data
  SESSION_DATA: 'numeria_session_data',
  ANALYTICS: 'numeria_analytics',
  PARENT_STATS: 'numeria_parent_stats',
  
  // System
  SCHEMA_VERSION: 'numeria_schema_version',
  FIRST_LAUNCH: 'numeria_first_launch_date',
  INSTALL_ID: 'numeria_install_id'
};
```

#### 1.2 Schema Versioning

```javascript
const SCHEMA_VERSION = {
  current: '1.0.0',
  history: [
    { version: '1.0.0', date: '2024-01-01', changes: 'Initial schema' }
  ]
};

// Version format: MAJOR.MINOR.PATCH
// MAJOR: Breaking changes requiring migration
// MINOR: New fields, backward compatible
// PATCH: Bug fixes, no structural changes
```

---

### 2. Player Progress Object

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  "playerId": "na_abc123xyz",
  
  "progress": {
    "freeLevels": {
      "completed": 8,
      "totalAvailable": 10,
      "levels": {
        "1": { "completed": true, "stars": 3, "bestTime": 45, "attempts": 3 },
        "2": { "completed": true, "stars": 2, "bestTime": 62, "attempts": 5 },
        "3": { "completed": true, "stars": 3, "bestTime": 38, "attempts": 2 },
        "4": { "completed": true, "stars": 1, "bestTime": 89, "attempts": 7 },
        "5": { "completed": true, "stars": 3, "bestTime": 42, "attempts": 4 },
        "6": { "completed": true, "stars": 2, "bestTime": 55, "attempts": 6 },
        "7": { "completed": true, "stars": 3, "bestTime": 41, "attempts": 3 },
        "8": { "completed": true, "stars": 2, "bestTime": 68, "attempts": 5 },
        "9": { "completed": false, "stars": 0, "bestTime": null, "attempts": 2 },
        "10": { "completed": false, "stars": 0, "bestTime": null, "attempts": 0 }
      }
    },
    
    "premiumLevels": {
      "unlocked": false,
      "purchaseDate": null,
      "completed": 0,
      "totalAvailable": 90,
      "levels": {}
    },
    
    "currentLevel": 9,
    "highestLevelReached": 9
  },
  
  "currency": {
    "stars": {
      "total": 19,
      "byLevel": { "1": 3, "2": 2, "3": 3, "4": 1, "5": 3, "6": 2, "7": 3, "8": 2 }
    },
    "coins": 47,
    "totalCoinsEarned": 62,
    "totalCoinsSpent": 15
  },
  
  "achievements": {
    "firstBullseye": { "unlocked": true, "date": "2024-01-10T09:15:00.000Z" },
    "speedDemon": { "unlocked": false, "date": null },
    "perfectLevel": { "unlocked": true, "date": "2024-01-12T16:22:00.000Z" },
    "starCollector": { "unlocked": false, "date": null },
    "mathMaster": { "unlocked": false, "date": null }
  }
}
```

---

### 3. Level Completion Data Structure

```json
{
  "levelId": 5,
  "worldId": 1,
  "isPremium": false,
  
  "completionData": {
    "firstCompleted": "2024-01-12T10:30:00.000Z",
    "lastPlayed": "2024-01-15T14:30:00.000Z",
    "totalAttempts": 4,
    "successfulAttempts": 3,
    
    "bestPerformance": {
      "stars": 3,
      "timeSeconds": 42,
      "accuracy": 100,
      "date": "2024-01-14T11:20:00.000Z"
    },
    
    "allAttempts": [
      { "date": "2024-01-12T10:30:00.000Z", "stars": 2, "time": 58, "accuracy": 80 },
      { "date": "2024-01-13T09:15:00.000Z", "stars": 2, "time": 55, "accuracy": 85 },
      { "date": "2024-01-14T11:20:00.000Z", "stars": 3, "time": 42, "accuracy": 100 },
      { "date": "2024-01-15T14:30:00.000Z", "stars": 3, "time": 45, "accuracy": 95 }
    ]
  },
  
  "mathPerformance": {
    "addition": { "correct": 15, "incorrect": 2, "accuracy": 88 },
    "subtraction": { "correct": 8, "incorrect": 1, "accuracy": 89 },
    "multiplication": { "correct": 0, "incorrect": 0, "accuracy": null },
    "division": { "correct": 0, "incorrect": 0, "accuracy": null }
  }
}
```

---

### 4. Quinn Customization Save

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  
  "currentOutfit": {
    "bow": "bow_golden",
    "quiver": "quiver_leather",
    "hat": "hat_feather",
    "cape": "cape_none"
  },
  
  "unlockedItems": {
    "bows": ["bow_wooden", "bow_golden", "bow_crystal"],
    "quivers": ["quiver_basic", "quiver_leather", "quiver_royal"],
    "hats": ["hat_none", "hat_feather", "hat_crown"],
    "capes": ["cape_none", "cape_hero"]
  },
  
  "colorThemes": {
    "selected": "theme_forest",
    "unlocked": ["theme_forest", "theme_sunset", "theme_ocean"]
  }
}
```

---

### 5. Settings Object

```json
{
  "schemaVersion": "1.0.0",
  "lastUpdated": "2024-01-15T14:30:00.000Z",
  
  "audio": {
    "masterVolume": 0.8,
    "musicVolume": 0.7,
    "sfxVolume": 0.9,
    "voiceVolume": 1.0,
    "musicEnabled": true,
    "sfxEnabled": true,
    "voiceEnabled": true
  },
  
  "gameplay": {
    "difficulty": "adaptive",
    "hintFrequency": "normal",
    "timerVisible": true,
    "showEquationPreview": true,
    "autoAdvance": false
  },
  
  "accessibility": {
    "highContrast": false,
    "largeText": false,
    "reducedMotion": false,
    "colorBlindMode": "none"
  },
  
  "parental": {
    "sessionTimeLimit": 30,
    "dailyPlayLimit": 60,
    "breakReminders": true,
    "progressNotifications": false
  },
  
  "language": "en"
}
```

---

### 6. Analytics/Session Data

```json
{
  "schemaVersion": "1.0.0",
  "installDate": "2024-01-10T08:00:00.000Z",
  "lastSessionDate": "2024-01-15T14:30:00.000Z",
  
  "sessions": {
    "totalSessions": 23,
    "totalPlayTimeMinutes": 187,
    "averageSessionLength": 8.1,
    "longestSession": 25,
    
    "dailyStats": {
      "2024-01-15": { "sessions": 2, "minutes": 18, "levelsPlayed": 3 },
      "2024-01-14": { "sessions": 3, "minutes": 22, "levelsPlayed": 5 },
      "2024-01-13": { "sessions": 1, "minutes": 12, "levelsPlayed": 2 },
      "2024-01-12": { "sessions": 2, "minutes": 15, "levelsPlayed": 4 }
    }
  },
  
  "mathPerformance": {
    "overall": {
      "totalProblems": 487,
      "correctAnswers": 412,
      "accuracy": 85
    },
    "byOperation": {
      "addition": { "total": 245, "correct": 220, "accuracy": 90 },
      "subtraction": { "total": 156, "correct": 132, "accuracy": 85 },
      "multiplication": { "total": 56, "correct": 42, "accuracy": 75 },
      "division": { "total": 30, "correct": 18, "accuracy": 60 }
    },
    "byDifficulty": {
      "easy": { "total": 200, "correct": 190, "accuracy": 95 },
      "medium": { "total": 200, "correct": 170, "accuracy": 85 },
      "hard": { "total": 87, "correct": 52, "accuracy": 60 }
    }
  },
  
  "engagement": {
    "levelsStarted": 45,
    "levelsCompleted": 38,
    "completionRate": 84,
    "averageStarsPerLevel": 2.3,
    "returnRate": 92
  }
}
```

---

### 7. Save/Load Functions Specification

```typescript
// ============================================
// SAVE SYSTEM - Core Functions
// ============================================

interface SaveResult {
  success: boolean;
  error?: string;
  timestamp: string;
}

interface LoadResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  usedDefault?: boolean;
}

// --------------------------------------------
// 7.1 Core Save Functions
// --------------------------------------------

/**
 * Save player progress to localStorage
 * @param progress - PlayerProgress object
 * @returns SaveResult with success status
 */
function savePlayerProgress(progress: PlayerProgress): SaveResult {
  try {
    // Validate data before saving
    const validation = validatePlayerProgress(progress);
    if (!validation.valid) {
      return {
        success: false,
        error: `Validation failed: ${validation.errors.join(', ')}`,
        timestamp: new Date().toISOString()
      };
    }
    
    // Add timestamp and update schema version
    const dataToSave = {
      ...progress,
      schemaVersion: SCHEMA_VERSION.current,
      lastUpdated: new Date().toISOString()
    };
    
    // Compress and save
    const serialized = JSON.stringify(dataToSave);
    localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, serialized);
    
    // Verify save was successful
    const verify = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
    if (!verify) {
      throw new Error('Save verification failed');
    }
    
    return {
      success: true,
      timestamp: new Date().toISOString()
    };
    
  } catch (error) {
    console.error('Save failed:', error);
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Load player progress from localStorage
 * @returns LoadResult with data or default
 */
function loadPlayerProgress(): LoadResult<PlayerProgress> {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
    
    if (!stored) {
      // No saved data - return default
      const defaultProgress = createDefaultPlayerProgress();
      return {
        success: true,
        data: defaultProgress,
        usedDefault: true
      };
    }
    
    const parsed = JSON.parse(stored);
    
    // Check schema version and migrate if needed
    if (parsed.schemaVersion !== SCHEMA_VERSION.current) {
      const migrated = migrateData(parsed, parsed.schemaVersion, SCHEMA_VERSION.current);
      return {
        success: true,
        data: migrated,
        usedDefault: false
      };
    }
    
    // Validate loaded data
    const validation = validatePlayerProgress(parsed);
    if (!validation.valid) {
      console.warn('Loaded data invalid, using defaults:', validation.errors);
      return {
        success: true,
        data: createDefaultPlayerProgress(),
        usedDefault: true
      };
    }
    
    return {
      success: true,
      data: parsed,
      usedDefault: false
    };
    
  } catch (error) {
    console.error('Load failed:', error);
    return {
      success: false,
      error: error.message,
      data: createDefaultPlayerProgress(),
      usedDefault: true
    };
  }
}

// --------------------------------------------
// 7.2 Settings Save/Load
// --------------------------------------------

function saveSettings(settings: Settings): SaveResult {
  try {
    const dataToSave = {
      ...settings,
      schemaVersion: SCHEMA_VERSION.current,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(dataToSave));
    
    return { success: true, timestamp: new Date().toISOString() };
  } catch (error) {
    return { success: false, error: error.message, timestamp: new Date().toISOString() };
  }
}

function loadSettings(): Settings {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!stored) return createDefaultSettings();
    
    const parsed = JSON.parse(stored);
    return { ...createDefaultSettings(), ...parsed };
  } catch {
    return createDefaultSettings();
  }
}

// --------------------------------------------
// 7.3 Session/Analytics Save
// --------------------------------------------

function recordSessionStart(): void {
  const sessionData = loadSessionData();
  const today = new Date().toISOString().split('T')[0];
  
  sessionData.sessions.totalSessions++;
  sessionData.currentSession = {
    startTime: new Date().toISOString(),
    levelsPlayed: [],
    problemsAttempted: 0,
    problemsCorrect: 0
  };
  
  if (!sessionData.sessions.dailyStats[today]) {
    sessionData.sessions.dailyStats[today] = {
      sessions: 0,
      minutes: 0,
      levelsPlayed: 0
    };
  }
  sessionData.sessions.dailyStats[today].sessions++;
  
  saveSessionData(sessionData);
}

function recordSessionEnd(): void {
  const sessionData = loadSessionData();
  const today = new Date().toISOString().split('T')[0];
  
  if (sessionData.currentSession) {
    const startTime = new Date(sessionData.currentSession.startTime);
    const endTime = new Date();
    const durationMinutes = Math.round((endTime - startTime) / 60000);
    
    sessionData.sessions.totalPlayTimeMinutes += durationMinutes;
    sessionData.sessions.dailyStats[today].minutes += durationMinutes;
    sessionData.lastSessionDate = endTime.toISOString();
    
    delete sessionData.currentSession;
    saveSessionData(sessionData);
  }
}

function recordLevelComplete(levelId: number, stars: number, timeSeconds: number): void {
  const sessionData = loadSessionData();
  const today = new Date().toISOString().split('T')[0];
  
  sessionData.sessions.dailyStats[today].levelsPlayed++;
  sessionData.engagement.levelsCompleted++;
  
  // Update average stars
  const totalStars = sessionData.engagement.averageStarsPerLevel * 
                     (sessionData.engagement.levelsCompleted - 1) + stars;
  sessionData.engagement.averageStarsPerLevel = 
    totalStars / sessionData.engagement.levelsCompleted;
  
  saveSessionData(sessionData);
}
```

---

### 8. Data Validation

```typescript
// ============================================
// DATA VALIDATION
// ============================================

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validatePlayerProgress(data: any): ValidationResult {
  const errors: string[] = [];
  
  // Required fields check
  const requiredFields = ['schemaVersion', 'progress', 'currency'];
  requiredFields.forEach(field => {
    if (!(field in data)) {
      errors.push(`Missing required field: ${field}`);
    }
  });
  
  // Progress validation
  if (data.progress) {
    if (typeof data.progress.freeLevels?.completed !== 'number') {
      errors.push('Invalid freeLevels.completed');
    }
    if (data.progress.freeLevels?.completed > 10) {
      errors.push('freeLevels.completed exceeds maximum (10)');
    }
    if (data.progress.currentLevel < 1 || data.progress.currentLevel > 100) {
      errors.push('currentLevel out of range');
    }
  }
  
  // Currency validation
  if (data.currency) {
    if (typeof data.currency.stars?.total !== 'number') {
      errors.push('Invalid stars.total');
    }
    if (typeof data.currency.coins !== 'number' || data.currency.coins < 0) {
      errors.push('Invalid coins value');
    }
    if (data.currency.coins > 9999) {
      errors.push('coins exceeds maximum');
    }
  }
  
  // Timestamp validation
  if (data.lastUpdated) {
    const date = new Date(data.lastUpdated);
    if (isNaN(date.getTime())) {
      errors.push('Invalid lastUpdated timestamp');
    }
    if (date > new Date()) {
      errors.push('lastUpdated is in the future');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

function validateLevelData(data: any): ValidationResult {
  const errors: string[] = [];
  
  if (!data.levelId || data.levelId < 1 || data.levelId > 100) {
    errors.push('Invalid levelId');
  }
  
  if (data.completionData) {
    if (data.completionData.totalAttempts < 0) {
      errors.push('Negative totalAttempts');
    }
    if (data.completionData.successfulAttempts > data.completionData.totalAttempts) {
      errors.push('successfulAttempts exceeds totalAttempts');
    }
    if (data.completionData.bestPerformance?.stars > 3) {
      errors.push('Stars cannot exceed 3');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

function validateSettings(data: any): ValidationResult {
  const errors: string[] = [];
  
  // Audio volume range check (0-1)
  if (data.audio) {
    const volumeFields = ['masterVolume', 'musicVolume', 'sfxVolume', 'voiceVolume'];
    volumeFields.forEach(field => {
      if (data.audio[field] !== undefined) {
        if (data.audio[field] < 0 || data.audio[field] > 1) {
          errors.push(`${field} out of range (0-1)`);
        }
      }
    });
  }
  
  // Parental limits validation
  if (data.parental) {
    if (data.parental.sessionTimeLimit < 5 || data.parental.sessionTimeLimit > 120) {
      errors.push('sessionTimeLimit out of reasonable range');
    }
    if (data.parental.dailyPlayLimit < 10 || data.parental.dailyPlayLimit > 240) {
      errors.push('dailyPlayLimit out of reasonable range');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

---

### 9. Corruption Recovery

```typescript
// ============================================
// CORRUPTION RECOVERY
// ============================================

const BACKUP_KEYS = {
  PLAYER_PROGRESS_BACKUP: 'numeria_player_progress_backup',
  BACKUP_TIMESTAMP: 'numeria_backup_timestamp'
};

/**
 * Create automatic backup before major operations
 */
function createBackup(): void {
  try {
    const progress = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
    if (progress) {
      localStorage.setItem(BACKUP_KEYS.PLAYER_PROGRESS_BACKUP, progress);
      localStorage.setItem(BACKUP_KEYS.BACKUP_TIMESTAMP, new Date().toISOString());
    }
  } catch (error) {
    console.error('Backup creation failed:', error);
  }
}

/**
 * Attempt to restore from backup
 */
function restoreFromBackup(): LoadResult<PlayerProgress> {
  try {
    const backup = localStorage.getItem(BACKUP_KEYS.PLAYER_PROGRESS_BACKUP);
    
    if (!backup) {
      return {
        success: false,
        error: 'No backup available',
        data: createDefaultPlayerProgress(),
        usedDefault: true
      };
    }
    
    const parsed = JSON.parse(backup);
    
    // Validate backup data
    const validation = validatePlayerProgress(parsed);
    if (!validation.valid) {
      return {
        success: false,
        error: 'Backup data is also corrupted',
        data: createDefaultPlayerProgress(),
        usedDefault: true
      };
    }
    
    // Restore to main storage
    localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, backup);
    
    return {
      success: true,
      data: parsed,
      usedDefault: false
    };
    
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: createDefaultPlayerProgress(),
      usedDefault: true
    };
  }
}

/**
 * Detect and attempt to repair corrupted data
 */
function detectAndRepairCorruption(): { repaired: boolean; action: string } {
  const progress = localStorage.getItem(STORAGE_KEYS.PLAYER_PROGRESS);
  
  if (!progress) {
    return { repaired: false, action: 'no_data' };
  }
  
  try {
    const parsed = JSON.parse(progress);
    const validation = validatePlayerProgress(parsed);
    
    if (validation.valid) {
      return { repaired: false, action: 'data_valid' };
    }
    
    // Attempt repair strategies
    
    // Strategy 1: Fix negative values
    if (parsed.currency?.coins < 0) {
      parsed.currency.coins = 0;
    }
    
    // Strategy 2: Cap exceeded values
    if (parsed.progress?.freeLevels?.completed > 10) {
      parsed.progress.freeLevels.completed = 10;
    }
    
    // Strategy 3: Remove invalid level entries
    if (parsed.progress?.freeLevels?.levels) {
      Object.keys(parsed.progress.freeLevels.levels).forEach(key => {
        const levelNum = parseInt(key);
        if (levelNum < 1 || levelNum > 10) {
          delete parsed.progress.freeLevels.levels[key];
        }
      });
    }
    
    // Re-validate after repairs
    const revalidation = validatePlayerProgress(parsed);
    
    if (revalidation.valid) {
      localStorage.setItem(STORAGE_KEYS.PLAYER_PROGRESS, JSON.stringify(parsed));
      return { repaired: true, action: 'auto_repair_successful' };
    }
    
    // Strategy 4: Restore from backup
    const restoreResult = restoreFromBackup();
    if (restoreResult.success) {
      return { repaired: true, action: 'restored_from_backup' };
    }
    
    // Strategy 5: Reset to defaults
    localStorage.setItem(
      STORAGE_KEYS.PLAYER_PROGRESS, 
      JSON.stringify(createDefaultPlayerProgress())
    );
    return { repaired: true, action: 'reset_to_defaults' };
    
  } catch (error) {
    // JSON parse error - try backup
    const restoreResult = restoreFromBackup();
    if (restoreResult.success) {
      return { repaired: true, action: 'restored_from_backup_after_parse_error' };
    }
    
    // Last resort: reset
    localStorage.setItem(
      STORAGE_KEYS.PLAYER_PROGRESS, 
      JSON.stringify(createDefaultPlayerProgress())
    );
    return { repaired: true, action: 'reset_after_parse_error' };
  }
}

/**
 * Export all game data for manual backup
 */
function exportGameData(): string {
  const exportData = {
    version: SCHEMA_VERSION.current,
    exportDate: new Date().toISOString(),
    data: {
      playerProgress: loadPlayerProgress().data,
      settings: loadSettings(),
      customization: loadCustomization(),
      sessionData: loadSessionData()
    }
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Import game data from exported string
 */
function importGameData(importString: string): { success: boolean; error?: string } {
  try {
    const imported = JSON.parse(importString);
    
    // Validate import structure
    if (!imported.data || !imported.version) {
      return { success: false, error: 'Invalid import format' };
    }
    
    // Create backup before import
    createBackup();
    
    // Import each section
    if (imported.data.playerProgress) {
      const validation = validatePlayerProgress(imported.data.playerProgress);
      if (!validation.valid) {
        return { success: false, error: `Player progress invalid: ${validation.errors.join(', ')}` };
      }
      localStorage.setItem(
        STORAGE_KEYS.PLAYER_PROGRESS, 
        JSON.stringify(imported.data.playerProgress)
      );
    }
    
    if (imported.data.settings) {
      localStorage.setItem(
        STORAGE_KEYS.SETTINGS, 
        JSON.stringify(imported.data.settings)
      );
    }
    
    return { success: true };
    
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

---

### 10. Data Migration Strategy

```typescript
// ============================================
// DATA MIGRATION
// ============================================

interface Migration {
  fromVersion: string;
  toVersion: string;
  migrate: (data: any) => any;
}

const MIGRATIONS: Migration[] = [
  // Example migration from 1.0.0 to 1.1.0
  {
    fromVersion: '1.0.0',
    toVersion: '1.1.0',
    migrate: (data) => {
      // Add new fields with defaults
      return {
        ...data,
        achievements: data.achievements || createDefaultAchievements(),
        analytics: data.analytics || createDefaultAnalytics()
      };
    }
  }
];

function migrateData(data: any, fromVersion: string, toVersion: string): any {
  let currentData = { ...data };
  let currentVersion = fromVersion;
  
  // Find and apply migrations in sequence
  while (currentVersion !== toVersion) {
    const migration = MIGRATIONS.find(m => m.fromVersion === currentVersion);
    
    if (!migration) {
      console.warn(`No migration found from ${currentVersion} to ${toVersion}`);
      break;
    }
    
    currentData = migration.migrate(currentData);
    currentData.schemaVersion = migration.toVersion;
    currentVersion = migration.toVersion;
  }
  
  return currentData;
}

// Default creators
function createDefaultPlayerProgress(): PlayerProgress {
  return {
    schemaVersion: SCHEMA_VERSION.current,
    lastUpdated: new Date().toISOString(),
    playerId: generatePlayerId(),
    progress: {
      freeLevels: {
        completed: 0,
        totalAvailable: 10,
        levels: {}
      },
      premiumLevels: {
        unlocked: false,
        purchaseDate: null,
        completed: 0,
        totalAvailable: 90,
        levels: {}
      },
      currentLevel: 1,
      highestLevelReached: 1
    },
    currency: {
      stars: { total: 0, byLevel: {} },
      coins: 0,
      totalCoinsEarned: 0,
      totalCoinsSpent: 0
    },
    achievements: createDefaultAchievements()
  };
}

function createDefaultSettings(): Settings {
  return {
    schemaVersion: SCHEMA_VERSION.current,
    lastUpdated: new Date().toISOString(),
    audio: {
      masterVolume: 0.8,
      musicVolume: 0.7,
      sfxVolume: 0.9,
      voiceVolume: 1.0,
      musicEnabled: true,
      sfxEnabled: true,
      voiceEnabled: true
    },
    gameplay: {
      difficulty: 'adaptive',
      hintFrequency: 'normal',
      timerVisible: true,
      showEquationPreview: true,
      autoAdvance: false
    },
    accessibility: {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindMode: 'none'
    },
    parental: {
      sessionTimeLimit: 30,
      dailyPlayLimit: 60,
      breakReminders: true,
      progressNotifications: false
    },
    language: 'en'
  };
}

function createDefaultSessionData(): SessionData {
  return {
    schemaVersion: SCHEMA_VERSION.current,
    installDate: new Date().toISOString(),
    lastSessionDate: null,
    sessions: {
      totalSessions: 0,
      totalPlayTimeMinutes: 0,
      averageSessionLength: 0,
      longestSession: 0,
      dailyStats: {}
    },
    mathPerformance: {
      overall: { totalProblems: 0, correctAnswers: 0, accuracy: 0 },
      byOperation: {
        addition: { total: 0, correct: 0, accuracy: 0 },
        subtraction: { total: 0, correct: 0, accuracy: 0 },
        multiplication: { total: 0, correct: 0, accuracy: 0 },
        division: { total: 0, correct: 0, accuracy: 0 }
      },
      byDifficulty: {
        easy: { total: 0, correct: 0, accuracy: 0 },
        medium: { total: 0, correct: 0, accuracy: 0 },
        hard: { total: 0, correct: 0, accuracy: 0 }
      }
    },
    engagement: {
      levelsStarted: 0,
      levelsCompleted: 0,
      completionRate: 0,
      averageStarsPerLevel: 0,
      returnRate: 0
    }
  };
}

function generatePlayerId(): string {
  return 'na_' + Math.random().toString(36).substring(2, 15);
}
```

---

### 11. Privacy Considerations (COPPA Compliance)

```typescript
// ============================================
// COPPA COMPLIANCE & PRIVACY
// ============================================

/**
 * Privacy-safe data collection principles:
 * 
 * 1. NO PERSONAL INFORMATION COLLECTED
 *    - No names, emails, or contact info
 *    - No location data
 *    - No device identifiers that can track across apps
 * 
 * 2. ANONYMOUS LOCAL STORAGE ONLY
 *    - All data stored locally in browser
 *    - No server communication
 *    - No third-party analytics
 * 
 * 3. PARENTAL CONTROLS
 *    - Parents can view all stored data
 *    - Parents can delete all data
 *    - Parents can export data
 * 
 * 4. DATA MINIMIZATION
 *    - Only collect gameplay-relevant metrics
 *    - No behavioral profiling
 *    - No advertising IDs
 */

const PRIVACY_CONFIG = {
  // Data that is NEVER collected
  neverCollect: [
    'name',
    'email',
    'phone',
    'address',
    'location',
    'device_id',
    'advertising_id',
    'photos',
    'contacts',
    'browsing_history'
  ],
  
  // Data that IS collected (anonymous gameplay only)
  collectedData: [
    'level_completion_status',
    'stars_earned',
    'gameplay_time',
    'math_problem_accuracy',
    'in_game_currency',
    'customization_choices'
  ],
  
  // Data retention
  retentionPolicy: {
    sessionData: '30_days',     // Daily stats kept for 30 days
    levelAttempts: 'unlimited', // Keep all level attempts
    analytics: '90_days'        // Aggregate analytics for 90 days
  }
};

/**
 * Get privacy report for parents
 * Shows exactly what data is stored
 */
function getPrivacyReport(): object {
  const progress = loadPlayerProgress().data;
  const settings = loadSettings();
  const sessionData = loadSessionData();
  
  return {
    reportDate: new Date().toISOString(),
    dataStored: {
      gameProgress: {
        description: 'Level completion status and stars earned',
        dataPoints: Object.keys(progress.progress.freeLevels.levels).length,
        sample: {
          levelsCompleted: progress.progress.freeLevels.completed,
          totalStars: progress.currency.stars.total
        }
      },
      gameplayStats: {
        description: 'Anonymous gameplay metrics',
        dataPoints: {
          totalSessions: sessionData.sessions.totalSessions,
          totalPlayTime: `${sessionData.sessions.totalPlayTimeMinutes} minutes`,
          problemsAttempted: sessionData.mathPerformance.overall.totalProblems
        }
      },
      settings: {
        description: 'Game preferences and parental controls',
        dataPoints: {
          audioSettings: true,
          gameplaySettings: true,
          parentalLimits: {
            sessionLimit: settings.parental.sessionTimeLimit,
            dailyLimit: settings.parental.dailyPlayLimit
          }
        }
      }
    },
    dataNotStored: PRIVACY_CONFIG.neverCollect,
    storageLocation: 'Local browser storage only - never transmitted',
    parentControls: [
      'View all stored data in Parent Dashboard',
      'Export data to file',
      'Delete all data permanently'
    ]
  };
}

/**
 * Delete all game data (parental control)
 */
function deleteAllData(): { success: boolean; deletedKeys: string[] } {
  const deletedKeys: string[] = [];
  
  Object.values(STORAGE_KEYS).forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      deletedKeys.push(key);
    }
  });
  
  Object.values(BACKUP_KEYS).forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      deletedKeys.push(key);
    }
  });
  
  return { success: true, deletedKeys };
}
```

---

## OUTPUT 11 - PARENT DASHBOARD SYSTEM

### 1. Access Method

#### 1.1 Parent Zone Button

```typescript
// Main menu integration
interface ParentZoneButtonProps {
  onAccessGranted: () => void;
}

// Position: Bottom-right corner of main menu
// Style: Subtle, non-distracting for children
const PARENT_ZONE_BUTTON = {
  position: 'bottom-right',
  offset: { x: 20, y: 20 },
  size: { width: 48, height: 48 },
  icon: 'shield-check', // FontAwesome or similar
  label: 'Parent Zone',
  colors: {
    default: 'rgba(100, 100, 100, 0.3)',
    hover: 'rgba(100, 100, 100, 0.6)',
    active: 'rgba(74, 144, 226, 0.8)'
  },
  // Semi-hidden to avoid child curiosity
  opacity: 0.4,
  hoverOpacity: 0.8
};
```

#### 1.2 Access Gate Options

```typescript
// Option 1: Math Challenge Gate
interface MathChallengeGate {
  type: 'math_challenge';
  description: 'Solve a simple math problem to access';
  
  // Random problems appropriate for parents
  // (Too hard for target age group 6-8)
  problemPool: [
    { question: '12 × 8 = ?', answer: 96 },
    { question: '144 ÷ 12 = ?', answer: 12 },
    { question: '15 + 27 + 18 = ?', answer: 60 },
    { question: '100 - 37 = ?', answer: 63 },
    { question: '7 × 9 + 5 = ?', answer: 68 },
    { question: 'What is 25% of 80?', answer: 20 },
    { question: '3² + 4² = ?', answer: 25 }
  ];
  
  ui: {
    title: 'Parent Zone',
    subtitle: 'Please solve to continue',
    inputPlaceholder: 'Your answer',
    submitButton: 'Enter',
    errorMessage: 'That\'s not quite right. Try again!',
    successMessage: 'Welcome, Parent!'
  };
}

// Option 2: Hold-to-Unlock Gate
interface HoldToUnlockGate {
  type: 'hold_to_unlock';
  description: 'Press and hold for 3 seconds';
  
  ui: {
    title: 'Parent Zone',
    instruction: 'Press and hold the button for 3 seconds',
    progressIndicator: true, // Circular progress around button
    holdDuration: 3000, // milliseconds
    
    // Visual feedback
    progressColor: '#4A90E2',
    buttonText: 'Hold to Enter',
    releasingText: 'Keep holding...',
    successText: 'Welcome, Parent!'
  };
}

// Recommended: Use both gates (configurable)
const DEFAULT_GATE_CONFIG = {
  primaryGate: 'math_challenge',
  fallbackGate: 'hold_to_unlock',
  allowSkipAfterAttempts: 3 // After 3 failed attempts, offer hold option
};
```

---

### 2. Dashboard Data Structures

#### 2.1 Dashboard State Object

```typescript
interface ParentDashboardState {
  // Summary metrics
  summary: {
    totalLevelsCompleted: number;
    totalStarsEarned: number;
    totalPlayTime: string; // Formatted as "3h 15m"
    overallAccuracy: number; // Percentage
    lastPlayed: string; // "Today", "Yesterday", "2 days ago"
    streakDays: number; // Consecutive days played
  };
  
  // Detailed progress
  progress: {
    freeLevels: LevelProgressSummary[];
    premiumLevels: LevelProgressSummary[];
    worldsUnlocked: number;
    worldsTotal: number;
  };
  
  // Learning insights
  learning: {
    strongAreas: string[];
    practiceAreas: string[];
    recentImprovement: string;
    recommendedFocus: string;
  };
  
  // Time tracking
  timeStats: {
    today: number; // minutes
    thisWeek: number;
    thisMonth: number;
    averagePerDay: number;
    averageSessionLength: number;
  };
  
  // Accuracy breakdown
  accuracy: {
    overall: number;
    byOperation: {
      addition: number;
      subtraction: number;
      multiplication: number;
      division: number;
    };
    byDifficulty: {
      easy: number;
      medium: number;
      hard: number;
    };
  };
  
  // Recent activity
  recentActivity: ActivityItem[];
}

interface LevelProgressSummary {
  levelId: number;
  completed: boolean;
  stars: number;
  bestTime: number | null;
  attempts: number;
  lastPlayed: string | null;
}

interface ActivityItem {
  date: string;
  type: 'level_complete' | 'star_earned' | 'achievement' | 'customization';
  description: string;
  details: string;
}
```

#### 2.2 Computed Dashboard Data

```typescript
// Function to compute dashboard data from raw storage
function computeDashboardData(): ParentDashboardState {
  const progress = loadPlayerProgress().data;
  const sessionData = loadSessionData();
  const settings = loadSettings();
  
  // Calculate summary metrics
  const freeLevelArray = Object.entries(progress.progress.freeLevels.levels)
    .map(([id, data]) => ({ levelId: parseInt(id), ...data }));
  
  const completedLevels = freeLevelArray.filter(l => l.completed);
  
  return {
    summary: {
      totalLevelsCompleted: completedLevels.length,
      totalStarsEarned: progress.currency.stars.total,
      totalPlayTime: formatDuration(sessionData.sessions.totalPlayTimeMinutes),
      overallAccuracy: sessionData.mathPerformance.overall.accuracy,
      lastPlayed: formatLastPlayed(sessionData.lastSessionDate),
      streakDays: calculateStreak(sessionData.sessions.dailyStats)
    },
    
    progress: {
      freeLevels: freeLevelArray,
      premiumLevels: [], // Empty until unlocked
      worldsUnlocked: Math.ceil(completedLevels.length / 10),
      worldsTotal: 10
    },
    
    learning: computeLearningInsights(sessionData),
    
    timeStats: {
      today: getTodayPlayTime(sessionData),
      thisWeek: getThisWeekPlayTime(sessionData),
      thisMonth: getThisMonthPlayTime(sessionData),
      averagePerDay: Math.round(sessionData.sessions.totalPlayTimeMinutes / 
        Object.keys(sessionData.sessions.dailyStats).length || 1),
      averageSessionLength: Math.round(sessionData.sessions.averageSessionLength)
    },
    
    accuracy: {
      overall: sessionData.mathPerformance.overall.accuracy,
      byOperation: {
        addition: sessionData.mathPerformance.byOperation.addition.accuracy,
        subtraction: sessionData.mathPerformance.byOperation.subtraction.accuracy,
        multiplication: sessionData.mathPerformance.byOperation.multiplication.accuracy,
        division: sessionData.mathPerformance.byOperation.division.accuracy
      },
      byDifficulty: {
        easy: sessionData.mathPerformance.byDifficulty.easy.accuracy,
        medium: sessionData.mathPerformance.byDifficulty.medium.accuracy,
        hard: sessionData.mathPerformance.byDifficulty.hard.accuracy
      }
    },
    
    recentActivity: generateRecentActivity(progress, sessionData)
  };
}

function computeLearningInsights(sessionData: SessionData): {
  strongAreas: string[];
  practiceAreas: string[];
  recentImprovement: string;
  recommendedFocus: string;
} {
  const operations = sessionData.mathPerformance.byOperation;
  const accuracies = [
    { name: 'Addition', accuracy: operations.addition.accuracy },
    { name: 'Subtraction', accuracy: operations.subtraction.accuracy },
    { name: 'Multiplication', accuracy: operations.multiplication.accuracy },
    { name: 'Division', accuracy: operations.division.accuracy }
  ].filter(op => op.accuracy > 0);
  
  // Sort by accuracy
  accuracies.sort((a, b) => b.accuracy - a.accuracy);
  
  const strongAreas = accuracies
    .filter(op => op.accuracy >= 85)
    .map(op => op.name);
  
  const practiceAreas = accuracies
    .filter(op => op.accuracy < 70 && op.accuracy > 0)
    .map(op => op.name);
  
  // Determine recent improvement
  const recentImprovement = accuracies.length > 0 
    ? `${accuracies[0].name} is going great!`
    : 'Just getting started!';
  
  // Recommend focus area
  const recommendedFocus = practiceAreas.length > 0
    ? `Try practicing ${practiceAreas[0]}`
    : 'Keep up the great work!';
  
  return {
    strongAreas,
    practiceAreas,
    recentImprovement,
    recommendedFocus
  };
}
```

---

### 3. Dashboard UI Component Specifications

#### 3.1 Dashboard Layout Structure

```typescript
// Mobile-first responsive layout
const DASHBOARD_LAYOUT = {
  // Container
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px',
    backgroundColor: '#F5F7FA',
    minHeight: '100vh'
  },
  
  // Header
  header: {
    height: '60px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    marginBottom: '16px'
  },
  
  // Summary cards grid
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '16px',
    
    // Desktop: 4 columns
    '@media (min-width: 600px)': {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  
  // Card component
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  },
  
  // Section spacing
  section: {
    marginBottom: '24px'
  },
  
  // Progress bars
  progressBar: {
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#E8ECF1',
    overflow: 'hidden'
  },
  
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  }
};
```

#### 3.2 Component Specifications

```typescript
// ============================================
// SUMMARY CARD COMPONENT
// ============================================
interface SummaryCardProps {
  icon: string; // FontAwesome icon name
  label: string;
  value: string | number;
  subtext?: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const SUMMARY_CARD_COLORS = {
  blue: { bg: '#E3F2FD', icon: '#1976D2', text: '#0D47A1' },
  green: { bg: '#E8F5E9', icon: '#388E3C', text: '#1B5E20' },
  orange: { bg: '#FFF3E0', icon: '#F57C00', text: '#E65100' },
  purple: { bg: '#F3E5F5', icon: '#7B1FA2', text: '#4A148C' }
};

// Example cards:
// 1. Levels Completed - blue, trophy icon
// 2. Stars Earned - orange, star icon  
// 3. Time Played - green, clock icon
// 4. Accuracy - purple, target icon

// ============================================
// PROGRESS SECTION COMPONENT
// ============================================
interface ProgressSectionProps {
  freeLevels: LevelProgressSummary[];
  premiumUnlocked: boolean;
}

const PROGRESS_SECTION = {
  // World progress bars
  worldProgress: {
    height: '32px',
    backgroundColor: '#E8ECF1',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative'
  },
  
  worldProgressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '12px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  
  // Level grid (10 levels per world)
  levelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '8px',
    marginTop: '12px'
  },
  
  levelBadge: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold'
  }
};

// Level badge states
const LEVEL_BADGE_STATES = {
  locked: {
    backgroundColor: '#E8ECF1',
    color: '#9E9E9E',
    icon: 'lock'
  },
  unlocked: {
    backgroundColor: '#FFFFFF',
    color: '#757575',
    border: '2px solid #E0E0E0'
  },
  completed_1star: {
    backgroundColor: '#FFF8E1',
    color: '#FF8F00',
    border: '2px solid #FFC107'
  },
  completed_2star: {
    backgroundColor: '#FFF3E0',
    color: '#EF6C00',
    border: '2px solid #FF9800'
  },
  completed_3star: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    border: '2px solid #4CAF50'
  }
};

// ============================================
// LEARNING INSIGHTS COMPONENT
// ============================================
interface LearningInsightsProps {
  strongAreas: string[];
  practiceAreas: string[];
  recentImprovement: string;
  recommendedFocus: string;
}

const LEARNING_INSIGHTS = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  },
  
  insightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px 0',
    borderBottom: '1px solid #E8ECF1'
  },
  
  insightIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  strongIcon: {
    backgroundColor: '#E8F5E9',
    color: '#4CAF50'
  },
  
  practiceIcon: {
    backgroundColor: '#FFF3E0',
    color: '#FF9800'
  },
  
  infoIcon: {
    backgroundColor: '#E3F2FD',
    color: '#2196F3'
  }
};

// ============================================
// ACCURACY BREAKDOWN COMPONENT
// ============================================
interface AccuracyBreakdownProps {
  overall: number;
  byOperation: {
    addition: number;
    subtraction: number;
    multiplication: number;
    division: number;
  };
}

const ACCURACY_BREAKDOWN = {
  // Donut chart for overall accuracy
  donutChart: {
    size: 120,
    strokeWidth: 12,
    colors: {
      fill: '#4CAF50',
      background: '#E8ECF1',
      text: '#333333'
    }
  },
  
  // Operation bars
  operationBar: {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 0'
    },
    
    label: {
      width: '100px',
      fontSize: '14px',
      color: '#666666'
    },
    
    barContainer: {
      flex: 1,
      height: '12px',
      backgroundColor: '#E8ECF1',
      borderRadius: '6px',
      overflow: 'hidden'
    },
    
    barFill: {
      height: '100%',
      borderRadius: '6px',
      transition: 'width 0.3s ease'
    },
    
    percentage: {
      width: '40px',
      textAlign: 'right',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333333'
    }
  }
};

// Accuracy color coding
const ACCURACY_COLORS = {
  excellent: { fill: '#4CAF50', text: '#2E7D32' },    // 90-100%
  good: { fill: '#8BC34A', text: '#558B2F' },         // 80-89%
  average: { fill: '#FFC107', text: '#F57F17' },      // 70-79%
  needsWork: { fill: '#FF9800', text: '#EF6C00' },    // 60-69%
  struggling: { fill: '#F44336', text: '#C62828' }    // <60%
};

function getAccuracyColor(accuracy: number): { fill: string; text: string } {
  if (accuracy >= 90) return ACCURACY_COLORS.excellent;
  if (accuracy >= 80) return ACCURACY_COLORS.good;
  if (accuracy >= 70) return ACCURACY_COLORS.average;
  if (accuracy >= 60) return ACCURACY_COLORS.needsWork;
  return ACCURACY_COLORS.struggling;
}

// ============================================
// TIME STATS COMPONENT
// ============================================
interface TimeStatsProps {
  today: number;
  thisWeek: number;
  thisMonth: number;
  averagePerDay: number;
  averageSessionLength: number;
}

const TIME_STATS = {
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #E8ECF1'
  },
  
  statLabel: {
    fontSize: '14px',
    color: '#666666'
  },
  
  statValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333'
  },
  
  // Visual indicator for daily limit
  dailyLimitIndicator: {
    container: {
      marginTop: '16px',
      padding: '12px',
      backgroundColor: '#F5F5F5',
      borderRadius: '8px'
    },
    
    progressBar: {
      height: '8px',
      backgroundColor: '#E0E0E0',
      borderRadius: '4px',
      overflow: 'hidden',
      marginTop: '8px'
    },
    
    progressFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    }
  }
};

// ============================================
// SETTINGS PANEL COMPONENT
// ============================================
interface SettingsPanelProps {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}

const SETTINGS_PANEL = {
  section: {
    marginBottom: '24px'
  },
  
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '12px'
  },
  
  settingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #E8ECF1'
  },
  
  settingLabel: {
    fontSize: '16px',
    color: '#333333'
  },
  
  settingDescription: {
    fontSize: '12px',
    color: '#999999',
    marginTop: '2px'
  },
  
  // Toggle switch
  toggle: {
    width: '48px',
    height: '24px',
    borderRadius: '12px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  
  toggleOn: {
    backgroundColor: '#4CAF50'
  },
  
  toggleOff: {
    backgroundColor: '#CCCCCC'
  },
  
  toggleKnob: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: '2px',
    transition: 'left 0.2s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
  },
  
  // Slider
  slider: {
    width: '120px',
    height: '4px',
    borderRadius: '2px',
    backgroundColor: '#E0E0E0',
    position: 'relative'
  },
  
  sliderFill: {
    height: '100%',
    borderRadius: '2px',
    backgroundColor: '#4CAF50'
  },
  
  sliderThumb: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    position: 'absolute',
    top: '-6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
  }
};

// ============================================
// DANGER ZONE COMPONENT (Reset Progress)
// ============================================
const DANGER_ZONE = {
  container: {
    marginTop: '32px',
    padding: '20px',
    backgroundColor: '#FFEBEE',
    borderRadius: '12px',
    border: '1px solid #EF9A9A'
  },
  
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: '8px'
  },
  
  description: {
    fontSize: '14px',
    color: '#D32F2F',
    marginBottom: '16px'
  },
  
  button: {
    padding: '12px 24px',
    backgroundColor: '#F44336',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  
  buttonDisabled: {
    backgroundColor: '#FFCDD2',
    cursor: 'not-allowed'
  }
};

// Reset confirmation modal
const RESET_CONFIRMATION_MODAL = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center'
  },
  
  warningIcon: {
    fontSize: '48px',
    color: '#F44336',
    marginBottom: '16px'
  },
  
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '12px'
  },
  
  message: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '24px',
    lineHeight: 1.5
  },
  
  buttonRow: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center'
  },
  
  cancelButton: {
    padding: '12px 24px',
    backgroundColor: '#E0E0E0',
    color: '#666666',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  
  confirmButton: {
    padding: '12px 24px',
    backgroundColor: '#F44336',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};
```

---

### 4. Screenshot/Export-Friendly Design

```typescript
// ============================================
// EXPORT & SCREENSHOT FEATURES
// ============================================

interface ExportOptions {
  format: 'png' | 'pdf' | 'json';
  sections: ('summary' | 'progress' | 'learning' | 'time' | 'accuracy')[];
  dateRange?: { start: string; end: string };
}

// Print-friendly styles
const PRINT_STYLES = `
  @media print {
    .dashboard-container {
      background: white !important;
      padding: 20px !important;
    }
    
    .dashboard-card {
      box-shadow: none !important;
      border: 1px solid #ddd !important;
      break-inside: avoid;
    }
    
    .no-print {
      display: none !important;
    }
    
    .print-only {
      display: block !important;
    }
    
    /* Header for printed reports */
    .print-header {
      display: block !important;
      text-align: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #333;
    }
    
    .print-header h1 {
      font-size: 24px;
      margin: 0;
    }
    
    .print-header p {
      font-size: 12px;
      color: #666;
      margin: 5px 0 0;
    }
  }
`;

// Screenshot button component
const SCREENSHOT_BUTTON = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '12px 20px',
  backgroundColor: '#4CAF50',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '24px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  zIndex: 100
};

// Export data function
function exportDashboardData(format: 'json' | 'csv'): string {
  const data = computeDashboardData();
  
  if (format === 'json') {
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      game: 'Numeria Archery',
      data
    }, null, 2);
  }
  
  // CSV format for spreadsheet import
  const csvRows = [
    ['Metric', 'Value'],
    ['Levels Completed', data.summary.totalLevelsCompleted],
    ['Total Stars', data.summary.totalStarsEarned],
    ['Total Play Time', data.summary.totalPlayTime],
    ['Overall Accuracy', `${data.summary.overallAccuracy}%`],
    ['Today Play Time', `${data.timeStats.today} min`],
    ['This Week Play Time', `${data.timeStats.thisWeek} min`],
    ['Average Session', `${data.timeStats.averageSessionLength} min`],
    ['Addition Accuracy', `${data.accuracy.byOperation.addition}%`],
    ['Subtraction Accuracy', `${data.accuracy.byOperation.subtraction}%`]
  ];
  
  return csvRows.map(row => row.join(',')).join('\n');
}
```

---

### 5. Complete Dashboard Page Structure

```typescript
// ============================================
// COMPLETE DASHBOARD COMPONENT
// ============================================

interface ParentDashboardProps {
  onClose: () => void;
}

function ParentDashboard({ onClose }: ParentDashboardProps) {
  const [data, setData] = useState<ParentDashboardState | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'settings'>('overview');
  const [showResetModal, setShowResetModal] = useState(false);
  
  useEffect(() => {
    setData(computeDashboardData());
  }, []);
  
  if (!data) return <LoadingState />;
  
  return (
    <div className="dashboard-container" style={DASHBOARD_LAYOUT.container}>
      {/* Print header (hidden on screen) */}
      <div className="print-only print-header">
        <h1>Numeria Archery - Progress Report</h1>
        <p>Generated on {new Date().toLocaleDateString()}</p>
      </div>
      
      {/* Header */}
      <header style={DASHBOARD_LAYOUT.header}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
          Parent Dashboard
        </h1>
        <button 
          onClick={onClose}
          className="no-print"
          style={{
            padding: '8px 16px',
            backgroundColor: '#E0E0E0',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </header>
      
      {/* Tab Navigation */}
      <nav className="no-print" style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px',
        backgroundColor: '#FFFFFF',
        padding: '4px',
        borderRadius: '12px'
      }}>
        {['overview', 'progress', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: activeTab === tab ? '#4CAF50' : 'transparent',
              color: activeTab === tab ? '#FFFFFF' : '#666666',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
      
      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab data={data} />}
      {activeTab === 'progress' && <ProgressTab data={data} />}
      {activeTab === 'settings' && <SettingsTab />}
      
      {/* Export Button */}
      <button 
        className="no-print"
        style={SCREENSHOT_BUTTON}
        onClick={() => {
          const blob = new Blob([exportDashboardData('json')], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `numeria-progress-${new Date().toISOString().split('T')[0]}.json`;
          a.click();
        }}
      >
        <span>📥</span> Export Data
      </button>
      
      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <ResetConfirmationModal 
          onCancel={() => setShowResetModal(false)}
          onConfirm={() => {
            deleteAllData();
            setShowResetModal(false);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ data }: { data: ParentDashboardState }) {
  return (
    <>
      {/* Summary Cards */}
      <div style={DASHBOARD_LAYOUT.summaryGrid}>
        <SummaryCard
          icon="trophy"
          label="Levels Completed"
          value={data.summary.totalLevelsCompleted}
          subtext={`of ${data.progress.freeLevels.length} available`}
          color="blue"
        />
        <SummaryCard
          icon="star"
          label="Stars Earned"
          value={data.summary.totalStarsEarned}
          subtext="total collected"
          color="orange"
        />
        <SummaryCard
          icon="clock"
          label="Time Played"
          value={data.summary.totalPlayTime}
          subtext={`Last: ${data.summary.lastPlayed}`}
          color="green"
        />
        <SummaryCard
          icon="bullseye"
          label="Accuracy"
          value={`${data.summary.overallAccuracy}%`}
          subtext="math problems"
          color="purple"
        />
      </div>
      
      {/* Learning Insights */}
      <section style={DASHBOARD_LAYOUT.section}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
          Learning Insights
        </h2>
        <div style={LEARNING_INSIGHTS.container}>
          {data.learning.strongAreas.length > 0 && (
            <div style={LEARNING_INSIGHTS.insightItem}>
              <div style={{...LEARNING_INSIGHTS.insightIcon, ...LEARNING_INSIGHTS.strongIcon}}>
                ✓
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Strong Areas</div>
                <div style={{ color: '#666', fontSize: '14px' }}>
                  {data.learning.strongAreas.join(', ')}
                </div>
              </div>
            </div>
          )}
          
          {data.learning.practiceAreas.length > 0 && (
            <div style={LEARNING_INSIGHTS.insightItem}>
              <div style={{...LEARNING_INSIGHTS.insightIcon, ...LEARNING_INSIGHTS.practiceIcon}}>
                !
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Practice Areas</div>
                <div style={{ color: '#666', fontSize: '14px' }}>
                  {data.learning.practiceAreas.join(', ')}
                </div>
              </div>
            </div>
          )}
          
          <div style={LEARNING_INSIGHTS.insightItem}>
            <div style={{...LEARNING_INSIGHTS.insightIcon, ...LEARNING_INSIGHTS.infoIcon}}>
              💡
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Recommendation</div>
              <div style={{ color: '#666', fontSize: '14px' }}>
                {data.learning.recommendedFocus}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Time Stats */}
      <section style={DASHBOARD_LAYOUT.section}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
          Time Tracking
        </h2>
        <div style={DASHBOARD_LAYOUT.card}>
          <div style={TIME_STATS.statRow}>
            <span style={TIME_STATS.statLabel}>Today</span>
            <span style={TIME_STATS.statValue}>{data.timeStats.today} min</span>
          </div>
          <div style={TIME_STATS.statRow}>
            <span style={TIME_STATS.statLabel}>This Week</span>
            <span style={TIME_STATS.statValue}>{data.timeStats.thisWeek} min</span>
          </div>
          <div style={TIME_STATS.statRow}>
            <span style={TIME_STATS.statLabel}>This Month</span>
            <span style={TIME_STATS.statValue}>{data.timeStats.thisMonth} min</span>
          </div>
          <div style={TIME_STATS.statRow}>
            <span style={TIME_STATS.statLabel}>Average per Day</span>
            <span style={TIME_STATS.statValue}>{data.timeStats.averagePerDay} min</span>
          </div>
          <div style={{...TIME_STATS.statRow, borderBottom: 'none'}}>
            <span style={TIME_STATS.statLabel}>Average Session</span>
            <span style={TIME_STATS.statValue}>{data.timeStats.averageSessionLength} min</span>
          </div>
        </div>
      </section>
      
      {/* Accuracy Breakdown */}
      <section style={DASHBOARD_LAYOUT.section}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
          Math Accuracy
        </h2>
        <div style={DASHBOARD_LAYOUT.card}>
          {Object.entries(data.accuracy.byOperation).map(([operation, accuracy]) => (
            accuracy > 0 && (
              <div key={operation} style={ACCURACY_BREAKDOWN.operationBar.container}>
                <span style={ACCURACY_BREAKDOWN.operationBar.label}>
                  {operation.charAt(0).toUpperCase() + operation.slice(1)}
                </span>
                <div style={ACCURACY_BREAKDOWN.operationBar.barContainer}>
                  <div style={{
                    ...ACCURACY_BREAKDOWN.operationBar.barFill,
                    width: `${accuracy}%`,
                    backgroundColor: getAccuracyColor(accuracy).fill
                  }} />
                </div>
                <span style={ACCURACY_BREAKDOWN.operationBar.percentage}>
                  {accuracy}%
                </span>
              </div>
            )
          ))}
        </div>
      </section>
    </>
  );
}

// Progress Tab Component
function ProgressTab({ data }: { data: ParentDashboardState }) {
  const completedCount = data.progress.freeLevels.filter(l => l.completed).length;
  const progressPercent = (completedCount / data.progress.freeLevels.length) * 100;
  
  return (
    <section>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
        Level Progress
      </h2>
      
      {/* Overall Progress Bar */}
      <div style={DASHBOARD_LAYOUT.card}>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold' }}>Free Levels</span>
          <span style={{ float: 'right', color: '#666' }}>
            {completedCount} of {data.progress.freeLevels.length}
          </span>
        </div>
        <div style={PROGRESS_SECTION.worldProgress}>
          <div style={{
            ...PROGRESS_SECTION.worldProgressFill,
            width: `${progressPercent}%`
          }}>
            {progressPercent >= 20 && `${Math.round(progressPercent)}%`}
          </div>
        </div>
      </div>
      
      {/* Level Grid */}
      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
          World 1: Forest Beginnings
        </h3>
        <div style={PROGRESS_SECTION.levelGrid}>
          {data.progress.freeLevels.map(level => (
            <div
              key={level.levelId}
              style={{
                ...PROGRESS_SECTION.levelBadge,
                ...(level.completed 
                  ? level.stars === 3 
                    ? LEVEL_BADGE_STATES.completed_3star
                    : level.stars === 2
                      ? LEVEL_BADGE_STATES.completed_2star
                      : LEVEL_BADGE_STATES.completed_1star
                  : level.levelId <= completedCount + 1
                    ? LEVEL_BADGE_STATES.unlocked
                    : LEVEL_BADGE_STATES.locked
                )
              }}
            >
              {level.completed ? '★'.repeat(level.stars) : level.levelId}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Settings Tab Component
function SettingsTab() {
  const [settings, setSettings] = useState<Settings>(loadSettings());
  const [showResetModal, setShowResetModal] = useState(false);
  
  const updateSetting = (path: string, value: any) => {
    const newSettings = { ...settings };
    const keys = path.split('.');
    let current: any = newSettings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setSettings(newSettings);
    saveSettings(newSettings);
  };
  
  return (
    <>
      {/* Audio Settings */}
      <section style={DASHBOARD_LAYOUT.section}>
        <h2 style={SETTINGS_PANEL.sectionTitle}>Audio</h2>
        <div style={DASHBOARD_LAYOUT.card}>
          <ToggleSetting
            label="Music"
            description="Background music during gameplay"
            value={settings.audio.musicEnabled}
            onChange={(v) => updateSetting('audio.musicEnabled', v)}
          />
          <ToggleSetting
            label="Sound Effects"
            description="Arrow shots, hits, and UI sounds"
            value={settings.audio.sfxEnabled}
            onChange={(v) => updateSetting('audio.sfxEnabled', v)}
          />
          <ToggleSetting
            label="Voice"
            description="Character voices and narration"
            value={settings.audio.voiceEnabled}
            onChange={(v) => updateSetting('audio.voiceEnabled', v)}
          />
        </div>
      </section>
      
      {/* Parental Controls */}
      <section style={DASHBOARD_LAYOUT.section}>
        <h2 style={SETTINGS_PANEL.sectionTitle}>Parental Controls</h2>
        <div style={DASHBOARD_LAYOUT.card}>
          <SliderSetting
            label="Session Time Limit"
            description="Maximum minutes per play session"
            value={settings.parental.sessionTimeLimit}
            min={5}
            max={120}
            step={5}
            unit="min"
            onChange={(v) => updateSetting('parental.sessionTimeLimit', v)}
          />
          <SliderSetting
            label="Daily Play Limit"
            description="Maximum minutes per day"
            value={settings.parental.dailyPlayLimit}
            min={10}
            max={240}
            step={10}
            unit="min"
            onChange={(v) => updateSetting('parental.dailyPlayLimit', v)}
          />
          <ToggleSetting
            label="Break Reminders"
            description="Remind to take breaks during play"
            value={settings.parental.breakReminders}
            onChange={(v) => updateSetting('parental.breakReminders', v)}
          />
        </div>
      </section>
      
      {/* Danger Zone */}
      <div style={DANGER_ZONE.container}>
        <div style={DANGER_ZONE.title}>⚠️ Danger Zone</div>
        <div style={DANGER_ZONE.description}>
          Reset all progress, settings, and customization. This cannot be undone.
        </div>
        <button 
          style={DANGER_ZONE.button}
          onClick={() => setShowResetModal(true)}
        >
          Reset All Progress
        </button>
      </div>
      
      {/* Reset Modal */}
      {showResetModal && (
        <div style={RESET_CONFIRMATION_MODAL.overlay}>
          <div style={RESET_CONFIRMATION_MODAL.modal}>
            <div style={RESET_CONFIRMATION_MODAL.warningIcon}>⚠️</div>
            <div style={RESET_CONFIRMATION_MODAL.title}>Reset All Progress?</div>
            <div style={RESET_CONFIRMATION_MODAL.message}>
              This will permanently delete all game progress, stars, coins, and 
              customization. This action cannot be undone.
            </div>
            <div style={RESET_CONFIRMATION_MODAL.buttonRow}>
              <button 
                style={RESET_CONFIRMATION_MODAL.cancelButton}
                onClick={() => setShowResetModal(false)}
              >
                Cancel
              </button>
              <button 
                style={RESET_CONFIRMATION_MODAL.confirmButton}
                onClick={() => {
                  deleteAllData();
                  window.location.reload();
                }}
              >
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper Components
function SummaryCard({ icon, label, value, subtext, color }: SummaryCardProps) {
  const colors = SUMMARY_CARD_COLORS[color];
  
  return (
    <div style={{
      ...DASHBOARD_LAYOUT.card,
      textAlign: 'center',
      padding: '20px 16px'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: colors.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 12px',
        fontSize: '24px'
      }}>
        {icon === 'trophy' && '🏆'}
        {icon === 'star' && '⭐'}
        {icon === 'clock' && '⏱️'}
        {icon === 'bullseye' && '🎯'}
      </div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
        {label}
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.text }}>
        {value}
      </div>
      {subtext && (
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
          {subtext}
        </div>
      )}
    </div>
  );
}

function ToggleSetting({ label, description, value, onChange }: {
  label: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div style={SETTINGS_PANEL.settingRow}>
      <div>
        <div style={SETTINGS_PANEL.settingLabel}>{label}</div>
        <div style={SETTINGS_PANEL.settingDescription}>{description}</div>
      </div>
      <div 
        style={{
          ...SETTINGS_PANEL.toggle,
          ...(value ? SETTINGS_PANEL.toggleOn : SETTINGS_PANEL.toggleOff)
        }}
        onClick={() => onChange(!value)}
      >
        <div style={{
          ...SETTINGS_PANEL.toggleKnob,
          left: value ? '26px' : '2px'
        }} />
      </div>
    </div>
  );
}

function SliderSetting({ label, description, value, min, max, step, unit, onChange }: {
  label: string;
  description: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  
  return (
    <div style={SETTINGS_PANEL.settingRow}>
      <div>
        <div style={SETTINGS_PANEL.settingLabel}>{label}</div>
        <div style={SETTINGS_PANEL.settingDescription}>{description}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={SETTINGS_PANEL.slider}>
          <div style={{
            ...SETTINGS_PANEL.sliderFill,
            width: `${percent}%`
          }} />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            style={{
              position: 'absolute',
              top: '-8px',
              left: 0,
              width: '100%',
              opacity: 0,
              cursor: 'pointer'
            }}
          />
        </div>
        <span style={{ fontSize: '14px', fontWeight: 'bold', minWidth: '50px' }}>
          {value}{unit}
        </span>
      </div>
    </div>
  );
}
```

---

### 6. Mobile-Responsive Breakpoints

```typescript
// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

const BREAKPOINTS = {
  mobile: '0px',
  tablet: '600px',
  desktop: '900px',
  wide: '1200px'
};

const RESPONSIVE_STYLES = {
  // Summary cards
  summaryGrid: {
    mobile: 'grid-template-columns: repeat(2, 1fr)',
    tablet: 'grid-template-columns: repeat(4, 1fr)'
  },
  
  // Level grid
  levelGrid: {
    mobile: 'grid-template-columns: repeat(5, 1fr)',
    tablet: 'grid-template-columns: repeat(10, 1fr)'
  },
  
  // Dashboard padding
  container: {
    mobile: 'padding: 12px',
    tablet: 'padding: 20px',
    desktop: 'padding: 24px; max-width: 900px; margin: 0 auto'
  },
  
  // Font sizes
  heading: {
    mobile: 'font-size: 18px',
    tablet: 'font-size: 20px'
  },
  
  cardValue: {
    mobile: 'font-size: 20px',
    tablet: 'font-size: 24px'
  }
};
```

---

## Summary

### OUTPUT 10 - Save System Key Features:

1. **localStorage Schema** - Versioned, structured data storage
2. **Player Progress** - Level completion, stars, coins, achievements
3. **Level Data** - Per-level stats, attempts, performance tracking
4. **Customization** - Quinn outfits, themes, unlocked items
5. **Settings** - Audio, gameplay, accessibility, parental controls
6. **Analytics** - Session data, math performance, engagement metrics
7. **Save/Load Functions** - TypeScript interfaces with validation
8. **Data Validation** - Comprehensive checks for data integrity
9. **Corruption Recovery** - Backups, auto-repair, restore options
10. **COPPA Compliance** - No PII, local-only storage, parental controls

### OUTPUT 11 - Parent Dashboard Key Features:

1. **Access Gate** - Math challenge or hold-to-unlock (child-resistant)
2. **Summary Metrics** - Levels, stars, time, accuracy cards
3. **Progress Tracking** - Visual level grid with star breakdown
4. **Learning Insights** - Strong/practice areas, recommendations
5. **Time Stats** - Daily, weekly, monthly tracking
6. **Accuracy Breakdown** - By math operation with visual bars
7. **Settings Panel** - Audio, parental controls with toggles/sliders
8. **Reset Function** - Confirmation modal, permanent deletion
9. **Export Feature** - JSON/CSV download for records
10. **Mobile-First** - Responsive design, touch-friendly
