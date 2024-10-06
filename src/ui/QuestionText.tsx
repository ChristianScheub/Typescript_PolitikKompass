import React from 'react';

interface QuestionTextProps {
  text: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default QuestionText;