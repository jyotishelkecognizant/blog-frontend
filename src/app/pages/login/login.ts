import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // user = { email: '', password: '' };

  user: User = {
  name: '',   // optional for login
  email: '',
  password: ''
};

  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      //this.router.navigate(['/home']);

      this.router.navigate(['/home']).then(() => {
  window.location.reload(); // force refresh
});
    });
  }

}
