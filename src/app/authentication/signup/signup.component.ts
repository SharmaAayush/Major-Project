import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ApiService } from '../../api.service';
import { AuthenticateUserService } from '../../authenticate-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  innerWidth;

  constructor(private apiService: ApiService, private authenticateUser: AuthenticateUserService) {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("x-auth-user"));
    if (user) {
      this.authenticateUser.loginUser(user);
    }
  }

  signup(form: NgForm) {
    const value = form.value;
    let user = {
      "email": value.email,
      "username": value.username,
      "password": value.password
    };
    let response = this.apiService.signup({
      "user": user
    });
    response.subscribe((res: any) => {
      let body = JSON.parse(res._body);
      let user = body.user;
      localStorage.setItem("x-auth-user", JSON.stringify(user));
      this.authenticateUser.loginUser(user);
    });
  }

}
