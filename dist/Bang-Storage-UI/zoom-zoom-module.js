(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zoom-zoom-module"],{

/***/ "./src/app/pages/components/zoom/zoom-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/zoom/zoom-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ZoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomRoutingModule", function() { return ZoomRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _zoom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom.component */ "./src/app/pages/components/zoom/zoom.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _zoom_component__WEBPACK_IMPORTED_MODULE_2__["ZoomComponent"]
    }];
var ZoomRoutingModule = /** @class */ (function () {
    function ZoomRoutingModule() {
    }
    ZoomRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ZoomRoutingModule);
    return ZoomRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/zoom/zoom.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/zoom/zoom.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"zoom\">\n  <h1>Zoom 图片缩放</h1>\n  <p>支持图片放大缩小功能。</p>\n  <article>\n    <h2>何时使用</h2>\n    <p>当在表格或其他业务场景中使用缩略图时，业务人员通常无法看清图片情况。使用该指令，可以动态创建一个图片组件，用于图片的放大和缩小功能。</p>\n  </article>\n  <article>\n    <h2>代码演示</h2>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <img\n              storage-zoom\n              storagePath=\"assets/img/kaisa.png\"\n              src=\"assets/img/kaisa.png\"\n              alt=\"卡莎\" width=\"240\">\n          </div>\n          <div class=\"code-box-description\">\n            <p>点击图片进行缩放。</p>\n            <span class=\"code-box-description-title\">图片缩放</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article>\n    <h2>API</h2>\n    <p><span class=\"api-title\">[storage-zoom]</span><span class=\"api-default directive\">Directive</span></p>\n    <nz-table\n      #nzTable\n      [nzData]=\"tableData\"\n      [nzFrontPagination]=\"false\"\n      [nzShowPagination]=\"false\"\n    >\n      <thead>\n      <tr>\n        <th>属性</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of nzTable.data\">\n        <td><code class=\"code\">{{item.name}}</code></td>\n        <td [innerHTML]=\"item.description\"></td>\n        <td><span class=\"table-type\">{{item.type}}</span></td>\n        <td>{{item.default}}</td>\n      </tr>\n      </tbody>\n    </nz-table>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/components/zoom/zoom.component.less":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/zoom/zoom.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.zoom article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy96b29tL0Q6L3Byb2plY3RzL0JhbmctU3RvcmFnZS1VSS9zcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvem9vbS96b29tLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3pvb20vem9vbS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FETEE7RUFPSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3pvb20vem9vbS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi56b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICBhcnRpY2xlIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgfVxufVxuIiwiLnpvb20ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnpvb20gYXJ0aWNsZSB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/components/zoom/zoom.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/zoom/zoom.component.ts ***!
  \*********************************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return ZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoomComponent = /** @class */ (function () {
    function ZoomComponent() {
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n         selector: 'storage-zoom-demo',\n         template: `\n                     <img\n                        storage-zoom\n                        storagePath=\"../../../../assets/img/kaisa.png\"\n                        src=\"../../../../assets/img/kaisa.png\"\n                        alt=\"\u5361\u838E\" width=\"240\">\n                   `\n      })\n\n      export class StorageZoomDemoComponent{\n      }\n      "
            }
        };
        this.tableData = [{
                name: '[storagePath]',
                description: '图片地址',
                type: 'string',
                default: '-'
            }];
    }
    ZoomComponent.prototype.ngOnInit = function () {
    };
    ZoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zoom',
            template: __webpack_require__(/*! ./zoom.component.html */ "./src/app/pages/components/zoom/zoom.component.html"),
            styles: [__webpack_require__(/*! ./zoom.component.less */ "./src/app/pages/components/zoom/zoom.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ZoomComponent);
    return ZoomComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/zoom/zoom.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/components/zoom/zoom.module.ts ***!
  \******************************************************/
/*! exports provided: ZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomModule", function() { return ZoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _zoom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom.component */ "./src/app/pages/components/zoom/zoom.component.ts");
/* harmony import */ var _zoom_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-routing.module */ "./src/app/pages/components/zoom/zoom-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var ZoomModule = /** @class */ (function () {
    function ZoomModule() {
    }
    ZoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_zoom_component__WEBPACK_IMPORTED_MODULE_3__["ZoomComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _zoom_routing_module__WEBPACK_IMPORTED_MODULE_4__["ZoomRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], ZoomModule);
    return ZoomModule;
}());



/***/ })

}]);
//# sourceMappingURL=zoom-zoom-module.js.map