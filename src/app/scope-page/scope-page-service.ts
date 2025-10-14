import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BundleScope } from '../models/scope-model';
import { environment } from '../../environments/environment.development';
import { SystemEntry } from '../models/system-entry';

@Injectable({
  providedIn: 'root'
})
export class ScopePageService {
  private apiUrl = environment.apiUrl + '/Scope';

  constructor(private http: HttpClient) {}

  getScope(bundleId: number): Observable<BundleScope> {
    return this.http.get<BundleScope>(`${this.apiUrl}/${bundleId}`);
  }

  addSystem(bundleId: number, system: SystemEntry): Observable<BundleScope> {
    return this.http.post<BundleScope>(`${this.apiUrl}/${bundleId}`, system, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteSystem(bundleId: number, systemName: string): Observable<BundleScope> {
    return this.http.delete<BundleScope>(`${this.apiUrl}/${bundleId}/${systemName}`);
  }
}
