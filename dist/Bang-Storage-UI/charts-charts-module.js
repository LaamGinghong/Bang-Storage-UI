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

module.exports = "<div class=\"charts\">\n  <h1>Charts 图表</h1>\n  <p>用于数据可视化，帮助业务人员更好查阅、操作数据。</p>\n  <article>\n    <h2>何时使用</h2>\n    <p>用于数据可视化操作。</p>\n  </article>\n  <article>\n    <h2>代码演示</h2>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <div storage-charts [storageOption]=\"codeBox.first.value\" style=\"width: 700px;height: 300px\"></div>\n          </div>\n          <div class=\"code-box-description\">\n            <p>基本图表显示，需确定制定容器<code class=\"code\">width</code>和<code class=\"code\">height</code>。</p>\n            <span class=\"code-box-description-title\">基本图表</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\n          </div>\n        </div>\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <div style=\"width: 700px;height: 300px\" storage-charts [storageOption]=\"codeBox.first.value\"\n                 [storageLoading]=\"codeBox.third.value\"></div>\n            <button storage-button storageType=\"primary\" (click)=\"toggleLoading()\">Loading</button>\n          </div>\n          <div class=\"code-box-description\">\n            <p>异步加载可通过<code class=\"code\">storageLoading</code>控制显示加载中符号。</p>\n            <span class=\"code-box-description-title\">加载中</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.third.show\"\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.third.show\"\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <div storage-charts [storageOption]=\"codeBox.first.value\" [storageMerge]=\"merge\"\n                 style=\"width: 700px;height: 300px\"></div>\n            <button storage-button storageType=\"primary\" (click)=\"changeOption()\">Change Option</button>\n          </div>\n          <div class=\"code-box-description\">\n            <p>动态更新图表数据，只需将所需要的项传进<code class=\"code\">merge</code>中。</p>\n            <span class=\"code-box-description-title\">动态更新</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article>\n    <h2>API</h2>\n    <p><span class=\"api-title\">[storage-charts]</span><span class=\"api-default directive\">Directive</span></p>\n    <p>本指令只做图表的基本显示，具体配置项请看Interface<code class=\"code\">StorageChartsOption</code>或者前往<a\n      href=\"https://echarts.baidu.com/option.html#title\" target=\"_blank\">官网</a>查看</p>\n    <nz-table\n      #nzTable\n      [nzData]=\"tableData\"\n      [nzFrontPagination]=\"false\"\n      [nzShowPagination]=\"false\"\n    >\n      <thead>\n      <tr>\n        <th>属性</th>\n        <th>说明</th>\n        <th>类型</th>\n        <th>默认值</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of nzTable.data\">\n        <td><code class=\"code\">{{item.name}}</code></td>\n        <td [innerHTML]=\"item.description\"></td>\n        <td><span class=\"table-type\">{{item.type}}</span></td>\n        <td>{{item.default}}</td>\n      </tr>\n      </tbody>\n    </nz-table>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/components/charts/charts.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/charts/charts.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.charts article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbn1cbiIsIi5jaGFydHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmNoYXJ0cyBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4iXX0= */"

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