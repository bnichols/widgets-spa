module.exports = (function() {

  var wiredep = require('wiredep');
  var bowerFiles = wiredep({devDependencies: true})['js'];

  var config = {
    // file paths
    js: './app/**/*.js',
    build: './build/',
    htmlTemplates: './app/**/*.html',
    images: './assets/img/*.*',
    index: './app/index.html',
    karma: {
      files: [].concat(
        bowerFiles,
        './app/app.js',
        './app/config.js',
        './app/**/*.module.js',
        './app/**/*.js'
      ),
      exclude: []
    }
  }
  return config;
})();