import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { HttpModule } from '@angular/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticateUserService } from '../../authenticate-user.service';
import { ApiService } from '../../api.service';
import { Config } from '../../config';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [ SignupComponent ],
      providers: [AuthenticateUserService, ApiService, Config, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
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
  it('should contin a field for users to enter their UserName', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#username')).toBeTruthy();
  }));
  it('should contin a field for users to enter their Email', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#email')).toBeTruthy();
  }));
  it('should contin a field for users to enter their password', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#password')).toBeTruthy();
  }));
  it('should not let users enter a password shorter than 8 characters', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let ele = compiled.querySelector('input#password');
    expect(ele.minLength).toBe(8);
  }));
  it('should contin a field for users to confirm their password', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#password2')).toBeTruthy();
  }));
  it('should not let users confirm a password with less than 8 characters', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let ele = compiled.querySelector('input#password2');
    expect(ele.minLength).toBe(8);
  }));
  it('should contain a method to sign users up with the data they proied in the form', inject([ApiService, AuthenticateUserService], (apiService: ApiService, authenticateUserService: AuthenticateUserService) => {
    let component = new SignupComponent(apiService, authenticateUserService);
    const testForm = <NgForm>{
      value: {
        email: "test@dayrep.com",
        password: "testPassword"
      }
    };
    // spyOn(ApiService, "login");
    let method = typeof component.signup;
    expect(method).toBe("function");
  }));
});
