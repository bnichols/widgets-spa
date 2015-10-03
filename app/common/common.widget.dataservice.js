/**
 * Common widget dataservice factory
 */

(function() {
  'use strict'
  
  angular
  	.module('app')
  	.factory('widgetDataservice', function($http, $q) {
  		var url = 'http://spa.tglrw.com:4000/widgets';

	  	var service = {
	  		getAll: getAll,
	  		Widget: Widget
	  	};

			/**
			 * Retrieve all widgets
			 * @return {list} widget objects
			 */
	  	function getAll() {
				return $http.get(url)
					.then(function(response){
						// convert list to Widget objects so they have the prototype methods
						var widgets = [];
						for (var widgetIndex in response.data) {
							widgets.push(new Widget(response.data[widgetIndex]));
						}
						return widgets})
					.catch(function(e){return e});
			}

			/**
			 * Widget constructor
			 * @param {object} widget attributes
			 */
  		function Widget(data) {
  			// intialize melts to false
  			this.melts = false;
  			if (data) {
  				this.setData(data);
  			}
  		};	

  		Widget.prototype = {
  			setData: function(data) {
  				angular.extend(this, data)
  			},
  			get: function(id) {
  				var self = this;
  				$http.get(url + '/' + id).success(function(data) {
  					self.setData(data);
  				});
  			}, 
  			create: function() {
  				return $http.post(url, this);
  			}, 
  			update: function() {
  				return $http.put(url + '/' + this.id, this);
  			},
  			delete: function() {
  				$http.delete(url + '/' + this.id);
  			}
  		}
	  	return service;
  	});
})();