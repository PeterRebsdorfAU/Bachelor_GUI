import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {PlannedRelease, PlannedReleaseStatus, STATUS_LABELS} from '../../Models/planned-release';
import { SystemDeleteFormComponent } from '../system-delete-form-component/system-delete-form-component';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateReleaseCandidateDialogComponent
} from '../create-release-candidate-dialog-component/create-release-candidate-dialog-component';

@Component({
  selector: 'app-system-list',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    SystemDeleteFormComponent
  ],
  templateUrl: './system-list-component.html',
  styleUrl: './system-list-component.scss'
})
export class SystemListComponent {
  @Input() systems: PlannedRelease[] = [];
  @Input() bundleId: number | undefined;
  @Output() deleteSystem = new EventEmitter<number>();
  @Output() statusChange = new EventEmitter<{ plannedReleaseId: number; newStatus: number }>();
  @Output() createReleaseCandidate = new EventEmitter<{ plannedReleaseId: number; releaseCandidate: string }>();
  protected readonly PlannedReleaseStatus = PlannedReleaseStatus;

  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    console.log('Systems:', this.systems);
  }
  statusOptions = Object.entries(STATUS_LABELS).map(([value, label]) => ({
    value: Number(value),
    label
  }));

  onStatusChange(plannedReleaseId: number, newStatus: number) {
    this.statusChange.emit({ plannedReleaseId, newStatus });
  }

  getStatusClass(status?: number): string {
    switch(status) {
      case PlannedReleaseStatus.ReleasePlanned: return 'status-rp';
      case PlannedReleaseStatus.TestReady: return 'status-ibd';
      case PlannedReleaseStatus.TestComplete: return 'status-iut';
      case PlannedReleaseStatus.ReadyForProduction: return 'status-iat';
      case PlannedReleaseStatus.Released: return 'status-rd';
      default: return 'status-unknown';
    }
  }

  onCreateReleaseCandidate(release: PlannedRelease) {
    const dialogRef = this.dialog.open(CreateReleaseCandidateDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        plannedReleaseId: release.plannedReleaseID,
        systemName: release.name,
        currentCandidate: release.releaseCandidate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createReleaseCandidate.emit({
          plannedReleaseId: release.plannedReleaseID,
          releaseCandidate: result
        });
      }
    });
  }

  getStatusLabel(status: number | null | undefined): string {
    console.log(status);
    const statusValue = status ?? PlannedReleaseStatus.ReleasePlanned;
    return STATUS_LABELS[statusValue as PlannedReleaseStatus] || 'Unknown Status';
  }

  getStatusValue(status: number | undefined): number {
    console.log(status);
    return status ?? PlannedReleaseStatus.ReleasePlanned;
  }
}
