import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ReleaseBundleOverviewComponent } from './release-bundle/release-bundle-overview-component/release-bundle-overview-component';
import { ProgressOverviewComponent } from './progress-overview/progress-overview';
import { NewReleaseBundleComponent } from './new-release-bundle/new-release-bundle-component/new-release-bundle-component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'release-bundles-overview',
    children: [
      { path: '', component: ReleaseBundleOverviewComponent },
      { path: 'new', component: NewReleaseBundleComponent }
    ]
  },
  { path: 'progress-overview/:bundleId', component: ProgressOverviewComponent },
  { path: '**', redirectTo: '' } // fallback til login
];
