(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommend-recommend-module"],{

/***/ "./src/app/pages/recommend/recommend-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/recommend/recommend-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RecommendRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendRoutingModule", function() { return RecommendRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recommend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommend.component */ "./src/app/pages/recommend/recommend.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _recommend_component__WEBPACK_IMPORTED_MODULE_2__["RecommendComponent"]
    }];
var RecommendRoutingModule = /** @class */ (function () {
    function RecommendRoutingModule() {
    }
    RecommendRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecommendRoutingModule);
    return RecommendRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/recommend/recommend.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/recommend/recommend.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recommend\">\r\n  <h1>社区推荐</h1>\r\n  <p><code class=\"code\">Bang Storage UI</code>是<code class=\"code\">NG-ZORRO</code>的二次封装，我们推荐使用以下社区已有的优秀实现和网站，希望能为你的开发过程提供帮助。</p>\r\n  <article class=\"tool\">\r\n    <h2>工具及解决方案</h2>\r\n    <nz-table\r\n      #nzTable\r\n      [nzBordered]=\"true\"\r\n      [nzData]=\"tableData\"\r\n      [nzFrontPagination]=\"false\"\r\n      [nzShowPagination]=\"false\"\r\n      [nzShowQuickJumper]=\"false\"\r\n      [nzShowSizeChanger]=\"false\"\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>类型</th>\r\n        <th>名称</th>\r\n        <th>描述</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of nzTable.data\">\r\n        <td>{{item.type}}</td>\r\n        <td><a [href]=\"item.link\">{{item.name}}</a></td>\r\n        <td>{{item.description}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </article>\r\n  <article class=\"website\">\r\n    <h2>博客及网站</h2>\r\n    <ul>\r\n      <li><a href=\"https://angular.cn/\" target=\"_blank\">Angular中文官网</a></li>\r\n      <li><a href=\"https://segmentfault.com/a/1190000008754631#articleHeader0\" target=\"_blank\">Angular 4.x 修仙之路</a></li>\r\n      <li><a href=\"https://ithelp.ithome.com.tw/users/20103367/ironman/1199\" target=\"_blank\">30天精通RxJS系列（需翻墙）</a></li>\r\n      <li><a href=\"https://github.com/RxJS-CN\" target=\"_blank\">RxJS中文社区</a></li>\r\n      <li><a href=\"https://material.angular.cn/\" target=\"_blank\">Material Design of Angular</a></li>\r\n      <li><a href=\"https://segmentfault.com/a/1190000016298495\" target=\"_blank\">使用Angular-CLI构建自己的NPM包</a></li>\r\n    </ul>\r\n  </article>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/recommend/recommend.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/recommend/recommend.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recommend {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.recommend article {\n  margin: 40px 0;\n}\n.recommend article.website ul {\n  padding: 0;\n  list-style: circle;\n}\n.recommend article.website ul li {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  padding-left: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjb21tZW5kL0Q6L0JhbmctU3RvcmFnZS1VSS9zcmMvYXBwL3BhZ2VzL3JlY29tbWVuZC9yZWNvbW1lbmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3JlY29tbWVuZC9yZWNvbW1lbmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRExBO0VBT0ksY0FBQTtBQ0NKO0FEQ0k7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREhJO0VBTU0saUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQVYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNvbW1lbmQvcmVjb21tZW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29tbWVuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG5cbiAgICAmLndlYnNpdGUge1xuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLnJlY29tbWVuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ucmVjb21tZW5kIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5yZWNvbW1lbmQgYXJ0aWNsZS53ZWJzaXRlIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xufVxuLnJlY29tbWVuZCBhcnRpY2xlLndlYnNpdGUgdWwgbGkge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/recommend/recommend.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/recommend/recommend.component.ts ***!
  \********************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecommendComponent = /** @class */ (function () {
    function RecommendComponent() {
        this.tableData = [{
                type: '可视化',
                name: 'NG ZORRO',
                link: 'https://ng.ant.design/docs/introduce/zh',
                description: 'Ant Design 设计规范的 Angular 实现'
            }, {
                type: '可视化',
                name: 'echarts',
                link: 'https://echarts.baidu.com/',
                description: '百度开源的可视化图表库'
            }, {
                type: '脚手架',
                name: 'Angular CLI',
                link: 'https://cli.angular.io/',
                description: 'Angular 的官方脚手架'
            }, {
                type: '调试工具',
                name: 'Angular Anguary',
                link: 'https://github.com/rangle/augury',
                description: 'Angular Chrome 调试工具'
            }];
    }
    RecommendComponent.prototype.ngOnInit = function () {
    };
    RecommendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommend',
            template: __webpack_require__(/*! ./recommend.component.html */ "./src/app/pages/recommend/recommend.component.html"),
            styles: [__webpack_require__(/*! ./recommend.component.less */ "./src/app/pages/recommend/recommend.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/app/pages/recommend/recommend.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/recommend/recommend.module.ts ***!
  \*****************************************************/
/*! exports provided: RecommendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendModule", function() { return RecommendModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recommend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommend.component */ "./src/app/pages/recommend/recommend.component.ts");
/* harmony import */ var _recommend_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommend-routing.module */ "./src/app/pages/recommend/recommend-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");






var RecommendModule = /** @class */ (function () {
    function RecommendModule() {
    }
    RecommendModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_recommend_component__WEBPACK_IMPORTED_MODULE_3__["RecommendComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _recommend_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], RecommendModule);
    return RecommendModule;
}());



/***/ })

}]);
//# sourceMappingURL=recommend-recommend-module.js.map