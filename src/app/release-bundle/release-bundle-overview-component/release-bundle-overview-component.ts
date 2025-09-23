import {Component, OnInit} from '@angular/core';
import {ReleaseBundle} from '../release-bundle.model'
import {ReleaseBundleListComponent} from '../release-bundle-list-component/release-bundle-list-component';
import {Navbar} from '../../layout-design/navbar/navbar';
import {ReleaseBundleService} from '../release-bundle.service'
import {ReleaseBundleEnum} from '../release-bundle.enum';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-release-bundle-overview-component',
  standalone: true,
  imports: [ReleaseBundleListComponent, Navbar, RouterOutlet],
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

  onBundleSelected(bundle: ReleaseBundle) {
    this.releaseBundleService.navigateToProgressOverview(bundle.id);
  }

  onCreateNewReleaseBundle() {
    const name = prompt('Enter name for new release bundle:');
    if (!name) {
      return;
    }
    this.releaseBundleService.navigateToCreateReleaseBundle(name);
  }

}
