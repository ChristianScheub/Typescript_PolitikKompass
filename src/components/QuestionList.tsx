import React from "react";
import QuestionComponent from "./views/QuestionView";
import Card from "../ui/Card/Card";
import { Question } from "../types/Question";
import Button from "../ui/Button/Button";

interface QuestionListProps {
  question: Question;
  onAnswer: (value: number) => void;
  answered: string[];
  handlePreviousQuestion: () => void;
  handleNextQuestion: () => void;
  currentQuestionIndex: number;
  filteredQuestions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({
  question,
  onAnswer,
  answered,
  handlePreviousQuestion,
  handleNextQuestion,
  currentQuestionIndex,
  filteredQuestions,
}) => {
  const hasAnswered = answered.includes(question.id); // Check if the question id is in the answered array

  return (
    <div>
      <Card>
        <div className="navigation-buttons">
        <Button onClick={handlePreviousQuestion} label="Vorherige Frage" disabled={currentQuestionIndex === 0} backgroundColor="#00695C"/>
        <Button onClick={handleNextQuestion} label="Nächste Frage" disabled={currentQuestionIndex === filteredQuestions.length - 1} backgroundColor="#00695C"/>
        </div>
        {hasAnswered && <p>Diese Frage wurde bereits beantwortet.</p>}
        <QuestionComponent question={question} onAnswer={onAnswer} />
      </Card>
    </div>
  );
};

export default QuestionList;
