import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateGridComponent } from './coordinate-grid.component';

describe('CoordinateGridComponent', () => {
  let component: CoordinateGridComponent;
  let fixture: ComponentFixture<CoordinateGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinateGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
