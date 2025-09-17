import { Component } from '@angular/core';
import { UserService } from '../user-service/user';
import { UserRole } from '../user-role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  UserRole = UserRole; // gør enum tilgængelig i HTML

  constructor(private userService: UserService) {}

  chooseUser(user: UserRole) {
    this.userService.setUser(user);
  }
}
