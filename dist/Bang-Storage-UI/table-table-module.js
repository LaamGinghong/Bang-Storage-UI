(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./src/app/pages/components/table/table-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/table/table-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/components/table/table.component.ts");




var routes = [{
        path: '',
        component: _table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]
    }];
var TableRoutingModule = /** @class */ (function () {
    function TableRoutingModule() {
    }
    TableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TableRoutingModule);
    return TableRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/table/table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/table/table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <storage-table\r\n    #storageTable\r\n    storageChangeWidth\r\n    [storageTableData]=\"tableData\"\r\n    storageFrontPagination\r\n    (storagePageIndexChange)=\"change($event)\"\r\n    (storagePageSizeChange)=\"change($event)\"\r\n  >\r\n    <thead storage-thead>\r\n    <tr storage-tr>\r\n      <th storage-th *ngFor=\"let th of tableSource\">\r\n        {{th.name}}\r\n      </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody storage-tbody>\r\n    <tr storage-tr *ngFor=\"let item of storageTable.data\">\r\n      <td storage-td *ngFor=\"let td of tableSource\">{{item[td.value]}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </storage-table>\r\n  <br><br><br>\r\n  <table border=\"1px\" style=\"width: 100%\" width=\"100%\">\r\n    <thead>\r\n    <tr>\r\n      <th width=\"200px\">\r\n        姓名\r\n      </th>\r\n      <th width=\"200px\">\r\n        年龄\r\n      </th>\r\n      <th width=\"200px\">性别</th>\r\n      <th width=\"300px\">出生地</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of tableData\">\r\n      <td>\r\n        <div style=\"max-width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap\">{{item.name}}</div>\r\n      </td>\r\n      <td>\r\n        <div style=\"max-width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap\">{{item.age}}</div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.sex}}</div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.birthPlace}}</div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/components/table/table.component.less":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/table/table.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 30px;\n}\n.table article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy90YWJsZS9EOi9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURMQTtFQU9JLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXG4gIGFydGljbGUge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG59XG4iLCIudGFibGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLnRhYmxlIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/components/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.tableSource = [
            { name: '姓名', value: 'name' },
            { name: '年龄', value: 'age' },
            { name: '性别', value: 'sex' },
            { name: '出生地', value: 'birthPlace' }
        ];
        this.tableData = [
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
            { name: '蓝京杭', age: 21, sex: '男', birthPlace: '广州' },
        ];
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.tableSource, event.previousIndex, event.currentIndex);
    };
    TableComponent.prototype.change = function (e) {
        console.log(e);
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/pages/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.less */ "./src/app/pages/components/table/table.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/table/table.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/table/table.module.ts ***!
  \********************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-routing.module */ "./src/app/pages/components/table/table-routing.module.ts");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/components/table/table.component.ts");
/* harmony import */ var _projects_bang_storage_ui_src_lib_bang_storage_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../projects/bang-storage-ui/src/lib/bang-storage-ui.module */ "./projects/bang-storage-ui/src/lib/bang-storage-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");









// import {ShareModule} from '../../../share/share.module';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _table_routing_module__WEBPACK_IMPORTED_MODULE_3__["TableRoutingModule"],
                // ShareModule
                _projects_bang_storage_ui_src_lib_bang_storage_ui_module__WEBPACK_IMPORTED_MODULE_5__["BangStorageUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"]
            ]
        })
    ], TableModule);
    return TableModule;
}());



/***/ })

}]);
//# sourceMappingURL=table-table-module.js.map