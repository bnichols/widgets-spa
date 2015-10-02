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

	  	function getAll() {
				return $http.get(url)
					.then(function(response){
						var widgets = [];
						for (var widgetIndex in response.data) {
							widgets.push(new Widget(response.data[widgetIndex]));
						}
						return widgets})
					.catch(function(e){return e});
			}

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
  				$http.post(url, this);
  			}, 
  			update: function() {
  				$http.put(url, this);
  			},
  			delete: function() {
  				$http.delete(url + '/' + this.id);
  			}
  		}
	  	return service;
  	});
})();