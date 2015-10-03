/**
 * App config
 */

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
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardController as dashboardController'
        })
        .state('user', {
          url: '/user',
          templateUrl: 'user/user.html',
          controller: 'UserController as userController'
        })
        .state('widget', {
          url: '/widget',
          templateUrl: 'widget/widget.html',
          controller: 'WidgetController as widgetController'
        })
        .state('createWidget', {
        	url: '/widget/create',
        	templateUrl: 'widget/widget-single.html',
        	controller: 'WidgetController as widgetController'
        })
        .state('editWidget', {
        	url: '/widget/edit/:id',
        	templateUrl: 'widget/widget-single.html',
        	controller: 'WidgetController as widgetController'
        })
        .state('viewUser', {
        	url: '/user/view/:id',
        	templateUrl: 'user/user-single.html',
        	controller: 'UserController as userController'
        })

      // If route isn't matched
      $urlRouterProvider.otherwise('/');
    }
  ]);
})();
