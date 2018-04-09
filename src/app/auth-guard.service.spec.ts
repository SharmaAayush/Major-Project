import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { HttpModule } from '@angular/http';
import { AuthenticateUserService } from './authenticate-user.service';
import { Router, RouterModule } from '@angular/router';
import { Config } from './config';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterModule],
      providers: [AuthGuardService, AuthenticateUserService, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }, Config]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
  it('should implement canActivate method', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service.canActivate).toBeTruthy();
  }));
});
