import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IEmployee } from './employee'

@Injectable()
export class EmployeeService {

    private _url: string = "/assets/data/employee.json";

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]> {
        console.log("vfhb", this.http.get(this._url))
        return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
    }
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Server Error')
    }
} 
