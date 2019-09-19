import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'ctl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {

  }
  title = 'auth-event';
}
