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
  isError = false;
  errMsg = "";

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
    if (value.password != value.passwod2) {
      this.isError = true;
      this.errMsg = "Password and Confirm Password must be same";
    }
    let response = this.apiService.signup(user);
    response.subscribe((res: any) => {
      let user = JSON.parse(res._body);
      localStorage.setItem("x-auth-user", JSON.stringify(user));
      this.authenticateUser.loginUser(user);
    }, (err: any) => {
      this.errMsg = "";
      this.isError = true;
      let obj = this;
      let errs = err;
      let msg = JSON.parse(err._body).errors;
      Object.keys(msg).forEach(function (key, idx) {
        obj.errMsg += msg[key][0] + "  ";
      });
    });
  }

}
