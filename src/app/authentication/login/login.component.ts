import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      let token = body.user.token;
      localStorage.setItem("x-auth-jwt-token", token);
    })
  }

}
