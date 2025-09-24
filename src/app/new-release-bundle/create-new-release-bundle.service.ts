import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {ReleaseBundle} from '../release-bundle/release-bundle.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateNewReleaseBundleService {
  private apiUrl = 'https://localhost:7009/api/ReleaseBundles';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToBundleReleaseOverview(): void {
    console.log('Navigating to overview...');
    this.router.navigate(['/release-bundles-overview']);
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
