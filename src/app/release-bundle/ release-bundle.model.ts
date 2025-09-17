export interface ReleaseBundle {
  id: number;
  name: string;
  status: 'planned' | 'released' | 'in-progress';
  releaseDate?: string;
}
