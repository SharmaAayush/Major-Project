import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdyDiagComponent } from './bdy-diag.component';

describe('BdyDiagComponent', () => {
  let component: BdyDiagComponent;
  let fixture: ComponentFixture<BdyDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdyDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdyDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
