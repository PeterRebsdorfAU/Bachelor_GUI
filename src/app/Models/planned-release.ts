export interface PlannedRelease {
  plannedReleaseID: number;
  name: string;
  system: string;
  releaseCandidate: string | null;
  bundle: string;
  bundleRelease: string;
  status?: number;
}

export const STATUS_LABELS: { [key: number]: string } = {
  0: 'Release Planned',
  1: 'In Development',
  2: 'User Testing',
  3: 'Acceptance Testing',
  4: 'Released'
};
