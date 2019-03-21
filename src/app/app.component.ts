import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarComponent } from 'calendar';

import * as moment from 'moment';

var Holidays = require('date-holidays');

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

  constructor() {

    // Init holidays for region
    Holidays = new Holidays('BE', 'VLG');
  }

  ngOnInit() {

  }

  // Get onselectionchange event from calendar
  doChange(event: any[]) {
    
    //console.log(event.length);
  }

  onNavigated(event: any) {
    //console.log(event);
  }

  // Trigger today selection of calendar
  doSelectToday() {
    this.calendar.doSelectToday();
  }

  // Returns the moment for today
  getToday(): moment.Moment {
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
  getMonthName(month: number) : string {
    return moment().clone().month(month).format('MMMM');
  }

  /*
  * Gets the day of the month for a moment
  * Returns number
  */
  getDate(moment: moment.Moment) {
    return moment.clone().date();
  }

  /*
  * Gets the holiday for a moment
  * Returns the holiday name if moment is a holiday
  */
  getHoliday(moment : moment.Moment){

    if(Holidays.isHoliday(moment.clone().toDate())){

      return Holidays.isHoliday(moment.clone().toDate()).name;
    }

    return '';
  }

  /*
  * Gets a type for a moment
  * Returns a string
  */
  getType(moment: moment.Moment) {
    if (moment.clone().date() == 20) {
      return 'birthday';
    }

    return 'standaard dagje';
  }

  isSelected(states: string[]) : boolean {
    return states.includes('isselected');
  }
}