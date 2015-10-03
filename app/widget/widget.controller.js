/**
 * Widget controller
 */

(function() {
	'use strict';

	angular
		.module('app.widget')
		.controller('WidgetController', WidgetController);
	WidgetController.$inject = ['widgetDataservice', '$state', '$stateParams'];
	function WidgetController(widgetDataservice, $state, $stateParams) {
		var controller = this;
		controller.widgets = [];
		controller.widget = new widgetDataservice.Widget();
		controller.deleteWidget = deleteWidget;
		controller.startCreate = startCreate;
		controller.startEdit = startEdit;
		controller.upsert = doCreate;
		controller.cancel = cancel;
		controller.headline = "";
		controller.actionText = "";

		function init() {
			switch($state.current.name) {
				case 'widget':
					//listing widgets, call getWidgets to refresh from server
					getWidgets();
					break;
				case 'editWidget':
					//state param should have id of widget to edit
					controller.widget.get($stateParams.id);
					// set headline to edit text
					controller.headline = "Edit Widget"; 
					controller.actionText = "Save";
					controller.upsert = doEdit;
					break;
				case 'createWidget':
					controller.headline = "Create Widget";
					controller.actionText = "Create";
					controller.upsert = doCreate;
					break;
			}
		}

		function getWidgets() {
			// data service returns a promise for the widgets
			return widgetDataservice.getAll().then(function (data) {
				controller.widgets = data;
				return controller.widgets;
			})
		}

		function cancel() {
			$state.go('widget');
		}

		function doCreate() {
			controller.widget.create().success(function() {
				$state.go('widget');
			});
		}

		function doEdit() {
			controller.widget.update().success(function () {
				$state.go('widget');
			});
		}

		function startCreate() {
			$state.go('createWidget');
		}

		function startEdit(id) {
			$state.go('editWidget', {id:id});
		}

		function deleteWidget(widget) {
			widget.delete().success(getWidgets);
		}
		init();
	}
})();