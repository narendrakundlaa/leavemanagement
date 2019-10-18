import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { RangePipe } from './calender/pipe';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
// import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { DatepickerjqueryComponent } from './datepickerjquery/datepickerjquery.component';
import { SingledateLeaveComponent } from './singledate-leave/singledate-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    RangePipe,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    // MyDatePickerComponent,
    MyDatePickerComponent,
    ViewEmployeeComponent,
    DatepickerjqueryComponent,
    SingledateLeaveComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    FormsModule,
    MyDateRangePickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
