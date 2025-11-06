export interface BundleReleaseMonitoringResponse {
  bundleReleaseID: number;
  bundleReleaseName: string;
  bundleID: number;
  bundleName: string;
  dateCreated: string;
  status: number;
  statusText: string;
  calculatedStatus: number;
  calculatedStatusText: string;
  plannedReleases: PlannedRelease[];
}

export interface PlannedRelease {
  plannedReleaseID: number;
  plannedReleaseName: string;
  systemID: number;
  systemName: string;
  releaseCandidate: string | null;
  status: number;
  statusText: string;
}
