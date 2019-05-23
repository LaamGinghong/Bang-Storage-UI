(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-input-module"],{

/***/ "./src/app/pages/components/input/input-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/input/input-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InputRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRoutingModule", function() { return InputRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.component */ "./src/app/pages/components/input/input.component.ts");




var routes = [{
        path: '',
        component: _input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]
    }];
var InputRoutingModule = /** @class */ (function () {
    function InputRoutingModule() {
    }
    InputRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InputRoutingModule);
    return InputRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/input/input.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/input/input.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input storage-input placeholder=\"渠道名称\" [(ngModel)]=\"value\" [storageValue]=\"value\">\r\n"

/***/ }),

/***/ "./src/app/pages/components/input/input.component.less":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/input/input.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.input > article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9pbnB1dC9EOi9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgJiA+IGFydGljbGUge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG59XG4iLCIuaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmlucHV0ID4gYXJ0aWNsZSB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/components/input/input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/input/input.component.ts ***!
  \***********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_bang_storage_ui_src_lib_export_excel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../projects/bang-storage-ui/src/lib/export-excel */ "./projects/bang-storage-ui/src/lib/export-excel/index.ts");



var InputComponent = /** @class */ (function () {
    function InputComponent(_export) {
        this._export = _export;
        this.tableData = [
            { name: 'Uzi', position: 'Bot' },
            { name: 'Rookie', position: 'Mid' },
            { name: 'TheShy', position: 'Top' },
            { name: 'Karsa', position: 'Jug' },
            { name: 'Ming', position: 'Sup' }
        ];
        this.value = '';
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.export = function () {
        var header = ['ID', '位置'];
        this._export.exportExcel({ data: this.tableData, header: ['ID', '位置'], name: '选手表' });
    };
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/pages/components/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.less */ "./src/app/pages/components/input/input.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_bang_storage_ui_src_lib_export_excel__WEBPACK_IMPORTED_MODULE_2__["StorageExportExcelService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/input/input.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/input/input.module.ts ***!
  \********************************************************/
/*! exports provided: InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-routing.module */ "./src/app/pages/components/input/input-routing.module.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.component */ "./src/app/pages/components/input/input.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _input_routing_module__WEBPACK_IMPORTED_MODULE_3__["InputRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], InputModule);
    return InputModule;
}());



/***/ })

}]);
//# sourceMappingURL=input-input-module.js.map