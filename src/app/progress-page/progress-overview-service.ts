import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistResponse } from '../models/progress-overview.model';
import {Router} from '@angular/router';
import { environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProgressOverviewService {
  private apiUrl = environment.apiUrl + '/Checklist';
  constructor(private http: HttpClient, private router: Router) {}

  getAllChecklists(bundleId: number): Observable<ChecklistResponse> {
    return this.http.get<ChecklistResponse>(`${this.apiUrl}/${bundleId}`);
  }

  navigateToScopePage(bundleId: number) {
    this.router.navigate(['/scope-page', bundleId]);
  }

  navigateToWatchlistPage() {
    this.router.navigate(['/watchlist']);
  }
}
