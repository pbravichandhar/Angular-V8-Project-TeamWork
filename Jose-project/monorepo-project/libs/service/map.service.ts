import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { GeoJson } from '../class/map';
// import * as mapboxgl from 'mapbox-gl';
// import {catchError} from 'rxjs/operators/catchError'; 

@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'http://dummy.restapiexample.com/api/v1/employees';

  getUserData(url): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(url)
    // .pipe(
      // retry(1),
      // catchError(this.errorHandler)
    // );
  }

  errorHandler(error: HttpErrorResponse) {
    // return throwError(error.message || '');
  }
}

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
