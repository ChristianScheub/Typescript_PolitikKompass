import { Question } from '../types';

export const calculateScores = (questions: Question[], answers: number[]) => {
  let xScore = 0;
  let yScore = 0;

  questions.forEach((question, index) => {
    if (answers[index] !== undefined) {
      const answer = answers[index];
      // Basierend auf der Antwort und der Richtung zur Achse den Score anpassen
      if (question.axis === 'x') {
        xScore += (question.direction * (answer));
      } else if (question.axis === 'y') {
        yScore += (question.direction * (answer));
      }
    }
  });

  return { x: xScore, y: yScore };
};