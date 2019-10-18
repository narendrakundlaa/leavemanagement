import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee/employee.model';
import { Dates } from './calender/date.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    baseUrl = 'http://localhost:3000/employees';
    dates = 'http://localhost:3000/dates';

    fakePasesDate: IEmployee[] = [];
    constructor(private httpClient: HttpClient) {
    }

    fakePass(emp: IEmployee) {
        return this.fakePasesDate.push(emp);
    }

    getEmployees(): Observable<IEmployee[]> {
        return this.httpClient.get<IEmployee[]>(this.baseUrl)
    }
    getEmployee(id: number): Observable<IEmployee> {
        return this.httpClient.get<IEmployee>(`${this.baseUrl}/${id}`)
    }
    addEmployee(employee: IEmployee): Observable<IEmployee> {
        return this.httpClient.post<IEmployee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
    updateEmployee(employee: IEmployee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
    }
    deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
    }

    getDates(): Observable<Date[]> {
        return this.httpClient.get<Date[]>(this.dates)

    }
    addDates(date: Date): Observable<Dates> {
        return this.httpClient.post<Dates>(this.dates, date, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}
