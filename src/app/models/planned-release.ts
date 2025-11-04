export interface PlannedRelease {
  plannedReleaseID: number;
  systemID: number;
  plannedReleaseName: string;
  releaseCandidate: string | null;
  status: number;
}
