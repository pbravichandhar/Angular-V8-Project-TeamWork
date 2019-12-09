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
import { TableComponents } from '../table/table.component';

import {
  MatDialogModule,
  MatSidenavModule,
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';

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
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
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
    TableComponents,
  ],
  entryComponents: [PopupComponent],
  bootstrap: [HomeComponent],
  providers: [UersDetailsService]
})
export class HomeModule { }
