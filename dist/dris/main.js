(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/visualize/visualize.component */ "./src/app/core/visualize/visualize.component.ts");
/* harmony import */ var _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/visualize/template/template.component */ "./src/app/core/visualize/template/template.component.ts");








//import { LoginComponent } from './core/auth/login/login.component';
var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'new', component: _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"] },
    { path: 'visualize', component: _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_6__["VisualizeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!-- Pages -->\n\n<!-- \n<app-nav></app-nav>\n    Navbar implemented in micro modules. Not necessary here.\n    Enable only if menu is required everywhere.\n-->\n\n<!-- Page render starts\n<router-outlet></router-outlet>-->\n<div [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n<!-- Page render ends -->\n\n<!-- TODO: Footer -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'DRIS';
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.auth.renewTokens();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_route_animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]] // Page transition animation
            ,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _partials_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/nav/nav.component */ "./src/app/partials/nav/nav.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/visualize/visualize.component */ "./src/app/core/visualize/visualize.component.ts");
/* harmony import */ var _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/auth/login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/visualize/template/template.component */ "./src/app/core/visualize/template/template.component.ts");
/* harmony import */ var _core_visualize_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/visualize/template/sidebar/sidebar.component */ "./src/app/core/visualize/template/sidebar/sidebar.component.ts");
/* harmony import */ var _core_visualize_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/visualize/chart/chart.component */ "./src/app/core/visualize/chart/chart.component.ts");
/* harmony import */ var _core_visualize_template_prevchart_prevchart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/visualize/template/prevchart/prevchart.component */ "./src/app/core/visualize/template/prevchart/prevchart.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");











// Authentication service






// Charting service

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _partials_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_10__["VisualizeComponent"],
                _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_13__["TemplateComponent"],
                _core_visualize_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _core_visualize_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__["ChartComponent"],
                _core_visualize_template_prevchart_prevchart_component__WEBPACK_IMPORTED_MODULE_16__["PrevchartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_17__["GoogleChartsModule"],
            ],
            providers: [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_11__["AuthServService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-serv.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/auth/auth-serv.service.ts ***!
  \************************************************/
/*! exports provided: AuthServService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServService", function() { return AuthServService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




var AuthServService = /** @class */ (function () {
    function AuthServService(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: 'rsRf9EBmeGfI6cQR7Q4D1xKAbtbp3Prn',
            domain: 'dris.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'https://sankey.desktopluxury.com/',
            scope: 'openid profile'
        });
        this._idToken = '';
        this._accessToken = '';
        this._expiresAt = 0;
    }
    Object.defineProperty(AuthServService.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthServService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthServService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.localLogin(authResult);
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthServService.prototype.localLogin = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = (authResult.expiresIn * 1000) + Date.now();
        this._accessToken = authResult.accessToken;
        this._idToken = authResult.idToken;
        this._expiresAt = expiresAt;
    };
    AuthServService.prototype.renewTokens = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.localLogin(authResult);
            }
            else if (err) {
                alert("Could not get a new token (" + err.error + ": " + err.error_description + ").");
                _this.logout();
            }
        });
    };
    AuthServService.prototype.logout = function () {
        // Remove tokens and expiry time
        this._accessToken = '';
        this._idToken = '';
        this._expiresAt = 0;
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthServService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        return this._accessToken && Date.now() < this._expiresAt;
    };
    AuthServService.prototype.getProfile = function (cb) {
        if (!this._accessToken) {
            throw new Error('Access Token doesn\' exist');
        }
        var self = this;
        this.auth0.client.userInfo(this._accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthServService);
    return AuthServService;
}());



/***/ }),

/***/ "./src/app/core/auth/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/core/auth/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Optional (custom login) -->\n\n\n"

/***/ }),

/***/ "./src/app/core/auth/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/auth/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n    <textarea #textData (change)=\"newMessage(textData.value)\" contenteditable=\"true\" name=\"\" id=\"\" cols=\"30\" rows=\"25\"></textarea>\n    <button (click)=\"visualize(textData.value)\">Visualize Now</button>\n    <button (click)=\"newMessage(textData.value)\">Check Visual</button>\n</section>\n"

/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 0;\n  margin: 0; }\n\ntextarea {\n  width: 100%;\n  min-height: 100%;\n  resize: none;\n  margin-top: 20em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR2I7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJbXBvcnRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjBlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.ts ***!
  \*********************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-driver.service */ "./src/app/core/visualize/data-driver.service.ts");




var ChartComponent = /** @class */ (function () {
    function ChartComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    ChartComponent.prototype.newMessage = function (chartData) {
        this.data.changeMessage(chartData);
    };
    ChartComponent.prototype.visualize = function (chartData) {
        this.data.changeMessage(chartData);
        this.router.navigate(['visualize']);
    };
    ChartComponent.prototype.getData = function (data) {
        var data2 = data.split('\n');
        var data3 = data2.map(function (value) { return value.split(','); });
        // data3 contains sufficient data
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/core/visualize/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/core/visualize/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_driver_service__WEBPACK_IMPORTED_MODULE_3__["DataDriverService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/data-driver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/visualize/data-driver.service.ts ***!
  \*******************************************************/
/*! exports provided: DataDriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDriverService", function() { return DataDriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataDriverService = /** @class */ (function () {
    function DataDriverService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("default message");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataDriverService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataDriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataDriverService);
    return DataDriverService;
}());



/***/ }),

/***/ "./src/app/core/visualize/template/prevchart/prevchart.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/visualize/template/prevchart/prevchart.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <google-chart #chart\n                [title]=\"title\"\n                [type]=\"type\"\n                [data]=\"data\"\n                [columnNames]=\"columnNames\"\n                [options]=\"options\"\n                [width]=\"width\"\n                [height]=\"height\">\n        </google-chart>\n\n</div>\n<h3>{{ message }}</h3>\n"

/***/ }),

/***/ "./src/app/core/visualize/template/prevchart/prevchart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/visualize/template/prevchart/prevchart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-chart {\n  padding: 2px;\n  margin: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9wcmV2Y2hhcnQvcHJldmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3RlbXBsYXRlL3ByZXZjaGFydC9wcmV2Y2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnb29nbGUtY2hhcnQge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IDFweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/visualize/template/prevchart/prevchart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/visualize/template/prevchart/prevchart.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrevchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevchartComponent", function() { return PrevchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-driver.service */ "./src/app/core/visualize/data-driver.service.ts");



var PrevchartComponent = /** @class */ (function () {
    function PrevchartComponent(receivedData) {
        this.receivedData = receivedData;
        this.message = "From, To, 1";
        this.previousMessage = "From, To, 1";
        this.chartData = [
            ["From", "To", 3],
            ["From", "Towards", 1]
        ];
        this.title = '';
        this.type = 'Sankey';
        this.data = this.chartData;
        this.columnNames = ['From', 'To', 'Weight'];
        this.color = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
            '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];
        this.options = {
            height: 250,
            redrawTrigger: 0,
            sankey: {
                node: {
                    colors: this.color
                },
                link: {
                    colorMode: 'gradient',
                    colors: this.color
                }
            }
        };
        this.width = 270;
        this.height = 400;
    }
    PrevchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receivedData.currentMessage.subscribe(function (message) { return _this.onChangeMessage(message); });
        // data3 contains sufficient data
    };
    PrevchartComponent.prototype.onChangeMessage = function (cData) {
        // console.log(this.options.height);
        this.message = cData;
        // if(this.message !== this.previousMessage) {
        //   console.log(this.chartData);
        //   var data2 = this.message.split('\n');
        //   this.chartData = data2.map((value) => value.split(','));
        //   console.log(this.chartData);
        //   this.data = this.chartData;
        //   this.options.height = 100;
        //   console.log(this.options.height);
        //   this.previousMessage = this.message;
        // }
    };
    // To manage the size of preview (yet to implement)
    PrevchartComponent.prototype.increaseSize = function () {
        this.width = 400;
        this.height = 1000;
    };
    PrevchartComponent.prototype.decreaseSize = function () {
        this.width = 270;
        this.height = 400;
    };
    PrevchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prevchart',
            template: __webpack_require__(/*! ./prevchart.component.html */ "./src/app/core/visualize/template/prevchart/prevchart.component.html"),
            styles: [__webpack_require__(/*! ./prevchart.component.scss */ "./src/app/core/visualize/template/prevchart/prevchart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_driver_service__WEBPACK_IMPORTED_MODULE_2__["DataDriverService"]])
    ], PrevchartComponent);
    return PrevchartComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<aside>\n    <a href=\"#\" routerLink=\"/\" title=\"Home\">DRIS</a>\n    <a href=\"#\" routerLink=\"/\" title=\"Home\"><i class=\"material-icons\">home</i></a>\n    <a href=\"#\" routerLink=\"/new\" title=\"Current Visualizations\"><i class=\"material-icons\">show_chart</i></a>\n    <a href=\"#1\" title=\"Previous Visualizations\"><i class=\"material-icons\">history</i></a>\n    <a href=\"#2\" title=\"Settings\"><i class=\"material-icons\">settings</i></a>\n    <a href=\"#3\" title=\"Instructions\"><i class=\"material-icons\">help</i></a>\n</aside>\n\n"

/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  max-width: 4em;\n  background-color: #65e98c; }\n  aside a {\n    padding: 35px 8px 20px 0px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ffffff;\n    display: block;\n    transition: 0.3s;\n    text-align: center; }\n  aside a:hover {\n      color: #dfdfdf; }\n  aside a i {\n      font-size: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvcnVuL21lZGlhL2thYWxpL05FVyBWT0xVTUUvUGF5Y2hleC9EUklTL3NyYy9tYXN0ZXJWYXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFHZCx5QkNYNEIsRUFBQTtFREdoQztJQVdRLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBTWhCLGtCQUFrQixFQUFBO0VBdEIxQjtNQW1CWSxjQUF5QixFQUFBO0VBbkJyQztNQXdCWSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEltcG9ydGluZyBnbG9iYWwgdmFyaWFibGVzXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vbWFzdGVyVmFyaWFibGVzLnNjc3NcIjtcblxuYXNpZGUge1xuICAgIC8vIEFkanVzdG1lbnRzXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDRlbTtcblxuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXN0ZXJDb2xvcjtcblxuICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDhweCAyMHB4IDBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iLCIvLyBNYXN0ZXIgY29sb3JzIGhlcmVcbiRtYXN0ZXJDb2xvcjogcmdiKDEwMSwgMjMzLCAxNDApO1xuJGJhY2tncm91bmRJbWc6IFwiLi9iYWNrZ3JvdW5kLnBuZ1wiO1xuIl19 */"

/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(auth) {
        this.auth = auth;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    SidebarComponent.prototype.openNav = function () {
        document.getElementById('sideNav').style.width = '250px';
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById('sideNav').style.width = '0';
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/visualize/template/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/visualize/template/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/template/template.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/visualize/template/template.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-sidebar></app-sidebar>\n  <app-prevchart></app-prevchart>\n  <app-chart></app-chart>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/visualize/template/template.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/visualize/template/template.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 5px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\napp-chart {\n  grid-column-start: 2;\n  grid-column-end: 10;\n  grid-row: 1; }\n\napp-prevchart {\n  background-color: #e0dada;\n  height: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFRLGtCQUFrQixFQUFBOztBQUMxQjtFQUFRLGdCQUFnQixFQUFBOztBQUV4QjtFQUNJLGFBQWE7RUFHYixzQ0FBc0M7RUFDdEMsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBRVgsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQW9DO0VBQ3BDLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBTaWRlYmFyIGNvbnRyb2xcblxuYXNpZGUgeyBncmlkLWFyZWE6IHNpZGViYXI7IH1cbmFzaWRlIHsgZ3JpZC1hcmVhOiBjaGFydDsgfVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLy9ncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIC8vICAgICdhcHAtc2lkZWJhciBhcHAtc2lkZWJhciBhcHAtY2hhcnQgYXBwLWNoYXJ0IGFwcC1jaGFydCc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDVweDtcbn1cblxuYXBwLXNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxO1xuXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmFwcC1jaGFydCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuYXBwLXByZXZjaGFydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjE4LCAyMTgpO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/visualize/template/template.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/visualize/template/template.component.ts ***!
  \***************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    TemplateComponent.prototype.drawChart = function () {
        var data = d3__WEBPACK_IMPORTED_MODULE_2__["json"]("https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json");
        console.log(data);
    };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/core/visualize/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.scss */ "./src/app/core/visualize/template/template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/visualize.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n  This file contains (website-address.tdl/new):\n    1. Visualized Sankey\n-->\n<div>\n  <app-sidebar></app-sidebar>\n  <google-chart id=\"sankeyChart\" #chart\n      [title]=\"title\"\n      [type]=\"type\"\n      [data]=\"data\"\n      [columnNames]=\"columnNames\"\n      [options]=\"options\"\n      [width]=\"width\"\n      [height]=\"height\">\n  </google-chart>\n  \n  <button style=\"height: 20px\">Save Chart</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/visualize/visualize.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 5px;\n  padding-right: 10px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\ndiv {\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS92aXN1YWxpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBUSxrQkFBa0IsRUFBQTs7QUFDMUI7RUFBUSxnQkFBZ0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhO0VBR2Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUVYLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3Zpc3VhbGl6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gU2lkZWJhciBjb250cm9sXG5cbmFzaWRlIHsgZ3JpZC1hcmVhOiBzaWRlYmFyOyB9XG5hc2lkZSB7IGdyaWQtYXJlYTogY2hhcnQ7IH1cblxuZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAvLyAgICAnYXBwLXNpZGViYXIgYXBwLXNpZGViYXIgYXBwLWNoYXJ0IGFwcC1jaGFydCBhcHAtY2hhcnQnO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5hcHAtc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG5cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/core/visualize/visualize.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.ts ***!
  \*******************************************************/
/*! exports provided: VisualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizeComponent", function() { return VisualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-driver.service */ "./src/app/core/visualize/data-driver.service.ts");



var VisualizeComponent = /** @class */ (function () {
    function VisualizeComponent(receivedData) {
        this.receivedData = receivedData;
        this.chartData = [
            ["From", "To", 3],
            ["From", "Towards", 4],
            ["To", "End", 1]
        ];
        this.width = 1200;
        this.height = 1000;
        // Drawing Sankey
        this.title = '';
        this.type = 'Sankey';
        this.data = this.chartData;
        this.columnNames = ['From', 'To', 'Weight'];
        this.color = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
            '#cab2d6', '#ffff99', '#1f78b4', '#33a02c',
            '#36cfe3', '#beafea', '#eb9a19', '#0dff6f',
            '#c3b2a6', '#f2af29', '#a578a4', '#baa02c'];
        this.options = {
            height: this.height,
            redrawTrigger: 0,
            sankey: {
                node: {
                    colors: this.color
                },
                link: {
                    colorMode: 'gradient',
                    colors: this.color
                }
            }
        };
    }
    VisualizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receivedData.currentMessage.subscribe(function (message) { return _this.message = message; });
        var data = this.message.split('\n');
        var data2 = data.map(function (value) { return value.split(', '); });
        var jsonStr = JSON.stringify(data2);
        console.log(jsonStr);
        jsonStr = jsonStr.replace(/"v":"(\d+)"/g, '"v":$1').replace(/"f":"(\d+)"/g, '+"f":$1');
        var data3 = JSON.parse(jsonStr);
        for (var i = 0; i < data3.length; i++) {
            if (isNaN(data3[i])) {
                this.chartData.push(data3[i]);
            }
            else {
                // @ts-ignore
                this.chartData.push(+data3[i]);
            }
        }
        console.log(this.chartData);
        //this.chartData = data3;
    };
    VisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualize',
            template: __webpack_require__(/*! ./visualize.component.html */ "./src/app/core/visualize/visualize.component.html"),
            styles: [__webpack_require__(/*! ./visualize.component.scss */ "./src/app/core/visualize/visualize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_driver_service__WEBPACK_IMPORTED_MODULE_2__["DataDriverService"]])
    ], VisualizeComponent);
    return VisualizeComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  This file contains:\n  1. Menubar\n  2. Homepage top section\n-->\n\n<!-- Menubar starts -->\n<app-nav></app-nav>\n\n<!-- Homepage top section starts -->\n<div class=\"home-section\">\n  <h1>Welcome to DRIS</h1>\n  <p>DRIS, <em>or Drawing Really Interesting Sankey</em>, lets you create powerful Sankey visualizations for every need!</p>\n  <button routerLink=\"/new\">Visualize Now</button>\n</div>\n<!-- Homepage top section ends -->\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-section {\n  height: 40%;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding-top: 5vh; }\n  .home-section h1 {\n    margin: 0; }\n  button {\n  background: #65e98c;\n  color: #fff;\n  border: none;\n  position: relative;\n  height: 60px;\n  font-size: 1.6em;\n  padding: 0 2em;\n  margin-top: 20px;\n  cursor: pointer;\n  transition: 800ms ease all;\n  outline: none; }\n  button:hover {\n    background: rgba(255, 245, 245, 0.8);\n    color: #65e98c; }\n  button:before, button:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 2px;\n    width: 0;\n    background: #65e98c;\n    transition: 400ms ease all; }\n  button:after {\n    right: inherit;\n    top: inherit;\n    left: 0;\n    bottom: 0; }\n  button:hover:before, button:hover:after {\n    width: 100%;\n    transition: 800ms ease all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvcnVuL21lZGlhL2thYWxpL05FVyBWT0xVTUUvUGF5Y2hleC9EUklTL3NyYy9tYXN0ZXJWYXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTtFQUxwQjtJQVNRLFNBQVMsRUFBQTtFQUtqQjtFQUNJLG1CQ25CNEI7RURvQjVCLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGNBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBYztFQUNkLDBCQUF5QjtFQUN6QixhQUFZLEVBQUE7RUFYaEI7SUFjUSxvQ0FBbUM7SUFDbkMsY0NqQ3dCLEVBQUE7RURrQmhDO0lBa0JRLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsTUFBSztJQUNMLFFBQU87SUFDUCxXQUFVO0lBQ1YsUUFBTztJQUNQLG1CQzFDd0I7SUQyQ3hCLDBCQUF5QixFQUFBO0VBekJqQztJQTRCUSxjQUFhO0lBQ2IsWUFBVztJQUNYLE9BQU07SUFDTixTQUFRLEVBQUE7RUEvQmhCO0lBa0NRLFdBQVU7SUFDViwwQkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gSW1wb3J0aW5nIGdsb2JhbCB2YXJpYWJsZXNcbkBpbXBvcnQgXCIuLi8uLi8uLi9tYXN0ZXJWYXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBIb21lIHNlY3Rpb25cbi5ob21lLXNlY3Rpb24ge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgcGFkZGluZy10b3A6IDV2aDtcblxuICAgIC8vIFRvcCBoZWFkaW5nXG4gICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4vLyBEZXNpZ25pbmcgdGhlIGJ1dHRvblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6JG1hc3RlckNvbG9yO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgZm9udC1zaXplOjEuNmVtO1xuICAgIHBhZGRpbmc6MCAyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOjgwMG1zIGVhc2UgYWxsO1xuICAgIG91dGxpbmU6bm9uZTtcblxuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjgpOztcbiAgICAgICAgY29sb3I6JG1hc3RlckNvbG9yO1xuICAgIH1cbiAgICAmOmJlZm9yZSwmOmFmdGVye1xuICAgICAgICBjb250ZW50OicnO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGhlaWdodDoycHg7XG4gICAgICAgIHdpZHRoOjA7XG4gICAgICAgIGJhY2tncm91bmQ6ICRtYXN0ZXJDb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjo0MDBtcyBlYXNlIGFsbDtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgcmlnaHQ6aW5oZXJpdDtcbiAgICAgICAgdG9wOmluaGVyaXQ7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgfVxuICAgICY6aG92ZXI6YmVmb3JlLCY6aG92ZXI6YWZ0ZXJ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246ODAwbXMgZWFzZSBhbGw7XG4gICAgfVxufVxuICAiLCIvLyBNYXN0ZXIgY29sb3JzIGhlcmVcbiRtYXN0ZXJDb2xvcjogcmdiKDEwMSwgMjMzLCAxNDApO1xuJGJhY2tncm91bmRJbWc6IFwiLi9iYWNrZ3JvdW5kLnBuZ1wiO1xuIl19 */"

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
    HomeComponent.prototype.firstClick = function () {
        console.log('clicked');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/partials/nav/nav.component.html":
/*!*************************************************!*\
  !*** ./src/app/partials/nav/nav.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/\">Home</a></li>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/contact\">Contact</a></li>\n        <li><a *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">Login</a></li>\n        <li><a *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">Logout</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/partials/nav/nav.component.scss":
/*!*************************************************!*\
  !*** ./src/app/partials/nav/nav.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: white; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #effffd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9wYXJ0aWFscy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFJUSxpQkFBaUIsRUFBQTtFQUp6QjtJQVFRLG1CQUFtQixFQUFBO0VBUjNCO01BV1kscUJBQXFCO01BQ3JCLFNBQVM7TUFBRSxVQUFVLEVBQUE7RUFaakM7UUFlZ0IsV0FBVyxFQUFBO0VBZjNCO1VBa0JvQixjQUFjO1VBQ2QseUJBQXlCO1VBQ3pCLGVBQWUsRUFBQTtFQXBCbkM7WUF1QndCLG1CQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNTUsIDI1Myk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/partials/nav/nav.component.ts":
/*!***********************************************!*\
  !*** ./src/app/partials/nav/nav.component.ts ***!
  \***********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(auth) {
        this.auth = auth;
        this.appTitle = "DRIS";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/partials/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/partials/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


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

module.exports = __webpack_require__(/*! /run/media/kaali/NEW VOLUME/Paychex/DRIS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map