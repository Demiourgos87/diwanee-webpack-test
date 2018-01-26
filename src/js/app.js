// ----- Main app file

var $ = require('jquery');
window.app = {};

// ----- Path to main SCSS file
var css = require('../scss/style.scss');

// ----- Require modules here
var navigation = require('./navigation/navigation.js');

// ----- Call modules here
$(document).ready(function() {
    navigation();
});
