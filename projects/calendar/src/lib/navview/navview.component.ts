import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'mg-navview',
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

  constructor() { }

  ngOnInit() { }

  // ************ HANDLING

  /*
  * Do navigation, add one month
  * Pass current moment to parent through onNavigate Emitter
  */
  doNext() {

    this.moment.add(1, 'months');

    this.onNavigate.emit(this.moment.clone());
  }

  /*
  * Do navigation, go one month back in past
  * Pass current moment to parent through onNavigate Emitter
  */
  doPrev() {

    this.moment.subtract(1, 'months');

    this.onNavigate.emit(this.moment.clone());
  }


  // ************ MANIPULATION

  /*
  * Gets the current month
  * Returns readable string for month
  */
  getMonth() {

    if (this.moment !== undefined) {
      return this.moment.clone().format('MMMM');
    }

    return '';
  }

}
