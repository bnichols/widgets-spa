/**
 * Common widget dataservice factory
 */

(function() {
  'use strict';

  angular
    .module('app')
    .factory('widgetDataservice', function($http, $q) {
      var url = 'http://spa.tglrw.com:4000/widgets';

      var service = {
        getAll: getAll,
        Widget: Widget,
      };

      /**
       * Retrieve all widgets
       * @return {list} widget objects
       */
      function getAll() {
        return $http.get(url)
          .then(function(response) {
            /* Convert list to Widget objects so they have the
            prototype methods */
            var widgets = [];
            for (var widgetIndex in response.data) {
              widgets.push(new Widget(response.data[widgetIndex]));
            }
          return widgets;})
        .catch(function(e) {
          throw e;}
        );
      }

      /**
       * Widget constructor
       * @param {object} widget attributes
       */
      function Widget(data) {
        /* Intialize melts to false */
        this.melts = 'false';
        if (data) {
          this.setData(data);
        }
      }

      Widget.prototype = {
        setData: function(data) {
          angular.extend(this, data);
        },
        get: function(id) {
          var self = this;
          $http.get(url + '/' + id).success(function(data) {
            self.setData(data);
          });
        },
        create: function() {
          console.log(this);
          console.log(JSON.stringify(this));
          return $http.post(url, JSON.stringify(this));
        },
        update: function() {
          return $http.put(url + '/' + this.id, JSON.stringify(this));
        },
        delete: function() {
          $http.delete(url + '/' + this.id);
        },
      };
      return service;
    });
})();