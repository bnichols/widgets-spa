/**
 * User controller
 */

(function() {
	'use strict';

	angular
		.module('app.user')
		.controller('UserController', UserController);
	UserController.$inject = ['dataservice'];

	function UserController(dataservice) {
		var user = this;
		user.users = [];

		function getUsers() {
			// data service returns a promise for the users
			return dataservice.getUsers().then(function (data) {
				user.users = data;
				return user.users;
			});
		}

		getUsers();
	}
})();