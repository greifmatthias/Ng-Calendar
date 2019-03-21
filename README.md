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


### Todo
* Weekstrip templating
* Styling on component size
* Load improvements
