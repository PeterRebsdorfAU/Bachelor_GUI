import { Component } from '@angular/core';
import { LoginService } from './login-service';
import { UserRole } from '../user-role.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  UserRole = UserRole;

  constructor(private loginService: LoginService) {}

  chooseUser(user: UserRole) {
    this.loginService.setUser(user);
  }
}
