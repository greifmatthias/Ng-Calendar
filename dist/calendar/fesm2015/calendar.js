import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarService {
    constructor() { }
}
CalendarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CalendarService.ctorParameters = () => [];
/** @nocollapse */ CalendarService.ngInjectableDef = defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(); }, token: CalendarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mg-calendar',
                template: `
    <p>
      calendar works!
    </p>
  `
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarModule {
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent],
                imports: [],
                exports: [CalendarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarService, CalendarComponent, CalendarModule };

//# sourceMappingURL=calendar.js.map