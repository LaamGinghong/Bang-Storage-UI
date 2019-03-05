(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./anchor/anchor.module": [
		"./src/app/pages/components/anchor/anchor.module.ts",
		"anchor-anchor-module"
	],
	"./back-top/back-top.module": [
		"./src/app/pages/components/back-top/back-top.module.ts",
		"back-top-back-top-module"
	],
	"./button/button.module": [
		"./src/app/pages/components/button/button.module.ts",
		"button-button-module"
	],
	"./carousel/carousel.module": [
		"./src/app/pages/components/carousel/carousel.module.ts",
		"carousel-carousel-module"
	],
	"./charts/charts.module": [
		"./src/app/pages/components/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"components-components-module"
	],
	"./home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"home-home-module"
	],
	"./input-number/input-number.module": [
		"./src/app/pages/components/input-number/input-number.module.ts",
		"input-number-input-number-module"
	],
	"./modal/modal.module": [
		"./src/app/pages/components/modal/modal.module.ts",
		"modal-modal-module"
	],
	"./recommend/recommend.module": [
		"./src/app/pages/recommend/recommend.module.ts",
		"recommend-recommend-module"
	],
	"./select/select.module": [
		"./src/app/pages/components/select/select.module.ts",
		"select-select-module"
	],
	"./upload/upload.module": [
		"./src/app/pages/components/upload/upload.module.ts",
		"upload-upload-module"
	],
	"./using/using.module": [
		"./src/app/pages/using/using.module.ts",
		"using-using-module"
	],
	"./zoom/zoom.module": [
		"./src/app/pages/components/zoom/zoom.module.ts",
		"zoom-zoom-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var routes = [{
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/lib/languages/less */ "./node_modules/highlight.js/lib/languages/less.js");
/* harmony import */ var highlight_js_lib_languages_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12__);













Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default.a);
function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12___default.a },
        { name: 'less', func: highlight_js_lib_languages_less__WEBPACK_IMPORTED_MODULE_11___default.a },
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
                _share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: PagesMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesMenu", function() { return PagesMenu; });
var PagesMenu = [{
        name: 'Bang Storage UI of Angular',
        route: 'home',
        children: [],
        selected: false
    }, {
        name: '快速上手',
        route: 'using',
        children: [],
        selected: false
    }, {
        name: '社区推荐',
        route: 'recommend',
        children: [],
        selected: false
    }, {
        name: 'Components',
        route: 'components',
        children: [{
                name: 'Button 按钮',
                route: 'button',
                selected: false
            }, {
                name: 'InputNumber 数字输入框',
                route: 'inputNumber',
                selected: false
            }, {
                name: 'modal 模态框',
                route: 'modal',
                selected: false
            }, {
                name: 'zoom 放大缩小',
                route: 'zoom',
                selected: false
            }, {
                name: 'charts 图表',
                route: 'charts',
                selected: false
            }, {
                name: 'BackTop 返回顶部',
                route: 'backTop',
                selected: false
            }, {
                name: 'Upload 上传',
                route: 'upload',
                selected: false
            }, {
                name: 'Anchor 锚点',
                route: 'anchor',
                selected: false
            }, {
                name: 'Carousel 走马灯',
                route: 'carousel',
                selected: false
            }, {
                name: 'Select 选择器',
                route: 'select',
                selected: false
            }]
    }];


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var routes = [{
        path: 'pages',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [{
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }, {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }, {
                path: 'using',
                loadChildren: './using/using.module#UsingModule'
            }, {
                path: 'recommend',
                loadChildren: './recommend/recommend.module#RecommendModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }]
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"body\">\r\n  <nz-header>\r\n    <div class=\"logo\">\r\n      <img src=\"/assets/img/logo.png\" alt=\"bang_storage_ui\">\r\n    </div>\r\n  </nz-header>\r\n  <nz-layout class=\"container\" [style.height]=\"isBackTop?'auto':'calc(100vh - 64px)'\">\r\n    <nz-sider [nzWidth]=\"320\">\r\n      <ul nz-menu [nzMode]=\"'inline'\">\r\n        <ng-template ngFor [ngForOf]=\"menu\" let-item let-index=\"index\">\r\n          <li\r\n            nz-menu-item\r\n            *ngIf=\"!item.children.length\"\r\n            [nzSelected]=\"item.selected\"\r\n            (click)=\"changePage(item.name,item.route)\"\r\n          >{{item.name}}</li>\r\n          <li nz-submenu *ngIf=\"item.children.length\" [nzOpen]=\"true\">\r\n            <span title style=\"font-weight: bold\">{{item.name}}</span>\r\n            <ul>\r\n              <li\r\n                nz-menu-item\r\n                *ngFor=\"let i of item.children\"\r\n                [nzSelected]=\"i.selected\"\r\n                (click)=\"changePage(i.name,i.route,item.route)\"\r\n              >{{i.name}}</li>\r\n            </ul>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </nz-sider>\r\n    <nz-layout class=\"content\">\r\n      <nz-content>\r\n        <router-outlet></router-outlet>\r\n      </nz-content>\r\n    </nz-layout>\r\n  </nz-layout>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.less":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body nz-header {\n  background: #fff;\n  position: relative;\n  box-shadow: 0 2px 8px #f0f1f2;\n}\n.body nz-header .logo {\n  width: 64px;\n  display: inline-block;\n}\n.body nz-header .logo img {\n  width: 100%;\n  vertical-align: top;\n}\n.body .container {\n  background: #fff;\n  padding: 20px 0;\n}\n.body .container nz-sider ul {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.body .container .content nz-content {\n  height: 100%;\n  background: #fff;\n  padding: 10px 0 10px 30px;\n  overflow-y: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDovcHJvamVjdHMvQmFuZy1TdG9yYWdlLVVJL3NyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQUo7QURKQTtFQU9NLFdBQUE7RUFDQSxxQkFBQTtBQ0FOO0FEUkE7RUFXUSxXQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRFpBO0VBa0JJLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FEaEJBO0VBdUJRLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURyQkE7RUErQlEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIG56LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4ICNmMGYxZjI7XG5cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogNjRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICBuei1zaWRlciB7XG4gICAgICB1bCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIG56LWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDMwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5ib2R5IG56LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4ICNmMGYxZjI7XG59XG4uYm9keSBuei1oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogNjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJvZHkgbnotaGVhZGVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmJvZHkgLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5ib2R5IC5jb250YWluZXIgbnotc2lkZXIgdWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5ib2R5IC5jb250YWluZXIgLmNvbnRlbnQgbnotY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMzBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var PagesComponent = /** @class */ (function () {
    function PagesComponent(_router, _title) {
        this._router = _router;
        this._title = _title;
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_2__["PagesMenu"];
        this.isBackTop = false;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var urls = this._router.url.split('/');
        urls.shift();
        if (urls.length === 2) {
            this.menu.forEach(function (item) {
                item.selected = item.route === urls[urls.length - 1];
            });
        }
        else {
            this.isBackTop = urls[2] === 'backTop';
            var array = this.menu[3].children;
            array.forEach(function (item) {
                item.selected = item.route === urls[2];
            });
        }
    };
    PagesComponent.prototype.changePage = function (name, route, parentRoute) {
        var _this = this;
        this._router.navigateByUrl("pages/" + (parentRoute ? parentRoute + "/" + route : "" + route)).then(function (value) {
            if (value) {
                _this.isBackTop = route === 'backTop';
                _this._title.setTitle(name);
            }
        });
    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.less */ "./src/app/pages/pages.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var bang_storage_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bang-storage-ui */ "./node_modules/bang-storage-ui/fesm5/bang-storage-ui.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");






// import {BangStorageUiModule} from '../../../projects/bang-storage-ui/src/lib/bang-storage-ui.module';


var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                bang_storage_ui__WEBPACK_IMPORTED_MODULE_6__["BangStorageUiModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["zh_CN"] }],
            exports: [
                bang_storage_ui__WEBPACK_IMPORTED_MODULE_6__["BangStorageUiModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Bang-Storage-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map