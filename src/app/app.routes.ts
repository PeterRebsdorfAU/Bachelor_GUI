import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login';
import { BundlePageOverviewComponent } from './Bundle-page/bundle-page-overview-component/bundle-page-overview-component';
import { ProgressOverviewComponent } from './Checklist-page/progress-overview/progress-overview';
import {ScopePageOverviewComponent} from './Scope-page/scope-page-overview-component/scope-page-overview-component';
import {WatchlistOverviewComponent} from './Watchlist-page/watchlist-overview-component/watchlist-overview-component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'release-bundles-overview',
    children: [
      { path: '', component: BundlePageOverviewComponent },
    ]
  },
  { path: 'progress-overview/:bundleId', component: ProgressOverviewComponent },
  { path: 'scope-page/:bundleId', component: ScopePageOverviewComponent},
  { path: 'watchlist', component: WatchlistOverviewComponent },
  { path: '**', redirectTo: '' } // fallback til login
];
