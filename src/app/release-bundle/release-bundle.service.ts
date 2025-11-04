// Fjern Router import og navigation-metoderne
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ReleaseBundle } from '../models/release-bundle.model';

@Injectable({ providedIn: 'root' })
export class ReleaseBundleService {

  private apiUrl = environment.apiUrl + '/GetBundles';

  constructor(private http: HttpClient) {}

  getReleaseBundles(): Observable<ReleaseBundle[]> {
    return this.http.get<ReleaseBundle[]>(this.apiUrl);
  }

  getActiveBundles(bundles: ReleaseBundle[]): ReleaseBundle[] {
    return bundles.filter(b => !b.retired);
  }

  getRetiredBundles(bundles: ReleaseBundle[]): ReleaseBundle[] {
    return bundles.filter(b => b.retired);
  }

}
