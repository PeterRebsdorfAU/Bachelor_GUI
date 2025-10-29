import { Component, OnInit } from '@angular/core';
import { ReleaseBundle } from '../../models/release-bundle.model';
import { ReleaseBundleListComponent } from '../release-bundle-list-component/release-bundle-list-component';
import { Navbar } from '../../layout-design/navbar/navbar';
import { ReleaseBundleService } from '../release-bundle.service';
import { RouterOutlet, Router } from '@angular/router';
import { UserRole } from '../../user-role.enum';
import { LoginService } from '../../login/login-service';
import { MatFabButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CreateBundleReleaseService } from '../../create-bundle-release/create-bundle-release-service'
import { AddBundleReleaseDialogComponent } from '../../create-bundle-release/add-bundle-release-dialog-component/add-bundle-release-dialog-component';

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
    MatCardContent,
    MatFabButton,
    NgIf
  ],
  templateUrl: './release-bundle-overview-component.html',
  styleUrl: './release-bundle-overview-component.scss'
})
export class ReleaseBundleOverviewComponent implements OnInit {

  plannedBundles: ReleaseBundle[] = [];
  releasedBundles: ReleaseBundle[] = [];

  userRole: UserRole;
  protected readonly UserRole = UserRole;

  constructor(
    private dialog: MatDialog,
    private bundleService: CreateBundleReleaseService,
    private router: Router,
    private releaseBundleService: ReleaseBundleService,
    private loginService: LoginService
  ) {
    this.userRole = loginService.getUser() || UserRole.Guest;
  }

  ngOnInit(): void {
    this.releaseBundleService.getReleaseBundles().subscribe({
      next: (bundles: ReleaseBundle[]) => {
        this.plannedBundles = this.releaseBundleService.getActiveBundles(bundles);
        this.releasedBundles = this.releaseBundleService.getRetiredBundles(bundles);
      },
      error: () => {
        this.plannedBundles = [];
        this.releasedBundles = [];
      }
    });
  }

  onBundleSelected(bundle: ReleaseBundle) {
    this.router.navigate(['/progress-overview', bundle.bundleID]);
  }

  onCreateNewReleaseBundle() {
    const dialogRef = this.dialog.open(AddBundleReleaseDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((bundleName: string | undefined) => {
      if (!bundleName) return;

      this.bundleService.addBundle(bundleName).subscribe((res: any) => {
        const bundleID = res.bundleID;
        const name = res.bundleName;

        this.router.navigate(['/release-bundles-overview/new'], {
          queryParams: { bundleID, bundleName: name }
        });
      });
    });
  }
}
