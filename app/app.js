/**
 * App module
 */

(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'app.dashboard',
    'app.user',
    'app.widget',
  ]);
})();