import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UersDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  private url = 'http://dummy.restapiexample.com/api/v1/employees';

  getUserData() {
    return this.http.get(this.url);
  }
}
