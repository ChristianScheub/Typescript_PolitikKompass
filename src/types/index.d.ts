export interface Question {
  id: string; // Eindeutige ID für jede Frage
  text: string;
  category: string;
  axis: "x" | "y"; // x für sozialistisch/kapitalistisch, y für liberal/konservativ
  direction: number; // z.B. -2 für stark sozialistisch oder stark liberal bis +2 für stark kapitalistisch oder konservativ
  secondAxis? : "x" | "-x" | "y"| "-y"; 
}