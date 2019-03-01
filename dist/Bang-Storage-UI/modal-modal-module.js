(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-modal-module"],{

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  modal-inner works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtaW5uZXIvbW9kYWwtaW5uZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-inner/modal-inner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInnerComponent", function() { return ModalInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalInnerComponent = /** @class */ (function () {
    function ModalInnerComponent() {
    }
    ModalInnerComponent.prototype.ngOnInit = function () {
    };
    ModalInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-inner',
            template: __webpack_require__(/*! ./modal-inner.component.html */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.html"),
            styles: [__webpack_require__(/*! ./modal-inner.component.less */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalInnerComponent);
    return ModalInnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/modal/modal-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ModalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRoutingModule", function() { return ModalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/pages/components/modal/modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]
    }];
var ModalRoutingModule = /** @class */ (function () {
    function ModalRoutingModule() {
    }
    ModalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModalRoutingModule);
    return ModalRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" storage-move-modal>\n  <h1>Move Modal 可拖动模态框</h1>\n  <p>拖动模态对话框</p>\n  <article>\n    <h2>何时使用</h2>\n    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用<code class=\"code\">Modal</code>在当前页面正中打开一个浮层，承载相应的操作。</p>\n    <p>由于NG-ZORRO只是基于Angular版本的Ant-design，并没有添加模态框拖动的功能，但是实际业务中需要拖动模态框。</p>\n    <p>在此基础上，通过添加指令操作<code class=\"code\">DOM</code>元素来实现模态框的拖动功能。</p>\n  </article>\n  <article>\n    <h2>如何使用</h2>\n    <p>推荐使用加载Component的方式弹出Modal框，这样弹出层的Component逻辑可以与外层Component完全隔离，并且做到可以随时复用，</p>\n    <p>在弹出层Component中可以通过依赖注入<code class=\"code\">NzModalRef</code>方式直接获取模态框的组件实例，用于控制在弹出层组件中控制模态框行为。</p>\n    <p>因此你只需在当前页面中任意位置添加<code class=\"code\">storage-move-modal</code>指令，在Modal框生成之后调用初始化函数即可实现拖动功能。</p>\n  </article>\n  <article>\n    <h2>代码演示</h2>\n    <div nz-row nzGutter=\"16\">\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <button storage-button storageType=\"primary\" (click)=\"open1()\">Show Modal</button>\n          </div>\n          <div class=\"code-box-description\">\n            <p>拖动模态框。</p>\n            <span class=\"code-box-description-title\">拖动模态框</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.first.show\"\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <div class=\"code-box\">\n          <div class=\"code-box-demo\">\n            <button storage-button storageType=\"primary\" (click)=\"open2()\">Show Modal</button>\n          </div>\n          <div class=\"code-box-description\">\n            <p>拖动模态框。</p>\n            <span class=\"code-box-description-title\">拖动模态框</span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Hide Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\n            </span>\n            <span\n              nz-tooltip\n              [nzTitle]=\"'Show Code'\"\n              class=\"code-box-description-icon\"\n              *ngIf=\"!codeBox.second.show\"\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\n            >\n              <img alt=\"expand code\"\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\n            </span>\n          </div>\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article>\n    <h2>API</h2>\n    <p><span class=\"api-title\">StorageModalService</span><span class=\"api-default service\">Service</span></p>\n    <p>由于采用服务动态创建模态框，因此模态框组件并没有挂载在当前组件中，而是与根组件平级，所以无法直接在组件中获取模态框DOM节点。</p>\n    <p>因此，我们通过在组件中注入指令全局监听事件，</p>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.less":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.modal article {\n  margin: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9tb2RhbC9EOi9wcm9qZWN0cy9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURMQTtFQU9JLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gIGFydGljbGUge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG59XG4iLCIubW9kYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm1vZGFsIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/components/modal/modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-inner/modal-inner.component */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts");
/* harmony import */ var bang_storage_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bang-storage-ui */ "./node_modules/bang-storage-ui/fesm5/bang-storage-ui.js");




// import {StorageModalService} from '../../../../component/modal/storage-modal.service';

var ModalComponent = /** @class */ (function () {
    function ModalComponent(_modal, _moveModal) {
        this._modal = _modal;
        this._moveModal = _moveModal;
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import { NgModule, Component } from '@angular/core';\n      import { CommonModule } from '@angular/common';\n      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';\n      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';\n      import { ModalInnerComponent } from './modal-inner-modal-inner.component';\n\n      @Component({\n        selector: 'storage-move-modal-demo',\n        template: `\n                      <div storage-move-modal>\n                         <button storage-button storageType=\"primary\" (click)=\"open()\">Show Modal</button>\n                      </div>\n                  `\n      })\n\n      export class StorageMoveModalDemoComponent{\n\n         constructor(\n                    private _modal: NzModalService,\n                    private _moveModal: StorageModalService\n                    ) {\n                      }\n\n        open(): void{\n          const modal = this._modal.create({\n             nzTitle: 'Title',\n             nzContent: ModalInnerComponent\n          });\n          modal.afterOpen.subscribe(() => {\n            this._moveModal.initModal();\n          })\n        }\n      }\n\n      @NgModule({\n        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],\n        declarations: [StorageMoveModalDemoComponent, ModalInnerComponent],\n        entryComponents: [ModalInnerComponent]\n      })\n\n      export class StorageMoveModalDemoModule{\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import { NgModule, Component } from '@angular/core';\n      import { CommonModule } from '@angular/common';\n      import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';\n      import { BangStorageUIModule, StorageModalService } from 'bang-storage-ui';\n      import { ModalInnerComponent } from './modal-inner-modal-inner.component';\n\n      @Component({\n        selector: 'storage-zoom-modal-demo',\n        template: `\n                      <div storage-move-modal>\n                         <button storage-button storageType=\"primary\" (click)=\"open()\">Show Modal</button>\n                      </div>\n                  `\n      })\n\n      export class StorageZoomModalDemoComponent{\n\n         constructor(\n                    private _modal: NzModalService,\n                    private _moveModal: StorageModalService\n                    ) {\n                      }\n\n        open(): void{\n          const modal = this._modal.create({\n             nzTitle: 'Title',\n             nzContent: ModalInnerComponent\n          });\n          modal.afterOpen.subscribe(() => {\n             this._moveModal.initModal();\n             this._moveModal.initZoom();\n          })\n        }\n      }\n\n      @NgModule({\n        import: [ CommonModule, NgZorroAntdModule, BangStorageUIModule],\n        declarations: [StorageZoomModalDemoComponent, ModalInnerComponent],\n        entryComponents: [ModalInnerComponent]\n      })\n\n      export class StorageZoomModalDemoModule{\n      }\n      "
            }
        };
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.open1 = function () {
        var _this = this;
        var modal = this._modal.create({
            nzTitle: 'Title',
            nzContent: _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__["ModalInnerComponent"]
        });
        modal.afterOpen.subscribe(function () {
            _this._moveModal.initModal();
            // this._moveModal.initZoom();
        });
    };
    ModalComponent.prototype.open2 = function () {
        var _this = this;
        var modal = this._modal.create({
            nzTitle: 'Title',
            nzContent: _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_3__["ModalInnerComponent"]
        });
        modal.afterOpen.subscribe(function () {
            _this._moveModal.initModal();
            _this._moveModal.initZoom();
        });
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/pages/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.less */ "./src/app/pages/components/modal/modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"],
            bang_storage_ui__WEBPACK_IMPORTED_MODULE_4__["StorageModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/modal/modal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/modal/modal.module.ts ***!
  \********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/pages/components/modal/modal.component.ts");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-routing.module */ "./src/app/pages/components/modal/modal-routing.module.ts");
/* harmony import */ var _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-inner/modal-inner.component */ "./src/app/pages/components/modal/modal-inner/modal-inner.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__["ModalInnerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModalRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"]
            ],
            entryComponents: [_modal_inner_modal_inner_component__WEBPACK_IMPORTED_MODULE_5__["ModalInnerComponent"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=modal-modal-module.js.map