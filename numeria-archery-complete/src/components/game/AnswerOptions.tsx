import React from 'react';
import { Target } from './Target';

interface AnswerOptionsProps {
  options: number[];
  correctAnswer: number;
  selectedAnswer: number | null;
  onAnswer: (answer: number) => void;
  showResult: boolean;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  correctAnswer,
  selectedAnswer,
  onAnswer,
  showResult,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {options.map((option, index) => (
        <Target
          key={`${option}-${index}`}
          value={option}
          onClick={() => onAnswer(option)}
          isCorrect={option === correctAnswer}
          showResult={showResult && selectedAnswer === option}
          disabled={showResult}
        />
      ))}
    </div>
  );
};
