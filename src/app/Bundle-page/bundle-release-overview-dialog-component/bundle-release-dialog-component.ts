import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BundleRelease } from '../../Models/release-bundle.model';
import { NgForOf, NgIf, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { AddBundleReleaseDialogComponent } from '../../Create-bundle-or-release-bundle/add-bundle-release-dialog-component/add-bundle-release-dialog-component';
import { LoginService } from '../../Login/login-service';
import { UserRole } from '../../user-role.enum';
import {BundleReleasesDialogData, BundleReleasesDialogResult} from '../../Models/bundle-release-dialog-data.model';

@Component({
  selector: 'app-bundle-releases-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatDivider,
    DatePipe
  ],
  templateUrl: './bundle-release-dialog-component.html',
  styleUrl: './bundle-release-dialog-component.scss'
})
export class BundleReleasesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BundleReleasesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BundleReleasesDialogData,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {}

  get isReleaseManager(): boolean {
    return this.loginService.getUser() === UserRole.ReleaseManager;
  }

  onReleaseSelected(release: BundleRelease) {
    this.dialogRef.close({ action: 'select', release } as BundleReleasesDialogResult);
  }

  onCreateNewRelease() {
    if (!this.isReleaseManager) {
      return;
    }

    const createDialogRef = this.dialog.open(AddBundleReleaseDialogComponent, {
      width: '450px',
      height: '300px',
      data: {
        bundleID: this.data.bundle.bundleID,
        bundleName: this.data.bundle.bundleName
      }
    });

    createDialogRef.afterClosed().subscribe((releaseName: string | undefined) => {
      if (releaseName) {
        this.dialogRef.close({
          action: 'create',
          newReleaseName: releaseName
        } as BundleReleasesDialogResult);
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
