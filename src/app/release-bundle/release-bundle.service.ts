import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { ReleaseBundle } from './release-bundle.model';

@Injectable({
  providedIn: 'root'
})
export class ReleaseBundleService {
  // Her skriver du dit rigtige backend API endpoint senere
  private apiUrl = 'https://localhost:7009/api/ReleaseBundles';

  constructor(private http: HttpClient) {}

  // Hent alle bundles
  getReleaseBundles(): Observable<ReleaseBundle[]> {
    return this.http.get<ReleaseBundle[]>(this.apiUrl);
  }

  // Hent et bundle ud fra ID
  getReleaseBundleById(id: number): Observable<ReleaseBundle> {
    return this.http.get<ReleaseBundle>(`${this.apiUrl}/${id}`);
  }
}
