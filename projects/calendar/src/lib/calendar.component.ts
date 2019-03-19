import { Component, OnInit, Input } from '@angular/core';

import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'mg-calendar',
  template: `<mg-monthview [moment]="moment"></mg-monthview>`,
  styles: [
    './assets/main.css'
  ]
})
export class CalendarComponent implements OnInit {

  @Input() moment : moment_.Moment;

  constructor() { }

  ngOnInit() {

    // Check if inital day is requested, else select today
    if(this.moment === undefined){
      this.doSelectToday();
    }

  }

  /*
  * Do selection
  * Sets local var
  */
  public doSelect(moment : moment_.Moment) : void {
    this.moment = moment;
  }

  public doSelectToday() : void{
    this.moment = moment();
  }
}
