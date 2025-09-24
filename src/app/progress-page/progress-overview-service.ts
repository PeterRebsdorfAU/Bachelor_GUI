import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistResponse } from './progress-overview.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgressOverviewService {

  private apiUrl = 'https://localhost:7009/api/Checklist';
  constructor(private http: HttpClient, private router: Router) {}

  getChecklist(bundleId: number): Observable<ChecklistResponse> {
    return this.http.get<ChecklistResponse>(`${this.apiUrl}/${bundleId}`);
  }

  navigateToScopePage(bundleId: number) {
    this.router.navigate(['/scope-page', bundleId]);
  }
}
