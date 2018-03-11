import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Config } from './config';

@Injectable()
export class AuthenticateUserService {

  apiUrl;

  constructor(private config: Config, private http: Http, private router: Router) {
    this.apiUrl = config.apiUrl;
  }

  public authenticateUser(user) {
    let token = "";
    if (user) {
      token = user.token;
    }
    let reqUrl = this.apiUrl + '/api/user/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, {
      "user": {
        "token": token
      }
    });
  }

  public loginUser(user) {
    if (user.token) {
      let response = this.authenticateUser(user);
      response.subscribe((res: any) => {
        let flag = JSON.parse(res._body).flag;
        console.log(flag);
        if (flag == 1) {
          this.router.navigate(['app/home']);
        }
      });
    }
  }

}
