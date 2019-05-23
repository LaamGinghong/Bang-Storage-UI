(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./src/app/pages/components/components-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/components-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.component */ "./src/app/pages/components/components.component.ts");




var routes = [{
        path: '',
        component: _components_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsComponent"],
        children: [{
                path: '',
                redirectTo: 'button',
                pathMatch: 'full'
            }, {
                path: 'button',
                loadChildren: './button/button.module#ButtonModule'
            }, {
                path: 'inputNumber',
                loadChildren: './input-number/input-number.module#InputNumberModule'
            }, {
                path: 'modal',
                loadChildren: './modal/modal.module#ModalModule'
            }, {
                path: 'zoom',
                loadChildren: './zoom/zoom.module#ZoomModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'backTop',
                loadChildren: './back-top/back-top.module#BackTopModule'
            }, {
                path: 'upload',
                loadChildren: './upload/upload.module#UploadModule'
            }, {
                path: 'anchor',
                loadChildren: './anchor/anchor.module#AnchorModule'
            }, {
                path: 'carousel',
                loadChildren: './carousel/carousel.module#CarouselModule'
            }, {
                path: 'select',
                loadChildren: './select/select.module#SelectModule'
            }, {
                path: 'table',
                loadChildren: './table/table.module#TableModule'
            }, {
                path: 'input',
                loadChildren: './input/input.module#InputModule'
            }]
    }];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/components.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/components/components.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/components/components.component.less":
/*!************************************************************!*\
  !*** ./src/app/pages/components/components.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/components/components.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/components.component.ts ***!
  \**********************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/pages/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.less */ "./src/app/pages/components/components.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.component */ "./src/app/pages/components/components.component.ts");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-routing.module */ "./src/app/pages/components/components-routing.module.ts");





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_routing_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsRoutingModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map