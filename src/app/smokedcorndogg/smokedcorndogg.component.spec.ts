import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokedcorndoggComponent } from './smokedcorndogg.component';

describe('SmokedcorndoggComponent', () => {
  let component: SmokedcorndoggComponent;
  let fixture: ComponentFixture<SmokedcorndoggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokedcorndoggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokedcorndoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
