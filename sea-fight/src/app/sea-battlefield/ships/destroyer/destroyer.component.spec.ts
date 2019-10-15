import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyerComponent } from './destroyer.component';

describe('DestroyerComponent', () => {
  let component: DestroyerComponent;
  let fixture: ComponentFixture<DestroyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestroyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
