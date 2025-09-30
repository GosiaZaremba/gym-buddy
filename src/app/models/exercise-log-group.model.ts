export interface ExerciseLogGroup {
  date: string; // ISO date string
  exerciseCategory: string;
  exercises: {
    name: string;
    minWeight: number;
    maxWeight: number;
  }[];
}
