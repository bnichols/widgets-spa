/**
 * Widget controller
 */

(function() {
	angular
		.module('app.widget')
		.controller('WidgetController', WidgetController);

	function WidgetController() {
		var widget = this;
		widget.widgets = [{"id":"1","name":"bar","color":"blue","price":"$99.50","melts":"no","inventory":"888"}];
	}
})();