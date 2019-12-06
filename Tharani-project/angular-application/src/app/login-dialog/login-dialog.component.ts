import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogDatas {
  username: string;
  email: string;
  password: number
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
})

export class LoginDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDatas) { }

  ngOnInit() {
    console.log("THIS", this.data.username);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
