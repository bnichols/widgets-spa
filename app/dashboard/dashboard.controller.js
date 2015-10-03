/**
 * Dashboard controller
 */

(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
  DashboardController.$inject = ['userDataservice', 'widgetDataservice'];

  function DashboardController(userDataservice, widgetDataservice) {
    var dash = this;
    dash.users = [];
    dash.widgets = [];

    function getUsers() {
      /* Data service returns a promise for the users */
      return userDataservice.getAll().then(function(data) {
        dash.users = data;
        return dash.users;
      });
    }

    function getWidgets() {
      /* Data service returns a promise for the widgets */
      return widgetDataservice.getAll().then(function(data) {
        dash.widgets = data;
        return dash.widgets;
      });
    }

    getUsers();
    getWidgets();
  }
})();