/**
 * Widget controller
 */

(function() {
	'use strict';

	angular
		.module('app.widget')
		.controller('WidgetController', WidgetController);
	WidgetController.$inject = ['dataservice'];
	function WidgetController(dataservice) {
		var widget = this;
		widget.widgets = [];

		function getWidgets() {
			// data service returns a promise for the widgets
			return dataservice.getWidgets().then(function (data) {
				widget.widgets = data;
				return widget.widgets;
			})
		}
		
		getWidgets();
	}
})();