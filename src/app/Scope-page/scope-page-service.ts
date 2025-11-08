import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs';
import { BundleScope } from '../Models/bundle-scope';
import { PlannedRelease } from '../Models/planned-release';
import { environment } from '../../Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ScopePageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /** Henter scope for et bundle via ID */
  getScope(bundleId: number): Observable<BundleScope> {
    return this.http.get<PlannedRelease[]>(
      `${this.apiUrl}/GetPlannedReleases?bundleReleaseID=${bundleId}`
    ).pipe(
      map((releases) => ({
        bundleId,
        plannedReleases: releases
      }))
    );
  }

  /** Tilføjer system til bundleRelease via ID, uden error-fallback */
  addSystemToBundle(bundleId: number, systemName: string): Observable<BundleScope> {
    return this.http.post(
      `${this.apiUrl}/System/InsertSystem?systemName=${encodeURIComponent(systemName)}`,
      {}
    ).pipe(
      // 1: Opret planned release
      switchMap((system: any) =>
        this.http.post(
          `${this.apiUrl}/AddPlannedRelease?systemId=${system.systemID}&plannedReleaseName=${encodeURIComponent(systemName)}`,
          {}
        )
      ),
      // 2: Tilføj planned release til bundle
      switchMap((planned: any) =>
        this.http.post(
          `${this.apiUrl}/AddPlannedReleaseInBundleRelease?bundleReleaseId=${bundleId}&plannedReleaseId=${planned.plannedReleaseID}`,
          {}
        )
      ),
      // 3: Returnér opdateret scope
      switchMap(() => this.getScope(bundleId))
    );
  }

  /** Fjerner PlannedRelease via ID */
  removeSystemFromBundle(bundleId: number, plannedReleaseId: number): Observable<BundleScope> {
    return this.http.delete(
      `${this.apiUrl}/DeletePlannedRelease?plannedReleaseId=${plannedReleaseId}`
    ).pipe(
      switchMap(() => this.getScope(bundleId))
    );
  }

  /** Opdaterer status for en PlannedRelease */
  updatePlannedReleaseStatus(plannedReleaseId: number, newStatus: number): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/UpdatePlannedReleaseStatus?plannedReleaseId=${plannedReleaseId}&newStatus=${newStatus}`,
      {}
    );
  }

  /** Tildeler en release candidate til en PlannedRelease */
  assignReleaseCandidate(plannedReleaseId: number, releaseCandidate: string): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/AssignReleaseCandidate?plannedReleaseId=${plannedReleaseId}&releaseCandidate=${encodeURIComponent(releaseCandidate)}`,
      {}
    );
  }
}
