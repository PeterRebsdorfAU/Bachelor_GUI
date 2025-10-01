import {SystemEntry} from '../models/system-entry';

export interface BundleScope {
  bundleId: number;
  bundleName: string;
  systems: SystemEntry[];
}
