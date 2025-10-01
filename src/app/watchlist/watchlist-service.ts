import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WatchlistResponse } from './watchlist-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private apiUrl = environment.apiUrl + '/Watchlist';

  constructor(private http: HttpClient) {}

  getWatchlist(bundleId: number): Observable<WatchlistResponse> {
    return this.http.get<WatchlistResponse>(`${this.apiUrl}/${bundleId}`);
  }
}
