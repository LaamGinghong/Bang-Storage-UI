(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button-button-module"],{

/***/ "./src/app/pages/components/button/button-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/button/button-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ButtonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRoutingModule", function() { return ButtonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/app/pages/components/button/button.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]
    }];
var ButtonRoutingModule = /** @class */ (function () {
    function ButtonRoutingModule() {
    }
    ButtonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ButtonRoutingModule);
    return ButtonRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/button/button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/button/button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\">\r\n  <h1>Button 按钮</h1>\r\n  <p>用于开始一个即时的操作。</p>\r\n  <article>\r\n    <h2>何时使用</h2>\r\n    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>\r\n  </article>\r\n  <article>\r\n    <h2>代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <button storage-button storageType=\"default\">Default</button>\r\n            <button storage-button storageType=\"primary\">Primary</button>\r\n            <button storage-button storageType=\"danger\">Danger</button>\r\n            <button storage-button storageType=\"warning\">Warning</button>\r\n            <button storage-button storageType=\"success\">Success</button>\r\n            <button storage-button storageType=\"info\">Info</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>按钮有四种类型：默认按钮、主按钮、危险按钮、警告按钮、成功按钮、信息按钮。</p>\r\n            <span class=\"code-box-description-title\">按钮类型</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <button storage-button storageType=\"primary\">Primary</button>\r\n            <button storage-button storageType=\"primary\" disabled>Primary(disabled)</button>\r\n            <br><br>\r\n            <button storage-button>Default</button>\r\n            <button storage-button disabled>Default(disabled)</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"danger\">Danger</button>\r\n            <button storage-button storageType=\"danger\" disabled>Danger(disabled)</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"warning\">Warning</button>\r\n            <button storage-button storageType=\"warning\" disabled>Warning(disabled)</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"success\">Success</button>\r\n            <button storage-button storageType=\"success\" disabled>Success(disabled)</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"info\">Info</button>\r\n            <button storage-button storageType=\"info\" disabled>Info(disabled)</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>\r\n              添加<code class=\"code\">disabled</code>属性即可让按钮处于不可用状态，同时按钮样式也会改变。\r\n            </p>\r\n            <span class=\"code-box-description-title\">不可用状态</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <div style=\"background: rgb(190, 200, 200);padding: 30px\">\r\n              <button storage-button storageType=\"primary\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!\r\n              </button>\r\n              <button storage-button storageType=\"primary\" [storageLoading]=\"loading\" [storageGhost]=\"true\"\r\n                      (click)=\"load()\">Click Me!\r\n              </button>\r\n              <br><br>\r\n              <button storage-button [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\r\n              <button storage-button [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!\r\n              </button>\r\n              <br><br>\r\n              <button storage-button storageType=\"danger\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!\r\n              </button>\r\n              <button storage-button storageType=\"danger\" [storageLoading]=\"loading\" [storageGhost]=\"true\"\r\n                      (click)=\"load()\">Click Me!\r\n              </button>\r\n              <br><br>\r\n              <button storage-button storageType=\"warning\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!\r\n              </button>\r\n              <button storage-button storageType=\"warning\" [storageLoading]=\"loading\" [storageGhost]=\"true\"\r\n                      (click)=\"load()\">Click Me!\r\n              </button>\r\n              <br><br>\r\n              <button storage-button storageType=\"success\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!\r\n              </button>\r\n              <button storage-button storageType=\"success\" [storageLoading]=\"loading\" [storageGhost]=\"true\"\r\n                      (click)=\"load()\">Click Me!\r\n              </button>\r\n              <br><br>\r\n              <button storage-button storageType=\"info\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\r\n              <button storage-button storageType=\"info\" [storageLoading]=\"loading\" [storageGhost]=\"true\"\r\n                      (click)=\"load()\">Click Me!\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>添加<code class=\"code\">storageGhost</code>属性后，幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>\r\n            <span class=\"code-box-description-title\">幽灵按钮</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.fifth.show\">\r\n            <pre><code [highlight]=\"codeBox.fifth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <nz-radio-group [(ngModel)]=\"size\">\r\n              <label nz-radio-button nzValue=\"large\">Large</label>\r\n              <label nz-radio-button nzValue=\"default\">Default</label>\r\n              <label nz-radio-button nzValue=\"small\">Small</label>\r\n            </nz-radio-group>\r\n            <br>\r\n            <br>\r\n            <button storage-button storageType=\"default\" [storageSize]=\"size\">Default</button>\r\n            <button storage-button storageType=\"primary\" [storageSize]=\"size\">Primary</button>\r\n            <button storage-button storageType=\"danger\" [storageSize]=\"size\">Danger</button>\r\n            <button storage-button storageType=\"warning\" [storageSize]=\"size\">Warning</button>\r\n            <button storage-button storageType=\"success\" [storageSize]=\"size\">Success</button>\r\n            <button storage-button storageType=\"info\" [storageSize]=\"size\">Info</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>按钮有大、中、小三种尺寸。</p>\r\n            <p>\r\n              通过设置<code class=\"code\">storageSize</code>为<code class=\"code\">large</code><code class=\"code\">small</code>分别把\r\n              按钮设为大、小尺寸。若不设置<code class=\"code\">storageSize</code>,则尺寸为中。\r\n            </p>\r\n            <span class=\"code-box-description-title\">按钮尺寸</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <button storage-button storageType=\"primary\" [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button storageType=\"primary\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n            <br><br>\r\n            <button storage-button [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"danger\" [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button storageType=\"danger\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"warning\" [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button storageType=\"warning\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"success\" [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button storageType=\"success\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n            <br><br>\r\n            <button storage-button storageType=\"info\" [storageLoading]=\"true\">Loading!</button>\r\n            <button storage-button storageType=\"info\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>添加<code class=\"code\">storageLoading</code>属性即可让按钮处于加载状态。</p>\r\n            <span class=\"code-box-description-title\">加载中状态</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\r\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2>API</h2>\r\n    <p><span class=\"api-title\">[storage-button]</span><span class=\"api-default directive\">Directive</span></p>\r\n    <p>通过设置Button的属性来产生不同的按钮样式，推荐顺序为：\r\n      <code class=\"code\">storageType</code>->\r\n      <code class=\"code\">storageGhost</code>->\r\n      <code class=\"code\">storageSize</code>->\r\n      <code class=\"code\">storageLoading</code>->\r\n      <code class=\"code\">disabled</code>\r\n    </p>\r\n    <p>按钮的属性说明如下:</p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/button/button.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/button/button.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.button > article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9idXR0b24vRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgJiA+IGFydGljbGUge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG59XG4iLCIuYnV0dG9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5idXR0b24gPiBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/components/button/button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/button/button.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.codeBox = {
            first: {
                show: false,
                source: "\n  import { Component } from '@angular/core';\n\n  @Component({\n   selector: 'storage-button-demo',\n    template: `\n                <button storage-button>Default</button>\n                <button storage-button storageType=\"primary\">Primary</button>\n                <button storage-button storageType=\"danger\">Danger</button>\n                <button storage-button storageType=\"warning\">Warning</button>\n                <button storage-button storageType=\"success\">Success</button>\n                <button storage-button storageType=\"info\">Info</button>\n              `\n  })\n\n  export class StorageButtonDemoComponentClass{\n  }\n  "
            },
            second: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-button-demo',\n        template: `\n                        <nz-radio-group [(ngModel)]=\"size\">\n                          <label nz-radio-button nzValue=\"large\">Large</label>\n                          <label nz-radio-button nzValue=\"default\">Default</label>\n                          <label nz-radio-button nzValue=\"small\">Small</label>\n                        </nz-radio-group>\n                        <br>\n                        <br>\n                        <button storage-button storageType=\"default\" [storageSize]=\"size\">Default</button>\n                        <button storage-button storageType=\"primary\" [storageSize]=\"size\">Primary</button>\n                        <button storage-button storageType=\"danger\" [storageSize]=\"size\">Danger</button>\n                        <button storage-button storageType=\"warning\" [storageSize]=\"size\">Warning</button>\n                        <button storage-button storageType=\"success\" [storageSize]=\"size\">Success</button>\n                        <button storage-button storageType=\"info\" [storageSize]=\"size\">Info</button>\n               `\n      })\n\n      export class storageButtonDemoComponentClass{\n      }\n      "
            },
            third: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector:'storage-button-demo',\n        template:`\n                        <button storage-button storageType=\"primary\">Primary</button>\n                        <button storage-button storageType=\"primary\" disabled>Primary(disabled)</button>\n                        <br><br>\n                        <button storage-button>Default</button>\n                        <button storage-button disabled>Default(disabled)</button>\n                        <br><br>\n                        <button storage-button storageType=\"danger\">Danger</button>\n                        <button storage-button storageType=\"danger\" disabled>Danger(disabled)</button>\n                        <br><br>\n                        <button storage-button storageType=\"warning\">Warning</button>\n                        <button storage-button storageType=\"warning\" disabled>Warning(disabled)</button>\n                        <br><br>\n                        <button storage-button storageType=\"success\">Success</button>\n                        <button storage-button storageType=\"success\" disabled>Success(disabled)</button>\n                        <br><br>\n                        <button storage-button storageType=\"info\">Info</button>\n                        <button storage-button storageType=\"info\" disabled>Info(disabled)</button>\n        `\n\n        export class StorageButtonDemoComponentClass{\n        }\n        "
            },
            forth: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector:'storage-button-demo',\n        template:`\n                        <button storage-button storageType=\"primary\" [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button storageType=\"primary\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n                        <br><br>\n                        <button storage-button [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n                        <br><br>\n                        <button storage-button storageType=\"danger\" [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button storageType=\"danger\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n                        <br><br>\n                        <button storage-button storageType=\"warning\" [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button storageType=\"warning\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n                        <br><br>\n                        <button storage-button storageType=\"success\" [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button storageType=\"success\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n                        <br><br>\n                        <button storage-button storageType=\"info\" [storageLoading]=\"true\">Loading!</button>\n                        <button storage-button storageType=\"info\" [storageLoading]=\"loading\" (click)=\"load()\">Click Me!</button>\n        `\n\n        export class StorageButtonDemoComponentClass{\n        }\n      "
            },
            fifth: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector:'storage-button-demo',\n        template:`\n           <div  style=\"background: rgb(190, 200, 200);padding: 30px\">\n               <button storage-button storageType=\"primary\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button storageType=\"primary\" [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n               <br><br>\n               <button storage-button [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n               <br><br>\n               <button storage-button storageType=\"danger\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button storageType=\"danger\" [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n               <br><br>\n               <button storage-button storageType=\"warning\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button storageType=\"warning\" [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n               <br><br>\n               <button storage-button storageType=\"success\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button storageType=\"success\" [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n               <br><br>\n               <button storage-button storageType=\"info\" [storageLoading]=\"true\" [storageGhost]=\"true\">Loading!</button>\n               <button storage-button storageType=\"info\" [storageLoading]=\"loading\" [storageGhost]=\"true\" (click)=\"load()\">Click Me!</button>\n            </div>\n        `\n\n        export class StorageButtonDemoComponentClass{\n        }\n      "
            }
        };
        this.size = 'default';
        this.loading = false;
        this.tableData = [
            { name: '[storageGhost]', description: '幽灵属性，使按钮背景透明', type: 'boolean', default: 'false' },
            { name: '[storageType]', description: '设置按钮类型，可选值为<code class="code">primary</code><code class="code">default</code><code class="code">danger</code><code class="code">warning</code><code class="code">success</code><code class="code">info</code>或者不填', type: 'string', default: '-' },
            { name: '[storageSize]', description: '设置按钮大小，可选值为<code class="code">large</code><code class="code">small</code>或者不填', type: 'string', default: '-' },
            { name: '[storageLoading]', description: '设置按钮载入状态', type: 'boolean', default: 'false' }
        ];
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.load = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 5000);
    };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/pages/components/button/button.component.html"),
            preserveWhitespaces: false,
            styles: [__webpack_require__(/*! ./button.component.less */ "./src/app/pages/components/button/button.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/button/button.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/button/button.module.ts ***!
  \**********************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.component */ "./src/app/pages/components/button/button.component.ts");
/* harmony import */ var _button_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-routing.module */ "./src/app/pages/components/button/button-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _button_routing_module__WEBPACK_IMPORTED_MODULE_4__["ButtonRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
            ]
        })
    ], ButtonModule);
    return ButtonModule;
}());



/***/ })

}]);
//# sourceMappingURL=button-button-module.js.map