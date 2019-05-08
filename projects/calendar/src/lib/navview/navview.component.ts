import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: '[mg-navview]',
  templateUrl: './navview.component.html',
  styleUrls: [
    './navview.component.css',
    '../assets/main.css'
  ]
})
export class NavviewComponent implements OnInit {

  // Api
  @Output() onNavigate = new EventEmitter<moment_.Moment>();

  @Input() moment: moment_.Moment;

  // Layout
  @Input() show_navigator: boolean;

  // Templating
  @Input() template_prev: TemplateRef<any>;
  @Input() template_next: TemplateRef<any>;
  @Input() template_title: TemplateRef<any>;

  constructor() { }

  ngOnInit() { }

  // ************ LAYOUT

  /*
  * Navigator needs to be displayed
  * Returns boolean
  */
  showNavigator(): boolean {

    return this.show_navigator !== undefined ? this.show_navigator : true;
  }

  // ************ HANDLING

  /*
  * Do navigation, add one month
  * Pass current moment to parent through onNavigate Emitter
  */
  doNext() {

    // Navigate to next month
    this.moment.add(1, 'months');

    // Notify
    this.onNavigate.emit(this.moment.clone());
  }

  /*
  * Do navigation, go one month back in past
  * Pass current moment to parent through onNavigate Emitter
  */
  doPrev() {

    // Navigate to previous month
    this.moment.subtract(1, 'months');

    // Notify
    this.onNavigate.emit(this.moment.clone());
  }


  // ************ MANIPULATION

  /*
  * Gets the current month
  * Returns readable string for month
  */
  getMonth() : string {

    // ? Check data
    if (this.moment) {

      return this.moment.clone().format('MMMM');
    }

    return '';
  }

  /*
  * Gets the current year
  * Returns year as a string
  */
  getYear() : string {

    // ? Check data
    if (this.moment) {

      return this.moment.clone().year().toString();
    }

    return '';
  }

  /*
  * Gets the context of component
  * Returns Context object
  */
  getMonth_context(): { month : number, year : number} {

    return Object.assign({}, { month: this.moment.clone().month(), year: this.moment.clone().year() });
  }

}
