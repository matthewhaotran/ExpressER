(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('twilioFactory', twilioFactory)

    twilioFactory.$inject = ['$http'];

    function twilioFactory($http) {
        var service = {
            sendText: sendText
        };

        return service;

        function sendText(number) { 
             return $http.post('/api/twilio/sendMessage', number)
            .then(res => res.data);
        }

    }
})();
