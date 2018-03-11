import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from './config';

@Injectable()
export class ApiService {

  apiUrl;

  constructor(private config: Config, private http: Http) {
    this.apiUrl = config.apiUrl;
  }

  public login(user) {
    let reqUrl = this.apiUrl + '/api/users/login/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, user, {headers: headers});
    // parse _body of response object to get response object;
  }

  public signup(user) {
    let reqUrl = this.apiUrl + '/api/users/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, user, {headers: headers});
    // parse _body of respoonse object to get response object;
  }
}
