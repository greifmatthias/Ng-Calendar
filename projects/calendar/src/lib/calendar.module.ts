import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MonthviewComponent } from './monthview/monthview.component';
import { DayviewComponent } from './dayview/dayview.component';

@NgModule({
  declarations: [CalendarComponent, MonthviewComponent, DayviewComponent],
  imports: [
    CommonModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
