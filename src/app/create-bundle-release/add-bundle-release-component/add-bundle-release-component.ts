import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateBundleReleaseService } from '../create-bundle-release-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {Navbar} from '../../layout-design/navbar/navbar';

@Component({
  selector: 'app-add-bundle-release-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, Navbar],
  templateUrl: './add-bundle-release-component.html',
  styleUrl: './add-bundle-release-component.scss'
})
export class AddBundleReleaseComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private bundleService = inject(CreateBundleReleaseService);
  private router = inject(Router);

  bundleName!: string;
  bundleID!: number;

  form = this.fb.group({
    bundleReleaseName: ['', Validators.required]
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bundleName = params['bundleName'];
      this.bundleID = +params['bundleID'];
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const releaseName = this.form.value.bundleReleaseName!;

    this.bundleService.addBundleRelease(this.bundleName, releaseName).subscribe({
      next: () => {
        this.router.navigate(['/release-bundles-overview']);
      },
      error: err => console.error('Error creating bundle release:', err)
    });
  }
}
