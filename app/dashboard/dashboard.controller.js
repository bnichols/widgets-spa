/**
 * Dashboard controller
 */

(function() {
	'use strict';

	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);
	DashboardController.$inject = ['dataservice'];

	function DashboardController(dataservice) {
		var dash = this;
		dash.users = [];
		dash.widgets = [];

		function getUsers() {
			// data service returns a promise for the users
      return dataservice.getUsers().then(function (data) {
      	dash.users = data;
      	return dash.users;
	  	});
    }

    function getWidgets() {
    	// data service returns a promise for the widgets
    	return dataservice.getWidgets().then(function (data) {
    		dash.widgets = data;
    		return dash.widgets;
    	});
    }

		getUsers();
		getWidgets();
	}
})();