var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var config = require('./gulpconfig');

/** 
 * list gulp tasks
 */
gulp.task('help', plugins.taskListing);

/**
 * make help the default task
 */
gulp.task('default', ['help']);