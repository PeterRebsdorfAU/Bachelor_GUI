import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../login/login-service';
import { Location} from '@angular/common';
import {NavbarService} from './navbar-service';

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
    private navBarService: NavbarService
  ) {}

  logout() {
    this.loginService.logout();
  }

  goToOverview() {
    this.navBarService.navigateToOverview();
  }

  goBack() {
    this.location.back();
  }
}

