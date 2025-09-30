export interface ExerciseLogGroup {
  date: string; // ISO date string
  exercises: {
    name: string;
    minWeight: number;
    maxWeight: number;
  }[];
}
