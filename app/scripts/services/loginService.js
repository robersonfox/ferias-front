'use strinct';

angular.module('app').service('loginService', function($http) {
    return {
        sPost: function (login, callback) {
            $http.post('http://localhost:8080/login', login)
            .then(
                function(data) {
                    callback(data);
                },
                function(data) {
                    callback(data);
                }                
            )
        }
    }   
    
});
