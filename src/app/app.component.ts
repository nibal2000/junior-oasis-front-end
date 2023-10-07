import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'junior-oasis-frontend';

  isUserLoggedIn!: boolean;

  constructor() { }

  ngOnInit() {
  }

  //TODO
  /**private updateUserLoggedInStatus(): void {
    this.isUserLoggedIn = storageService.isUserLoggedIn();
  } */

}

/**
 * //TODO to reput the code in app.component.html
 * <div>
 *   <mat-toolbar class="navbar">
 *     <span class="navbar-logo">Junior-Oasis</span>
 *     <span class="spacing"></span>
 *     <button mat-button routerLink="/login" routerLinkActive="active">Dashboard</button>
 *     <button mat-button routerLinkActive="active">Logout</button>
 *   </mat-toolbar>
 * </div>*/
