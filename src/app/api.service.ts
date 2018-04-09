import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from './config';
import 'rxjs/add/operator/do';

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
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, user, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err: any) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
    // parse _body of response object to get response object;
  }

  public signup(user) {
    let reqUrl = this.apiUrl + '/api/users/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, user, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
    // parse _body of respoonse object to get response object;
  }

  public getSubLocations(token, locationId) {
    let reqUrl = this.apiUrl + '/api/bodySubLocationList/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token,
      "body_location_id": locationId
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
  }

  public getBodyLocationRelatedSymptoms(token, selectorStatus, locationId) {
    let reqUrl = this.apiUrl + '/api/bodyLocationRelatedSymptoms/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token,
      "selector_status": selectorStatus,
      "body_sub_location_id": locationId
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    })
  }

  public diagnoseSymptoms(token, gender, age, symptoms) {
    let reqUrl = this.apiUrl + '/api/diagnosis/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token,
      "gender": gender,
      "age": age,
      "symptoms": symptoms
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    })
  }

  public getIssueInfo(token, issueId) {
    let reqUrl = this.apiUrl + '/api/issueInfo/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token,
      "issue_id": issueId
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
  }

  public getSympttomsList(token, gender) {
    let reqUrl = this.apiUrl + '/api/symptomList/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token,
      "gender": gender
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
  }

  public getReportList(token) {
    let reqUrl = this.apiUrl + '/api/reportsList/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
  }

  public getCommonSymptomsAndIssue(token) {
    let reqUrl = this.apiUrl + '/api/commonSymptomsAndIssue/';
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; } if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "block"; }
    return this.http.post(reqUrl, {
      "token": token
    }, { headers: headers }).do((event) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    }, (err) => {
      if (document.getElementById("my_preloader_ele")) { document.getElementById("my_preloader_ele").style.display = "none"; }
    });
  }
}
