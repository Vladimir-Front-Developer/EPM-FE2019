import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattlefieldComponent } from './sea-battlefield.component';

describe('SeaBattlefieldComponent', () => {
  let component: SeaBattlefieldComponent;
  let fixture: ComponentFixture<SeaBattlefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaBattlefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaBattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
