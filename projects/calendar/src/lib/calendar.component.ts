import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'mg-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    './calendar.component.css',
    './assets/main.css'
  ]
})
export class CalendarComponent implements OnInit {

  // Api
  @Output() onSelectionChanged = new EventEmitter<moment_.Moment[]>();
  @Output() onNavigation = new EventEmitter<any>();

  @Input() moment: moment_.Moment;

  selection : moment_.Moment[];

  constructor() { }

  ngOnInit() {

    // Check if inital day is requested, else select today
    if (this.moment === undefined) {
      this.doSelectToday();
    }

    this.selection = [];

  }

  /*
  * Do selection
  * Sets local var
  */
  doSelect(moment: moment_.Moment): void {
    this.moment = moment;
  }

  /*
  * Do selection to current date
  * Sets local var
  */
  doSelectToday(): void {

    this.doSelect(moment().clone());
  }

  /*
  * Passes selection changes from monthview to parent
  * Emits values to parent through onSelectionChanged
  */
  onChangeSelection(moments: moment_.Moment[]) {

    this.selection = moments;

    this.onSelectionChanged.emit(this.selection);
  }

  /*
  * Triggered on month navigation
  * Emits year and month to parent through onNavigation
  */
  onNavigated(moment : moment_.Moment){
    this.onNavigation.emit({
      year: moment.clone().year,
      month : moment.clone().month
    });
  }
}
