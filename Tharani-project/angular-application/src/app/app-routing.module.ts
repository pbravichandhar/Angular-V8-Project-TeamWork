import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    redirectTo: '',
    pathMatch: 'full',
    component: EmployeeDetailComponent
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
