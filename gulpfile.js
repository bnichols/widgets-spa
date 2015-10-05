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
 * run mocha tests
 */
gulp.task('test', ['analyze'], function(done) {
    startTests(true, done);
});

/**
 * Log message in gray
 * @param {string} message to be logged
 */
function log(msg) {
  plugins.util.log(plugins.util.colors.gray(msg));
}

/**
 * Run tests using karma
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 */
function startTests(singleRun, done) {
  var excludeFiles = [];
  var karma = require('karma').server;

  karma.start({
    configFile: __dirname + '/karmaconfig.js',
    exclude: excludeFiles,
    singleRun: !!singleRun
  }, karmaCompleted);

  function karmaCompleted(karmaResult) {
    log('Karma completed');
    if (karmaResult === 1) {
      done('karma: tests failed with code ' + karmaResult);
    } else {
      done();
    }
  }
}