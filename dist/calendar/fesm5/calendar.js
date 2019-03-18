import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CalendarService.ctorParameters = function () { return []; };
    /** @nocollapse */ CalendarService.ngInjectableDef = defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(); }, token: CalendarService, providedIn: "root" });
    return CalendarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mg-calendar',
                    template: "\n    <p>\n      calendar works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return []; };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CalendarComponent],
                    imports: [],
                    exports: [CalendarComponent]
                },] }
    ];
    return CalendarModule;
}());

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