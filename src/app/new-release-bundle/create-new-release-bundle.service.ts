import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ReleaseBundle } from '../models/release-bundle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreateNewReleaseBundleService {
  private apiUrl = environment.apiUrl + '/ReleaseBundles';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToBundleReleaseOverview(): void {
    this.router.navigate(['/release-bundles-overview']);
  }

  createReleaseBundle(bundle: ReleaseBundle): Observable<ReleaseBundle> {
    return this.http.post<ReleaseBundle>(this.apiUrl, bundle);
  }
}
