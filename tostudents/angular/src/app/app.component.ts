import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {observable} from "rxjs/symbol/observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUser: string;
  credentialsFail = false;
  credentials = {
    username: '',
    password: ''
  };
  myFriends;

  constructor(private authService: AuthService) {

  }
  login() {

    this.authService.login(this.credentials).subscribe(() => {
      
    }, (error) => {
      this.credentialsFail = true;
    });

  }
  validForm(){
    return this.credentials.username.length > 3 && this.credentials.password.length > 3;
  }

  logout() {
    this.authService.logout();
    this.myFriends = null;
    // logout user using authService.
  }

  testApi() {
    this.authService.getResource('/friends').subscribe((res: any) => {
      this.myFriends = res;


    }, (err) => {
      console.error('Got error back', err);
    });

    return this.myFriends;
    // test API access by invoking getResource on authService.
  }
}
