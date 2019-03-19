import { Component, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { CalendarComponent } from 'calendar';

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

  // Trigger today selection of calendar
  doSelectToday(){
    this.calendar.doSelectToday();
  }
}
