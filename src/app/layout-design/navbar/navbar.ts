import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../../login/login-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(
    private loginService: LoginService,
    private location: Location,
    private router: Router
  ) {}

  logout(): void {
    this.loginService.logout();
  }

  goToOverview(): void {
    this.router.navigate(['/release-bundles-overview']);
  }

  goBack(): void {
    this.location.back();
  }
}
