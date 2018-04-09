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
  it('should contain a script to load google maps', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#script script')).toBeTruthy();
  });
  it('should contain a div to display the google map', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#map')).toBeTruthy();
  });
});
