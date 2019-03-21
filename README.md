# NgCalendar
NgCalendar is a simple library for Angular that allows you to render a bare functional calendar.

## Functionalities

* Renders calendar
* Navigate through months
* Style various components
* Selection handling/callbacks

## How to install

Currently no clue xd
Will be available as an NPM-package

## Docs

### Layout

* Show/hide the topstrip, defaults to `true`.
```html
<mg-calendar [show_topstrip]="true|false"></mg-calendar>
```

* Show/hide the 2 navigationbuttons at the top, defaults to `true`.
```html
<mg-calendar [show_navigator]="true|false"></mg-calendar>
```

### Colors

* Color for topstrip, defaults to `transparent`.
```html
<mg-calendar color_topstrip="red|#FF0000|.."></mg-calendar>
```

* Color for the strip displaying the days of a week, defaults to `transparent`.
```html
<mg-calendar color_weekstrip="green|#00FF00|.."></mg-calendar>
```

* Color for the view containing the days of a month, defaults to `transparent`.
```html
<mg-calendar color_monthview="blue|#0000FF|.."></mg-calendar>
```

### Templating

#### Days of year
>You can template the way content looks, just pass the template with its content. You can get information about a day using the `moment` object returned. `moment` is a Moment-object from the [MomentJS-library](https://momentjs.com/).
>The state of a day (isselected, ismultiselected, istoday) are returned as a string of the states seperated by a space.

* Change the apearance/content of a displayed day in the month, defaults to a default style.

*Component.html*
```html
<mg-calendar [template_monthcurrent]="currentdaystyle"></mg-calendar>

<ng-template let-day="moment" let-daystates="states" #currentdaystyle>
  <!-- states printed as classes: class="isselected .."-->  
  <div class="{{ states }}">
      <p>
          {{ getMonth(day) }}
      </p>
      <p>
          {{ getDate(day) }}
      </p>
    </div>
</ng-template>
```
Where getMonth() and getDate() are own functions:

*Component.ts*
```javascript
getMonth(moment: moment.Moment) : string {
  return moment.clone().format('MMMM');
}

getDate(moment: moment.Moment) {
  return moment.clone().date();
}
```
This approach can also be used when templating the days for next month and the previous month, and the current day:
```html
<mg-calendar [template_monthnext]="nextdaystyle" [template_monthprev]="prevdaystyle"
             [template_currentday]="currentdaystyle"></mg-calendar>
```

#### Topstrip
> Template the top strip, this section is divided into 2 parts: the title and the navigation.

*Component.html*
```html
<mg-calendar [template_title]="titlestyle"></mg-calendar>

<ng-template let-year="year" let-month="month" #titlestyle>
    <p>
        {{ year }} {{ getMonth(month) }}
    </p>
</ng-template>
```

*Component.ts*
```javascript
getMonth(month : number) : string {
  return moment().clone().month(month).format('MMMM');
}
```

### Handlers

* onSelectionChanged()
> Triggered when a new selection of days has made on the calendar. It returns an array of Moment-objects of the new selection.

*Component.html*
```html
<mg-calendar (onSelectionChanged)="onSelectionChanged($event)"></mg-calendar>
```

*Component.ts*
```javascript
onSelectionChanged(event: any[]) {
  console.log(event.length);
}
```

### Todo
* Weekstrip templating
* Styling on component size
* Load improvements
