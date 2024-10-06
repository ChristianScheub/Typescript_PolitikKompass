import React, { useEffect, useState } from "react";
import { calculateScores } from "../../services/scoringService";
import QuestionList from "../QuestionList";
import Title from "../../ui/Title";
import CoordinateSystem from "../CoordinateSystemContainer";
import { Category } from "../../types/Category";
import { ButtonAlignment } from "../../types/ButtonAlignment";
import CategoryView from "../views/CategorieView";
import { Question } from "../../types/Question";
import { questions } from "../../data/quesions";
import FloatingBtn from "../../ui/FloatingBtn";
import { FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ id: string; value: number }[]>([]);
  const [scores, setScores] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [currentCategory, setCurrentCategory] = useState<Category>(
    Category.Wirtschaft
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Scores updated: x = ${scores.x}, y = ${scores.y}`);
  }, [scores]);

  // Gefilterte Fragen basierend auf der aktuellen Kategorie
  const filteredQuestions: Question[] = questions.filter((question) =>
    question.category.includes(currentCategory)
  );

  const handleAnswer = (value: number) => {
    const questionId = filteredQuestions[currentQuestionIndex].id.toString();

    const updatedAnswers = [
      ...answers.filter((answer) => answer.id !== questionId),
      { id: questionId, value },
    ];

    setAnswers(updatedAnswers);

    const calculatedScores = calculateScores(
      filteredQuestions,
      updatedAnswers.map((a) => a.value)
    );
    setScores(calculatedScores);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0);
  };

  const openInfo = () => {
    navigate("/info");
  };

  return (
    <div className="app-container">
      <Title text="Politik Kompass" />
      <div>
        <center>
          <CategoryView
            currentCategory={currentCategory}
            categories={Object.values(Category)} // Verwende das enum für die Kategorien
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={filteredQuestions.length}
            onCategoryChange={handleCategoryChange}
          />
          {filteredQuestions.length > 0 && (
            <QuestionList
              question={filteredQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              answered={answers.map((answer) => answer.id)}
            />
          )}
          <CoordinateSystem userCoordinate={scores} />
        </center>
      </div>
      <FloatingBtn
        alignment={ButtonAlignment.RIGHT}
        icon={FaInfo}
        onClick={openInfo}
        ariaLabelledBy="Legal Notes Button"
      />
    </div>
  );
};

export default Home;
