import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScopePageService {
  private apiUrl = 'https://localhost:5130/api/Scope';

  constructor(private http: HttpClient) {}

  getSystems(bundleId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${bundleId}`);
  }

  addSystem(bundleId: number, system: string): Observable<string[]> {
    return this.http.post<string[]>(`${this.apiUrl}/${bundleId}`, system);
  }

  deleteSystem(bundleId: number, system: string): Observable<string[]> {
    return this.http.delete<string[]>(`${this.apiUrl}/${bundleId}/${system}`);
  }
}
