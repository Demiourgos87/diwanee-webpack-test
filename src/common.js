// ----- Main app file

var $ = require('jquery');

// ----- Path to main SCSS file
var css = require('./scss/style.scss');

// ----- Require modules here
var navigation = require('./js/navigation/navigation.js');

// ----- Call modules here
$(document).ready(function() {
    navigation();
});
