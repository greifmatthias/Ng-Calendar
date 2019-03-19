import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'mg-monthview',
  templateUrl: './monthview.component.html',
  styleUrls: [
    './monthview.component.css',
    '../assets/main.css'
  ]
})
export class MonthviewComponent implements OnInit {

  // Api
  @Output() onSelectionChanged = new EventEmitter<moment_.Moment[]>();

  @Input() moment: moment_.Moment;
  @Input() selection: moment_.Moment[];

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

    if (this.moment !== undefined) {

      // Fill output with days of month
      // Starting with dayofyear of begin of month
      // ending with dayofyear of end of month
      for (var i = this.moment.clone().startOf('month').dayOfYear(); i <= this.moment.clone().endOf('month').dayOfYear(); i++) {

        output.push(this.moment.clone().dayOfYear(i));
      }
    }

    return output;
  }

  /*
  * Calculates the days before the month starts to fill grid
  * Returns a MomentArray of days of the week before the month starts
  */
  /* SAMPLE
   * * 1
   2 3 4
   5 6 7
  */
  calcPre(): moment_.Moment[] {

    var output: moment_.Moment[] = [];

    if (this.moment !== undefined) {

      // Fill output with days of previous month
      // Starting at 0
      // Ending on the beginning of the first week
      for (var i = 0; i < this.moment.clone().startOf('month').day() - 1; i++) {

        output.push(
          this.moment.clone().subtract(1, 'months').endOf('month').date(this.moment.clone().subtract(1, 'months').endOf('month').date() - i));
      }
    }

    return output.reverse();
  }

  /*
  * Calculates the days to the end of the month to fill grid
  * Returns a MomentArray of days of the week after the month ends
  */
  /* SAMPLE
   1 2 3
   4 5 6
   7 * *
  */
  calcPost(): moment_.Moment[] {

    var output: moment_.Moment[] = [];

    if (this.moment !== undefined) {

      // Fill output with days of month
      // Starting with 0
      // ending when available cells (= weeks displayed * 7 days minus predays + total days of month) are filled
      for (var i = 0; i < (this.calcRows() * 7) - (this.calcPre().length + this.calcDays().length); i++) {

        output.push(
          this.moment.clone().endOf('month').add(i + 1, 'days'));
      }
    }

    return output;
  }

  /*
  * Calculates the amount of rows needed to display a month
  * Returns total of needed rows
  */
  calcRows(): number {

    if (this.moment !== undefined) {
      
      // Recalc UI
      if (this.calcPre().length > 35 - this.moment.clone().daysInMonth()) {

        return 6;
      }
    }

    return 5;
  }

  // ************ MANIPULATION

  /*
  * Gets all the states for a day
  * Returns a string list of the current states
  */
  getState(daymoment: moment_.Moment): string[] {

    var output: string[] = [];

    // Check if selected
    if (this.isSelected(daymoment)) {

      output.push('isselected');
    }

    // Check if multiple days are selected
    if (this.isSelected(daymoment) && this.selection.length > 1) {

      output.push('ismultiselected');
    }

    // Check if today
    if (moment().clone().startOf('day').diff(daymoment.clone().startOf('day'), 'days') === 0) {

      output.push('istoday');
    }

    return output;

  }

  isSelected(daymoment: moment_.Moment): boolean {

    return this.selection.filter(day => day.clone().startOf('day').diff(daymoment.clone().startOf('day'), 'days') === 0).length > 0;
  }

}
