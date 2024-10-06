import React, { useEffect, useState } from "react";
import { calculateScores } from "../../services/scoringService";
import QuestionList from "../QuestionList";
import Title from "../../ui/Title";
import { Category } from "../../types/Category";
import { ButtonAlignment } from "../../types/ButtonAlignment";
import { Question } from "../../types/Question";
import { questions } from "../../data/quesions";
import FloatingBtn from "../../ui/FloatingBtn";
import { FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CoordinateSystem from "../CoordinateSystem/CoordinateSystem";
import NavbarView from "../views/NavBar/NavBarView";

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

  const categoryList = Object.values(Category); // Liste aller Kategorien

  useEffect(() => {
    console.log(`Scores updated: x = ${scores.x}, y = ${scores.y}`);
  }, [scores]);

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

    // Prüfen, ob es die letzte Frage in der Kategorie ist
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Automatisch zur nächsten Kategorie wechseln
      const currentCategoryIndex = categoryList.indexOf(currentCategory);
      if (currentCategoryIndex < categoryList.length - 1) {
        // Nächste Kategorie setzen
        const nextCategory = categoryList[currentCategoryIndex + 1];
        setCurrentCategory(nextCategory);
        setCurrentQuestionIndex(0); // Zurück zur ersten Frage in der neuen Kategorie
        setAnswers([]); // Antworten zurücksetzen, wenn die Kategorie wechselt
      } else {
        // Keine weiteren Kategorien, eventuell auf eine Ergebnisseite weiterleiten
        console.log("Alle Kategorien abgeschlossen.");
        // Hier könntest du zu einer Ergebniss-Seite navigieren
        // navigate("/results");
      }
    }
  };

  const handleCategoryChange = (category: Category) => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0);
    setAnswers([]); // Antworten zurücksetzen, wenn die Kategorie manuell gewechselt wird
  };

  const openInfo = () => {
    navigate("/legal/Info");
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="app-container">
      <NavbarView
        currentCategory={currentCategory}
        categories={Object.values(Category)}
        onCategoryChange={handleCategoryChange}
      />
      <Title text="Politik Kompass" />
      <div>
        <center>
          {filteredQuestions.length > 0 && (
            <QuestionList
              question={filteredQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              answered={answers.map((answer) => answer.id)}
              handlePreviousQuestion={handlePreviousQuestion}
              handleNextQuestion={handleNextQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={filteredQuestions.length}
              filteredQuestions={filteredQuestions}
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