import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { Router } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';
import { ApiService } from '../../api.service';
import { ReportServiceService } from '../../report-service.service';

@Component({
  selector: 'app-stmp-diag',
  templateUrl: './stmp-diag.component.html',
  styleUrls: ['./stmp-diag.component.css']
})
export class StmpDiagComponent implements OnInit {
  symptoms = [];
  sufferingSymptoms = [];
  issues = [];
  numberOfIssues = 0;

  constructor(private authenticateUser: AuthenticateUserService, private router: Router, private _genData: GeneralDataService, private apiService: ApiService, private reportService: ReportServiceService) {
  }

  ngOnInit() {
    this.symptoms = this._genData.getAllSymptoms();
  }

  getSympomsList(gender: any) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let res = this.apiService.getSympttomsList(token, gender);
    let obj = this;
    res.subscribe((data: any) => {
      obj.symptoms = JSON.parse(data._body);
    })
  }

  changedSymptom(symptom: any) {
    let obj = this;
    obj.symptoms.forEach((item, index, array) => {
      if (item.id == symptom) {
        obj.addSufferingSymptom(item);
      }
    });
  }

  addSufferingSymptom(symp) {
    let obj = this;
    let sympExists = false;
    obj.sufferingSymptoms.forEach((item, index, array) => {
      if (item.id == symp.id) {
        sympExists = true;
      }
    });
    if (!sympExists) {
      obj.sufferingSymptoms.push(symp);
    }
  }
  
  removeSymptom(symptom) {
    let obj = this;
    obj.sufferingSymptoms.forEach((item, index, array) => {
      if (item.id == symptom.id) {
        obj.sufferingSymptoms.splice(index, 1);
      }
    })
  }

  diagnoseSymptoms(age, gender) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let obj = this;
    let symps = [];
    let issueArr = this.issues;
    this.sufferingSymptoms.forEach((item, index, array) => {
      symps.push(item.id);
    });
    let res = this.apiService.diagnoseSymptoms(token, gender, age, symps);
    res.subscribe((data: any) => {
      let body = JSON.parse(data._body);
      issueArr = body;
      obj.issues = issueArr;
      for (let i = 0; i < issueArr.length; i++) {
        let id = issueArr[i].ID;
        obj.getIssueInfo(id, i);
      }
    })
  }

  getIssueInfo(issueID, index) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let issueArr = this.issues;
    let res = this.apiService.getIssueInfo(token, issueID);
    let obj = this;
    res.subscribe((data: any) => {
      let body = JSON.parse(data._body);
      issueArr[index].info = body;
      obj.numberOfIssues++;
      if (obj.numberOfIssues >= obj.issues.length) {
        obj.reportService.setIssuesInfo(obj.issues);
        obj.router.navigate(['/app/diag/report']);
      }
    })
  }

}
