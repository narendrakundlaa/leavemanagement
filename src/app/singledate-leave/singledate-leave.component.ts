import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-singledate-leave',
  templateUrl: './singledate-leave.component.html',
  styleUrls: ['./singledate-leave.component.css']
})
export class SingledateLeaveComponent implements OnInit {
  form: FormGroup;
  invalidDates: Array<Date>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      doj: new Date()
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
  }
  onSubmit() {
    
    console.log(this.form.value);
    alert(this.form.get('doj').value);
    this.invalidDates.push(this.form.get('doj').value);
    
    this.form.reset();
  }
  Cancle(id: any){
    this.invalidDates.splice(id,1)
  }

}
