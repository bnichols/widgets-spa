var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var config = require('./gulpconfig');

/**
 * analyze code using jshint and jscs
 */
gulp.task('analyze', function() {
	log('Running JSHint and JSCS on js');

	return gulp
		.src(config.js)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish', {verbose:true}))
		.pipe(plugins.jshint.reporter('fail'))
		.pipe(plugins.jscs())
		.pipe(plugins.jscs.reporter());
});

/** 
 * list gulp tasks
 */
gulp.task('help', plugins.taskListing);

/**
 * make help the default task
 */
gulp.task('default', ['help']);

/**
 * Log message in gray
 * @param {string} message to be logged
 */
function log(msg) {
  plugins.util.log(plugins.util.colors.gray(msg));
}
