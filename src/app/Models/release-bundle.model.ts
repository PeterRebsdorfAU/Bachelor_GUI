export interface Bundle {
  bundleID: number;
  bundleName: string;
  retired: boolean;
}

export interface BundleRelease {
  bundleReleaseID: number;
  bundleName: string;
  bundleReleaseName: string;
  dateCreated: string;
}
