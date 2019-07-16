'use strict';

angular.module('app')
.controller('MainCtrl', ['$scope', 'loginService', '$cookies',
  function ($scope, loginService, $cookies) {
    $scope.app = [];
    $scope.app.message = '';

    $scope.logar = function (l) {

      loginService.sPost(l, function (data) {
        l.login = '';
        l.senha = '';

        if (data && data.status != 200) {
          $scope.app.message =  'Você não está autorizado!';
        } else {
          $cookies.put('Tokiuz', 'Token ' + data.data.Tokiuz); 

          window.location.href = '/#!/painel'
        }
      });
    }
  }]);
