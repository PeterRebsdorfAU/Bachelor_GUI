export interface SystemEntry {
  name: string;
  version?: string;
}

export interface BundleScope {
  bundleId: number;
  bundleName: string;
  systems: SystemEntry[];
}
