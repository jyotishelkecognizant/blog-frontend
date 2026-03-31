import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
   standalone: true,
  imports: [],
  templateUrl: './welcome.html',
  //template: `<router-outlet></router-outlet>,
  styleUrl: './welcome.css',
})
export class Welcome {

  constructor(private router: Router) {}

  // 👇 This method handles navigation
  goToLogin() {
    this.router.navigate(['/login']);
  }

   gotoRegister() {
    this.router.navigate(['/register']);
  }


}
