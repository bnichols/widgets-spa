/**
 * User controller
 */

(function() {
	'use strict';

	angular
		.module('app.user')
		.controller('UserController', UserController);

	function UserController() {
		var user = this;
		user.users = [{"id":"1","name":"Brent Nichols","avatarURL":"https://s.gravatar.com/avatar/92f8cd3318f64c07a367a76c0599dc12?s=48"},
			{"id":"2","name":"JBoss McHuston","avatarURL":"https://s.gravatar.com/avatar/e11550b1bf793d43639292b196374262?s=48"}];
	}
})();