(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory'];

    function PatientInfoController($stateParams, $state, patientFactory) {
        var vm = this;
        vm.createPatient = createPatient;

        activate();

        

        function activate() {}

        function createPatient(patient) {
            patientFactory
                .create(patient)
                .then(function(patient) {
                    vm.patient = patient;
                    alert('patient added!');
                });
        }

    }
})();
