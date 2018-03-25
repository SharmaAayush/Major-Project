import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { Router } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';
import { ApiService } from '../../api.service';
import { ReportServiceService } from '../../report-service.service';

@Component({
  selector: 'app-bdy-diag',
  templateUrl: './bdy-diag.component.html',
  styleUrls: ['./bdy-diag.component.css']
})
export class BdyDiagComponent implements OnInit {
  bdyLocations;
  symptoms = [];
  issues = [];
  numberOfIssues = 0;

  constructor(private apiService: ApiService, private authenticateUser: AuthenticateUserService, private router: Router, private _genData: GeneralDataService, private reportService: ReportServiceService) {
    this.bdyLocations = this._genData.getAllBodyLocations();
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("x-auth-user"));
    let authStatus = this.authenticateUser.authenticateUser(user);
    authStatus.subscribe((res: any) => {
      let flag = JSON.parse(res._body).flag;
      if (flag != 1) {
        localStorage.removeItem('x-auth-user');
        this.router.navigate(['core/login']);
      } else {
        this.bdyLocations = this._genData.getAllBodyLocations();
        // this.getSubLocations();
      }
    }, (err: any) => {
      console.log(err);
      localStorage.removeItem('x-auth-user');
      this.router.navigate(['core/login']);
    });
  }

  getSubLocations(gender) {
    let selector_status = gender == "male" ? "man" : "woman";
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let bdyLocations = this.bdyLocations;
    for (let i = 0; i < this.bdyLocations.length; i++) {
      let res = this.apiService.getSubLocations(
        token, this.bdyLocations[i].id
      );
      res.subscribe((data: any) => {
        let body = JSON.parse(data._body);
        bdyLocations[i].subLocations = body;
        for (let j = 0; j < bdyLocations[i].subLocations.length; j++) {
          let res2 = this.apiService.getBodyLocationRelatedSymptoms(
            token, selector_status, bdyLocations[i].subLocations[j].id
            // "man" or "woman"
          );
          res2.subscribe((data2: any) => {
            let symptoms = JSON.parse(data2._body);
            bdyLocations[i].subLocations[j].symptoms = symptoms;
          })
        }
      });
    }
  }

  addSymptom(symptom) {
    let exists = false;
    this.symptoms.forEach((item, index, array) => {
      if (item.ID == symptom.ID) {
        exists = true;
      }
    });
    if (!exists) {
      this.symptoms.push(symptom);
    }
  }

  removeSymptom(symptom) {
    let arr = this.symptoms;
    this.symptoms.forEach((item, index, array) => {
      if (item.ID == symptom.ID) {
        this.symptoms.splice(index, 1);
      }
    })
  }

  diagnoseSymptoms(age: any, gender: any) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let symps = [];
    let issueArr = this.issues;
    let obj = this;
    this.symptoms.forEach((item, index, array) => {
      symps.push(item.ID);
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
    });
  }

  getIssueInfo(issueId, index) {
    let token = JSON.parse(localStorage.getItem("x-auth-user")).token;
    let issueArr = this.issues;
    let res = this.apiService.getIssueInfo(token, issueId);
    let obj = this;
    res.subscribe((data: any) => {
      let body = JSON.parse(data._body);
      issueArr[index].info = body;
      obj.numberOfIssues++;
      if (obj.numberOfIssues !< obj.issues.length) {
        obj.reportService.setIssuesInfo(obj.issues);
        obj.router.navigate(['/app/report']);
      }
    });
  }

}
