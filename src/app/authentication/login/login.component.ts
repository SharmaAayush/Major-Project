import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgForm } from '@angular/forms';
import { AuthenticateUserService } from '../../authenticate-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  login(form: NgForm) {
    const value = form.value;
    let user = {
      "email": value.email,
      "password": value.password
    }
    let response = this.apiService.login(user);
    response.subscribe((res: any) => {
      let user = JSON.parse(res._body);
      localStorage.setItem("x-auth-user", JSON.stringify(user));
      this.authenticateUser.loginUser(user);
    }, (err: any) => {
      console.log(err);
      this.isError = true;
      this.errMsg = "";
      let obj = this;
      let errs = err;
      let msg = JSON.parse(errs._body).errors.error[0];
      this.errMsg = msg;
    })
  }

}
