import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherGuestsComponent } from './other-guests.component';

describe('OtherGuestsComponent', () => {
  let component: OtherGuestsComponent;
  let fixture: ComponentFixture<OtherGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
