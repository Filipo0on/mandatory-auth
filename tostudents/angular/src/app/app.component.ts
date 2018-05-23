import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authService: AuthService) {}

  login() {
    // login user using authService.
  }

  logout() {
    // logout user using authService.
  }

  testApi() {
    // test API access by invoking getResource on authService.
  }
}
