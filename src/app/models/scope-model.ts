import { SystemEntry } from './system-entry';

export interface BundleScope {
  bundleId: number;
  bundleName: string;
  systems: SystemEntry[];
}
