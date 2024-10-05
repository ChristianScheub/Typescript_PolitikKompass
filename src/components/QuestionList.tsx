import React from "react";
import { Question } from "../types";
import QuestionComponent from "./QuestionComponent";

interface QuestionListProps {
  question: Question;
  onAnswer: (value: number) => void;
  answered: string[]; // Change to string[]
}

const QuestionList: React.FC<QuestionListProps> = ({ question, onAnswer, answered }) => {
  const hasAnswered = answered.includes(question.id); // Check if the question id is in the answered array

  return (
    <div>
      <QuestionComponent question={question} onAnswer={onAnswer} />
      {hasAnswered && <p>Diese Frage wurde bereits beantwortet.</p>}
    </div>
  );
};

export default QuestionList;