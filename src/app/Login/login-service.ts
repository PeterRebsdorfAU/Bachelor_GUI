import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUser: UserRole | null = null;

  constructor(private router: Router) {}

  setUser(user: UserRole) {
    this.currentUser = user;
    this.router.navigate(['/bundles-overview']);
  }

  getUser(): UserRole | null {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
