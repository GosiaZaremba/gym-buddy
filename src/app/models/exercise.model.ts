export type Category =
  | 'chest and biceps'
  | 'back'
  | 'legs'
  | 'shoulders and triceps';

export interface Exercise {
  category: Category;
  name: string;
  minWeight: number;
  maxWeight: number;
  machineLevelRange?: string; // np. "1–4"
}
