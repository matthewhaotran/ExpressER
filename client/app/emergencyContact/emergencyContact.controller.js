(function() {
    'use strict';

    angular
        .module('app.emergencyContact')
        .controller('EmergencyContactController', EmergencyContactController);

    EmergencyContactController.$inject = ['$stateParams','$state'];
    function EmergencyContactController($stateParams,$state) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();
