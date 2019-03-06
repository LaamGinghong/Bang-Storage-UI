(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./src/app/pages/components/upload/upload-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/upload/upload-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UploadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRoutingModule", function() { return UploadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ "./src/app/pages/components/upload/upload.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]
    }];
var UploadRoutingModule = /** @class */ (function () {
    function UploadRoutingModule() {
    }
    UploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UploadRoutingModule);
    return UploadRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/components/upload/upload.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/upload/upload.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload\">\r\n  <h1>Upload 上传</h1>\r\n  <p>文件选择上传及文件批量上传控件。</p>\r\n  <article>\r\n    <h2 id=\"use\">何时使用</h2>\r\n    <p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"warning\">注意事项</h2>\r\n    <p style=\"line-height: 2em\"><code class=\"code\">BangStorageUI</code>认为，文件上传的上传行为应该归属于当前操作的组件本身而非<code class=\"code\">StorageUpload</code>组件，因此，<code class=\"code\">StorageUpload</code>组件并没有整合上传行为的逻辑，而是希望开发者在使用过程中自行在组件中添加行为，避免在HTML中过多地书写JS代码，从而增加代码的耦合度。</p>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"example\">代码演示</h2>\r\n    <div nz-row nzGutter=\"16\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-upload (storageLastFileChange)=\"singleUpload($event)\"></storage-upload>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>经典款式，用户点击按钮弹出文件选择框！</p>\r\n            <span class=\"code-box-description-title\">点击上传</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.first.show\"\r\n              (click)=\"codeBox.first.show=!codeBox.first.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.first.show\">\r\n            <pre><code [highlight]=\"codeBox.first.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-upload [(storageFileList)]=\"codeBox.third.value\"></storage-upload>\r\n            <ul style=\"margin-top: 20px;list-style: circle\">\r\n              <li style=\"margin: 10px 0;\" *ngFor=\"let item of codeBox.third.value;let index=index\">\r\n                <span>{{item.name}}</span>\r\n                <span style=\"float: right;cursor: pointer\" (click)=\"codeBox.third.value.splice(index,1)\">\r\n                  <i nz-icon type=\"close\" theme=\"outline\"></i>\r\n                </span>\r\n              </li>\r\n            </ul>\r\n            <button storage-button storageType=\"primary\" (click)=\"multipleUpload(codeBox.third.value)\">上传</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>使用<code class=\"code\">storageFileList</code>双向绑定已选择的文件列表。</p>\r\n            <span class=\"code-box-description-title\">获取选择上传列表</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.third.show\"\r\n              (click)=\"codeBox.third.show=!codeBox.third.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.third.show\">\r\n            <pre><code [highlight]=\"codeBox.third.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <nz-select [(ngModel)]=\"codeBox.fifth.type\" style=\"width: 120px\" nzAllowClear>\r\n              <nz-option nzLabel=\"image/jpeg\" nzValue=\"image/jpeg\"></nz-option>\r\n              <nz-option nzLabel=\"image/png\" nzValue=\"image/png\"></nz-option>\r\n            </nz-select>\r\n            <br><br>\r\n            <storage-input-number [(storageValue)]=\"codeBox.fifth.size\"></storage-input-number>KB\r\n            <br><br>\r\n            <storage-upload [storageType]=\"codeBox.fifth.type\" [storageSize]=\"codeBox.fifth.size\"></storage-upload>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>设置<code class=\"code\">storageType</code>，可以约束选择上传文件的类型，不传默认所有类型。</p>\r\n            <p>设置<code class=\"code\">storageSize</code>，可以约束选择上传文件的大小，单位为<code class=\"code\">KB</code>。</p>\r\n            <span class=\"code-box-description-title\">类型与大小</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.fifth.show\"\r\n              (click)=\"codeBox.fifth.show=!codeBox.fifth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.fifth.show\">\r\n            <pre><code [highlight]=\"codeBox.fifth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-upload [storageTemplate]=\"customUploadTemplate\" (storageLastFileChange)=\"singleUpload($event)\">\r\n              <ng-template #customUploadTemplate>\r\n                <div id=\"customUploadTemplate\">+</div>\r\n              </ng-template>\r\n            </storage-upload>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>自定义上传组件样式，传入<code class=\"code\">storageTemplate</code>。</p>\r\n            <span class=\"code-box-description-title\">自定义样式</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.second.show\"\r\n              (click)=\"codeBox.second.show=!codeBox.second.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.second.show\">\r\n            <pre><code [highlight]=\"codeBox.second.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n        <div class=\"code-box\">\r\n          <div class=\"code-box-demo\">\r\n            <storage-input-number [(storageValue)]=\"codeBox.forth.number\"></storage-input-number>\r\n            <br><br>\r\n            <storage-upload\r\n              [(storageFileList)]=\"codeBox.forth.value\"\r\n              [storageLimited]=\"codeBox.forth.number\"\r\n              storageMultiple\r\n            ></storage-upload>\r\n            <ul style=\"margin-top: 20px;list-style: circle\">\r\n              <li style=\"margin: 10px 0;\" *ngFor=\"let item of codeBox.forth.value;let index=index\">\r\n                <span>{{item.name}}</span>\r\n                <span style=\"float: right;cursor: pointer\" (click)=\"codeBox.forth.value.splice(index,1)\">\r\n                  <i nz-icon type=\"close\" theme=\"outline\"></i>\r\n                </span>\r\n              </li>\r\n            </ul>\r\n            <button storage-button storageType=\"primary\" (click)=\"multipleUpload(codeBox.forth.value)\">上传</button>\r\n          </div>\r\n          <div class=\"code-box-description\">\r\n            <p>设置<code class=\"code\">storageMultiple</code>，按住<code class=\"code\">CTRL</code>键可以多选上传。</p>\r\n            <p>设置<code class=\"code\">storageLimited</code>，可以限制上传文件的数量。</p>\r\n            <span class=\"code-box-description-title\">多选及限制数量</span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Hide Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\">\r\n            </span>\r\n            <span\r\n              nz-tooltip\r\n              [nzTitle]=\"'Show Code'\"\r\n              class=\"code-box-description-icon\"\r\n              *ngIf=\"!codeBox.forth.show\"\r\n              (click)=\"codeBox.forth.show=!codeBox.forth.show\"\r\n            >\r\n              <img alt=\"expand code\"\r\n                   src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\">\r\n            </span>\r\n          </div>\r\n          <div class=\"code-box-code\" [hidden]=\"!codeBox.forth.show\">\r\n            <pre><code [highlight]=\"codeBox.forth.source\"></code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </article>\r\n  <article>\r\n    <h2 id=\"api\">API</h2>\r\n    <p><span class=\"api-title\">storage-upload</span><span class=\"api-default component\">Component</span></p>\r\n    <nz-table\r\n      #nzTable\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>属性</th>\r\n        <th>说明</th>\r\n        <th>类型</th>\r\n        <th>默认值</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td><code class=\"code\">{{item.name}}</code></td>\r\n        <td [innerHTML]=\"item.description\"></td>\r\n        <td><span class=\"table-type\">{{item.type}}</span></td>\r\n        <td>{{item.default}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/upload/upload.component.less":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/upload/upload.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.upload article {\n  margin: 40px 0;\n}\n#customUploadTemplate {\n  width: 200px;\n  height: 200px;\n  border-radius: 10px;\n  background: white;\n  text-align: center;\n  line-height: 200px;\n  font-size: 90px;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91cGxvYWQvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKO0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICBhcnRpY2xlIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgfVxufVxuXG4jY3VzdG9tVXBsb2FkVGVtcGxhdGUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgZm9udC1zaXplOiA5MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuIiwiLnVwbG9hZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4udXBsb2FkIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbiNjdXN0b21VcGxvYWRUZW1wbGF0ZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xuICBmb250LXNpemU6IDkwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/components/upload/upload.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/upload/upload.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ "./src/app/pages/components/upload/upload.service.ts");



// import {StorageUploadFile} from '../../../../component/upload/storage-upload-file';
var UploadComponent = /** @class */ (function () {
    function UploadComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.codeBox = {
            first: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n      import { StorageUploadFile } from 'bang-storage-ui';\n      import {Injectable} from '@angular/core';\n      import {HttpClient} from '@angular/common/http';\n      import {Observable} from 'rxjs';\n\n      @Component({\n        selector: 'storage-upload-demo',\n        template: `\n                    <storage-upload (storageLastFileChange)=\"beforeUpload($event)\"></storage-upload>\n                  `,\n        providers: [UploadService]\n      })\n\n      export class StorageUploadDemoComponent{\n\n        constructor(\n                    private _uploadService: UploadService\n                   ){\n        }\n\n        upload(e: StorageUploadFile): void{\n          const form = new FormData();\n          form.append('file', e);\n          this._uploadService.upload(form).subscribe(result => {\n          });\n        }\n      }\n\n      @Injectable()\n\n      export class UploadService{\n\n        constructor(\n                    private _http: HttpClient\n                   ){\n        }\n\n        upload(value: any): Observable<any> {\n          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);\n        }\n      }\n      "
            },
            second: {
                show: false,
                source: "\n      import { Component } from '@angular/core';\n      import { StorageUploadFile } from 'bang-storage-ui';\n      import {Injectable} from '@angular/core';\n      import {HttpClient} from '@angular/common/http';\n      import {Observable} from 'rxjs';\n\n      @Component({\n        selector: 'storage-upload-demo',\n        template: `\n                    <storage-upload [storageTemplate]=\"customUploadTemplate\" (storageLastFileChange)=\"beforeUpload($event)\">\n                      <ng-template #customUploadTemplate>\n                        <div id=\"customUploadTemplate\">+</div>\n                      </ng-template>\n                    </storage-upload>\n                  `,\n        providers: [UploadService],\n        styles:[`\n                  #customUploadTemplate {\n                    width: 200px;\n                    height: 200px;\n                    border-radius: 10px;\n                    background: white;\n                    text-align: center;\n                    line-height: 200px;\n                    font-size: 90px;\n                    font-weight: bold;\n                    cursor: pointer;\n                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);\n                  }\n                `]\n      })\n\n      export class StorageUploadDemoComponent{\n\n        constructor(\n                    private _uploadService: UploadService\n                   ){\n        }\n\n        upload(e: StorageUploadFile): void{\n          const form = new FormData();\n          form.append('file', e);\n          this._uploadService.upload(form).subscribe(result => {\n          });\n        }\n      }\n\n      @Injectable()\n\n      export class UploadService{\n\n        constructor(\n                    private _http: HttpClient\n                   ){\n        }\n\n        upload(value: any): Observable<any> {\n          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);\n        }\n      }"
            },
            third: {
                show: false,
                value: [],
                source: "\n      import {Component} from '@angular/core';\n      import {StorageUploadFile} from 'bang-storage-ui';\n      import {Injectable} from '@angular/core';\n      import {HttpClient} from '@angular/common/http';\n      import {Observable} from 'rxjs';\n\n      @Component({\n        selector: 'storage-upload-demo',\n        template: `\n                    <storage-upload [(storageFileList)]=\"fileList\"></storage-upload>\n                    <ul style=\"margin-top: 20px;list-style: circle\">\n                      <li style=\"margin: 10px 0;\" *ngFor=\"let item of fileList;let index=index\">\n                        <span>{{item.name}}</span>\n                        <span style=\"float: right;cursor: pointer\" (click)=\"fileList.splice(index,1)\">\n                          <i nz-icon type=\"close\" theme=\"outline\"></i>\n                        </span>\n                      </li>\n                    </ul>\n                    <button storage-button storageType=\"primary\" (click)=\"upload()\">\u4E0A\u4F20</button>\n                  `,\n        providers: [UploadService]\n      })\n\n      export class StorageUploadDemoComponent{\n\n        fileList: Array<StorageUploadFile> = [];\n\n        constructor(\n                    private _uploadService: UploadService\n                   ){\n        }\n\n        upload(): void{\n          const form = new FormData();\n          fileList.forEach((item,index) => {\n            form.append('file' + index, item);\n          });\n          this._uploadService.upload(form).subscribe(result => {\n          });\n        }\n      }\n\n      @Injectable()\n\n      export class UploadService{\n\n        constructor(\n                    private _http: HttpClient\n                   ){\n        }\n\n        upload(value: any): Observable<any> {\n          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);\n        }\n      }"
            },
            forth: {
                show: false,
                number: 2,
                value: [],
                source: "\n      import {Component} from '@angular/core';\n      import {StorageUploadFile} from 'bang-storage-ui';\n      import {Injectable} from '@angular/core';\n      import {HttpClient} from '@angular/common/http';\n      import {Observable} from 'rxjs';\n\n      @Component({\n        selector: 'storage-upload-demo',\n        template: `\n                    <storage-input-number [(storageValue)]=\"limited\"></storage-input-number>\n                    <br><br>\n                    <storage-upload [(storageFileList)]=\"fileList\" storageMultiple [storageLimited]=\"limited\"></storage-upload>\n                    <ul style=\"margin-top: 20px;list-style: circle\">\n                      <li style=\"margin: 10px 0;\" *ngFor=\"let item of fileList;let index=index\">\n                        <span>{{item.name}}</span>\n                        <span style=\"float: right;cursor: pointer\" (click)=\"fileList.splice(index,1)\">\n                          <i nz-icon type=\"close\" theme=\"outline\"></i>\n                        </span>\n                      </li>\n                    </ul>\n                    <button storage-button storageType=\"primary\" (click)=\"upload()\">\u4E0A\u4F20</button>\n                  `,\n        providers: [UploadService]\n      })\n\n      export class StorageUploadDemoComponent{\n\n        limited = 2;\n        fileList: Array<StorageUploadFile> = [];\n\n        constructor(\n                    private _uploadService: UploadService\n                   ){\n        }\n\n        upload(): void{\n          const form = new FormData();\n          fileList.forEach((item,index) => {\n            form.append('file' + index, item);\n          });\n          this._uploadService.upload(form).subscribe(result => {\n          });\n        }\n      }\n\n      @Injectable()\n\n      export class UploadService{\n\n        constructor(\n                    private _http: HttpClient\n                   ){\n        }\n\n        upload(value: any): Observable<any> {\n          return this._http.post('https://jsonplaceholder.typicode.com/posts', value);\n        }\n      }"
            },
            fifth: {
                show: false,
                type: null,
                size: 1024,
                source: "\n      import {Component} from '@angular/core';\n      import {StorageUploadType} from 'bang-storage-ui';\n\n      @Component({\n        selector: 'storage-upload-demo',\n        template: `\n                    <nz-select [(ngModel)]=\"type\" style=\"width: 120px\" nzAllowClear>\n                      <nz-option nzLabel=\"image/jpeg\" nzValue=\"image/jpeg\"></nz-option>\n                      <nz-option nzLabel=\"image/png\" nzValue=\"image/png\"></nz-option>\n                    </nz-select>\n                    <br><br>\n                    <storage-input-number [(storageValue)]=\"size\"></storage-input-number>KB\n                    <br><br>\n                    <storage-upload [storageType]=\"type\" [storageSize]=\"size\"></storage-upload>\n                  `\n      })\n\n      export class StorageUploadDemoComponent{\n        type: StorageUploadType = null;\n        size = 1024;\n      }\n      "
            }
        };
        this.tableData = [
            { name: '[storageTemplate]', description: '自定义上传按钮', type: 'TemplateRef<void>', default: '-' },
            { name: '[storageFileList]', description: '已选择上传文件列表，可双向绑定', type: 'Array<StorageUploadFile>', default: '[]' },
            { name: '[storageMultiple]', description: '是否支持多选,开启后按住ctrl可选择多个文件', type: 'boolean', default: 'false' },
            { name: '[storageDisabled]', description: '禁用上传按钮', type: 'boolean', default: 'false' },
            { name: '[storageLimited]', description: '限制上传文件的数量', type: 'number', default: '-' },
            { name: '[storageSize]', description: '限制上传文件的大小，单位为KB', type: 'number', default: '0' },
            { name: '[storageType]', description: '限制上传文件的类型，不填为任意类型，可选类型为：image/jpeg、image/png、image/gif、image/bmp', type: 'StorageUploadType', default: '-' },
            { name: '(storageFileListChange)', description: '上传文件列表发生改变', type: 'EventEmitter', default: '-' },
            { name: '(storageLastFileChange)', description: '当前选择上传的文件发生改变，单选有效', type: 'EventEmitter', default: '-' }
        ];
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.singleUpload = function (e) {
        var form = new FormData();
        form.append('file', e);
        this._uploadService.upload(form).subscribe(function (result) {
        });
    };
    UploadComponent.prototype.multipleUpload = function (e) {
        var form = new FormData();
        e.forEach(function (item, index) {
            form.append("file" + index, item);
        });
        this._uploadService.upload(form).subscribe(function (result) {
        });
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/pages/components/upload/upload.component.html"),
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]],
            styles: [__webpack_require__(/*! ./upload.component.less */ "./src/app/pages/components/upload/upload.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/upload/upload.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/upload/upload.module.ts ***!
  \**********************************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ "./src/app/pages/components/upload/upload.component.ts");
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-routing.module */ "./src/app/pages/components/upload/upload-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/share.module */ "./src/app/share/share.module.ts");






var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _upload_routing_module__WEBPACK_IMPORTED_MODULE_4__["UploadRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/pages/components/upload/upload.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/upload/upload.service.ts ***!
  \***********************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UploadService = /** @class */ (function () {
    function UploadService(_http) {
        this._http = _http;
    }
    UploadService.prototype.upload = function (value) {
        return this._http.post('https://jsonplaceholder.typicode.com/posts', value);
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map