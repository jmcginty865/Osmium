import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnekprincessComponent } from './snekprincess.component';

describe('SnekprincessComponent', () => {
  let component: SnekprincessComponent;
  let fixture: ComponentFixture<SnekprincessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnekprincessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnekprincessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
