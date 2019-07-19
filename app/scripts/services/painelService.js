'use strict';

angular.module('app').service('painelService', function ($http) {
    return {

        getAllFuncionarios: (callback) => {
            $http.get('/rest/');
        },

        funcionarioSairaoFerias: (periodo, callback) => {
            $http.get('/rest/pessoa/sairaodeferias/' + periodo)
            .then(
                (data) => callback(data), 
                (err) => callback(err) 
            );
        },

        getAllFerias: function (callback) {
            $http.get('/rest/ferias')
                .then(
                    function (data) {
                        callback(data);
                    },
                    function (data) {
                        callback(data);
                    }
                )
        },

        deleteFerias: function(ferias, callback) {
            var url = '/rest/ferias/' + ferias.id;

            $http.delete(url)
            .then(
                function (data) {
                    callback(data);
                },
                function (data) {
                    callback(data);
                }
            )
        }
    }
});
