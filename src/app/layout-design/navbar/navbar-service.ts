import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(private router: Router) {}

  navigateToOverview() {
    this.router.navigate(['/release-bundles-overview'])
  }
}
