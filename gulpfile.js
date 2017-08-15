"use strict";

var gulp  = require("gulp");
var gutil = require("gulp-util");

var helpers = require("./gulp-helpers");

gulp.task("test", function() {
    return helpers.log.success("Gulp is working!");
});

gulp.task("default", [ "test" ]);
