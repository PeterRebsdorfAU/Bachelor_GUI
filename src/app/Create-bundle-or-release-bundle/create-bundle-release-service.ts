import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CreateBundleReleaseService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /** POST: Opret et nyt bundle */
  addBundle(bundleName: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/AddBundle?bundleName=${bundleName}`, {});
  }

  /** POST: Opret et nyt bundle release */
  addBundleRelease(bundleID: number, bundleReleaseName: string): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/AddBundleRelease?bundleId=${bundleID}&bundleReleaseName=${bundleReleaseName}`,
      {}
    );
  }
}
