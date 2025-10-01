import {SystemEntry} from './system-entry';

export interface ReleaseBundle {
  id: number;
  name: string;
  status: string;
  releaseDate?: string;
  customers: string[];
  systems: SystemEntry[];
}
