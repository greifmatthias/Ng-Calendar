import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: '[mg-weekview]',
  templateUrl: './weekview.component.html',
  styleUrls: [
    './weekview.component.css',
    '../assets/main.css'
  ]
})
export class WeekviewComponent implements OnInit {

  // Api
  @Output() onSelectionChanged = new EventEmitter<moment_.Moment[]>();

  @Input() moment: moment_.Moment;
  @Input() selection: moment_.Moment[];

  // Templating
  @Input() template_current: TemplateRef<any>;
  @Input() template_next: TemplateRef<any>;
  @Input() template_prev: TemplateRef<any>;

  // Styling
  // Colors
  @Input() backgroundcolorMonth: string;
  @Input() backgroundcolorWeek: string;

  weeknumber: number = 1;

  constructor() {

  }

  ngOnInit() { }

  // ************ HANDLING

  /*
  * On selecting a day
  */
  doSelect(daymoment: moment_.Moment, event: any) {

    // Check if controlkey is pressed => multiselection by day
    if (event.ctrlKey) {

      // Select/Deselect
      if (this.isSelected(daymoment)) {

        this.selection = this.selection.filter(select => select.clone().startOf('day').diff(daymoment.clone().startOf('day'), 'days') !== 0);
      } else {

        this.selection.push(daymoment);
      }
    }
    // Check if shiftkey is pressed => multiselect by rows
    else if (event.shiftKey) {

      // Check if a selection already made
      if (this.selection.length > 0) {

        // Sort selected dates
        this.selection.sort((a, b) => a.unix() > b.unix() ? -1 : 1);

        // Check for back or forward
        // if last selected day is greater than new selection => backward, else forward
        if (this.selection[0] > daymoment) {

          // Select backwards
          // starting at last selected date untill new selected date
          for (var i = this.selection[this.selection.length - 1].clone().startOf('day'); i.diff(daymoment.clone().startOf('day'), 'days') >= 0; i.subtract(1, 'days')) {

            if (!this.isSelected(i)) {

              this.selection.push(i.clone());
            }
          }
        } else {

          // for
          for (var i = this.selection[0].clone().startOf('day'); i.diff(daymoment.clone().startOf('day'), 'days') <= 0; i.add(1, 'days')) {

            if (!this.isSelected(i)) {

              this.selection.push(i.clone());
            }
          }
        }
      } else {
        this.selection.push(daymoment);
      }
    }
    // Simple selection
    else {

      // Select/Deselect
      // when selection is smaller or eqals one or selection does not contains date => select,
      // else clear
      if (this.selection.length <= 1 && !this.isSelected(daymoment)) {

        this.selection = [
          daymoment
        ];
      } else {
        this.selection = [];
      }
    }

    this.onSelectionChanged.emit(this.selection);
  }


  // ************ UI

  /*
  * Gets the days of the week in a readable format
  * Returns a list of days
  */
  getWeekdays(): string[] {
    var output = [];

    for (var i = 1; i <= 7; i++) {
      output.push(moment().clone().isoWeekday(i).format('dddd'));
    }

    return output;
  }

  /*
  * Gets the days of a month
  * Returns a MomentArray of days for month
  */
  calcDays(): moment_.Moment[] {

    var output: moment_.Moment[] = [];

    // ? Check if moment set
    if (this.moment) {

      // Calc start/end of week
      const firstday: moment_.Moment = this.moment.clone().startOf('week').dayOfYear() > this.moment.clone().startOf('month').dayOfYear() ? this.moment.clone().startOf('week').add(1, 'day') : this.moment.clone().startOf('month');
      const lastday: moment_.Moment = this.moment.clone().endOf('week').dayOfYear() < this.moment.clone().endOf('month').dayOfYear() ? this.moment.clone().endOf('week').add(1, 'day') : this.moment.clone().endOf('month');

      for (var i = firstday.dayOfYear(); i <= lastday.dayOfYear(); i++) {

        output.push(moment().clone().dayOfYear(i));
      }
    }

    console.log('CALCDAYS', output);

    return output;
  }

  /*
  * Calculates the days before the month starts to fill grid
  * Returns a MomentArray of days of the week before the month starts
  */
  calcPre(): moment_.Moment[] {

    var output: moment_.Moment[] = [];

    if (this.moment && this.moment.clone().startOf('week').month() !== this.moment.clone().month() && this.moment.clone().startOf('week').month() !== this.moment.clone().endOf('week').month()) {
      for (var i = this.moment.clone().startOf('month').subtract(1, 'days').day(); i > 0; i--) {
        output.push(this.moment.clone().subtract(i, 'days'));
      }
    }
    
    return output;
  }

  /*
  * Calculates the days to the end of the month to fill grid
  * Returns a MomentArray of days of the week after the month ends
  */
  calcPost(): moment_.Moment[] {

    var output: moment_.Moment[] = [];

    if (this.moment) {

      for (var i = 0; i < 7 - (this.calcPre().length + this.calcDays().length); i++) {

        output.push(
          this.moment.clone().endOf('month').add(i + 1, 'days'));
      }
    }

    return output;
  }

  // ************ MANIPULATION

  isSelected(daymoment: moment_.Moment): boolean {

    return this.selection.filter(day => day.clone().startOf('day').diff(daymoment.clone().startOf('day'), 'days') === 0).length > 0;
  }

}
