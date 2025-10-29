import { PlannedRelease } from './planned-release';

export interface BundleScope {
  bundleName: string;
  plannedReleases: PlannedRelease[];
}
