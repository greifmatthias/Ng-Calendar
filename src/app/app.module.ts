import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MgCalendarModule } from 'calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MgCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
