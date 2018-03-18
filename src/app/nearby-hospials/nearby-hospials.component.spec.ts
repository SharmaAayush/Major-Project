import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyHospialsComponent } from './nearby-hospials.component';

describe('NearbyHospialsComponent', () => {
  let component: NearbyHospialsComponent;
  let fixture: ComponentFixture<NearbyHospialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyHospialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyHospialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
