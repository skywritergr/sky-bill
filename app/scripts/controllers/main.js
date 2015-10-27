'use strict';

/**
 * @ngdoc function
 * @name skyBillApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skyBillApp
 */
angular.module('skyBillApp')
  .controller('MainCtrl', function ($scope, $http, data) {
    $scope.billData = data.data; 
  });
