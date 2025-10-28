import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { ReleaseBundle } from '../models/release-bundle.model';

@Injectable({
  providedIn: 'root'
})
export class ReleaseBundleService {

  // Nyt endpoint
  private apiUrl = environment.apiUrl + '/GetBundles';

  constructor(private http: HttpClient, private router: Router) {}

  // Hent alle bundles
  getReleaseBundles(): Observable<ReleaseBundle[]> {
    return this.http.get<ReleaseBundle[]>(this.apiUrl);
  }

  // Filtrer aktive bundles (retired = false)
  getActiveBundles(bundles: ReleaseBundle[]): ReleaseBundle[] {
    return bundles.filter(b => !b.retired);
  }

  // Filtrer retired bundles (retired = true)
  getRetiredBundles(bundles: ReleaseBundle[]): ReleaseBundle[] {
    return bundles.filter(b => b.retired);
  }

  navigateToProgressOverview(bundleId: number): void {
    this.router.navigate(['/progress-overview', bundleId]);
  }

  navigateToCreateReleaseBundle(bundleID: number, bundleName: string): void {
    this.router.navigate(['/release-bundles-overview/new'], {
      queryParams: { bundleID, bundleName }
    });
  }
}
