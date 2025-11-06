import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PlannedRelease, STATUS_LABELS } from '../../Models/planned-release';
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

  constructor(private dialog: MatDialog) {}

  statusLabels = STATUS_LABELS;
  statusOptions = [
    { value: 0, label: 'Release Prepared' },
    { value: 1, label: 'In Development' },
    { value: 2, label: 'User Testing' },
    { value: 3, label: 'Acceptance Testing' },
    { value: 4, label: 'Released' }
  ];

  onStatusChange(plannedReleaseId: number, newStatus: number) {
    this.statusChange.emit({ plannedReleaseId, newStatus });
  }

  getStatusClass(status?: number): string {
    switch(status) {
      case 0: return 'status-rp';
      case 1: return 'status-ibd';
      case 2: return 'status-iut';
      case 3: return 'status-iat';
      case 4: return 'status-rd';
      default: return 'status-unknown';
    }
  }

  onCreateReleaseCandidate(release: PlannedRelease) {
    const dialogRef = this.dialog.open(CreateReleaseCandidateDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        plannedReleaseId: release.plannedReleaseID,
        systemName: release.system,
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
}
