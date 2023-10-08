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

  public saveToken(token: any) { // it should be type string but i got an error so i changed the type to any
    window.localStorage.setItem(TOKEN, token);
  }

  //TODO to handle which navbar

 /** static getToken(): string {
     return localStorage.getItem(TOKEN);
  }
  static isUserLoggedIn() {
    if (this.getToken() == null) {
      return false;
    }
    return true
  } **/
}
