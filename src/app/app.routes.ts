import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ReleaseBundleOverviewComponent } from './release-bundle/release-bundle-overview-component/release-bundle-overview-component';
import { ProgressOverviewComponent } from './progress-page/progress-overview/progress-overview';
import {ScopePageOverviewComponent} from './scope-page/scope-page-overview-component/scope-page-overview-component';
import {WatchlistOverviewComponent} from './watchlist/watchlist-overview-component/watchlist-overview-component';
import {
  AddBundleReleaseComponent
} from './create-bundle-release/add-bundle-release-component/add-bundle-release-component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'release-bundles-overview',
    children: [
      { path: '', component: ReleaseBundleOverviewComponent },
      { path: 'new', component: AddBundleReleaseComponent }
    ]
  },
  { path: 'progress-overview/:bundleId', component: ProgressOverviewComponent },
  { path: 'scope-page/:bundleId', component: ScopePageOverviewComponent},
  { path: 'watchlist', component: WatchlistOverviewComponent },
  { path: '**', redirectTo: '' } // fallback til login
];
