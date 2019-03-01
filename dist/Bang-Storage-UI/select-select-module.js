(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"],{

/***/ "./src/app/pages/components/select/select-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/select/select-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SelectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRoutingModule", function() { return SelectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.component */ "./src/app/pages/components/select/select.component.ts");




var routes = [{
        path: '',
        component: _select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]
    }];
var SelectRoutingModule = /** @class */ (function () {
    function SelectRoutingModule() {
    }
    SelectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SelectRoutingModule);
    return SelectRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/select/select.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/select/select.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<storage-select [(storageValue)]=\"value\" storageMultiple  (storageValueChange)=\"change($event)\">\r\n  <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"\r\n                  [storageDisabled]=\"item.disabled\"></storage-option>\r\n</storage-select>\r\n<p>{{value}}</p>\r\n"

/***/ }),

/***/ "./src/app/pages/components/select/select.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/select/select.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/components/select/select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/select/select.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.array = [
            { name: '苹果', value: 'Apple', disabled: false },
            { name: '三星', value: 'Samsung', disabled: false },
            { name: '华为', value: 'Huawei', disabled: false },
            { name: '小米', value: 'Xiaomi', disabled: false },
            { name: 'OPPO', value: 'OPPO', disabled: false },
            { name: 'vivo', value: 'vivo', disabled: false },
            { name: '一加', value: 'onePlus', disabled: false },
            { name: 'IQOO', value: 'IQOO', disabled: false },
            { name: '荣耀', value: 'honor', disabled: false },
            { name: '魅族', value: 'meizu', disabled: false }
        ];
        this.value = [];
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent.prototype.change = function (e) {
        console.log(e);
    };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/pages/components/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.less */ "./src/app/pages/components/select/select.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/select/select.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/select/select.module.ts ***!
  \**********************************************************/
/*! exports provided: SelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-routing.module */ "./src/app/pages/components/select/select-routing.module.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.component */ "./src/app/pages/components/select/select.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _select_routing_module__WEBPACK_IMPORTED_MODULE_3__["SelectRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], SelectModule);
    return SelectModule;
}());



/***/ })

}]);
//# sourceMappingURL=select-select-module.js.map