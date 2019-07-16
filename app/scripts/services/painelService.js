'use strict';

angular.module('app').service('painelService', function ($http, $cookies) {
    var config = {
        headers: {
            'Authorization': $cookies.get('Tokiuz')
        }
    };

    return {
        sGet: function (callback) {
            debugger
            $http.get('localhost:8080/rest/ferias', config)
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
