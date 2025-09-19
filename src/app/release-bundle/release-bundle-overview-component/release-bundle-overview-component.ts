import {Component, OnInit} from '@angular/core';
import {ReleaseBundle} from '../release-bundle.model'
import {ReleaseBundleListComponent} from '../release-bundle-list-component/release-bundle-list-component';
import {Navbar} from '../../navbar/navbar';
import {ReleaseBundleService} from '../release-bundle.service'
import {ReleaseBundleEnum} from '../release-bundle.enum';

@Component({
  selector: 'app-release-bundle-overview-component',
  standalone: true,
  imports: [ReleaseBundleListComponent, Navbar],
  templateUrl: './release-bundle-overview-component.html',
  styleUrl: './release-bundle-overview-component.scss'
})
export class ReleaseBundleOverviewComponent implements OnInit {
  plannedBundles: ReleaseBundle[] = [];
  releasedBundles: ReleaseBundle[] = [];

  constructor(private releaseBundleService: ReleaseBundleService) {}

  ngOnInit(): void {
    this.releaseBundleService.getReleaseBundles().subscribe({
      next: (bundles: ReleaseBundle[]) => {
        this.plannedBundles = bundles.filter(
          b => b.status === ReleaseBundleEnum.Planned
        );
        this.releasedBundles = bundles.filter(
          b => b.status === ReleaseBundleEnum.Released
        );
      },
      error: (err) => {
        this.plannedBundles = [];
        this.releasedBundles = [];
      }
    });
  }


}
