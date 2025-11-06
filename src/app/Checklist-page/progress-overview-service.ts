import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistResponse } from '../Models/checklist.model';
import { Router } from '@angular/router';
import { environment } from '../../Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProgressOverviewService {
  private apiUrl = environment.apiUrl + '/api/Checklist';

  constructor(private http: HttpClient, private router: Router) {}

  // Returner ChecklistResponse (hele payload)
  getChecklists(bundleId: number): Observable<ChecklistResponse> {
    return this.http.get<ChecklistResponse>(`${this.apiUrl}/bundleRelease/${bundleId}/complete`);
  }

  toggleChecklistItem(itemId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/item/${itemId}/toggle`, {});
  }

  navigateToScopePage(bundleId: number) {
    this.router.navigate(['/scope-page', bundleId]);
  }

  navigateToWatchlistPage(bundleReleaseID: number) {
    this.router.navigate(['/watchlist'], {
      queryParams: { bundleReleaseID }
    });
  }
}
