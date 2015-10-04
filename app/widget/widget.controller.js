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
    controller.widget.color = '';
    controller.deleteWidget = deleteWidget;
    controller.startCreate = startCreate;
    controller.startEdit = startEdit;
    controller.upsert = doCreate;
    controller.cancel = cancel;
    controller.getWidgets = getWidgets;
    controller.headline = '';
    controller.actionText = '';
    controller.errorMessage = '';
    controller.retry = false;
    controller.colors = ['red','purple','black','green','magenta','white','depends on the viewing angle'];

    function init() {
      controller.errorMessage = '';
      switch ($state.current.name) {
        case 'widget': {
          /* Listing widgets, call getWidgets to refresh from server */
          getWidgets();
          break;
        }
        case 'editWidget': {
          /* State param should have id of widget to edit */
          controller.widget.get($stateParams.id);
          /* Set headline to edit text */
          controller.headline = 'Edit Widget';
          controller.actionText = 'Save';
          controller.upsert = doEdit;
          break;
        }
        case 'createWidget': {
          controller.headline = 'Create Widget';
          controller.actionText = 'Create';
          controller.upsert = doCreate;
          break;
        }
      }
    }

    function getWidgets() {
      // Clear error message and retry button before attempt
      controller.retry = false;
      controller.errorMessage = '';
      // Data service returns a promise for the widgets
      return widgetDataservice.getAll().then(function(data) {
        controller.errorMessage = '';
        controller.widgets = data;
        return controller.widgets;
      }).catch(function(err) {
        // Show error message and retry button
        controller.errorMessage = '! Unable to load widgets from server !';
        controller.retry = true;
      });
    }

    function cancel() {
      $state.go('widget');
    }

    function doCreate() {
      controller.widget.create()
      .then(function() {
        $state.go('widget');
      })
      .catch(function() {
        controller.errorMessage = '! Error creating widget on server !';
      });
    }

    function doEdit() {
      controller.widget.update()
        .then(function() {
          $state.go('widget');
        })
        .catch(function() {
          controller.errorMessage = '! Error editing widget on server !';
        });
    }

    function startCreate() {
      $state.go('createWidget');
    }

    function startEdit(id) {
      $state.go('editWidget', {id: id});
    }

    function deleteWidget(widget) {
      widget.delete().success(getWidgets);
    }
    init();
  }
})();