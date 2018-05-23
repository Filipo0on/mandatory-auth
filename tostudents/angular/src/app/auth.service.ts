import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


// ...

interface AuthResponse {
  token: string;
}

interface User {
  sub: string;
  name: string;
}

// ...

@Injectable()
export class AuthService {

  // the decoded token if the user has been authenticated, carrying information about the user.
  _user: User;

  // inject the HttpClient service.
  constructor(private http: HttpClient) {
    // perform any logic upon application startup here...
  }

  // ...
  // The following computed properties may come in handy in the markup in your template...
  get user() {
    return this._user;
  }

  get authenticated() {
    return this._user !== undefined;
  }

  // use this method to catch http errors.
  handleError(error: HttpErrorResponse) {
    return Observable.throw({
      error: error.error
    });
  }

  login(credentials): Observable<User> {
    // invoke the relevant API route for authenticating the user with the given credentials and return an observable
    // of a User object (= decoded token).
    //
    // Make sure to handle a successful authentication by storing and also decoding the returned token, as well as
    // catching http errors.

    // return ...
    return;
  }

  logout() {
    // logout the current user by removing the corresponding token.
  }

  getResource(resource): Observable<any> {
    // invoke a protected API route by including the Authorization header and return an Observable.
    //
    // If e.g. invoking /api/friends, the 'resource' parameter should equal 'friends'.

    // return ...
    return;
  }
}
