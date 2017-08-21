"use strict";

var exec = require("exec-chainable");

let gulp = require("gulp");
let gutil = require("gulp-util");

let helpers = require("./gulp-helpers");

gulp.task("createVirtualenv", function() {
    helpers.log.info("Attempting to create virtualenv..");
    return exec("virtualenv virtualenv").then(function() {
        helpers.log.success("virtualenv created!");
        helpers.log.info("Attempting to install virtualenv requirements..");
        return exec(require.resolve("./virtualenv/Scripts/pip.exe") + " install -r " + "./requirements.txt").then(function() {
            helpers.log.info("Requirements installed!!");
        });
    });
});

gulp.task("test", function() {
    return helpers.log.success("Gulp is working!");
});

gulp.task("default", [ "test" ]);
