/**
 * Dashboard controller
 */

(function() {
	'use strict';

	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);

	function DashboardController() {
		var dash = this;
		dash.widgets = [{"id":"1","name":"Widget A"},{"id":"2","name":"Widget B"}];
		dash.users = [{"id":"1","name":"Joe Bloggs"},{"id":"2","name":"Brent Nichols"},{"id":"3","name":"Thomas Hopkins"}];
	}
})();