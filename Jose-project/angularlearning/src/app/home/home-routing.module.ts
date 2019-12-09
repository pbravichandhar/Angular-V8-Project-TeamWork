import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SecondComponent } from '../second/second.component';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { FirstComponent } from '../first/first.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'first',
        component: FirstComponent,
      },
      {
        path: 'second',
        component: SecondComponent
      },
      // {
      //   path: 'dashboard';

      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
