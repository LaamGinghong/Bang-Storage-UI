(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-number-input-number-module"],{

/***/ "./src/app/pages/components/input-number/input-number-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/components/input-number/input-number-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: InputNumberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberRoutingModule", function() { return InputNumberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _input_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-number.component */ "./src/app/pages/components/input-number/input-number.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _input_number_component__WEBPACK_IMPORTED_MODULE_2__["InputNumberComponent"]
    }];
var InputNumberRoutingModule = /** @class */ (function () {
    function InputNumberRoutingModule() {
    }
    InputNumberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InputNumberRoutingModule);
    return InputNumberRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/input-number/input-number.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/input-number/input-number.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inputNumber\">\n  <h1>InputNumber 数字输入框</h1>\n  <p>通过鼠标键盘，输入范围内的数字。</p>\n  <article>\n    <h2>何时使用</h2>\n    <p>当需要获取标准数值时。</p>\n  </article>\n  <article>\n    <h2>代码演示</h2>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.first.value\"\n            ></storage-input-number>\n          </div>\n          <div class=\"code-box-description\">\n            <p>数字输入框。</p>\n            <span class=\"code-box-description-title\">基本</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\n          </div>\n        </div>\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.third.value\"\n              [storageWidth]=\"codeBox.third.width\"\n            ></storage-input-number>\n            <nz-slider\n              [nzDefaultValue]=\"codeBox.third.width\"\n              [(ngModel)]=\"codeBox.third.width\"\n              [nzMax]=\"1000\"\n              [nzTipFormatter]=\"changeTooltip\"\n            ></nz-slider>\n            <storage-input-number\n              [(storageValue)]=\"codeBox.third.value\"\n              [storageWidth]=\"'100%'\"\n            ></storage-input-number>\n          </div>\n          <div class=\"code-box-description\">\n            <p>可调节宽度。</p>\n            <span class=\"code-box-description-title\">宽度</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.third.show\"\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.third.show\"\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\n          </div>\n        </div>\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.fifth.value\"\n              [storagePrecision]=\"2\"\n            ></storage-input-number>\n          </div>\n          <div class=\"code-box-description\">\n            <p>通过设置<code class=\"code\">storagePrecision</code>来设置精度。传入数字表示小数点后保留几位，超出部分四舍五入保存。</p>\n            <span class=\"code-box-description-title\">精度</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.fifth.show\"\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.fifth.show\"\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.fifth.show\">\n            <pre><code [highlight]=\"codeBox.fifth.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.second.value\"\n              [storageDisabled]=\"codeBox.second.disabled\"\n            ></storage-input-number>\n            <br><br>\n            <button storage-button storageType=\"primary\" (click)=\"toggleDisabled()\">Toggle Disabled</button>\n          </div>\n          <div class=\"code-box-description\">\n            <p>点击按钮切换可用状态。</p>\n            <span class=\"code-box-description-title\">不可用</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\n          </div>\n        </div>\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.forth.value\"\n              [storageMax]=\"100\"\n              [storageMin]=\"0\"\n            ></storage-input-number>\n            <br><br>\n            <nz-tag>Max:100</nz-tag>\n            <nz-tag>Min:0</nz-tag>\n          </div>\n          <div class=\"code-box-description\">\n            <p>添加<code class=\"code\">storageMax</code>和<code class=\"code\">storageMin</code>即可对输入范围进行约束。</p>\n            <span class=\"code-box-description-title\">范围约束</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.forth.show\"\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.forth.show\"\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\n          </div>\n        </div>\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <storage-input-number\n              [(storageValue)]=\"codeBox.sixth.value\"\n              [storageFormatter]=\"{icon:'$',isBefore:true}\"\n            ></storage-input-number>\n            <br><br>\n            <storage-input-number\n              [(storageValue)]=\"codeBox.sixth.value\"\n              [storageFormatter]=\"{icon:'%',isBefore:false}\"\n            ></storage-input-number>\n          </div>\n          <div class=\"code-box-description\">\n            <p>通过<code class=\"code\">storageFormatter</code>格式化数字，以展示具有具体含义的数据。</p>\n            <span class=\"code-box-description-title\">格式化展示</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.sixth.show\"\n              (click)=\"codeBox.sixth.show=!codeBox.sixth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.sixth.show\"\n              (click)=\"codeBox.sixth.show=!codeBox.sixth.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.sixth.show\">\n            <pre><code [highlight]=\"codeBox.sixth.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article>\n    <h2>API</h2>\n    <p><span class=\"api-title\">storage-input-number</span><span class=\"api-default component\">Component</span></p>\n    <nz-table\n      #nzTable\n      [nzData]=\"tableData\"\n      [nzFrontPagination]=\"false\"\n      [nzShowPagination]=\"false\"\n    >\n      <thead>\n      <tr>\n        <th>成员</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of nzTable.data\">\n        <td><code class=\"code\">{{item.member}}</code></td>\n        <td [innerHTML]=\"item.description\"></td>\n        <td><span class=\"table-type\">{{item.type}}</span></td>\n        <td>{{item.default}}</td>\n      </tr>\n      </tbody>\n    </nz-table>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/components/input-number/input-number.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/input-number/input-number.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputNumber {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.inputNumber > article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9pbnB1dC1udW1iZXIvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0TnVtYmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICAmID4gYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbn1cbiIsIi5pbnB1dE51bWJlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uaW5wdXROdW1iZXIgPiBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/components/input-number/input-number.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/input-number/input-number.component.ts ***!
  \*************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputNumberComponent = /** @class */ (function () {
    function InputNumberComponent() {
        this.codeBox = {
            first: {
                show: false,
                value: null,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number-demo',\n        template: `\n                     <storage-input-number\n                          [(storageValue)]=\"value\"\n                     ></storage-input-number>\n                  `\n      })\n\n      export class StorageInputNumberDemoComponentClass{\n          value: number;\n      }\n      "
            },
            second: {
                show: false,
                value: null,
                disabled: false,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number-demo',\n        template: `\n                     <storage-input-number\n                          [(storageValue)]=\"value\"\n                          [storageDisabled]=\"disabled\"\n                     ></storage-input-number>\n                     <br><br>\n                     <button storage-button storageType=\"primary\" (click)=\"toggleDisabled()\">Toggle Disabled</button>\n                  `\n      })\n\n      export class StorageInputNumberDemoComponentClass{\n        value: number;\n        disabled = false;\n\n        toggleDisabled(): void{\n          this.disabled = !this.disabled;\n        }\n      }\n      "
            },
            third: {
                value: null,
                show: false,
                width: 100,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number-demo',\n        template: `\n                     <storage-input-number\n                        [(storageValue)]=\"value\"\n                        [storageWidth]=\"width\"\n                     ></storage-input-number>\n                     <nz-slider\n                        [nzDefaultValue]=\"width\"\n                        [(ngModel)]=\"width\"\n                        [nzMax]=\"1000\"\n                        [nzTipFormatter]=\"changeTooltip\"\n                     ></nz-slider>\n                     <storage-input-number\n                        [(storageValue)]=\"value\"\n                        [storageWidth]=\"'100%'\"\n                     ></storage-input-number>\n                  `\n\n        export class StorageInputNumberDemoComponentClass{\n            value: number;\n            width = 100;\n\n            changeTooltip = (e: number): string | number => {\n                return e ? e + 'px' : e;\n            }\n        }\n      })\n      "
            },
            forth: {
                show: false,
                value: null,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number-demo',\n        template: `\n                      <storage-input-number\n                          [(storageValue)]=\"value\"\n                          [storageMax]=\"100\"\n                          [storageMin]=\"0\"\n                      ></storage-input-number>\n                      `\n      })\n\n      export class StorageInputNumberDemoComponentClass{\n        value: number;\n      }\n      "
            },
            fifth: {
                show: false,
                value: null,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number-demo',\n        template: `\n                      <storage-input-number\n                            [(storageValue)]=\"value\"\n                            [storagePrecision]=\"2\"\n                      ></storage-input-number>\n        `\n      })\n\n      export class StorageInputNumberDemoComponentClass{\n        value: number;\n      }\n      "
            },
            sixth: {
                show: false,
                value: null,
                source: "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'storage-input-number',\n        template: `\n                    <storage-input-number\n                        [(storageValue)]=\"value\"\n                        [storageFormatter]=\"{icon:'$',isBefore:true}\"\n                    ></storage-input-number>\n                    <br><br>\n                    <storage-input-number\n                        [(storageValue)]=\"value\"\n                        [storageFormatter]=\"{icon:'%',isBefore:false}\"\n                    ></storage-input-number>\n        `\n      })\n\n      export class StorageInputNumberDemoComponentClass{\n        value: number;\n      }\n      "
            }
        };
        this.tableData = [
            { member: '[storageValue]', description: '当前值，可双向绑定', type: 'number', default: '-' },
            { member: '[storageMax]', description: '最大值', type: 'number', default: '-' },
            { member: '[storageMin]', description: '最小值', type: 'number', default: '-' },
            { member: '[storageFormatter]', description: '指定输入框展示值的格式', type: '{ icon: string, isBefore: boolean }', default: '-' },
            { member: '[storagePrecision]', description: '数值精度', type: 'number', default: '-' },
            { member: '[storagePlaceholder]', description: '输入框默认文字', type: 'string', default: '请输入' },
            { member: '[storageDisabled]', description: '禁用', type: 'boolean', default: 'false' },
            { member: '(storageValueChange)', description: '当前输入值发生改变', type: 'EventEmitter', default: '-' }
        ];
        this.changeTooltip = function (e) {
            return e ? e + "px" : e;
        };
    }
    InputNumberComponent.prototype.ngOnInit = function () {
    };
    InputNumberComponent.prototype.toggleDisabled = function () {
        this.codeBox.second.disabled = !this.codeBox.second.disabled;
    };
    InputNumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-number',
            template: __webpack_require__(/*! ./input-number.component.html */ "./src/app/pages/components/input-number/input-number.component.html"),
            styles: [__webpack_require__(/*! ./input-number.component.less */ "./src/app/pages/components/input-number/input-number.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputNumberComponent);
    return InputNumberComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/input-number/input-number.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/components/input-number/input-number.module.ts ***!
  \**********************************************************************/
/*! exports provided: InputNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberModule", function() { return InputNumberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-number.component */ "./src/app/pages/components/input-number/input-number.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _input_number_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number-routing.module */ "./src/app/pages/components/input-number/input-number-routing.module.ts");






var InputNumberModule = /** @class */ (function () {
    function InputNumberModule() {
    }
    InputNumberModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_input_number_component__WEBPACK_IMPORTED_MODULE_3__["InputNumberComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                _input_number_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputNumberRoutingModule"]
            ]
        })
    ], InputNumberModule);
    return InputNumberModule;
}());



/***/ })

}]);
//# sourceMappingURL=input-number-input-number-module.js.map