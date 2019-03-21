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
  @Input() states: string[];

  @Input() template: TemplateRef<any>;
  @Input() template_currentday: TemplateRef<any>;

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
    return this.states.join(' ');
  }

  getContext(): any {

    return Object.assign({}, { moment: this.moment.clone(), states : this.states });

  }

  /*
  * Check if representing day is today
  * Returns boolean, true if today
  */
  isToday(): boolean {
    return this.states.includes('istoday');
  }
}
