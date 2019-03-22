import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MgCalendarModule } from 'calendar';

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

  @ViewChild('calendar') calendar: MgCalendarModule;

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
  onSelectionChanged(event: any[]) {
    
    console.log(event.length);
  }

  onNavigated(event: any) {
    console.log(event);
  }

  // Trigger today selection of calendar
  doSelectToday() {
    //this.calendar.doSelectToday();
  }



  // MANIPULATION

  /*
  * Gets the readable month string of a given month
  * Returns month name
  */
 /*getMonth(moment: moment.Moment) : string {
    return moment.clone().format('MMMM');
  }*/

  /*
  * Gets the readable month string of a given month
  * Returns month name
  */
 getMonth(month : number) : string {
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

  isSelected(states: string[]) : boolean {
    return states.includes('isselected');
  }
}