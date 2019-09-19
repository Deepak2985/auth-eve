import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService) {}

              canActivate(): boolean {
                if (this.authService.isLoggedIn()) {
                  return true;
                } else {
                    this.router.navigate(['/login']);
                    this.toastrService.warning('Please login to access special events');
                    return false;
                }
              }
}
