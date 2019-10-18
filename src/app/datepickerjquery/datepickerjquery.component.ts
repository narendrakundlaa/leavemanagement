import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datepickerjquery',
  templateUrl: './datepickerjquery.component.html',
  styleUrls: ['./datepickerjquery.component.css']
})
export class DatepickerjqueryComponent implements OnInit {
  form: FormGroup;
  invalidDates: Array<Date>;
  invalidDatesTwo: Array<Date>;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      doj: new Date(),
      range: new Date()
    });

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [];
    this.invalidDatesTwo = [];
    this.onSubmit();
  }
  onSubmit() {

    console.log(this.form.value);

    const date1 = this.form.get('range').value[0];
    const date2 = this.form.get('range').value[1];

    this.getDateArray(date1, date2);
    console.log(this.form.get('range').value);
    this.form.reset();
  }
  Cancle(id: number, date: Date) {
    alert(id + 1 + " : " + date.toDateString());
    this.invalidDatesTwo.splice(id, 1)
  }
  getDateArray(start: Date, end: Date) {

    var dt = new Date(start);
    while (dt <= end) {
      this.invalidDatesTwo.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    console.log(this.invalidDatesTwo.toLocaleString());
    return this.invalidDatesTwo;
  }



}
