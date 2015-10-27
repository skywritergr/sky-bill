'use strict';

/**
 * @ngdoc overview
 * @name skyBillApp
 * @description
 * # skyBillApp
 *
 * Main module of the application.
 */
angular
  .module('skyBillApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          data: function ($q, $http) {
            var deferred = $q.defer();
            $http({method: 'GET', url: 'https://still-scrubland-9880.herokuapp.com/bill.json'}).then(function(data) {
              //After successfully getting the bill, send the response to the user.
              deferred.resolve(data);
            }, function(reason){
              //If the bill is not found let the user know.
              deferred.resolve({'data' : {'error' : true, 'errorMsg' : reason}});
            });
            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
