import { Component } from '@angular/core';
import { LoginService } from './login-service';
import { UserRole } from '../user-role.enum';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [
    MatIcon,
    MatButton
  ],
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  UserRole = UserRole;

  constructor(private loginService: LoginService) {}

  chooseUser(user: UserRole) {
    console.log(`Logging in as ${UserRole[user]}`);
    this.loginService.setUser(user);
  }
}
