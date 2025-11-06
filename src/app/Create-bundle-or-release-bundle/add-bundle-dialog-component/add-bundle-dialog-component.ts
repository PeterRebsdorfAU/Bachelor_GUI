import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-bundle-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogModule
  ],
  templateUrl: './add-bundle-dialog-component.html',
  styleUrl: './add-bundle-dialog-component.scss'
})
export class AddBundleDialogComponent {
  dialogRef = inject(MatDialogRef<AddBundleDialogComponent>);
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
