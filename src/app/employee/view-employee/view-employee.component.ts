import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { IEmployee } from '../employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: IEmployee;
  constructor(private route: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._employeeService.getEmployee(id).subscribe((emp) => {
      this.employee = emp;
    });
  }

}
