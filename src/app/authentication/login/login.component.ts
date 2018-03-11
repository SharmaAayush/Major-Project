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
    let response = this.apiService.login({
      "user": user
    });
    response.subscribe((res: any) => {
      let body = JSON.parse(res._body);
      let user = body.user;
      localStorage.setItem("x-auth-user", JSON.stringify(user));
      this.authenticateUser.loginUser(user);
    })
  }

}
