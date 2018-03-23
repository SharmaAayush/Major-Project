import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { Router } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';

@Component({
  selector: 'app-bdy-diag',
  templateUrl: './bdy-diag.component.html',
  styleUrls: ['./bdy-diag.component.css']
})
export class BdyDiagComponent implements OnInit {
  bdyLocations;

  constructor(private authenticateUser: AuthenticateUserService, private router: Router, private _genData: GeneralDataService) { }

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
      }
    }, (err: any) => {
      console.log(err);
      localStorage.removeItem('x-auth-user');
      this.router.navigate(['core/login']);
    });
  }

}
