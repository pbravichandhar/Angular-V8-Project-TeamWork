import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component'

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userName = 'Tharini';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px',
      dialogConfig.position = {
        top: '0',
        left: '0'
      },
      dialogConfig.data = {
        name: this.name, animal: this.animal
      }
    // this.dialog.open(DialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
