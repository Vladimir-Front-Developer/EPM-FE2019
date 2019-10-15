import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorpedoBoatComponent } from './torpedo-boat.component';

describe('TorpedoBoatComponent', () => {
  let component: TorpedoBoatComponent;
  let fixture: ComponentFixture<TorpedoBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorpedoBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorpedoBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
