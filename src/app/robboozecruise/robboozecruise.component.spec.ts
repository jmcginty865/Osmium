import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobboozecruiseComponent } from './robboozecruise.component';

describe('RobboozecruiseComponent', () => {
  let component: RobboozecruiseComponent;
  let fixture: ComponentFixture<RobboozecruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobboozecruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobboozecruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
