(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/pages/components/charts/charts-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/charts/charts-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/components/charts/charts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"]
    }];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/charts/charts.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/charts/charts.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"charts\">\r\n  <h1>Charts 图表</h1>\r\n  <p>用于数据可视化，帮助业务人员更好查阅、操作数据。</p>\r\n  <article>\r\n    <h2>何时使用</h2>\r\n    <p>用于数据可视化操作。</p>\r\n  </article>\r\n  <article>\r\n    <h2>代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <div storage-charts [storageOption]=\"codeBox.first.value\" style=\"width: 700px;height: 300px\"></div>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>基本图表显示，需确定制定容器<code class=\"code\">width</code>和<code class=\"code\">height</code>。</p>\r\n            <span class=\"code-box-description-title\">基本图表</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <div style=\"width: 700px;height: 300px\" storage-charts [storageOption]=\"codeBox.first.value\"\r\n                 [storageLoading]=\"codeBox.third.value\"></div>\r\n            <button storage-button storageType=\"primary\" (click)=\"toggleLoading()\">Loading</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>异步加载可通过<code class=\"code\">storageLoading</code>控制显示加载中符号。</p>\r\n            <span class=\"code-box-description-title\">加载中</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <div storage-charts [storageOption]=\"codeBox.first.value\" [storageMerge]=\"merge\"\r\n                 style=\"width: 700px;height: 300px\"></div>\r\n            <button storage-button storageType=\"primary\" (click)=\"changeOption()\">Change Option</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>动态更新图表数据，只需将所需要的项传进<code class=\"code\">merge</code>中。</p>\r\n            <span class=\"code-box-description-title\">动态更新</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2>API</h2>\r\n    <p><span class=\"api-title\">[storage-charts]</span><span class=\"api-default directive\">Directive</span></p>\r\n    <p>本指令只做图表的基本显示，具体配置项请看Interface<code class=\"code\">StorageChartsOption</code>或者前往<a\r\n      href=\"https://echarts.baidu.com/option.html#title\" target=\"_blank\">官网</a>查看</p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/charts/charts.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/charts/charts.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.charts article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvRDovQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbn1cbiIsIi5jaGFydHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmNoYXJ0cyBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/components/charts/charts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/charts/charts.component.ts ***!
  \*************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.codeBox = {
            first: {
                show: false,
                value: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line'
                        }]
                },
                source: "\n      import { Component } from '@angular/core';\n      import { StorageChartsOption } from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-charts-demo',\n        template: `\n                    <div style=\"width: 700px;height: 300px;\" storage-charts [storageOption]=\"option\"></div>\n                  `\n      })\n\n      export class StorageChartsDemoComponent{\n\n           option: StorageChartsOption = {\n              xAxis: {\n                  type: 'category',\n                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n                },\n                yAxis: {\n                  type: 'value'\n                },\n                series: [{\n                  data: [820, 932, 901, 934, 1290, 1330, 1320],\n                  type: 'line'\n                }]\n           }\n\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n      import { StorageChartsOption } from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-charts-demo',\n        template: `\n                  <div style=\"width: 700px;height: 300px\" storage-charts [storageOption]=\"option\" [storageMerge]=\"merge\"></div>\n                  <button storage-button storageType=\"primary\" (click)=\"changeOption()\">Change Option</button>\n                  `\n      })\n\n      export class StorageChartsDemoComponent{\n          option: StorageChartsOption = {\n              xAxis: {\n                type: 'category',\n                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n              },\n              yAxis: {\n                type: 'value'\n              },\n              series: [{\n                data: [820, 932, 901, 934, 1290, 1330, 1320],\n                type: 'line'\n              }]\n          }\n\n          merge: StorageChartsOption = {};\n\n          changeOption(): void {\n              this.merge = {\n                series: [{\n                  data: [1680, 900, 563, 98349, 4562, 110, 76350],\n                  type: 'line'\n                }]\n              };\n          }\n      }\n      "
            },
            third: {
                show: false,
                value: false,
                source: "\n      import { Component } from '@angular/core';\n      import { StorageChartsOption } from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-charts-demo',\n        template: `\n                    <div style=\"width: 700px;height: 500px\" storage-charts [storageOption]=\"option\" [storageLoading]=\"loading\" (click)=\"toggleLoading()\"></div>\n                  `\n      })\n\n      export class StorageChartsDemoComponent{\n\n          loading = false;\n\n          value: StorageChartsOption = {\n              xAxis: {\n                type: 'category',\n                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n              },\n              yAxis: {\n                type: 'value'\n              },\n              series: [{\n                data: [820, 932, 901, 934, 1290, 1330, 1320],\n                type: 'line'\n              }]\n          }\n\n          toggleLoading(): void{\n              this.loading = true;\n              setTimeout(() => {\n                  this.loading = false;\n              }, 3000);\n          }\n      }\n      "
            }
        };
        this.tableData = [
            { name: '[storageOption]', description: '图表配置项', type: 'StorageChartsOption', default: '-' },
            { name: '[storageMerge]', description: '图标修改项', type: 'StorageChartsOption', default: '-' },
            { name: '[storageLoading]', description: '加载中', type: 'boolean', default: 'false' }
        ];
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent.prototype.changeOption = function () {
        this.merge = {
            series: [{
                    data: [1680, 900, 563, 98349, 4562, 110, 76350],
                    type: 'line'
                }]
        };
    };
    ChartsComponent.prototype.toggleLoading = function () {
        var _this = this;
        this.codeBox.third.value = true;
        setTimeout(function () {
            _this.codeBox.third.value = false;
        }, 3000);
    };
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/pages/components/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.less */ "./src/app/pages/components/charts/charts.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/charts/charts.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/charts/charts.module.ts ***!
  \**********************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/components/charts/charts.component.ts");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/pages/components/charts/charts-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _charts_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChartsRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map