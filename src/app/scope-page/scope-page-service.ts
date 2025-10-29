import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { BundleScope } from '../models/bundle-scope';
import { PlannedRelease } from '../models/planned-release';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ScopePageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getScope(bundleName: string): Observable<BundleScope> {
    return this.http.get<PlannedRelease[]>(
      `${this.apiUrl}/GetPlannedReleases?bundleReleaseName=${bundleName}`
    ).pipe(
      switchMap((releases) => {
        const scope: BundleScope = {
          bundleName,
          plannedReleases: releases
        };
        return [scope];
      })
    );
  }

  addSystemToBundle(bundleName: string, systemName: string, version: string): Observable<BundleScope> {
    const plannedReleaseName = `${systemName} ${version}`; // fx "System2 v1"

    return this.http.post(`${this.apiUrl}/System/InsertSystem?systemName=${encodeURIComponent(systemName)}`, {})
      .pipe(
        switchMap(() => this.http.post(
          `${this.apiUrl}/AddPlannedRelease?systemName=${encodeURIComponent(systemName)}&plannedReleaseName=${encodeURIComponent(plannedReleaseName)}`,
          {}
        )),
        switchMap(() => this.http.post(
          `${this.apiUrl}/AddPlannedReleaseInBundleRelease?bundleReleaseName=${encodeURIComponent(bundleName)}&plannedReleaseName=${encodeURIComponent(plannedReleaseName)}`,
          {}
        )),
        switchMap(() => this.getScope(bundleName))
      );
  }


  removeSystemFromBundle(bundleName: string, plannedReleaseName: string): Observable<BundleScope> {
    return this.http.delete(
      `${this.apiUrl}/DeletePlannedRelease?plannedReleaseName=${encodeURIComponent(plannedReleaseName)}`
    ).pipe(
      switchMap(() => this.getScope(bundleName))
    );
  }

}
