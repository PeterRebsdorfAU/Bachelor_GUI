import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { ReleaseBundle } from './release-bundle.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReleaseBundleService {
  // Her skriver du dit rigtige backend API endpoint senere
  private apiUrl = 'https://localhost:7009/api/ReleaseBundles';

  constructor(private http: HttpClient, private router: Router) {}

  // Hent alle bundles
  getReleaseBundles(): Observable<ReleaseBundle[]> {
    return this.http.get<ReleaseBundle[]>(this.apiUrl);
  }

  // Hent et bundle ud fra ID
  getReleaseBundleById(id: number): Observable<ReleaseBundle> {
    return this.http.get<ReleaseBundle>(`${this.apiUrl}/${id}`);
  }

  // Naviger til progress overview for et bundle
  navigateToProgressOverview(bundleId: number): void {
    this.router.navigate(['/progress-overview', bundleId]);
  }


  navigateToCreateReleaseBundle(name: string): void {
    this.router.navigate(
      ['/release-bundles-overview/new'],
      { queryParams: {name } }
    );
  }

  // release-bundle.service.ts
  createReleaseBundle(bundle: {
    name: string;
    releaseDate: string;
    customers: string[];
    systems: string[];
  }): Observable<ReleaseBundle> {
    return this.http.post<ReleaseBundle>(this.apiUrl, bundle);
  }

}
