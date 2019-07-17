'use strinct';

angular.module('app').service('loginService', function($http) {
    return {
        sPost: function (login, callback) {
            debugger
            $http.post('/login', login)
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
