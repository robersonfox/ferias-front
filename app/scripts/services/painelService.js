'use strict';

angular.module('app').service('painelService', function ($http, $cookies) {
    return {
        sGet: function (callback) {
            $http.get('/rest/ferias')
                .then(
                    function (data) {
                        alert()
                        callback(data);
                    },
                    function (data) {
                        callback(data);
                    }
                )
        }
    }
});
