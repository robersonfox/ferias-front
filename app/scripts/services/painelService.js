'use strict';

angular.module('app').service('painelService', function ($http, $cookies,) {
    var token = $cookies.get('Tokiuz');
    // $http.defaults.headers.common['Authorization'] = 'Basic ' + token;
    debugger

    return {
        sGet: function (callback) {

            
            $http({
                url : "http://localhost:8080/rest/ferias",
                method : 'GET',
                headers : {
                      'Content-Type' : 'application/json',    
                      'Authorization': token
                      }
                }).success(function(data){
                    callback(data);
                }).error(function(data){
                    callback(data);
                })
        }
    }
});
