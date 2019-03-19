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

  }

  /*
  * Do selection
  * Sets local var
  */
  public doSelect(moment: moment_.Moment): void {
    this.moment = moment;
  }

  /*
  * Do selection to current date
  * Sets local var
  */
  public doSelectToday(): void {

    this.doSelect(moment().clone());
  }

  /*
  * Passes selection changes from monthview to parent
  * Emits values to parent through onSelectionChanged
  */
  onChangeSelection(moments: moment_.Moment[]) {

    this.onSelectionChanged.emit(moments);
  }
}
