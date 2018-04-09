import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderComponent } from './user-header.component';
import { Router } from '@angular/router';

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserHeaderComponent],
      providers: [{
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
