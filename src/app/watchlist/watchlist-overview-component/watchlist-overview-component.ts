import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist-service';
import { SystemProgressComponent} from '../system-progress-component/system-progress-component';
import { PlannedBundleReleaseComponent} from '../planned-bundle-release-component/planned-bundle-release-component';
import { DeliveryProgressComponent} from '../delivery-progress-component/delivery-progress-component';
import { BundleProgressComponent} from '../bundle-progress-component/bundle-progress-component';
import {Navbar} from '../../layout-design/navbar/navbar';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-watchlist-overview',
  imports: [SystemProgressComponent, PlannedBundleReleaseComponent,
    DeliveryProgressComponent, BundleProgressComponent, Navbar, NgIf, NgFor],
  templateUrl: './watchlist-overview-component.html',
  styleUrls: ['./watchlist-overview-component.scss']
})
export class WatchlistOverviewComponent implements OnInit {
  bundle: any;
  systems: any[] = [];
  plannedBundle: any;
  delivery: any;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.bundle = this.watchlistService.getBundle();
    this.systems = this.watchlistService.getSystems();
    console.log(this.watchlistService.getSystems());
    this.plannedBundle = this.watchlistService.getPlannedBundle();
    this.delivery = this.watchlistService.getDelivery();
  }
}
