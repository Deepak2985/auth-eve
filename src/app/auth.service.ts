import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/register";
  private loginUrl = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient) { }

  register(user) {
    return this.httpClient.post<any>(this.registerUrl, user);
  }

  login(user) {
    return this.httpClient.post<any>(this.loginUrl, user);
  }
}
