import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, TemplateRef } from '@angular/core';

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

  @ViewChild('dCalendar') calendar : ElementRef;

  // Api
  @Output() onSelectionChanged = new EventEmitter<moment_.Moment[]>();
  @Output() onNavigation = new EventEmitter<any>();

  _moment : moment_.Moment;
  @Input() moment: moment_.Moment;
  @Input() shownavigator: boolean;

  // Templating
  @Input() template_day : TemplateRef<any>;

  @Input() template_prev : TemplateRef<any>;
  @Input() template_next : TemplateRef<any>;
  
  @Input() template_month : TemplateRef<any>;
  @Input() template_month_context : any;

  @Input() data_day : any[];

  selection: moment_.Moment[];

  constructor() { }

  ngOnInit() {

    // Set default display if requeste, else on today
    this._moment = this.moment === undefined ? moment().clone() : this.moment.clone();

    this.selection = [];
  }

  ngAfterViewInit() {
    console.log(this.calendar.nativeElement.offsetWidth);
  }

  /*
  * Do selection
  * Sets local var
  */
  doSelect(moment: moment_.Moment): void {
    this._moment = moment;
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
  onNavigated(moment: moment_.Moment) {

    this._moment = moment.clone();

    this.onNavigation.emit({
      year: moment.clone().year(),
      month: moment.clone().month()
    });
  }
}
