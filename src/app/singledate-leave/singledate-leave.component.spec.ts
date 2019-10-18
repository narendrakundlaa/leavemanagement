import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledateLeaveComponent } from './singledate-leave.component';

describe('SingledateLeaveComponent', () => {
  let component: SingledateLeaveComponent;
  let fixture: ComponentFixture<SingledateLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledateLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledateLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
