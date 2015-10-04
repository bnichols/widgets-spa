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
    dash.userErrorMessage = '';
    dash.widgetErrorMessage = '';
    dash.userRetry = false;
    dash.widgetRetry = false;
    dash.getUsers = getUsers; // expose getUsers for retry
    dash.getWidgets = getWidgets; // expose getWidgets for retry

    function getUsers() {
      // Reset user error message and retry button
      dash.userErrorMessage = '';
      dash.userRetry = false;
      /* Data service returns a promise for the users */
      return userDataservice.getAll()
        .then(function(data) {
          dash.users = data;
          return dash.users;
        })
        .catch(function(err) {
          dash.userErrorMessage = '! Unable to load users from server !';
          dash.userRetry = true;
        });
    }

    function getWidgets() {
      // Reset widget error message and retry button
      dash.widgetErrorMessage = '';
      dash.widgetRetry = false;
      /* Data service returns a promise for the widgets */
      return widgetDataservice.getAll()
        .then(function(data) {
          dash.widgets = data;
          return dash.widgets;
        })
        .catch(function(err) {
          dash.widgetErrorMessage = '! Unable to load widgets from server !';
          dash.widgetRetry = true;
        });
    }

    getUsers();
    getWidgets();
  }
})();