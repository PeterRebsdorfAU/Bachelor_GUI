import {Component, OnInit} from '@angular/core';
import {ReleaseBundle} from '../release-bundle.model'
import {ReleaseBundleListComponent} from '../release-bundle-list-component/release-bundle-list-component';
import {Navbar} from '../../layout-design/navbar/navbar';
import {ReleaseBundleService} from '../release-bundle.service'
import {ReleaseBundleEnum} from '../release-bundle.enum';
import {RouterOutlet} from '@angular/router';
import { UserRole } from '../../user-role.enum';
import { UserService } from '../../user-service/user';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-release-bundle-overview-component',
  standalone: true,
  imports: [
    ReleaseBundleListComponent,
    Navbar,
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatIconModule,
    MatDivider,
    MatCardContent
  ],
  templateUrl: './release-bundle-overview-component.html',
  styleUrl: './release-bundle-overview-component.scss'
})
export class ReleaseBundleOverviewComponent implements OnInit {
  plannedBundles: ReleaseBundle[] = [];
  releasedBundles: ReleaseBundle[] = [];
  userRole: UserRole;

  constructor(private releaseBundleService: ReleaseBundleService, private userService: UserService) {
    this.userRole = userService.getUser() || UserRole.Guest;
  }

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

  protected readonly UserRole = UserRole;
}
