import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerjqueryComponent } from './datepickerjquery.component';

describe('DatepickerjqueryComponent', () => {
  let component: DatepickerjqueryComponent;
  let fixture: ComponentFixture<DatepickerjqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerjqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerjqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
