export interface PlannedRelease {
  plannedReleaseID: number;
  system: string;
  name: string;
  releaseCandidate: string | null;
  status?: number;
  statusText?: string;
}

export enum PlannedReleaseStatus {
  ReleasePlanned = 0,
  InTesting = 1,
  TestComplete = 2,
  ReadyForProduction = 3,
  Released = 4
}

export const STATUS_LABELS: { [key in PlannedReleaseStatus]: string } = {
  [PlannedReleaseStatus.ReleasePlanned]: 'Release Planned',
  [PlannedReleaseStatus.InTesting]: 'In Testing',
  [PlannedReleaseStatus.TestComplete]: 'Test Complete',
  [PlannedReleaseStatus.ReadyForProduction]: 'Ready For Production',
  [PlannedReleaseStatus.Released]: 'Released'
};
