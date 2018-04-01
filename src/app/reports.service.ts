import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ReportsService {
  reportList = [];

  constructor(private apiService: ApiService) { }

  setReportList(list) {
    this.reportList = list;
  }

  getReportList() {
    return this.reportList;
  }

  getReport(id) {
    let report;
    if (this.reportList) {
      this.reportList.forEach((item, index, aray) => {
        if (item.id == id) {
          report = item;
        }
      });
    } else {
      let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
      let res = this.apiService.getReportList(token);
      res.subscribe((data: any) => {
        let body = JSON.parse(data._body);
        body.forEach((item, index, array) => {
          if (item.id == id) {
            report = item;
          }
        });
      });
    }
    return report;
  }

}
