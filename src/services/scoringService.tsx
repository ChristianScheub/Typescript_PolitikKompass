import { Question } from '../types';

export const calculateScores = (questions: Question[], answers: number[]) => {
  let xScore = 0;
  let yScore = 0;

  questions.forEach((question, index) => {
    if (answers[index] !== undefined) {
      const answer = answers[index];
      // Basierend auf der Antwort und der Richtung zur Achse den Score anpassen
      if (question.axis === 'x') {
        xScore += (question.direction * (6 - answer)); // 6 - Antwort um die Skala von 1-5 zu invertieren
      } else if (question.axis === 'y') {
        yScore += (question.direction * (6 - answer));
      }
    }
  });

  // Normalisierung des Scores (falls erforderlich)
  const normalizedX = Math.max(-10, Math.min(10, xScore));
  const normalizedY = Math.max(-10, Math.min(10, yScore));

  return { x: normalizedX, y: normalizedY };
};