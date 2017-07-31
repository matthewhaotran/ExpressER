(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory', 'insuranceFactory'];

    function PatientInfoController($stateParams, $state, patientFactory, insuranceFactory) {
        var vm = this;
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
            return {
                abbrev: state
            };
        });

        vm.save = save;

        //activate();



        //function activate() {}

        function save(patient, insurance) {

                patientFactory
                    .create(patient)
                    .then(function (patient) {
                        const patientId = patient.id;
                        const insuranceInfo = {
                            'companyName': insurance.companyName,
                            'insuranceNumber': insurance.insuranceNumber,
                            'patientId': patient.id
                        };
                        return insuranceFactory.create(insuranceInfo);
                    })
                    .then(function (insurance) {
                        $state.go('emergencyContact', {
                            id: insurance.patientId
                        });
                    });
            
        }


    }
})();
