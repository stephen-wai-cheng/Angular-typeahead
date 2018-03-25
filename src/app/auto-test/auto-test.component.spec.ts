import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTestComponent } from './auto-test.component';

describe('AutoTestComponent', () => {
  let component: AutoTestComponent;
  let fixture: ComponentFixture<AutoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
