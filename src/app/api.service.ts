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
    return this.http.post(reqUrl, user, { headers: headers });
    // parse _body of response object to get response object;
  }

  public signup(user) {
    let reqUrl = this.apiUrl + '/api/users/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, user, { headers: headers });
    // parse _body of respoonse object to get response object;
  }

  public getSubLocations(token, locationId) {
    let reqUrl = this.apiUrl + '/api/bodySubLocationList/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, {
      "token": token,
      "body_location_id": locationId
    }, { headers: headers });
  }

  public getBodyLocationRelatedSymptoms(token, selectorStatus, locationId) {
    let reqUrl = this.apiUrl + '/api/bodyLocationRelatedSymptoms/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(reqUrl, {
      "token": token,
      "selector_status": selectorStatus,
      "body_sub_location_id": locationId
    }, {headers: headers});
  }
}
