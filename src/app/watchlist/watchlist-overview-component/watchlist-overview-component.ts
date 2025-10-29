import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Navbar } from '../../layout-design/navbar/navbar';
import { BundleProgressComponent } from '../bundle-progress-component/bundle-progress-component';
import { SystemProgressComponent } from '../system-progress-component/system-progress-component';
import { PlannedBundleReleaseComponent } from '../planned-bundle-release-component/planned-bundle-release-component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-watchlist-overview',
  standalone: true,
  imports: [
    Navbar,
    BundleProgressComponent,
    SystemProgressComponent,
    PlannedBundleReleaseComponent,
    NgIf,
    NgFor
  ],
  templateUrl: './watchlist-overview-component.html',
  styleUrls: ['./watchlist-overview-component.scss']
})
export class WatchlistOverviewComponent implements OnInit {
  data: any | undefined;

  constructor(
    private watchlistService: WatchlistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['bundleReleaseID'];
      if (!id) {
        console.error('No bundleReleaseID provided');
        return;
      }

      this.watchlistService.getBundleReleaseMonitoring(id).subscribe({
        next: response => {
          this.data = response;
          console.log('New API data received:', response);
        },
        error: err => console.error('Failed to load bundle release monitoring', err)
      });
    });
  }
}
