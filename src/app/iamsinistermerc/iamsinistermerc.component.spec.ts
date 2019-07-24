import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamsinistermercComponent } from './iamsinistermerc.component';

describe('IamsinistermercComponent', () => {
  let component: IamsinistermercComponent;
  let fixture: ComponentFixture<IamsinistermercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamsinistermercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamsinistermercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
