import { TestBed, inject } from '@angular/core/testing';

import { AuthenticateUserService } from './authenticate-user.service';
import { HttpModule } from '@angular/http';
import { Config } from './config';
import { Router } from '@angular/router';

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AuthenticateUserService, Config, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }]
    });
  });

  it('should be created', inject([AuthenticateUserService], (service: AuthenticateUserService) => {
    expect(service).toBeTruthy();
  }));
  it('should have a method to authenticate users from backend', inject([AuthenticateUserService], (service: AuthenticateUserService) => {
    let method = typeof service.authenticateUser;
    expect(method).toBe("function");
  }));
  it('should have a method to log users in from backend', inject([AuthenticateUserService], (service: AuthenticateUserService) => {
    let method = typeof service.loginUser;
    expect(method).toBe("function");
  }));
});
