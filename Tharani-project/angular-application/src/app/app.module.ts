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
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NameValidateDirective } from './directives/nameValidate/name-validate.directive';
import { ShadowDirective } from './directives/appShadow/app-shadow.directive';
import { PhoneValidateDirective } from './directives/phoneValidate/phone-validate.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { FileComponent } from './file/file.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";

const appRoutes: Routes = [
  { path: '', component: FileComponent, data: { title: 'File Component' } },
  { path: 'file', component: FileComponent, data: { title: 'File Component' } },
  { path: 'edit', component: EditComponent, data: { title: 'Edit Component' } }
];

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
    LoginDialogComponent,
    NameValidateDirective,
    ShadowDirective,
    PhoneValidateDirective,
    NavigationComponent,
    FileComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ...modules,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
  ],
  entryComponents: [DialogComponent, LoginDialogComponent],
  exports: [
    ...modules
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
