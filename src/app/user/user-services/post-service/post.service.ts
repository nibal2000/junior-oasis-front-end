import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, scan, switchMap, throttleTime} from "rxjs";
import EndPosints from "../../../utils/routes"
import {StorageService} from "../../../services/auth-service/storage.service";
import { fromFetch } from 'rxjs/fetch';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(postDto: any): Observable<any> {
    return fromFetch(`${EndPosints.GET_ALL_POSTS}` , {
      method : "POST",
      body : JSON.stringify(postDto),
      selector: response => response.json(),
      headers : { ...this.createAuthorizationHeader(), "Content-Type" : "application/json" }
    })
  }


  updatePost(postDto: any, postId : number): Observable<any> {
    return fromFetch(`${EndPosints.GET_ALL_POSTS}/${postId}` , {
      method : "PATCH",
      body : postDto,
      selector: response => response.json(),
      headers : { ...this.createAuthorizationHeader(), "Content-Type" : "application/json" }
    })
  }

  getAllPosts(pageNumber: number): Observable<any> {
/*    return this.http.get<[]>( `${EndPosints.GET_ALL_POSTS}?page=${pageNumber}`, {
      headers: this.createAuthorizationHeader() // set token to header
    });*/
    return fromFetch(`${EndPosints.GET_ALL_POSTS}?page=${pageNumber}` , {
      selector: response => response.json(),
      headers : this.createAuthorizationHeader()
    })
  }

  getPostById(postId: number): Observable<any> {
         return fromFetch(`${EndPosints.GET_ALL_POSTS}/${postId}` , {
      selector: response => response.json(),
      headers : this.createAuthorizationHeader()
    })
  }


  deletePostById(postId: number): Observable<any> {
    return fromFetch(`${EndPosints.GET_ALL_POSTS}/${postId}` , {
      method : "DELETE",
      selector: response =>  {

        return response.json() },
      headers : this.createAuthorizationHeader()
    })
  }

  // create post is forbidden so need to get token from header
  createAuthorizationHeader() {
      return {
        "Authorization" :  "Bearer " + StorageService.getToken()
      }
  }
}
