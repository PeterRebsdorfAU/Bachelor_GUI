import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { BundleReleaseMonitoringResponse } from '../models/bundle-release-monitoring.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private apiUrl = environment.apiUrl + '/GetBundleReleaseMonitoring';

  constructor(private http: HttpClient) {}

  getBundleReleaseMonitoring(bundleReleaseId: number): Observable<BundleReleaseMonitoringResponse> {
    return this.http.get<BundleReleaseMonitoringResponse>(
      `${this.apiUrl}?bundleReleaseId=${bundleReleaseId}`
    );
  }
}
