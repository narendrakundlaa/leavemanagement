import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  date5: Date;
  invalidDates: Array<Date>;

  rangeDates: Date[];
  invalidRanges: Array<Date>;

  dates: Date;

  allDate: Array<Date>;
  ngOnInit() {
    this.invalidDates = [];
    this.invalidRanges = [];
  }
  getDate(day: Date) {
    console.log(day);
    let next = new Date(day);
    this.invalidDates.push(next);
    this.getUnique(this.invalidDates);
  }

  invalidRangeDates(range1: Date[]) {

    let dateOne = new Date(range1[0]);
    let dateTwo = new Date(range1[1]);
    console.log(range1);
    this.invalidRanges.push(dateOne, dateTwo);
    var startDate = dateOne;
    var endDate = dateTwo;
    // const dateArr = this.getDateArray(startDate, endDate);
    // this.invalidRanges = dateArr;
    // console.log(dateArr);
  }
  getDateArray = function (start: Date, end: Date) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

  submitDates() {
    this.invalidDates;
  }
  getUnique(array) {
    this.invalidDates = [];

    // Loop through array values
    for (let i = 0; i < array.length; i++) {
      if ( this.invalidDates.indexOf(array[i]) === -1) {
        this.invalidDates.push(array[i]);
      }
    }
    return  this.invalidDates;
  }

// var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
// var uniqueNames = getUnique(names);
// console.log(uniqueNames);
}


