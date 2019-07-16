'use strict';

angular.module('app').controller('PainelCtrl', ['$scope', 'painelService', function ($scope, painelService) {
    $scope.app = [];
    $scope.app.message = '';

    $scope.init = function () {
        painelService.sGet(function(data) {
            console.log(data)
        })
    }
  }]);
