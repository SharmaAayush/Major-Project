import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AuthenticateUserService } from "./authenticate-user.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authenticateUser: AuthenticateUserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user = JSON.parse(localStorage.getItem("x-auth-user"));
    let authStatus = this.authenticateUser.authenticateUser(user);
    return authStatus.toPromise().then((data: any) => {
      let body = JSON.parse(data._body).flag == 1;
      if (!body) {
        localStorage.removeItem('x-auth-user');
        this.router.navigate(['core/login']);
      }
      return body;
    });
  }

}
