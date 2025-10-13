import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../login/login-service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(private loginService: LoginService, private location: Location) {}

  logout() {
    this.loginService.logout();
  }

  goBack() {
    this.location.back();
  }
}

