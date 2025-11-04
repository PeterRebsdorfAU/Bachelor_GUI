import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistResponse } from '../models/progress-overview.model';
import {Router} from '@angular/router';
import { environment} from '../../environments/environment.development';
import {Checklist} from '../models/checklist.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressOverviewService {
  private apiUrl = environment.apiUrl + '/api/Checklist';

  constructor(private http: HttpClient, private router: Router) {}

  getAllChecklists(bundleId: number): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.apiUrl}/bundleRelease/${bundleId}`);
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
