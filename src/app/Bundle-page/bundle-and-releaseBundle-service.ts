import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/environment.development';
import { Bundle, BundleRelease } from '../Models/release-bundle.model';

@Injectable({ providedIn: 'root' })
export class BundleAndReleaseBundleService {

  private bundlesUrl = environment.apiUrl + '/GetBundles';
  private bundleReleasesUrl = environment.apiUrl + '/GetBundleReleases';

  constructor(private http: HttpClient) {}

  /** GET: Hent alle bundles **/
  getBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(this.bundlesUrl);
  }

  /** GET: Hent alle bundle releases **/
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
