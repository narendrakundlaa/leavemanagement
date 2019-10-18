import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];
  loading = false;
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.loading = true;
    // this._employeeService.getEmployees().subscribe(
    //   (employeeList) => {
    //     if (employeeList) {
    //       this.loading = true;
    //       this.employees = employeeList
    //     }
    //   },
    //   (err) => console.log(err)
    // );
    this.getEmployees();
    
  }
  EditEmployee(employeeId: number) {
    this._router.navigate(['/edit', employeeId]);
  }
  delete(id: number) {
   this._employeeService.deleteEmployee(id).subscribe((list)=> {
    this.getEmployees();
   });
   
  }
  getEmployees() {
    this._employeeService.getEmployees().subscribe(
      (employeeList) => {
        if (employeeList) {
          this.loading = true;
          this.employees = employeeList
        }
      },
      (err) => console.log(err)
    );
  }
  viewData(employeeId: number) {
    this._router.navigate(['/view', employeeId]);
  }
}
