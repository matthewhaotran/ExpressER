(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('patientFactory', patientFactory);

    patientFactory.$inject = ['$http'];
    function patientFactory($http) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();
