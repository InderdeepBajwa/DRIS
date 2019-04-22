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

module.exports = "<!-- Pages -->\r\n\r\n<!-- \r\n<app-nav></app-nav>\r\n    Navbar implemented in micro modules. Not necessary here.\r\n    Enable only if menu is required everywhere.\r\n-->\r\n\r\n<!-- Page render starts\r\n<router-outlet></router-outlet>-->\r\n<div [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n<!-- Page render ends -->\r\n\r\n<!-- TODO: Footer -->\r\n"

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
            throw new Error('Access Token doesn\'t exist');
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

module.exports = "\r\n<!-- Optional (custom login) -->\r\n\r\n\r\n"

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

module.exports = "\r\n<section>\r\n    <textarea #textData (keyup.enter)=\"keyPressed($event)\" spellcheck=\"false\" contenteditable=\"true\" name=\"\" id=\"chartInput\" cols=\"30\" rows=\"25\" placeholder=\"{{'Source, Destination, Value'}}\"></textarea>\r\n    <textarea #uniqueInputs (keyup.enter)=\"colorSelect($event, textData.value)\" spellcheck=\"false\" contenteditable=\"false\" name=\"\" id=\"colorSelect\" cols=\"2\" rows=\"10\" placeholder=\"{{'Node,\\tColor'}}\" value=\"domain,rage\"></textarea>\r\n    <button (click)=\"visualize(textData.value)\">Visualize Now</button>\r\n    <button (click)=\"newMessage(textData.value)\">Check Visual</button>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 0;\n  margin: 0; }\n\n#chartInput {\n  width: 70%;\n  min-height: 100%;\n  resize: none;\n  margin-top: 20em; }\n\n#colorSelect {\n  width: 25%;\n  height: 20vh;\n  resize: none;\n  float: right;\n  margin-top: 20em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aXN1YWxpemUvY2hhcnQvRzpcXHBheWNoeFxcRFJJUy9zcmNcXGFwcFxcY29yZVxcdmlzdWFsaXplXFxjaGFydFxcY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSW1wb3J0aW5nIGdsb2JhbCB2YXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjaGFydElucHV0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMjBlbTtcclxufVxyXG5cclxuI2NvbG9yU2VsZWN0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMGVtO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_sankey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-sankey */ "./node_modules/d3-sankey/src/index.js");







var ChartComponent = /** @class */ (function () {
    function ChartComponent(data, router) {
        this.data = data;
        this.router = router;
        this.uniqueData = "";
        // Color scheme
        this.color = 
        // Initializing domain and range to null
        d3__WEBPACK_IMPORTED_MODULE_5__["scaleOrdinal"]()
            .domain([
            ''
        ])
            .range([
            ''
        ]);
    }
    // Listening for keypress combinations
    ChartComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.keyCode == 13 && event.ctrlKey) {
            this.visualize(this.message, true);
        }
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
            this.quickSave();
        }
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
        }
    };
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        // TODO: DO IT this.drawChart();
    };
    ChartComponent.prototype.newMessage = function (chartData) {
        this.data.changeMessage("source,target,value\n" + chartData, 'domain,range\n' + this.colorInput);
        this.drawChart();
    };
    ChartComponent.prototype.visualize = function (chartData, doesContainHeader) {
        if (doesContainHeader === void 0) { doesContainHeader = false; }
        if (doesContainHeader) {
            this.data.changeMessage(chartData, 'domain,range\n' + this.colorInput);
        }
        else {
            this.data.changeMessage("source,target,value\n" + chartData, 'domain,range\n' + this.colorInput);
        }
        this.router.navigateByUrl('visualize');
    };
    // Quick save function
    ChartComponent.prototype.quickSave = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_4___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').node(), 'save.png', { backgroundColor: '#FFFFFF' });
    };
    // Save URI of Sankey image to cloud
    ChartComponent.prototype.saveToCloud = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_4___default.a.svgAsDataUri(d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').node(), {}, function (uri) {
            console.log('uri', uri);
            window.location.href;
        });
    };
    // Manages key presses in textarea (sankey typing)
    ChartComponent.prototype.keyPressed = function (event) {
        this.message = "source,target,value\n" + event.target.value;
        this.drawChart();
    };
    ChartComponent.prototype.colorSelect = function (event, chartData) {
        // Saving user color input
        this.colorInput = event.target.value;
        var colors = d3__WEBPACK_IMPORTED_MODULE_5__["csvParse"]("domain,range\n" + this.colorInput);
        var domainRange = { 'domain': [], 'range': [] };
        colors.forEach(function (d) {
            domainRange.domain.push(d.domain);
            domainRange.range.push(d.range);
        });
        this.color = d3__WEBPACK_IMPORTED_MODULE_5__["scaleOrdinal"]()
            .domain(domainRange.domain)
            .range(domainRange.range);
        this.newMessage(chartData);
        this.drawChart();
    };
    ChartComponent.prototype.getData = function (data) {
        var data2 = data.split('\n');
        var data3 = data2.map(function (value) { return value.split(','); });
        // data3 contains sufficient data
    };
    ChartComponent.prototype.drawChart = function () {
        var _this = this;
        // Error checking for null value
        if (this.message == "" || this.message == null || this.message == "default message") {
            console.log("Err " + this.message);
            return;
        }
        // Color scheme
        var color = this.color;
        // Removing spaces from input
        this.message = this.message.replace(/ /g, '');
        // Selecting Sankey element from HTML
        var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#sankey"), width = +svg.attr("width"), height = +svg.attr("height");
        // Clearing previous graph
        svg.selectAll("*").remove();
        // Formatting numbers in Sankey
        var formatNumber = d3__WEBPACK_IMPORTED_MODULE_5__["format"](",.0f"), format = function (d) { return formatNumber(d); }; // (Optional) to add functionality of units: + " TWh"; },
        // Initializing Sankey variable
        var sankey = d3_sankey__WEBPACK_IMPORTED_MODULE_6__["sankey"]()
            .nodeWidth(15)
            .nodePadding(10)
            .extent([[1, 1], [width - 1, height - 6]]);
        var link = svg.append("g")
            .attr("class", "links")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.2)
            .selectAll("path");
        var node = svg.append("g")
            .attr("class", "nodes")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .selectAll("g");
        // Initializing graph (data container)
        var graph = { "nodes": [], "links": [] };
        var sankeyData = d3__WEBPACK_IMPORTED_MODULE_5__["csvParse"](this.message);
        sankeyData.forEach(function (d) {
            _this.uniqueData += d.source + '\n';
            graph.nodes.push({ "name": d.source });
            graph.nodes.push({ "name": d.target });
            graph.links.push({ "source": d.source,
                "target": d.target,
                "value": +d.value });
        });
        graph.nodes = d3__WEBPACK_IMPORTED_MODULE_5__["map"](graph.nodes, function (d) { return d.name; }).keys();
        graph.links.forEach(function (d, i) {
            graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
            graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
        });
        graph.nodes.forEach(function (d, i) {
            graph.nodes[i] = { "name": d };
        });
        // append a defs (for definition) element to your SVG
        var defs = svg.append('defs');
        try {
            sankey(graph);
        }
        catch (e) {
            if (e.message == 'circular link') {
                console.log("ITS A CIRCLE!!!");
            }
            else {
                console.log(e.message);
            }
            return;
        }
        link = link
            .data(graph.links)
            .enter().append("path")
            .attr("d", d3_sankey__WEBPACK_IMPORTED_MODULE_6__["sankeyLinkHorizontal"]())
            .attr("stroke-width", function (d) { return Math.max(1, d.width); });
        link.append("title")
            .text(function (d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });
        node = node
            .data(graph.nodes)
            .enter().append("g");
        node.append("rect")
            .attr("x", function (d) { return d.x0; })
            .attr("y", function (d) { return d.y0; })
            .attr("height", function (d) { return d.y1 - d.y0; })
            .attr("width", function (d) { return d.x1 - d.x0; })
            // @ts-ignore
            .attr("fill", function (d) {
            if (color.domain().indexOf(d.name) > -1) {
                return d.color = color(d.name);
            }
            else {
                return d.color = getRandomColor();
            }
        });
        node.append("text")
            .attr("x", function (d) { return d.x0 - 6; })
            .attr("y", function (d) { return (d.y1 + d.y0) / 2; })
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .text(function (d) { return d.name + " [" + format(d.value) + ']'; })
            .filter(function (d) { return d.x0 < width / 2; })
            .attr("x", function (d) { return d.x1 + 6; })
            .attr("text-anchor", "start");
        node.append("title")
            .text(function (d) { return d.name + "\n" + format(d.value); });
        // add gradient to links
        link.style('stroke', function (d, i) {
            // make unique gradient ids  
            var gradientID = "gradient" + i;
            // @ts-ignore
            var startColor = d.source.color;
            // @ts-ignore
            var stopColor = d.target.color;
            var linearGradient = defs.append('linearGradient')
                .attr('gradientUnits', 'userSpaceOnUse')
                .attr('id', gradientID);
            linearGradient.selectAll('stop')
                .data([
                { offset: '10%', color: startColor },
                { offset: '90%', color: stopColor }
            ])
                .enter().append('stop')
                .attr('offset', function (d) {
                return d.offset;
            })
                .attr('stop-color', function (d) {
                return d.color;
            });
            return "url(#" + gradientID + ")";
        });
        var words = this.uniqueData.split('\n');
        this.color = color;
        // Utility functions
        // Color filter
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        // Method to generate random color
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChartComponent.prototype, "handleKeyboardEvent", null);
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
        this.colorSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("domain,range");
        this.currentColor = this.colorSource.asObservable();
    }
    DataDriverService.prototype.changeMessage = function (message, color) {
        this.messageSource.next(message);
        this.colorSource.next(color);
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

module.exports = "<div>\r\n        <svg id=\"sankey\" height=\"300\" width=\"350\"></svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/visualize/template/prevchart/prevchart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/visualize/template/prevchart/prevchart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sankey {\n  padding: 2px;\n  margin: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvcHJldmNoYXJ0L0c6XFxwYXljaHhcXERSSVMvc3JjXFxhcHBcXGNvcmVcXHZpc3VhbGl6ZVxcdGVtcGxhdGVcXHByZXZjaGFydFxccHJldmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3RlbXBsYXRlL3ByZXZjaGFydC9wcmV2Y2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2Fua2V5IHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59Il19 */"

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
    }
    PrevchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receivedData.currentMessage.subscribe(function (message) { return _this.message = message; });
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

module.exports = "\r\n<aside>\r\n    <a href=\"/\" routerLink=\"/\" title=\"Home\">DRIS</a>\r\n    <a href=\"/\" routerLink=\"/\" title=\"Home\"><i class=\"material-icons\">home</i></a>\r\n    <a href=\"/new\" routerLink=\"/new\" title=\"Current Visualizations\"><i class=\"material-icons\">show_chart</i></a>\r\n    <a href=\"#\" title=\"Previous Visualizations\"><i class=\"material-icons\">history</i></a>\r\n    <a href=\"#\" title=\"Settings\"><i class=\"material-icons\">settings</i></a>\r\n    <a href=\"#\" title=\"Instructions\"><i class=\"material-icons\">help</i></a>\r\n</aside>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  max-width: 4em;\n  background-color: #65e98c; }\n  aside a {\n    padding: 35px 8px 20px 0px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ffffff;\n    display: block;\n    transition: 0.3s;\n    text-align: center; }\n  aside a:hover {\n      color: #dfdfdf; }\n  aside a i {\n      font-size: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvc2lkZWJhci9HOlxccGF5Y2h4XFxEUklTL3NyY1xcYXBwXFxjb3JlXFx2aXN1YWxpemVcXHRlbXBsYXRlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9zaWRlYmFyL0c6XFxwYXljaHhcXERSSVMvc3JjXFxtYXN0ZXJWYXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFHZCx5QkNYNEIsRUFBQTtFREdoQztJQVdRLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBTWhCLGtCQUFrQixFQUFBO0VBdEIxQjtNQW1CWSxjQUF5QixFQUFBO0VBbkJyQztNQXdCWSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSW1wb3J0aW5nIGdsb2JhbCB2YXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hc2lkZSB7XHJcbiAgICAvLyBBZGp1c3RtZW50c1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDRlbTtcclxuXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXN0ZXJDb2xvcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDhweCAyMHB4IDBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCIvLyBNYXN0ZXIgY29sb3JzIGhlcmVcclxuJG1hc3RlckNvbG9yOiByZ2IoMTAxLCAyMzMsIDE0MCk7XHJcbiRiYWNrZ3JvdW5kSW1nOiBcIi4vYmFja2dyb3VuZC5wbmdcIjtcclxuIl19 */"

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

module.exports = "\r\n<div>\r\n  <app-sidebar></app-sidebar>\r\n  <app-prevchart></app-prevchart>\r\n  <app-chart></app-chart>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/visualize/template/template.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/visualize/template/template.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 5px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\napp-chart {\n  grid-column-start: 2;\n  grid-column-end: 9;\n  grid-row: 1; }\n\napp-prevchart {\n  background-color: rgba(224, 218, 218, 0.4);\n  height: 360px;\n  width: 410px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvRzpcXHBheWNoeFxcRFJJUy9zcmNcXGFwcFxcY29yZVxcdmlzdWFsaXplXFx0ZW1wbGF0ZVxcdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBUSxrQkFBa0IsRUFBQTs7QUFDMUI7RUFBUSxnQkFBZ0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhO0VBR2Isc0NBQXNDO0VBQ3RDLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUVYLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsWUFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gU2lkZWJhciBjb250cm9sXHJcblxyXG5hc2lkZSB7IGdyaWQtYXJlYTogc2lkZWJhcjsgfVxyXG5hc2lkZSB7IGdyaWQtYXJlYTogY2hhcnQ7IH1cclxuXHJcbmRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy9ncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgLy8gICAgJ2FwcC1zaWRlYmFyIGFwcC1zaWRlYmFyIGFwcC1jaGFydCBhcHAtY2hhcnQgYXBwLWNoYXJ0JztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDVweDtcclxufVxyXG5cclxuYXBwLXNpZGViYXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMTtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5hcHAtY2hhcnQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbiAgICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuYXBwLXByZXZjaGFydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjE4LCAyMTgsIDAuNCk7XHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgd2lkdGg6IDQxMHB4XHJcbn1cclxuXHJcblxyXG4iXX0= */"

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


var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () { };
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

module.exports = "\r\n<!--\r\n  This file contains (website-address.tdl/new):\r\n    1. Visualized Sankey\r\n-->\r\n<div>\r\n  <p id=\"error\">{{redirectErr}}</p>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"container\">\r\n    <svg #downloadSankey id=\"sankey\" width=\"800\" height=\"600\" style=\"background-color: white;\"></svg>\r\n  </div>\r\n  <button id=\"saveButton\" (click)=\"saveSvg(downloadSankey,'test.jpg')\" >Save Chart</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/visualize/visualize.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-gap: 2px;\n  padding-right: 1px;\n  max-height: 100vh; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\ndiv {\n  background-color: white; }\n\n.container {\n  padding-top: 2em;\n  padding-right: 3em; }\n\n#saveButton {\n  grid-column: 10;\n  grid-row: 1; }\n\n#sankey {\n  grid-column: 1;\n  grid-row: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aXN1YWxpemUvRzpcXHBheWNoeFxcRFJJUy9zcmNcXGFwcFxcY29yZVxcdmlzdWFsaXplXFx2aXN1YWxpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBUSxrQkFBa0IsRUFBQTs7QUFDMUI7RUFBUSxnQkFBZ0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhO0VBR2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFFWCxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBSWY7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvdmlzdWFsaXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIFNpZGViYXIgY29udHJvbFxyXG5cclxuYXNpZGUgeyBncmlkLWFyZWE6IHNpZGViYXI7IH1cclxuYXNpZGUgeyBncmlkLWFyZWE6IGNoYXJ0OyB9XHJcblxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8vZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIC8vICAgICdhcHAtc2lkZWJhciBhcHAtc2lkZWJhciBhcHAtY2hhcnQgYXBwLWNoYXJ0IGFwcC1jaGFydCc7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcclxuICAgIGdyaWQtZ2FwOiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYXBwLXNpZGViYXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMTtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcclxufVxyXG5cclxuI3NhdmVCdXR0b24ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEwO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi8vIFNhbmtleSBzdHlsZXNcclxuI3NhbmtleSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAxO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-driver.service */ "./src/app/core/visualize/data-driver.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_sankey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-sankey */ "./node_modules/d3-sankey/src/index.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_6__);







var VisualizeComponent = /** @class */ (function () {
    function VisualizeComponent(receivedData, router) {
        this.receivedData = receivedData;
        this.router = router;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]()
            .domain([])
            .range([]);
        this.width = 1200;
        this.height = 600;
    }
    VisualizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receivedData.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.receivedData.currentColor.subscribe(function (color) { return _this.color = color; });
        // Error checking for null value
        if (this.message == "" || this.message == null || this.message == "default message") {
            this.redirectErr = "No chart input data found. Redirecting to /new to create new data.";
            setTimeout(function () {
                _this.router.navigate(['/new']);
            }, 3000);
            return;
        }
        this.drawChart();
    };
    // Save chart
    VisualizeComponent.prototype.saveSvg = function (diagram, name) {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), name, { backgroundColor: '#FFFFFF' });
    };
    VisualizeComponent.prototype.drawChart = function () {
        var _this = this;
        // Error checking for null value
        if (this.message == "" || this.message == null || this.message == "default message") {
            this.redirectErr = "No chart input data found. Redirecting to /new to create new data.";
            setTimeout(function () {
                _this.router.navigate(['/new']);
            }, 3000);
            return;
        }
        // Parsing color for color scheme
        var thisColor = d3__WEBPACK_IMPORTED_MODULE_4__["csvParse"](this.color);
        console.log(this.color);
        var domainRange = { 'domain': [], 'range': [] };
        thisColor.forEach(function (d) {
            domainRange.domain.push(d.domain);
            domainRange.range.push(d.range);
        });
        this.colors = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]()
            .domain(domainRange.domain)
            .range(domainRange.range);
        // Color scheme
        var color = this.colors;
        // Selecting Sankey element from HTML
        var svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"]("#sankey"), width = +svg.attr("width"), height = +svg.attr("height");
        // Clearing previous graph
        svg.selectAll("*").remove();
        // Formatting numbers in Sankey
        var formatNumber = d3__WEBPACK_IMPORTED_MODULE_4__["format"](",.0f"), format = function (d) { return formatNumber(d); }; // (Optional) to add functionality of units: + " TWh"; },
        // Initializing Sankey variable
        var sankey = d3_sankey__WEBPACK_IMPORTED_MODULE_5__["sankey"]()
            .nodeWidth(15)
            .nodePadding(10)
            .extent([[1, 1], [width - 1, height - 6]]);
        var link = svg.append("g")
            .attr("class", "links")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.2)
            .selectAll("path");
        var node = svg.append("g")
            .attr("class", "nodes")
            .attr("font-family", "sans-serif")
            .attr("font-size", 18)
            .selectAll("g");
        // Initializing graph (data container)
        var graph = { "nodes": [], "links": [] };
        var sankeyData = d3__WEBPACK_IMPORTED_MODULE_4__["csvParse"](this.message);
        sankeyData.forEach(function (d) {
            graph.nodes.push({ "name": d.source });
            graph.nodes.push({ "name": d.target });
            graph.links.push({ "source": d.source,
                "target": d.target,
                "value": +d.value });
        });
        graph.nodes = d3__WEBPACK_IMPORTED_MODULE_4__["map"](graph.nodes, function (d) { return d.name; }).keys();
        graph.links.forEach(function (d, i) {
            graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
            graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
        });
        graph.nodes.forEach(function (d, i) {
            graph.nodes[i] = { "name": d };
        });
        // append a defs (for definition) element to your SVG
        var defs = svg.append('defs');
        sankey(graph);
        link = link
            .data(graph.links)
            .enter().append("path")
            .attr("d", d3_sankey__WEBPACK_IMPORTED_MODULE_5__["sankeyLinkHorizontal"]())
            .attr("stroke-width", function (d) { return Math.max(1, d.width); });
        link.append("title")
            .text(function (d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });
        node = node
            .data(graph.nodes)
            .enter().append("g");
        node.append("rect")
            .attr("x", function (d) { return d.x0; })
            .attr("y", function (d) { return d.y0; })
            .attr("height", function (d) { return d.y1 - d.y0; })
            .attr("width", function (d) { return d.x1 - d.x0; })
            // @ts-ignore
            .attr("fill", function (d) {
            if (color.domain().indexOf(d.name) > -1) {
                return d.color = color(d.name);
            }
            else {
                return d.color = getRandomColor();
            }
        });
        node.append("text")
            .attr("x", function (d) { return d.x0 - 6; })
            .attr("y", function (d) { return (d.y1 + d.y0) / 2; })
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .text(function (d) { return d.name + " [" + format(d.value) + ']'; })
            .filter(function (d) { return d.x0 < width / 2; })
            .attr("x", function (d) { return d.x1 + 6; })
            .attr("text-anchor", "start");
        node.append("title")
            .text(function (d) { return d.name + "\n" + format(d.value); });
        // add gradient to links
        link.style('stroke', function (d, i) {
            // make unique gradient ids  
            var gradientID = "gradient" + i;
            // @ts-ignore
            var startColor = d.source.color;
            // @ts-ignore
            var stopColor = d.target.color;
            var linearGradient = defs.append('linearGradient')
                .attr('gradientUnits', 'userSpaceOnUse')
                .attr('id', gradientID);
            linearGradient.selectAll('stop')
                .data([
                { offset: '10%', color: startColor },
                { offset: '90%', color: stopColor }
            ])
                .enter().append('stop')
                .attr('offset', function (d) {
                return d.offset;
            })
                .attr('stop-color', function (d) {
                return d.color;
            });
            return "url(#" + gradientID + ")";
        });
        // Utility functions
        // Method to generate random color
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };
    VisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualize',
            template: __webpack_require__(/*! ./visualize.component.html */ "./src/app/core/visualize/visualize.component.html"),
            styles: [__webpack_require__(/*! ./visualize.component.scss */ "./src/app/core/visualize/visualize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_driver_service__WEBPACK_IMPORTED_MODULE_3__["DataDriverService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<!--\r\n  This file contains:\r\n  1. Menubar\r\n-->\r\n\r\n<!-- Menubar starts -->\r\n<app-nav></app-nav>"

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

module.exports = "<!--\r\n  This file contains:\r\n  1. Menubar\r\n-->\r\n\r\n<!-- Menubar starts -->\r\n<app-nav></app-nav>"

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

module.exports = "<!--\r\n  This file contains:\r\n  1. Menubar\r\n  2. Homepage top section\r\n-->\r\n\r\n<!-- Menubar starts -->\r\n<app-nav></app-nav>\r\n\r\n<!-- Homepage top section starts -->\r\n<div class=\"home-section\">\r\n  <h1>Welcome to DRIS</h1>\r\n  <p>DRIS, <em>or Drawing Really Interesting Sankey</em>, lets you create powerful Sankey visualizations for every need!</p>\r\n  <button routerLink=\"/new\">Visualize Now</button>\r\n</div>\r\n<!-- Homepage top section ends -->\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-section {\n  height: 40%;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding-top: 5vh; }\n  .home-section h1 {\n    margin: 0; }\n  button {\n  background: #65e98c;\n  color: #fff;\n  border: none;\n  position: relative;\n  height: 60px;\n  font-size: 1.6em;\n  padding: 0 2em;\n  margin-top: 20px;\n  cursor: pointer;\n  transition: 800ms ease all;\n  outline: none; }\n  button:hover {\n    background: rgba(255, 245, 245, 0.8);\n    color: #65e98c; }\n  button:before, button:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 2px;\n    width: 0;\n    background: #65e98c;\n    transition: 400ms ease all; }\n  button:after {\n    right: inherit;\n    top: inherit;\n    left: 0;\n    bottom: 0; }\n  button:hover:before, button:hover:after {\n    width: 100%;\n    transition: 800ms ease all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9HOlxccGF5Y2h4XFxEUklTL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9HOlxccGF5Y2h4XFxEUklTL3NyY1xcbWFzdGVyVmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCLEVBQUE7RUFMcEI7SUFTUSxTQUFTLEVBQUE7RUFLakI7RUFDSSxtQkNuQjRCO0VEb0I1QixXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsYUFBWSxFQUFBO0VBWGhCO0lBY1Esb0NBQW1DO0lBQ25DLGNDakN3QixFQUFBO0VEa0JoQztJQWtCUSxXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLE1BQUs7SUFDTCxRQUFPO0lBQ1AsV0FBVTtJQUNWLFFBQU87SUFDUCxtQkMxQ3dCO0lEMkN4QiwwQkFBeUIsRUFBQTtFQXpCakM7SUE0QlEsY0FBYTtJQUNiLFlBQVc7SUFDWCxPQUFNO0lBQ04sU0FBUSxFQUFBO0VBL0JoQjtJQWtDUSxXQUFVO0lBQ1YsMEJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSW1wb3J0aW5nIGdsb2JhbCB2YXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4vLyBIb21lIHNlY3Rpb25cclxuLmhvbWUtc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuXHJcbiAgICAvLyBUb3AgaGVhZGluZ1xyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRGVzaWduaW5nIHRoZSBidXR0b25cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDokbWFzdGVyQ29sb3I7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgZm9udC1zaXplOjEuNmVtO1xyXG4gICAgcGFkZGluZzowIDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246ODAwbXMgZWFzZSBhbGw7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNDUsIDI0NSwgMC44KTs7XHJcbiAgICAgICAgY29sb3I6JG1hc3RlckNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUsJjphZnRlcntcclxuICAgICAgICBjb250ZW50OicnO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgaGVpZ2h0OjJweDtcclxuICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYXN0ZXJDb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOjQwMG1zIGVhc2UgYWxsO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgICByaWdodDppbmhlcml0O1xyXG4gICAgICAgIHRvcDppbmhlcml0O1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICBib3R0b206MDtcclxuICAgIH1cclxuICAgICY6aG92ZXI6YmVmb3JlLCY6aG92ZXI6YWZ0ZXJ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOjgwMG1zIGVhc2UgYWxsO1xyXG4gICAgfVxyXG59XHJcbiAgIiwiLy8gTWFzdGVyIGNvbG9ycyBoZXJlXHJcbiRtYXN0ZXJDb2xvcjogcmdiKDEwMSwgMjMzLCAxNDApO1xyXG4kYmFja2dyb3VuZEltZzogXCIuL2JhY2tncm91bmQucG5nXCI7XHJcbiJdfQ== */"

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

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a>\r\n    <nav>\r\n      <ul>\r\n        <li><a routerLink=\"/\">Home</a></li>\r\n        <li><a routerLink=\"/new\">Draw</a></li>\r\n        <li><a routerLink=\"/about\">About</a></li>\r\n        <li><a routerLink=\"/contact\">Contact</a></li>\r\n        <li><a *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">Login</a></li>\r\n        <li><a *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">Logout</a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/partials/nav/nav.component.scss":
/*!*************************************************!*\
  !*** ./src/app/partials/nav/nav.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: white; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #effffd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvbmF2L0c6XFxwYXljaHhcXERSSVMvc3JjXFxhcHBcXHBhcnRpYWxzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBO0VBRHJCO0lBSVEsaUJBQWlCLEVBQUE7RUFKekI7SUFRUSxtQkFBbUIsRUFBQTtFQVIzQjtNQVdZLHFCQUFxQjtNQUNyQixTQUFTO01BQUUsVUFBVSxFQUFBO0VBWmpDO1FBZWdCLFdBQVcsRUFBQTtFQWYzQjtVQWtCb0IsY0FBYztVQUNkLHlCQUF5QjtVQUN6QixlQUFlLEVBQUE7RUFwQm5DO1lBdUJ3QixtQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgIFxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzksIDI1NSwgMjUzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = __webpack_require__(/*! G:\paychx\DRIS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map