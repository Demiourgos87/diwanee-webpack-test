// ----- Main navigation

var $ = require('jquery');

module.exports = function() {
    var $burgerTrigger = $('.b-header__burger'),
        $mobileNav = $('.c-navigation__mob'),
        windowWidth = $(window).outerWidth();

    if (windowWidth < 1025) {
        $burgerTrigger.on('click', function() {
            $mobileNav.slideToggle(300);
        });
    }
};
