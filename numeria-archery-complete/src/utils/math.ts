import { MathProblem } from '../types';

export function generateDistractors(correctAnswer: number, count: number = 3, range: number = 10): number[] {
  const distractors: number[] = [];
  const used = new Set<number>([correctAnswer]);

  if (correctAnswer > 1) {
    distractors.push(correctAnswer - 1);
    used.add(correctAnswer - 1);
  }
  if (correctAnswer < 20) {
    distractors.push(correctAnswer + 1);
    used.add(correctAnswer + 1);
  }

  while (distractors.length < count) {
    const offset = Math.floor(Math.random() * range) + 2;
    const sign = Math.random() > 0.5 ? 1 : -1;
    const distractor = correctAnswer + offset * sign;

    if (distractor > 0 && distractor <= 20 && !used.has(distractor)) {
      distractors.push(distractor);
      used.add(distractor);
    }
  }

  return distractors.slice(0, count);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function calculateStars(score: number, maxScore: number): number {
  const percentage = score / maxScore;
  if (percentage >= 0.9) return 3;
  if (percentage >= 0.6) return 2;
  if (percentage >= 0.3) return 1;
  return 0;
}
