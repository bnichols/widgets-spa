var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var config = require('./gulpconfig');
var del = require('del');

/**
 * serve the app
 */
gulp.task('serve', function() {
	plugins.nodemon()
		.on('start', function() {
			plugins.util.log('*** nodemon started ***');
		})
		.on('crash', function() {
			plugins.util.log('*** nodemon crashed ***');
		})
		.on('exit', function() {
			plugins.util.log('*** nodemon clean exit ***');
		});
});

/** 
 * list gulp tasks
 */
gulp.task('help', plugins.taskListing);

/**
 * make help the default task
 */
gulp.task('default', ['help']);