// release-bundle.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Bundle, BundleRelease } from '../models/release-bundle.model';

@Injectable({ providedIn: 'root' })
export class ReleaseBundleService {

  private bundlesUrl = environment.apiUrl + '/GetBundles';
  private bundleReleasesUrl = environment.apiUrl + '/GetBundleReleases';

  constructor(private http: HttpClient) {}

  getBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(this.bundlesUrl);
  }

  getBundleReleases(): Observable<BundleRelease[]> {
    return this.http.get<BundleRelease[]>(this.bundleReleasesUrl);
  }

  getActiveBundles(bundles: Bundle[]): Bundle[] {
    return bundles.filter(b => !b.retired);
  }

  getRetiredBundles(bundles: Bundle[]): Bundle[] {
    return bundles.filter(b => b.retired);
  }

  getBundleReleasesByBundleName(bundleReleases: BundleRelease[], bundleName: string): BundleRelease[] {
    return bundleReleases.filter(br => br.bundleName === bundleName);
  }
}
