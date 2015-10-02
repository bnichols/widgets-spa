/**
 * Widget controller
 */

(function() {
	'use strict';

	angular
		.module('app.widget')
		.controller('WidgetController', WidgetController);
	WidgetController.$inject = ['widgetDataservice'];
	function WidgetController(widgetDataservice) {
		var controller = this;
		controller.widgets = [];
		controller.newWidget = new widgetDataservice.Widget();
		controller.createWidget = createWidget;
		controller.deleteWidget = deleteWidget;

		function getWidgets() {
			// data service returns a promise for the widgets
			return widgetDataservice.getAll().then(function (data) {
				controller.widgets = data;
				return controller.widgets;
			})
		}

		function createWidget() {
			console.log(controller.newWidget);
			//controller.newWidget.create();
			getWidgets();
		}

		function deleteWidget(widget) {
			console.log(widget);
			widget.delete().success(getWidgets);
		}
		
		getWidgets();
	}
})();