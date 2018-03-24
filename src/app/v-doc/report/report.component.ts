import { Component, OnInit, Input } from '@angular/core';
import { ReportServiceService } from '../../report-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  issueInfo;

  constructor(private reportService: ReportServiceService) {
    this.issueInfo = this.reportService.getIssuesInfo();
    console.log(this.issueInfo);
  }

  ngOnInit() {
    let tabcontent: any = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  }

  openCity(event, id) {
    console.log(event);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    event.currentTarget.className += " active";
  }

  stringify(issue) {
    return JSON.stringify(issue.info.Name, null, 2);
  }

}
