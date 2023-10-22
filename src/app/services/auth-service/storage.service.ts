import { Injectable } from '@angular/core';

// key valus for token in local storage
const TOKEN = 'c_token';
const USER = 'c_user'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user: any) {
    window.localStorage.setItem(USER, JSON.stringify(user)); // set new user
  }

  public saveToken(token: any) { // it should be type string but i got an error in authservice "headers.get..."so i changed the type to any
    window.localStorage.setItem(TOKEN, token);
  }

  // handle which navbar to display
 static getToken(): string | null {
     return window.localStorage.getItem(TOKEN);
  }
  static isUserLoggedIn(): boolean {
    return !!this.getToken(); // !! forces the value to be interpreted as a boolean and returns true or false
    // it will return true if user not null
  }

  static logout() {
    window.localStorage.removeItem(TOKEN); // we can use clear method also
    window.localStorage.removeItem(USER);
  }
}
