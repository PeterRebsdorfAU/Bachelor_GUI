// new-release-bundle-component.ts
import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Navbar } from '../../layout-design/navbar/navbar';
import { MultiInputComponent } from '../../layout-design/multi-input-component/multi-input-component';
import {ReleaseBundleService} from '../../release-bundle/release-bundle.service';

@Component({
  selector: 'app-new-release-bundle-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Navbar, MultiInputComponent],
  templateUrl: './new-release-bundle-component.html',
  styleUrl: './new-release-bundle-component.scss'
})
export class NewReleaseBundleComponent {
  customers: string[] = [];
  systems: string[] = [];
  private fb = inject(FormBuilder);
  releaseBundleService = inject(ReleaseBundleService);

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const name = params['name'];
      if (name) {
        this.form.patchValue({ name });
      }
    });
  }

  form = this.fb.group({
    name: ['', Validators.required],
    releaseDate: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      const bundle = {
        name: this.form.value.name!,
        releaseDate: this.form.value.releaseDate!,
        customers: this.customers,
        systems: this.systems
      };

      this.releaseBundleService.createReleaseBundle(bundle).subscribe({
        next: (created) => {
          this.router.navigate(['/release-bundles-overview']);
        },
        error: (err) => {
          console.error('Failed to create bundle:', err);
        }
      });
    }
  }

}
