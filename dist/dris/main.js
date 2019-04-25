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
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");
/* harmony import */ var _user_save_history_save_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/save-history/save-history.component */ "./src/app/user/save-history/save-history.component.ts");










//import { LoginComponent } from './core/auth/login/login.component';
var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'new', component: _core_visualize_template_template_component__WEBPACK_IMPORTED_MODULE_7__["TemplateComponent"] },
    { path: 'visualize', component: _core_visualize_visualize_component__WEBPACK_IMPORTED_MODULE_6__["VisualizeComponent"] },
    { path: 'callback', component: _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_8__["CallbackComponent"] },
    { path: 'history', component: _user_save_history_save_history_component__WEBPACK_IMPORTED_MODULE_9__["SaveHistoryComponent"] },
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
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, storage) {
        this.auth = auth;
        this.title = 'DRIS';
        auth.handleAuth();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.auth.renewToken();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
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
/* harmony import */ var _core_auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/auth/profile/profile.component */ "./src/app/core/auth/profile/profile.component.ts");
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");
/* harmony import */ var _user_save_history_save_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/save-history/save-history.component */ "./src/app/user/save-history/save-history.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_consume_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/consume/api.service */ "./src/app/core/consume/api.service.ts");
/* harmony import */ var _core_consume_visual_generate_visual_generate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/consume/visual-generate/visual-generate.component */ "./src/app/core/consume/visual-generate/visual-generate.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");











// Authentication service






// Charting service







// Firebase


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
                _core_visualize_template_prevchart_prevchart_component__WEBPACK_IMPORTED_MODULE_16__["PrevchartComponent"],
                _core_auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_19__["CallbackComponent"],
                _user_save_history_save_history_component__WEBPACK_IMPORTED_MODULE_20__["SaveHistoryComponent"],
                _core_consume_visual_generate_visual_generate_component__WEBPACK_IMPORTED_MODULE_23__["VisualGenerateComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_17__["GoogleChartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp({
                    provider: false,
                    firebase: { apiKey: "AIzaSyAhY7PHvOAZmAPjVXaFz3oT_6CRNHlVJbg",
                        authDomain: "paychex-c1894.firebaseapp.com",
                        databaseURL: "https://paychex-c1894.firebaseio.com",
                        projectId: "paychex-c1894",
                        storageBucket: "paychex-c1894.appspot.com",
                        messagingSenderId: "348557116375"
                    }
                }),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__["AngularFireStorageModule"],
            ],
            providers: [
                _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_11__["AuthServService"],
                _core_consume_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"],
                {
                    provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__["StorageBucket"],
                    useValue: 'paychex-c1894.appspot.com'
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.config */ "./src/app/core/auth/auth.config.ts");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../env.config */ "./src/app/core/env.config.ts");







var AuthServService = /** @class */ (function () {
    function AuthServService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this._auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_5__["WebAuth"]({
            clientID: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].CLIENT_ID,
            domain: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].CLIENT_DOMAIN,
            responseType: 'token',
            redirectUri: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].REDIRECT,
            audience: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].AUDIENCE,
            scope: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].SCOPE
        });
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.loggedIn);
        // If app auth token is not expired, request new token
        if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
            this.renewToken();
        }
    }
    AuthServService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthServService.prototype.login = function () {
        // Auth0 authorize request
        this._auth0.authorize();
    };
    AuthServService.prototype.handleAuth = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this._auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                console.error("Error authenticating: " + err.error);
            }
            _this.router.navigate(['/']);
        });
    };
    AuthServService.prototype._getProfile = function (authResult) {
        var _this = this;
        this.loggingIn = true;
        // Use access token to retrieve user's profile and set session
        this._auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
            else if (err) {
                console.warn("Error retrieving profile: " + err.error);
            }
        });
    };
    AuthServService.prototype._setSession = function (authResult, profile) {
        this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
        // Store expiration in local storage to access in constructor
        localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        // Update login status in loggedIn$ stream
        this.setLoggedIn(true);
        this.loggingIn = false;
    };
    AuthServService.prototype._clearExpiration = function () {
        // Remove token expiration from localStorage
        localStorage.removeItem('expires_at');
    };
    AuthServService.prototype.logout = function () {
        // Remove data from localStorage
        this._clearExpiration();
        // End Auth0 authentication session
        this._auth0.logout({
            clientId: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].CLIENT_ID,
            returnTo: _env_config__WEBPACK_IMPORTED_MODULE_6__["ENV"].BASE_URI
        });
    };
    Object.defineProperty(AuthServService.prototype, "tokenValid", {
        get: function () {
            // Check if current time is past access token's expiration
            return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
        },
        enumerable: true,
        configurable: true
    });
    AuthServService.prototype.renewToken = function () {
        var _this = this;
        // Check for valid Auth0 session
        this._auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken) {
                _this._getProfile(authResult);
            }
            else {
                _this._clearExpiration();
            }
        });
    };
    AuthServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthServService);
    return AuthServService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.config.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/auth.config.ts ***!
  \******************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../env.config */ "./src/app/core/env.config.ts");
// Configuration file for AuthServService

var AUTH_CONFIG = {
    CLIENT_ID: 'wey99dpsWpGBeQ76ZRzz0KrJRXbvoPE8',
    CLIENT_DOMAIN: 'dris0.auth0.com',
    AUDIENCE: 'https://dris0.auth0.com/api/v2/',
    REDIRECT: _env_config__WEBPACK_IMPORTED_MODULE_0__["ENV"].BASE_URI + "/callback",
    SCOPE: 'openid profile read:messages write:messages'
};


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

/***/ "./src/app/core/auth/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/auth/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- User profile -->\n\n<div>\n  <div>\n    <h3>Profile</h3>\n  </div>\n  <div>\n    Nickname <h4>{{profile?.nickname}}</h4>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/auth/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/auth/profile/profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/auth/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // if (this.auth.userProfile) {
        //   this.profile = this.auth.userProfile;
        // } else {
        //   this.auth._getProfile((err, profile) => {
        //     this.profile = profile;
        //   });
        // }
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/core/auth/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/auth/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/consume/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/consume/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../env.config */ "./src/app/core/env.config.ts");







var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    Object.defineProperty(ApiService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + this.auth.accessToken;
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.postVisual$ = function (visual) {
        var _this = this;
        console.log((visual));
        return this.http
            .post(_env_config__WEBPACK_IMPORTED_MODULE_6__["ENV"].BASE_API + "save", visual, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this._handleError(error); }));
    };
    // Get list of all visualizations
    ApiService.prototype.getVisualizations$ = function () {
        var _this = this;
        return this.http
            .get(_env_config__WEBPACK_IMPORTED_MODULE_6__["ENV"].BASE_API + "visualizations/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this._handleError(error); }));
    };
    // Get list of current user's visualizations
    ApiService.prototype.getMyVisualizations$ = function () {
        var _this = this;
        return this.http
            .get(_env_config__WEBPACK_IMPORTED_MODULE_6__["ENV"].BASE_API + "myvisual", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this._authHeader)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return _this._handleError(error); }));
    };
    ApiService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
            this.auth.login();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMsg);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_3__["AuthServService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/consume/visual-generate/visual-generate.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/consume/visual-generate/visual-generate.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  visual-generate works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/consume/visual-generate/visual-generate.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/consume/visual-generate/visual-generate.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29uc3VtZS92aXN1YWwtZ2VuZXJhdGUvdmlzdWFsLWdlbmVyYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/consume/visual-generate/visual-generate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/consume/visual-generate/visual-generate.component.ts ***!
  \***************************************************************************/
/*! exports provided: VisualGenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualGenerateComponent", function() { return VisualGenerateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visualize_data_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../visualize/data-driver.service */ "./src/app/core/visualize/data-driver.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_sankey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-sankey */ "./node_modules/d3-sankey/src/index.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../api.service */ "./src/app/core/consume/api.service.ts");
/* harmony import */ var _dbase_server_visualization_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../dbase/server/visualization.model */ "./src/app/core/dbase/server/visualization.model.ts");
/* harmony import */ var _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







// Authentication and Database handling




// Storage
var VisualGenerateComponent = /** @class */ (function () {
    function VisualGenerateComponent(receivedData, router, api, auth, http) {
        this.receivedData = receivedData;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.http = http;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]()
            .domain([])
            .range([]);
        this.width = 1200;
        this.height = 600;
    }
    // Key handler for shortcuts
    VisualGenerateComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
            this.quickSave();
        }
        // @ts-ignore
        if (event.ctrlKey && (event.keyCode == 18) && event.keyCode == 83) {
            // TODO: Save to cloud
        }
    };
    VisualGenerateComponent.prototype.ngOnInit = function () {
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
    VisualGenerateComponent.prototype.saveSvg = function (diagram, name) {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), name, { backgroundColor: '#FFFFFF' });
    };
    VisualGenerateComponent.prototype.drawChart = function () {
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
    // QuickSave
    // Press CTRL + SHIFT + S to save
    VisualGenerateComponent.prototype.quickSave = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), 'save.png', { backgroundColor: '#FFFFFF', encoderOptions: 1 });
    };
    // Saving functions
    VisualGenerateComponent.prototype.getImgUrl = function () {
        return "https://desktopluxury.com/";
    };
    // Save URI of Sankey image to cloud
    VisualGenerateComponent.prototype.getUri = function () {
        var imgUri;
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.svgAsDataUri(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), {}, function (uri) {
            imgUri = uri.toString();
        });
        return imgUri;
    };
    // Submitting data to database
    VisualGenerateComponent.prototype._uploadVisualization = function () {
        console.log("request made");
        var visualData = new _dbase_server_visualization_model__WEBPACK_IMPORTED_MODULE_8__["VisualizationModel"]('Test', this.getUri(), this.getImgUrl(), new Date(), 'google-oauth2|111260364297332924329');
        console.log(visualData);
        // this.api.postVisual$(visualData)
        //   .subscribe(
        //     data => console.log(data),
        //     err => console.log(err)
        //   );
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], VisualGenerateComponent.prototype, "handleKeyboardEvent", null);
    VisualGenerateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visual-generate',
            template: __webpack_require__(/*! ./visual-generate.component.html */ "./src/app/core/consume/visual-generate/visual-generate.component.html"),
            styles: [__webpack_require__(/*! ./visual-generate.component.scss */ "./src/app/core/consume/visual-generate/visual-generate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_visualize_data_driver_service__WEBPACK_IMPORTED_MODULE_3__["DataDriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_9__["AuthServService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], VisualGenerateComponent);
    return VisualGenerateComponent;
}());



/***/ }),

/***/ "./src/app/core/dbase/server/visualization.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/dbase/server/visualization.model.ts ***!
  \**********************************************************/
/*! exports provided: VisualizationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationModel", function() { return VisualizationModel; });
var VisualizationModel = /** @class */ (function () {
    function VisualizationModel(title, uri, imgUrl, createDate, userId) {
        this.title = title;
        this.uri = uri;
        this.imgUrl = imgUrl;
        this.createDate = createDate;
        this.userId = userId;
    }
    return VisualizationModel;
}());



/***/ }),

/***/ "./src/app/core/env.config.ts":
/*!************************************!*\
  !*** ./src/app/core/env.config.ts ***!
  \************************************/
/*! exports provided: ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
// This is an environment configuration file
var _isDev = window.location.port.indexOf('4200') > -1;
var getHost = function () {
    var protocol = window.location.protocol;
    var host = window.location.host;
    return protocol + "//" + host;
};
var apiURI = _isDev ? 'http://localhost:8083/api/' : "/api/";
var ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI
};


/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n    <textarea #textData (keyup.enter)=\"keyPressed($event)\" spellcheck=\"false\" contenteditable=\"true\" name=\"\" id=\"chartInput\" cols=\"30\" rows=\"25\" placeholder=\"{{'Source, Destination, Value'}}\"></textarea>\n    <textarea #uniqueInputs (keyup.enter)=\"colorSelect($event, textData.value)\" spellcheck=\"false\" contenteditable=\"false\" name=\"\" id=\"colorSelect\" cols=\"2\" rows=\"10\" placeholder=\"{{'Node,\\tColor'}}\" value=\"domain,rage\"></textarea>\n    <button (click)=\"visualize(textData.value)\">Visualize Now</button>\n    <button (click)=\"newMessage(textData.value)\">Check Visual</button>\n</section>\n"

/***/ }),

/***/ "./src/app/core/visualize/chart/chart.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/visualize/chart/chart.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 0;\n  margin: 0; }\n\n#chartInput {\n  width: 70%;\n  min-height: 100%;\n  resize: none;\n  margin-top: 20em; }\n\n#colorSelect {\n  width: 25%;\n  height: 20vh;\n  resize: none;\n  float: right;\n  margin-top: 20em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR2I7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gSW1wb3J0aW5nIGdsb2JhbCB2YXJpYWJsZXNcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9tYXN0ZXJWYXJpYWJsZXMuc2Nzc1wiO1xuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NoYXJ0SW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjBlbTtcbn1cblxuI2NvbG9yU2VsZWN0IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwZW07XG59XG4iXX0= */"

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
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_4___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_5__["select"]('svg').node(), 'save.png', { backgroundColor: '#FFFFFF', encoderOptions: 1, scale: 2 });
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

module.exports = "<div>\n        <svg id=\"sankey\" height=\"270\" width=\"450\"></svg>\n</div>\n"

/***/ }),

/***/ "./src/app/core/visualize/template/prevchart/prevchart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/visualize/template/prevchart/prevchart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sankey {\n  padding: 2px;\n  margin: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS9wcmV2Y2hhcnQvcHJldmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlzdWFsaXplL3RlbXBsYXRlL3ByZXZjaGFydC9wcmV2Y2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2Fua2V5IHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luOiAxcHg7XG59Il19 */"

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

module.exports = "\n<aside>\n    <a href=\"/\" routerLink=\"/\" title=\"Home\">DRIS</a>\n    <a href=\"/\" routerLink=\"/\" title=\"Home\"><i class=\"material-icons\">home</i></a>\n    <a href=\"/new\" routerLink=\"/new\" title=\"Current Visualizations\"><i class=\"material-icons\">show_chart</i></a>\n    <a href=\"\" routerLink=\"/history\" title=\"Previous Visualizations\"><i class=\"material-icons\">history</i></a>\n    <a href=\"\" title=\"Settings\"><i class=\"material-icons\">settings</i></a>\n    <a href=\"\" title=\"Instructions\"><i class=\"material-icons\">help</i></a>\n</aside>\n\n"

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
        // if (this.auth.userProfile) {
        //   this.profile = this.auth.userProfile;
        // } else {
        //   this.auth._getProfile((err, profile) => {
        //     this.profile = profile;
        //   });
        // }
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

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 5px; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\napp-chart {\n  grid-column-start: 2;\n  grid-column-end: 9;\n  grid-row: 1; }\n\napp-prevchart {\n  background-color: rgba(224, 218, 218, 0.4);\n  height: 360px;\n  width: 460px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFRLGtCQUFrQixFQUFBOztBQUMxQjtFQUFRLGdCQUFnQixFQUFBOztBQUV4QjtFQUNJLGFBQWE7RUFHYixzQ0FBc0M7RUFDdEMsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBRVgsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gU2lkZWJhciBjb250cm9sXG5cbmFzaWRlIHsgZ3JpZC1hcmVhOiBzaWRlYmFyOyB9XG5hc2lkZSB7IGdyaWQtYXJlYTogY2hhcnQ7IH1cblxuZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAvLyAgICAnYXBwLXNpZGViYXIgYXBwLXNpZGViYXIgYXBwLWNoYXJ0IGFwcC1jaGFydCBhcHAtY2hhcnQnO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiA1cHg7XG59XG5cbmFwcC1zaWRlYmFyIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcblxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5hcHAtY2hhcnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogOTtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuYXBwLXByZXZjaGFydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIxOCwgMjE4LCAwLjQpO1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDQ2MHB4XG59XG5cblxuIl19 */"

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

module.exports = "\n<!--\n  This file contains (website-address.tdl/new):\n    1. Visualized Sankey\n-->\n<div>\n  <p id=\"error\">{{redirectErr}}</p>\n  <app-sidebar></app-sidebar>\n  <div class=\"container\">\n    <svg #downloadSankey id=\"sankey\" width=\"800\" height=\"600\" style=\"background-color: white;\"></svg>\n  </div>\n  <button id=\"saveButton\" (click)=\"saveSvg(downloadSankey,'test.jpg')\" style=\"height:20px\">Save Chart</button>\n  <button  (click)=\"_uploadVisualization()\" style=\"height:20px\">Upload Chart</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/visualize/visualize.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/visualize/visualize.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  grid-area: sidebar; }\n\naside {\n  grid-area: chart; }\n\ndiv {\n  display: grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-gap: 2px;\n  padding-right: 1px;\n  max-height: 100vh; }\n\napp-sidebar {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  padding: 0; }\n\ndiv {\n  background-color: white; }\n\n.container {\n  padding-top: 2em;\n  padding-right: 3em; }\n\n#saveButton {\n  grid-column: 10;\n  grid-row: 1; }\n\n#sankey {\n  grid-column: 1;\n  grid-row: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9jb3JlL3Zpc3VhbGl6ZS92aXN1YWxpemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBUSxrQkFBa0IsRUFBQTs7QUFDMUI7RUFBUSxnQkFBZ0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhO0VBR2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFFWCxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBSWY7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aXN1YWxpemUvdmlzdWFsaXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBTaWRlYmFyIGNvbnRyb2xcblxuYXNpZGUgeyBncmlkLWFyZWE6IHNpZGViYXI7IH1cbmFzaWRlIHsgZ3JpZC1hcmVhOiBjaGFydDsgfVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLy9ncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIC8vICAgICdhcHAtc2lkZWJhciBhcHAtc2lkZWJhciBhcHAtY2hhcnQgYXBwLWNoYXJ0IGFwcC1jaGFydCc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSk7XG4gICAgZ3JpZC1nYXA6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1zaWRlYmFyIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcblxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuI3NhdmVCdXR0b24ge1xuICAgIGdyaWQtY29sdW1uOiAxMDtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLy8gU2Fua2V5IHN0eWxlc1xuI3NhbmtleSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG59XG4iXX0= */"

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
/* harmony import */ var _core_consume_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/consume/api.service */ "./src/app/core/consume/api.service.ts");
/* harmony import */ var _core_dbase_server_visualization_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/dbase/server/visualization.model */ "./src/app/core/dbase/server/visualization.model.ts");
/* harmony import */ var _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");







// Authentication and Database handling




// Storage

var VisualizeComponent = /** @class */ (function () {
    function VisualizeComponent(receivedData, router, api, auth, http, storage) {
        this.receivedData = receivedData;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.http = http;
        this.storage = storage;
        this.colors = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]()
            .domain([])
            .range([]);
        this.width = 1200;
        this.height = 600;
    }
    // Key handler for shortcuts
    VisualizeComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
            this.quickSave();
        }
        // @ts-ignore
        if (event.ctrlKey && (event.keyCode == 18) && event.keyCode == 83) {
            // TODO: Save to cloud
        }
    };
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
        // Initialize firebase
        // TODO Delete
        var file = this.getUri().then(function (data) { return data; });
        console.log(file);
        var ref = this.storage.ref('images');
        ref.putString(file);
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
    // QuickSave
    // Press CTRL + SHIFT + S to save
    VisualizeComponent.prototype.quickSave = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.saveSvgAsPng(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), 'save.png', { backgroundColor: '#FFFFFF', encoderOptions: 1 });
    };
    // Saving functions
    VisualizeComponent.prototype.getImgUrl = function () {
        return "https://desktopluxury.com/";
    };
    // Save URI of Sankey image to cloud
    VisualizeComponent.prototype.getUri = function () {
        return save_svg_as_png__WEBPACK_IMPORTED_MODULE_6___default.a.svgAsDataUri(d3__WEBPACK_IMPORTED_MODULE_4__["select"]('svg').node(), {}, function (uri) {
            return uri;
        });
    };
    // Storage handling
    VisualizeComponent.prototype._makeStorageConnection = function () {
    };
    // Submitting data to database
    VisualizeComponent.prototype._uploadVisualization = function () {
        var visualData = new _core_dbase_server_visualization_model__WEBPACK_IMPORTED_MODULE_8__["VisualizationModel"]('Test', this.getUri().then((function (val) { console.log(val); })), this.getImgUrl(), new Date(), 'google-oauth2|111260364297332924329');
        console.log(visualData);
        this.api.postVisual$(visualData)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], VisualizeComponent.prototype, "handleKeyboardEvent", null);
    VisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualize',
            template: __webpack_require__(/*! ./visualize.component.html */ "./src/app/core/visualize/visualize.component.html"),
            styles: [__webpack_require__(/*! ./visualize.component.scss */ "./src/app/core/visualize/visualize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_driver_service__WEBPACK_IMPORTED_MODULE_3__["DataDriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_consume_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_9__["AuthServService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]])
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

module.exports = "<!--\n  This file contains:\n  1. Menubar\n-->\n\n<!-- Menubar starts -->\n<app-nav></app-nav>"

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

/***/ "./src/app/pages/callback/callback.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/callback/callback.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Loading...\n</p>\n"

/***/ }),

/***/ "./src/app/pages/callback/callback.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/callback/callback.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/callback/callback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/callback/callback.component.ts ***!
  \******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
        auth.handleAuth();
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/pages/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.scss */ "./src/app/pages/callback/callback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  This file contains:\n  1. Menubar\n-->\n\n<!-- Menubar starts -->\n<app-nav></app-nav>"

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

module.exports = "<!--\n  This file contains:\n  1. Menubar\n  2. Homepage top section\n-->\n\n<!-- Menubar starts -->\n<app-nav></app-nav>\n\n<!-- Homepage top section starts -->\n<div class=\"home-section\">\n  <h1>Welcome to DRIS</h1>\n  <p>DRIS, <em>or Drawing Really Interesting Sankey</em>, lets you create powerful Sankey visualizations for every need!</p>\n  <button routerLink=\"/new\">Visualize Now</button>\n</div>\n<div class=\"example-section\">\n  <svg _ngcontent-naj-c7=\"\" height=\"400\" id=\"canvas\" style=\"margin: auto auto;\" width=\"90%\"><g class=\"links\" fill=\"none\" stroke-opacity=\"0.2\"><path d=\"M16,169.75254090635508C204.25,169.75254090635508,204.25,181.1612272770926,392.5,181.1612272770926\" stroke-width=\"163.71428571428572\" style=\"stroke: url(&quot;#gradient0&quot;);\"><title>CollegePCs → Windows\n  200</title></path><path d=\"M16,430.0667824248723C204.25,430.0667824248723,204.25,426.7326558485212,392.5,426.7326558485212\" stroke-width=\"327.42857142857144\" style=\"stroke: url(&quot;#gradient1&quot;);\"><title>SchoolPCs → Windows\n  400</title></path><path d=\"M16,46.96682662064079C400,46.96682662064079,400,41.92857142857131,784,41.92857142857131\" stroke-width=\"81.85714285714286\" style=\"stroke: url(&quot;#gradient2&quot;);\"><title>CollegePCs → Mac\n  100</title></path><path d=\"M407.5,242.55408441994973C595.75,242.55408441994973,595.75,236.10714285714275,784,236.10714285714275\" stroke-width=\"286.5\" style=\"stroke: url(&quot;#gradient3&quot;);\"><title>Windows → Windows10\n  350</title></path><path d=\"M407.5,488.1255129913783C595.75,488.1255129913783,595.75,491.67857142857133,784,491.67857142857133\" stroke-width=\"204.64285714285717\" style=\"stroke: url(&quot;#gradient4&quot;);\"><title>Windows → Linux\n  250</title></path></g><g class=\"nodes\" font-family=\"sans-serif\" font-size=\"18\"><g><rect x=\"1\" y=\"6.038255192069354\" height=\"245.5714285714286\" width=\"15\" fill=\"#BD4512\"></rect><text x=\"22\" y=\"128.82396947778366\" dy=\"0.35em\" text-anchor=\"start\">CollegePCs [300]</text><title>CollegePCs\n  300</title></g><g><rect x=\"392.5\" y=\"99.30408441994973\" height=\"491.1428571428571\" width=\"15\" fill=\"#35F956\"></rect><text x=\"413.5\" y=\"344.8755129913783\" dy=\"0.35em\" text-anchor=\"start\">Windows [600]</text><title>Windows\n  600</title></g><g><rect x=\"1\" y=\"266.3524967105866\" height=\"327.42857142857144\" width=\"15\" fill=\"#AEA59A\"></rect><text x=\"22\" y=\"430.0667824248723\" dy=\"0.35em\" text-anchor=\"start\">SchoolPCs [400]</text><title>SchoolPCs\n  400</title></g><g><rect x=\"784\" y=\"0.9999999999998779\" height=\"81.85714285714288\" width=\"15\" fill=\"#876507\"></rect><text x=\"778\" y=\"41.92857142857131\" dy=\"0.35em\" text-anchor=\"end\">Mac [100]</text><title>Mac\n  100</title></g><g><rect x=\"784\" y=\"92.85714285714275\" height=\"286.5\" width=\"15\" fill=\"#222538\"></rect><text x=\"778\" y=\"236.10714285714278\" dy=\"0.35em\" text-anchor=\"end\">Windows10 [350]</text><title>Windows10\n  350</title></g><g><rect x=\"784\" y=\"389.3571428571428\" height=\"204.64285714285722\" width=\"15\" fill=\"#5478A4\"></rect><text x=\"778\" y=\"491.6785714285714\" dy=\"0.35em\" text-anchor=\"end\">Linux [250]</text><title>Linux\n  250</title></g></g><defs><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"gradient0\"><stop offset=\"10%\" stop-color=\"#BD4512\"></stop><stop offset=\"90%\" stop-color=\"#35F956\"></stop></linearGradient><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"gradient1\"><stop offset=\"10%\" stop-color=\"#AEA59A\"></stop><stop offset=\"90%\" stop-color=\"#35F956\"></stop></linearGradient><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"gradient2\"><stop offset=\"10%\" stop-color=\"#BD4512\"></stop><stop offset=\"90%\" stop-color=\"#876507\"></stop></linearGradient><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"gradient3\"><stop offset=\"10%\" stop-color=\"#35F956\"></stop><stop offset=\"90%\" stop-color=\"#222538\"></stop></linearGradient><linearGradient gradientUnits=\"userSpaceOnUse\" id=\"gradient4\"><stop offset=\"10%\" stop-color=\"#35F956\"></stop><stop offset=\"90%\" stop-color=\"#5478A4\"></stop></linearGradient></defs></svg>\n\n  <div>\n      <h2>Draw Sankey</h2>\n    </div>\n</div>\n\n<!-- Homepage top section ends -->\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-section {\n  height: 38%;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding-top: 2vh; }\n  .home-section h1 {\n    margin: 0; }\n  .example-section {\n  height: 47%;\n  width: 100%;\n  padding: 1em;\n  margin-top: 0;\n  margin: auto auto;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  display: grid;\n  grid-column: svg;\n    grid-column-float: left; }\n  button {\n  background: #65e98c;\n  color: #fff;\n  border: none;\n  position: relative;\n  height: 60px;\n  font-size: 1.6em;\n  padding: 0 2em;\n  margin-top: 20px;\n  cursor: pointer;\n  transition: 800ms ease all;\n  outline: none; }\n  button:hover {\n    background: rgba(255, 245, 245, 0.8);\n    color: #65e98c; }\n  button:before, button:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 2px;\n    width: 0;\n    background: #65e98c;\n    transition: 400ms ease all; }\n  button:after {\n    right: inherit;\n    top: inherit;\n    left: 0;\n    bottom: 0; }\n  button:hover:before, button:hover:after {\n    width: 100%;\n    transition: 800ms ease all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvcnVuL21lZGlhL2thYWxpL05FVyBWT0xVTUUvUGF5Y2hleC9EUklTL3NyYy9tYXN0ZXJWYXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTtFQUxwQjtJQVNRLFNBQVMsRUFBQTtFQUtqQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsZ0JBRUc7SUFDQyx1QkFBVyxFQUFBO0VBU25CO0VBQ0ksbUJDeEM0QjtFRHlDNUIsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLGFBQVksRUFBQTtFQVhoQjtJQWNRLG9DQUFtQztJQUNuQyxjQ3REd0IsRUFBQTtFRHVDaEM7SUFrQlEsV0FBVTtJQUNWLGtCQUFpQjtJQUNqQixNQUFLO0lBQ0wsUUFBTztJQUNQLFdBQVU7SUFDVixRQUFPO0lBQ1AsbUJDL0R3QjtJRGdFeEIsMEJBQXlCLEVBQUE7RUF6QmpDO0lBNEJRLGNBQWE7SUFDYixZQUFXO0lBQ1gsT0FBTTtJQUNOLFNBQVEsRUFBQTtFQS9CaEI7SUFrQ1EsV0FBVTtJQUNWLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJbXBvcnRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuQGltcG9ydCBcIi4uLy4uLy4uL21hc3RlclZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIEhvbWUgc2VjdGlvblxuLmhvbWUtc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAzOCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xuXG4gICAgLy8gVG9wIGhlYWRpbmdcbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiA0NyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiBcblxuICAgIHN2ZyB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuLy8gRGVzaWduaW5nIHRoZSBidXR0b25cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiRtYXN0ZXJDb2xvcjtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDo2MHB4O1xuICAgIGZvbnQtc2l6ZToxLjZlbTtcbiAgICBwYWRkaW5nOjAgMmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjo4MDBtcyBlYXNlIGFsbDtcbiAgICBvdXRsaW5lOm5vbmU7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNDUsIDI0NSwgMC44KTs7XG4gICAgICAgIGNvbG9yOiRtYXN0ZXJDb2xvcjtcbiAgICB9XG4gICAgJjpiZWZvcmUsJjphZnRlcntcbiAgICAgICAgY29udGVudDonJztcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBoZWlnaHQ6MnB4O1xuICAgICAgICB3aWR0aDowO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbWFzdGVyQ29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246NDAwbXMgZWFzZSBhbGw7XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICAgIHJpZ2h0OmluaGVyaXQ7XG4gICAgICAgIHRvcDppbmhlcml0O1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgIH1cbiAgICAmOmhvdmVyOmJlZm9yZSwmOmhvdmVyOmFmdGVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOjgwMG1zIGVhc2UgYWxsO1xuICAgIH1cbn1cbiAgIiwiLy8gTWFzdGVyIGNvbG9ycyBoZXJlXG4kbWFzdGVyQ29sb3I6IHJnYigxMDEsIDIzMywgMTQwKTtcbiRiYWNrZ3JvdW5kSW1nOiBcIi4vYmFja2dyb3VuZC5wbmdcIjtcbiJdfQ== */"

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
        // @ts-ignore
        new Vivus('canvas', { start: 'autostart', type: 'delayed', duration: 150, animTimingFunction: Vivus.EASE }, function (car) {
            setTimeout(function () { car.reset().play(); }, 3000);
        });
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

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/\">Home</a></li>\n        <li><a routerLink=\"/new\">Draw</a></li>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/contact\">Contact</a></li>\n        <li><a *ngIf=\"!auth.loggedIn\" (click)=\"auth.login()\">Login</a></li>\n        <li><a *ngIf=\"auth.loggedIn\" (click)=\"auth.logout()\">Logout</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>"

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
/* harmony import */ var _core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/auth/auth-serv.service */ "./src/app/core/auth/auth-serv.service.ts");



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_serv_service__WEBPACK_IMPORTED_MODULE_2__["AuthServService"]])
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

/***/ "./src/app/user/save-history/save-history.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/save-history/save-history.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-sidebar></app-sidebar>\n\n  <div>\n\n    <ul>\n      <li class=\"item\" *ngFor=\"let item of visualizationsList\">\n        <h4>ID: {{item._id}}</h4>\n        <img src=\"{{item.imgUrl}}\" alt=\"\">\n        <p>{{item.createDate}}</p>\n        <a href=\"{{item.uri}}\"><button>Download</button></a>\n      </li>\n    </ul>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/save-history/save-history.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/save-history/save-history.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-color: rgba(232, 233, 232, 0.349);\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  top: 0; }\n  div div {\n    max-height: 100vh;\n    padding: 0;\n    margin: 0;\n    top: 0; }\n  div div ul {\n      max-height: 100vh;\n      padding: 0;\n      margin: 0;\n      top: 0; }\n  app-sidebar {\n  float: left;\n  margin: 0;\n  padding-top: 0;\n  padding-left: 0;\n  padding-right: 4em;\n  top: 0; }\n  .item {\n  max-width: 60%;\n  height: 200px;\n  padding: 2em; }\n  .item img {\n    width: 20%;\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ydW4vbWVkaWEva2FhbGkvTkVXIFZPTFVNRS9QYXljaGV4L0RSSVMvc3JjL2FwcC91c2VyL3NhdmUtaGlzdG9yeS9zYXZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1QsTUFBTSxFQUFBO0VBTFY7SUFRUSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7SUFDVCxNQUFNLEVBQUE7RUFYZDtNQWFZLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsU0FBUztNQUNULE1BQU0sRUFBQTtFQUtsQjtFQUNJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTSxFQUFBO0VBR1Y7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUhoQjtJQU1RLFVBQVU7SUFDVixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NhdmUtaGlzdG9yeS9zYXZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIzMywgMjMyLCAwLjM0OSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0b3A6IDA7XG5cbiAgICBkaXYge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXBwLXNpZGViYXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogNGVtO1xuICAgIHRvcDogMDtcbn1cblxuLml0ZW0ge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMmVtO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/save-history/save-history.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/save-history/save-history.component.ts ***!
  \*************************************************************/
/*! exports provided: SaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveHistoryComponent", function() { return SaveHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_consume_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/consume/api.service */ "./src/app/core/consume/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var SaveHistoryComponent = /** @class */ (function () {
    function SaveHistoryComponent(title, api) {
        this.title = title;
        this.api = api;
    }
    SaveHistoryComponent.prototype.ngOnInit = function () {
        this.title.setTitle("Previous Visualizations");
        this._getEventList();
    };
    SaveHistoryComponent.prototype._getEventList = function () {
        var _this = this;
        // Get visualizations
        this.VisualizationListSub = this.api
            .getVisualizations$()
            .subscribe(function (res) {
            _this.visualizationsList = res;
        }, function (err) {
            console.error(err);
            _this.error = true;
        });
    };
    SaveHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-history',
            template: __webpack_require__(/*! ./save-history.component.html */ "./src/app/user/save-history/save-history.component.html"),
            styles: [__webpack_require__(/*! ./save-history.component.scss */ "./src/app/user/save-history/save-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _core_consume_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SaveHistoryComponent);
    return SaveHistoryComponent;
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