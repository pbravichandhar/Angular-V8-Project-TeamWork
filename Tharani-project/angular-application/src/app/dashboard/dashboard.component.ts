import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public userName = 'Tharini';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnChanges() {
    console.log('The dialog was closed');
  }

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
      this.ngOnChanges(),
        this.animal = result;
    });
  }
}

