import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importiere die Icons
import QuestionComponent from "./views/QuestionView";
import Card from "../ui/Card/Card";
import { Question } from "../types/Question";
import ProgressBar from "../ui/ProgressBar";

interface QuestionListProps {
  question: Question;
  onAnswer: (value: number) => void;
  answered: string[];
  handlePreviousQuestion: () => void;
  handleNextQuestion: () => void;
  currentQuestionIndex: number;
  totalQuestions: number;
  filteredQuestions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({
  question,
  onAnswer,
  answered,
  handlePreviousQuestion,
  handleNextQuestion,
  currentQuestionIndex,
  totalQuestions,
  filteredQuestions,
}) => {
  const hasAnswered = answered.includes(question.id); // Check if the question id is in the answered array

  return (
    <div>
      <Card>
        <div className="navigation-buttons" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              color: currentQuestionIndex === 0 ? "#ccc" : "#00695C",
            }}
          >
            <FaArrowLeft size={30} />
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === filteredQuestions.length - 1}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: currentQuestionIndex === filteredQuestions.length - 1 ? "not-allowed" : "pointer",
              color: currentQuestionIndex === filteredQuestions.length - 1 ? "#ccc" : "#00695C",
            }}
          >
            <FaArrowRight size={30} />
          </button>
        </div>

        {hasAnswered && <b>Diese Frage wurde bereits beantwortet.</b>}
        <QuestionComponent question={question} onAnswer={onAnswer} />
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      </Card>
    </div>
  );
};

export default QuestionList;