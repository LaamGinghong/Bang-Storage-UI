(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["using-using-module"],{

/***/ "./src/app/pages/using/using-rouging.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/using/using-rouging.module.ts ***!
  \*****************************************************/
/*! exports provided: UsingRougingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingRougingModule", function() { return UsingRougingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _using_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./using.component */ "./src/app/pages/using/using.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: '',
        component: _using_component__WEBPACK_IMPORTED_MODULE_2__["UsingComponent"]
    }];
var UsingRougingModule = /** @class */ (function () {
    function UsingRougingModule() {
    }
    UsingRougingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsingRougingModule);
    return UsingRougingModule;
}());



/***/ }),

/***/ "./src/app/pages/using/using.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/using/using.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"using\">\r\n  <h1>快速上手</h1>\r\n  <p>Bang Storage UI 致力于为棒谷前端开发工程师提供愉悦的开发体验。</p>\r\n  <blockquote>\r\n    <p>\r\n      官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Angular 及配套设施的正确开发方式。\r\n      如果你刚开始学习前端或者 Angular ，将框架作为你的第一步可能不是最好的主意 —— 掌握好基础知识再来吧！\r\n    </p>\r\n  </blockquote>\r\n  <blockquote>\r\n    <p>\r\n      <a href=\"https://github.com/NG-ZORRO/today-ng-steps\" target=\"_blank\">我们为你准备了一套教程</a>，能够帮助你快速上手Bang Storage UI。\r\n    </p>\r\n  </blockquote>\r\n  <article class=\"powerpoint\">\r\n    <h2>在线演示</h2>\r\n    <p>\r\n      最简单的使用方式参照StackBlitz演示，也推荐Fork本例来进行<code class=\"code\">Bug Report</code>，注意不要在实际项目中这样使用。\r\n    </p>\r\n    <ul>\r\n      <li><a href=\"https://stackblitz.com/edit/bang-storage-ui\" target=\"_blank\">Bang Storage UI StackBlitz</a></li>\r\n    </ul>\r\n  </article>\r\n  <article class=\"example\">\r\n    <h2>第一个在线实例</h2>\r\n    <p>\r\n      实际项目开发中，你会需要对 TypeScript 代码的构建、调试、代理、打包部署等一系列工程化的需求。\r\n      我们强烈建议使用官方的<code class=\"code\">@angular/cli</code>工具链辅助进行开发。与此同时，我们强烈建议你使用<code class=\"code\">Yarn</code>作为你的包管理器，\r\n      因此我们的例子都将使用<code class=\"code\">Yarn</code>。下面我们用一个简单的例子来说明。\r\n    </p>\r\n    <div>\r\n      <h3>1.安装脚手架工具</h3>\r\n      <blockquote style=\"border-color: #ebedf0\">\r\n        <p>\r\n          使用<code class=\"code\">@angular/cli</code>前，务必确认<a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a>已经升级到v11.0或以上，强烈建议升级至最新版本的<code class=\"code\">@angular/cli</code>。\r\n          如果你想了解更多CLI工具链的功能和命令，建议访问<a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">Angular CLI</a>了解更多。\r\n        </p>\r\n      </blockquote>\r\n      <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">yarn </span>global add <span class=\"function\">@angular/cli</span>\r\n    </code>\r\n  </pre>\r\n    </div>\r\n    <div>\r\n      <h3>2.创建一个项目</h3>\r\n      <blockquote style=\"border-color: #ebedf0\">\r\n        <p>在创建项目之前，请确保<code class=\"code\">@angular/cli</code>已被成功安装。</p>\r\n      </blockquote>\r\n      <p>执行以下命令，<code class=\"code\">@angular/cli</code>会在当前目录下创建一个名为PROJECT_NAME的文件夹，并自动安装好依赖。</p>\r\n      <pre>\r\n      <code class=\"code\">\r\n      $ <span class=\"function\">ng</span> new PROJECT_NAME\r\n      </code>\r\n    </pre>\r\n    </div>\r\n    <div>\r\n      <h3>3.初始化配置</h3>\r\n      <p>进入项目文件夹，执行以下命令引入<code class=\"code\">Bang Storage UI</code>。</p>\r\n      <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">yarn</span> add <span class=\"function\">bang-storage-ui</span>\r\n    </code>\r\n    </pre>\r\n    </div>\r\n    <div>\r\n      <h3>4.引入<code class=\"code\">NG-ZORRO</code>和<code class=\"code\">echarts</code></h3>\r\n      <p>由于<code class=\"code\">Bang Storage UI</code>是基于<code class=\"code\">NG-ZORRO</code>的二次封装，因此你需要执行以下命令。</p>\r\n      <pre>\r\n    <code class=\"code\">\r\n    在根模块中\r\n    import {{'{NgZorroAntdModule, NZ_I18N, zh_CN}'}} from 'ng-zorro-antd';\r\n    import {{'{BangStorageUIModule}'}} from 'bang-storage-ui';\r\n\r\n    @NgModule({{'{'}}\r\n      imports:[BangStorageUIModule,NgZorroAntdModule],\r\n     providers: [{{'{provide: NZ_I18N, useValue: zh_CN}'}}]\r\n      {{'}'}})\r\n\r\n    export class AppModule{{'{'}}\r\n      {{'}'}}\r\n\r\n      在angular.json中\r\n      {{'{'}}\r\n      \"projects\":{{'{'}}\r\n      \"PROJECT_NAME\":{{'{'}}\r\n      \"architect\":{{'{'}}\r\n      \"build\":{{'{'}}\r\n      \"options\":{{'{'}}\r\n      \"assets\":[\r\n             \"src/favicon.ico\",\r\n             \"src/assets\",\r\n      {{'{'}}\r\n      \"glob\": \"**/*\",\r\n                 \"input\": \"./node_modules/@ant-design/icons-angular/src/inline-svg/\",\r\n                 \"output\": \"/assets/\"\r\n      {{'}'}}\r\n      ],\r\n             \"scripts\": [\r\n               \"./node_modules/echarts/dist/echarts.js\"\r\n             ]\r\n      {{'}'}}\r\n      {{'}'}}\r\n      {{'}'}}\r\n      {{'}'}}\r\n      {{'}'}}\r\n    </code>\r\n    </pre>\r\n    </div>\r\n    <div>\r\n      <h3>5.开发调试</h3>\r\n      <p>一键启动调试，运行成功后进入页面。</p>\r\n      <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">yarn</span> start -o\r\n    </code>\r\n    </pre>\r\n    </div>\r\n    <div>\r\n      <h3>6.构建和部署</h3>\r\n      <pre>\r\n    <code class=\"code\">\r\n    $ <span class=\"function\">ng</span> build --prod\r\n    </code>\r\n    </pre>\r\n      <p>入口文件会构建到<code class=\"code\">dist</code>目录中，你可以自由部署到不同环境中进行引用。</p>\r\n    </div>\r\n  </article>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/using/using.component.less":
/*!**************************************************!*\
  !*** ./src/app/pages/using/using.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".using {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.using blockquote {\n  font-size: 90%;\n  border-left: 4px solid red;\n  padding-left: 0.8em;\n  margin: 1em 0;\n}\n.using blockquote p {\n  color: #697b8c;\n  font-weight: 500;\n}\n.using article {\n  margin: 40px 0;\n}\n.using article > div {\n  margin: 20px 0;\n}\n.using article.powerpoint ul {\n  padding: 0;\n  list-style: circle;\n}\n.using article.powerpoint ul li {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  padding-left: 4px;\n}\n.using article.example pre {\n  margin: 0;\n}\n.using article.example pre code {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNpbmcvRDovQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvdXNpbmcvdXNpbmcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3VzaW5nL3VzaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURMQTtFQU9JLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEWEE7RUFhTSxjQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRGZBO0VBbUJJLGNBQUE7QUNESjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FESUk7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREFJO0VBTU0saUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSFY7QURRSTtFQUVJLFNBQUE7QUNQUjtBREtJO0VBS00sY0FBQTtBQ1BWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNpbmcvdXNpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNpbmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gIGJsb2NrcXVvdGUge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xuICAgIHBhZGRpbmctbGVmdDogLjhlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogIzY5N2I4YztcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgYXJ0aWNsZSB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuICAgICYucG93ZXJwb2ludCB7XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuZXhhbXBsZSB7XG4gICAgICBwcmUge1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLnVzaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi51c2luZyBibG9ja3F1b3RlIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDAuOGVtO1xuICBtYXJnaW46IDFlbSAwO1xufVxuLnVzaW5nIGJsb2NrcXVvdGUgcCB7XG4gIGNvbG9yOiAjNjk3YjhjO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnVzaW5nIGFydGljbGUge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi51c2luZyBhcnRpY2xlID4gZGl2IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udXNpbmcgYXJ0aWNsZS5wb3dlcnBvaW50IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xufVxuLnVzaW5nIGFydGljbGUucG93ZXJwb2ludCB1bCBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi51c2luZyBhcnRpY2xlLmV4YW1wbGUgcHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuLnVzaW5nIGFydGljbGUuZXhhbXBsZSBwcmUgY29kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/using/using.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/using/using.component.ts ***!
  \************************************************/
/*! exports provided: UsingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingComponent", function() { return UsingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsingComponent = /** @class */ (function () {
    function UsingComponent() {
    }
    UsingComponent.prototype.ngOnInit = function () {
    };
    UsingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-using',
            template: __webpack_require__(/*! ./using.component.html */ "./src/app/pages/using/using.component.html"),
            styles: [__webpack_require__(/*! ./using.component.less */ "./src/app/pages/using/using.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsingComponent);
    return UsingComponent;
}());



/***/ }),

/***/ "./src/app/pages/using/using.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/using/using.module.ts ***!
  \*********************************************/
/*! exports provided: UsingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsingModule", function() { return UsingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _using_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./using.component */ "./src/app/pages/using/using.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _using_rouging_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./using-rouging.module */ "./src/app/pages/using/using-rouging.module.ts");






var UsingModule = /** @class */ (function () {
    function UsingModule() {
    }
    UsingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_using_component__WEBPACK_IMPORTED_MODULE_3__["UsingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                _using_rouging_module__WEBPACK_IMPORTED_MODULE_5__["UsingRougingModule"]
            ]
        })
    ], UsingModule);
    return UsingModule;
}());



/***/ })

}]);
//# sourceMappingURL=using-using-module.js.map