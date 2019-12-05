import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template:
    `<h3>Employee List</h3>
<ul *ngFor="let employee of employees">
<li>{{employee.name}}</li>
</ul>

<h4>{{"Parent to child data transferred"}}</h4>
<p>{{"Hello" + parentData}}</p>
<button (click)="childToParent()">ChildToParent</button><br>
`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() public parentData() {
    console.log("Initialized")
  }
  @Output() public childData = new EventEmitter();

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  childToParent() {
    this.childData.emit('Data passed from Child to Parent');
  }
}
