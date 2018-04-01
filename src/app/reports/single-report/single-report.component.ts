import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../reports.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-single-report',
  templateUrl: './single-report.component.html',
  styleUrls: ['./single-report.component.css']
})
export class SingleReportComponent implements OnInit {
  report;

  constructor(private reportsService: ReportsService, private route: ActivatedRoute, private router: Router) {
    let obj = this;
    obj.report = obj.reportsService.getReport(obj.route.snapshot.params['id']);
    obj.route.params.subscribe((params: Params) => {
      obj.report = obj.reportsService.getReport(params['id']);
    });
  }

  ngOnInit() {
  }

  showIssue(issue) {
    $(`#${issue.ID}`).modal("show");
  }
  
  hideIssue(issue) {
    $(`#${issue.ID}`).modal("hide");
  }

}
