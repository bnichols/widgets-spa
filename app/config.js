(function() {
  'use strict';

  /**
   * Configure routes for the app
   */
  angular.module('app').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // Application routes
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'dashboard/dashboard.html'
        })
        .state('user', {
          url: '/user',
          templateUrl: 'user/user.html'
        })
        .state('widget', {
          url: '/widget',
          templateUrl: 'widget/widget.html'
        });

      // If route isn't matched
      $urlRouterProvider.otherwise('/');
    }
  ]);
})();
