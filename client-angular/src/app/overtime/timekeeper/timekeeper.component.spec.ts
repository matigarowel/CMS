import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimekeeperComponent } from './timekeeper.component';

describe('TimekeeperComponent', () => {
  let component: TimekeeperComponent;
  let fixture: ComponentFixture<TimekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
