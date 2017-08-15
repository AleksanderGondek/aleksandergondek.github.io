"use strict";

var gutil = require("gulp-util");

var logger = {
    success: function(text) {
        gutil.log(gutil.colors.white.bgGreen(text));
    },
    info: function(text) {
        gutil.log(gutil.colors.white.bgBlue(text));
    },
    fail: function(text) {
        gutil.log(gutil.colors.white.bgRed(text));
    }
};

exports.log = logger;
