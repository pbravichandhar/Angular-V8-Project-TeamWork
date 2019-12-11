import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {
  MatButtonModule, MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, [...modules], BrowserAnimationsModule],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
