import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScopePageService } from '../scope-page-service';
import { Navbar } from '../../Navbar/navbar';
import { BundleScope } from '../../Models/bundle-scope';
import { SystemListComponent } from '../system-list-component/system-list-component';
import { SystemAddFormComponent } from '../system-add-form-component/system-add-form-component';
import { PlannedRelease } from '../../Models/planned-release';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scope-page-overview-component',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    SystemListComponent,
    SystemAddFormComponent,
    MatSnackBarModule
  ],
  templateUrl: './scope-page-overview-component.html',
  styleUrl: './scope-page-overview-component.scss'
})
export class ScopePageOverviewComponent implements OnInit {
  bundleId!: number;
  scope?: BundleScope;
  bundleReleaseName?: string;

  constructor(
    private route: ActivatedRoute,
    private scopeService: ScopePageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bundleId = Number(this.route.snapshot.paramMap.get('bundleId'));
    this.route.queryParams.subscribe(params => {
      this.bundleReleaseName = params['bundleReleaseName'];
    });
    this.loadScope();
  }

  // Load the scope through the service
  private loadScope() {
    this.scopeService.getScope(this.bundleId)
      .subscribe(s => this.scope = s);
  }

  // Success og error messages
  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: ['snackbar-error']
    });
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  // Add system
  onAddSystem(event: { systemName: string;}) {
    this.scopeService.addSystemToBundle(this.bundleId, event.systemName)
      .subscribe({
        next: updatedScope => {
          this.scope = updatedScope;
          this.showSuccessMessage('System added successfully!');
        },
        error: err => {
          this.showErrorMessage('Failed to add system');
          console.error(err);
        }
      });
  }

  // Delete system
  onDeleteSystem(plannedReleaseId: number) {
    this.scopeService.removeSystemFromBundle(this.bundleId, plannedReleaseId)
      .subscribe({
        next: scope => {
          this.scope = scope;
          this.showSuccessMessage('System removed successfully!');
        },
        error: err => {
          this.showErrorMessage('Failed to remove system');
          console.error(err);
        }
      });
  }

  // System status changes
  onStatusChange(event: { plannedReleaseId: number; newStatus: number }) {
    this.scopeService.updatePlannedReleaseStatus(event.plannedReleaseId, event.newStatus)
      .subscribe({
        next: () => {
          this.showSuccessMessage('Status updated successfully!');
          this.loadScope();
        },
        error: err => {
          this.showErrorMessage('Failed to update status');
          console.error(err);
        }
      });
  }

  // Create a release candidate for a system
  onCreateReleaseCandidate(event: { plannedReleaseId: number; releaseCandidate: string }) {
    this.scopeService.assignReleaseCandidate(event.plannedReleaseId, event.releaseCandidate)
      .subscribe({
        next: () => {
          this.showSuccessMessage('Release candidate created successfully!');
          this.loadScope();
        },
        error: err => {
          this.showErrorMessage('Failed to create release candidate');
          console.error(err);
        }
      });
  }
}
