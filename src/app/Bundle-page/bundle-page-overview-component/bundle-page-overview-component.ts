import { Component, OnInit } from '@angular/core';
import { Bundle, BundleRelease } from '../../Models/release-bundle.model';
import { BundleListComponent } from '../bundle-list-component/bundle-list-component';
import { Navbar } from '../../Navbar/navbar';
import { BundleAndReleaseBundleService } from '../bundle-and-releaseBundle.service';
import { RouterOutlet, Router } from '@angular/router';
import { UserRole } from '../../user-role.enum';
import { LoginService } from '../../Login/login-service';
import { MatFabButton } from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CreateBundleReleaseService } from '../../Create-bundle-or-release-bundle/create-bundle-release-service';
import { AddBundleDialogComponent } from '../../Create-bundle-or-release-bundle/add-bundle-dialog-component/add-bundle-dialog-component';
import { BundleReleasesDialogComponent, BundleReleasesDialogResult } from '../bundle-release-overview-dialog-component/bundle-release-dialog-component';
import { forkJoin } from 'rxjs';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-release-bundle-overview-component',
  standalone: true,
  imports: [
    BundleListComponent,
    Navbar,
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatIconModule,
    MatDivider,
    MatCardContent,
    MatFabButton,
    NgIf,
    MatCardSubtitle
  ],
  templateUrl: './bundle-page-overview-component.html',
  styleUrl: './bundle-page-overview-component.scss'
})
export class BundlePageOverviewComponent implements OnInit {

  plannedBundles: Bundle[] = [];
  releasedBundles: Bundle[] = [];
  allBundleReleases: BundleRelease[] = [];

  userRole: UserRole;
  protected readonly UserRole = UserRole;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private releaseBundleService: BundleAndReleaseBundleService,
    private createBundleReleaseService: CreateBundleReleaseService,
    private loginService: LoginService
  ) {
    this.userRole = loginService.getUser() || UserRole.Guest;
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    forkJoin({
      bundles: this.releaseBundleService.getBundles(),
      bundleReleases: this.releaseBundleService.getBundleReleases()
    }).subscribe({
      next: ({ bundles, bundleReleases }) => {
        this.allBundleReleases = bundleReleases;
        this.plannedBundles = this.releaseBundleService.getActiveBundles(bundles);
        this.releasedBundles = this.releaseBundleService.getRetiredBundles(bundles);
      },
      error: () => {
        this.plannedBundles = [];
        this.releasedBundles = [];
        this.allBundleReleases = [];
      }
    });
  }

  onBundleSelected(bundle: Bundle) {
    const releases = this.releaseBundleService.getBundleReleasesByBundleName(
      this.allBundleReleases,
      bundle.bundleName
    );

    const dialogRef = this.dialog.open(BundleReleasesDialogComponent, {
      width: '600px',
      maxHeight: '80vh',
      data: {
        bundle: bundle,
        releases: releases
      }
    });

    dialogRef.afterClosed().subscribe((result: BundleReleasesDialogResult | undefined) => {
      if (!result) return;

      if (result.action === 'select' && result.release) {
        // Navigate to the selected release
        this.router.navigate(['/checklist-overview', result.release.bundleReleaseID]);
      } else if (result.action === 'create' && result.newReleaseName) {
        // Create new bundle release
        this.createBundleReleaseService.addBundleRelease(
          bundle.bundleID,
          result.newReleaseName
        ).subscribe({
          next: (newRelease) => {
            console.log('Bundle release created:', newRelease);
            this.loadData();
          },
          error: (err) => {
            console.error('Failed to create bundle release:', err);
          }
        });
      }
    });
  }

  onCreateNewReleaseBundle() {
    const dialogRef = this.dialog.open(AddBundleDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((bundleName: string | undefined) => {
      if (!bundleName) return;

      this.createBundleReleaseService.addBundle(bundleName).subscribe({
        next: (result) => {
          console.log('Bundle created:', result);
          // Reload data to show the new bundle
          this.loadData();
        },
        error: (err) => {
          console.error('Failed to create bundle:', err);
        }
      });
    });
  }
}
