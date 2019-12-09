import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UersDetailsService } from '../uers-details.service';
import { PopupComponent } from '../popup/popup.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { SaideNavComponent } from '../components/saide-nav/saide-nav.component';

import {
  MatDialogModule,
  MatSidenavModule,
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    ChildComponentComponent,
    PopupComponent,
    DrawerComponent,
    SaideNavComponent,
    FirstComponent,
    SecondComponent,
  ],
  entryComponents: [PopupComponent],
  bootstrap: [HomeComponent],
  providers: [UersDetailsService]
})
export class HomeModule { }
