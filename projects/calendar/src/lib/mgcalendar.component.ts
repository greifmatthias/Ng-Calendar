import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, TemplateRef } from '@angular/core';

import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'mg-calendar',
  templateUrl: './mgcalendar.component.html',
  styleUrls: [
    './mgcalendar.component.css',
    './assets/main.css'
  ]
})
export class CalendarComponent implements OnInit {

  @ViewChild('dCalendar') calendar: ElementRef;

  // Api
  @Output() onSelectionChanged = new EventEmitter<moment_.Moment[]>();
  @Output() onNavigated = new EventEmitter<any>();

  _moment: moment_.Moment;
  @Input() moment: moment_.Moment;

  // Styling
  // Layout
  @Input() show_topstrip: boolean;
  @Input() show_navigator: boolean;
  @Input() show_weekview : boolean;
  @Input() weekview_orientation_vertical : boolean;

  // Colors
  @Input() color_topstrip: string;
  @Input() color_weekstrip: string;
  @Input() color_monthview: string;

  // Templating
  @Input() template_monthcurrent: TemplateRef<any>;
  @Input() template_monthnext: TemplateRef<any>;
  @Input() template_monthprev: TemplateRef<any>;

  @Input() template_navigationprev: TemplateRef<any>;
  @Input() template_navigationnext: TemplateRef<any>;

  @Input() template_title: TemplateRef<any>;

  @Input() data_day: any[];

  selection: moment_.Moment[];

  constructor() { }

  ngOnInit() {

    // Set default display if requested, else on today
    this._moment = this.moment === undefined ? moment().clone() : this.moment.clone();

    this.selection = [];
  }

  ngAfterViewInit() {

    //console.log(this.calendar.nativeElement.offsetWidth);
  }

  showTopstrip(): boolean {

    return this.show_topstrip !== undefined ? this.show_topstrip : true;
  }

  showNavigator(): boolean {

    return this.show_navigator !== undefined ? this.show_navigator : true;
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

    // Set
    this.selection = moments;

    // Notify
    this.onSelectionChanged.emit(this.selection);
  }

  /*
  * Triggered on month navigation
  * Emits year and month to parent through onNavigation
  */
  onNavigate(moment: moment_.Moment) {

    // Set
    this._moment = moment.clone();

    // Notify
    this.onNavigated.emit(Object.assign({}, {
      year: moment.clone().year(),
      month: moment.clone().month()
    }));
  }
}
