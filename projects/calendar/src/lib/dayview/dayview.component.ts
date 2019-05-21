import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'mg-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: [
    './dayview.component.css',
    '../assets/main.css'
  ]
})
export class DayviewComponent implements OnInit {

  @Output() onSelect = new EventEmitter<any>();

  @Input() moment: moment_.Moment;

  // States
  @Input() isselected: boolean;
  @Input() ismultiselected: boolean;

  @Input() template: TemplateRef<any>;
  @Input() template_currentday: TemplateRef<any>;

  @Input() weekview : boolean;

  constructor() { }

  ngOnInit() {
  }

  // ************ HANDLING

  doSelect(event: any) {

    this.onSelect.emit(event);
  }


  // ************ MANIPULATION

  /*
  * Gets the date of month for current moment
  * Returns a number
  */
  getDate(): number {

    return this.moment.date();
  }

  /*
  * Gets a string list of all the assigned states
  * Returns a space separated string
  */
  getStates(): string {

    var states = [];

    if (this.isselected) {

      states.push('isselected');
    }

    if (this.ismultiselected) {

      states.push('ismultiselected');
    }

    if (this.isToday()) {

      states.push('istoday');
    }

    if (this.isPast()) {

      states.push('ispast');
    }

    return states.join(' ');
  }

  /*
  * Check if representing day is today
  * Returns boolean, true if today
  */
  isToday(): boolean {

    return moment().clone().startOf('day').diff(this.moment.clone().startOf('day'), 'days') === 0;
  }

  /*
    * Check if representing day is in past
    * Returns boolean
    */
  isPast(): boolean {

    return moment().clone().startOf('day').diff(this.moment.clone().startOf('day'), 'days') > 0;
  }

  /*
  * Gets the component current context
  * Returns Context object
  */
  getContext(): { moment: moment_.Moment, states: string } {

    return Object.assign({}, { moment: this.moment.clone(), states: this.getStates() });
  }
}
