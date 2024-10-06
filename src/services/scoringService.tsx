import { Question } from "../types/Question";

export const calculateScores = (questions: Question[], answers: number[]) => {
  let xScore = 0;
  let yScore = 0;

  questions.forEach((question, index) => {
    if (answers[index] !== undefined) {
      const answer = answers[index];

      // Basierend auf der Hauptachse (axis) den Score anpassen
      if (question.axis === 'kapitalistisch') {
        xScore += (question.direction * answer);
      } else if (question.axis === 'konservativ') {
        yScore += (question.direction * answer);
      }

      // Optional: Berücksichtigung der secondAxis
      if (question.secondAxis) {
        const direction = question.direction; // Die Richtung für die secondAxis
        if (question.secondAxis === 'sozialistisch') {
          xScore += (direction * answer) / 2; // Positive Richtung
        } else if (question.secondAxis === 'konservativ') {
          yScore += (direction * answer) / 2; // Positive Richtung
        } else if (question.secondAxis === 'kapitalistisch') {
          xScore += (-direction * answer) / 2; // Negative Richtung
        } else if (question.secondAxis === 'liberal') {
          yScore += (-direction * answer) / 2; // Negative Richtung
        }
      }
    }
  });

  return { x: xScore, y: yScore };
};