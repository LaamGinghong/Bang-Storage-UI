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

module.exports = "<div class=\"select\">\r\n  <h1>Select 选择器</h1>\r\n  <p>下拉选择器</p>\r\n  <article>\r\n    <h2>何时使用</h2>\r\n    <ul style=\"list-style: circle\">\r\n      <li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>\r\n      <li>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>\r\n    </ul>\r\n  </article>\r\n  <article>\r\n    <h2>代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-select>\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"\r\n                              [storageDisabled]=\"item.disabled\"></storage-option>\r\n            </storage-select>\r\n            <storage-select storageDisabled>\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\"\r\n                              [storageName]=\"item.name\"></storage-option>\r\n            </storage-select>\r\n            <storage-select storageAllowClear>\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"\r\n                              [storageDisabled]=\"item.disabled\"></storage-option>\r\n            </storage-select>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>基本使用。</p>\r\n            <span class=\"code-box-description-title\">基本使用</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <nz-radio-group [(ngModel)]=\"size\">\r\n              <label nz-radio-button nzValue=\"large\">Large</label>\r\n              <label nz-radio-button nzValue=\"default\">Default</label>\r\n              <label nz-radio-button nzValue=\"small\">Small</label>\r\n            </nz-radio-group>\r\n            <br><br>\r\n            <storage-select [storageSize]=\"size\">\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\"\r\n                              [storageName]=\"item.name\"></storage-option>\r\n            </storage-select>\r\n            <br><br>\r\n            <storage-select storageMultiple [storageSize]=\"size\">\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\"\r\n                              [storageName]=\"item.name\"></storage-option>\r\n            </storage-select>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>三种大小的选择框，当<code class=\"code\">storageSize</code>分别为<code class=\"code\">large</code>和<code class=\"code\">small</code>时，输入框高度为<code\r\n              class=\"code\">40px</code>和<code class=\"code\">24px</code>，默认高度为<code class=\"code\">32px</code>。</p>\r\n            <span class=\"code-box-description-title\">三种大小</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-select storageMultiple>\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"\r\n                              [storageDisabled]=\"item.disabled\"></storage-option>\r\n            </storage-select>\r\n            <storage-select storageMultiple storageShowSelectAll>\r\n              <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"\r\n                              [storageDisabled]=\"item.disabled\"></storage-option>\r\n            </storage-select>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>多选。</p>\r\n            <span class=\"code-box-description-title\">多选</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-select (storageScrollToBottom)=\"scrollToBottom()\">\r\n              <storage-option *ngFor=\"let item of array\" [storageName]=\"item.name\"\r\n                              [storageValue]=\"item.value\"></storage-option>\r\n            </storage-select>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>下拉选框滚动到底部触发<code class=\"code\">storageScrollToBottom</code>事件。</p>\r\n            <span class=\"code-box-description-title\">下拉加载</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\r\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2>API</h2>\r\n    <p><span class=\"api-title\">[storage-select]</span><span class=\"api-default component\">component</span></p>\r\n    <nz-table\r\n      #selectTable\r\n      [nzData]=\"selectData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of selectTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n    <br><br>\r\n    <p><span class=\"api-title\">[storage-option]</span><span class=\"api-default component\">component</span></p>\r\n    <nz-table\r\n      #optionTable\r\n      [nzData]=\"optionData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of optionTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/select/select.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/select/select.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.select article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zZWxlY3QvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbn1cbiIsIi5zZWxlY3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnNlbGVjdCBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

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
            { name: 'OPPO', value: 'OPPO', disabled: true },
            { name: 'vivo', value: 'vivo', disabled: true },
            { name: '一加', value: 'onePlus', disabled: false },
            { name: 'IQOO', value: 'IQOO', disabled: false },
            { name: '荣耀', value: 'honor', disabled: false },
            { name: '魅族', value: 'meizu', disabled: false }
        ];
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-select-demo',\n        template: `\n                   <storage-select>\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\" [storageDisabled]=\"item.disabled\"></storage-option>\n                   </storage-select>\n                   <storage-select storageDisabled>\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\"></storage-option>\n                   </storage-select>\n                   <storage-select storageAllowClear>\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\" [storageDisabled]=\"item.disabled\"></storage-option>\n                   </storage-select>\n                   `\n      })\n      export class StorageSelectDemoComponent{\n        array = [\n          {name: '\u82F9\u679C', value: 'Apple', disabled: false},\n          {name: '\u4E09\u661F', value: 'Samsung', disabled: false},\n          {name: '\u534E\u4E3A', value: 'Huawei', disabled: false},\n          {name: '\u5C0F\u7C73', value: 'Xiaomi', disabled: false},\n          {name: 'OPPO', value: 'OPPO', disabled: true},\n          {name: 'vivo', value: 'vivo', disabled: true},\n          {name: '\u4E00\u52A0', value: 'onePlus', disabled: false},\n          {name: 'IQOO', value: 'IQOO', disabled: false},\n          {name: '\u8363\u8000', value: 'honor', disabled: false},\n          {name: '\u9B45\u65CF', value: 'meizu', disabled: false}\n        ];\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-select-demo',\n        template: `\n                    <storage-select storageMultiple>\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\" [storageDisabled]=\"item.disabled\"></storage-option>\n                    </storage-select>\n                    <storage-select storageMultiple storageShowSelectAll>\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\" [storageName]=\"item.name\" [storageDisabled]=\"item.disabled\"></storage-option>\n                    </storage-select>\n                  `\n      })\n      export class StorageSelectDemoComponent{\n        array = [\n          {name: '\u82F9\u679C', value: 'Apple', disabled: false},\n          {name: '\u4E09\u661F', value: 'Samsung', disabled: false},\n          {name: '\u534E\u4E3A', value: 'Huawei', disabled: false},\n          {name: '\u5C0F\u7C73', value: 'Xiaomi', disabled: false},\n          {name: 'OPPO', value: 'OPPO', disabled: true},\n          {name: 'vivo', value: 'vivo', disabled: true},\n          {name: '\u4E00\u52A0', value: 'onePlus', disabled: false},\n          {name: 'IQOO', value: 'IQOO', disabled: false},\n          {name: '\u8363\u8000', value: 'honor', disabled: false},\n          {name: '\u9B45\u65CF', value: 'meizu', disabled: false}\n        ];\n      }\n      "
            },
            third: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n      import {StorageSelectSize} from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-select-demo',\n        template: `\n                    <nz-radio-group [(ngModel)]=\"size\">\n                      <label nz-radio-button nzValue=\"large\">Large</label>\n                      <label nz-radio-button nzValue=\"default\">Default</label>\n                      <label nz-radio-button nzValue=\"small\">Small</label>\n                    </nz-radio-group>\n                    <br><br>\n                    <storage-select [storageSize]=\"size\">\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\"\n                                      [storageName]=\"item.name\"></storage-option>\n                    </storage-select>\n                    <br><br>\n                    <storage-select storageMultiple [storageSize]=\"size\">\n                      <storage-option *ngFor=\"let item of array\" [storageValue]=\"item.value\"\n                                      [storageName]=\"item.name\"></storage-option>\n                    </storage-select>\n                  `\n      })\n      export class StorageSelectDemoComponent{\n        array = [\n          {name: '\u82F9\u679C', value: 'Apple', disabled: false},\n          {name: '\u4E09\u661F', value: 'Samsung', disabled: false},\n          {name: '\u534E\u4E3A', value: 'Huawei', disabled: false},\n          {name: '\u5C0F\u7C73', value: 'Xiaomi', disabled: false},\n          {name: 'OPPO', value: 'OPPO', disabled: true},\n          {name: 'vivo', value: 'vivo', disabled: true},\n          {name: '\u4E00\u52A0', value: 'onePlus', disabled: false},\n          {name: 'IQOO', value: 'IQOO', disabled: false},\n          {name: '\u8363\u8000', value: 'honor', disabled: false},\n          {name: '\u9B45\u65CF', value: 'meizu', disabled: false}\n        ];\n        size: StorageSelectSize = 'default';\n      }\n      "
            },
            forth: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-select-demo',\n        template: `\n                   <storage-select (storageScrollToBottom)=\"scrollToBottom()\">\n                      <storage-option *ngFor=\"let item of array\" [storageName]=\"item.name\"\n                                      [storageValue]=\"item.value\"></storage-option>\n                   </storage-select>\n                   `\n      })\n      export class StorageSelectDemoComponent{\n        array = [\n          {name: '\u82F9\u679C', value: 'Apple', disabled: false},\n          {name: '\u4E09\u661F', value: 'Samsung', disabled: false},\n          {name: '\u534E\u4E3A', value: 'Huawei', disabled: false},\n          {name: '\u5C0F\u7C73', value: 'Xiaomi', disabled: false},\n          {name: 'OPPO', value: 'OPPO', disabled: true},\n          {name: 'vivo', value: 'vivo', disabled: true},\n          {name: '\u4E00\u52A0', value: 'onePlus', disabled: false},\n          {name: 'IQOO', value: 'IQOO', disabled: false},\n          {name: '\u8363\u8000', value: 'honor', disabled: false},\n          {name: '\u9B45\u65CF', value: 'meizu', disabled: false}\n        ];\n\n        scrollToBottom(): void {\n          const value = String(Math.random() * 10);\n          this.array.push(\n            {name: 'New Item' + value, value, disabled: false}\n          );\n        }\n      }\n      "
            }
        };
        this.size = 'default';
        this.selectData = [
            { name: '[(storageValue)]', description: '当前选中的 storage-option 的 storageValue 值，可双向绑定,多选时为数组', type: 'any|any[]', default: '-' },
            { name: '[storagePlaceholder]', description: '选择框默认文字', type: 'string', default: '-' },
            { name: '[storageWidth]', description: '选择框默认宽度，单位：px', type: 'number', default: '180' },
            { name: '[storageSize]', description: '选择框默认大小', type: 'StorageSelectSize:large|default|small', default: 'default' },
            { name: '[storageNotFoundContent]', description: '当下拉列表为空时显示的内容', type: 'string', default: '没有数据' },
            { name: '[storageAllowClear]', description: '支持清除，单选有效', type: 'boolean', default: 'false' },
            { name: '[storageDisabled]', description: '是否禁用', type: 'boolean', default: 'false' },
            { name: '[(storageOpen)]', description: '下拉菜单是否打开，可双向绑定', type: 'boolean', default: 'false' },
            { name: '[storageMultiple]', description: '是否开启多选', type: 'boolean', default: 'false' },
            { name: '[storageShowSelectAll]', description: '是否开启全选，多选有效', type: 'boolean', default: 'false' },
            { name: '(storageValueChange)', description: 'storage-select 选中的值发生改变时的回调', type: 'EventEmitter<any>', default: '-' },
            { name: '(storageOpenChange)', description: '下拉菜单打开状态变化回调', type: 'EventEmitter<any>', default: '-' },
            { name: '(storageScrollToBottom)', description: '下拉列表滚动到底部的回调', type: 'EventEmitter<void>', default: '-' }
        ];
        this.optionData = [
            { name: '[storageValue]', description: 'storage-select 中 storageValue 的值', type: 'any', default: '-' },
            { name: '[storageName]', description: '选中该 storage-option 后，storage-select 中显示的文字', type: 'string', default: '-' },
            { name: '[storageDisabled]', description: '是否禁用', type: 'boolean', default: 'false' }
        ];
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent.prototype.scrollToBottom = function () {
        var value = String(Math.random() * 10);
        this.array.push({ name: "New Item" + value, value: value, disabled: false });
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