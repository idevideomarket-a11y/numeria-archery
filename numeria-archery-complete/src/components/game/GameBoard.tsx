import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathProblem } from './MathProblem';
import { AnswerOptions } from './AnswerOptions';
import { Level } from '../../types';
import { generateDistractors, shuffleArray } from '../../utils/math';
import { useAudio } from '../../hooks/useAudio';

interface GameBoardProps {
  level: Level;
  onComplete: (score: number, stars: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ level, onComplete }) => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  
  const { playSound } = useAudio();

  const currentProblem = level.problems[currentProblemIndex];

  useEffect(() => {
    const distractors = generateDistractors(currentProblem.answer, 3);
    const allOptions = shuffleArray([currentProblem.answer, ...distractors]);
    setOptions(allOptions);
    setSelectedAnswer(null);
    setShowResult(false);
    setFeedback(null);
  }, [currentProblemIndex, currentProblem]);

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === currentProblem.answer;
    
    if (isCorrect) {
      setFeedback('correct');
      playSound('correct');
      setScore(prev => prev + 10);
    } else {
      setFeedback('wrong');
      playSound('wrong');
    }

    setTimeout(() => {
      if (currentProblemIndex < level.problems.length - 1) {
        setCurrentProblemIndex(prev => prev + 1);
      } else {
        const maxScore = level.problems.length * 10;
        const stars = score >= maxScore * 0.9 ? 3 : score >= maxScore * 0.6 ? 2 : score >= maxScore * 0.3 ? 1 : 0;
        onComplete(score + (isCorrect ? 10 : 0), stars);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 md:gap-10">
      <div className="text-base md:text-lg text-gray-600">
        Problem {currentProblemIndex + 1} of {level.problems.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProblemIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <MathProblem problem={currentProblem} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`text-xl md:text-2xl font-bold ${
              feedback === 'correct' ? 'text-meadow-green' : 'text-orange-500'
            }`}
          >
            {feedback === 'correct' ? '🎉 Great job!' : '😅 Try again next time!'}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProblemIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <AnswerOptions
            options={options}
            correctAnswer={currentProblem.answer}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
            showResult={showResult}
          />
        </motion.div>
      </AnimatePresence>

      <div className="text-lg md:text-xl font-bold text-academy-gold">
        Score: {score}
      </div>
    </div>
  );
};
