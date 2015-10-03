/**
 * User controller
 */

(function() {
	'use strict';

	angular
		.module('app.user')
		.controller('UserController', UserController);
	UserController.$inject = ['userDataservice', '$state', '$stateParams'];

	function UserController(userDataservice, $state, $stateParams) {
		var controller = this;
		controller.user = new userDataservice.User();
		controller.users = [];
		controller.back = back;
		controller.startView = startView;

		function init() {
			switch($state.current.name) {
				case 'user':
					//listing users, call getUsers to refresh from server
					getUsers();
					break;
				case 'viewUser':
					//state param should have id of user to view
					controller.user.get($stateParams.id);
					break;
			}
		}

		function back() {
			$state.go('user');
		}

		function startView(id) {
			$state.go('viewUser', {id:id});
		}

		function getUsers() {
			// data service returns a promise for the users
			return userDataservice.getAll().then(function (data) {
				controller.users = data;
				return controller.users;
			});
		}

		init();
	}
})();