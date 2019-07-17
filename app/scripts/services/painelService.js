'use strict';

angular.module('app').service('painelService', function ($http) {
    return {
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
