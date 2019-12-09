import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})

export class EmployeeListComponent {
  @Input() public parentData() {
    console.log("Initialized")
  }
  @Output() public childData = new EventEmitter();

  public employees = [];
  public errorMsg;
  username: string;
  email: string;
  phone: any;
  title = 'Login Your Information';
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'phone': ['', Validators.required],
      // ['', Validators.compose([
      //   Validators.required,
      //   Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
      // ])],
      'email': ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    });
  }

  childToParent() {
    this.childData.emit('Data passed from Child to Parent');
  }

  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'num':
        if (this.formGroup.get('phone').hasError('required')) {
          return 'Phone Number is required';
        }
        break;
      case 'mail':
        if (this.formGroup.get('email').hasError('required')) {
          return 'Email required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(post) {
    console.log("kjns", post)
    const dialogConfigData = new MatDialogConfig();
    dialogConfigData.width = '250px',
      dialogConfigData.position = {
        top: '0',
        left: '0'
      },
      dialogConfigData.data = post
    const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfigData);

    dialogRef.afterClosed().subscribe(result => {
      console.log("modal closed");
    });
  }

  clear() {
    this.username = '';
    this.phone = '';
    this.email = '';
  }
}

