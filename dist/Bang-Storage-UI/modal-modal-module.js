(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-modal-module"],{

/***/ "./node_modules/bang-storage-ui/fesm5/bang-storage-ui.js":
/*!***************************************************************!*\
  !*** ./node_modules/bang-storage-ui/fesm5/bang-storage-ui.js ***!
  \***************************************************************/
/*! exports provided: BangStorageUiModule, StorageButtonModule, StorageButtonComponent, StorageInputNumberComponent, StorageInputNumberModule, StorageModalDirective, StorageModalModule, StorageModalService, StorageZoomComponent, StorageZoomDirective, StorageZoomModule, StorageChartsDirective, StorageChartsModule, StorageBackTopComponent, StorageBackTopModule, StorageBackTopService, StorageUploadComponent, StorageUploadModule, StorageAnchorComponent, StorageAnchorModule, StorageAnchorService, StorageLinkComponent, StorageCarouselModule, StorageCarouselComponent, StorageCarouselContentComponent, StorageOptionComponent, StorageSelectComponent, StorageSelectModule, StorageTableModule, StorageTableComponent, StorageTheadComponent, StorageTrComponent, StorageThComponent, StorageThDirective, StorageTbodyComponent, StorageTdComponent, StorageInputDirective, StorageInputModule, ɵt, ɵs, ɵv, ɵu, ɵn, ɵm, ɵo, ɵq, ɵb, ɵa, ɵy, ɵx, ɵw, ɵl, ɵk, ɵd, ɵc, ɵbn, ɵbm, ɵbl, ɵf, ɵe, ɵg, ɵbb, ɵba, ɵz, ɵbd, ɵbc, ɵbe, ɵbi, ɵbj, ɵbh, ɵbk, ɵbf, ɵbg, ɵr, ɵp, ɵi, ɵj, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangStorageUiModule", function() { return BangStorageUiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageButtonModule", function() { return StorageButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageButtonComponent", function() { return StorageButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageInputNumberComponent", function() { return StorageInputNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageInputNumberModule", function() { return StorageInputNumberModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModalDirective", function() { return StorageModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModalModule", function() { return StorageModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModalService", function() { return StorageModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageZoomComponent", function() { return StorageZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageZoomDirective", function() { return StorageZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageZoomModule", function() { return StorageZoomModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageChartsDirective", function() { return StorageChartsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageChartsModule", function() { return StorageChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBackTopComponent", function() { return StorageBackTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBackTopModule", function() { return StorageBackTopModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBackTopService", function() { return StorageBackTopService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageUploadComponent", function() { return StorageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageUploadModule", function() { return StorageUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAnchorComponent", function() { return StorageAnchorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAnchorModule", function() { return StorageAnchorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAnchorService", function() { return StorageAnchorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageLinkComponent", function() { return StorageLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageCarouselModule", function() { return StorageCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageCarouselComponent", function() { return StorageCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageCarouselContentComponent", function() { return StorageCarouselContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageOptionComponent", function() { return StorageOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageSelectComponent", function() { return StorageSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageSelectModule", function() { return StorageSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTableModule", function() { return StorageTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTableComponent", function() { return StorageTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTheadComponent", function() { return StorageTheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTrComponent", function() { return StorageTrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageThComponent", function() { return StorageThComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageThDirective", function() { return StorageThDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTbodyComponent", function() { return StorageTbodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTdComponent", function() { return StorageTdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageInputDirective", function() { return StorageInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageInputModule", function() { return StorageInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return StorageAnchorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return StorageAnchorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return StorageAnchorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return StorageLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return StorageBackTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return StorageBackTopModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return StorageBackTopService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return StorageButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return StorageButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return StorageButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return StorageCarouselContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return StorageCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return StorageCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return StorageChartsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return StorageChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return StorageInputNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return StorageInputNumberModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return StorageInputTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return StorageInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return StorageInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return StorageModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return StorageModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return StorageModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return StorageOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return StorageSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return StorageSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return StorageTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return StorageTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return StorageTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return StorageTbodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return StorageTdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return StorageThComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return StorageThDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return StorageTheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return StorageTrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return StorageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return StorageUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return StorageZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return StorageZoomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return StorageZoomModule; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageButtonComponent = /** @class */ (function () {
    function StorageButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this._loading = false;
    }
    Object.defineProperty(StorageButtonComponent.prototype, "storageLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = value;
            value ? this.renderer.addClass(this.el, 'storage-button-loading') : this.renderer.removeClass(this.el, 'storage-button-loading');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageButtonComponent.prototype, "storageType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.renderer.removeClass(this.el, 'storage-button-primary');
            this.renderer.removeClass(this.el, 'storage-button-warning');
            this.renderer.removeClass(this.el, 'storage-button-danger');
            this.renderer.removeClass(this.el, 'storage-button-success');
            this.renderer.removeClass(this.el, 'storage-button-info');
            this.renderer.addClass(this.el, "storage-button-" + value);
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageButtonComponent.prototype, "storageSize", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.renderer.removeClass(this.el, 'storage-button-large');
            this.renderer.removeClass(this.el, 'storage-button-small');
            this.renderer.addClass(this.el, "storage-button-" + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageButtonComponent.prototype, "ghost", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.renderer.addClass(this.el, 'storage-button-ghost');
                this.renderer.removeClass(this.el, "storage-button-" + this.storageType);
                this.renderer.addClass(this.el, "storage-button-" + this.storageType + "-ghost");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el, 'storage-button');
    };
    StorageButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-button]',
                    template: "\n    <i nz-icon type=\"loading\" *ngIf=\"storageLoading\"></i>\n    <span [style.marginLeft]=\"storageLoading?'10px':'0'\"><ng-content></ng-content></span>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    styles: [".storage-button{line-height:1.499;display:inline-block;font-weight:400;text-align:center;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #d9d9d9;white-space:nowrap;padding:0 15px;font-size:14px;border-radius:4px;height:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.3s cubic-bezier(.645,.045,.355,1);position:relative;box-shadow:0 2px 0 rgba(0,0,0,.015);color:rgba(0,0,0,.65);background-color:#fff;outline:0}.storage-button:active,.storage-button:focus,.storage-button:hover{background:#fff;text-decoration:none}.storage-button:focus,.storage-button:hover{color:#40a9ff;border-color:#40a9ff}.storage-button:active{color:#096dd9;border-color:#096dd9}.storage-button-primary{color:#fff;background-color:#1890ff;border-color:#1890ff;text-shadow:0 -1px 0 rgba(0,0,0,.12);box-shadow:0 2px 0 rgba(0,0,0,.045)}.storage-button-primary:focus,.storage-button-primary:hover{color:#fff;background-color:#40a9ff;border-color:#40a9ff}.storage-button-primary:active{color:#fff;background-color:#096dd9;border-color:#096dd9}.storage-button-primary-ghost{color:#1890ff!important;border-color:#1890ff!important;box-shadow:0 2px 0 rgba(0,0,0,.045)}.storage-button-primary-ghost:active,.storage-button-primary-ghost:focus,.storage-button-primary-ghost:hover{color:#40a9ff;border-color:#40a9ff;background:0 0}.storage-button-danger{color:#f5222d;background-color:#f5f5f5;border-color:#d9d9d9}.storage-button-danger:focus,.storage-button-danger:hover{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.storage-button-danger:active{color:#fff;background-color:#cf1322;border-color:#cf1322}.storage-button-danger-ghost{color:#f5222d!important;border-color:#f5222d!important}.storage-button-danger-ghost:focus,.storage-button-danger-ghost:hover{color:#ff4d4f;border-color:#ff4d4f;background:0 0}.storage-button-danger-ghost:active{color:#cf1322;border-color:#cf1322;background:0 0}.storage-button-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.storage-button-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.storage-button-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.storage-button-success:active{color:#fff;background-color:#449d44;border-color:#398439}.storage-button-success-ghost{color:#5cb85c!important;border-color:#4cae4c!important}.storage-button-success-ghost:hover{color:#449d44;border-color:#398439;background:0 0}.storage-button-success-ghost:focus{color:#449d44;border-color:#255625;background:0 0}.storage-button-success-ghost:active{color:#449d44;border-color:#398439;background:0 0}.storage-button-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.storage-button-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.storage-button-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.storage-button-warning:active{color:#fff;background-color:#ec971f;border-color:#d58512}.storage-button-warning-ghost{color:#f0ad4e!important;border-color:#eea236!important}.storage-button-warning-ghost:hover{color:#ec971f;border-color:#d58512;background:0 0}.storage-button-warning-ghost:focus{color:#ec971f;border-color:#985f0d;background:0 0}.storage-button-warning-ghost:active{color:#ec971f;border-color:#d58512;background:0 0}.storage-button-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.storage-button-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.storage-button-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.storage-button-info:active{color:#fff;background-color:#31b0d5;border-color:#269abc}.storage-button-info-ghost{color:#5bc0de!important;border-color:#46b8da!important}.storage-button-info-ghost:hover{color:#31b0d5;border-color:#269abc;background:0 0}.storage-button-info-ghost:focus{color:#31b0d5;border-color:#1b6d85;background:0 0}.storage-button-info-ghost:active{color:#31b0d5;border-color:#269abc;background:0 0}.storage-button-large{padding:0 15px;font-size:16px;border-radius:4px;height:40px}.storage-button-small{padding:0 7px;font-size:14px;border-radius:4px;height:24px}.storage-button-loading{pointer-events:none}.storage-button[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none;cursor:not-allowed}.storage-button-ghost{background:0 0;color:#fff;box-shadow:0 2px 0 rgba(0,0,0,.015);border-color:#fff}.storage-button-ghost:active,.storage-button-ghost:focus,.storage-button-ghost:hover{color:#40a9ff;border-color:#40a9ff;background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    StorageButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageButtonComponent.propDecorators = {
        storageLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        storageType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        storageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        ghost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageGhost',] }]
    };
    return StorageButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageButtonModule = /** @class */ (function () {
    function StorageButtonModule() {
    }
    StorageButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    declarations: [StorageButtonComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
                    ],
                    exports: [StorageButtonComponent]
                },] }
    ];
    return StorageButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageInputNumberComponent = /** @class */ (function () {
    function StorageInputNumberComponent(message, renderer) {
        this.message = message;
        this.renderer = renderer;
        this.storageValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.isFormatter = false;
        this.inputTypeCheck$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.inputRangeCheck$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.inputPrecisionCheck$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.outputValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._placeholder = '请输入';
    }
    Object.defineProperty(StorageInputNumberComponent.prototype, "storageValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!isNaN(value)) {
                if (value === null || value === undefined) {
                    this.number = (/** @type {?} */ (value));
                }
                else {
                    this.number = String(value);
                }
            }
            else {
                this.inputTypeCheck$.next(String(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageInputNumberComponent.prototype, "storageDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            value ? this.renderer.addClass(this.inputNumber.nativeElement, 'storage-input-number-disabled') :
                this.renderer.removeClass(this.inputNumber.nativeElement, 'storage-input-number-disabled');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageInputNumberComponent.prototype, "storageFormatter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.isFormatter = true;
                this.icon = value.icon;
                this.renderer.setStyle(this.inputNumber.nativeElement, value.isBefore ? 'padding-left' : 'padding-right', '20px');
                this.renderer.setStyle(this.iconElement.nativeElement, value.isBefore ? 'left' : 'right', '6px');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageInputNumberComponent.prototype, "width", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var type = typeof value;
            this.renderer.setStyle(this.divElement.nativeElement, 'width', type === 'number' ? value + "px" : value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageInputNumberComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inputTypeCheck();
        this.inputRangeCheck();
        this.inputPrecisionCheck();
        this.outPutValue();
    };
    /**
     * @return {?}
     */
    StorageInputNumberComponent.prototype.inputTypeCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputTypeCheck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(750)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                if (isNaN(Number(value))) {
                    _this.message.error('请输入一个数字！');
                    _this.number = (/** @type {?} */ (null));
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    StorageInputNumberComponent.prototype.inputRangeCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputRangeCheck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(750)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var number = Number(value);
            if (_this.max !== undefined) {
                if (number > _this.max) {
                    _this.message.error("\u8BF7\u8F93\u5165\u5C0F\u4E8E" + _this.max + "\u7684\u6570\u5B57");
                    number = _this.max;
                    _this.number = String(number);
                }
            }
            if (_this.min !== undefined) {
                if (number < _this.min) {
                    _this.message.error("\u8BF7\u8F93\u5165\u5927\u4E8E" + _this.min + "\u7684\u6570\u5B57");
                    number = _this.min;
                    _this.number = String(number);
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    StorageInputNumberComponent.prototype.inputPrecisionCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputPrecisionCheck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(750)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.precision !== undefined) {
                /** @type {?} */
                var array = value.split('.');
                if (array.length === 2) {
                    /** @type {?} */
                    var precision = array[1];
                    if (precision.length > _this.precision) {
                        _this.number = Number(value).toFixed(_this.precision);
                    }
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    StorageInputNumberComponent.prototype.outPutValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.outputValue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(750)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.storageValueChange.emit(_this.number ? Number(_this.number) : (/** @type {?} */ (null)));
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StorageInputNumberComponent.prototype.inputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputTypeCheck$.next(value);
        this.inputPrecisionCheck$.next(value);
        this.inputRangeCheck$.next(value);
        this.outputValue$.next(value);
    };
    StorageInputNumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-input-number',
                    template: "\n    <div #divElement>\n      <input\n        type=\"text\"\n        class=\"storage-input-number\"\n        [(ngModel)]=\"number\"\n        (ngModelChange)=\"inputChange($event)\"\n        [disabled]=\"storageDisabled\"\n        [placeholder]=\"placeholder\"\n        #inputNumber\n      >\n      <span [hidden]=\"!isFormatter\" [innerHTML]=\"icon\" #iconElement></span>\n    </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    styles: ["div{position:relative;display:inline-block}div input{touch-action:manipulation}div input.storage-input-number{font-family:\"Chinese Quote\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"Helvetica Neue\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-variant:tabular-nums;box-sizing:border-box;margin:0;padding:4px 11px;list-style:none;position:relative;display:inline-block;width:100%;height:32px;font-size:14px;line-height:1.5;color:rgba(0,0,0,.65);background-color:#fff;background-image:none;border:1px solid #d9d9d9;border-radius:4px;transition:.3s}div input.storage-input-number:hover{border-color:#40a9ff;border-right-width:1px!important}div input.storage-input-number:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}div input.storage-input-number-disabled{background-color:#f5f5f5;opacity:1;cursor:not-allowed;color:rgba(0,0,0,.25)}div input.storage-input-number-disabled:hover{border-color:#e6d8d8;border-right-width:1px!important}div span{position:absolute;top:5px}"]
                }] }
    ];
    /** @nocollapse */
    StorageInputNumberComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageInputNumberComponent.propDecorators = {
        storageValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        storageDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageMax',] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageMin',] }],
        precision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePrecision',] }],
        storageFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageWidth',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePlaceholder',] }],
        storageValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        inputNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['inputNumber',] }],
        iconElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['iconElement',] }],
        divElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['divElement',] }]
    };
    return StorageInputNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var messageConfig = {
    nzMaxStack: 1,
    nzDuration: 3000
};
var ɵ0 = messageConfig;
var StorageInputNumberModule = /** @class */ (function () {
    function StorageInputNumberModule() {
    }
    StorageInputNumberModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    declarations: [StorageInputNumberComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
                    ],
                    exports: [StorageInputNumberComponent],
                    providers: [{
                            provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_MESSAGE_CONFIG"], useValue: ɵ0
                        }]
                },] }
    ];
    return StorageInputNumberModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageModalService = /** @class */ (function () {
    function StorageModalService(_rendererFactory) {
        this._dragging = false;
        this._screen = (/** @type {?} */ (document.body));
        this._resizing = false;
        this._resizeLeft = false;
        this._resizeRight = false;
        this._renderer = _rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    StorageModalService.prototype.initModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalTitle = document.getElementsByClassName('ant-modal-title')[0];
        /** @type {?} */
        var mask = document.getElementsByClassName('ant-modal-wrap')[0];
        this._content = (/** @type {?} */ (document.getElementsByClassName('ant-modal')[0]));
        this._contentWidth = this._content.offsetWidth;
        this._contentHeight = this._content.offsetHeight;
        this._modalLeft = (this._screen.offsetWidth - this._content.offsetWidth) / 2;
        this._modalTop = 100;
        this._renderer.setStyle(this._content, 'position', 'absolute');
        this._renderer.setStyle(this._content, 'left', this._modalLeft + "px");
        this._renderer.setStyle(this._content, 'top', this._modalTop + "px");
        this._renderer.setStyle(modalTitle, 'cursor', 'move');
        this._renderer.setStyle(mask, 'width', '100vw');
        this._renderer.setStyle(mask, 'height', '100vh');
        this._renderer.setStyle(mask, 'overflow', 'hidden');
    };
    /**
     * @return {?}
     */
    StorageModalService.prototype.initZoom = /**
     * @return {?}
     */
    function () {
        this._mouseBegin = this._mouseEnd = null;
        /** @type {?} */
        var left = this._renderer.createElement('div');
        /** @type {?} */
        var right = this._renderer.createElement('div');
        this._renderer.appendChild(this._content, left);
        this._renderer.addClass(left, 'storage-modal-zoom');
        this._renderer.addClass(left, 'storage-modal-zoom-left');
        this._renderer.appendChild(this._content, right);
        this._renderer.addClass(right, 'storage-modal-zoom');
        this._renderer.addClass(right, 'storage-modal-zoom-right');
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageModalService.prototype.drag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target['parentElement']['className'] === 'ant-modal-title') {
            this._dragging = true;
            this._mouseLeft = e.clientX - this._modalLeft;
            this._mouseTop = e.clientY - this._modalTop;
        }
        /** @type {?} */
        var zoom = (/** @type {?} */ (e.target['className']));
        if (typeof zoom === 'string') {
            if (zoom.split(' ').some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === 'storage-modal-zoom'; }))) {
                this._resizing = true;
                this._mouseBegin = this._mouseEnd = e.clientX;
                this._resizeLeft = zoom.split(' ').some((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item === 'storage-modal-zoom-left'; }));
                this._resizeRight = zoom.split(' ').some((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item === 'storage-modal-zoom-right'; }));
            }
        }
    };
    /**
     * @return {?}
     */
    StorageModalService.prototype.drop = /**
     * @return {?}
     */
    function () {
        this._dragging = false;
        this._resizing = this._resizeLeft = this._resizeRight = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageModalService.prototype.move = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._dragging) {
            if (e.clientX - this._mouseLeft < 0) {
                this._modalLeft = 0;
            }
            else {
                this._modalLeft = e.clientX - this._mouseLeft + this._contentWidth > this._screen.offsetWidth ?
                    this._screen.offsetWidth - this._contentWidth : e.clientX - this._mouseLeft;
            }
            if (e.clientY - this._mouseTop < 0) {
                this._modalTop = 0;
            }
            else {
                this._modalTop = e.clientY - this._mouseTop + this._contentHeight > this._screen.offsetHeight ?
                    this._screen.offsetHeight - this._contentHeight : e.clientY - this._mouseTop;
            }
            this._renderer.setStyle(this._content, 'left', this._modalLeft + "px");
            this._renderer.setStyle(this._content, 'top', this._modalTop + "px");
        }
        if (this._resizing) {
            this._mouseBegin = this._mouseEnd;
            this._mouseEnd = e.clientX;
            /** @type {?} */
            var instance = this._mouseBegin - this._mouseEnd;
            if (this._resizeLeft) {
                this._contentWidth += instance;
                this._modalLeft -= instance;
                if (this._contentWidth < 520) {
                    this._contentWidth -= instance;
                    this._modalLeft += instance;
                }
                this._renderer.setStyle(this._content, 'left', this._modalLeft + "px");
            }
            if (this._resizeRight) {
                this._contentWidth -= instance;
                if (this._contentWidth < 520) {
                    this._contentWidth += instance;
                }
            }
            this._renderer.setStyle(this._content, 'width', this._contentWidth + "px");
        }
    };
    StorageModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"] }
    ];
    /** @nocollapse */
    StorageModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["RendererFactory2"] }
    ]; };
    return StorageModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageModalDirective = /** @class */ (function () {
    function StorageModalDirective(storageModalService) {
        this.storageModalService = storageModalService;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    StorageModalDirective.prototype.drag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.storageModalService.drag(e);
    };
    /**
     * @return {?}
     */
    StorageModalDirective.prototype.drop = /**
     * @return {?}
     */
    function () {
        this.storageModalService.drop();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageModalDirective.prototype.move = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.storageModalService.move(e);
    };
    StorageModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[storage-move-modal]'
                },] }
    ];
    /** @nocollapse */
    StorageModalDirective.ctorParameters = function () { return [
        { type: StorageModalService }
    ]; };
    StorageModalDirective.propDecorators = {
        drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:mousedown', ['$event'],] }],
        drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:mouseup',] }],
        move: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:mousemove', ['$event'],] }]
    };
    return StorageModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageModalModule = /** @class */ (function () {
    function StorageModalModule() {
    }
    StorageModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                    declarations: [StorageModalDirective],
                    exports: [StorageModalDirective],
                    providers: [StorageModalService]
                },] }
    ];
    return StorageModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageZoomComponent = /** @class */ (function () {
    function StorageZoomComponent() {
        this.zoomOut = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    StorageZoomComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-zoom',
                    template: "\n    <div class=\"background\">\n      <div class=\"content\">\n        <img [src]=\"path\" alt=\"\u653E\u5927\u56FE\u7247\" (click)=\"zoomOut.emit()\">\n      </div>\n    </div>\n  ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].Emulated,
                    preserveWhitespaces: false,
                    styles: ["\n    .background {\n      width: 100%;\n      height: 100%;\n      position: fixed;\n      z-index: 999999999999999;\n      background: rgba(0, 0, 0, .45) !important;\n      top: 0;\n      left: 0;\n    }\n\n    .content {\n      max-width: 60%;\n      margin: 100px auto 0;\n      cursor: zoom-out;\n    }\n\n    .content > img {\n      width: 100%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    StorageZoomComponent.ctorParameters = function () { return []; };
    StorageZoomComponent.propDecorators = {
        path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        zoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
    };
    return StorageZoomComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageZoomDirective = /** @class */ (function () {
    function StorageZoomDirective(resolver, container, renderer, elementRef) {
        this.resolver = resolver;
        this.container = container;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    StorageZoomDirective.prototype.zoom = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.container.clear();
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(StorageZoomComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.path = this.path;
        this.componentRef.instance.zoomOut.subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
        }));
    };
    /**
     * @return {?}
     */
    StorageZoomDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'cursor', 'zoom-in');
    };
    StorageZoomDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[storage-zoom]'
                },] }
    ];
    /** @nocollapse */
    StorageZoomDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] }
    ]; };
    StorageZoomDirective.propDecorators = {
        path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePath',] }],
        zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['click',] }]
    };
    return StorageZoomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageZoomModule = /** @class */ (function () {
    function StorageZoomModule() {
    }
    StorageZoomModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]],
                    declarations: [StorageZoomComponent, StorageZoomDirective],
                    entryComponents: [StorageZoomComponent],
                    exports: [StorageZoomDirective]
                },] }
    ];
    return StorageZoomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageChartsDirective = /** @class */ (function () {
    function StorageChartsDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.chart = echarts__WEBPACK_IMPORTED_MODULE_1___default.a.init(this.el);
    }
    Object.defineProperty(StorageChartsDirective.prototype, "loading", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value ? this.chart.showLoading() : this.chart.hideLoading();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    StorageChartsDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.option && changes.option.firstChange) {
            this.setOption(changes.option.currentValue);
        }
        if (changes.merge && !changes.merge.firstChange) {
            /** @type {?} */
            var merge = (/** @type {?} */ (changes.merge.currentValue));
            for (var i in merge) {
                if (merge.hasOwnProperty(i)) {
                    this.option[i] = merge[i];
                }
            }
            this.setOption(this.option);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StorageChartsDirective.prototype.setOption = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.chart.setOption(value);
    };
    StorageChartsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[storage-charts]'
                },] }
    ];
    /** @nocollapse */
    StorageChartsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] }
    ]; };
    StorageChartsDirective.propDecorators = {
        option: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageOption',] }],
        merge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageMerge',] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageLoading',] }]
    };
    return StorageChartsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageChartsModule = /** @class */ (function () {
    function StorageChartsModule() {
    }
    StorageChartsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                    declarations: [StorageChartsDirective],
                    exports: [StorageChartsDirective]
                },] }
    ];
    return StorageChartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageBackTopService = /** @class */ (function () {
    function StorageBackTopService(doc) {
        this._doc = doc;
    }
    /**
     * @param {?} containerEl
     * @param {?} target
     * @return {?}
     */
    StorageBackTopService.prototype.scrollTo = /**
     * @param {?} containerEl
     * @param {?} target
     * @return {?}
     */
    function (containerEl, target) {
        var _this = this;
        if (containerEl === window) {
            /** @type {?} */
            var scroll_1 = setInterval((/**
             * @return {?}
             */
            function () {
                if (_this._doc.body.scrollTop === target && _this._doc.documentElement.scrollTop === target) {
                    clearInterval(scroll_1);
                }
                _this._doc.body.scrollTop -= 10;
                _this._doc.documentElement.scrollTop -= 10;
            }), 1);
        }
        else {
            /** @type {?} */
            var scroll_2 = setInterval((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var container = (/** @type {?} */ (containerEl));
                if (container.scrollTop === target) {
                    clearInterval(scroll_2);
                }
                container.scrollTop -= 10;
            }), 1);
        }
    };
    StorageBackTopService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"] }
    ];
    /** @nocollapse */
    StorageBackTopService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] }
    ]; };
    return StorageBackTopService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageBackTopComponent = /** @class */ (function () {
    function StorageBackTopComponent(_storageBackTopService, doc, _renderer2) {
        this._storageBackTopService = _storageBackTopService;
        this.doc = doc;
        this._renderer2 = _renderer2;
        this.target = 0;
        this.height = 400;
        this._container = null;
        this.hidden = true;
        this.storageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    Object.defineProperty(StorageBackTopComponent.prototype, "container", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._container = typeof value === 'string' ? document.querySelector(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    StorageBackTopComponent.prototype._getContainer = /**
     * @private
     * @return {?}
     */
    function () {
        return this._container || window;
    };
    /**
     * @return {?}
     */
    StorageBackTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer2.listen(this._getContainer(), 'scroll', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (_this._getContainer() === window) {
                _this.hidden = e.target['scrollingElement']['scrollTop'] < _this.height;
            }
            else {
                _this.hidden = e.target['scrollTop'] < _this.height;
            }
        }));
    };
    /**
     * @return {?}
     */
    StorageBackTopComponent.prototype.backTop = /**
     * @return {?}
     */
    function () {
        this._storageBackTopService.scrollTo(this._getContainer(), this.target);
        this.storageClick.emit(true);
    };
    StorageBackTopComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-back-top',
                    template: "\n    <div class=\"storage-back-top\" (click)=\"backTop()\" [hidden]=\"hidden\" [ngStyle]=\"position\">\n      <ng-template #defaultIcon>\n        <div class=\"defaultIcon\">\n          <i nz-icon type=\"to-top\" theme=\"outline\"></i>\n        </div>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"template||defaultIcon\"></ng-template>\n    </div>\n  ",
                    styles: ["\n    .storage-back-top {\n      position: fixed;\n      right: 100px;\n      bottom: 150px;\n      z-index: 9999999999;\n      cursor: pointer;\n    }\n\n    .defaultIcon {\n      width: 40px;\n      height: 40px;\n      background: rgba(0, 0, 0, 0.45);\n      border-radius: 50%;\n      color: #fff;\n      text-align: center;\n      font-size: 21px;\n      line-height: 40px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    StorageBackTopComponent.ctorParameters = function () { return [
        { type: StorageBackTopService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageBackTopComponent.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTemplate',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageContainer',] }],
        target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTarget',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageVisibilityHeight',] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePosition',] }],
        storageClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
    };
    return StorageBackTopComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageBackTopModule = /** @class */ (function () {
    function StorageBackTopModule() {
    }
    StorageBackTopModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]],
                    declarations: [StorageBackTopComponent],
                    exports: [StorageBackTopComponent],
                    providers: [StorageBackTopService]
                },] }
    ];
    return StorageBackTopModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageUploadComponent = /** @class */ (function () {
    function StorageUploadComponent(_sanitizer, _message) {
        this._sanitizer = _sanitizer;
        this._message = _message;
        this.fileList = [];
        this.multiple = false;
        this.disabled = false;
        this.storageFileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.storageLastFileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StorageUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageUploadComponent.prototype.upload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var files = (/** @type {?} */ (e.target.files));
        if (this.type && Array.from(files).some((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.type !== _this.type; }))) {
            this._message.error("\u53EA\u80FD\u4E0A\u4F20\u7C7B\u578B\u4E3A" + this.type + "\u7684\u6587\u4EF6\uFF01");
            return;
        }
        if (this.fileList.length + files.length > this.limited) {
            this._message.error("\u53EA\u80FD\u4E0A\u4F20" + this.limited + "\u4E2A\u6587\u4EF6\uFF01");
            return;
        }
        if (Array.from(files).some((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.size / 1000 > _this.size; }))) {
            this._message.error("\u53EA\u80FD\u4E0A\u4F20" + (this.size / 1024).toFixed(2) + "M\u7684\u6587\u4EF6\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20\uFF01");
            return;
        }
        if (files.length) {
            if (this.multiple) {
                try {
                    for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                        var value = files_1_1.value;
                        value = this.getURL(value);
                        this.fileList.push(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this.storageFileListChange.emit(this.fileList);
            }
            else {
                /** @type {?} */
                var file = this.getURL(files[0]);
                this.fileList.push(file);
                this.storageLastFileChange.emit(file);
                this.storageFileListChange.emit(this.fileList);
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageUploadComponent.prototype.getURL = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var url = null;
        if (window.URL) {
            url = this._sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(e));
        }
        e.url = url;
        return e;
    };
    StorageUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-upload',
                    template: "\n    <div class=\"storage-upload\" (click)=\"uploadTemplate.click()\">\n      <ng-template #defaultTemplate>\n        <button storage-button [disabled]=\"disabled\">\n          <span><i nz-icon type=\"upload\" theme=\"outline\"></i></span>\n          \u4E0A\u4F20\n        </button>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"template||defaultTemplate\"></ng-template>\n      <input type=\"file\" hidden [disabled]=\"disabled\" [multiple]=\"multiple\" #uploadTemplate (change)=\"upload($event)\">\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    StorageUploadComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }
    ]; };
    StorageUploadComponent.propDecorators = {
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTemplate',] }],
        fileList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageFileList',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageMultiple',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageDisabled',] }],
        limited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageLimited',] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageSize',] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageType',] }],
        storageFileListChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        storageLastFileChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageUploadComponent.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageUploadComponent.prototype, "disabled", void 0);
    return StorageUploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var messageConfig$1 = {
    nzMaxStack: 1,
    nzDuration: 3000
};
var ɵ0$1 = messageConfig$1;
var StorageUploadModule = /** @class */ (function () {
    function StorageUploadModule() {
    }
    StorageUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], StorageButtonModule, ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]],
                    declarations: [StorageUploadComponent],
                    exports: [StorageUploadComponent],
                    providers: [
                        {
                            provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_MESSAGE_CONFIG"], useValue: ɵ0$1
                        }
                    ]
                },] }
    ];
    return StorageUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageAnchorService = /** @class */ (function () {
    function StorageAnchorService() {
        this.clickHref$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    StorageAnchorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"] }
    ];
    /** @nocollapse */
    StorageAnchorService.ctorParameters = function () { return []; };
    return StorageAnchorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageLinkComponent = /** @class */ (function () {
    function StorageLinkComponent(_router, elementRef, _storageAnchorService) {
        this._router = _router;
        this.elementRef = elementRef;
        this._storageAnchorService = _storageAnchorService;
    }
    Object.defineProperty(StorageLinkComponent.prototype, "href", {
        get: /**
         * @return {?}
         */
        function () {
            return "" + this._router.url.split('#')[0] + this._href;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._href = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageLinkComponent.prototype.changeHref = /**
     * @return {?}
     */
    function () {
        this._storageAnchorService.clickHref$.next(true);
    };
    StorageLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-link',
                    template: "\n    <a [href]=\"href\" (click)=\"changeHref()\">{{title}}</a>\n  ",
                    styles: ["\n    a {\n      display: block;\n      color: rgba(0, 0, 0, .65);\n      margin: 10px 20px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    StorageLinkComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] },
        { type: StorageAnchorService }
    ]; };
    StorageLinkComponent.propDecorators = {
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageHref',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTitle',] }]
    };
    return StorageLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageAnchorComponent = /** @class */ (function () {
    function StorageAnchorComponent(_renderer, _document, _storageAnchorService) {
        this._renderer = _renderer;
        this._document = _document;
        this._storageAnchorService = _storageAnchorService;
        this.show = false;
        this._clickHref$ = null;
    }
    /**
     * @return {?}
     */
    StorageAnchorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._clickHref$ = this._storageAnchorService.clickHref$.subscribe((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._initBall();
            }));
        }));
    };
    /**
     * @return {?}
     */
    StorageAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', "-" + this._showAnchorBox.nativeElement.offsetWidth + "px");
        this._initBall();
    };
    /**
     * @private
     * @return {?}
     */
    StorageAnchorComponent.prototype._initBall = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scrollTop = this._document.scrollingElement.scrollTop;
        /** @type {?} */
        var elementScrollTop = [];
        this._storageLinkComponent.toArray().forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            elementScrollTop.push({
                index: index,
                top: Math.abs(_this._document.querySelector("#" + item.href.split('#')[1]).getBoundingClientRect().top - scrollTop)
            });
        }));
        elementScrollTop.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return a.top - b.top;
        }));
        this._storageLinkComponent.toArray().forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            _this._renderer.setStyle(item.elementRef.nativeElement.firstElementChild, 'color', index === elementScrollTop[0].index ? '#1890ff' : 'rgba(0, 0, 0, .65)');
        }));
        /** @type {?} */
        var element = this._storageLinkComponent.toArray()[elementScrollTop[0].index].elementRef.nativeElement.firstElementChild;
        this._renderer.setStyle(this._ball.nativeElement, 'top', element.offsetTop + element.offsetHeight / 2 - 4 + "px");
    };
    /**
     * @return {?}
     */
    StorageAnchorComponent.prototype.showAnchor = /**
     * @return {?}
     */
    function () {
        this.show = true;
        this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', '10px');
        this._renderer.addClass(this._showAnchorBox.nativeElement, 'show');
        this._initBall();
    };
    /**
     * @return {?}
     */
    StorageAnchorComponent.prototype.hideAnchor = /**
     * @return {?}
     */
    function () {
        this.show = false;
        this._renderer.setStyle(this._showAnchorBox.nativeElement, 'right', "-" + this._showAnchorBox.nativeElement.offsetWidth + "px");
    };
    /**
     * @return {?}
     */
    StorageAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._clickHref$.unsubscribe();
    };
    StorageAnchorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-anchor',
                    template: "\n    <div class=\"hover anchor\" [hidden]=\"show\" (mouseenter)=\"showAnchor()\">\n      \u60AC\u6D6E\u663E\u793A\n    </div>\n    <div class=\"anchor\" (mouseleave)=\"hideAnchor()\" #showAnchorBox>\n      <div class=\"anchor-line\">\n        <div class=\"anchor-ball\" #ball></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .anchor {\n      position: fixed;\n      right: 10px;\n      top: 200px;\n      padding: 10px;\n      background: #fff;\n      border-radius: 4px 0 0 4px;\n      border: 1px solid #E8E8E8;\n      z-index: 999999999999999999999;\n    }\n\n    .hover {\n      writing-mode: vertical-lr;\n    }\n\n    .show {\n      transition: right 1s;\n      border: none;\n      padding: 10px 30px;\n    }\n\n    .anchor-line {\n      height: 100%;\n      width: 2px;\n      background: #E8E8E8;\n      position: absolute;\n      left: 10px;\n      top: 0;\n    }\n\n    .anchor-ball {\n      position: absolute;\n      width: 8px;\n      height: 8px;\n      left: 1px;\n      border-radius: 8px;\n      border: 2px solid #1890ff;\n      background: #fff;\n      transition: top .3s ease-in-out;\n      transform: translateX(-50%);\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    StorageAnchorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
        { type: StorageAnchorService }
    ]; };
    StorageAnchorComponent.propDecorators = {
        _showAnchorBox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['showAnchorBox',] }],
        _ball: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['ball',] }],
        _storageLinkComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"], args: [StorageLinkComponent,] }]
    };
    return StorageAnchorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageAnchorModule = /** @class */ (function () {
    function StorageAnchorModule() {
    }
    StorageAnchorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                    declarations: [StorageAnchorComponent, StorageLinkComponent],
                    exports: [StorageAnchorComponent, StorageLinkComponent],
                    providers: [StorageAnchorService]
                },] }
    ];
    return StorageAnchorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageCarouselContentComponent = /** @class */ (function () {
    function StorageCarouselContentComponent() {
        this.width = '720px';
        this.height = '220px';
        this.dark = true;
        this.float = true;
    }
    StorageCarouselContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-carousel-content]',
                    template: '<ng-content></ng-content>',
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    styles: ["\n    .storage-carousel-content {\n      float: left;\n    }\n\n    .storage-carousel-content-dark {\n      background: #0d1a26;\n      color: #fff;\n    }\n\n    .storage-carousel-content-dark > * {\n      color: #fff;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    StorageCarouselContentComponent.ctorParameters = function () { return []; };
    StorageCarouselContentComponent.propDecorators = {
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['style.width',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['style.height',] }],
        dark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-carousel-content-dark',] }],
        float: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-carousel-content',] }]
    };
    return StorageCarouselContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageCarouselComponent = /** @class */ (function () {
    function StorageCarouselComponent(_renderer) {
        this._renderer = _renderer;
        this._size = {
            width: '720px',
            height: '220px'
        };
        this.move = 0;
        this.dotsArray = [];
        this.dots = true;
        this.direction = false;
        this.autoRun = false;
        this.speed = 3000;
        this.light = false;
        this.clickIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.clickDirection = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    Object.defineProperty(StorageCarouselComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value.width) {
                this._size.width = value.width;
            }
            if (value.height) {
                this._size.height = value.height;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._container.nativeElement, 'width', parseInt(this.size.width, 10) * this._contentChildren.toArray().length + "px");
        var _a = this.size, width = _a.width, height = _a.height;
        this._contentChildren.toArray().forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                item.width = width;
                item.height = height;
                item.dark = !_this.light;
            }));
        }));
        this.dotsArray = this._contentChildren.toArray().map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) { return ({ selected: !index }); }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageCarouselComponent.prototype.changeIndex = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.dotsArray.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            item.selected = index === e;
        }));
        var width = this.size.width;
        this.move = -parseInt(width, 10) * e;
        this.clickIndex.emit(e);
    };
    /**
     * @param {?=} next
     * @return {?}
     */
    StorageCarouselComponent.prototype.clickDirectionButton = /**
     * @param {?=} next
     * @return {?}
     */
    function (next) {
        if (next === void 0) { next = false; }
        var width = this.size.width;
        if (next) {
            if (this.dotsArray[this.dotsArray.length - 1].selected) {
                return;
            }
            this.move -= parseInt(width, 10);
            for (var i = 0; i < this.dotsArray.length; i++) {
                if (this.dotsArray[i].selected) {
                    this.dotsArray[i].selected = false;
                    this.dotsArray[i + 1].selected = true;
                    break;
                }
            }
            this.clickDirection.emit('pre');
        }
        else {
            if (this.dotsArray[0].selected) {
                return;
            }
            this.move += parseInt(width, 10);
            for (var i = 0; i < this.dotsArray.length; i++) {
                if (this.dotsArray[i].selected) {
                    this.dotsArray[i].selected = false;
                    this.dotsArray[i - 1].selected = true;
                    break;
                }
            }
            this.clickDirection.emit('next');
        }
    };
    /**
     * @return {?}
     */
    StorageCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setTimer(true);
    };
    /**
     * @param {?=} set
     * @return {?}
     */
    StorageCarouselComponent.prototype.setTimer = /**
     * @param {?=} set
     * @return {?}
     */
    function (set) {
        var _this = this;
        if (set === void 0) { set = false; }
        if (this.autoRun) {
            if (set) {
                var width_1 = this.size.width;
                this._timer = setInterval((/**
                 * @return {?}
                 */
                function () {
                    if (_this.dotsArray[_this.dotsArray.length - 1].selected) {
                        _this.dotsArray[0].selected = true;
                        _this.dotsArray[_this.dotsArray.length - 1].selected = false;
                        _this.move = 0;
                    }
                    else {
                        _this.move -= parseInt(width_1, 10);
                        for (var i = 0; i < _this.dotsArray.length; i++) {
                            if (_this.dotsArray[i].selected) {
                                _this.dotsArray[i].selected = false;
                                _this.dotsArray[i + 1].selected = true;
                                break;
                            }
                        }
                    }
                }), this.speed);
            }
            else {
                clearInterval(this._timer);
            }
        }
    };
    StorageCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-carousel',
                    template: "\n    <div class=\"storage-carousel\" [ngStyle]=\"size\" (mouseenter)=\"setTimer()\" (mouseleave)=\"setTimer(true)\">\n      <div\n        class=\"storage-carousel-container\"\n        [style.transform]=\"'translateX('+move+'px)'\"\n        #container>\n        <ng-content></ng-content>\n      </div>\n      <div class=\"storage-carousel-dots\" *ngIf=\"dots\">\n        <ul>\n          <li\n            *ngFor=\"let item of dotsArray;let i=index\"\n            [class.storage-carousel-dots-selected]=\"item.selected\"\n            [class.storage-carousel-dots-light]=\"light\"\n            (click)=\"changeIndex(i)\"\n          ></li>\n        </ul>\n      </div>\n      <div\n        class=\"storage-carousel-direction\"\n        *ngIf=\"direction\"\n        [style.lineHeight]=\"size.height\"\n      >\n    <span\n      [class.storage-carousel-direction-forbid]=\"dotsArray[0].selected\"\n      [class.storage-carousel-direction-light]=\"light\"\n      (click)=\"clickDirectionButton()\"\n    ><i nz-icon type=\"left-circle\" theme=\"outline\"></i></span>\n        <span\n          [class.storage-carousel-direction-forbid]=\"dotsArray[dotsArray.length-1].selected\"\n          [class.storage-carousel-direction-light]=\"light\"\n          (click)=\"clickDirectionButton(true)\"\n        ><i nz-icon type=\"right-circle\" theme=\"outline\"></i></span>\n      </div>\n    </div>\n  ",
                    styles: [".storage-carousel{background:#fff;display:inline-block;overflow:hidden;position:relative}.storage-carousel-container{height:100%;transition:transform .8s ease-in-out;transition:transform .8s ease-in-out,-webkit-transform .8s ease-in-out}.storage-carousel-dots{position:absolute;left:0;right:0;bottom:0;z-index:999999}.storage-carousel-dots ul{list-style:none;padding:0;margin:0;text-align:center}.storage-carousel-dots ul li{width:20px;height:8px;margin:0 2px;border-radius:4px;background:#fff;opacity:.4;display:inline-block;cursor:pointer;transition:opacity .8s}.storage-carousel-dots ul li:hover{opacity:1!important}.storage-carousel-dots-selected{opacity:.8!important}.storage-carousel-dots-light{background:#333!important}.storage-carousel-direction{position:absolute;left:0;right:0;top:0;bottom:0}.storage-carousel-direction span{font-size:40px;color:#fff;opacity:.4;cursor:pointer;transition:opacity .8s}.storage-carousel-direction span:last-child{float:right}.storage-carousel-direction span:hover{opacity:1}.storage-carousel-direction-forbid{cursor:not-allowed!important}.storage-carousel-direction-forbid:hover{opacity:.4!important}.storage-carousel-direction-light{color:#333!important}"]
                }] }
    ];
    /** @nocollapse */
    StorageCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageCarouselComponent.propDecorators = {
        _contentChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"], args: [StorageCarouselContentComponent,] }],
        _container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['container',] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageSize',] }],
        dots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageDots',] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageDirection',] }],
        autoRun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageAutoRun',] }],
        speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageAutoRunSpeed',] }],
        light: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageLight',] }],
        clickIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"], args: ['storageClickIndex',] }],
        clickDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"], args: ['storageClickDirection',] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageCarouselComponent.prototype, "dots", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageCarouselComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageCarouselComponent.prototype, "autoRun", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageCarouselComponent.prototype, "light", void 0);
    return StorageCarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageCarouselModule = /** @class */ (function () {
    function StorageCarouselModule() {
    }
    StorageCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]],
                    declarations: [
                        StorageCarouselComponent,
                        StorageCarouselContentComponent
                    ],
                    exports: [
                        StorageCarouselComponent,
                        StorageCarouselContentComponent
                    ]
                },] }
    ];
    return StorageCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageOptionComponent = /** @class */ (function () {
    function StorageOptionComponent() {
        this.disabled = false;
        this.hidden = false;
        this.selected = false;
    }
    StorageOptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-option',
                    template: "\n  "
                }] }
    ];
    StorageOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageValue',] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageName',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageDisabled',] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageOptionComponent.prototype, "disabled", void 0);
    return StorageOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageSelectComponent = /** @class */ (function () {
    function StorageSelectComponent(_renderer) {
        this._renderer = _renderer;
        this.placeholder = '';
        this.inputWidth = 180;
        this.size = 'default';
        this.notFoundContent = '没有数据';
        this.allowClear = false;
        this.disabled = false;
        this.showContainer = false;
        this.multiple = false;
        this.showSelectAll = false;
        this.storageValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.storageOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.storageScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.name = null;
        this.allowClearIcon = false;
        this.searchInput = null;
        this.isSelectAll = false;
        this.selectedList = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StorageSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes.value) {
            this.value = [];
        }
    };
    /**
     * @return {?}
     */
    StorageSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageSelectComponent.prototype.listenClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.searchElement && e.srcElement === this.searchElement.nativeElement) {
            return;
        }
        if (this.multiple) {
            if (this.itemElements.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nativeElement === e.srcElement; }))) {
                return;
            }
            if (this.selectAllElement && e.srcElement === this.selectAllElement.nativeElement) {
                return;
            }
        }
        this.showContainer = false;
        this.storageOpenChange.emit(this.showContainer);
        this._renderer.setStyle(this.iconElement.nativeElement, 'transform', 'rotate(0)');
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageSelectComponent.prototype.toggleContainer = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (!this.disabled) {
            e.stopPropagation();
            this.showContainer = !this.showContainer;
            this.initArray();
            this.storageOpenChange.emit(this.showContainer);
            this._renderer.setStyle(this.iconElement.nativeElement, 'transform', "rotate(" + (this.showContainer ? '180deg' : 0) + ")");
            if (this.showContainer) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.listElement) {
                        _this._renderer.listen(_this.listElement.nativeElement, 'scroll', (/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            if (event.srcElement.clientHeight + event.srcElement.scrollTop >= event.srcElement.scrollHeight) {
                                _this.storageScrollToBottom.emit();
                            }
                        }));
                    }
                }));
            }
        }
    };
    /**
     * @return {?}
     */
    StorageSelectComponent.prototype.initArray = /**
     * @return {?}
     */
    function () {
        this.searchInput = null;
        this.selectOptions.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.hidden = false; }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageSelectComponent.prototype.changeValue = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.disabled) {
            return;
        }
        this.value = e.value;
        this.name = e.name;
        this.storageValueChange.emit(e.value);
        this.showContainer = false;
        this.storageOpenChange.emit(this.showContainer);
        this.selectOptions.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected = item.value === e.value; }));
        this._renderer.setStyle(this.iconElement.nativeElement, 'transform', 'rotate(0)');
    };
    /**
     * @return {?}
     */
    StorageSelectComponent.prototype.clearValue = /**
     * @return {?}
     */
    function () {
        this.value = null;
        this.name = null;
        this.storageValueChange.emit(null);
        this.selectOptions.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected = false; }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageSelectComponent.prototype.search = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.selectOptions.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.hidden = item.name.indexOf(e) < 0; }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageSelectComponent.prototype.changeValueMultiple = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.disabled) {
            return;
        }
        this.selectOptions.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.value === e.value) {
                item.selected = !item.selected;
            }
        }));
        this.value = this.selectOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value; }));
        this.selectedList = this.selectOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; }));
        this.storageValueChange.emit(this.value);
    };
    /**
     * @return {?}
     */
    StorageSelectComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isSelectAll = !this.isSelectAll;
        this.selectOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.disabled; })).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected = _this.isSelectAll; }));
        this.value = this.selectOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value; }));
        this.selectedList = this.selectOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; }));
        this.storageValueChange.emit(this.value);
    };
    StorageSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-select',
                    template: "<ng-container *ngIf=\"multiple else singleTemplate\">\r\n  <div class=\"storage-select-multiple\">\r\n    <div\r\n      class=\"storage-select-multiple-selected\"\r\n      [style.cursor]=\"disabled?'not-allowed':'cursor'\"\r\n      (click)=\"toggleContainer($event)\">\r\n      <ul>\r\n        <li *ngFor=\"let item of selectedList\">\r\n          {{item.name}}\r\n          <span (click)=\"$event.stopPropagation();changeValueMultiple(item)\">\r\n            <i nz-icon type=\"close\" theme=\"outline\"></i>\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <input\r\n      nz-input\r\n      #inputElement\r\n      readonly\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [nzSize]=\"size\"\r\n      [style.width]=\"inputWidth+'px'\"\r\n      [(ngModel)]=\"name\"\r\n    >\r\n    <span\r\n      class=\"storage-select-icon\"\r\n      [class.storage-select-icon-disabled]=\"disabled\"\r\n      #iconElement\r\n    >\r\n      <i nz-icon type=\"down\" theme=\"outline\"></i>\r\n    </span>\r\n    <div class=\"storage-select-multiple-container\" [style.width]=\"inputWidth+'px'\" *ngIf=\"showContainer\">\r\n      <input\r\n        nz-input\r\n        #searchElement\r\n        placeholder=\"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9\"\r\n        [(ngModel)]=\"searchInput\"\r\n        (ngModelChange)=\"search($event)\"\r\n      >\r\n      <ul #listElement *ngIf=\"selectOptions.length;else noOption\">\r\n        <ng-container *ngFor=\"let item of selectOptions\">\r\n          <li\r\n            class=\"storage-select-multiple-container-item\"\r\n            [ngClass]=\"{'storage-select-multiple-container-item-selected':item.selected,'storage-select-multiple-container-item-disabled':item.disabled}\"\r\n            [hidden]=\"item.hidden\"\r\n            #itemElement\r\n            (click)=\"changeValueMultiple(item)\"\r\n          >\r\n            {{item.name}}\r\n            <span *ngIf=\"item.selected\" style=\"color: #1890ff;float: right\">\r\n              <i nz-icon type=\"check\" theme=\"outline\"></i>\r\n            </span>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n      <div class=\"storage-select-multiple-container-button\" (click)=\"selectAll()\" #selectAllElement\r\n           *ngIf=\"showSelectAll\">\r\n        {{isSelectAll ? '\u5168\u4E0D\u9009' : '\u5168\u9009'}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-template #singleTemplate>\r\n  <div\r\n    class=\"storage-select\"\r\n    (mouseenter)=\"allowClearIcon=true\"\r\n    (mouseleave)=\"allowClearIcon=false\">\r\n    <input\r\n      nz-input\r\n      #inputElement\r\n      (click)=\"toggleContainer($event)\"\r\n      readonly\r\n      [(ngModel)]=\"name\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [nzSize]=\"size\"\r\n      [style.width]=\"inputWidth+'px'\"\r\n      [style.cursor]=\"disabled?'not-allowed':'cursor'\"\r\n    >\r\n    <span\r\n      class=\"storage-select-icon\"\r\n      [class.storage-select-icon-disabled]=\"disabled\"\r\n      #iconElement\r\n    >\r\n    <i nz-icon type=\"down\" theme=\"outline\"></i>\r\n  </span>\r\n    <span\r\n      class=\"storage-select-icon\"\r\n      *ngIf=\"allowClear&&allowClearIcon&&!disabled\"\r\n      (click)=\"clearValue()\"\r\n    >\r\n    <i nz-icon type=\"close-circle\" theme=\"fill\"></i>\r\n  </span>\r\n    <div class=\"storage-select-container\" [style.width]=\"inputWidth+'px'\" *ngIf=\"showContainer\">\r\n      <input\r\n        nz-input\r\n        #searchElement\r\n        placeholder=\"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9\"\r\n        [(ngModel)]=\"searchInput\"\r\n        (ngModelChange)=\"search($event)\"\r\n      >\r\n      <ul #listElement *ngIf=\"selectOptions.length;else noOption\">\r\n        <ng-container *ngFor=\"let item of selectOptions\">\r\n          <li\r\n            (click)=\"$event.stopPropagation();changeValue(item)\"\r\n            class=\"storage-select-container-item\"\r\n            [ngClass]=\"{'storage-select-container-item-selected':item.selected,'storage-select-container-item-disabled':item.disabled}\"\r\n            [hidden]=\"item.hidden\"\r\n          >\r\n            {{item.name}}\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #noOption>\r\n  <p class=\"storage-select-noOption\">{{notFoundContent}}</p>\r\n</ng-template>\r\n",
                    styles: [".storage-select{display:inline-block;min-width:120px;position:relative}.storage-select>input{color:transparent;text-shadow:0 0 0 rgba(0,0,0,.65);cursor:pointer}.storage-select-icon{display:inline-block;font-style:normal;vertical-align:baseline;text-align:center;text-transform:none;text-rendering:auto;position:absolute;right:10px;z-index:1;background:#fff;color:rgba(0,0,0,.45);top:50%;font-size:12px;width:12px;height:12px;margin-top:-6px;line-height:12px;cursor:pointer;transition:color .3s,opacity .15s,transform .3s,-webkit-transform .3s}.storage-select-icon-disabled{background:#f5f5f5;cursor:not-allowed}.storage-select-container{position:absolute;margin:4px 0;background-color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);border-radius:4px;box-sizing:border-box;z-index:999999999999}.storage-select-container ul{outline:0;margin-bottom:0;padding-left:0;list-style:none;max-height:250px;overflow:auto}.storage-select-container-item{padding:5px 12px;font-weight:400;color:rgba(0,0,0,.65);white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis;transition:background .3s}.storage-select-container-item:hover{background:#e6f7ff}.storage-select-container-item:first-child{border-radius:4px 4px 0 0}.storage-select-container-item:last-child{border-radius:0 0 4px 4px}.storage-select-container-item-selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}.storage-select-container-item-selected:hover{background:#fafafa}.storage-select-container-item-disabled{color:rgba(0,0,0,.25);background-color:#fff;cursor:not-allowed}.storage-select-container-item-disabled:hover{background:#fff}.storage-select-multiple{display:inline-block;min-width:120px;position:relative}.storage-select-multiple>input{color:transparent;text-shadow:0 0 0 rgba(0,0,0,.65);cursor:pointer}.storage-select-multiple-container{position:absolute;margin:4px 0;background-color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);border-radius:4px;box-sizing:border-box;z-index:9999999999}.storage-select-multiple-container ul{outline:0;margin-bottom:0;padding-left:0;list-style:none;max-height:250px;overflow:auto}.storage-select-multiple-container-item{padding:5px 12px;font-weight:400;color:rgba(0,0,0,.65);white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis;transition:background .3s}.storage-select-multiple-container-item:hover{background:#e6f7ff}.storage-select-multiple-container-item:first-child{border-radius:4px 4px 0 0}.storage-select-multiple-container-item:last-child{border-radius:0 0 4px 4px}.storage-select-multiple-container-item-selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}.storage-select-multiple-container-item-selected:hover{background:#fafafa}.storage-select-multiple-container-item-disabled{color:rgba(0,0,0,.25);background-color:#fff;cursor:not-allowed}.storage-select-multiple-container-item-disabled:hover{background:#fff}.storage-select-multiple-container-button{padding:5px 12px;font-weight:400;color:#1890ff;cursor:pointer;text-align:center}.storage-select-multiple-selected{position:absolute;z-index:99999999;left:0;right:0;top:0;bottom:0;cursor:pointer;overflow:auto}.storage-select-multiple-selected ul{list-style:none;height:100%;margin:0;padding:0}.storage-select-multiple-selected ul li{float:left;color:rgba(0,0,0,.65);background-color:#fafafa;border:1px solid #e8e8e8;border-radius:2px;max-width:99%;position:relative;overflow:hidden;text-overflow:ellipsis;transition:padding .3s cubic-bezier(.645,.045,.355,1);margin:4px;padding:2px 8px;cursor:default}.storage-select-multiple-selected ul li span{cursor:pointer}.storage-select-noOption{text-align:center;margin:10px 0;color:rgba(0,0,0,.25);cursor:not-allowed}"]
                }] }
    ];
    /** @nocollapse */
    StorageSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageSelectComponent.propDecorators = {
        selectOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"], args: [StorageOptionComponent,] }],
        inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['inputElement',] }],
        iconElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['iconElement',] }],
        listElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['listElement',] }],
        searchElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['searchElement',] }],
        selectAllElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['selectAllElement',] }],
        itemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChildren"], args: ['itemElement',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageValue',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePlaceholder',] }],
        inputWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageWidth',] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageSize',] }],
        notFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageNotFoundContent',] }],
        allowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageAllowClear',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageDisabled',] }],
        showContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageOpen',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageMultiple',] }],
        showSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageShowSelectAll',] }],
        storageValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        storageOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        storageScrollToBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        listenClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:click', ['$event'],] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageSelectComponent.prototype, "allowClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageSelectComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageSelectComponent.prototype, "showContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageSelectComponent.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageSelectComponent.prototype, "showSelectAll", void 0);
    return StorageSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageSelectModule = /** @class */ (function () {
    function StorageSelectModule() {
    }
    StorageSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
                    declarations: [StorageSelectComponent, StorageOptionComponent],
                    exports: [StorageSelectComponent, StorageOptionComponent]
                },] }
    ];
    return StorageSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTableService = /** @class */ (function () {
    function StorageTableService() {
        this.storageChangeWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    StorageTableService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StorageTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ StorageTableService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function StorageTableService_Factory() { return new StorageTableService(); }, token: StorageTableService, providedIn: "root" });
    return StorageTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTableComponent = /** @class */ (function () {
    function StorageTableComponent(_storageTableService, _changeDetectorRef) {
        this._storageTableService = _storageTableService;
        this._changeDetectorRef = _changeDetectorRef;
        this.data = [];
        this.tableData = [];
        this.changeWidth = false;
        this.loading = false;
        this.total = 0;
        this.showPagination = true;
        this.showSizeChanger = true;
        this.showQuickJumper = false;
        this.frontPagination = false;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StorageTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
        this._initTable();
    };
    /**
     * @return {?}
     */
    StorageTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._storageTableService.storageChangeWidth$.next(this.changeWidth);
    };
    /**
     * @private
     * @return {?}
     */
    StorageTableComponent.prototype._initTable = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = [];
        if (this.frontPagination) {
            this.total = this.tableData.length;
            data = this.tableData.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
        }
        else {
            data = this.tableData;
        }
        this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(data);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    StorageTableComponent.prototype.changePage = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._initTable();
        ((/** @type {?} */ (this[type + "Change"]))).emit(this[type]);
    };
    StorageTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'storage-table',
                    template: "<div class=\"storage-table-container\">\r\n  <nz-spin [nzSpinning]=\"loading\">\r\n    <table class=\"storage-table\">\r\n      <ng-content></ng-content>\r\n    </table>\r\n    <nz-pagination\r\n      [(nzPageIndex)]=\"pageIndex\"\r\n      [(nzPageSize)]=\"pageSize\"\r\n      [nzTotal]=\"total\"\r\n      [nzShowTotal]=\"showTotalTemplate\"\r\n      (nzPageIndexChange)=\"changePage('pageIndex')\"\r\n      (nzPageSizeChange)=\"changePage('pageSize')\"\r\n      nzShowQuickJumper\r\n      nzShowSizeChanger\r\n    ></nz-pagination>\r\n  </nz-spin>\r\n</div>\r\n<ng-template #showTotalTemplate>\r\n  \u5171{{total}}\u6761\u6570\u636E\r\n</ng-template>\r\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    styles: [".storage-table{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0}.storage-item{text-align:center;transition:background .3s;padding:16px;min-width:200px;border-bottom:1px solid #e8e8e8;border-right:1px solid #e8e8e8}.storage-item:first-child{border-left:1px solid #e8e8e8}.storage-item>div{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.storage-td{text-align:center;transition:background .3s;padding:16px;min-width:200px;border-bottom:1px solid #e8e8e8;border-right:1px solid #e8e8e8}.storage-td:first-child{border-left:1px solid #e8e8e8}.storage-td>div{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.storage-th{text-align:center;transition:background .3s;padding:16px;min-width:200px;border-bottom:1px solid #e8e8e8;border-right:1px solid #e8e8e8;color:rgba(0,0,0,.85);font-weight:600;background:#f6f6f6;border-top:1px solid #e8e8e8;position:relative}.storage-th:first-child{border-left:1px solid #e8e8e8}.storage-th>div{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.storage-line{position:absolute;height:100%;width:20px;background:#000;right:-10px;top:0;z-index:999;cursor:col-resize}.storage-tbody>.storage-tr:hover>.storage-td{background:#e6f7ff}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.storage-tr.cdk-drop-list-dragging .storage-th:not(.cdk-drag-placeholder){transition:transform .5s cubic-bezier(0,0,.2,1);transition:transform .5s cubic-bezier(0,0,.2,1),-webkit-transform .5s cubic-bezier(0,0,.2,1)}.storage-table-container nz-pagination{float:right;margin-top:20px}"]
                }] }
    ];
    /** @nocollapse */
    StorageTableComponent.ctorParameters = function () { return [
        { type: StorageTableService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"] }
    ]; };
    StorageTableComponent.propDecorators = {
        tableData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTableData',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTitle',] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageFooter',] }],
        changeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageChangeWidth',] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageLoading',] }],
        total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageTotal',] }],
        showPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageShowPagination',] }],
        showSizeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageShowSizeChanger',] }],
        showQuickJumper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageShowQuickJumper',] }],
        frontPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageFrontPagination',] }],
        pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePageIndex',] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePageSize',] }],
        pageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"], args: ['storagePageIndexChange',] }],
        pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"], args: ['storagePageSizeChange',] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "changeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "total", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "showPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "showSizeChanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "showQuickJumper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "frontPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "pageIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        Object(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], StorageTableComponent.prototype, "pageSize", void 0);
    return StorageTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTheadComponent = /** @class */ (function () {
    function StorageTheadComponent() {
        this.class = true;
    }
    StorageTheadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-thead]',
                    template: "<ng-content></ng-content>\r\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    styles: [""]
                }] }
    ];
    StorageTheadComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-thead',] }]
    };
    return StorageTheadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageThComponent = /** @class */ (function () {
    function StorageThComponent(_storageTableService, _changeDetectorRef, elementRef) {
        this._storageTableService = _storageTableService;
        this._changeDetectorRef = _changeDetectorRef;
        this.elementRef = elementRef;
        this.class = true;
        this.changeWidth = false;
    }
    /**
     * @return {?}
     */
    StorageThComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._storageChangeWidth$ = this._storageTableService.storageChangeWidth$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.changeWidth = value;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.detectChanges();
            }));
        }));
    };
    /**
     * @return {?}
     */
    StorageThComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._storageChangeWidth$.unsubscribe();
    };
    StorageThComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-th]',
                    template: "<div>\r\n  <ng-content></ng-content>\r\n</div>\r\n<div class=\"storage-line\" *ngIf=\"changeWidth\" dragDropMove [elementRef]=\"elementRef\"></div>\r\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StorageThComponent.ctorParameters = function () { return [
        { type: StorageTableService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] }
    ]; };
    StorageThComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-th',] }]
    };
    return StorageThComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTrComponent = /** @class */ (function () {
    function StorageTrComponent() {
        this.class = true;
    }
    /**
     * @return {?}
     */
    StorageTrComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ths.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            if (index === _this.ths.length - 1) {
                item.changeWidth = false;
            }
        }));
    };
    StorageTrComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-tr]',
                    template: "<ng-content></ng-content>\r\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StorageTrComponent.ctorParameters = function () { return []; };
    StorageTrComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-tr',] }],
        ths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"], args: [StorageThComponent,] }]
    };
    return StorageTrComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTbodyComponent = /** @class */ (function () {
    function StorageTbodyComponent() {
        this.class = true;
    }
    StorageTbodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-tbody]',
                    template: "<ng-content></ng-content>\r\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    styles: [""]
                }] }
    ];
    StorageTbodyComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-tbody',] }]
    };
    return StorageTbodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTdComponent = /** @class */ (function () {
    function StorageTdComponent() {
        this.class = true;
    }
    StorageTdComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[storage-td]',
                    template: "<div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    styles: [""]
                }] }
    ];
    StorageTdComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostBinding"], args: ['class.storage-td',] }]
    };
    return StorageTdComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageThDirective = /** @class */ (function () {
    function StorageThDirective(_renderer) {
        this._renderer = _renderer;
        this._isMove = false;
    }
    /**
     * @return {?}
     */
    StorageThDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._thisWidth = this.elementRef.nativeElement.offsetWidth;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageThDirective.prototype.drag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this._thisWidth = this.elementRef.nativeElement.offsetWidth;
        this._isMove = this._thisWidth >= 50;
        this._begin = e.clientX;
    };
    /**
     * @return {?}
     */
    StorageThDirective.prototype.drop = /**
     * @return {?}
     */
    function () {
        this._isMove = false;
        this._thisWidth = this._currentWidth;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StorageThDirective.prototype.move = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._isMove) {
            /** @type {?} */
            var movement = e.clientX - this._begin;
            this._currentWidth = this._thisWidth + movement;
            if (this._currentWidth >= 50) {
                this._renderer.setStyle(this.elementRef.nativeElement, 'width', this._currentWidth + "px");
            }
            else {
                this._isMove = false;
                this._thisWidth = 50;
            }
        }
    };
    StorageThDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[dragDropMove]'
                },] }
    ];
    /** @nocollapse */
    StorageThDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageThDirective.propDecorators = {
        elementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['mousedown', ['$event'],] }],
        drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:mouseup',] }],
        move: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:mousemove', ['$event'],] }]
    };
    return StorageThDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageTableModule = /** @class */ (function () {
    function StorageTableModule() {
    }
    StorageTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
                    ],
                    exports: [
                        StorageTableComponent,
                        StorageTheadComponent,
                        StorageTrComponent,
                        StorageThComponent,
                        StorageTbodyComponent,
                        StorageTdComponent
                    ],
                    declarations: [
                        StorageTableComponent,
                        StorageTheadComponent,
                        StorageTrComponent,
                        StorageThComponent,
                        StorageTbodyComponent,
                        StorageTdComponent,
                        StorageThDirective,
                    ],
                    providers: [StorageTableService]
                },] }
    ];
    return StorageTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageInputDirective = /** @class */ (function () {
    function StorageInputDirective(ngControl, _elementRef, _renderer) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.size = 'default';
        this._disabled = false;
        this._initInput();
        this._initContainer();
        this._initTitle();
    }
    Object.defineProperty(StorageInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StorageInputDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._title) {
            this._renderer.setStyle(this._title, 'opacity', "" + (this.value ? 1 : 0));
        }
    };
    /**
     * @return {?}
     */
    StorageInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    StorageInputDirective.prototype._initInput = /**
     * @private
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._elementRef.nativeElement, 'ant-input');
        this._placeholder = this._elementRef.nativeElement.placeholder;
    };
    /**
     * @private
     * @return {?}
     */
    StorageInputDirective.prototype._initContainer = /**
     * @private
     * @return {?}
     */
    function () {
        this._container = this._renderer.createElement('span');
        this._renderer.addClass(this._container, 'storage-input-container');
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._container);
        this._renderer.appendChild(this._container, this._elementRef.nativeElement);
    };
    /**
     * @private
     * @return {?}
     */
    StorageInputDirective.prototype._initTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this._title = this._renderer.createElement('span');
        this._renderer.addClass(this._title, 'storage-input-title');
        this._renderer.appendChild(this._title, this._renderer.createText(this._placeholder));
        this._renderer.appendChild(this._container, this._title);
    };
    StorageInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[storage-input]',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "size === 'large'",
                        '[class.ant-input-sm]': "size === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    StorageInputDirective.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Renderer2"] }
    ]; };
    StorageInputDirective.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageSize',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageValue',] }]
    };
    return StorageInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageInputTitleComponent = /** @class */ (function () {
    function StorageInputTitleComponent() {
    }
    StorageInputTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    template: "\n    <span class=\"storage-input-title\" [style.opacity]=\"value?1:0\">{{placeholder}}</span>\n  ",
                    styles: ["\n    .storage-input-title {\n      padding: 0 4px;\n      background: #fff;\n      color: rgba(0, 0, 0, .65);\n      transition: opacity ease-in-out .2s;\n    }\n  "]
                }] }
    ];
    StorageInputTitleComponent.propDecorators = {
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storagePlaceholder',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['storageValue',] }]
    };
    return StorageInputTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorageInputModule = /** @class */ (function () {
    function StorageInputModule() {
    }
    StorageInputModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"]
                    ],
                    declarations: [
                        StorageInputDirective,
                        StorageInputTitleComponent
                    ],
                    exports: [
                        StorageInputDirective
                    ],
                    entryComponents: [StorageInputTitleComponent]
                },] }
    ];
    return StorageInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BangStorageUiModule = /** @class */ (function () {
    function BangStorageUiModule() {
    }
    /**
     * @return {?}
     */
    BangStorageUiModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BangStorageUiModule
        };
    };
    BangStorageUiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    exports: [
                        StorageButtonModule,
                        StorageInputNumberModule,
                        StorageModalModule,
                        StorageZoomModule,
                        StorageChartsModule,
                        StorageBackTopModule,
                        StorageUploadModule,
                        StorageAnchorModule,
                        StorageCarouselModule,
                        StorageSelectModule,
                        StorageTableModule,
                        StorageInputModule
                    ]
                },] }
    ];
    return BangStorageUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=bang-storage-ui.js.map

/***/ }),

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modal-inner works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtaW5uZXIvbW9kYWwtaW5uZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInnerComponent", function() { return ModalInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalInnerComponent = /** @class */ (function () {
    function ModalInnerComponent() {
    }
    ModalInnerComponent.prototype.ngOnInit = function () {
    };
    ModalInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-inner',
            template: __webpack_require__(/*! ./modal-inner.component.html */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.html"),
            styles: [__webpack_require__(/*! ./modal-inner.component.less */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalInnerComponent);
    return ModalInnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ModalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRoutingModule", function() { return ModalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/pages/components/modal/modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]
    }];
var ModalRoutingModule = /** @class */ (function () {
    function ModalRoutingModule() {
    }
    ModalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModalRoutingModule);
    return ModalRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" storage-move-modal>\r\n  <h1>Move Modal 可拖动模态框</h1>\r\n  <p>拖动模态对话框</p>\r\n  <article>\r\n    <h2>何时使用</h2>\r\n    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用<code class=\"code\">Modal</code>在当前页面正中打开一个浮层，承载相应的操作。</p>\r\n    <p>由于NG-ZORRO只是基于Angular版本的Ant-design，并没有添加模态框拖动的功能，但是实际业务中需要拖动模态框。</p>\r\n    <p>在此基础上，通过添加指令操作<code class=\"code\">DOM</code>元素来实现模态框的拖动功能。</p>\r\n  </article>\r\n  <article>\r\n    <h2>如何使用</h2>\r\n    <p>推荐使用加载Component的方式弹出Modal框，这样弹出层的Component逻辑可以与外层Component完全隔离，并且做到可以随时复用，</p>\r\n    <p>在弹出层Component中可以通过依赖注入<code class=\"code\">NzModalRef</code>方式直接获取模态框的组件实例，用于控制在弹出层组件中控制模态框行为。</p>\r\n    <p>因此你只需在当前页面中任意位置添加<code class=\"code\">storage-move-modal</code>指令，在Modal框生成之后调用初始化函数即可实现拖动功能。</p>\r\n  </article>\r\n  <article>\r\n    <h2>代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <button storage-button storageType=\"primary\" (click)=\"open1()\">Show Modal</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>拖动模态框。</p>\r\n            <span class=\"code-box-description-title\">拖动模态框</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <button storage-button storageType=\"primary\" (click)=\"open2()\">Show Modal</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>拖动模态框。</p>\r\n            <span class=\"code-box-description-title\">拖动模态框</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2>API</h2>\r\n    <p><span class=\"api-title\">StorageModalService</span><span class=\"api-default service\">Service</span></p>\r\n    <p>由于采用服务动态创建模态框，因此模态框组件并没有挂载在当前组件中，而是与根组件平级，所以无法直接在组件中获取模态框DOM节点。</p>\r\n    <p>因此，我们通过在组件中注入指令全局监听事件，</p>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.less":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.modal article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9tb2RhbC9EOi9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURMQTtFQU9JLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gIGFydGljbGUge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG59XG4iLCIubW9kYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm1vZGFsIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-inner/modal-inner.component */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts");
/* harmony import */ var bang_storage_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bang-storage-ui */ "./node_modules/bang-storage-ui/fesm5/bang-storage-ui.js");




// import {StorageModalService} from '../../../../component/modal/storage-modal.service';

var ModalComponent = /** @class */ (function () {
    function ModalComponent(_modal, _moveModal) {
        this._modal = _modal;
        this._moveModal = _moveModal;
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import { NgModule, Component } from '@angular/core';\n      import { CommonModule } from '@angular/common';\n      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';\n      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';\n      import { ModalInnerComponent } from './modal-inner-modal-inner.component';\n\n      @Component({\n        selector: 'storage-move-modal-demo',\n        template: `\n                      <div storage-move-modal>\n                         <button storage-button storageType=\"primary\" (click)=\"open()\">Show Modal</button>\n                      </div>\n                  `\n      })\n\n      export class StorageMoveModalDemoComponent{\n\n         constructor(\n                    private _modal: NzModalService,\n                    private _moveModal: StorageModalService\n                    ) {\n                      }\n\n        open(): void{\n          const modal = this._modal.create({\n             nzTitle: 'Title',\n             nzContent: ModalInnerComponent\n          });\n          modal.afterOpen.subscribe(() => {\n            this._moveModal.initModal();\n          })\n        }\n      }\n\n      @NgModule({\n        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],\n        declarations: [StorageMoveModalDemoComponent, ModalInnerComponent],\n        entryComponents: [ModalInnerComponent]\n      })\n\n      export class StorageMoveModalDemoModule{\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import { NgModule, Component } from '@angular/core';\n      import { CommonModule } from '@angular/common';\n      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';\n      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';\n      import { ModalInnerComponent } from './modal-inner-modal-inner.component';\n\n      @Component({\n        selector: 'storage-zoom-modal-demo',\n        template: `\n                      <div storage-move-modal>\n                         <button storage-button storageType=\"primary\" (click)=\"open()\">Show Modal</button>\n                      </div>\n                  `\n      })\n\n      export class StorageZoomModalDemoComponent{\n\n         constructor(\n                    private _modal: NzModalService,\n                    private _moveModal: StorageModalService\n                    ) {\n                      }\n\n        open(): void{\n          const modal = this._modal.create({\n             nzTitle: 'Title',\n             nzContent: ModalInnerComponent\n          });\n          modal.afterOpen.subscribe(() => {\n             this._moveModal.initModal();\n             this._moveModal.initZoom();\n          })\n        }\n      }\n\n      @NgModule({\n        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],\n        declarations: [StorageZoomModalDemoComponent, ModalInnerComponent],\n        entryComponents: [ModalInnerComponent]\n      })\n\n      export class StorageZoomModalDemoModule{\n      }\n      "
            }
        };
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.open1 = function () {
        var _this = this;
        var modal = this._modal.create({
            nzTitle: 'Title',
            nzContent: _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__["ModalInnerComponent"]
        });
        modal.afterOpen.subscribe(function () {
            _this._moveModal.initModal();
            // this._moveModal.initZoom();
        });
    };
    ModalComponent.prototype.open2 = function () {
        var _this = this;
        var modal = this._modal.create({
            nzTitle: 'Title',
            nzContent: _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__["ModalInnerComponent"]
        });
        modal.afterOpen.subscribe(function () {
            _this._moveModal.initModal();
            _this._moveModal.initZoom();
        });
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/pages/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.less */ "./src/app/pages/components/modal/modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"],
            bang_storage_ui__WEBPACK_IMPORTED_MODULE_4__["StorageModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/modal/modal.module.ts ***!
  \********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/pages/components/modal/modal.component.ts");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-routing.module */ "./src/app/pages/components/modal/modal-routing.module.ts");
/* harmony import */ var _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-inner/modal-inner.component */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__["ModalInnerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"]
            ],
            entryComponents: [_modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__["ModalInnerComponent"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=modal-modal-module.js.map