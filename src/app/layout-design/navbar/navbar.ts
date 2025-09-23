import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user-service/user';
import { Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(private userService: UserService, private location: Location) {}

  logout() {
    this.userService.logout();
  }

  goBack() {
    this.location.back();
  }
}

