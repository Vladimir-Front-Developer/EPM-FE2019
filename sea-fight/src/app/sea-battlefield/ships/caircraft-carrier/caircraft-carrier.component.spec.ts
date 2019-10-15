import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaircraftCarrierComponent } from './caircraft-carrier.component';

describe('CaircraftCarrierComponent', () => {
  let component: CaircraftCarrierComponent;
  let fixture: ComponentFixture<CaircraftCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaircraftCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaircraftCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
