"use strict";

let exec = require("exec-chainable");

let gulp = require("gulp");
let gutil = require("gulp-util");

let helpers = require("./gulp-helpers");

gulp.task("createVirtualenv", () => {
    helpers.log.info("Attempting to create virtualenv..");
    return exec("virtualenv pelican-website/virtualenv")
        .then( () => {
            helpers.log.success("virtualenv created!");

            helpers.log.info("Attempting to install virtualenv requirements..");
            return exec(require.resolve("./pelican-website/virtualenv/Scripts/pip.exe") + " install -r " + "./requirements.txt")
                .then( () => {
                    helpers.log.info("Requirements installed!!");
                });
        });
});

gulp.task("test", () => { return helpers.log.success("Gulp is working!"); });

gulp.task("default", [ "test" ]);
