import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ...modules,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [DialogComponent],
  exports: [
    ...modules
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
