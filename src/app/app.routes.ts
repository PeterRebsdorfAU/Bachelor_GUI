import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ReleaseBundleOverviewComponent } from './release-bundle/release-bundle-overview-component/release-bundle-overview-component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'release-bundles-overview', component: ReleaseBundleOverviewComponent }, //
  { path: '**', redirectTo: '' } // fallback til login
];
