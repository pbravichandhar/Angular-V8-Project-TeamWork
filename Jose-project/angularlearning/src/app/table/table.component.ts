import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponents implements OnInit, OnChanges {

  displayedColumns = ['id', 'name', 'salary', 'age'];
  dataSource: any;
  private paginator: MatPaginator;
  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  // }

  // dataSource: MatTableDataSource<Element>;

  // propChanges: any = {};

  // pageSize = '10';

  // pageSizeOptions = [10, 20, 30];

  @Input('tableData') public userObject;

  // constructor() { }

  // displayedColumns: string[] = ['id', 'name', 'salary', 'age'];

  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
  }

  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // if (this.paginator) {
    //   this.applyFilter('');
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.propChanges = changes;
    console.log('vjndksjvn', this.userObject);
    // this.dataSource = new MatTableDataSource<Element>(this.userObject);
    this.dataSource = this.userObject;
    this.dataSource.paginator = this.paginator;
  }

  // ngAfterViewInit() {
  //   console.log('ldkndvklnldldfv', this.paginator);
  //   this.dataSource.paginator = this.paginator;
  //   // this.dataSource.sort = this.sort;
  // }

}

export interface Element {
  employee_name: string;
  id: number;
  employee_salary: number;
  employee_age: string;
}

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
