import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  innerWidth;

  constructor(private apiService: ApiService) {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
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
      let token = body.user.token;
      localStorage.setItem("x-auth-jwt-token", token);
    });
  }

}
