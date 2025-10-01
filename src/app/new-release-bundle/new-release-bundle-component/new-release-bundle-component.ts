// new-release-bundle-component.ts
import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Navbar } from '../../layout-design/navbar/navbar';
import { MultiInputComponent } from '../input-customers-component/multi-input-component';
import {CreateNewReleaseBundleService} from '../create-new-release-bundle.service';
import {ReleaseBundle} from '../../models/release-bundle';
import {SystemEntry} from '../../models/system-entry';
import {SystemInputComponent} from '../system-input-component/system-input-component';
import {MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-release-bundle-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Navbar,
    MultiInputComponent,
    SystemInputComponent,
    MatFormFieldModule,
    MatLabel,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './new-release-bundle-component.html',
  styleUrl: './new-release-bundle-component.scss'
})
export class NewReleaseBundleComponent {
  customers: string[] = [];
  systems: SystemEntry[] = [];
  private fb = inject(FormBuilder);
  createNewReleaseBundleService = inject(CreateNewReleaseBundleService);

  constructor(private route: ActivatedRoute) {}

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
  });

  onSubmit() {
    if (this.form.valid) {
      const bundle: ReleaseBundle = {
        id: 0, // backend sets ID
        name: this.form.value.name!,
        status: '', // backend sets status
        customers: this.customers,
        systems: this.systems // nu er det SystemEntry[]
      };

      this.createNewReleaseBundleService.createReleaseBundle(bundle).subscribe({
        next: (created) => {
          this.createNewReleaseBundleService.navigateToBundleReleaseOverview();
        },
        error: (err) => {
          console.error('Failed to create bundle:', err);
        }
      });
    }
  }
}
