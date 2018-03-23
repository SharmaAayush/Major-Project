import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StmpDiagComponent } from './stmp-diag.component';

describe('StmpDiagComponent', () => {
  let component: StmpDiagComponent;
  let fixture: ComponentFixture<StmpDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StmpDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StmpDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
