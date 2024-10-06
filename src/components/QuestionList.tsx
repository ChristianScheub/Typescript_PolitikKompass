import React from "react";
import QuestionComponent from "./views/QuestionView";
import Card from "../ui/Card/Card";
import { Question } from "../types/Question";

interface QuestionListProps {
  question: Question;
  onAnswer: (value: number) => void;
  answered: string[]; // Change to string[]
}

const QuestionList: React.FC<QuestionListProps> = ({
  question,
  onAnswer,
  answered,
}) => {
  const hasAnswered = answered.includes(question.id); // Check if the question id is in the answered array

  return (
    <div>
      <Card>
        <QuestionComponent question={question} onAnswer={onAnswer} />
        {hasAnswered && <p>Diese Frage wurde bereits beantwortet.</p>}
      </Card>
    </div>
  );
};

export default QuestionList;
