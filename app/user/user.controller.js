/**
 * User controller
 */

(function() {
	'use strict';

	angular
		.module('app.user')
		.controller('UserController', UserController);
	UserController.$inject = ['userDataservice'];

	function UserController(userDataservice) {
		var user = this;
		user.users = [];

		function getUsers() {
			// data service returns a promise for the users
			return userDataservice.getUsers().then(function (data) {
				user.users = data;
				return user.users;
			});
		}

		getUsers();
	}
})();