import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reportsList = [];
  isFullPath = false;
  isDataAvailable = false;
  type = "horizontalBar";
  issuesData = {
    labels: [],
    datasets: [
      {
        label: "Most Common Issues",
        data: [],
        backgroundColor: []
      }
    ]
  };
  symptomData = {
    labels: [],
    datasets: [
      {
        label: "Most Common Symptoms",
        data: [],
        backgroundColor: []
      }
    ]
  }
  options = {
    responsive: true,
    maintainAspectRatio: false
  };


  constructor(private apiService: ApiService, private reportsService: ReportsService, private router: Router, private location: Location) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let res = this.apiService.getCommonSymptomsAndIssue(token);
    res.subscribe((data: any) => {
      let body = JSON.parse(data._body);
      let color1 = "rgba(239, 95, 131, 0.5)";
      let color2 = "rgba(54, 162, 236, 0.5)";
      body.most_common_symptoms.forEach((item, index, array) => {
        this.symptomData.labels.push(item.label);
        this.symptomData.datasets[0].data.push(item.value);
        this.symptomData.datasets[0].backgroundColor.push(color2);
        if (index == array.length - 1) {
          setTimeout(() => {
            this.isDataAvailable = true;
          }, 200);
        }
      });
      body.most_common_issues.forEach((item, index, array) => {
        this.issuesData.labels.push(item.label);
        this.issuesData.datasets[0].data.push(item.value);
        this.issuesData.datasets[0].backgroundColor.push(color1);
        if (index == array.length - 1) {
          setTimeout(() => {
            this.isDataAvailable = true;
          }, 200);
        }
      });
    });
    router.events.subscribe((vale) => {
      if (location.path() == "/app/reports") {
        this.isFullPath = true;
      } else {
        this.isFullPath = false;
      }
    });
  }

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
      }, 0);
    }, (err) => {
      console.warn(err);
    });
  }

}
