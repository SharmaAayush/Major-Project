import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticateUserService } from '../authenticate-user.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Config } from '../config';
import { HttpModule } from '@angular/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ ProfileComponent ],
      providers: [AuthenticateUserService, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }, ApiService, Config],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
