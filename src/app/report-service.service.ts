import { Injectable } from '@angular/core';

@Injectable()
export class ReportServiceService {
  issuesInfo;

  constructor() { }

  setIssuesInfo(issuesInfo) {
    this.issuesInfo = issuesInfo;
  }

  getIssuesInfo() {
    return this.issuesInfo;
  }
}
