import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuccattaComponent } from './buccatta.component';

describe('BuccattaComponent', () => {
  let component: BuccattaComponent;
  let fixture: ComponentFixture<BuccattaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuccattaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuccattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
