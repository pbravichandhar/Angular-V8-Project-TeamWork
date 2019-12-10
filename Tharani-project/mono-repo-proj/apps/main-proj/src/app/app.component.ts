import { Component } from '@angular/core';

interface UserDetail {
  i?: number;
  firstname: string;
  email: string;
  amount: number;
}
@Component({
  selector: 'mono-repo-proj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: UserDetail[] = [];
  firstname: string;
  email: string;
  amount: string;

  constructor() { }

  registerUser(form) {
    this.data.push(
      {
        firstname: form.value.firstname,
        email: form.value.email,
        amount: form.value.amount,
      }
    )
    form.reset();
  }

  deleteForm(row) {
    console.log("Form deleted")
    this.data.splice(row, 1);
  }

}
