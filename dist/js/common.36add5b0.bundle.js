webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

var $ = __webpack_require__(0);

// ----- Path to main SCSS file
var css = __webpack_require__(2);

// ----- Require modules here
var navigation = __webpack_require__(4);

// ----- Call modules here
$(document).ready(function () {
    navigation();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main navigation

var $ = __webpack_require__(0);

module.exports = function () {
    var $burgerTrigger = $('.b-header__burger'),
        $mobileNav = $('.c-navigation__mob'),
        windowWidth = $(window).outerWidth();

    if (windowWidth < 1025) {
        $burgerTrigger.on('click', function () {
            $mobileNav.slideToggle(300);
        });
    }
};

/***/ })
],[1]);