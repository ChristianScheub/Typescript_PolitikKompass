import { Question } from '../types';

export const calculateScores = (questions: Question[], answers: number[]) => {
  let xScore = 0;
  let yScore = 0;

  questions.forEach((question, index) => {
    if (answers[index] !== undefined) {
      const answer = answers[index];

      // Basierend auf der Hauptachse (axis) den Score anpassen
      if (question.axis === 'x') {
        xScore += (question.direction * answer);
      } else if (question.axis === 'y') {
        yScore += (question.direction * answer);
      }

      // Optional: Berücksichtigung der secondAxis
      if (question.secondAxis) {
        const direction = question.direction; // Die Richtung für die secondAxis
        if (question.secondAxis === 'x') {
          xScore += (direction * answer) / 2; // Positive Richtung
        } else if (question.secondAxis === 'y') {
          yScore += (direction * answer) / 2; // Positive Richtung
        } else if (question.secondAxis === '-x') {
          xScore += (-direction * answer) / 2; // Negative Richtung
        } else if (question.secondAxis === '-y') {
          yScore += (-direction * answer) / 2; // Negative Richtung
        }
      }
    }
  });

  return { x: xScore, y: yScore };
};