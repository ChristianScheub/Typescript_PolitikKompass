import React, { useState } from "react";
import "./App.css";
import { calculateScores } from "../services/scoringService";
import QuestionList from "./QuestionList";
import ProgressBar from "./ui/ProgressBar";
import Title from "./ui/Title";
import CoordinateSystem from "./CoordinateSystemContainer";
import { questions } from "../data/quesions"; // Importiere die Question Schnittstelle
import { Question } from "../types";

const categories = ["Wirtschaft", "Umwelt", "Sozial", "Außen- und Sicherheitspolitik", "Bildung", "Digitalisierung"];

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ id: string; value: number }[]>([]); // Store answers as an array of objects
  const [showResults, setShowResults] = useState<boolean>(false);
  const [scores, setScores] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [currentCategory, setCurrentCategory] = useState<string>(categories[0]);

  // Filtered questions based on the current category
  const filteredQuestions: Question[] = questions.filter(question => question.category.includes(currentCategory));

  const handleAnswer = (value: number) => {
    const questionId = filteredQuestions[currentQuestionIndex].id.toString();

    // Update the answers array, ensuring previous answers are preserved
    const updatedAnswers = [
      ...answers.filter(answer => answer.id !== questionId), // Remove the previous answer if it exists
      { id: questionId, value } // Add the current answer
    ];
    
    setAnswers(updatedAnswers);

    // Berechne die Scores mit den aktuellen Antworten
    const calculatedScores = calculateScores(filteredQuestions, updatedAnswers.map(a => a.value)); // Get values from answers
    setScores(calculatedScores);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0); // Reset question index for new category
    setShowResults(false); // Reset results view
  };

  return (
    <div className="app-container">
      <Title text="Politischer Einstellungs-Test" />
      <div>
        <h3>Aktuelle Kategorie: {currentCategory}</h3>
        <div>
          {categories.map(category => (
            <button key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
      {!showResults ? (
        <>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={filteredQuestions.length}
          />
          {filteredQuestions.length > 0 && (
            <QuestionList
              question={filteredQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              answered={answers.map(answer => answer.id)} // Pass the answered question IDs
            />
          )}
          <CoordinateSystem userCoordinate={scores} />
        </>
      ) : (
        <>
          <CoordinateSystem userCoordinate={scores} />
        </>
      )}
    </div>
  );
};

export default App;