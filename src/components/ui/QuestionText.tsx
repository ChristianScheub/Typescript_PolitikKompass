import React from 'react';

interface QuestionTextProps {
  text: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default QuestionText;