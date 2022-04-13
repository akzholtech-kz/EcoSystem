import { AuthResponseData, AuthorService } from './author.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  error: string = null;

  constructor(private auth: AuthorService) {}

  ngOnInit() {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>
    if (this.isLoginMode) {
     authObs =  this.auth.login(email, password)
    } else {
     authObs =  this.auth.signup(email, password)
    }

    authObs.subscribe(
        (resData) => {
          console.log(resData);
         
        },
        (errorMessage) => {
          this.error = errorMessage
        }
      );
    form.reset();
  }
}
