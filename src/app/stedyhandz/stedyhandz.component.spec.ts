import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StedyhandzComponent } from './stedyhandz.component';

describe('StedyhandzComponent', () => {
  let component: StedyhandzComponent;
  let fixture: ComponentFixture<StedyhandzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StedyhandzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StedyhandzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
