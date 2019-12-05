import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  form: any;
  description: string;
  // constructor(
  //   private fb: any,
  //   private dialogRef: MatDialogRef<PopupComponent>,
  //   @Inject(MAT_DIALOG_DATA) data) {
  //   this.description = data.description;
  // }
  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
  ) {}
  ngOnInit() {
    // this.form = this.fb.group({
    //   description: [ this.description, []]
    // });
  }

  save() {
    // this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
