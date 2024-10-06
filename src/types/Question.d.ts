export interface Question {
  id: string; // Eindeutige ID für jede Frage
  text: string;
  category: string;
  axis: PoliticalView; // Hauptachse: z.B. x für sozialistisch/kapitalistisch, y für liberal/konservativ
  direction: number; // z.B. -2 für stark sozialistisch oder stark liberal bis +2 für stark kapitalistisch oder konservativ an der Hauptachse
  secondAxis?: PoliticalView; // Optionale zweite Achse
}