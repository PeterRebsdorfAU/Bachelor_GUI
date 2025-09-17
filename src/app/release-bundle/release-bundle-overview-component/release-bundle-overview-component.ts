import { Component } from '@angular/core';
import { ReleaseBundle } from '../ release-bundle.model';
import { ReleaseBundleListComponent } from '../release-bundle-list-component/release-bundle-list-component';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-release-bundle-overview-component',
  standalone: true,
  imports: [ ReleaseBundleListComponent, Navbar],
  templateUrl: './release-bundle-overview-component.html',
  styleUrl: './release-bundle-overview-component.scss'
})
export class ReleaseBundleOverviewComponent {
  plannedBundles: ReleaseBundle[] = [
    { id: 1, name: 'Bundle A', status: 'planned' },
    { id: 2, name: 'Bundle B', status: 'planned' }
  ];

  releasedBundles: ReleaseBundle[] = [
    { id: 3, name: 'Bundle X', status: 'released', releaseDate: '2025-08-01' },
    { id: 4, name: 'Bundle Y', status: 'released', releaseDate: '2025-08-10' }
  ];
}
