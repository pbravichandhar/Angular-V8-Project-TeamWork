import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { UersDetailsService } from '../uers-details.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  constructor(
    private service: UersDetailsService,
    private dialog: MatDialog
  ) { }

  public childData = '';
  userData: any = [];
  test = false;
  data = {
    name: 'jose',
    color: 'blue'
  };

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      top: '0',
      left: '0'
    };

    this.dialog.open(PopupComponent, dialogConfig);

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  ngOnInit() {
    this.service.getUserData()
      .subscribe((data) => {
        this.userData = data;
        console.log('before', this.userData);
      });
  }

  sampleClick() {
    // this.test = true;
    this.openDialog();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('after', this.childData);
  }

}
