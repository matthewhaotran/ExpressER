(function () {
    'use strict';

    angular
        .module('app.emergencyContact')
        .controller('EmergencyContactController', EmergencyContactController);

    EmergencyContactController.$inject = ['$stateParams', '$state', 'patientFactory'];

    function EmergencyContactController($stateParams, $state, patientFactory) {
        var vm = this;
        


        activate();

        ////////////////

        function activate() {
                patientFactory
                    .getById($stateParams.id)
                    .then(function (patient) {
                        vm.patient = patient;
                    });

        }


    }
})();
