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

module.exports = "<!-- Pages -->\n\n<!-- Navbar starts -->\n<app-nav></app-nav>\n<!-- Navbar starts -->\n\n<!-- Page render starts -->\n<router-outlet></router-outlet>\n<!-- Page render ends -->\n\n<!-- TODO: Footer -->\n"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'dris';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _partials_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/nav/nav.component */ "./src/app/partials/nav/nav.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/visualize/visualize.component */ "./src/app/core/visualize/visualize.component.ts");
/* harmony import */ var _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth/login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/visualize/template/template.component */ "./src/app/core/visualize/template/template.component.ts");
/* harmony import */ var _core_visualize_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/visualize/template/sidebar/sidebar.component */ "./src/app/core/visualize/template/sidebar/sidebar.component.ts");
/* harmony import */ var _core_visualize_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/visualize/chart/chart.component */ "./src/app/core/visualize/chart/chart.component.ts");










// Authentication service





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _partials_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_9__["VisualizeComponent"],
                _core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_12__["TemplateComponent"],
                _core_visualize_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _core_visualize_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_10__["AuthServService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n<div id=\"inputChart\">\n  <h3>\n    Generate Sankey\n  </h3>\n  <div id=\"form\">\n    <textarea name=\"\" id=\"\" cols=\"60\" rows=\"20\"></textarea>\n    <button onclick=\"drawGChart()\">Generate Sankey</button>\n    <div id=\"sankeyDraw\"></div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form textarea {\n  font-size: 16px; }\n\n#form textarea, #form button {\n  margin: auto;\n  width: 100%; }\n\n#form button {\n  background: #65e98c;\n  color: #fff;\n  border: none;\n  position: relative;\n  height: 50px;\n  font-size: 1.3em;\n  padding: 0 2em;\n  margin-top: 20px;\n  cursor: pointer;\n  transition: 800ms ease all;\n  outline: none; }\n\n#form button:hover {\n    background: rgba(255, 245, 245, 0.8);\n    color: #65e98c; }\n\n#form button:before, #form button:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 2px;\n    width: 0;\n    background: #65e98c;\n    transition: 400ms ease all; }\n\n#form button:after {\n    right: inherit;\n    top: inherit;\n    left: 0;\n    bottom: 0; }\n\n#form button:hover:before, #form button:hover:after {\n    width: 100%;\n    transition: 800ms ease all; }\n\n#inputChart {\n  margin: auto;\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL21hc3RlclZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBRVEsZUFBZSxFQUFBOztBQUZ2QjtFQU1RLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBUG5CO0VBWVEsbUJDaEJ3QjtFRGlCeEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLGFBQVksRUFBQTs7QUF0QnBCO0lBeUJZLG9DQUFtQztJQUNuQyxjQzlCb0IsRUFBQTs7QURJaEM7SUE2QlksV0FBVTtJQUNWLGtCQUFpQjtJQUNqQixNQUFLO0lBQ0wsUUFBTztJQUNQLFdBQVU7SUFDVixRQUFPO0lBQ1AsbUJDdkNvQjtJRHdDcEIsMEJBQXlCLEVBQUE7O0FBcENyQztJQXVDWSxjQUFhO0lBQ2IsWUFBVztJQUNYLE9BQU07SUFDTixTQUFRLEVBQUE7O0FBMUNwQjtJQTZDWSxXQUFVO0lBQ1YsMEJBQXlCLEVBQUE7O0FBTXJDO0VBQ0ksWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJbXBvcnRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XG5cblxuI2Zvcm0ge1xuICAgIHRleHRhcmVhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhLCBidXR0b24ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvLyBEZXNpZ25pbmcgdGhlIGJ1dHRvblxuICAgIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZDokbWFzdGVyQ29sb3I7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxLjNlbTtcbiAgICAgICAgcGFkZGluZzowIDJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246ODAwbXMgZWFzZSBhbGw7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcblxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjQ1LCAyNDUsIDAuOCk7O1xuICAgICAgICAgICAgY29sb3I6JG1hc3RlckNvbG9yO1xuICAgICAgICB9XG4gICAgICAgICY6YmVmb3JlLCY6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OicnO1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICBoZWlnaHQ6MnB4O1xuICAgICAgICAgICAgd2lkdGg6MDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtYXN0ZXJDb2xvcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246NDAwbXMgZWFzZSBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgIHJpZ2h0OmluaGVyaXQ7XG4gICAgICAgICAgICB0b3A6aW5oZXJpdDtcbiAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXI6YmVmb3JlLCY6aG92ZXI6YWZ0ZXJ7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjo4MDBtcyBlYXNlIGFsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG5cbiNpbnB1dENoYXJ0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbn0iLCIvLyBNYXN0ZXIgY29sb3JzIGhlcmVcbiRtYXN0ZXJDb2xvcjogcmdiKDEwMSwgMjMzLCAxNDApO1xuJGJhY2tncm91bmRJbWc6IFwiLi9iYWNrZ3JvdW5kLnBuZ1wiO1xuIl19 */"

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


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/core/visualize/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/core/visualize/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>ProfilePic</li>\n  <li *ngIf=\"profile\">Welcome, {{ profile?.nickname }}!</li>\n  <li *ngIf=\"!profile\">Welcome Visualizer!</li>\n  <li><a href=\"\">My Visualizations</a></li>\n  <li><a href=\"\">Instructions</a></li>\n  <li><a href=\"\">Settings</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/core/visualize/template/sidebar/sidebar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/visualize/template/sidebar/sidebar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  background-color: black;\n  color: white;\n  margin: 0;\n  padding: 0;\n  height: 91.7vh; }\n  ul li {\n    padding-top: 2em;\n    padding-left: 0.4em; }\n  ul li a {\n      text-decoration: none;\n      color: white; }\n  ul li a:hover {\n        color: #65e98c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvcnVuL21lZGlhL2thYWxpL05FVyBWT0xVTUUvUGF5Y2hleC9EUklTL3NyYy9tYXN0ZXJWYXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixjQUFjLEVBQUE7RUFMbEI7SUFPUSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFSM0I7TUFXWSxxQkFBcUI7TUFDckIsWUFBWSxFQUFBO0VBWnhCO1FBY2dCLGNDakJnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJbXBvcnRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XG5cbnVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA5MS43dmg7XG4gICAgbGkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRtYXN0ZXJDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBNYXN0ZXIgY29sb3JzIGhlcmVcbiRtYXN0ZXJDb2xvcjogcmdiKDEwMSwgMjMzLCAxNDApO1xuJGJhY2tncm91bmRJbWc6IFwiLi9iYWNrZ3JvdW5kLnBuZ1wiO1xuIl19 */"

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

module.exports = "\n<div>\n  <app-sidebar></app-sidebar>\n  <app-chart></app-chart>\n  <svg id=\"sankey\" width=\"300\" height=\"150\"></svg>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/visualize/template/template.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/visualize/template/template.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  padding-right: 10px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\napp-chart {\n  grid-column: 2/4;\n  grid-row: 1; }\n\n#sankey {\n  grid-column: 5;\n  grid-row: 1;\n  background-color: #e9ffef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFRLGtCQUFrQixFQUFBOztBQUMxQjtFQUFRLGdCQUFnQixFQUFBOztBQUV4QjtFQUNJLGFBQWE7RUFHYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBRVgsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUVYLHlCQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFNpZGViYXIgY29udHJvbFxuXG5hc2lkZSB7IGdyaWQtYXJlYTogc2lkZWJhcjsgfVxuYXNpZGUgeyBncmlkLWFyZWE6IGNoYXJ0OyB9XG5cbmRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvL2dyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgLy8gICAgJ2FwcC1zaWRlYmFyIGFwcC1zaWRlYmFyIGFwcC1jaGFydCBhcHAtY2hhcnQgYXBwLWNoYXJ0JztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuYXBwLXNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxO1xuXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmFwcC1jaGFydCB7XG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuI3NhbmtleSB7XG4gICAgZ3JpZC1jb2x1bW46IDU7XG4gICAgZ3JpZC1yb3c6IDE7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNTUsIDIzOSk7XG59XG5cblxuIl19 */"

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
/* harmony import */ var d3_sankey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-sankey */ "./node_modules/d3-sankey/src/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
        // ngOnInit() {
        // }
        this.width = 975;
        this.height = 600;
        this.data = d3__WEBPACK_IMPORTED_MODULE_3__["json"]("https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json");
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.DrawChart();
    };
    TemplateComponent.prototype.DrawChart = function () {
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#sankey"), width = +svg.attr("width"), height = +svg.attr("height");
        var formatNumber = d3__WEBPACK_IMPORTED_MODULE_3__["format"](",.0f"), format = function (d) { return formatNumber(d) + " TWh"; }, color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_3__["schemeCategory10"]);
        var sankey = d3_sankey__WEBPACK_IMPORTED_MODULE_2__["sankey"]()
            .nodeWidth(15)
            .nodePadding(10)
            .extent([[1, 1], [width - 1, height - 6]]);
        var link = svg.append("g")
            .attr("class", "links")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.2)
            .selectAll("path");
        var node = svg.append("g")
            .attr("class", "nodes")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .selectAll("g");
        //d3.json("./energy.json", function (error, energy: any) {
        //if (error) throw error;
        var energy = {
            nodes: [{
                    nodeId: 0,
                    name: "node0"
                }, {
                    nodeId: 1,
                    name: "node1"
                }, {
                    nodeId: 2,
                    name: "node2"
                }, {
                    nodeId: 3,
                    name: "node3"
                }, {
                    nodeId: 4,
                    name: "node4"
                }],
            links: [{
                    source: 0,
                    target: 2,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 1,
                    target: 2,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 1,
                    target: 3,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 0,
                    target: 4,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 2,
                    target: 3,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 2,
                    target: 4,
                    value: 2,
                    uom: 'Widget(s)'
                }, {
                    source: 3,
                    target: 4,
                    value: 4,
                    uom: 'Widget(s)'
                }]
        };
        sankey(energy);
        link = link
            .data(energy.links)
            .enter().append("path")
            .attr("d", d3_sankey__WEBPACK_IMPORTED_MODULE_2__["sankeyLinkHorizontal"]())
            .attr("stroke-width", function (d) { return Math.max(1, d.width); });
        link.append("title")
            .text(function (d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });
        node = node
            .data(energy.nodes)
            .enter().append("g");
        node.append("rect")
            .attr("x", function (d) { return d.x0; })
            .attr("y", function (d) { return d.y0; })
            .attr("height", function (d) { return d.y1 - d.y0; })
            .attr("width", function (d) { return d.x1 - d.x0; })
            .attr("fill", function (d) { return color(d.name.replace(/ .*/, "")); })
            .attr("stroke", "#000");
        node.append("text")
            .attr("x", function (d) { return d.x0 - 6; })
            .attr("y", function (d) { return (d.y1 + d.y0) / 2; })
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .text(function (d) { return d.name; })
            .filter(function (d) { return d.x0 < width / 2; })
            .attr("x", function (d) { return d.x1 + 6; })
            .attr("text-anchor", "start");
        node.append("title")
            .text(function (d) { return d.name + "\n" + format(d.value); });
        //});
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

module.exports = "\n<!--\n  This file contains (website-address.tdl/new):\n    1. Visualized Sankeyw\n-->\n<div>\n  <app-sidebar></app-sidebar>\n  <div id=\"sankey_basic\" style=\"width: 900px; height: 300px;\"></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/visualize/visualize.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  padding-right: 10px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\napp-chart {\n  grid-column: 2/4;\n  grid-row: 1; }\n\n#sankey {\n  grid-column: 5;\n  grid-row: 1;\n  background-color: #e9ffef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS92aXN1YWxpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBUSxrQkFBa0IsRUFBQTs7QUFDMUI7RUFBUSxnQkFBZ0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhO0VBR2IscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUVYLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFFWCx5QkFBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3Zpc3VhbGl6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gU2lkZWJhciBjb250cm9sXG5cbmFzaWRlIHsgZ3JpZC1hcmVhOiBzaWRlYmFyOyB9XG5hc2lkZSB7IGdyaWQtYXJlYTogY2hhcnQ7IH1cblxuZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAvLyAgICAnYXBwLXNpZGViYXIgYXBwLXNpZGViYXIgYXBwLWNoYXJ0IGFwcC1jaGFydCBhcHAtY2hhcnQnO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5hcHAtc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG5cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYXBwLWNoYXJ0IHtcbiAgICBncmlkLWNvbHVtbjogMi80O1xuICAgIGdyaWQtcm93OiAxO1xufVxuXG4jc2Fua2V5IHtcbiAgICBncmlkLWNvbHVtbjogNTtcbiAgICBncmlkLXJvdzogMTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDI1NSwgMjM5KTtcbn1cblxuXG4iXX0= */"

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


var VisualizeComponent = /** @class */ (function () {
    function VisualizeComponent() {
    }
    VisualizeComponent.prototype.ngOnInit = function () {
    };
    VisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualize',
            template: __webpack_require__(/*! ./visualize.component.html */ "./src/app/core/visualize/visualize.component.html"),
            styles: [__webpack_require__(/*! ./visualize.component.scss */ "./src/app/core/visualize/visualize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<!--\n  This file contains:\n  1. Homepage top section\n-->\n\n<!-- Homepage top section starts -->\n<div class=\"home-section\">\n  <h1>Welcome to DRIS</h1>\n  <p>DRIS, <em>or Drawing Really Interesting Sankey</em>, lets you create powerful Sankey visualizations for every need!</p>\n  <button routerLink=\"/new\">Visualize Now</button>\n</div>\n<!-- Homepage top section ends -->\n"

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