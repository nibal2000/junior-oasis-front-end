import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth-service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private sncackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // add the same properties in backend in auth DTO
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

// this method with the one commented in the service just display the token from the backend without saving it to header
  /*login() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((response)=> {console.log(response);})
  }*/

  login() {
    console.log(this.loginForm.value);
   this.service.login(
      this.loginForm.get(['email'])!.value,
      this.loginForm.get(['password'])!.value
    ).subscribe( // check if credentials are correct, if not send error message
      response => {
        this.router.navigateByUrl("user/dashboard")
      },
      error => {
        this.sncackBar.open('your password or email is not correct', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        })
      }
    )

  }

}
