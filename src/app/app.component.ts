import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'calendar';

import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('calendar') calendar : CalendarComponent;

  constructor() { }

  ngOnInit() {

  }

  // Get onselectionchange event from calendar
  doChange(event : Moment[]){
    console.log(event.length);
  }

  onNavigated(event : any){
    //console.log(event);
  }

  // Trigger today selection of calendar
  doSelectToday(){
    this.calendar.doSelectToday();
  }

  // Returns the moment for today
  getToday() : Moment{
    return moment();
  }
}
