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
        <Button onClick={() => handleOptionClick(2)} label="Stimme voll zu" />
        <Button onClick={() => handleOptionClick(1)} label="Stimme zu" />
        <Button onClick={() => handleOptionClick(0)} label="Neutral" />
        <Button onClick={() => handleOptionClick(-1)} label="Stimme nicht zu" />
        <Button onClick={() => handleOptionClick(-2)} label="Stimme überhaupt nicht zu" />
      </div>
    </div>
  );
};

export default QuestionComponent;