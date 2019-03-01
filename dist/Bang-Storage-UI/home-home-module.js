(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <h1>Bang Storage UI of Angular</h1>\r\n  <p>这里是广州棒谷科技股份有限公司仓储物流组基于NG-ZORRO的组件二次封装。</p>\r\n  <img src=\"../../../assets/img/NG-ZORRO.svg\" alt=\"Angular\" width=\"150\">\r\n  <span class=\"add-icon\">+</span>\r\n  <img src=\"../../../assets/img/echarts.svg\" alt=\"echarts\" width=\"150\">\r\n  <article class=\"special\">\r\n    <h2>特性</h2>\r\n    <ul>\r\n      <li>基于NG-ZORRO的二次封装，与NG-ZORRO兼容。</li>\r\n      <li>开箱即用的高质量Angular组件。</li>\r\n      <li>使用TypeScript构建，提供完整的类型定义文件。</li>\r\n    </ul>\r\n  </article>\r\n  <article class=\"environment\">\r\n    <h2>支持环境</h2>\r\n    <p>现代浏览器和IE11以上（需要<a href=\"https://angular.io/guide/browser-support\" target=\"_blank\">polyfills</a>）。</p>\r\n  </article>\r\n  <article class=\"version\">\r\n    <h2>当前版本</h2>\r\n    <a href=\"https://www.npmjs.com/package/bang-storage-ui\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-7.9.6-brightgreen.svg\" alt=\"npm version\"></a>\r\n  </article>\r\n  <article class=\"version\">\r\n    <h2>支持Angular版本</h2>\r\n    <p>目前支持Angular<code class=\"code\">^7.0.0</code>版本。</p>\r\n  </article>\r\n  <article class=\"install\">\r\n    <h2>安装</h2>\r\n    我们强烈推荐使用官方的<code class=\"code\">@angular/cli</code>工具链辅助进行开发，在实际项目开发中，它可以很好的满足TypeScript代码的构建、调试、代理、打包部署等一系列工程化的需求。\r\n    <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">ng</span> new PROJECT_NAME\r\n    $ <span class=\"function\">cd</span> PROJECT_NAME\r\n    $ <span class=\"function\">ng</span> add <span class=\"function\">ng-zorro-antd</span>\r\n  </code>\r\n  </pre>\r\n    与此同时，我们也强烈推荐使用<code class=\"code\">Yarn</code>来管理你的依赖。如果你不知道如何安装<code class=\"code\">Yarn</code>,请点击\r\n    <a href=\"https://github.com/LaamGinghong/Tips-to-use-yarn\" target=\"_blank\">这里</a>。\r\n    <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">ng</span> set packageManager=yarn\r\n    </code>\r\n  </pre>\r\n  </article>\r\n  <article class=\"link\">\r\n    <h2>链接</h2>\r\n    <ul>\r\n      <li><a href=\"https://angular.cn/\" target=\"_blank\">Angular官方中文文档</a></li>\r\n      <li><a href=\"https://ng.ant.design/docs/introduce/zh\" target=\"_blank\">NG ZORRO中文文档</a></li>\r\n      <li><a href=\"https://echarts.baidu.com/\" target=\"_blank\">ECHARTS中文文档</a></li>\r\n    </ul>\r\n  </article>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.less":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.home .add-icon {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n  display: inline-block;\n}\n.home article {\n  margin: 40px 0;\n}\n.home article.special ul,\n.home article.link ul {\n  padding: 0;\n  list-style: circle;\n}\n.home article.special ul li,\n.home article.link ul li {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  padding-left: 4px;\n}\n.home article.install pre code {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOi9wcm9qZWN0cy9CYW5nLVN0b3JhZ2UtVUkvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FETEE7RUFPSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEWEE7RUFlSSxjQUFBO0FDREo7QURHSTs7RUFHSSxVQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREZJOztFQU9NLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RWO0FETUk7RUFHTSxjQUFBO0FDTlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgLmFkZC1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cblxuICBhcnRpY2xlIHtcbiAgICBtYXJnaW46IDQwcHggMDtcblxuICAgICYuc3BlY2lhbCwgJi5saW5rIHtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmluc3RhbGwge1xuICAgICAgcHJlIHtcbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5ob21lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5ob21lIC5hZGQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaG9tZSBhcnRpY2xlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4uaG9tZSBhcnRpY2xlLnNwZWNpYWwgdWwsXG4uaG9tZSBhcnRpY2xlLmxpbmsgdWwge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBjaXJjbGU7XG59XG4uaG9tZSBhcnRpY2xlLnNwZWNpYWwgdWwgbGksXG4uaG9tZSBhcnRpY2xlLmxpbmsgdWwgbGkge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4uaG9tZSBhcnRpY2xlLmluc3RhbGwgcHJlIGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/pages/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map