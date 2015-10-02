/**
 * Widget controller
 */

(function() {
	angular
		.module('app.widget')
		.controller('WidgetController', WidgetController);
	WidgetController.$inject = ['dataservice'];
	function WidgetController(dataservice) {
		var widget = this;
		widget.widgets = [];

		function getWidgets() {
			return dataservice.getWidgets().then(function (data) {
				widget.widgets = data;
				return widget.widgets;
			})
		}
		
		getWidgets();
	}
})();