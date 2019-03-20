import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarComponent } from 'calendar';

import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../assets/styles/main.css',
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {

  @ViewChild('calendar') calendar: CalendarComponent;

  template_month_context: any = {
    preset: 'Current selected month'
  };

  constructor() { }

  ngOnInit() {

  }

  // Get onselectionchange event from calendar
  doChange(event: Moment[]) {
    console.log(event.length);
  }

  onNavigated(event: any) {
    //console.log(event);
  }

  // Trigger today selection of calendar
  doSelectToday() {
    this.calendar.doSelectToday();
  }

  // Returns the moment for today
  getToday(): Moment {
    return moment();
  }

  getMonth() {
    return moment().format('MMMM');
  }

  // MANIPULATION

  /*
  * Gets the readable month string of a given month
  * Returns month name
  */
  getMonthName(month: number) {
    return moment().clone().month(month).format('MMMM');
  }

  /*
  * Gets the day of the month for a moment
  * Returns number
  */
  getDate(moment : Moment){
    return moment.clone().date();
  }
}
