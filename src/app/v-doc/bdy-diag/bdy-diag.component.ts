import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { Router } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-bdy-diag',
  templateUrl: './bdy-diag.component.html',
  styleUrls: ['./bdy-diag.component.css']
})
export class BdyDiagComponent implements OnInit {
  bdyLocations;
  symptoms = [];

  constructor(private apiService: ApiService, private authenticateUser: AuthenticateUserService, private router: Router, private _genData: GeneralDataService) {
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
        this.getSubLocations();
      }
    }, (err: any) => {
      console.log(err);
      localStorage.removeItem('x-auth-user');
      this.router.navigate(['core/login']);
    });
  }

  getSubLocations() {
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
            token, "man", bdyLocations[i].subLocations[j].id
          );
          res2.subscribe((data2: any) => {
            let symptoms = JSON.parse(data2._body);
            bdyLocations[i].subLocations[j].symptoms = symptoms;
          })
        }
      });
    }
    window["bdyLocations"] = this.bdyLocations;
    console.log(this.bdyLocations);
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

}
