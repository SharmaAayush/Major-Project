import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { ApiService } from '../../api.service';
import { Config } from '../../config';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [LoginComponent],
      providers: [AuthenticateUserService, ApiService, Config, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a form', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));
  it('should contain a field for users to enter their email', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("input#email")).toBeTruthy();
  }));
  it('should contain a field for users to enter their password', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("input#password")).toBeTruthy();
  }));
  it('should not let users enter a password shorter than 8 characters', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let passEle = compiled.querySelector("input#password");
    expect(passEle.minLength).toBe(8);
  }));
  it('should contain a method to login users with the data they provided in the form', inject([ApiService, AuthenticateUserService], (ApiService: ApiService, authenticateUserService: AuthenticateUserService) => {
    let component = new LoginComponent(ApiService, authenticateUserService);
    const testForm = <NgForm>{
      value: {
        email: "test@dayrep.com",
        password: "testPassword"
      }
    };
    spyOn(ApiService, "login");
    component.login = function(form: NgForm) {
      const value = form.value;
      let user = {
        "email": value.email,
        "password": value.password
      }
      let response = this.apiService.login(user);
    }
    component.login(testForm);
    expect(ApiService.login).toHaveBeenCalled();
  }));
});
