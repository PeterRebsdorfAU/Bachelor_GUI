import { Component, inject } from '@angular/core';
import {MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-bundle-release-dialog-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogTitle, MatDialogModule],
  templateUrl: './add-bundle-release-dialog-component.html',
  styleUrl: './add-bundle-release-dialog-component.scss'
})
export class AddBundleReleaseDialogComponent {
  dialogRef = inject(MatDialogRef<AddBundleReleaseDialogComponent>);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    bundleName: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.bundleName);
    }
  }
}
