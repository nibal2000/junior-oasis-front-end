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
