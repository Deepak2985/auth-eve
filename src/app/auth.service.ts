import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/register";
  private loginUrl = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  register(user) {
    return this.httpClient.post<any>(this.registerUrl, user);
  }

  login(user) {
    return this.httpClient.post<any>(this.loginUrl, user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

