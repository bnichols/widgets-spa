/**
 * Common dataservice factory
 */
(function() {
  'use strict';

  angular
    .module('app')
    .factory('userDataservice', function($http, $q) {
      var url = 'http://spa.tglrw.com:4000/users';
      var service = {
        getAll: getAll,
        User: User,
      };

      /**
       * Retrieve all users
       * @return {list} user objects
       */
      function getAll() {
        return $http.get(url)
          .then(function(response) {
            var users = [];
            for (var userIndex in response.data) {
              users.push(new User(response.data[userIndex]));
            }
          return users;})
        .catch(function(e) {throw e;});
      }

      /**
       * User constructor
       * @param {object} widget attributes
       */
      function User(data) {
        if (data) {
          this.setData(data);
        }
      }

      User.prototype = {
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
          $http.post(url, this);
        },
        update: function() {
          return $http.put(url + '/' + this.id, this);
        },
        delete: function() {
          $http.delete(url + '/' + this.id);
        },
      };
      return service;
    });
})();