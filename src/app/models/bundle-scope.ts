import { PlannedRelease } from './planned-release';

export interface BundleScope {
  bundleId: number;
  plannedReleases: PlannedRelease[];
}
