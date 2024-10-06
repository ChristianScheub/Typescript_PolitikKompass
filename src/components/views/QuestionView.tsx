import React from 'react';
import Button from '../../ui/Button/Button';
import QuestionText from '../../ui/QuestionText';
import { Question } from '../../types/Question';

interface QuestionProps {
  question: Question;
  onAnswer: (value: number) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const handleOptionClick = (value: number) => {
    onAnswer(value);
  };

  return (
    <div className="question-container">
      <QuestionText text={question.text} />
      <div className="options">
        <Button backgroundColor="#388E3C" onClick={() => handleOptionClick(2)} label="Stimme voll zu" />
        <Button backgroundColor="#66BB6A" onClick={() => handleOptionClick(1)} label="Stimme zu" />
        <Button backgroundColor="#FF5722" onClick={() => handleOptionClick(0)} label="Neutral" />
        <Button backgroundColor="#EF5350" onClick={() => handleOptionClick(-1)} label="Stimme nicht zu" />
        <Button backgroundColor="#B71C1C" onClick={() => handleOptionClick(-2)} label="Stimme überhaupt nicht zu" />
      </div>
    </div>
  );
};

export default QuestionComponent;