import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './mgcalendar.component';
import { MonthviewComponent } from './monthview/monthview.component';
import { DayviewComponent } from './dayview/dayview.component';
import { NavviewComponent } from './navview/navview.component';
import { WeekviewComponent } from './weekview/weekview.component';

@NgModule({
  declarations: [CalendarComponent, MonthviewComponent, DayviewComponent, NavviewComponent, WeekviewComponent],
  imports: [
    CommonModule
  ],
  exports: [CalendarComponent]
})
export class MgCalendarModule { }
