import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.css']
})
export class MyDatePickerComponent implements OnInit {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  myDateInit: boolean = true;
  model: IMyDateModel = null;

  constructor() { }

  ngOnInit() {
    if (this.myDateInit) {
      // Initialize to specific date range with IMyDate object. 
      // Begin date = today. End date = today + 3.
      let begin: Date = new Date();
      let end: Date = new Date();
      end.setDate(end.getDate() + 3);

      this.model = {
        isRange: true,
        singleDate: null,
        dateRange: {
          beginDate: {
            year: begin.getFullYear(), month: begin.getMonth() + 1, day: begin.getDate()
          },
          endDate: {
            year: end.getFullYear(), month: end.getMonth() + 1, day: end.getDate()
          }
        }
      };
    }
    else {
      // Initialize to specific date range with a javascript date object. 
      // Begin date = today. End date = today + 3.
      let begin: Date = new Date();
      let end: Date = new Date();
      end.setDate(end.getDate() + 3);

      this.model = {
        isRange: true,
        singleDate: null,
        dateRange: {
          beginJsDate: begin,
          endJsDate: end
        }
      };
    }
  }

}
