import {Bundle, BundleRelease} from './release-bundle.model';

export interface BundleReleasesDialogData {
  bundle: Bundle;
  releases: BundleRelease[];
}

export interface BundleReleasesDialogResult {
  action: 'select' | 'create';
  release?: BundleRelease;
  newReleaseName?: string;
}

export interface AddBundleReleaseDialogData {
  bundleID: number;
  bundleName: string;
}
