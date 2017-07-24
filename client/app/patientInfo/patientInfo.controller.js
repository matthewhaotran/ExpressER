(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory', 'insuranceFactory'];

    function PatientInfoController($stateParams, $state, patientFactory, insuranceFactory) {
        var vm = this;

        vm.save = save;

        //activate();

        

        //function activate() {}

        function save(patient, insurance){
            patientFactory
                .create(patient)
                .then(function(patient){
                    const patientId = patient.id;
                    const insuranceInfo = {
                        'companyName': insurance.companyName,
                        'insuranceNumber': insurance.insuranceNumber,
                        'patientId': patient.id
                    };

                    return insuranceFactory.create(insuranceInfo);
                })
                .then(function(insurance) {
                    $state.go('emergencyContact', {id: patient.id});
                });            
        }

    }
})();


