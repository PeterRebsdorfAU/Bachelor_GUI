export interface PlannedRelease {
  plannedReleaseID: number;
  name: string;
  system: string;
  releaseCandidate: string | null;
  bundle: string;
  bundleRelease: string;
  status?: number; // 0=RP, 1=IBD, 2=IUT, 3=IAT, 4=RD
}

export enum PlannedReleaseStatus {
  RP = 0,   // Release Prepared
  IBD = 1,  // In Build/Development
  IUT = 2,  // In User Testing
  IAT = 3,  // In Acceptance Testing
  RD = 4    // Released/Done
}

export const STATUS_LABELS: { [key: number]: string } = {
  0: 'Release Planned',
  1: 'In Development',
  2: 'User Testing',
  3: 'Acceptance Testing',
  4: 'Released'
};
