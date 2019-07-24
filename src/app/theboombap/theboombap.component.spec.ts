import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheboombapComponent } from './theboombap.component';

describe('TheboombapComponent', () => {
  let component: TheboombapComponent;
  let fixture: ComponentFixture<TheboombapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheboombapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheboombapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
