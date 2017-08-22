"use strict";

let gutil = require("gulp-util");

let logger = {
    success: (text) => { gutil.log(gutil.colors.white.bgGreen(text)); },
    info: (text) => { gutil.log(gutil.colors.white.bgBlue(text)); },
    fail: (text) =>  { gutil.log(gutil.colors.white.bgRed(text)); }
};

exports.log = logger;
