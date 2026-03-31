import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {


  private apiUrl = 'http://localhost:8080/api/v1.0';

  constructor(private http: HttpClient) {}

  // // 🔐 LOGIN
  // login(data: any) {
  //   return this.http.post(`${this.apiUrl}/login`, data);
  // }

  // // 📝 REGISTER
  // register(data: any) {
  //   return this.http.post(`${this.apiUrl}/register`, data);
  // }


  register(user: User) {
  return this.http.post('http://localhost:8080/api/v1.0/blogsite/user/register', user);
}

login(user: User) {
  return this.http.post('http://localhost:8080/api/v1.0/blogsite/user/login', user);
}
   // 💾 SAVE TOKEN
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // 📦 GET TOKEN
  getToken() {
    return localStorage.getItem('token');
  }

  // ❌ LOGOUT
  logout() {
    localStorage.removeItem('token');
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  
}
