export interface SystemEntry {
  name: string;               // System1
  plannedReleaseName: string; // System1 v1
  version: string | null;     // version number from API (optional)
  bundleId: number;
}
