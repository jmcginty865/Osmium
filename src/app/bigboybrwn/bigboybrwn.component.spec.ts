import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigboybrwnComponent } from './bigboybrwn.component';

describe('BigboybrwnComponent', () => {
  let component: BigboybrwnComponent;
  let fixture: ComponentFixture<BigboybrwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigboybrwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigboybrwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
