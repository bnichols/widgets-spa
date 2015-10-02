/**
 * Common dataservice factory
 */

(function () {
	'use strict';

	angular
		.module('app')
		.factory('userDataservice', function($http, $q) {
			var service = {
				getUsers: getUsers
			};
			return service;

			function getUsers() {
				return $http.get('http://spa.tglrw.com:4000/users')
					.then(function(response){return response.data})
					.catch(function(e){return e});
			}
		});
})();