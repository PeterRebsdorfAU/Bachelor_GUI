import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { ReleaseBundle } from '../models/release-bundle.model';
import {Router} from '@angular/router';
import { environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReleaseBundleService {
  // Her skriver du dit rigtige backend API endpoint senere
  private apiUrl = environment.apiUrl + '/ReleaseBundles';

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

  navigateToCreateReleaseBundle(): void {
    this.router.navigate(
      ['/release-bundles-overview/new']
    );
  }

}
