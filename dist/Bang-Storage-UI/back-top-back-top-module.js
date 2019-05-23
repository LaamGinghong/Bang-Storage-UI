(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-top-back-top-module"],{

/***/ "./src/app/pages/components/back-top/back-top-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/components/back-top/back-top-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BackTopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopRoutingModule", function() { return BackTopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _back_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-top.component */ "./src/app/pages/components/back-top/back-top.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _back_top_component__WEBPACK_IMPORTED_MODULE_2__["BackTopComponent"]
    }];
var BackTopRoutingModule = /** @class */ (function () {
    function BackTopRoutingModule() {
    }
    BackTopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BackTopRoutingModule);
    return BackTopRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/back-top/back-top.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/back-top/back-top.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back-top\">\r\n  <h1>BackTop 返回顶部</h1>\r\n  <p>返回页面顶部的操作按钮。</p>\r\n  <article>\r\n    <h2 id=\"use\">何时使用</h2>\r\n    <ul>\r\n      <li>当页面内容区域比较长时；</li>\r\n      <li>当用户需要频繁返回顶部查看相关内容时。</li>\r\n    </ul>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"example\">代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-back-top></storage-back-top>\r\n            Scroll down to see the button on your right bottom.\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>最简单用法</p>\r\n            <span class=\"code-box-description-title\">基本</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            Scroll down to see the button on your right bottom.\r\n            <div class=\"containerElement\" #containerElement>\r\n              <div class=\"content\">\r\n                <storage-back-top [storageContainer]=\"containerElement\"></storage-back-top>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            设置<code class=\"code\">storageContainer</code>，可对指定容器返回顶部。\r\n            <span class=\"code-box-description-title\">滚动容器</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            Scroll down to see the button on your right bottom.\r\n            <div class=\"containerElement\" #containerEl>\r\n              <div class=\"content\">\r\n                <storage-back-top [storageContainer]=\"containerEl\"\r\n                                  [storagePosition]=\"{left:'1000px',bottom:'150px'}\"></storage-back-top>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>通过设置<code class=\"code\">storagePosition</code>，可以设置按钮的位置。</p>\r\n            <span class=\"code-box-description-title\">按钮位置</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.fifth.show\">\r\n            <pre><code [highlight]=\"codeBox.fifth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <p>Scroll down top see the custom button on your right bottom.</p>\r\n            <storage-back-top [storageTemplate]=\"iconElement\">\r\n              <ng-template #iconElement>\r\n                <div id=\"iconElement\">UP</div>\r\n              </ng-template>\r\n            </storage-back-top>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>可以自定义回到顶部按钮的样式。</p>\r\n            <span class=\"code-box-description-title\">自定义样式</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            Scroll down to see the button on your right bottom.\r\n            <div class=\"containerElement\" #container>\r\n              <div class=\"content\">\r\n                <storage-back-top [storageContainer]=\"container\" [storageTarget]=\"300\"></storage-back-top>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>设置<code class=\"code\">storageTarget</code>，可设置返回据顶部距离。</p>\r\n            <span class=\"code-box-description-title\">据顶部距离</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\r\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"api\">API</h2>\r\n    <p><span class=\"api-title\">storage-back-top</span><span class=\"api-default component\">Component</span></p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/back-top/back-top.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/back-top/back-top.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-top {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.back-top article {\n  margin: 40px 0;\n}\n.back-top article ul {\n  list-style: circle;\n}\n.back-top article #iconElement {\n  background: #1b6d85;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  line-height: 80px;\n  text-align: center;\n  font-size: 32px;\n  color: #fff;\n}\n.back-top article .containerElement {\n  height: 200px;\n  overflow-y: auto;\n}\n.back-top article .containerElement .content {\n  height: 1000px;\n  background: pink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9iYWNrLXRvcC9EOi9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURMQTtFQU9JLGNBQUE7QUNDSjtBRFJBO0VBVU0sa0JBQUE7QUNDTjtBRFhBO0VBY00sbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQU47QURyQkE7RUF5Qk0sYUFBQTtFQUNBLGdCQUFBO0FDRE47QUR6QkE7RUE2QlEsY0FBQTtFQUNBLGdCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stdG9wIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICBhcnRpY2xlIHtcbiAgICBtYXJnaW46IDQwcHggMDtcblxuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcbiAgICB9XG5cbiAgICAjaWNvbkVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogIzFiNmQ4NTtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyRWxlbWVudCB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5iYWNrLXRvcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYmFjay10b3AgYXJ0aWNsZSB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLmJhY2stdG9wIGFydGljbGUgdWwge1xuICBsaXN0LXN0eWxlOiBjaXJjbGU7XG59XG4uYmFjay10b3AgYXJ0aWNsZSAjaWNvbkVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjMWI2ZDg1O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmFjay10b3AgYXJ0aWNsZSAuY29udGFpbmVyRWxlbWVudCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYmFjay10b3AgYXJ0aWNsZSAuY29udGFpbmVyRWxlbWVudCAuY29udGVudCB7XG4gIGhlaWdodDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kOiBwaW5rO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/components/back-top/back-top.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/back-top/back-top.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopComponent", function() { return BackTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-back-top-demo',\n        template: `\n                    <storage-back-top></storage-back-top>\n                    Scroll down to see the button on your right bottom.\n                  `\n      })\n\n      export class StorageBackTopComponent{\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-back-top-demo',\n        template: `\n                  <p>Scroll down top see the custom button on your right bottom.</p>\n                  <storage-back-top [storageTemplate]=\"iconElement\">\n                    <ng-template #iconElement>\n                      <div id=\"iconElement\">UP</div>\n                    </ng-template>\n                  </storage-back-top>\n                 `,\n        styles: [`\n                 #iconElement {\n                    background: #1b6d85;\n                    width: 80px;\n                    height: 80px;\n                    border-radius: 50%;\n                    line-height: 80px;\n                    text-align: center;\n                 }\n                `]\n      })\n\n      export class StorageBackTopDemoComponent{\n      }\n      "
            },
            third: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-back-top-demo',\n        template: `\n                   <div id=\"container\" #containerElement>\n                      Scroll down to see the button on your right bottom.\n                      <div id=\"content\">\n                          <storage-back-top [storageContainer]=\"containerElement\"></storage-back-top>\n                      </div>\n                   </div>\n                  `,\n        styles: [`\n                   #container {\n                      height: 200px;\n                      overflow-y: auto;\n                   }\n                   #content {\n                      height: 1000px;\n                      background: pink;\n                   }\n        `]\n      })\n\n      export class StorageBackTopComponent{\n      }\n      "
            },
            forth: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-back-top-demo',\n        template: `\n                   <div id=\"container\" #containerElement>\n                      Scroll down to see the button on your right bottom.\n                      <div id=\"content\">\n                          <storage-back-top [storageContainer]=\"containerElement\" [storageTarget]=\"300\"></storage-back-top>\n                      </div>\n                   </div>\n                  `,\n        styles: [`\n                   #container {\n                      height: 200px;\n                      overflow-y: auto;\n                   }\n                   #content {\n                      height: 1000px;\n                      background: pink;\n                   }\n        `]\n      })\n\n      export class StorageBackTopComponent{\n      }\n      "
            },
            fifth: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-back-top-demo',\n        template: `\n                   <div id=\"container\" #containerElement>\n                      Scroll down to see the button on your right bottom.\n                      <div id=\"content\">\n                          <storage-back-top\n                                          [storageContainer]=\"containerElement\"\n                                          [storagePosition]=\"{left:'1000px',bottom:'150px'}\"\n                                          ></storage-back-top>\n                      </div>\n                   </div>\n                  `,\n        styles: [`\n                   #container {\n                      height: 200px;\n                      overflow-y: auto;\n                   }\n                   #content {\n                      height: 1000px;\n                      background: pink;\n                   }\n        `]\n      })\n\n      export class StorageBackTopComponent{\n      }\n      "
            }
        };
        this.tableData = [
            { name: '[storageTemplate]', description: '自定义内容，见示例', type: 'TemplateRef<void>', default: '-' },
            { name: '[storageContainer]', description: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数', type: 'string|Element', default: 'window' },
            { name: '[storageTarget]', description: '设置滚动距离顶部距离', type: 'number', default: 0 },
            { name: '[storageVisibilityHeight]', description: '滚动高度达到此参数值才出现按钮', type: 'number', default: 400 },
            { name: '[storagePosition]', description: '按钮出现位置', type: '{ left?: string, right?: string, top?: string, bottom?: string }', default: '-' },
            { name: '(storageClick)', description: '点击返回顶部按钮改变的状态', type: 'EventEmitter', default: '-' }
        ];
    }
    BackTopComponent.prototype.ngOnInit = function () {
    };
    BackTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back-top',
            template: __webpack_require__(/*! ./back-top.component.html */ "./src/app/pages/components/back-top/back-top.component.html"),
            styles: [__webpack_require__(/*! ./back-top.component.less */ "./src/app/pages/components/back-top/back-top.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackTopComponent);
    return BackTopComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/back-top/back-top.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/back-top/back-top.module.ts ***!
  \**************************************************************/
/*! exports provided: BackTopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopModule", function() { return BackTopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _back_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-top.component */ "./src/app/pages/components/back-top/back-top.component.ts");
/* harmony import */ var _back_top_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-top-routing.module */ "./src/app/pages/components/back-top/back-top-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var BackTopModule = /** @class */ (function () {
    function BackTopModule() {
    }
    BackTopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_back_top_component__WEBPACK_IMPORTED_MODULE_3__["BackTopComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _back_top_routing_module__WEBPACK_IMPORTED_MODULE_4__["BackTopRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], BackTopModule);
    return BackTopModule;
}());



/***/ })

}]);
//# sourceMappingURL=back-top-back-top-module.js.map