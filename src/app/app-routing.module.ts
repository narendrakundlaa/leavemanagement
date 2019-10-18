import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CalenderComponent } from './calender/calender.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';
import { DatepickerjqueryComponent } from './datepickerjquery/datepickerjquery.component';



const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent },
  { path: 'leave', component: DatepickerjqueryComponent },
  { path: 'view/:id', component: ViewEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
