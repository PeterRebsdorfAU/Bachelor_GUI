import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist-service';
import { SystemProgressComponent } from '../system-progress-component/system-progress-component';
import { PlannedBundleReleaseComponent } from '../planned-bundle-release-component/planned-bundle-release-component';
import { DeliveryProgressComponent } from '../delivery-progress-component/delivery-progress-component';
import { BundleProgressComponent } from '../bundle-progress-component/bundle-progress-component';
import { Navbar } from '../../layout-design/navbar/navbar';
import { NgFor, NgIf } from '@angular/common';
import { WatchlistResponse } from '../watchlist-model';

@Component({
  selector: 'app-watchlist-overview',
  standalone: true,
  imports: [
    SystemProgressComponent,
    PlannedBundleReleaseComponent,
    DeliveryProgressComponent,
    BundleProgressComponent,
    Navbar,
    NgIf,
    NgFor
  ],
  templateUrl: './watchlist-overview-component.html',
  styleUrls: ['./watchlist-overview-component.scss']
})
export class WatchlistOverviewComponent implements OnInit {
  watchlist?: WatchlistResponse;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.watchlistService.getWatchlist(1).subscribe({
      next: data => {
        this.watchlist = data;
      },
      error: err => console.error('Failed to load watchlist', err)
    });
  }
}
