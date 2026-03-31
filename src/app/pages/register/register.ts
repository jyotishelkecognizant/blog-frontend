import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
   standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  user = { name: '', email: '', password: '' };

  constructor(private auth: Auth, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });
  }

}
