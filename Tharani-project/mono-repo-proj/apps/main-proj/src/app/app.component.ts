import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

interface UserDetail {
  i?: number;
  street: string;
  state: string;
  suite: number;
  zip: number;
  city: string;
  country: string;
}

@Component({
  selector: 'mono-repo-proj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: UserDetail[] = [];
  street: string;
  state: string;
  suite: number;
  zip: number;
  city: string;
  country: string;
  uploadSuccess: boolean;

  countryData: any = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getUserData()
      .subscribe((listData) => {
        this.countryData = listData
        console.log('dsjkndsjk', this.countryData)
      })
  }

  getUserData() {
    return this.http.get('https://trial.mobiscroll.com/content/countries.json');
  }

  getEmployees(): Observable<any> {
    console.log("vfhb", this.http.get('https://trial.mobiscroll.com/content/countries.json'))
    return this.http.get<any[]>('https://trial.mobiscroll.com/content/countries.json')
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error')
  }
  registerUser(form) {
    this.data.push(
      {
        street: form.value.street,
        state: form.value.state,
        suite: form.value.suite,
        zip: form.value.zip,
        city: form.value.city,
        country: form.value.country,
      }
    )
    form.reset();
  }

  deleteForm(row) {
    console.log("Form deleted")
    this.data.splice(row, 1);
  }

  submitClicked() {
    console.log("All users data", this.data)
  }

  upload(files: File[]) {
    console.log('File Successfully uploaded', files);
  }


}
