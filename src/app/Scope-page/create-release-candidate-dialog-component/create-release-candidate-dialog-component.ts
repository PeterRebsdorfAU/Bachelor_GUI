import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {ReleaseCandidateDialogData} from '../../Models/release-candidate-dialog.model';

@Component({
  selector: 'app-release-candidate-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: `create-release-candidate-dialog-component.html`,
  styleUrl: 'create-release-candidate-dialog-component.scss'
})
export class CreateReleaseCandidateDialogComponent {
  releaseCandidate = '';

  constructor(
    public dialogRef: MatDialogRef<CreateReleaseCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReleaseCandidateDialogData
  ) {
    if (data.currentCandidate) {
      this.releaseCandidate = data.currentCandidate;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.releaseCandidate.trim()) {
      this.dialogRef.close(this.releaseCandidate.trim());
    }
  }
}
