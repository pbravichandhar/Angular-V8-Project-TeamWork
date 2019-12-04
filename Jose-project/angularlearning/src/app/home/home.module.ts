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

import {
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    ChildComponentComponent,
    PopupComponent,
  ],
  entryComponents: [PopupComponent],
  bootstrap: [HomeComponent],
  providers: [UersDetailsService]
})
export class HomeModule { }
