import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncrementComponent } from './increment/increment.component';
import { ComponentComponent } from '../../../../libs/lib-data/src/lib/component/component.component'

@NgModule({
  declarations: [AppComponent, IncrementComponent, ComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, ComponentComponent]
})
export class AppModule { }
