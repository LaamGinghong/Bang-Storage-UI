(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carousel-carousel-module"],{

/***/ "./src/app/pages/components/carousel/carousel-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/components/carousel/carousel-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CarouselRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselRoutingModule", function() { return CarouselRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component */ "./src/app/pages/components/carousel/carousel.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
    }];
var CarouselRoutingModule = /** @class */ (function () {
    function CarouselRoutingModule() {
    }
    CarouselRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CarouselRoutingModule);
    return CarouselRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/carousel/carousel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/carousel/carousel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\r\n  <h1>Carousel 走马灯</h1>\r\n  <p>旋转木马，一组轮播的区域。</p>\r\n  <article>\r\n    <h2>何时使用</h2>\r\n    <ul style=\"list-style: circle\">\r\n      <li>当有一组平级的内容。</li>\r\n      <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>\r\n      <li>常用于一组图片或卡片轮播。</li>\r\n    </ul>\r\n  </article>\r\n  <article>\r\n    <h2>代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-carousel storageDirection>\r\n              <div storage-carousel-content *ngFor=\"let item of array\">\r\n                <h3>{{item}}</h3>\r\n              </div>\r\n            </storage-carousel>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>基本用法。</p>\r\n            <span class=\"code-box-description-title\">基本</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-carousel [storageSize]=\"{width:'500px',height:'200px'}\">\r\n              <div *ngFor=\"let item of array\" storage-carousel-content>\r\n                <h3>{{item}}</h3>\r\n              </div>\r\n            </storage-carousel>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>设置<code class=\"code\">storageSize</code>可以自定义轮播大小。</p>\r\n            <span class=\"code-box-description-title\">自定义大小</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-carousel storageDirection storageLight>\r\n              <div *ngFor=\"let item of array\" storage-carousel-content>\r\n                <h3>{{item}}</h3>\r\n              </div>\r\n            </storage-carousel>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>默认深色主题，设置<code class=\"code\">storageLight</code>可以切换为亮色主题。</p>\r\n            <span class=\"code-box-description-title\">亮色主题</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-carousel storageAutoRun>\r\n              <div *ngFor=\"let item of array\" storage-carousel-content>\r\n                <h3>{{item}}</h3>\r\n              </div>\r\n            </storage-carousel>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>定是切换下一张，鼠标悬浮暂停切换。</p>\r\n            <span class=\"code-box-description-title\">自动切换</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\r\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2>API</h2>\r\n    <p><span class=\"api-title\">storage-carousel</span><span class=\"api-default component\">Component</span></p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/carousel/carousel.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/carousel/carousel.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.carousel > article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jYXJvdXNlbC9EOi9wcm9qZWN0cy9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICYgPiBhcnRpY2xlIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgfVxufVxuIiwiLmNhcm91c2VsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jYXJvdXNlbCA+IGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/components/carousel/carousel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/carousel/carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.array = [1, 2, 3, 4];
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-carousel-demo',\n        template: `\n                    <storage-carousel storageDirection>\n                       <div *ngFor=\"let item of array\" storage-carousel-content>\n                          <h3>{{item}}</h3>\n                       </div>\n                    </storage-carousel>\n      })\n      export class StorageCarouseDemoComponent {\n        array = [1, 2, 3, 4];\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-carousel-demo',\n        template: `\n                    <storage-carousel storageDirection storageLight>\n                       <div *ngFor=\"let item of array\" storage-carousel-content>\n                          <h3>{{item}}</h3>\n                       </div>\n                    </storage-carousel>\n                    `\n      })\n      export class StorageCarouseDemoComponent {\n        array = [1, 2, 3, 4];\n      }\n      "
            },
            third: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n      import {StorageCarouselSize} from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-carousel-demo',\n        template: `\n                    <storage-carousel [storageSize]=\"size\">\n                       <div *ngFor=\"let item of array\" storage-carousel-content>\n                          <h3>{{item}}</h3>\n                       </div>\n                    </storage-carousel>\n                    `\n      })\n      export class StorageCarouseDemoComponent {\n        array = [1, 2, 3, 4];\n        size: StorageCarouselSize = {\n          width: '500px',\n          height: '200px'\n        }\n      }\n      "
            },
            forth: {
                show: false,
                source: "\n      import {Component} from '@angular/core';\n\n      @Component({\n        selector: 'storage-carousel-demo',\n        template: `\n                    <storage-carousel storageAutoRun>\n                       <div *ngFor=\"let item of array\" storage-carousel-content>\n                          <h3>{{item}}</h3>\n                       </div>\n                    </storage-carousel>\n                    `\n      })\n      export class StorageCarouseDemoComponent {\n        array = [1, 2, 3, 4];\n      }\n      "
            }
        };
        this.tableData = [
            { name: '[storageSize]', description: '自定义轮播图大小,单位：px', type: '{width?:string,height?:string}', default: "{width:'720px',height:'220px'}" },
            { name: '[storageDots]', description: '是否显示页码按钮', type: 'boolean', default: 'true' },
            { name: '[storageDirection]', description: '是否显示上一张、下一张按钮', type: 'boolean', default: 'false' },
            { name: '[storageAutoRun]', description: '是否自动轮播', type: 'boolean', default: 'false' },
            { name: '[storageAutoRunSpeed]', description: '切换时间(毫秒)', type: 'number', default: '3000' },
            { name: '[storageLight]', description: '是否切换为亮色主题', type: 'boolean', default: 'false' },
            { name: '(storageClickIndex)', description: '点击页码按钮回调函数', type: 'EventEmitter<number>', default: '-' },
            { name: '(storageClickDirection)', description: '点击切换页按钮回调函数', type: "EventEmitter<'pre'|'next'>", default: '-' }
        ];
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/pages/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.less */ "./src/app/pages/components/carousel/carousel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/carousel/carousel.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/carousel/carousel.module.ts ***!
  \**************************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.component */ "./src/app/pages/components/carousel/carousel.component.ts");
/* harmony import */ var _carousel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel-routing.module */ "./src/app/pages/components/carousel/carousel-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _carousel_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarouselRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ })

}]);
//# sourceMappingURL=carousel-carousel-module.js.map