import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee } from './employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employee: IEmployee;
  pageTitle: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      skillName: [''],
      experienceInYears: [''],
      doj: []
    });

    this.route.paramMap.subscribe(params => {
      const empId = +params.get('id');
      if (empId) {
        this.pageTitle = 'Edit Employee';
        this.getEmployee(empId);
      } else {
        this.pageTitle = 'Create Employee';
        this.employee = {
          id: null,
          fullName: '',
          experienceInYears: null,
          // doj: null,
          email: '',
          skillName: ''
        };
      }
    });
  }


  getEmployee(id: number) {
    this._employeeService.getEmployee(id)
      .subscribe(
        (employee: IEmployee) => {
          this.employee = employee;
          this.editEmployee(employee);
        },
        (err: any) => console.log(err)
      );
  }
  editEmployee(employee: IEmployee) {
    this.employeeForm.patchValue({
      fullName: employee.fullName,
      skillName: employee.skillName,
      experienceInYears: employee.experienceInYears,
      // doj: employee.doj,
      email: employee.email
    });
  }
  onSubmit(): void {
    this.mapFormValuesToEmployeeModel();

    if (this.employee.id) {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => this._router.navigate(['list']),
        (err: any) => console.log(err)
      );
    } else {
      this._employeeService.addEmployee(this.employee).subscribe(
        () => this._router.navigate(['list']),
        (err: any) => console.log(err)
      );
    }
  }
  mapFormValuesToEmployeeModel() {
    this.employee.fullName = this.employeeForm.value.fullName;
    this.employee.email = this.employeeForm.value.email,
      this.employee.skillName = this.employeeForm.value.skillName,
      this.employee.experienceInYears = this.employeeForm.value.experienceInYears
      // this.employee.doj = this.employeeForm.value.doj;
  }
}
