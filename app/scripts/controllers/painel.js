'use strict';

angular.module('app').controller('PainelCtrl', ['$scope', 'painelService', function ($scope, painelService) {
    $scope.app = [];
    $scope.app.message = '';
    $scope.app.menu = [0, 1, 0];

    $scope.ferias = [];
    $scope.ferias.sairPeriodo = 1;
    $scope.funcionarios = [];

    $scope.init = function () {}

    $scope.getAllFuncionarios = function() {
        painelService.getAllFuncionarios((data) => {
            if (data && data.status == 200) {
                $scope.funcionarios = data.data;
            } else {
                $scope.app.message =  'Não foi possível carregar a listagem. ' + data.data.error; 
            }
        })
    }

    $scope.getAllFerias = function () {
        painelService.getAllFerias(function (data) {
            if (data && data.data)
                $scope.ferias = data.data
            else
                $scope.app.message =  'Não foi possível carregar a listagem. ' + data.data.error; 

        })
    }

    $scope.funcionarioSairaoFerias = (p) => {
        debugger
        p = p == null ? 1 : p;

        painelService.funcionarioSairaoFerias(p, (data) => {
            if (data && data.status == 200) {
                $scope.funcionariosAusentesEm = data.data;
            }
        })
    }

    $scope.alternaMenu = function (m) {
        for (var int = 0; int < $scope.app.menu.length; int++) {
            $scope.app.menu[int] = 0;
        }

        $scope.app.menu[m] = 1;
    }

    $scope.removerFerias = function(ferias) {
        var c = confirm('Tem certeza que deseja remover esse período de férias?');

        if (c) {
            painelService.deleteFerias(ferias, function(data){
                debugger
                if(data && data.status == 200) {
                    $scope.getAllFerias();
                    $scope.app.message =  'Removido com sucesso!';
                } else {
                    $scope.app.message =  'Erro ao tentar remover o registro. ' + data.data.error; 
                }
            })
        }
    }
}]);
