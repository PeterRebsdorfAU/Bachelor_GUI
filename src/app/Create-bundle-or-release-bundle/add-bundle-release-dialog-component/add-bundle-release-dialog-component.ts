import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface AddBundleReleaseDialogData {
  bundleID: number;
  bundleName: string;
}

@Component({
  selector: 'app-add-bundle-release-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogModule
  ],
  templateUrl: './add-bundle-release-dialog-component.html',
  styleUrl: './add-bundle-release-dialog-component.scss'
})
export class AddBundleReleaseDialogComponent {
  dialogRef = inject(MatDialogRef<AddBundleReleaseDialogComponent>);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    releaseName: ['', Validators.required]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: AddBundleReleaseDialogData) {}

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.releaseName);
    }
  }
}
