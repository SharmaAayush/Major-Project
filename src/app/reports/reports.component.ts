import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reportsList = [];

  constructor(private apiService: ApiService, private reportsService: ReportsService) { }

  ngOnInit() {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let res = this.apiService.getReportList(token);
    res.subscribe((data: any) => {
      let body = JSON.parse(data._body);
      body.forEach((item, index, array) => {
        item.created_at = new Date(item.created_at);
      });
      setTimeout(() => {
        this.reportsList = body;
        this.reportsService.setReportList(body);
        // console.log(this.reportsList);
      }, 0);
      // console.log(body);
    }, (err) => {
      console.log(err);
    });
  }

}
