(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('calendar', ['exports', '@angular/core'], factory) :
    (factory((global.calendar = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarService = /** @class */ (function () {
        function CalendarService() {
        }
        CalendarService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CalendarService.ctorParameters = function () { return []; };
        /** @nocollapse */ CalendarService.ngInjectableDef = i0.defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(); }, token: CalendarService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.CalendarService = CalendarService;
    exports.CalendarComponent = CalendarComponent;
    exports.CalendarModule = CalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=calendar.umd.js.map