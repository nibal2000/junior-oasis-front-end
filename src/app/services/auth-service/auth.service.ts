import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {StorageService} from "./storage.service";

const BASIC_URL = ['http://localhost:8080/'];
export const AUTH_HEADER = "authorization";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient,
              private storageService: StorageService) { }

  //signupRequest : pass the argument i passed in backend (signupDTO) in the method createUser in SignupController
  signup(signupRequest: any): Observable<any> {
    return this.httpclient.post(BASIC_URL + "sign-up", signupRequest)
  }

  //get the token from header and set it to storage service (to save the token local storage in the browser)
  login(email:string, password:string): Observable<any> {
    return this.httpclient.post(BASIC_URL + "auth", {
      email,
      password
    },
      {observe: 'response'})
      .pipe(
        tap(__=>this.log("user Authentication")),
        map((res: HttpResponse<any>) => {
          this.storageService.saveUser(res.body);
          const tokenLength = res.headers.get(AUTH_HEADER)?.length;
          const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
          this.storageService.saveToken(bearerToken);
          return res;
        })
      )
  }

 log(message: string) {
    console.log("User Auth Service" + message)
  }
}

