(function () {
	'use strict';

	angular
		.module('app')
		.factory('dataservice', function($http, $q) {
			var service = {
				getUsers: getUsers,
				getWidgets: getWidgets
			};
			return service;

			function getUsers() {
				return $http.get('http://spa.tglrw.com:4000/users')
					.then(function(response){return response.data})
					.catch(function(e){return e});
			}

			function getWidgets() {
				return $http.get('http://spa.tglrw.com:4000/widgets')
					.then(function(response){return response.data})
					.catch(function(e){return e});
			}
		});
})();