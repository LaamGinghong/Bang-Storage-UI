(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anchor-anchor-module"],{

/***/ "./src/app/pages/components/anchor/anchor-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/anchor/anchor-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AnchorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorRoutingModule", function() { return AnchorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anchor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anchor.component */ "./src/app/pages/components/anchor/anchor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _anchor_component__WEBPACK_IMPORTED_MODULE_2__["AnchorComponent"]
    }];
var AnchorRoutingModule = /** @class */ (function () {
    function AnchorRoutingModule() {
    }
    AnchorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AnchorRoutingModule);
    return AnchorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/anchor/anchor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/anchor/anchor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"anchor\">\r\n  <h1>Anchor 锚点</h1>\r\n  <p>用于跳转到页面指定位置。</p>\r\n  <article >\r\n    <h2 id=\"use\">何时使用</h2>\r\n    <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"example\">代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-anchor>\r\n              <storage-link storageHref=\"#use\" storageTitle=\"何时使用\"></storage-link>\r\n              <storage-link storageHref=\"#example\" storageTitle=\"代码演示\"></storage-link>\r\n              <storage-link storageHref=\"#api\" storageTitle=\"API\"></storage-link>\r\n            </storage-anchor>\r\n            右侧悬浮\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>最简单用法。</p>\r\n            <span class=\"code-box-description-title\">基本用法</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"api\">API</h2>\r\n    <p><span class=\"api-title\">storage-link</span><span class=\"api-default component\">Component</span></p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/anchor/anchor.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/anchor/anchor.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".anchor {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.anchor article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbmNob3IvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbmNob3IvYW5jaG9yLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2FuY2hvci9hbmNob3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbmNob3IvYW5jaG9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuY2hvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbn1cbiIsIi5hbmNob3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmFuY2hvciBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/components/anchor/anchor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/anchor/anchor.component.ts ***!
  \*************************************************************/
/*! exports provided: AnchorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorComponent", function() { return AnchorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnchorComponent = /** @class */ (function () {
    function AnchorComponent() {
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-anchor-demo',\n        template: `\n                  <storage-anchor>\n                    <storage-link storageHref=\"#use\" storageTitle=\"\u4F55\u65F6\u4F7F\u7528\"></storage-link>\n                    <storage-link storageHref=\"#example\" storageTitle=\"\u4EE3\u7801\u6F14\u793A\"></storage-link>\n                    <storage-link storageHref=\"#api\" storageTitle=\"API\"></storage-link>\n                  </storage-anchor>\n                  `\n      })\n      export class StorageAnchorDemoComponent {\n      }\n      "
            }
        };
        this.tableData = [
            { name: '[storageHref]', description: '锚点链接', type: 'string', default: '-' },
            { name: '[storageTitle]', description: '文字内容', type: 'string', default: '-' }
        ];
    }
    AnchorComponent.prototype.ngOnInit = function () {
    };
    AnchorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anchor',
            template: __webpack_require__(/*! ./anchor.component.html */ "./src/app/pages/components/anchor/anchor.component.html"),
            styles: [__webpack_require__(/*! ./anchor.component.less */ "./src/app/pages/components/anchor/anchor.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnchorComponent);
    return AnchorComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/anchor/anchor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/anchor/anchor.module.ts ***!
  \**********************************************************/
/*! exports provided: AnchorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorModule", function() { return AnchorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _anchor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchor.component */ "./src/app/pages/components/anchor/anchor.component.ts");
/* harmony import */ var _anchor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anchor-routing.module */ "./src/app/pages/components/anchor/anchor-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var AnchorModule = /** @class */ (function () {
    function AnchorModule() {
    }
    AnchorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_anchor_component__WEBPACK_IMPORTED_MODULE_3__["AnchorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _anchor_routing_module__WEBPACK_IMPORTED_MODULE_4__["AnchorRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], AnchorModule);
    return AnchorModule;
}());



/***/ })

}]);
//# sourceMappingURL=anchor-anchor-module.js.map